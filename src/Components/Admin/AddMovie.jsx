// import { yupResolver } from "@hookform/resolvers/yup";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";

// const schema = yup
//   .object({
//     title: yup.string().required(),
//     description: yup.string().required(),
//     releaseDate:yup.date().required(),
//     genre: yup.string().required(),
//     cast: yup.string(),
//      avgRating: yup.number(),
//      languag: yup.string().required(),
//     director: yup.string().required(),
//     image: yup.mixed().required(),
  
//     trailerUrl:yup.string(),
    
//   })
//   .required();

// export default function MovieAdd() {
  
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({ resolver: yupResolver(schema) });

//   const onSubmit = async (data) => {
//     const token = sessionStorage.getItem("token");

//     const requestBody = {
//       title: data.title,
//       description: data.description,
//       genre: data.genre,
//       director: data.director,
//       cast:data.cast,
//       languag:data.languag,
//       avgRating:data.avgRating,
//       releaseDate:data.releaseDate,
//       image: data.image[0]
//     };
//     try {
//       const res = await axios.post(
//         "http://localhost:3000/api/v1/admin/addmovie",
//         requestBody,
//         {
//           withCredentials: true,
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "multipart/form-data",
//           },
//         },
//       );
//       console.log(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <div className="flex h-screen w-screen items-center justify-center ">
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="flex flex-col gap-y-2 rounded-md border p-6"
//       >
//         <input
//           {...register("title")}
//           type="text"
//           placeholder="title"
//           className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//         />
//         {errors.title && <p>{errors.title.message}</p>}
//         <input
//           {...register("description")}
//           type="text"
//           placeholder="description"
//           className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//         />
//         {errors.description && <p>{errors.description.message}</p>}
//         <input
//           {...register("genre")}
//           type="text"
//           placeholder="genre"
//           className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//         />
//         {errors.genre && <p>{errors.genre.message}</p>}
//         <input
//           {...register("image")}
//           type="file"
//           className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//         />
//         {errors.image && <p>{error.image.message}</p>}
//         <input
//           {...register("director")}
//           type="text"
//           placeholder="director"
//           className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//         />
//         {errors.director && <p>{errors.director.message}</p>}
//         <input
//           {...register("languag")}
//           type="text"
//           placeholder="languag"
//           className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//         />
//         {errors.languag && <p>{errors.languag.message}</p>}
//         <input
//           {...register("cast")}
//           type="text"
//           placeholder="cast"
//           className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//         />
//         {errors.cast && <p>{errors.cast.message}</p>}
//         <input
//           {...register("releaseDate")}
//           type="text"
//           placeholder="releaseDate"
//           className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//         />
//         {errors.releaseDate && <p>{errors.releaseDate.message}</p>}

//         {/* <select {...register("instructorEmail")}>
//           {instructors.map((instructor, index) => (
//             <option key={index} value={instructor.email}>
//               {instructor.email}
//             </option>
//           ))}
//         </select> */}
//         <input
//           {...register("avgRating")}
//           type="text"
//           placeholder="avgRatng"
//           className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//         />
//         {errors.avgRating && <p>{errors.avgRating.message}</p>}
//         <input
//           type="submit"
//           className="rounded-md bg-blue-500 py-1 text-white"
//         />
//       </form>
//     </div>
//   );
// }
// import { yupResolver } from "@hookform/resolvers/yup";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";

// const schema = yup
//   .object({
//     title: yup.string().required(),
//     description: yup.string().required(),
//     releaseDate: yup.date().required(),
//     genre: yup.string().required(),
//     cast: yup.string(),
//     avgRating: yup.number(),
//     languag: yup.string().required(),
//     director: yup.string().required(),
//     image: yup.mixed().required(),
//     trailerUrl: yup.string(),
//   })
//   .required();

// export default function MovieAdd() {
//   const [movieData, setMovieData] = useState(null);
//   const [useTmdb, setUseTmdb] = useState(false);
//   const [tmdbId, setTmdbId] = useState("");
  

//   const {
//     register,
//     handleSubmit,
//     setValue,
//     formState: { errors },
//   } = useForm({ resolver: yupResolver(schema) });

