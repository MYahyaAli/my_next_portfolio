import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaAws,
  FaWordpress,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { TbApi } from "react-icons/tb";

// Icon is a component reference (not JSX) so this list can be imported
// from server components too, where only skillsList.length is needed.
export const skillsList = [
  { icon: FaHtml5, name: "Html5" },
  { icon: FaCss3, name: "CSS3" },
  { icon: FaJs, name: "JavaScript" },
  { icon: FaReact, name: "React.js" },
  { icon: FaNodeJs, name: "Node.js" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiTailwindcss, name: "Tailwind.css" },
  { icon: FaFigma, name: "Figma" },
  { icon: FaAws, name: "AWS" },
  { icon: FaWordpress, name: "WordPress" },
  { icon: FaDatabase, name: "SQL/NoSQL" },
  { icon: TbApi, name: "REST APIs" },
];
