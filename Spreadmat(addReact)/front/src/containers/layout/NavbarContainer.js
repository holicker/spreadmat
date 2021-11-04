import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/layout/Navbar";
import { changeKeyword } from "../../modules/search";
import { logout } from "../../modules/user";

const NavbarContainer = () => {
  const { keyword } = useSelector(({ search }) => ({
    keyword: search.keyword,
  }));
  const dispatch = useDispatch();
  const onChangeKeyword = (e) => {
    const { value } = e.target;
    console.log(`value : ${value}`);
    dispatch(
      changeKeyword({
        keyword: value,
      })
    );
  };
  return <Navbar keyword={keyword} onChangeKeyword={onChangeKeyword} />;
};

export default NavbarContainer;
