import booksAndBreakfastImg from '../assets/projects/b&b.jpg';
import preludePlannerImg from '../assets/projects/prelude.png';
import personalWebsiteImg from '../assets/projects/personal-web.jpg';
import socoImg from '../assets/projects/soco.jpg';
import artImg from '../assets/projects/art.jpg';

const projectData = [
  {
    id: 1,
    type: "business",
    title: "books and breakfast",
    description: "mobile app built for new b&b members. includes organization resources, assigned volunteer school selector, and school-specific volunteer chats",
    skills: ["react native", "typescript", "expo", "firebase"],
    imgSrc: booksAndBreakfastImg,
    link: "https://apps.apple.com/us/app/books-breakfast/id6670306978"
  },
  {
    id: 2,
    type: "business",
    title: "soco",
    description: "student startup developing a physical-digital companion comprising of a robotic stand and mobile app that captures candid photos of meaningful, interpersonal moments",
    skills: ["react native", "typescript", "expo"],
    imgSrc: socoImg,
    link: "https://www.thegarage.northwestern.edu"
  },
  {
    id: 3,
    type: "personal",
    title: "personal website",
    description: "this website was built to showcase my project portfolio, skills, and love for design!",
    skills: ["react.js", "html", "css", "javascript"],
    imgSrc: personalWebsiteImg
  },
  {
    id: 4,
    type: "business",
    title: "prelude planner",
    description: "mobile lesson scheduling app for studios in Northwestern's Bienen School of Music to enhance scheduling efficiency",
    skills: ["react native", "javascript", "node.js", "socket.io", "express"],
    imgSrc: preludePlannerImg
  },
  {
    id: 5,
    type: "personal",
    title: "art portfolio [COMING SOON]",
    description: "a collection of my art projects",
    skills: ["procreate", "clip studio paint"],
    imgSrc: artImg
  }
];

export default projectData;
