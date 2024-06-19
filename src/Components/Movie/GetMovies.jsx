import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Heading,
    Image,
    Stack,
    Text,
  } from "@chakra-ui/react";
  import axios from "axios";
  import { useEffect, useState } from "react";
  import { Link } from "react-router-dom";
  
  const Movie = () => {
    const [movie, setMovies] = useState([]);
  
    useEffect(() => {
      const getAllMovies = async () => {
        try {
          const res = await axios.get(
            "http://localhost:3000/api/v1/movie/getMovies",
          );
          const data = await res.data;
          console.log("movie", data);
          setMovies(data);
        } catch (error) {
          console.log(error);
        }
      };
      getAllMovies();
    }, []);
  
    return (
      <main>
        <div className="flex justify-end">
          <Link to="/admin/addmovie">
            <button className="p-4 text-2xl font-semibold shadow-lg shadow-blue-500 hover:scale-105">
              ADD COURSE
            </button>
          </Link>
        </div>
        <div
          className="m-3 grid grid-cols-3
    "
        >
          {movie &&
            movie.map((movie, index) => (
              <div key={index}>
                <Card
                  direction={{ base: "column", sm: "row" }}
                  overflow="hidden"
                  variant="outline"
                >
                  <Image
                    objectFit="cover"
                    maxW={{ base: "100%", sm: "200px" }}
                    src={movie.image}
                    alt="Caffe Latte"
                  />
  
                  <Stack>
                    <CardBody>
                      <Heading size="md">{movie.title}</Heading>
  
                      <Text py="2">{movie.description}</Text>
                    </CardBody>
  
                    <CardFooter>
                      <Button
                        variant="solid"
                        colorScheme="red"
                        onClick={async () => {
                          const res = await axios.delete(
                            `http://localhost:3000/api/v1/movie/deleteMovie/${movie._id}`,
                          );
                          const data = await res.data;
                          if (data === "deleted movie") {
                            window.location.reload();
                          }
                          console.log(data);
                        }}
                      >
                        Remove
                      </Button>
                    </CardFooter>
                  </Stack>
                </Card>
              </div>
            ))}
        </div>
      </main>
    );
  };
  
  export default Movie;