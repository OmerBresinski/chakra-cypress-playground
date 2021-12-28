import { useState, useEffect } from "react";
import { SimpleGrid, Flex, Text, Button } from "@chakra-ui/react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [label, setLabel] = useState(INITIAL_LABEL_VALUE);
  const [clickCounter, setClickCounter] = useState(0);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await data.json();
    setUsers(users);
  };

  const handleBoxClick = (e) => {
    setLabel(e.nativeEvent.target.textContent);
    setClickCounter((counter) => counter + 1);
  };

  const handleClearClick = () => {
    setLabel(INITIAL_LABEL_VALUE);
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Flex flexDirection="column" alignItems="center" width="100%">
      <Flex as="header" justifyContent="center" alignItems="center">
        <Text fontFamily="helvetica" data-testid="label" fontSize="2rem">
          {label}
        </Text>
      </Flex>
      <SimpleGrid
        minChildWidth="150px"
        padding="2rem 5rem"
        spacing="20px"
        width="100%"
      >
        {users.map((user) => (
          <Flex
            key={user.id}
            onClick={handleBoxClick}
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
            <Text fontFamily="helvetica">{user.username}</Text>
          </Flex>
        ))}
      </SimpleGrid>
      <Button
        onClick={handleClearClick}
        fontSize="2rem"
        padding="1rem"
        cursor="pointer"
        margin="1rem"
        data-testid="clear"
        fontFamily="helvetica"
        borderRadius="5px"
        border="solid black"
        bg="rgb(245, 245, 245)"
      >
        Clear
      </Button>
      {clickCounter > 0 && clickCounter % users?.length === 0 && (
        <Text
          fontFamily="helvetica"
          fontSize="2rem"
          data-testid="all-clicked-label"
        >
          {SUCCESS_LABEL_VALUE}
        </Text>
      )}
    </Flex>
  );
};

export default App;

const INITIAL_LABEL_VALUE = "Click a box";
const SUCCESS_LABEL_VALUE = "All boxes clicked";
