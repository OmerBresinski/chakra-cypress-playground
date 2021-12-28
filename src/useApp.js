import { useState, useEffect } from "react";
import { INITIAL_LABEL_VALUE } from "./constants";

const useApp = () => {
  const [users, setUsers] = useState([]);
  const [label, setLabel] = useState(INITIAL_LABEL_VALUE);
  const [clickCounter, setClickCounter] = useState(0);
  const shouldDisplayAllClickedLabel =
    clickCounter > 0 && clickCounter % users?.length === 0;

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

  return {
    users,
    label,
    handleBoxClick,
    handleClearClick,
    shouldDisplayAllClickedLabel,
  };
};

export default useApp;
