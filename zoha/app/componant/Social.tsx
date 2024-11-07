import React from "react";
import Image from "next/image";
import fb from "./Images/facebook-round-svgrepo-com.svg";
import lnkdn from "./Images/linkedin-round-svgrepo-com.svg";
import github from "./Images/github-round-svgrepo-com.svg";
import Link from "next/link";
const Social = () => {
  return (
    <div className="social">
      <Link href="https://www.facebook.com/" target="blank">
        <Image
          alt="Facebook"
          src={fb}
          width={100}
          height={100}
          className="socialicon"
        />
      </Link>

      <Link href="https://www.linkedin.com/in/zoha-khan-developer?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="blank">
        <Image
          alt="linkedin"
          src={lnkdn}
          width={100}
          height={100}
          className="socialicon"
        />
      </Link>

      <Link href="https://github.com/dashboard" target="blank">
        <Image
          alt="github"
          src={github}
          width={100}
          height={100}
          className="socialicon"
        />
      </Link>
    </div>
  );
};

export default Social;