//   const fetchMovieData = async () => {
//     try {
//       const apiKey = "3eb2571fe77e5474467b38d6ef773866"; // Replace with your TMDb API key
//       const response = await axios.get(
//         `https://api.themoviedb.org/3/movie/${tmdbId}?api_key=${apiKey}&language=en-US&append_to_response=credits,videos`
//       );

//       setMovieData(response.data);
      
//     } catch (error) {
//       console.error("Error fetching movie data from TMDb:", error);
//     }
//   };

//   useEffect(() => {
//     if (movieData) {
//       setValue("title", movieData.title);
//       setValue("description", movieData.overview);
//       setValue("releaseDate", movieData.release_date);
//       setValue(
//         "genre",
//         movieData.genres.map((genre) => genre.name).join(", ")
//       );
//       setValue(
//         "cast",
//         movieData.credits.cast.map((actor) => actor.name).join(", ")
//       );
//       setValue("avgRating", movieData.vote_average);
//       setValue("languag", movieData.original_language);
//       setValue(
//         "director",
//         movieData.credits.crew.find((member) => member.job === "Director")?.name
//       );
//       setValue(
//         "trailerUrl",
//         movieData.videos.results.find((video) => video.type === "Trailer")?.key
//       );
//     }
//   }, [movieData, setValue]);

//   const onSubmit = async (data) => {
//     const token = sessionStorage.getItem("token");

//     const formData = new FormData();
//     formData.append("title", data.title);
//     formData.append("description", data.description);
//     formData.append("genre", data.genre);
//     formData.append("director", data.director);
//     formData.append("cast", data.cast);
//     formData.append("languag", data.language);
//     formData.append("avgRating", data.avgRating);
//     formData.append("releaseDate", data.releaseDate);
//     formData.append("image", data.image[0]);
//     formData.append("trailerUrl", data.trailerUrl);

