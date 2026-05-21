import React from "react";
import { motion } from "framer-motion";import * as SiIcons from "react-icons/si";import * as FaIcons from "react-icons/fa";import { usePortfolioConfig } from "../../hooks/usePortfolioConfig.tsx";
import ParallaxBackground from "../ui/ParallaxBackground.tsx";

const Skills: React.FC = () => {
  const { skills } = usePortfolioConfig();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const skillVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1], // Custom easing for smoother animation
      },
    },
  };

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-primary-100 relative overflow-hidden py-20"
    >
      <ParallaxBackground />
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-title font-semibold text-primary-800 mb-12 text-center">
            Technical Skills
          </h2>
          <p className="font-sans text-lg text-primary-600 tracking-medium leading-relaxed max-w-2xl mx-auto">
            A comprehensive list of technologies and tools I work with
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skills.map((skill) => {
            let IconComponent;
            if (skill.icon.startsWith("Fa")) {
              IconComponent = FaIcons[skill.icon as keyof typeof FaIcons] as React.ComponentType<{ size: number; className: string }>;
            } else {
              IconComponent = SiIcons[skill.icon as keyof typeof SiIcons] as React.ComponentType<{ size: number; className: string }>;
            }
            return (
              <motion.div
                key={skill.name}
                variants={skillVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group cursor-pointer"
              >
                <div
                  className="bg-white/50 backdrop-blur-sm border border-primary-300 rounded-lg p-6 shadow-sm 
                             hover:shadow-md hover:border-primary-400 transition-all duration-300 
                             hover:bg-white/80 flex flex-col items-center justify-center h-full"
                >
                  <div className="text-center">
                    {IconComponent && (
                      <IconComponent size={40} className="text-primary-600 mb-3 group-hover:text-primary-800 transition-colors duration-300 mx-auto" />
                    )}
                    <h3
                      className="text-base md:text-lg text-primary-800 group-hover:text-primary-900
                               transition-colors duration-300 px-2"
                    >
                      {skill.name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
