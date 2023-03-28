import { FaAward, FaServer, FaWhatsapp } from 'react-icons/fa'
import { TbBooks, TbCertificate } from 'react-icons/tb'
import { SiFigma } from 'react-icons/si'
import { RiReactjsLine } from 'react-icons/ri'
import { BsPersonFill } from 'react-icons/bs'
import { MdHomeRepairService } from 'react-icons/md'
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillAppstore,
  AiFillMessage,
  AiFillHome,
  AiOutlineFacebook,
} from 'react-icons/ai'
import {
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
} from '../assets/images/index'
import { HiOutlineMail } from 'react-icons/hi'

export const aproposData = [
  { id: 1, icon: <FaAward />, title: 'Experience', desc: '2+ ans de Formation intensif ' },
  { id: 2, icon: <TbBooks />, title: 'Projets', desc: '14+ Complet' },
  {
    id: 3,
    icon: <TbCertificate />,
    title: 'Certifications',
    desc: '2 Complet',
  },
]

export const headerData = [
  
  { id: 2, 
    link: 'https://www.facebook.com/jeanmarievianey.rabemanalina', 
    icon: <AiOutlineFacebook /> },
  {
    id: 3,
    link: 'https://www.linkedin.com/in/jean-marie-rabemanalina-aa06571a3/',
    icon: <AiFillLinkedin />,
  },
  { id: 4, link: 'https://github.com/vianey-jean', icon: <AiFillGithub /> },
]

export const navbarData = [
  { id: 1, link: '#', title: 'Accueil' },
  { id: 2, link: '#apropos', title: 'Apropos' },
  { id: 3, link: '#services', title: 'Experiences' },
  { id: 4, link: '#portfolio', title: 'Portfolio' },
  { id: 5, link: '#contact', title: 'Contact' },
]

export const servicesData = [
  {
    id: 1,
    icon: <SiFigma />,
    title: 'UI/UX Design',
    desc: "Identifier les besoins de l'application à partir d'un cahier des charges. Modéliser une solution technique pour un client. Créer une maquette pour un client",
  },
  {
    id: 2,
    icon: <RiReactjsLine />,
    title: 'Développeur Front-end',
    desc: "Développer des éléments graphiques avancés à l'aide de bibliothèques JavaScript. Produire de la documentation technique pour une application.",
  },
  {
    id: 3,
    icon: <FaServer />,
    title: 'Débuggez et testez APP Web',
    desc: "Débugger une application web avec le Chrome Debugger. Ecrire des tests unitaires avec JavaScript. Ecrire des tests d'intégration avec JavaScript.",
  },
  {
    id: 4,
    icon: <AiFillAppstore />,
    title: 'Utilisation API avec Nodejs',
    desc: "Implémenter un gestionnaire d'état dans une application React. Intéragir avec une API, Modéliser une API, S'authentifier à une API.",
  },
]

