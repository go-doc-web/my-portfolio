import { v4 as uuidv4 } from "uuid";

export const elementsNavMenu = [
  {
    id: uuidv4(),
    title: "Home",
    path: "/",
    isVisible: true,
    icon: "home",
  },
  {
    id: uuidv4(),
    title: "About",
    path: "#about",
    isVisible: true,
    icon: "user",
  },
  {
    id: uuidv4(),
    title: "Skills",
    path: "#skills",
    isVisible: true,
    icon: "file",
  },
  {
    id: uuidv4(),
    title: "Services",
    path: "#services",
    isVisible: true,
    icon: "service",
  },
  {
    id: uuidv4(),
    title: "Portfolio",
    path: "#portfolio",
    isVisible: true,
    icon: "portfolio",
  },
  {
    id: uuidv4(),
    title: "Contact",
    path: "#contact",
    isVisible: true,
    icon: "contact",
  },
];
