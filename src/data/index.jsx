import {
  FaGithub, FaLinkedinIn, FaFacebookF, FaWhatsapp, FaInstagram, FaXTwitter,
  FaYoutube, FaTelegram, FaDiscord, FaTiktok, FaEnvelope,
} from 'react-icons/fa6'
import {
  SiHtml5, SiCss, SiJavascript, SiJquery, SiReact, SiRedux, SiNodedotjs, SiExpress,
  SiFigma, SiGit, SiGithub, SiTailwindcss, SiVite, SiNetlify, SiVercel, SiPhp, SiNpm, SiJest, SiFramer,
} from 'react-icons/si'
import {
  LuCode, LuPalette, LuBug, LuServer, LuGraduationCap, LuBriefcase, LuClock,
  LuMessageCircle, LuRocket, LuLightbulb, LuTarget, LuPenTool, LuGauge, LuSmartphone, LuHeart, LuUsers,
} from 'react-icons/lu'

import imgPortrait from '../assets/images/image.webp'
import imgDev from '../assets/images/developer.webp'
import p1 from '../assets/images/project1.webp'
import p2 from '../assets/images/project2.webp'
import p3 from '../assets/images/project3.webp'
import p4 from '../assets/images/project4.webp'
import p5 from '../assets/images/project5.webp'
import p6 from '../assets/images/project6.webp'
import p7 from '../assets/images/project7.webp'
import p8 from '../assets/images/project8.webp'
import p9 from '../assets/images/project9.webp'
import p10 from '../assets/images/project10.webp'
import p11 from '../assets/images/project11.webp'
import p12 from '../assets/images/project12.webp'
import p13 from '../assets/images/project13.webp'
import p14 from '../assets/images/project14.webp'
import p15 from '../assets/images/project15.webp'
import p16 from '../assets/images/project16.webp'

export { imgPortrait, imgDev }

/* ------------------------------------------------------------------ */
/*  PROFIL                                                             */
/* ------------------------------------------------------------------ */
export const profile = {
  name: 'Jean RABEMANALINA',
  shortName: 'RJMV',
  title: 'Développeur Front-end React',
  roles: ['Développeur Front-end', 'Développeur Concepteur Logiciel', 'Intégrateur web', 'UI / UX Designer'],
  tagline:
    "Je conçois des sites et applications web modernes, rapides et responsive — de la maquette Figma jusqu'à la mise en ligne.",
  email: import.meta.env.VITE_CONTACT_EMAIL || 'vianey.jean1@gmail.com',
  whatsapp: '262692842370',
  cv: '/CV_Jean_Rabemanalina.pdf',
}

/* ------------------------------------------------------------------ */
/*  RÉSEAUX SOCIAUX                                                    */
/*  → Remplacez les liens « racine » (Instagram, X, YouTube, ...) par  */
/*    vos vrais profils.                                               */
/* ------------------------------------------------------------------ */
export const socials = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/vianey-jean', icon: FaGithub, color: '#8b5cf6' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/jean-marie-rabemanalina/', icon: FaLinkedinIn, color: '#0a66c2' },
  { id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/jeanmarievianey.rabemanalina', icon: FaFacebookF, color: '#1877f2' },
  { id: 'whatsapp', label: 'WhatsApp', href: `https://wa.me/${profile.whatsapp}`, icon: FaWhatsapp, color: '#25d366' },
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/', icon: FaInstagram, color: '#e1306c' },
  { id: 'x', label: 'X (Twitter)', href: 'https://x.com/', icon: FaXTwitter, color: '#9ca3af' },
  { id: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/', icon: FaYoutube, color: '#ff0000' },
  { id: 'telegram', label: 'Telegram', href: 'https://t.me/', icon: FaTelegram, color: '#26a5e4' },
  { id: 'discord', label: 'Discord', href: 'https://discord.com/', icon: FaDiscord, color: '#5865f2' },
  { id: 'tiktok', label: 'TikTok', href: 'https://www.tiktok.com/', icon: FaTiktok, color: '#ff0050' },
  { id: 'email', label: 'E-mail', href: `mailto:${profile.email}`, icon: FaEnvelope, color: '#f59e0b' },
]

/* ------------------------------------------------------------------ */
/*  NAVIGATION                                                         */
/* ------------------------------------------------------------------ */
export const navLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/experience', label: 'Expérience' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact' },
]

/* ------------------------------------------------------------------ */
/*  STATS                                                              */
/* ------------------------------------------------------------------ */
export const stats = [
  { id: 1, value: 2, suffix: '+', label: "Ans de formation intensive" },
  { id: 2, value: 16, suffix: '+', label: 'Projets réalisés' },
  { id: 3, value: 2, suffix: '', label: 'Certifications' },
  { id: 4, value: 100, suffix: '%', label: 'Engagement & passion' },
]