export const portfolioData = [
  {
    id: 1,
    category: 'react',
    image: Image1,
    title: 'SportSee',
    desc: "Développez un tableau de bord d'analytics avec React",
    demo: 'https://rjmv-p12-sportsee-jean-rabe.netlify.app/',
    github: 'https://github.com/vianey-jean/sportsee_jean_rabemanalina.git',
  },
  {
    id: 2,
    category: 'react',
    image: Image2,
    title: 'ArgentBank',
    desc: 'Utilisez une API pour un compte utilisateur bancaire avec React',
    demo: 'https://rjmv-p13-argent-bank-jean-rabe.netlify.app/',
    github: 'https://github.com/vianey-jean/Jean_Rabemanalina_13_Bank_API.git',
  },
  {
    id: 3,
    category: 'javascript',
    image: Image3,
    title: 'Les petits plats',
    desc: 'Développez un algorithme de recherche en JavaScript',
    github: 'https://github.com/vianey-jean/P07-Les-Petits-Plats-15-05-2022/tree/dev',
    demo: 'https://vianey-jean.github.io/P07-Les-Petits-Plats-15-05-2022/',
  },
  {
    id: 4,
    category: 'react',
    image: Image4,
    title: 'Wealth Health',
    desc: 'Faites passer une librairie jQuery vers React',
    demo: 'https://hrnet-jean-rabemanalina.netlify.app/',
    github: 'https://github.com/vianey-jean/Jean_Rabemanalina_14_HRNet.git',
  },
  {
    id: 5,
    category: 'php',
    image: Image5,
    title: 'GestionPI.github.io',
    desc: 'Gestion du reservation ordinateur',
    github: 'https://github.com/vianey-jean/GestionPI.github.io.git',
  },
  {
    id: 6,
    category: 'npm',
    image: Image6,
    title: 'HRNet',
    desc: "Modal d'application dans le bibliothèque npm",
    demo: 'www.npmjs.com/package/modal_rjmv',
    github: 'https://github.com/vianey-jean/modal_rjmv.git',
  },

  {
    id: 7,
    category: 'javascript',
    image: Image7,
    title: 'Ohmyfood',
    desc: 'Dynamisez une page web avec des animations CSS',
    demo: 'https://vianey-jean.github.io/Jean.RABEMANALINA_3_13012022/',
    github: 'https://github.com/vianey-jean/Jean.RABEMANALINA_3_13012022',
  },
  {
    id: 8,
    category: 'mini-project',
    image: Image8,
    title: 'FrontEndAjax',
    desc: "Création du application en utilisation du ajax ",
    demo: 'https://vianey-jean.github.io/FrontEndAjax/',
    github: 'https://github.com/vianey-jean/FrontEndAjax.git',
  },
  {
    id: 9,
    category: 'javascript',
    image: Image9,
    title: 'Fisheye',
    desc: 'Créez un site accessible pour une plateforme de photographes',
    demo: 'https://vianey-jean.github.io/Front-End-Fisheye/',
    github:'https://github.com/vianey-jean/Front-End-Fisheye.git',
  },
  {
    id: 10,
    category: 'javascript',
    image: Image10,
    title: 'Booki',
    desc: 'Transformez une maquette en site web avec HTML & CSS',
    demo: 'https://vianey-jean.github.io/Rabe.Booki-github.io/',
    github: 'https://github.com/vianey-jean/Rabe.Booki-github.io.git',
  },
  {
    id: 11,
    category: 'mini-project',
    image: Image11,
    title: 'ToDoApp',
    desc: 'Développement app ToDo sur React',
    demo: 'https://to-do-app-sage-kappa.vercel.app/',
    github: 'https://github.com/vianey-jean/ToDoApp.git',
  },
]

export const faqsData = [
  {
    id: 1,
    question: 'What do you need to start working on my project?',
    answer:
      'It mostly depends on the type of project. But in general, you need a fair idea of what you want, then we can take it from there.',
  },
  {
    id: 2,
    question: 'How long will my project take to complete?',
    answer:
      'This depends on the complexity of the project, your available, and your payment. Once you have this sorted out, I will give you a completion date.',
  },
  {
    id: 5,
    question: 'Is hosting and domain registration inclusive in your pricing?',
    answer:
      'No! Hosting and domain is taken care of seperately. You can pay for it or take care of it on your own if you know how to.',
  },
  {
    id: 4,
    question: 'How much do you charge for an average website or app?',
    answer:
      "Once again, this depends. But my prices are affordable so you're good.",
  },
  {
    id: 3,
    question: "What's your payment plan?",
    answer:
      'Payment is divided into 3. An initial 30% upfront payment to get me started once all the details of the projec is set, 40% once the project is completed, and 30% once the project is delivered.',
  },
  {
    id: 6,
    question: "What if the project doesn't turn out good?",
    answer:
      'You will be a part of the process from the start. You will know how the whole project is going until the end. And I will make sure to give you the best.',
  },
]

export const contactData = [
  {  id: 1, icon: <HiOutlineMail />, link: 'mailto:vianey1.jean@gmail.com' },
  { id: 2, 
    icon: <FaWhatsapp />, 
    link: 'https://wa.me/+262692842370' },
]

export const socials = [
  { id: 1, link: '#', title: 'Accueil' },
  { id: 2, link: '#apropos', title: 'apropos' },
  { id: 3, link: '#services', title: 'Services' },
  { id: 4, link: '#portfolio', title: 'Portfolio' },
  { id: 5, link: '#contact', title: 'Contact' },
]

export const primaryColors = [
  { className: 'color-1' },
  { className: 'color-2' },
  { className: 'color-3' },
  { className: 'color-4' },
  { className: 'color-5' },
]

export const backgroundColors = [{ className: 'bg-1' }, { className: 'bg-2' }]

export const floatingData = [
  { id: 1, link: '#', icon: <AiFillHome /> },
  { id: 2, link: '#apropos', icon: <BsPersonFill /> },
  { id: 3, link: '#services', icon: <MdHomeRepairService /> },
  { id: 4, link: '#portfolio', icon: <AiFillAppstore /> },
  { id: 5, link: '#contact', icon: <AiFillMessage /> },
]
