import React from "react";
import Styles from "./Table.module.css";
import { GrAddCircle } from "react-icons/gr";
import { BiDotsVerticalRounded } from "react-icons/bi";

export const Table = () => {
  return (
    <div>
      <table className={Styles.tableContainer}>
        <thead>
          <tr>
            <th className={Styles.testBorder}>
              <input type="checkbox" />
            </th>
            <th
              align="left"
              className={`${Styles.testBorder} ${Styles.leftSpace}`}
            >
              User Name
            </th>
            <th>ID</th>
            <th>Department</th>
            <th>Check in</th>
            <th>Check Out</th>
            <th>Checkout Time</th>
            <th>Action</th>
            <th>
              <div className={Styles.center} style={{ margin: "10px 2px" }}>
                <GrAddCircle size={15} />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr align="center">
            <td>
              <input type="checkbox" />
            </td>
            <td align="left" className={Styles.leftSpace}>
              <div className={Styles.userInfo}>
                <img
                  src="https://fastly.picsum.photos/id/866/200/200.jpg?hmac=i0ngmQOk9dRZEzhEosP31m_vQnKBQ9C19TBP1CGoIUA"
                  alt=""
                />
                <p>Muhammad Hammad</p>
              </div>
            </td>
            <td>234544</td>
            <td>Design</td>
            <td>11:45 am</td>
            <td>9:00 pm</td>
            <td>11:45 am</td>
            <td>
              <div className={Styles.center}>
                <BiDotsVerticalRounded size={23} />
              </div>
            </td>
            <td>
              <div className={Styles.center} style={{ margin: "10px 2px" }}>
                <GrAddCircle size={15} />
              </div>
            </td>
          </tr>
          <tr align="center">
            <td>
              <input type="checkbox" />
            </td>
            <td align="left" className={Styles.leftSpace}>
              <div className={Styles.userInfo}>
                <img
                  src="https://fastly.picsum.photos/id/866/200/200.jpg?hmac=i0ngmQOk9dRZEzhEosP31m_vQnKBQ9C19TBP1CGoIUA"
                  alt=""
                />
                <p>Muhammad Hammad</p>
              </div>
            </td>
            <td>234544</td>
            <td>Design</td>
            <td>11:45 am</td>
            <td>9:00 pm</td>
            <td>11:45 am</td>
            <td>
              <div className={Styles.center}>
                <BiDotsVerticalRounded size={23} />
              </div>
            </td>
            <td>
              <div className={Styles.center} style={{ margin: "10px 2px" }}>
                <GrAddCircle size={15} />
              </div>
            </td>
          </tr>
          <tr align="center">
            <td>
              <input type="checkbox" />
            </td>
            <td align="left" className={Styles.leftSpace}>
              <div className={Styles.userInfo}>
                <img
                  src="https://fastly.picsum.photos/id/866/200/200.jpg?hmac=i0ngmQOk9dRZEzhEosP31m_vQnKBQ9C19TBP1CGoIUA"
                  alt=""
                />
                <p>Muhammad Hammad</p>
              </div>
            </td>
            <td>234544</td>
            <td>Design</td>
            <td>11:45 am</td>
            <td>9:00 pm</td>
            <td>11:45 am</td>
            <td>
              <div className={Styles.center}>
                <BiDotsVerticalRounded size={23} />
              </div>
            </td>
            <td>
              <div className={Styles.center} style={{ margin: "10px 2px" }}>
                <GrAddCircle size={15} />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
