import booksAndBreakfastImg from '../assets/projects/b&b.jpg';
import preludePlannerImg from '../assets/projects/prelude.png';
import personalWebsiteImg from '../assets/projects/personal-web.jpg';

const projectData = [
  {
    id: 1,
    type: "business",
    title: "books and breakfast",
    description: "mobile app built for new b&b members. includes organization resources, assigned volunteer school selector, and school-specific volunteer chats",
    skills: ["react native", "typescript", "expo", "firebase"],
    imgSrc: booksAndBreakfastImg
  },
  {
    id: 2,
    type: "business",
    title: "prelude planner",
    description: "mobile lesson scheduling app for studios in Northwestern's Bienen School of Music to enhance scheduling efficiency",
    skills: ["react native", "javascript", "node.js", "socket.io", "express"],
    imgSrc: preludePlannerImg
  },
  {
    id: 3,
    type: "personal",
    title: "personal website",
    description: "this website was built to showcase my project portfolio, skills, and love for design!",
    skills: ["react.js", "html", "css", "javascript"],
    imgSrc: personalWebsiteImg
  }
];

export default projectData;
