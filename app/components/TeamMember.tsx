"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

const TeamMember = ({ name, role, image }: TeamMemberProps) => {
  return (
    <motion.div
      variants={{
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -10 }}
      className="group"
    >
      <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/10 hover:border-white/20 transition-all duration-300">
        <div className="relative mb-6 mx-auto w-32 h-32">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-500 to-accent-500 p-1">
            <div className="w-full h-full rounded-full bg-neutral-300 flex items-center justify-center text-4xl font-bold text-neutral-600">
              {name.charAt(0)}
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>

        <p className="text-neutral-300 mb-6">{role}</p>

        <div className="flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          >
            <Linkedin className="w-5 h-5 text-white" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          >
            <Twitter className="w-5 h-5 text-white" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMember;
