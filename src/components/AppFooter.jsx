import { Button, Text } from "@chakra-ui/react";
import { SUCCESS_LABEL_VALUE } from "../constants";

const AppFooter = ({ onClearClick, shouldDisplayAllClickedLabel }) => {
  return (
    <>
      <Button
        onClick={onClearClick}
        fontSize="2rem"
        padding="1rem"
        cursor="pointer"
        margin="1rem"
        data-testid="clear"
        fontFamily="helvetica"
        borderRadius="5px"
        border="solid black"
        bg="rgb(245, 245, 245)"
        _hover={{ background: "rgb(233, 233, 233)" }}
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
    </>
  );
};

export default AppFooter;
