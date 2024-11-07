import React from "react";
import Image from "next/image";
import laptop from "@/public/Images/laptop.png";
import "./Name.css"
import Social from "./Social";

const Name = () => {
  return (
    <>
      <div className="name">
        <div>
          <p>Hello, its Me </p>
          <h1>Zoha Khan</h1>
          <p>
            And i&apos;m a <span>frontend Developer</span>
          </p>
          <div className="descr">
          &quot;Hi, I&apos;m Zoha Khan, a frontend developer passionate about crafting
            seamless user experiences. Expertise in HTML, CSS, JavaScript, and
            more.&quot;
          </div>
        </div>
<div>
  
        <Image
          alt="Laptop"
          src={laptop}
          width={500}
          height={500}
          priority={true}
        />
</div>

<div> 
  <Social/>
</div>


      </div>
    </>
  );
};

export default Name;
