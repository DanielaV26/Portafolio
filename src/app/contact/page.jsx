'use client'
import { SvgGithub } from "@/components/LogosSvg/Github";
import { SvgLinkedin } from "@/components/LogosSvg/Linkedin";
import {Button, Textarea} from "@nextui-org/react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const variants = [ "faded"];
  return (
    <div className="dark:bg-zinc-900">
    <motion.h2 
    initial={{ y: -200 }} // Posición inicial en el eje Y
    animate={{ y: 0 }} // Posición final en el eje Y
    transition={{ duration: 1, delay: 0.5 }}
    className="box uppercase text-center pt-6 font-tilt text-3xl text-emerald-500">Contacto</motion.h2>
    

    <motion.section 
    initial={{ y: 450 }} // Posición inicial en el eje Y
    animate={{ y: 0 }} // Posición final en el eje Y
    transition={{ duration: 1, delay: 0.5}}
    className="box p-10 flex flex-col flex-direction: columns-2 items-center ">
    <div className="w-72 ">
      {variants.map((variant) => (
        <Textarea
          key={variant}
          variant={variant}
          label="Email"
          labelPlacement="outside"
          placeholder="Ingresa tu email"
          className="col-span-12 md:col-span-6 mb-6 md:mb-0 text-slate-200"
        />
      ))}
    </div>

    <div className="w-72 ">
      {variants.map((variant) => (
        <Textarea
          key={variant}
          variant={variant}
          label="Mensaje"
          labelPlacement="outside"
          placeholder="Ingresa tu mensaje"
          className="col-span-12 md:col-span-6 mb-6 md:mb-0 text-slate-200"
        />
      ))}
    </div>
    <Button  variant="flat" className="bg-emerald-400 bg-opacity-20 text-emerald-400">
        Enviar
      </Button>
  </motion.section>

  <section className="flex flex-wrap flex-row justify-center gap-6 p-6">
    <motion.div 
      whileHover={{ scale: [null, 1.5, 1.4] }}
      transition={{ duration: 0.3 }}
      className="box ">
        <a href="https://github.com/DanielaV26"><SvgGithub/></a>
      </motion.div>
      <motion.div
      whileHover={{ scale: [null, 1.5, 1.4] }}
      transition={{ duration: 0.3 }}
      className="box ">
        <a href="https://linkedin.com/in/daniela-vargas-gonzález-6bb05b269"><SvgLinkedin/></a>
      </motion.div>
    </section>
  </div>
  )
}

export default ContactPage