
import { useState } from "react";
import { motion } from "framer-motion";
import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";
import { FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";
import { fadeIn } from "../../variants";

const services = [
  {
    name: "Instagram",
    icon: FaInstagram,
    packs: [
      {
        name: "Pack 1 – Essentiel",
        price: "8 000 DA à 12 000 DA",
        details: [
          "Réalisation de 1 vidéo",
          "Rédaction du script",
          "Analyse de l’entreprise et du compte Instagram pour trouver l’idée de la vidéo",
          "Tournage (avec apparition dans la vidéo et gestion des figurants)",
          "Montage complet de la vidéo",
        ],
      },
      {
        name: "Pack 2 – Croissance",
        price: "40 000 DA à 60 000 DA",
        details: [
          "Réalisation de 4 à 6 vidéos",
          "Rédaction des scripts",
          "Analyse de l’entreprise et du compte Instagram pour définir le contenu",
          "Tournage (avec apparition et figurants)",
          "Montage complet de chaque vidéo",
          "Élaboration d’un plan de communication pour assurer la cohérence des vidéos",
        ],
      },
      {
        name: "Pack 3 – Premium",
        price: "60 000 DA à 80 000 DA",
        details: [
          "Réalisation de 4 à 8 vidéos par mois",
          "Rédaction des scripts",
          "Analyse de l’entreprise et du compte Instagram pour définir les idées",
          "Tournage (avec apparition et figurants)",
          "Montage complet",
          "Élaboration d’un plan de communication sur plusieurs mois",
          "Gestion complète des réseaux sociaux :",
          "Réponse aux messages",
          "Création et publication de stories",
          "Interactions avec la communauté",
        ],
      },
    ],
  },
  {
    name: "TikTok",
    icon: FaTiktok,
    packs: [
      {
        name: "Pack Essentiel",
        details: [
          "3 à 6 vidéos ",
          "Analyse de l’entreprise et du compte TikTok",
          "Recherche de tendances adaptées",
          "Rédaction des scripts",
          "Réalisation complète des vidéos (tournage + montage)"
        ],
        price: "8000 - 120000 DA"
      },
      {
        name: "Pack Croissance",
        details: [
          "6 à 15 vidéos ",
          "Tout ce qui est inclus dans le Pack Essentiel",
          "Réalisation d’un plan de communication adapté à TikTok"
        ],
        price: "20 000 – 30 000 DA"
      },
      {
        name: "Pack Premium",
        details: [
          "Campagne mensuelle",
          "15 à 20 vidéos par mois",
          "Gestion complète du compte TikTok (publications, réponses aux messages, interactions)",
          "Plan de communication sur plusieurs mois",
          "Réalisation complète des vidéos (scripts, tournage, montage)"
        ],
        price: "50000 DA"
      }
    ],
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    packs: [
      {
        name: "Pack Gestion & Contenu",
        details: [
          "2 à 3 publications par semaine (articles, posts, photos, designs)",
          "Gestion du compte LinkedIn (réponses aux commentaires, interactions, réponses aux messages)",
          "Mise en place d’une ligne éditoriale adaptée au public professionnel"
        ],
        price: "20000 DA"
      }
    ],
  },
];

const Services = () => {
  const [selected, setSelected] = useState(null);

  // Fonction pour déterminer la couleur premium selon le prix
  const getPackColor = (price) => {
    const value = parseInt(price);
    if (value >= 100) return "bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white shadow-lg";
    if (value >= 80) return "bg-gradient-to-r from-pink-400 to-purple-500 text-white shadow";
    if (value >= 50) return "bg-gradient-to-r from-sky-400 to-blue-600 text-white";
    return "bg-primary/40 text-white";
  };

  return (
    <div className="min-h-screen bg-primary/30 py-12 md:py-16 lg:py-24 flex items-center overflow-y-auto">
    
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Réseaux sociaux d'abord */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              variants={fadeIn("up", 0.2 + i * 0.1)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className={`flex flex-col items-center bg-black/40 border border-accent rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg hover:scale-[1.03] transition cursor-pointer ${selected === i ? "ring-2 ring-accent" : ""}`}
              onClick={() => setSelected(selected === i ? null : i)}
            >
              <service.icon className="text-3xl md:text-4xl lg:text-5xl text-accent mb-3 md:mb-4" />
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-2 text-center">{service.name}</h2>
              <p className="text-white/80 text-center mb-3 md:mb-4 text-sm md:text-base">Découvrez nos packs pour {service.name}.</p>
              <button className="mt-auto px-4 md:px-6 py-2 rounded bg-accent text-white font-semibold hover:bg-accent/80 transition text-sm md:text-base">Voir les packs</button>
            </motion.div>
          ))}
        </div>

        {/* Section d'intro ensuite, texte plus petit */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mb-8 md:mb-12 text-center px-4"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            <span role="img" aria-label="globe">🌍</span> Nos services <span className="text-accent">.</span>
          </h1>
          <p className="max-w-4xl mx-auto text-xs sm:text-sm md:text-base text-white/80 leading-relaxed">
            Nous proposons une gamme de services adaptés aux différentes plateformes sociales, avec des packs modulables selon vos besoins et vos objectifs.<br className="hidden sm:block" />
            Que ce soit pour Instagram, TikTok ou LinkedIn, nous concevons et réalisons du contenu original (scripts, tournage, montage, designs), mettons en place des plans de communication et assurons la gestion quotidienne des comptes.<br className="hidden sm:block" />
            Nous travaillons avec notre propre matériel (téléphone, trépieds, micros) et gérons également les campagnes sponsorisées : le suivi et la stratégie sont inclus, mais le budget publicitaire reste à la charge du client.
          </p>
        </motion.div>

        {/* Packs modal */}
        {selected !== null && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-2 overflow-y-auto">
            <div className="bg-primary/90 rounded-2xl p-3 md:p-6 max-w-7xl w-full shadow-2xl relative flex flex-col my-4 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4 sticky top-0 bg-primary/90 py-2 -mx-3 md:-mx-6 px-3 md:px-6 rounded-t-2xl">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-accent pr-2">
                  Packs {services[selected].name}
                </h3>
                <button
                  className="ml-2 px-3 py-1 md:px-4 md:py-2 rounded bg-accent text-white font-semibold hover:bg-accent/80 transition flex-shrink-0 text-sm md:text-base"
                  onClick={() => setSelected(null)}
                  aria-label="Retour"
                >
                  Retour
                </button>
              </div>
              
              {/* Container des packs */}
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4 w-full overflow-hidden">
                {services[selected].packs.map((pack, j) => (
                  <div key={pack.name} className="rounded-xl border border-accent p-3 md:p-4 bg-black/30 shadow-lg flex flex-col h-auto min-h-[200px]">
                    <div className="flex flex-col mb-3 w-full">
                      <span className="text-sm sm:text-base md:text-lg font-bold text-white mb-2 break-words hyphens-auto leading-tight">{pack.name}</span>
                      <span className="text-xs sm:text-sm md:text-base font-semibold text-accent mb-3 break-words leading-tight">{pack.price}</span>
                    </div>
                    <ul className="list-disc pl-4 md:pl-5 text-white/80 text-xs sm:text-sm space-y-1.5 w-full flex-grow">
                      {pack.details.map((detail, k) => (
                        <li key={k} className="break-words hyphens-auto leading-relaxed">{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      
    </div>
  );
};
export default Services;
