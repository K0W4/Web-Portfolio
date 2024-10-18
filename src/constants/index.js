import icon from "../assets/icon.png";

import {
    calculator,
    cinema,
    cloud,
    css,
    git,
    github,
    html,
    javascript,
    mongodb,
    nodejs,
    react,
    tailwindcss,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    }
];

export const projects = [
    {
        iconUrl: calculator,
        theme: 'btn-back-green',
        name: 'Calculator',
        description: 'A visually appealing calculator using HTML, CSS, and JavaScript.',
        link: 'https://github.com/K0W4/Calculadora',
    },
    {
        iconUrl: cloud,
        theme: 'btn-back-blue',
        name: 'Wheater App',
        description: 'A weather app utilizing external APIs to complete its functionalities.',
        link: 'https://github.com/K0W4/Clima-App',
    },
    {
        iconUrl: cinema,
        theme: 'btn-back-pink',
        name: 'API Films',
        description: 'A API that collects movie review data and stores it in a database.',
        link: 'https://github.com/K0W4/API-Filmes',
    },
    {
        iconUrl: icon,
        theme: 'btn-back-orange',
        name: 'Web Portfolio',
        description: 'A web portfolio that utilizes 3D animations and various React features',
        link: 'https://github.com/K0W4/Web-Portfolio',
    }
];