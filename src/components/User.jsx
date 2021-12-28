import { Text, Flex } from "@chakra-ui/react";

const User = ({ username, onUserClick }) => {
  const handleClick = () => {
    onUserClick && onUserClick(username);
  };

  return (
    <Flex
      onClick={handleClick}
      data-testid="flex-item"
      align="center"
      justify="center"
      bg="rgb(245, 245, 245)"
      borderRadius="5px"
      border="solid black"
      height="100px"
      cursor="pointer"
      _hover={{ background: "rgb(233, 233, 233)" }}
    >
      <Text fontFamily="helvetica">{username}</Text>
    </Flex>
  );
};

export default User;
