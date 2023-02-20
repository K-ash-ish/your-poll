import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="relative  my-4 w-full  bottom-0 flex  justify-around items-center">
      <div className=" social-links text-4xl my-1  text-sky-500">
        <a
          className=" px-6"
          href="https://github.com/K-ash-ish"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          className=" px-6"
          href="https://www.linkedin.com/in/kashish-sondhiya-969120198/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          className=" px-6"
          href="https://twitter.com/KashishSo"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
