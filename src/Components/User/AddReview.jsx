


import axios from 'axios';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useRecoilState } from 'recoil';
import { reviewsState } from '../../Atoms/Atoms';
import { useNavigate } from 'react-router-dom';

export default function ReviewAdd({ movieId }) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [desc, setDesc] = useState('');
  const [error, setError] = useState('');
  const [reviews, setReviews] = useRecoilState(reviewsState);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem('token');

    if (!rating) {
      setError('Please provide a rating.');
      return;
    }

    try {
      const res = await axios.post(
        `https://movie-backendserver.onrender.com/api/v1/users/addreview/${movieId}`,
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
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Failed to submit the review. Please try again.');
      navigate('/login')
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-2 rounded-md border p-6">
        <div className="flex items-center">
          {[...Array(5)].map((_, index) => {
            const currentRating = (index + 1) * 2;
            return (
              <label key={index} className="mr-2">
                <input
                className='text'
                  type="radio"
                  name="rating"
                  value={currentRating}
                  onClick={() => setRating(currentRating)}
                  style={{ display: 'none' }}
                />
                <FaStar
                  className="star"
                  size={50}
                  color={currentRating <= (hover || rating) ? 'yellow' : 'grey'}
                  onMouseEnter={() => setHover(currentRating)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
          <p>Your rating is {rating}</p>
        </div>
        <label htmlFor="desc">Description:</label>
        {/* <input
          type="text"
          id="desc"
          name="desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required
        /> */}
         <textarea
          id="desc"
          name="desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required
          className="w-full h-40 text-blue-500" // Set the textarea to be full width and 40 lines tall
          style={{ resize: 'vertical' }} // Allow vertical resizing
        />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}
