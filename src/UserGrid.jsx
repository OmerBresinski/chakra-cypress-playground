import User from "./User";
import { SimpleGrid } from "@chakra-ui/react";

const UserGrid = ({ users, onUserClick }) => {
  return (
    <SimpleGrid
      minChildWidth="150px"
      padding="2rem 5rem"
      spacing="20px"
      width="100%"
    >
      {users.map((user) => (
        <User
          key={user.id}
          username={user.username}
          onUserClick={onUserClick}
        />
      ))}
    </SimpleGrid>
  );
};

export default UserGrid;
