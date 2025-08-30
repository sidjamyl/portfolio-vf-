import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaVideo,
  FaPenNib,
  FaCamera,
  FaPaintBrush,
  FaProjectDiagram,
  FaShareAlt,
  FaGoogle,
  FaFileAlt,
  FaMobileAlt,
  FaEdit,
  FaDesktop,
  FaTools,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiCanva,
  SiNotion,
  SiInstagram,
} from "react-icons/si";
import { Icon } from '@iconify/react';

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Montage vidéo",
        iconifyIcons: [
          { icon: 'simple-icons:capcut', name: 'CapCut' },
          { icon: 'simple-icons:adobepremierepro', name: 'Premiere Pro' },
          { icon: 'simple-icons:adobeaftereffects', name: 'After Effects' },
          { icon: 'simple-icons:davinciresolve', name: 'DaVinci Resolve' }
        ]
      },
      {
        title: "Ecriture de script",
        icons: [FaPenNib, FaEdit],
        iconifyIcons: [
          { icon: 'simple-icons:notion', name: 'Notion' },
          { icon: 'simple-icons:googledocs', name: 'Google Docs' }
        ]
      },
      {
        title: "Tournage de vidéos professionnelles",
        icons: [FaCamera, FaMobileAlt],
        iconifyIcons: [
          { icon: 'simple-icons:sony', name: 'Sony' },
          { icon: 'simple-icons:apple', name: 'iPhone' }
        ]
      },
      {
        title: "Design Graphique",
        icons: [ SiAdobephotoshop],
        iconifyIcons: [
          { icon: 'simple-icons:canva', name: 'Canva' },
          { icon: 'simple-icons:figma', name: 'Figma' },
          { icon: 'simple-icons:adobeillustrator', name: 'Illustrator' }
        ]
      },
      {
        title: "Réalisation de plan de communication",
        icons: [FaProjectDiagram, FaFileAlt],
        iconifyIcons: [
          { icon: 'simple-icons:googlesheets', name: 'Google Sheets' }
        ]
      },
      {
        title: "Gestion des reseaux sociaux",
        iconifyIcons: [
          { icon: 'simple-icons:instagram', name: 'Instagram' },
          { icon: 'simple-icons:tiktok', name: 'TikTok' },
          { icon: 'simple-icons:linkedin', name: 'LinkedIn' }
        ]
      },
    ],

  },
  {
    title: "experience",
    info: [
      {
        title: "Sid Jamyl : Responsable de la structure Communication et Multimedia - ETIC CLUB",
        stage: "2024  2025",
      },
      {
        title: "Sid Jamyl : Coordinateur de la Communication durant le mois du ramadan - ETIC CLUB ",
        stage: "2023  2023",
      },
      {
        title: "Mehdi Mejdani : Responsable de la sous structure production - ETIC CLUB",
        stage: "2024  2025",
      },
      {
        title: "Sid Jamyl et Mehdi Mejdani : Responsable de la communication - Safir Consulting",
        stage: "2025  now",
      },
    ],
  },

];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
      
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Notre vision <span className="text-accent">, votre univers</span> donnons
            vie à votre image.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Avec plus de trois ans d’expérience, nous avons réalisé un grand nombre de vidéos, aussi bien dans un contexte étudiant qu’en entreprise. Notre maîtrise des réseaux sociaux et des techniques avancées de création de contenu nous permet de concevoir des projets percutants, adaptés aux tendances et aux besoins spécifiques de chaque client.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8 "
          >
            <div className="flex flex-1 xl:gap-x-8">
              {/* experience */}
              <div className="relative flex-1  after:bg-white/10 after:absolute after:top-0 after:right-0  ml-8">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                 Année d'éxperience 
                </div>
              </div>

              {/* clients */}
              <div className="relative flex-1  after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={187} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                 Vidéo réalisées 
                </div>
              </div>

              {/* projects */}
              <div className="relative flex-1  after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={87} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Vidéo montées
                </div>
              </div>
              <div className="relative flex-1  after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={51} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Apparition dans les vidéos 
                </div>
              </div>

              <div className="relative flex-1  after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={33} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Design réalisés 
                </div>
              </div>

              {/* awards */}
              
              
              

              
            </div>
            
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-left text-white/60"
              >
                {/* title */}
                <div className="font-light mb-2 md:mb-0 text-left">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div className="text-left">{item.stage}</div>

                <div className="flex gap-x-4">
                  {/* icons from react-icons */}
                  {item.icons && item.icons.map((Icon, iconI) => (
                    <div key={`icon-${iconI}`} className="text-2xl text-white">
                      <Icon />
                    </div>
                  ))}
                  
                  {/* icons from iconify */}
                  {item.iconifyIcons && item.iconifyIcons.map((iconItem, iconI) => (
                    <div key={`iconify-${iconI}`} className="text-2xl text-white">
                      <Icon icon={iconItem.icon} title={iconItem.name} width="24" height="24" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
