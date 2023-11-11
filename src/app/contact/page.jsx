'use client'
import { SvgGithub } from "@/components/LogosSvg/Github";
import { SvgLinkedin } from "@/components/LogosSvg/Linkedin";
import {Button, Textarea} from "@nextui-org/react";
import { motion } from "framer-motion";
import { useState } from "react";
import Swal from "sweetalert2";

const ContactPage = () => {
  const initialStateForm = {
    email: "",
    mensaje: ""
  };
  const [form, setForm] = useState(initialStateForm);
  const handleChange = (e, fieldName) => {
    const {value} = e.target
    setForm({...form,[fieldName]:value})
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
 
      if (response.status === 200) {
        // Envío de correo electrónico exitoso
setForm(initialStateForm)
console.log("formulario reiniciado:", form)
Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Su mensaje va en camino',
  showConfirmButton: false,
  timer: 1500
})
        console.log("Correo electrónico enviado con éxito");
      } else {
        // Maneja errores
        console.error("Error al enviar el correo electrónico");
      }
    } catch (error) {
      console.error(error);
    }
  };
 

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
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
          }
        }}

        onChange={(e) => handleChange(e, "email")}
          defaultValue={form.email}
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
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
          }
        }}
        onChange={(e) => handleChange(e, "mensaje")}
          defaultValue={form.mensaje}
          key={variant}
          variant={variant}
          label="Mensaje"
          labelPlacement="outside"
          placeholder="Ingresa tu mensaje"
          className="col-span-12 md:col-span-6 mb-6 md:mb-0 text-slate-200"
        />
      ))}
    </div>
    <Button  
    onClick={handleSubmit}
    variant="flat" className="bg-emerald-400 bg-opacity-20 text-emerald-400">
        Enviar
      </Button>
  </motion.section>

  <motion.section
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{
    duration: 0.8,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01]
  }}
  className="flex flex-wrap flex-row justify-center gap-6 p-6">

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
    </motion.section>
  </div>
  )
}

export default ContactPage