/* ------------------------------------------------------------------ */
/*  COMPÉTENCES                                                        */
/* ------------------------------------------------------------------ */
export const skillGroups = [
  {
    id: 'front', title: 'Front-end',
    items: [
      { name: 'HTML5', icon: SiHtml5, color: '#e34f26' },
      { name: 'CSS3', icon: SiCss, color: '#1572b6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
      { name: 'jQuery', icon: SiJquery, color: '#0769ad' },
      { name: 'React', icon: SiReact, color: '#61dafb' },
      { name: 'Redux', icon: SiRedux, color: '#764abc' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38bdf8' },
      { name: 'Framer Motion', icon: SiFramer, color: '#ff0055' },
    ],
  },
  {
    id: 'back', title: 'Back-end & API',
    items: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#5fa04e' },
      { name: 'Express', icon: SiExpress, color: '#9ca3af' },
      { name: 'PHP', icon: SiPhp, color: '#777bb4' },
    ],
  },
  {
    id: 'tools', title: 'Outils & déploiement',
    items: [
      { name: 'Git', icon: SiGit, color: '#f05032' },
      { name: 'GitHub', icon: SiGithub, color: '#8b5cf6' },
      { name: 'Vite', icon: SiVite, color: '#a855f7' },
      { name: 'npm', icon: SiNpm, color: '#cb3837' },
      { name: 'Jest', icon: SiJest, color: '#c21325' },
      { name: 'Figma', icon: SiFigma, color: '#f24e1e' },
      { name: 'Netlify', icon: SiNetlify, color: '#00c7b7' },
      { name: 'Vercel', icon: SiVercel, color: '#9ca3af' },
    ],
  },
]
export const allSkills = skillGroups.flatMap((g) => g.items)

/* ------------------------------------------------------------------ */
/*  SERVICES / EXPERTISES                                              */
/* ------------------------------------------------------------------ */
export const services = [
  {
    id: 1, icon: LuPenTool, title: 'UI / UX Design',
    desc: "Identifier les besoins de l'application à partir d'un cahier des charges, modéliser une solution technique et créer une maquette pour le client.",
  },
  {
    id: 2, icon: LuCode, title: 'Développement Front-end',
    desc: "Développer des éléments graphiques avancés avec des bibliothèques JavaScript et produire la documentation technique de l'application.",
  },
  {
    id: 3, icon: LuBug, title: 'Débogage & tests',
    desc: "Débugger une application web avec le Chrome Debugger, écrire des tests unitaires et des tests d'intégration avec JavaScript.",
  },
  {
    id: 4, icon: LuServer, title: 'API avec Node.js',
    desc: "Implémenter un gestionnaire d'état dans une application React, interagir avec une API, la modéliser et s'y authentifier.",
  },
  {
    id: 5, icon: LuSmartphone, title: 'Responsive & mobile-first',
    desc: "Des interfaces fluides et accessibles sur mobile, tablette et desktop, pensées d'abord pour les petits écrans.",
  },
  {
    id: 6, icon: LuGauge, title: 'Performance & SEO',
    desc: "Optimisation des images, chargement rapide, bonnes pratiques d'accessibilité et de référencement dès la conception.",
  },
]

/* ------------------------------------------------------------------ */
/*  EXPÉRIENCE / PARCOURS                                              */
/*  → Modifiez librement ces blocs (dates, structures, missions).      */
/* ------------------------------------------------------------------ */
export const timeline = [
  {
    id: 1, icon: LuBriefcase, type: 'Expérience',
    title: 'Développeur Front-end — Missions web',
    place: 'Création de sites & applications web',
    period: "Aujourd'hui",
    desc: "Conception et développement de sites vitrines, d'applications React et d'interfaces responsive pour des clients et des projets personnels.",
    tags: ['React', 'JavaScript', 'Tailwind', 'Figma'],
  },
  {
    id: 2, icon: LuGraduationCap, type: 'Formation',
    title: "Développeur Concepteur Logiciel",
    place: 'OpenClassrooms — niveau Bac +3/4',
    period: '2+ ans de formation intensive',
    desc: "Parcours professionnalisant : 14 projets complets (React, Redux, API, accessibilité, tests, animations CSS) validés par des soutenances.",
    tags: ['React', 'Redux', 'Node.js', 'Tests', 'Accessibilité'],
  },
  {
    id: 3, icon: LuRocket, type: 'Projets',
    title: 'Bibliothèque npm & applications React',
    place: 'Open source — GitHub',
    period: 'Projets personnels',
    desc: "Publication d'un module modal sur npm, clones d'applications (YouTube, Agenda, Pomodoro, ToDo) et migration d'une librairie jQuery vers React.",
    tags: ['npm', 'React', 'jQuery', 'Vercel'],
  },
]

export const education = [
  { id: 1, title: "Développeur Concepteur Logiciel", school: 'OpenClassrooms', level: 'Bac +3/4' },
]

/* ------------------------------------------------------------------ */
/*  VALEURS / QUALITÉS                                                 */
/* ------------------------------------------------------------------ */
export const values = [
  { id: 1, icon: LuClock, title: 'Gestion du temps', desc: "Une utilisation efficace du temps pour tenir les délais sans sacrifier la qualité." },
  { id: 2, icon: LuLightbulb, title: 'Résolution de problèmes', desc: "Une approche méthodique pour analyser, déboguer et trouver la meilleure solution." },
  { id: 3, icon: LuMessageCircle, title: 'Communication', desc: "Des échanges clairs et réguliers pour que vous suiviez le projet de A à Z." },
  { id: 4, icon: LuTarget, title: "Volonté d'apprendre", desc: "Une adaptation rapide aux nouveaux outils, frameworks et situations changeantes." },
  { id: 5, icon: LuHeart, title: 'Passion', desc: "Créatif, autonome et passionné : chaque projet est une occasion de faire mieux." },
  { id: 6, icon: LuUsers, title: 'Esprit collaboratif', desc: "Habitué au travail à distance, aux revues de code et aux workflows Git." },
]

/* ------------------------------------------------------------------ */
/*  PROCESSUS                                                          */
/* ------------------------------------------------------------------ */
export const process = [
  { id: 1, title: 'Découverte', desc: "On échange sur vos objectifs, votre cible et vos contraintes pour définir un cahier des charges clair." },
  { id: 2, title: 'Maquette', desc: "Wireframes et maquettes Figma validés ensemble avant d'écrire la moindre ligne de code." },
  { id: 3, title: 'Développement', desc: "Intégration en React, composants réutilisables, tests et revues régulières." },
  { id: 4, title: 'Mise en ligne', desc: "Déploiement, optimisation des performances, référencement et suivi après livraison." },
]

/* ------------------------------------------------------------------ */
/*  PROJETS                                                            */
/* ------------------------------------------------------------------ */
export const categories = [
  { id: 'all', label: 'Tous' },
  { id: 'react', label: 'React' },
  { id: 'javascript', label: 'JavaScript' },
  { id: 'mini-project', label: 'Mini-projets' },
  { id: 'react/Vite', label: 'React/Vite' },
  { id: 'npm', label: 'npm' },
  { id: 'php', label: 'PHP' },  
]

export const projects = [
  { id: 1, category: 'react', image: p1, title: 'SportSee', desc: "Développez un tableau de bord d'analytics avec React", tags: ['React', 'Recharts', 'API'], featured: true,
    demo: 'https://rjmv-p12-sportsee-jean-rabe.netlify.app/', github: 'https://github.com/vianey-jean/sportsee_jean_rabemanalina.git' },
  { id: 2, category: 'react', image: p2, title: 'ArgentBank', desc: 'Utilisez une API pour un compte utilisateur bancaire avec React', tags: ['React', 'Redux', 'API'], featured: true,
    demo: 'https://rjmv-p13-argent-bank-jean-rabe.netlify.app/', github: 'https://github.com/vianey-jean/Jean_Rabemanalina_13_Bank_API.git' },
  { id: 3, category: 'javascript', image: p3, title: 'Les petits plats', desc: 'Développez un algorithme de recherche en JavaScript', tags: ['JavaScript', 'Algorithmes'], featured: true,
    demo: 'https://vianey-jean.github.io/P07-Les-Petits-Plats-15-05-2022/', github: 'https://github.com/vianey-jean/P07-Les-Petits-Plats-15-05-2022/tree/dev' },
  { id: 4, category: 'react', image: p4, title: 'Wealth Health', desc: 'Faites passer une librairie jQuery vers React', tags: ['React', 'jQuery', 'Migration'], featured: true,
    demo: 'https://hrnet-jean-rabemanalina.netlify.app/', github: 'https://github.com/vianey-jean/Jean_Rabemanalina_14_HRNet.git' },
  { id: 5, category: 'php', image: p5, title: 'GestionPI', desc: "Gestion de réservation d'ordinateurs", tags: ['PHP', 'Gestion'],
    github: 'https://github.com/vianey-jean/GestionPI.github.io.git' },
  { id: 6, category: 'npm', image: p6, title: 'HRNet — modal npm', desc: "Modal d'application publiée dans une bibliothèque npm", tags: ['npm', 'React', 'Librairie'], featured: true,
    demo: 'https://www.npmjs.com/package/modal_rjmv', github: 'https://github.com/vianey-jean/modal_rjmv.git' },
  { id: 7, category: 'javascript', image: p7, title: 'Ohmyfood', desc: 'Dynamisez une page web avec des animations CSS', tags: ['CSS', 'Animations', 'Sass'], featured: true,
    demo: 'https://vianey-jean.github.io/Jean.RABEMANALINA_3_13012022/', github: 'https://github.com/vianey-jean/Jean.RABEMANALINA_3_13012022' },
  { id: 8, category: 'mini-project', image: p8, title: 'FrontEndAjax', desc: "Création d'une application utilisant Ajax", tags: ['JavaScript', 'Ajax'],
    demo: 'https://vianey-jean.github.io/FrontEndAjax/', github: 'https://github.com/vianey-jean/FrontEndAjax.git' },
  { id: 9, category: 'javascript', image: p9, title: 'Fisheye', desc: 'Créez un site accessible pour une plateforme de photographes', tags: ['JavaScript', 'Accessibilité'],
    demo: 'https://vianey-jean.github.io/Front-End-Fisheye/', github: 'https://github.com/vianey-jean/Front-End-Fisheye.git' },
  { id: 10, category: 'javascript', image: p10, title: 'Booki', desc: 'Transformez une maquette en site web avec HTML & CSS', tags: ['HTML', 'CSS', 'Responsive'],
    demo: 'https://vianey-jean.github.io/Rabe.Booki-github.io/', github: 'https://github.com/vianey-jean/Rabe.Booki-github.io.git' },
  { id: 11, category: 'mini-project', image: p11, title: 'ToDoApp', desc: 'Application ToDo développée avec React', tags: ['React', 'Hooks'],
    demo: 'https://to-do-app-sage-kappa.vercel.app/', github: 'https://github.com/vianey-jean/ToDoApp.git' },
  { id: 12, category: 'mini-project', image: p12, title: 'PomodoroApp', desc: 'Application Pomodoro développée avec React', tags: ['React', 'Timer'],
    demo: 'https://pomodoroappreact.netlify.app/', github: 'https://github.com/vianey-jean/PomodoroApp-React.git' },
  { id: 13, category: 'react', image: p13, title: 'Agendas App', desc: 'Application Agenda développée avec React', tags: ['React', 'Calendrier'],
    github: 'https://github.com/vianey-jean/React-Agenda.git' },
  { id: 14, category: 'react', image: p14, title: 'YouTube App', desc: 'Clone de YouTube développé avec React', tags: ['React', 'API', 'Clone'],
    demo: 'https://youtubes-react.vercel.app/', github: 'https://github.com/vianey-jean/Youtube-clone-react' },
  { id: 15, category: 'react/Vite', image: p15, title: 'Gestion Ventes', desc: 'Clone de YouTube développé avec React', tags: ['React', 'API', 'Clone'],
    demo: 'https://riziky-gestion-ventes.vercel.app/', github: 'https://github.com/vianey-jean/gestion-ventes' },
  { id: 16, category: 'react/Vite', image: p16, title: 'e-commerce Riziky Boutic', desc: 'Clone de YouTube développé avec React', tags: ['React', 'API', 'Clone'],
    demo: 'https://riziky-boutic.vercel.app/', github: 'https://github.com/vianey-jean/Riziky-Boutic' },
]

/* ------------------------------------------------------------------ */
/*  FAQ                                                                */
/* ------------------------------------------------------------------ */
export const faqs = [
  { id: 1, q: 'De quoi avez-vous besoin pour démarrer mon projet ?',
    a: "Cela dépend du type de projet, mais en général une idée claire de ce que vous souhaitez suffit : on affine ensuite ensemble le besoin, les fonctionnalités et le design." },
  { id: 2, q: 'Combien de temps prendra mon projet ?',
    a: "Cela dépend de la complexité du projet et de votre disponibilité pour les validations. Une fois le périmètre défini, je vous communique une date de livraison." },
  { id: 3, q: "L'hébergement et le nom de domaine sont-ils inclus ?",
    a: "L'hébergement et le nom de domaine sont gérés séparément : vous pouvez les prendre en charge vous-même, ou je vous accompagne dans leur configuration." },
  { id: 4, q: 'Combien coûte un site ou une application ?',
    a: "Chaque projet est différent : envoyez-moi les détails via le formulaire de contact et je vous réponds avec une proposition adaptée à votre budget." },
  { id: 5, q: 'Que se passe-t-il si le résultat ne me convient pas ?',
    a: "Vous êtes associé au projet dès le début et suivez son avancement jusqu'au bout : les retours sont intégrés en continu pour livrer un résultat qui vous correspond." },
]
