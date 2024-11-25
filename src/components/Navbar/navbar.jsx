import "./navbar.scss";

import { Link } from "react-router-dom";
import NexDark from "../../assets/NexDark.png";
import "boxicons";

export default function Navbar() {
  return (
    <>
      <div className="nav">
        <div className="nav-content">
          <div className="logo">
            <img src={NexDark} alt="NexLIB" />
          </div>
          <div className="line"></div>
          <div className="nav-links">
            <li className="nav-link active">
              <box-icon type="solid" name="dashboard"></box-icon>
              <Link className="link" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-link">
              <box-icon type="solid" name="book-bookmark"></box-icon>
              <Link to="/books" className="link">
                Book Catalogue
              </Link>
            </li>
            <li className="nav-link">
              <box-icon name="user" type="solid"></box-icon>
              <Link to="/members" className="link">
                Member's
              </Link>
            </li>
            <li className="nav-link">
              <box-icon name="file-export" type="solid"></box-icon>
              <Link to="/borrow-record" className="link">
                Borrow Record's
              </Link>
            </li>
            <li className="nav-link">
              <box-icon name="file-import" type="solid"></box-icon>
              <Link to="/return-record" className="link">
                Return Record's
              </Link>
            </li>
          </div>
          <div className="profile-container">
            <box-icon name="user-circle" type="solid" size="lg"></box-icon>
            <div className="info">
              <h3 className="name">Subur Corporation</h3>
              <p className="role">Staff</p>
            </div>
          </div>
          <div className="logout">
            <box-icon
              name="log-out"
              animation="tada-hover"
              size="sm"
              color="#fc2e2e"
            ></box-icon>
            <h2>Logout</h2>
          </div>
        </div>
      </div>
    </>
  );
}
