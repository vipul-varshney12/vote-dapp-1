import { Link } from "react-router-dom";
import "./Navigation.css";
import ConnectedAccount from "../ConnectedAccount";

const Navigation = ({ account }) => {
  return (
    <header>
      <nav>
        <div className="connected-account">
          <ConnectedAccount account={account} />
        </div>
        <ul>
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/candidate">
              Candidate
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/voter">
              Voter
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/election-commision">
              Election Commision
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              AboutUs
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navigation;
