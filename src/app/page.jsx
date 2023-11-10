'use client'
import { AnimatedText } from "@/components/TextoAnimado"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="flex flex-wrap items-center text-center min-h-screen p-4 dark:bg-zinc-900">
      <div className="w-full md:w-1/2 p-4">
      <motion.h2 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      className="box text-emerald-500 text-center text-3xl pb-6 font-tilt">¡Hola! Soy Daniela Vargas</motion.h2>

      <AnimatedText text={"Soy Web Full Stack Developer, con habilidades para construir aplicaciones de diferente índole como verás en mi portafolio. Me gusta crear aplicaciones funcionales, intuitivas y sobretodo atractivas en su diseño, con el fin de lograr una experiencia única y memorable. ¡Te invito a conocer mi skillset, además te muestro mis insignias y los proyectos que he creado!. También si gustas puedes contactarme y dejarme un mensaje."} className="text-sm normal-case text-slate-300 font-normal"/>
      </div>

      <div className="w-full md:w-1/2 p-4">
        <p className="text-slate-300">aqui va una imagen super estilosaaaaaAaA</p>
      </div>
    </main>
  )
}
