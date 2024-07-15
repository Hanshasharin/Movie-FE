

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Skeleton, SkeletonText, Box } from '@chakra-ui/react';
import './ProfilePage.css';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = sessionStorage.getItem('token');
        const res = await axios.get(
          `https://movie-backendserver.onrender.com/api/v1/users/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUser(res.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  const handleDeleteReview = async (reviewId) => {
    try {
      const token = sessionStorage.getItem('token');
      await axios.delete(
        `https://movie-backendserver.onrender.com/api/v1/users/delete/${reviewId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Remove the deleted review from the state
      setUser((prevUser) => ({
        ...prevUser,
        userReviews: prevUser.userReviews.filter(review => review._id !== reviewId),
      }));
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  if (loading) {
    return (
      <div className="profile-page">
        <Box padding="6" boxShadow="lg" bg="white">
          <Skeleton height="40px" mb="4" />
          <Skeleton height="20px" mb="4" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <h1>{user.firstName} {user.lastName}</h1>
      <h2>Reviews</h2>
      <ul>
        {user.userReviews.map(review => (
          <li key={review._id}>
            <p>Movie: {review.movie.title}</p>
            <p>Rating: {review.rating}</p>
            <p>Review: {review.review}</p>
            <button
              onClick={() => handleDeleteReview(review._id)}
              className="rounded-md bg-red-500 px-2 py-1 text-white"
            >
              Delete Review
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfilePage;
