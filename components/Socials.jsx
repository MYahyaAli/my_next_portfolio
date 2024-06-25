import { Item } from "@radix-ui/react-select";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/MYahyaAli" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/mohammadyahya-faizarali/" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/myahya.ali/" },
];

const Socials = ({containerStyles,iconStyles}) => {
    return (
      <div className={containerStyles}>
        {socials.map((item,index)=>{
            return <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
        })}
      </div>
    )
  }
export default Socials;