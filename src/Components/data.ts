import apsmart from '../assets/apsmart.png';
import hobusy from '../assets/hobusy.png';
import chong from '../assets/chong.png';
import jjb from '../assets/jjb.png';
interface Project {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    link: string;
}
export const projects:Project[] = [
    {
        title: "Online Hospital Management System",
        subtitle: "Laravel Vue3",
        description: "Hospital management from drugs to patients",
        image: apsmart,
        link: "#"
    },
    {
        title: "Multi-Vendor ecommerce ",
        subtitle: "Ionic, React, Laravel",
        description: "multi-vendor e-commerce website",
        image: hobusy,
        link: "https://hobusy.com"
    },
    {
        title: "Online blog",
        subtitle: "Laravel React, Jetstream, InertiaJs",
        description: "A blog built using laravel and inertia js",
        image: chong,
        link: "https://chongaichronicles.com"
    },
    {
        title: "Online Factory Management System",
        subtitle: "Ionic React, Laravel",
        description: "Bread Factory management for the smooth running of the company",
        image: jjb,
        link: "https://jjbfoods.com"
    }
]

export const skills = [
    {
        name: "PHP",
        logo: "./public/php.svg",
        rate: 4
    },
    {
        name: "Laravel",
        logo: "./public/laravel.svg",
        rate: 4
    },
    {
        name: "Javascript",
        logo: "./public/javascript.svg",
        rate: 5
    },
    {
        name: "React",
        logo: "./public/react.svg",
        rate: 5
    },
    {
        name: "Vuejs",
        logo: "./public/vue.svg",
        rate: 4
    },
    {
        name: "NodeJs",
        logo: "./public/nodejs.svg",
        rate: 3
    },
    {
        name: "NextJs",
        logo: "./public/nextjs.svg",
        rate: 2
    },
    {
        name: "ExpressJs",
        logo: "./public/express.svg",
        rate: 3
    },
    {
        name: "Electron",
        logo: "./public/electron.svg",
        rate: 3
    },
    {
        name: "Html",
        logo: "./public/html.svg",
        rate: 5
    },
    {
        name: "Css",
        logo: "./public/css.svg",
        rate: 4
    },
    {
        name: "Tailwind Css",
        logo: "./public/tailwind-css.svg",
        rate: 4
    },
    {
        name: "Rust",
        logo: "./public/rust.svg",
        rate: 3
    },
    {
        name: "Tauri",
        logo: "./public/tauri.svg",
        rate: 2
    },
]