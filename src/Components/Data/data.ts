import apsmart from "../../assets/apsmart.png";
import hobusy from "../../assets/hobusy.png";
import chong from "../../assets/chong.png";
import jjb from "../../assets/jjb.png";
import imagine from "../../assets/imagine.png";

import css from "../../assets/skills/css.svg";
import electron from "../../assets/skills/electron.svg";
import express from "../../assets/skills/express.svg";
import html from "../../assets/skills/html.svg";
import javascript from "../../assets/skills/javascript.svg";
import laravel from "../../assets/skills/laravel.svg";
import nextjs from "../../assets/skills/nextjs.svg";
import nodejs from "../../assets/skills/nodejs.svg";
import php from "../../assets/skills/php.svg";
import react from "../../assets/skills/react.svg";
import rust from "../../assets/skills/rust.svg";
import tailwind from "../../assets/skills/tailwind-css.svg";
import tauri from "../../assets/skills/tauri.svg";
import vue from "../../assets/skills/vue.svg";
import angular from "../../assets/skills/angular.svg";
import typescript from "../../assets/skills/typescript.svg";
import bootstrap from "../../assets/skills/bootstrap.svg";
import jquery from "../../assets/skills/jquery.svg";
import react_native from "../../assets/skills/react-native.svg";
interface Project {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
}
export const projects: Project[] = [
  {
    title: "Online Hospital Management System",
    subtitle: "Laravel Vue3",
    description: "Hospital management from drugs to patients",
    image: apsmart,
    link: "#",
  },
  {
    title: "Multi-Vendor ecommerce ",
    subtitle: "Ionic, React, Laravel",
    description: "multi-vendor e-commerce website",
    image: hobusy,
    link: "#",
  },
  {
    title: "Online blog",
    subtitle: "Laravel React, Jetstream, InertiaJs",
    description: "A blog built using laravel and inertia js",
    image: chong,
    link: "#",
  },
  {
    title: "Online Factory Management System",
    subtitle: "Ionic React, Laravel",
    description:
      "Bread Factory management for the smooth running of the company",
    image: jjb,
    link: "https://app.jjbfoods.com",
  },
  {
    title: "Imagine Early Years and Elementary",
    subtitle: "PHP, Laravel, JQuery, InertiaJs, React",
    description: "Imagine Early Years and Elementary website",
    image: imagine,
    link: "https://imagineee.com",
  },
];

export const skills = [
  {
    name: "PHP",
    logo: php,
    rate: 4,
  },
  {
    name: "Laravel",
    logo: laravel,
    rate: 4,
  },
  {
    name: "JavaScript",
    logo: javascript,
    rate: 5,
  },
  {
    name: "TypeScript",
    logo: typescript,
    rate: 3,
  },
  {
    name: "React",
    logo: react,
    rate: 5,
  },
  {
    name: "React Native",
    logo: react_native,
    rate: 2,
  },
  {
    name: "Vuejs",
    logo: vue,
    rate: 4,
  },
  {
    name: "Angular",
    logo: angular,
    rate: 3,
  },
  {
    name: "JQuery",
    logo: jquery,
    rate: 5,
  },
  {
    name: "NodeJs",
    logo: nodejs,
    rate: 3,
  },
  {
    name: "NextJs",
    logo: nextjs,
    rate: 2,
  },
  {
    name: "ExpressJs",
    logo: express,
    rate: 3,
  },
  {
    name: "Electron",
    logo: electron,
    rate: 3,
  },
  {
    name: "Html",
    logo: html,
    rate: 5,
  },
  {
    name: "Css",
    logo: css,
    rate: 4,
  },
  {
    name: "Tailwind Css",
    logo: tailwind,
    rate: 4,
  },
  {
    name: "Bootstrap",
    logo: bootstrap,
    rate: 5,
  },
  {
    name: "Rust",
    logo: rust,
    rate: 3,
  },
  {
    name: "Tauri",
    logo: tauri,
    rate: 2,
  },
];
