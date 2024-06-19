// import axios from "axios";
// import { useEffect, useState } from "react";
// import { FaStar } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';

// export default function ReviewAdd() {
//   const [rating, setRating] = useState(null);
//   const [hover, setHover] = useState(null);
//   const [desc, setDesc] = useState('');
//   const navigate = useNavigate(); // Correctly use navigate

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('desc', desc);
//     formData.append('rating', rating); // Append rating to FormData

//     try {
//       const token = sessionStorage.getItem('userToken');
//       if (token) {
//         const response = await axios.post(`http://localhost:3000/api/v1/user/addreviews${movieId}`, formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//             'Authorization': `Bearer ${token}`
//           }
//         });
//         navigate('/blogs');
//       } else {
//         navigate('/login');
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       // Optionally, you can display an error message to the user
//     }
//   }

//   return (
//     <div className="flex h-screen w-screen items-center justify-center">
//       <form onSubmit={handleSubmit} className="flex flex-col gap-y-2 rounded-md border p-6">
//         <div className="App">
//           {[...Array(5)].map((star, index) => {
//             const currentRating = index + 1;
//             return (
//               <label key={index}>
//                 <input
//                   type="radio"
//                   name="rating"
//                   value={currentRating}
//                   onClick={() => setRating(currentRating)}
//                   style={{ display: 'none' }} // Hide the radio buttons
//                 />
//                 <FaStar
//                   className="star"
//                   size={50}
//                   color={currentRating <= (hover || rating) ? "yellow" : "black"}
//                   onMouseEnter={() => setHover(currentRating)}
//                   onMouseLeave={() => setHover(null)}
//                 />
//               </label>
//             );
//           })}
//           <p>Your rating is {rating}</p>
//         </div>
//         <label htmlFor="desc">Description:</label>
//         <input
//           type="text"
//           id="desc"
//           name="desc"
//           value={desc}
//           onChange={(e) => setDesc(e.target.value)}
//           required
//         />
//         <button type="submit">Create a new Post</button>
//       </form>
//     </div>
//   );
// }
import axios from "axios";
import { useState } from "react";
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function ReviewAdd({ movieId }) { // movieId is passed as a prop
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [desc, setDesc] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!rating) {
      setError('Please provide a rating.');
      return;
    }

    const formData = new FormData();
    formData.append('desc', desc);
    formData.append('rating', rating);

    try {
      const token = sessionStorage.getItem('userToken');
      if (token) {
        await axios.post(`http://localhost:3000/api/v1/user/addreviews${movieId}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
          }
        });
        navigate('/blogs');
      } else {
        navigate('/login');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Failed to submit the review. Please try again.');
    }
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-2 rounded-md border p-6">
        <div className="App">
          {[...Array(5)].map((star, index) => {
            const currentRating = index + 1;
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="rating"
                  value={currentRating}
                  onClick={() => setRating(currentRating)}
                  style={{ display: 'none' }} // Hide the radio buttons
                />
                <FaStar
                  className="star"
                  size={50}
                  color={currentRating <= (hover || rating) ? "yellow" : "black"}
                  onMouseEnter={() => setHover(currentRating)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
          <p>Your rating is {rating}</p>
        </div>
        <label htmlFor="desc">Description:</label>
        <input
          type="text"
          id="desc"
          name="desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required
        />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit">Create a new Post</button>
      </form>
    </div>
  );
}
