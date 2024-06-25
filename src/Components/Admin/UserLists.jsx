
import axios from "axios";
import { useEffect, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";

const UserLists = () => {
  const [users, setUsers] = useState("");
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {


    const getUserList = async () => {
        try {
          const token = sessionStorage.getItem("token");
          if (!token) {
            console.error("Token not found");
            return;
          }
      
          const res = await axios.get(
            "http://localhost:3000/api/v1/admin/users",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const insData = res.data;
          setUsers(insData);
          setUserCount(insData.length);
        } catch (error) {
          console.error("Error fetching user list:", error);
        }
      };
      
   
    getUserList();
  }, []);

  const handleRemoveUser = async (userId) => {
    try {
      const token = sessionStorage.getItem("token");
      if (!token) {
        console.error("Token not found");
        return;
      }

      const res = await axios.delete(
        `http://localhost:3000/api/v1/admin/delete-user/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = res.data;
      console.log(data);
   
    if (data === "removed successfully") {
        // Update the state without refreshing the page
        const updatedUsers = users.filter((user) => user._id !== userId);
        setUsers(updatedUsers);
        setUserCount(updatedUsers.length);
        setTimeout(() => {
            window.location.reload();
          }, 1000);

      }
    } 
    catch (error) {
      console.error("Error removing user:", error);
    }
  };

  return (
    <div className="m-3 border ">
 <div>Total Users: {userCount}</div> {/* Display the number of users */}

      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>User name</Th>
              <Th>Email</Th>
              <Th>Remove</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users &&
              users.map((user) => (
                <Tr key={user._id}>
                  <Th>{user.firstName}</Th>
                  <Th>{user.email}</Th>
                  <Th>
                    <button
                      onClick={() => handleRemoveUser(user._id)}
                      className="rounded-md bg-red-500 px-2 py-1 text-white"
                    >
                      Remove
                    </button>
                  </Th>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserLists;
