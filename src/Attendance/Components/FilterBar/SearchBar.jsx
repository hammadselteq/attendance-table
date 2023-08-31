import React from "react";
import Styles from "./FilterBar.module.css";
import { AiOutlineSearch, AiOutlineFilter } from "react-icons/ai";

export const SearchBar = () => {
  return (
    <>
      <div className={Styles.SearchBarContainer}>
        <AiOutlineSearch color="#aaa" size={16} />
        <input type="text" placeholder="Search" />
        <AiOutlineFilter color="#aaa" size={16} />
        <p>Filter</p>
      </div>
    </>
  );
};
