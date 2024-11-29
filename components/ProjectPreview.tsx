import React from "react";
import Arrow from "../public/arrow.svg";
import { motion } from "framer-motion";

interface Props {
  name?: string | undefined;
  description?: string | undefined;
  imageUrl?: string | undefined;
  bgColor?: string | undefined;
  dark?: boolean | undefined;
}

const ProjectPreview: React.FC<Props> = ({
  name = "Block name",
  description = "This is an amazing block",
  imageUrl = "/project-.png",
  bgColor = "#e4e4e7",
  dark = false,
}) => {
  return (
    <motion.div
      className={`h-[30rem] rounded-3xl overflow-hidden ${dark ? "dark" : ""}`}
      style={{ background: `${bgColor}` }}
      initial="initial"
      whileInView="animate"
      variants={PreviewAnimation}
    >
      <div
        className="h-full w-full relative group"
        style={{
          backgroundImage: `url('${imageUrl}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gambar latar belakang */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-300 group-hover:z-10"
          style={{
            backgroundImage: `url('${imageUrl}')`,
            zIndex: 0, // Gambar di belakang konten
          }}
        ></div>

        {/* Konten */}
        <div
          className="relative flex flex-col justify-between h-full px-10 py-8"
          style={{ zIndex: 2 }} // Konten di depan
        >
          <div>
            <h2 className="font-medium text-lg text-white">{name}</h2>
            <p className="text-sm text-zinc-300">{description}</p>
          </div>
          <div className="h-12 w-12 bg-white rounded-full flex justify-center items-center cursor-pointer">
            <Arrow className="w-20 h-6" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const PreviewAnimation = {
  initial: {
    y: 30,
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 0.8,
    },
  },
};

export default ProjectPreview;
