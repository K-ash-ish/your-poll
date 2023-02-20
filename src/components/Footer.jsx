import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative  my-4 w-full  bottom-0 flex  justify-around items-center">
      <div className=" social-links text-4xl my-1  text-sky-500">
        <Link className=" px-6" to="https://github.com/K-ash-ish">
          <FontAwesomeIcon icon={faGithub} />
        </Link>
        <Link
          className=" px-6"
          to="https://www.linkedin.com/in/kashish-sondhiya-969120198/"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
        <Link className=" px-6" to="https://twitter.com/KashishSo">
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
