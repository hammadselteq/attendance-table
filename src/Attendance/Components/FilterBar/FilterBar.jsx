import React from "react";
import Styles from "./FilterBar.module.css";
import { AttendanceLogo } from "../../Assets/AttendanceLogo";
import { SearchBar } from "./SearchBar";

export const FilterBar = () => {
  return (
    <div className={Styles.filterBar}>
      <div className={Styles.logoAlign}>
        <AttendanceLogo />
        <p className={Styles.headingText}>Users Attendance List</p>
      </div>
      <div className={Styles.btnsAlign}>
        <SearchBar />
        <div className={Styles.addNewBtn}>
          <p> + Add New</p>
        </div>
      </div>
    </div>
  );
};
