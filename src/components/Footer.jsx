import { BsLinkedin, BsGithub } from "react-icons/bs";
import {BiCopyright} from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer className="bg-light p-3">
      <div className="d-flex justify-content-center align-items-center"><p><BiCopyright/></p><p>Copyright Vincenzo Picone</p> <p className="fw-bold">{currentYear}</p> </div>
      <div className="d-flex justify-content-center align-items-center">
      <BsGithub />
        <Link
          className="text-dark text-decoration-none mx-1"
          to={"https://github.com/Vincenzopicone"}
        > GitHub{" - "}
        </Link>
        <BsLinkedin />
        <Link
          className="text-dark text-decoration-none mx-1"
          to={"https://www.linkedin.com/in/vincenzo-picone-1032811a4/"}
        >
          LinkedIn{" "}
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
