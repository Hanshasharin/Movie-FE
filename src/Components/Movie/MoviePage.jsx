import React from "react";
import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import MovieDetail from "./MovieDetail";
// import ReviewAdd from "./AddReview";
import ReviewAdd from "../User/AddReview";
import PrivateUserRoutes from "../../PrivateUserRoutes";
import { RecoilRoot } from "recoil";


const MoviePage = () => {
  const { id } = useParams();
  console.log("ID:", id);

  return (
    <Box>
        <RecoilRoot>
      <MovieDetail movieId={id} />
      

        <PrivateUserRoutes>
      <ReviewAdd movieId={id}/>
      </PrivateUserRoutes></RecoilRoot>
    </Box>
  );
};

export default MoviePage;


