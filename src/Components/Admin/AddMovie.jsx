

import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
// import { useHistory } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const schema = yup
  .object({
    title: yup.string().required(),
    description: yup.string().required(),
    releaseDate: yup.date().required(),
    genre: yup.string().required(),
    category: yup.string().required(),
    cast: yup.string(),
    avgRating: yup.number(),
    language: yup.string().required(),
    director: yup.string().required(),
    image: yup.mixed().required(),
    trailerUrl: yup.string(),
  })
  .required();

export default function MovieAdd() {
  // const history = useHistory(); // Import useHistory hook
const navigate = useNavigate();
  const [movieData, setMovieData] = useState(null);
  const [useTmdb, setUseTmdb] = useState(false);
  const [tmdbId, setTmdbId] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [successAlert, setSuccessAlert] = useState(false);


  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const fetchMovieData = async () => {
    try {
      const apiKey = "3eb2571fe77e5474467b38d6ef773866"; // Replace with your TMDb API key
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${tmdbId}?api_key=${apiKey}&language=en-US&append_to_response=credits,videos`
      );

      setMovieData(response.data);

      // Fetch the image through the proxy server
      const imageUrl = `https://image.tmdb.org/t/p/w500${response.data.poster_path}`;
      const imageResponse = await axios.get(
        `http://localhost:3000/proxy/image?url=${encodeURIComponent(imageUrl)}`,
        { responseType: "arraybuffer" }
      );

      // Convert the image response to a Blob object
      const imageBlob = new Blob([imageResponse.data], {
        type: imageResponse.headers["content-type"],
      });

      // Create a File object from the Blob
      const imageFile = new File([imageBlob], "poster.jpg", {
        type: imageBlob.type,
      });

      // Add the image file to the form data
      setImageFile(imageFile);
      setValue("image", imageFile);
    } catch (error) {
      console.error("Error fetching movie data from TMDb:", error);
    }
  };

  useEffect(() => {
    if (movieData) {
      setValue("title", movieData.title);
      setValue("description", movieData.overview);
      setValue("releaseDate", movieData.release_date);
      setValue(
        "genre",
        movieData.genres.map((genre) => genre.name).join(", ")
      );
      setValue(
        "cast",
        movieData.credits.cast.map((actor) => actor.name).join(", ")
      );
      setValue("avgRating", movieData.vote_average);
      setValue("language", movieData.original_language);
      setValue(
        "director",
        movieData.credits.crew.find((member) => member.job === "Director")
          ?.name
      );
      setValue(
        "trailerUrl",
        movieData.videos.results.find((video) => video.type === "Trailer")
          ?.key
      );
    }
  }, [movieData, setValue]);

  

  const onSubmit = async (data) => {
    const token = sessionStorage.getItem("token");

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("genre", data.genre);
    formData.append("director", data.director);
    formData.append("cast", data.cast);
    formData.append("language", data.language);
    formData.append("avgRating", data.avgRating);
    formData.append("releaseDate", data.releaseDate);
    formData.append("category", data.category);
    formData.append("image", imageFile || data.image[0]);
    formData.append("trailerUrl", data.trailerUrl);

    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/admin/addmovie",
        formData,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },

        }
        
      );          setSuccessAlert(true);
       reset();
      setImageFile(null);

      console.log(res.data);
      navigate('/movie')

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center p-6 m-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-2 rounded-md border p-6"
      >
        <div className="flex items-center gap-4 p-2">
          <label>
            <input
              type="radio"
              name="mode"
              value="manual"
              checked={!useTmdb}
              onChange={() => setUseTmdb(false)}
            />
            Manual Entry
          </label>
          <label>
            <input
              type="radio"
              name="mode"
              value="tmdb"
              checked={useTmdb}
              onChange={() => setUseTmdb(true)}
            />
            Fetch from TMDb
          </label>
        </div>

        {useTmdb && (
          <div className="flex flex-col gap-y-2">
            <input
              type="text"
              placeholder="Enter TMDb ID"
              value={tmdbId}
              onChange={(e) => setTmdbId(e.target.value)}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={fetchMovieData}
              className="rounded-md bg-blue-500 py-1 text-white"
            >
              Fetch Movie Data
            </button>
          </div>
        )}

        {movieData && (
          <div className="flex flex-col gap-y-2">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
              alt={movieData.title}
              className="rounded-lg "
            />
          </div>
        )}

        <input
          {...register("title")}
          type="text"
          placeholder="Title"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.title && <p>{errors.title.message}</p>}
        <input
          {...register("description")}
          type="text"
          placeholder="Description"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.description && <p>{errors.description.message}</p>}
        <input
          {...register("genre")}
          type="text"
          placeholder="Genre"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.genre && <p>{errors.genre.message}</p>}

        {/* Category Dropdown */}
        <select
          {...register("category")}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="">Select Category</option>
          <option value="Popular">Popular</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
          <option value="Romance">Romance</option>
          <option value="Thriller">Thriller</option>
           <option value="Sci-Fi">Sci-Fi</option>
        </select>
        {errors.category && <p>{errors.category.message}</p>}

        {/* <input
          {...register("image")}
          type="file"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.image && <p>{errors.image.message}</p>}
        <input */}
        <input
  type="file"
  onChange={(e) => {
    const file = e.target.files[0];
    setValue("image", file);
    setImageFile(file);
  }}
  className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
/>
{errors.image && <p>{errors.image.message}</p>}
<input
          {...register("director")}
          type="text"
          placeholder="Director"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.director && <p>{errors.director.message}</p>}
        <input
          {...register("language")}
          type="text"
          placeholder="Language"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.language && <p>{errors.language.message}</p>}
        <input
          {...register("cast")}
          type="text"
          placeholder="Cast"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.cast && <p>{errors.cast.message}</p>}
        <input
          {...register("releaseDate")}
          type="text"
          placeholder="Release Date"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.releaseDate && <p>{errors.releaseDate.message}</p>}
        <input
          {...register("avgRating")}
          type="text"
          placeholder="Average Rating"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.avgRating && <p>{errors.avgRating.message}</p>}
        <input
          {...register("trailerUrl")}
          type="text"
          placeholder="Trailer URL"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.trailerUrl && <p>{errors.trailerUrl.message}</p>}
        <input
          type="submit"
          className="rounded-md bg-blue-500 py-1 text-white"
        />
      </form>
    </div>
  );
}

