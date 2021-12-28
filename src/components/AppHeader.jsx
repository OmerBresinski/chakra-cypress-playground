import { Flex, Text } from "@chakra-ui/react";

const AppHeader = ({ label }) => {
  return (
    <Flex as="header" justifyContent="center" alignItems="center">
      <Text fontFamily="helvetica" data-testid="label" fontSize="2rem">
        {label}
      </Text>
    </Flex>
  );
};

export default AppHeader;
