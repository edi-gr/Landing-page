"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  gradient: string;
}

const FeatureCard = ({
  icon,
  title,
  description,
  gradient,
}: FeatureCardProps) => {
  return (
    <motion.div
      variants={{
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      className="floating-card"
    >
      <div className="bg-white rounded-3xl p-8 shadow-xl border border-neutral-100 h-full">
        <div
          className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${gradient} text-white mb-6`}
        >
          {icon}
        </div>

        <h3 className="text-2xl font-bold text-neutral-900 mb-4">{title}</h3>

        <p className="text-neutral-600 leading-relaxed">{description}</p>

        <motion.div className="mt-6" whileHover={{ x: 5 }}>
          <div className="text-primary-600 font-semibold inline-flex items-center gap-2">
            Learn more
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
