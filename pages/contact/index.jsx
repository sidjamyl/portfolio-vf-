import { motion } from "framer-motion";
import { BsArrowRight, BsEnvelope } from "react-icons/bs";
import { fadeIn } from "../../variants";

const Contact = () => {
  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & contact info */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>

          {/* contact info */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col items-center justify-center gap-8 w-full mx-auto"
          >
            <p className="text-xl text-center max-w-[600px]">
              Nous sommes ravis de vous entendre ! Pour toute question, projet ou collaboration, 
              n'hésitez pas à nous contacter directement par email.
            </p>
            
            <div className="flex flex-col items-center justify-center mt-6">
              <h3 className="text-2xl font-semibold mb-4">Contactez-nous par email</h3>
              <div className="flex items-center gap-3 text-xl">
                <BsEnvelope className="text-accent text-2xl" />
                <a 
                  href="mailto:nj_sid@esi.dz?subject=Contact%20depuis%20votre%20portfolio" 
                  className="text-accent hover:underline"
                >
                  nj_sid@esi.dz
                </a>
              </div>
              <p className="mt-6 text-gray-400">
                Nous nous efforçons de répondre à tous les messages dans un délai de 48 heures.
              </p>
            </div>
            
            <a
              href="mailto:nj_sid@esi.dz?subject=Projet%20de%20collaboration&body=Bonjour%2C%0A%0AJe%20vous%20contacte%20suite%20%C3%A0%20ma%20visite%20sur%20votre%20portfolio.%20J'aimerais%20discuter%20d'un%20projet%20potentiel.%0A%0AMerci%20d'avance%20pour%20votre%20r%C3%A9ponse.%0A%0ACordialement%2C"
              className="btn rounded-full border border-white/50 max-w-[220px] px-8 py-4 mt-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Envoyer un email
              </span>

              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                aria-hidden
              />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;


