import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Vicent Sornosa | FS Developer ',
  lang: 'en, es', // e.g: en, es, fr, jp
  description: 'Welcome to my personal portfolio',
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: 'Discover more!',
};

// ABOUT DATA
export const aboutData = {
  img: 'VicentSornosa.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'ignis.png',
    title: '🚀 Hyperloop UPV: 18 months',
    info: 'A year of near full stack experience where the aim was to code a functional and aesthetic GUI, using Angular framework with a Java connected middleware, to visualize in a logical manner more than 500 sensors located in our pod prototype named IGNIS.',
    info2: 'HTML5, CSS3 + SCSS, Typescript + Angular 11, Java + RabbitMQ & Docker',
    url: 'https://hyperloopupv.com/#/', // if no url, the button will not show up
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'bounselWeb.png',
    title: '📊 Bounsel: 6 months (till present)',
    info: '6 month internship invested in improving app performance using a new tech stack. Challenging deadlines and solving critical app functionalities were the two main challenges during this work experience.',
    info2:
      'JS + refactoring from Vue2 to Vue3, GraphQL, hexagonal backend architecture (NestJS), MongoDB, Redis & Docker + Kubernetes',
    url: 'https://www.bounsel.com/', // if no url, the button will not show up
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'portfolio.png',
    title: '📍 Personal portfolio',
    info: 'My own webpage showcasing my professional career and some of the projects done throughout the full stack journey!',
    info2: 'React + JSX + SCSS',
    url: 'https://www.vicentsornosa.com', // if no url, the button will not show up
    repo: 'https://github.com/vsornosa1/portfolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'conecta4.png',
    title: '👾 Conecta4 - full game app',
    info: 'Single and multiplayer game developed to understand the experience of doing a whole app from scratch including prototyping, UI, logic design and database',
    info2: 'FXML (SceneBuilder) + CSS3, JavaFX + SQL',
    url: '', // if no url, the button will not show up
    repo: 'https://github.com/vsornosa1/Conecta-4', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'sportify.png',
    title: '🏅 Sportify app',
    info: 'Full prototype app design in Figma and potentially I see a future startup, coding coming soon!',
    info2: 'UX/UI Figma prototypes',
    url: 'https://www.figma.com/file/ki1KyPsNwm9VLNHoBX3VgH/UX%2FUI-prototypes---Sportify-app?node-id=0%3A1', // if no url, the button will not show up
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'vsornosarisen@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/vicentsornosa/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/vsornosa1',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false,
};
