import { useState, useEffect } from "react";
import { INITIAL_LABEL_VALUE } from "./constants";

const useApp = () => {
  const [users, setUsers] = useState([]);
  const [label, setLabel] = useState(INITIAL_LABEL_VALUE);
  const [clickedUsers, setClickedUsers] = useState({ amount: 0 });
  const shouldDisplayAllClickedLabel =
    clickedUsers.amount > 0 && clickedUsers.amount % users?.length === 0;

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await data.json();
    setUsers(users);
  };

  const handleUserClick = ({ username, id }) => {
    setLabel(username);
    increaseClickedUsersAmount(id);
  };

  const increaseClickedUsersAmount = (id) => {
    const shouldIncreaseAmount = !clickedUsers[id];
    setClickedUsers((clickedUsers) => {
      return {
        [id]: id,
        ...clickedUsers,
        ...(shouldIncreaseAmount && { amount: clickedUsers.amount + 1 }),
      };
    });
  };

  const handleClearClick = () => {
    setLabel(INITIAL_LABEL_VALUE);
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return {
    users,
    label,
    handleUserClick,
    handleClearClick,
    shouldDisplayAllClickedLabel,
  };
};

export default useApp;
