
import {
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Box,
  Button
} from "@chakra-ui/react";
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { Carousel } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./Movies.css"

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState({});
  const [latestMovies, setLatestMovies] = useState([]);

  useEffect(() => {
    const getAllMovies = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/v1/movie/getMovies");
        const data = await res.data;

        // Sort movies by timestamp in descending order
        data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

        // Extract the three latest movies
        const latestMovies = data.slice(0, 3);

        // Filter movies by multiple genres and group them by genre
        const desiredCategory = ["Popular","Comedy", "Action", "Romance","Drama","Horror","Sci-Fi","Thriller"];
        const grouped = data.reduce((acc, movie) => {
          const category = movie.category;
          if (desiredCategory.includes(category)) {
            if (!acc[category]) {
              acc[category] = [];
            }
            acc[category].push(movie);
          }
          return acc;
        }, {});
        
        setMovies(data);
        setFilteredMovies(grouped);
        setLatestMovies(latestMovies);

      } catch (error) {
        console.log(error);
      }
    };
    getAllMovies();
  }, []);

  return (
    <main>

<div className="flex justify-end">
        <Link to="/admin/signup">
          <button className="p-4 text-2xl font-semibold shadow-lg shadow-blue-500 hover:scale-105">
            ADD Movie
          </button>
        </Link>
      </div>
      <Carousel transition={{ duration: 2 }} className="carousel rounded-xl mb-8">
        {latestMovies.map((movie, index) => (
          <div key={index} className="relative h-full w-full">
            <img
              src={movie.image}
              alt={`Latest movie ${index + 1}`}
              className="carousel-image h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
              <div className="w-3/4 text-center md:w-2/4">
                <Heading size="lg" color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl">
                  {movie.title}
                </Heading>
                <Link to={`/movie/dm/${movie._id}`}>
                  <Button size="lg" color="blue">
                    Explore
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Render other movies */}
      {Object.keys(filteredMovies).map((category) => (
        <div key={category}>
          <h2 className="m-3 text-2xl font-bold">{category}</h2>
          <div className="m-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2">
            {filteredMovies[category].map((movie, index) => (
              <div key={index}>
                <Card direction="column" overflow="hidden" variant="outline" width="12rem" height="18rem" position="relative">
                  <Link to={`/movie/dm/${movie._id}`}>
                    <Image objectFit="cover" width="100%" height="13rem" src={movie.image} alt="Movie Poster" />
                  </Link>
                  <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
                    <CircularProgress value={movie.avgRating} max={10} size="45px" color="green.400">
                      <CircularProgressLabel>{movie.avgRating}</CircularProgressLabel>
                    </CircularProgress>
                  </Box>
                  <Stack>
                    <CardBody py="-5">
                      <Heading size={movie.title.length > 10 ? "sm" : "md"}>
                        {movie.title}
                      </Heading>
                    </CardBody>
                  </Stack>
                </Card>
              </div>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
};

export default Movie;

