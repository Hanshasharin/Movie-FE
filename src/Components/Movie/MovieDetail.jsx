
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { reviewsState } from '../../Atoms/Atoms.js';

import { Image } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

export default function MovieDetail() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useRecoilState(reviewsState);

  const fetchMovieDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/movie/getMovies/${id}`);
      setMovie(response.data);
      setReviews(response.data.reviews);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching movie details:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <div className="movie-detail p-4 md:flex md:flex-row md:space-x-8">
      <div className="mb-4 md:mb-0 md:w-1/2">
        <Image src={movie.image} alt={movie.title} height="80vh" width="50vw"className="h-64 md:h-auto w-full object-contain" />
      </div>
      <div className="md:w-1/2">
        <h1>{movie.title}</h1>
        <p>{movie.description}</p>
        <p>Genre: {movie.genre}</p>
        <p>Director: {movie.director}</p>
        <p>Cast: {movie.cast}</p>
        <p>Language: {movie.language}</p>
        <p>Average Rating: {movie.avgRating}</p>
        <p>Release Date: {movie.releaseDate}</p>
        <h2>Reviews</h2>
        {reviews.map((review, index) => (
          <div key={index}>
            <p>{review.review}</p>
            <p>Rating: {review.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
