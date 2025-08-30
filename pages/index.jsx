import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto relative">
          {/* Image on the right */}
          <div className="absolute right-[20px] top-1/2 transform -translate-y-1/2 hidden xl:block z-10">
            <img 
              src="/IMG_1302.JPG" 
              alt="Profile image" 
              className="w-auto h-[400px] object-contain rounded-lg shadow-lg"
            />
          </div>
          
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 z-20"
          >
            Sid Jamyl<br /> & {" "}
            <span className="text-accent"> Medjani Mehdi </span>
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-[450px] mx-auto xl:mx-0 mb-10 xl:mb-16 z-20"
          >
            Nous sommes deux étudiants algériens passionnés par la création de contenu digital. Nous réalisons principalement des vidéos, des visuels et du contenu écrit pour dynamiser la présence en ligne de nos clients. Notre expertise s’étend à la gestion complète des réseaux sociaux, incluant la planification, la publication et l’interaction avec la communauté. Que vous soyez une entreprise ou un particulier, nous vous accompagnons pour développer votre image et renforcer votre communication digitale.
          </motion.p>

          {/* Mobile image (centered) */}
          <div className="flex justify-center mb-6 xl:hidden">
            <img 
              src="/IMG_1302.JPG" 
              alt="Profile image" 
              className="w-auto h-[250px] object-contain rounded-lg shadow-lg"
            />
          </div>

          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
       <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1280px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        {/*<div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />*/}

        {/* particles */}
        <ParticlesContainer />

        {/* avatar */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          {/* <Avatar /> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
