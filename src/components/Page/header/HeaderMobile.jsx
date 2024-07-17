"use client";
import Logo from "@/assets/Logo 2.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const LIs = ({ text }) => {
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };
  return (
    <motion.li
      className="relative cursor-pointer text-[18px]"
      variants={variants}
      // initial="hidden"
      // whileHover="visible"
      // transition={{ duration: 0.3 }}
    >
      {text}
      {/* <motion.span
        className="absolute bottom-0 left-0 w-full h-[4px] bg-[#FF14FF] origin-left"
        variants={{
          hidden: { scaleX: 0 },
          visible: { scaleX: 1 },
        }}
      /> */}
    </motion.li>
  );
};

const MobileOption = ({ modal, setModal }) => {
  const headerLinks = [
    { name: "Home", path: "" },
    { name: "Sobre nós", path: "" },
    { name: "Projetos", path: "" },
    { name: "Serviços", path: "" },
    { name: "Contato", path: "" },
  ];

  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };
  return (
    <AnimatePresence mode="wait">
      {modal && (
        <motion.aside
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 70 }}
          className="w-full h-full fixed bg-white bottom-0 left-0 flex flex-col"
        >
          {" "}
          <div className="flex flex-row items-center justify-between py-10 px-2 ">
            <span className=" w-[180px]">
              <Logo className="  w-full -mt-2" />
            </span>
            <button onClick={() => setModal(false)}>
              <IoClose className="text-[40px] " />
            </button>
          </div>
          <motion.ul variants={variants} className="px-6 flex flex-col gap-4">
            {headerLinks?.map((li, i) => (
              <LIs text={li.name} key={li.name + i} />
            ))}
          </motion.ul>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

const HeaderMobile = () => {
  const [mobileMoldal, setMobileModal] = useState(false);
  const headerLinks = [
    { name: "Home", path: "" },
    { name: "Sobre nós", path: "" },
    { name: "Projetos", path: "" },
    { name: "Serviços", path: "" },
    { name: "Contato", path: "" },
  ];

  return (
    <header className=" w-full h-[100px] px-[10px] bg-[#fff] flex sm:hidden flex-row justify-between items-center">
      <MobileOption modal={mobileMoldal} setModal={setMobileModal} />
      <span className=" w-[180px]">
        <Logo className="w-full -mt-2" />
      </span>

      <button
        className="flex flex-col gap-1 "
        onClick={() => setMobileModal(true)}
      >
        <span className="w-8 h-1 rounded-md bg-black"></span>
        <span className="w-8 h-1 rounded-md bg-black"></span>
        <span className="w-8 h-1 rounded-md bg-black"></span>
      </button>
    </header>
  );
};

export default HeaderMobile;
