

import axios from 'axios';
import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { useRecoilState } from 'recoil';
import { reviewsState } from '../../Atoms/Atoms';
import { useNavigate } from 'react-router-dom';
import { Textarea } from "@material-tailwind/react";

export default function ReviewAdd({ movieId }) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [desc, setDesc] = useState('');
  const [error, setError] = useState('');
  const [reviews, setReviews] = useRecoilState(reviewsState);
  const [userHasReviewed, setUserHasReviewed] = useState(false);
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const token = sessionStorage.getItem('token');

  useEffect(() => {
    const checkIfUserHasReviewed = async () => {
      try {
        const res = await axios.get(
          `https://movie-backendserver.onrender.com/api/v1/users/getreview/${movieId}`,
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );
        const userReviews = res.data;
        const userReviewed = userReviews.some(review => review.userId === sessionStorage.getItem('userId'));
        setUserHasReviewed(userReviewed);
      } catch (error) {
        console.error('Error checking user reviews:', error);
      }
    };

    checkIfUserHasReviewed();
  }, [movieId, token]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!rating) {
      setError('Please provide a rating.');
      return;
    }

    if (userHasReviewed) {
      setError('You have already reviewed this movie.');
      return;
    }

    try {
      const res = await axios.post(
         `https://movie-backendserver.onrender.com/api/v1/users/addreview/${movieId}`,
        // `http://localhost:3000/api/v1/users/addreview/${movieId}`,
        { rating, review: desc },
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      setReviews((prevReviews) => [...prevReviews, res.data]);
      setRating(null);
      setDesc('');
      setHover(null);
      setUserHasReviewed(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Failed to submit the review. Please try again.');
      // navigate('/login');
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 w-full max-w-4xl p-6 rounded-md shadow-md">
        <div className="flex items-center justify-center mb-4">
          {[...Array(5)].map((_, index) => {
            const currentRating = (index + 1) * 2;
            return (
              <label key={index} className="mr-2">
                <input
                  className="hidden"
                  type="radio"
                  name="rating"
                  value={currentRating}
                  onClick={() => setRating(currentRating)}
                  style={{ display: 'none' }}
                />
                <FaStar
                  className="star cursor-pointer"
                  size={50}
                  color={currentRating <= (hover || rating) ? 'yellow' : 'grey'}
                  onMouseEnter={() => setHover(currentRating)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
          <p className="ml-4 text-xl">Your rating is {rating}</p>
        </div>
        <label htmlFor="desc" className="text-lg font-medium">Review:</label>
        <Textarea
          label="REVIEW"
          id="desc"
          name="desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required
          className="w-full h-40 text-blue-500 resize-none"
          style={{ resize: 'vertical' }}
        />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="w-full py-2 bg-blue-500 text-white text-lg rounded-md hover:bg-blue-600 transition duration-300">
          Submit Review
        </button>
      </form>
    </div>
  );
}