//     try {
//       const res = await axios.post(
//         "http://localhost:3000/api/v1/admin/addmovie",
//         formData,
//         {
//           withCredentials: true,
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       console.log(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="flex h-screen w-screen items-center justify-center">
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="flex flex-col gap-y-2 rounded-md border p-6"
//       >
//         <div className="flex items-center gap-4">
//           <label>
//             <input
//               type="radio"
//               name="mode"
//               value="manual"
//               checked={!useTmdb}
//               onChange={() => setUseTmdb(false)}
//             />
//             Manual Entry
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="mode"
//               value="tmdb"
//               checked={useTmdb}
//               onChange={() => setUseTmdb(true)}
//             />
//             Fetch from TMDb
//           </label>
//         </div>

//         {useTmdb && (
//           <div className="flex flex-col gap-y-2">
//             <input
//               type="text"
//               placeholder="Enter TMDb ID"
//               value={tmdbId}
//               onChange={(e) => setTmdbId(e.target.value)}
//               className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//             />
//             <button
//               type="button"
//               onClick={fetchMovieData}
//               className="rounded-md bg-blue-500 py-1 text-white"
//             >
//               Fetch Movie Data
//             </button>
//           </div>
//         )}

//         <input
//           {...register("title")}
//           type="text"
//           placeholder="Title"
//           className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//         />
//         {errors.title && <p>{errors.title.message}</p>}
//         <input
//           {...register("description")}
//           type="text"
//           placeholder="Description"
//           className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//         />
//         {errors.description && <p>{errors.description.message}</p>}
//         <input
//           {...register("genre")}
//           type="text"
//           placeholder="Genre"
//           className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//         />
//         {errors.genre && <p>{errors.genre.message}</p>}
//         <input
//           {...register("image")}
//           type="file"
//           className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//         />
//         {errors.image && <p>{errors.image.message}</p>}
//         <input
//           {...register("director")}
//           type="text"
//           placeholder="Director"
//           className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//         />
//         {errors.director && <p>{errors.director.message}</p>}
//         <input
//           {...register("languag")}
//           type="text"
//           placeholder="Language"
//           className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//         />
//         {errors.languag && <p>{errors.languag.message}</p>}
//         <input
//           {...register("cast")}
//           type="text"
//           placeholder="Cast"
//           className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//         />
//         {errors.cast && <p>{errors.cast.message}</p>}
//         <input
//           {...register("releaseDate")}
//           type="text"
//           placeholder="Release Date"
//           className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//         />
//         {errors.releaseDate && <p>{errors.releaseDate.message}</p>}
//         <input
//           {...register("avgRating")}
//           type="text"
//           placeholder="Average Rating"
//           className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//         />
//         {errors.avgRating && <p>{errors.avgRating.message}</p>}
//         <input
//           {...register("trailerUrl")}
//           type="text"
//           placeholder="Trailer URL"
//           className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//         />
//         {errors.trailerUrl && <p>{errors.trailerUrl.message}</p>}
//         <input
//           type="submit"
//           className="rounded-md bg-blue-500 py-1 text-white"
//         />
//       </form>
//     </div>
//   );
// }
// import { yupResolver } from "@hookform/resolvers/yup";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";

// const schema = yup
//   .object({
//     title: yup.string().required(),
//     description: yup.string().required(),
//     releaseDate: yup.date().required(),
//     genre: yup.string().required(),
//     cast: yup.string(),
//     avgRating: yup.number(),
//     language: yup.string().required(),
//     director: yup.string().required(),
//     image: yup.mixed().required(),
//     trailerUrl: yup.string(),
//   })
//   .required();

// export default function MovieAdd() {
//   const [movieData, setMovieData] = useState(null);
//   const [useTmdb, setUseTmdb] = useState(false);
//   const [tmdbId, setTmdbId] = useState("");

//   const {
//     register,
//     handleSubmit,
//     setValue,
//     formState: { errors },
//   } = useForm({ resolver: yupResolver(schema) });

//   const fetchMovieData = async () => {
//     try {
//       const apiKey = "3eb2571fe77e5474467b38d6ef773866"; // Replace with your TMDb API key
//       const response = await axios.get(
//         `https://api.themoviedb.org/3/movie/${tmdbId}?api_key=${apiKey}&language=en-US&append_to_response=credits,videos`
//       );

//       setMovieData(response.data);
//     } catch (error) {
//       console.error("Error fetching movie data from TMDb:", error);
//     }
//   };

//   useEffect(() => {
//     if (movieData) {
//       setValue("title", movieData.title);
//       setValue("description", movieData.overview);
//       setValue("releaseDate", movieData.release_date);
//       setValue(
//         "genre",
//         movieData.genres.map((genre) => genre.name).join(", ")
//       );
//       setValue(
//         "cast",
//         movieData.credits.cast.map((actor) => actor.name).join(", ")
//       );
//       setValue("avgRating", movieData.vote_average);
//       setValue("language", movieData.original_language);
//       setValue(
//         "director",
//         movieData.credits.crew.find((member) => member.job === "Director")?.name
//       );
//       setValue(
//         "trailerUrl",
//         movieData.videos.results.find((video) => video.type === "Trailer")?.key
//       );
//     }
//   }, [movieData, setValue]);

//   const onSubmit = async (data) => {
//     const token = sessionStorage.getItem("token");

//     const formData = new FormData();
//     formData.append("title", data.title);
//     formData.append("description", data.description);
//     formData.append("genre", data.genre);
//     formData.append("director", data.director);
//     formData.append("cast", data.cast);
//     formData.append("language", data.language);
//     formData.append("avgRating", data.avgRating);
//     formData.append("releaseDate", data.releaseDate);
//     formData.append("image", data.image[0]);
//     formData.append("trailerUrl", data.trailerUrl);

//     try {
//       const res = await axios.post(
//         "http://localhost:3000/api/v1/admin/addmovie",
//         formData,
//         {
//           withCredentials: true,
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       console.log(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="flex h-screen w-screen items-center justify-center">
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="flex flex-col gap-y-2 rounded-md border p-6"
//       >
//         <div className="flex items-center gap-4">
//           <label>
//             <input
//               type="radio"
//               name="mode"
//               value="manual"
//               checked={!useTmdb}
//               onChange={() => setUseTmdb(false)}
//             />
//             Manual Entry
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="mode"
//               value="tmdb"
//               checked={useTmdb}
//               onChange={() => setUseTmdb(true)}
//             />
//             Fetch from TMDb
//           </label>
//         </div>

//         {useTmdb && (
//           <div className="flex flex-col gap-y-2">
//             <input
//               type="text"
//               placeholder="Enter TMDb ID"
//               value={tmdbId}
//               onChange={(e) => setTmdbId(e.target.value)}
//               className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//             />
//             <button
//               type="button"
//               onClick={fetchMovieData}
//               className="rounded-md bg-blue-500 py-1 text-white"
//             >
//               Fetch Movie Data
//             </button>
//           </div>
//         )}

//         {movieData && (
//           <div className="flex flex-col gap-y-2">
//             <img
//               src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
//               alt={movieData.title}
//               className="rounded-lg"
//             />
//           </div>
//         )}

//         <input
//           {...register("title")}
//           type="text"
//           placeholder="Title"
//           className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//         />
//         {errors.title && <p>{errors.title.message}</p>}
//         <input
//           {...register("description")}
//           type="text"
//           placeholder="Description"
//           className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//         />
//         {errors.description && <p>{errors.description.message}</p>}
//         <input
//           {...register("genre")}
//           type="text"
//           placeholder="Genre"
//           className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//         />
//         {errors.genre && <p>{errors.genre.message}</p>}
//         <input
//           {...register("image")}
//           type="file"
//           className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//         />
//         {errors.image && <p>{errors.image.message}</p>}
//         <input
//           {...register("director")}
//           type="text"
//           placeholder="Director"
//           className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//         />
//         {errors.director && <p>{errors.director.message}</p>}
//         <input
//           {...register("language")}
//           type="text"
//           placeholder="Language"
//           className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//         />
//         {errors.language && <p>{errors.language.message}</p>}
//         <input
//           {...register("cast")}
//           type="text"
//           placeholder="Cast"
//           className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//         />
//         {errors.cast && <p>{errors.cast.message}</p>}
//         <input
//           {...register("releaseDate")}
//           type="text"
//           placeholder="Release Date"
//           className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//         />
//         {errors.releaseDate && <p>{errors.releaseDate.message}</p>}
//         <input
//           {...register("avgRating")}
//           type="text"
//           placeholder="Average Rating"
//           className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//         />
//         {errors.avgRating && <p>{errors.avgRating.message}</p>}
//         <input
//           {...register("trailerUrl")}
//           type="text"
//           placeholder="Trailer URL"
//           className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//         />
//         {errors.trailerUrl && <p>{errors.trailerUrl.message}</p>}
//         <input
//           type="submit"
//           className="rounded-md bg-blue-500 py-1 text-white"
//         />
//       </form>
//     </div>
//   );
// }

import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup
  .object({
    title: yup.string().required(),
    description: yup.string().required(),
    releaseDate: yup.date().required(),
    genre: yup.string().required(),
    cast: yup.string(),
    avgRating: yup.number(),
    language: yup.string().required(),
    director: yup.string().required(),
    image: yup.mixed().required(),
    trailerUrl: yup.string(),
  })
  .required();

export default function MovieAdd() {
  const [movieData, setMovieData] = useState(null);
  const [useTmdb, setUseTmdb] = useState(false);
  const [tmdbId, setTmdbId] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const {
    register,
    handleSubmit,
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

      // Fetch the image and convert to File object
  //     const imageUrl = `https://image.tmdb.org/t/p/w500${response.data.poster_path}`;
  //     const imageResponse = await fetch(imageUrl);
  //     const imageBlob = await imageResponse.blob();
  //     const imageFile = new File([imageBlob], "poster.jpg", { type: imageBlob.type });
  //     setImageFile(imageFile);
  //     setValue("image", imageFile);

  //   } catch (error) {
  //     console.error("Error fetching movie data from TMDb:", error);
  //   }
  // };
  // Fetch the image through the proxy server
  const imageUrl = `https://image.tmdb.org/t/p/w500${response.data.poster_path}`;
  const imageResponse = await axios.get(
    `http://localhost:3000/proxy/image?url=${encodeURIComponent(imageUrl)}`,
    { responseType: 'arraybuffer' }
  );

  
    

  // Convert the image response to a Blob object
  const imageBlob = new Blob([imageResponse.data], { type: imageResponse.headers['content-type'] });

  // Create a File object from the Blob
  const imageFile = new File([imageBlob], "poster.jpg", { type: imageBlob.type });

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
        movieData.credits.crew.find((member) => member.job === "Director")?.name
      );
      setValue(
        "trailerUrl",
        movieData.videos.results.find((video) => video.type === "Trailer")?.key
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
    formData.append("image", imageFile || data.image[0]);
    // formData.append("image", data.image[0]);
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
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-2 rounded-md border p-6"
      >
        <div className="flex items-center gap-4">
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
              className="rounded-lg"
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
        <input
          {...register("image")}
          type="file"
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


// import { yupResolver } from "@hookform/resolvers/yup";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";

// const schema = yup
//   .object({
//     title: yup.string().required(),
//     description: yup.string().required(),
//     releaseDate: yup.date().required(),
//     genre: yup.string().required(),
//     cast: yup.string(),
//     avgRating: yup.number(),
//     language: yup.string().required(),
//     director: yup.string().required(),
//     image: yup.mixed().required(),
//     trailerUrl: yup.string(),
//   })
//   .required();

// export default function MovieAdd() {
//   const [movieData, setMovieData] = useState(null);
//   const [useTmdb, setUseTmdb] = useState(false);
//   const [tmdbId, setTmdbId] = useState("");
//   const [imageFile, setImageFile] = useState(null);

//   const {
//     register,
//     handleSubmit,
//     setValue,
//     formState: { errors },
//   } = useForm({ resolver: yupResolver(schema) });

//   const fetchMovieData = async () => {
//     try {
//       const apiKey = "3eb2571fe77e5474467b38d6ef773866"; // Replace with your TMDb API key
//       const response = await axios.get(
//         `https://api.themoviedb.org/3/movie/${tmdbId}?api_key=${apiKey}&language=en-US&append_to_response=credits,videos`
//       );

//       setMovieData(response.data);

//       // Fetch the image using a proxy
//       const imageUrl = `https://image.tmdb.org/t/p/w500${response.data.poster_path}`;
//       const proxyUrl = `https://cors-anywhere.herokuapp.com/${imageUrl}`;
//       const base64Image = await fetchImageAsBase64(proxyUrl);
//       const imageFile = base64ToFile(base64Image, "poster.jpg");
//       setImageFile(imageFile);
//       setValue("image", imageFile);

//     } catch (error) {
//       console.error("Error fetching movie data from TMDb:", error);
//     }
//   };

//   const fetchImageAsBase64 = async (url) => {
//     const response = await fetch(url);
//     const blob = await response.blob();
//     return new Promise((resolve) => {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         resolve(reader.result);
//       };
//       reader.readAsDataURL(blob);
//     });
//   };

//   const base64ToFile = (base64String, fileName) => {
//     const arr = base64String.split(",");
//     const mime = arr[0].match(/:(.*?);/)[1];
//     const bstr = atob(arr[1]);
//     let n = bstr.length;
//     const u8arr = new Uint8Array(n);
//     while (n--) {
//       u8arr[n] = bstr.charCodeAt(n);
//     }
//     return new File([u8arr], fileName, { type: mime });
//   };

//   useEffect(() => {
//     if (movieData) {
//       setValue("title", movieData.title);
//       setValue("description", movieData.overview);
//       setValue("releaseDate", movieData.release_date);
//       setValue(
//         "genre",
//         movieData.genres.map((genre) => genre.name).join(", ")
//       );
//       setValue(
//         "cast",
//         movieData.credits.cast.map((actor) => actor.name).join(", ")
//       );
//       setValue("avgRating", movieData.vote_average);
//       setValue("language", movieData.original_language);
//       setValue(
//         "director",
//         movieData.credits.crew.find((member) => member.job === "Director")?.name
//       );
//       setValue(
//         "trailerUrl",
//         movieData.videos.results.find((video) => video.type === "Trailer")?.key
//       );
//     }
//   }, [movieData, setValue]);

//   const onSubmit = async (data) => {
//     const token = sessionStorage.getItem("token");

//     const formData = new FormData();
//     formData.append("title", data.title);
//     formData.append("description", data.description);
//     formData.append("genre", data.genre);
//     formData.append("director", data.director);
//     formData.append("cast", data.cast);
//     formData.append("language", data.language);
//     formData.append("avgRating", data.avgRating);
//     formData.append("releaseDate", data.releaseDate);
//     formData.append("image", imageFile || data.image[0]);
//     formData.append("trailerUrl", data.trailerUrl);

//     try {
//       const res = await axios.post(
//         "http://localhost:3000/api/v1/admin/addmovie",
//         formData,
//         {
//           withCredentials: true,
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       console.log(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="flex h-screen w-screen items-center justify-center">
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="flex flex-col gap-y-2 rounded-md border p-6"
//       >
//         <div className="flex items-center gap-4">
//           <label>
//             <input
//               type="radio"
//               name="mode"
//               value="manual"
//               checked={!useTmdb}
//               onChange={() => setUseTmdb(false)}
//             />
//             Manual Entry
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="mode"
//               value="tmdb"
//               checked={useTmdb}
//               onChange={() => setUseTmdb(true)}
//             />
//             Fetch from TMDb
//           </label>
//         </div>

//         {useTmdb && (
//           <div className="flex flex-col gap-y-2">
//             <input
//               type="text"
//               placeholder="Enter TMDb ID"
//               value={tmdbId}
//               onChange={(e) => setTmdbId(e.target.value)}
//               className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//             />
//             <button
//               type="button"
//               onClick={fetchMovieData}
//               className="rounded-md bg-blue-500 py-1 text-white"
//             >
//               Fetch Movie Data
//             </button>
//           </div>
//         )}

//         {movieData && (
//           <div className="flex flex-col gap-y-2">
//             <img
//               src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
//               alt={movieData.title}
//               className="rounded-lg"
//             />
//           </div>
//         )}

//         <input
//           {...register("title")}
//           type="text"
//           placeholder="Title"
//           className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//         />
//         {errors.title && <p>{errors.title.message}</p>}
//         <input
//           {...register("description")}
//           type="text"
//           placeholder="Description"
//           className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//         />
//         {errors.description && <p>{errors.description.message}</p>}
//         <input
//           {...register("genre")}
//           type="text"
//           placeholder="Genre"
//           className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//         />
//         {errors.genre && <p>{errors.genre.message}</p>}
//         <input
//           {...register("image")}
//           type="file"
//           className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//         />
//         {errors.image && <p>{errors.image.message}</p>}
//         <input
//           {...register("director")}
//           type="text"
//           placeholder="Director"
//           className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//         />
//         {errors.director && <p>{errors.director.message}</p>}
//         <input
//           {...register("language")}
//           type="text"
//           placeholder="Language"
//           className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//         />
//         {errors.language && <p>{errors.language.message}</p>}
//         <input
//           {...register("cast")}
//           type="text"
//           placeholder="Cast"
//           className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//         />
//         {errors.cast && <p>{errors.cast.message}</p>}
//         <input
//           {...register("releaseDate")}
//           type="text"
//           placeholder="Release Date"
//           className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//         />
//         {errors.releaseDate && <p>{errors.releaseDate.message}</p>}
//         <input
//           {...register("avgRating")}
//           type="text"
//           placeholder="Average Rating"
//           className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//         />
//         {errors.avgRating && <p>{errors.avgRating.message}</p>}
//         <input
//           {...register("trailerUrl")}
//           type="text"
//           placeholder="Trailer URL"
//           className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//         />
//         {errors.trailerUrl && <p>{errors.trailerUrl.message}</p>}
//         <input
//           type="submit"
//           className="rounded-md bg-blue-500 py-1 text-white"
//         />
//       </form>
//     </div>
//   );
// }


