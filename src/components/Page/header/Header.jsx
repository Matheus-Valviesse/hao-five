"use client";
import Logo from "@/assets/Logo 1.svg";
import { motion } from "framer-motion";

const LIs = ({ text }) => {
  return (
    <motion.li
      className="relative cursor-pointer"
      initial="hidden"
      whileHover="visible"
      transition={{ duration: 0.3 }}
    >
      {text}
      <motion.span
        className="absolute bottom-0 left-0 w-full h-[4px] bg-[#FF14FF] origin-left"
        variants={{
          hidden: { scaleX: 0 },
          visible: { scaleX: 1 },
        }}
      />
    </motion.li>
  );
};

const Header = () => {
  const headerLinks = [
    { name: "Home", path: "" },
    { name: "Sobre nós", path: "" },
    { name: "Projetos", path: "" },
    { name: "Serviços", path: "" },
    { name: "Contato", path: "" },
  ];
  return (
    <header className="hidden w-full h-[60px]   px-[20px] md:px-[60px] bg-[#fff] sm:flex flex-row justify-between items-center">
      <span className="w-[200px] cursor-pointer">
        <Logo className="-mt-2" />
      </span>
      <ul className="flex flex-row gap-x-[12px] md:gap-x-[24px] text-[#1C1C1C] text-[16px] font-medium">
        {headerLinks?.map((li, i) => (
          <LIs text={li.name} key={li.name + i} />
        ))}
      </ul>
    </header>
  );
};

export default Header;
