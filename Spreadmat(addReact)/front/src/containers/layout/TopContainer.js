import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Top from "../../components/layout/Top";
import { logout } from "../../modules/user";

const TopContainer = () => {
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  useEffect(() => {
    console.log(`Top container user : ${user}`);//이렇게 하니까 한 번만 나오네 좋네
  }, [user]);

  return <Top user={user} onLogout={onLogout} />;
};

export default TopContainer;
