// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from "@chakra-ui/react";

// const Review = () => {
//   const [users, setUsers] = useState([]);
//   const [userCount, setUserCount] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const getUserList = async () => {
//       try {
//         const token = sessionStorage.getItem("token");
//         if (!token) {
//           console.error("Token not found");
//           return;
//         }

//         const res = await axios.get(
//           // "https://movie-backendserver.onrender.com/api/v1/admin/users",
//           `http://localhost:3000/api/v1/admin/users`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         const insData = res.data;
//         setUsers(insData);
//         setUserCount(insData.length);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching user list:", error);
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     getUserList();
//   }, []);

//   const handleRemoveUser = async (userId) => {
//     try {
//       const token = sessionStorage.getItem("token");
//       if (!token) {
//         console.error("Token not found");
//         return;
//       }

//       const res = await axios.delete(
//         `https://movie-backendserver.onrender.com/api/v1/admin/delete-user/${userId}`,

//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (res.data.message === "User deleted successfully") {
//         const updatedUsers = users.filter((user) => user._id !== userId);
//         setUsers(updatedUsers);
//         setUserCount(updatedUsers.length);
//       } else {
//         console.error("Unexpected response:", res.data);
//       }
//     } catch (error) {
//       if (error.response) {
//         console.error(`Error removing user: ${error.response.status} - ${error.response.data.message}`);
//       } else {
//         console.error("Error removing user:", error);
//       }
//     }
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className="m-3 border">
//       <div>Total Users: {userCount}</div> {/* Display the number of users */}

//       <TableContainer>
//         <Table variant="striped" colorScheme="teal">
//           <Thead>
//             <Tr>
//               <Th>User Name</Th>
//               <Th>Email</Th>
//               <Th>Reviews</Th>
//               <Th>Remove</Th>
//             </Tr>
//           </Thead>
//           <Tbody>
//             {users.map((user) => (
//               <Tr key={user._id}>
//                 <Td>{user.firstName}</Td>
//                 <Td>{user.email}</Td>
//                 <Td>
//                   {user.userReviews.length > 0 ? (
//                     <ul>
//                       {user.userReviews.map((review) => (
//                         <li key={review._id}>{review.review}{review.rating}{review.movie.title}</li> // Adjust 'content' based on your Review schema
//                       ))}
//                     </ul>
//                   ) : (
//                     <p>No reviews</p>
//                   )}
//                 </Td>
//                 <Td>
//                   <button
//                     onClick={() => handleRemoveUser(user._id)}
//                     className="rounded-md bg-red-500 px-2 py-1 text-white"
//                   >
//                     Remove
//                   </button>
//                 </Td>
//               </Tr>
//             ))}
//           </Tbody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default Review;






// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Box, SimpleGrid, Text, Skeleton, Stack } from "@chakra-ui/react";

// const Review = () => {
//   const [users, setUsers] = useState([]);
//   const [userCount, setUserCount] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const getUserList = async () => {
//       try {
//         const token = sessionStorage.getItem("token");
//         if (!token) {
//           console.error("Token not found");
//           return;
//         }

//         const res = await axios.get(
//           // "https://movie-backendserver.onrender.com/api/v1/admin/users",
//           `http://localhost:3000/api/v1/admin/users`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         const insData = res.data;
//         setUsers(insData);
//         setUserCount(insData.length);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching user list:", error);
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     getUserList();
//   }, []);

//   if (loading) {
//     return (
//       <SimpleGrid columns={[1, 2, 3]} spacing={10}>
//         <Skeleton height="150px" />
//         <Skeleton height="150px" />
//         <Skeleton height="150px" />
//       </SimpleGrid>
//     );
//   }

//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className="m-3 border">
//       <div>Total Users: {userCount}</div> {/* Display the number of users */}
//       <SimpleGrid columns={[1, 2, 3]} spacing={10}>
//         {users.map((user) => (
//           <Box
//             key={user._id}
//             borderWidth="1px"
//             borderRadius="lg"
//             overflow="hidden"
//             p={4}
//             boxShadow="md"
//           >
//             <Text fontWeight="bold">{user.firstName}</Text>
//             <Text>{user.email}</Text>
//             <Box mt={2}>
//               {user.userReviews.length > 0 ? (
//                 <Stack spacing={2}>
//                   {user.userReviews.map((review) => (
//                     <Box
//                       key={review._id}
//                       p={2}
//                       borderWidth="1px"
//                       borderRadius="md"
//                       bg="gray.50"
//                     >
//                       <Text><strong>Movie:</strong> {review.movie.title}</Text>
//                       <Text><strong>Rating:</strong> {review.rating}</Text>
//                       <Text><strong>Review:</strong> {review.review}</Text>
//                     </Box>
//                   ))}
//                 </Stack>
//               ) : (
//                 <Text>No reviews</Text>
//               )}
//             </Box>
//           </Box>
//         ))}
//       </SimpleGrid>
//     </div>
//   );
// };

// export default Review;




import axios from "axios";
import { useEffect, useState } from "react";
import {
  Box,
  SimpleGrid,
  Text,
  Skeleton,
  Stack,
  Heading,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
} from "@chakra-ui/react";

const Review = () => {
  const [users, setUsers] = useState([]);
  const [userCount, setUserCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserList = async () => {
      try {
        const token = sessionStorage.getItem("token");
        if (!token) {
          console.error("Token not found");
          return;
        }

        const res = await axios.get(
           "https://movie-backendserver.onrender.com/api/v1/admin/users",
          // `http://localhost:3000/api/v1/admin/users`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const insData = res.data;
        setUsers(insData);
        setUserCount(insData.length);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user list:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    getUserList();
  }, []);

  if (loading) {
    return (
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        <Skeleton height="150px" />
        <Skeleton height="150px" />
    
        <Skeleton height="150px" />
      </SimpleGrid>
    );
  }

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="m-3 border">
      <Heading as="h2" size="lg" mb={4}>
        Total Users: {userCount}
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {users.map((user) => (
          <Card key={user._id} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
            <CardHeader>
              <Heading size="md">{user.firstName}</Heading>
              <Text>{user.email}</Text>
            </CardHeader>
            <CardBody>
              {user.userReviews.length > 0 ? (
                <Stack spacing={2}>
                  {user.userReviews.map((review) => (
                    <Box key={review._id} p={2} borderWidth="1px" borderRadius="md" bg="gray.50">
                      <Text>
                        <strong>Movie:</strong> {review.movie.title}
                      </Text>
                      <Text>
                        <strong>Rating:</strong> {review.rating}
                      </Text>
                      <Text>
                        <strong>Review:</strong> {review.review}
                      </Text>
                    </Box>
                  ))}
                </Stack>
              ) : (
                <Text>No reviews</Text>
              )}
            </CardBody>
            <CardFooter>
              <Text>{user.userReviews.length} reviews</Text>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default Review;
