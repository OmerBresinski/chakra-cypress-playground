import useApp from "./useApp";
import AppHeader from "./components/AppHeader";
import UserGrid from "./components/UserGrid";
import AppFooter from "./components/AppFooter";
import { Flex } from "@chakra-ui/react";

const App = () => {
  const {
    users,
    label,
    handleUserClick,
    handleClearClick,
    shouldDisplayAllClickedLabel,
  } = useApp();

  return (
    <Flex flexDirection="column" alignItems="center" width="100%">
      <AppHeader label={label} />
      <UserGrid users={users} onUserClick={handleUserClick} />
      <AppFooter
        onClearClick={handleClearClick}
        shouldDisplayAllClickedLabel={shouldDisplayAllClickedLabel}
      />
    </Flex>
  );
};

export default App;
