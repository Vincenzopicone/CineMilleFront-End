import { BsLinkedin, BsGithub } from "react-icons/bs";
import { BiCopyright } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer className="bg-dark p-4 text-warning">
      <div className="d-flex justify-content-center align-items-center mb-3">
          <BiCopyright />
        <div className="ms-1">Vincenzo Picone</div>{" "}
        <div className="fw-bold ms-2">{currentYear}</div>{" "}
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <BsGithub />
        <Link
          className="text-warning text-decoration-none mx-1"
          to={"https://github.com/Vincenzopicone"}
        >
          {" "}
          GitHub{" - "}
        </Link>
        <BsLinkedin />
        <Link
          className="text-warning text-decoration-none mx-1"
          to={"https://www.linkedin.com/in/vincenzo-picone-1032811a4/"}
        >
          LinkedIn{" "}
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
