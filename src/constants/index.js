import {
  benefitIcon1,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  searchMd,
  slack,
  sliders04,
  telegram,

} from "../assets";

import ClientLogo4 from '../assets/Images/gdg cloud kolkata.png';
import ClientLogo5 from '../assets/Images/gdg patna.jpg';
import ClientLogo6 from '../assets/Images/code camp.png';
import Whatsapp from '../assets/Images/icons8-whatsapp-48.png';





export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#Home",
  },
  {
    id: "1",
    title: "About",
    url: "#features",
  },
  {
    id: "3",
    title: "Team",
    url: "#Team",
  },
  {
    id: "4",
    title: "Opportunities",
    url: "#roadmap",
  },
  {
    id: "7",
    title: "Contact Us",
    url: "#contact-us",
  },

  {
    id: "8",
    title: "Join Us",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [ClientLogo5, ClientLogo4, ClientLogo6];

export const brainwaveServices = [
  "Engage and collaborate with other students.",
  "Expert mentor support and guidance at every step.",
  "Exclusive webinars and workshops led by industry experts.",
  "Exciting hackathons and valuable internship opportunities.",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Join Us As Mentor",
    text: "Join us as a mentor and shape the future of aspiring developers.",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Join Our Core team",
    text:
      "Join our core team and make an impact in the tech community.",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Volunteer Us",
    text: "Volunteer with us and contribute to meaningful projects and growth.",
    imageUrl: roadmap3,
  },

];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "LinkedIn",
    text: "Stay connected with us on LinkedIn for the latest tech insights and updates on our upcoming sessions.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    link: "https://www.linkedin.com/company/coding-pixels-in/",
  },
  {
    id: "1",
    title: "Discord",
    text: "Join our Discord community to connect with students worldwide and get your tech questions answered by our mentors.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: discord,
    imageUrl: benefitImage2,
    light: true,
    link: "https://discord.gg/K65rhGfa",

  },
  {
    id: "2",
    title: "Telegram",
    text: "Join our Telegram channel to access top resources and stay updated on the latest opportunities.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: telegram,
    imageUrl: benefitImage2,
    link: "https://t.me/+ZL85DON3XZg3ZDhl",

  },
  {
    id: "3",
    title: "Instagram",
    text: "Follow us on Instagram for valuable resources, technical tips, and a dose of programming memes.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: instagram,
    imageUrl: benefitImage2,
    light: true,
    link: "https://www.instagram.com/codingpixels.in/",

  },
  {
    id: "4",
    title: "Whatsapp",
    text: "Join our WhatsApp Community to connect and collaborate with like-minded developers from around the world.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: Whatsapp,
    imageUrl: benefitImage2,
    link: "https://chat.whatsapp.com/JvbEDKkMsRdAShRXY726Lv",

  },

];



export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "https://discord.gg/K65rhGfa",
  },
  {
    id: "1",
    title: "whatsapp",
    iconUrl: Whatsapp,
    url: "https://chat.whatsapp.com/JvbEDKkMsRdAShRXY726Lv",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/codingpixels.in/",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "https://t.me/+ZL85DON3XZg3ZDhl",
  },
  {
    id: "5",
    title: "LinkedIn",
    iconUrl: benefitIcon1,
    url: "https://www.linkedin.com/company/coding-pixels-in/",
  },
];
