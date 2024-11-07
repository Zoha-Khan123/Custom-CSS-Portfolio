import React from "react";
import "./style.css";
import Nav from "../componant/Nav";
import Social from "../componant/Social";
const Contact = () => {
  return (
    <div className="mainCard">
      <Nav />

      <div className="cnt">
        <h2>Zoha Khan</h2>
        <p>Front End Developer</p>

        <table className="tbl">
          <tr>
            <th>Field</th>
            <th>Information</th>
          </tr>
          <tr>
            <td>Name</td>
            <td>Zoha Khan</td>
          </tr>
          <tr>
            <td>Position</td>
            <td>Front End Developer</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>20</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>House No 114, Sector 4/D, Nazimabad</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>zohakhan0010@gmail.com</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>+92 3012571926</td>
          </tr>
          <tr>
            <td>Last Position</td>
            <td>Front End Developer (till September 25, 2023)</td>
          </tr>
          
        </table>

      </div>

      <Social/>
    </div>
  );
};

export default Contact;
