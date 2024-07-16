"use client";
import Logo from "@/assets/Logo 2.svg";
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
const HeaderMobile = () => {
  const headerLinks = [
    { name: "Home", path: "" },
    { name: "Sobre nós", path: "" },
    { name: "Projetos", path: "" },
    { name: "Serviços", path: "" },
    { name: "Contato", path: "" },
  ];
  return (
    <header className=" w-full h-[100px] px-[10px] bg-[#fff] flex sm:hidden flex-row justify-between items-center">
      <span className=" w-[180px]">
        <Logo className="  w-full -mt-2" />
      </span>

      <button className="flex flex-col gap-1 ">
        <span className="w-8 h-1 rounded-md bg-black"></span>
        <span className="w-8 h-1 rounded-md bg-black"></span>
        <span className="w-8 h-1 rounded-md bg-black"></span>
      </button>
    </header>
  );
};

export default HeaderMobile;
