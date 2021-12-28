import useApp from "./useApp";
import { SimpleGrid, Flex, Text, Button } from "@chakra-ui/react";
import { SUCCESS_LABEL_VALUE } from "./constants";

const App = () => {
  const {
    users,
    label,
    handleBoxClick,
    handleClearClick,
    shouldDisplayAllClickedLabel,
  } = useApp();

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
      {shouldDisplayAllClickedLabel && (
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
