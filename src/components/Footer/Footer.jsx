import { Link } from "react-router-dom";
import SourceCodeLink from "../SourceCodeLink";

function Footer() {
  return (
    <div className="container">
      <Link to="/" className="logo-font">
        conduit
      </Link>
      <span className="attribution">
        An interactive learning project from{" "}
      </span>

      <SourceCodeLink right />
    </div>
  );
}

export default Footer;
