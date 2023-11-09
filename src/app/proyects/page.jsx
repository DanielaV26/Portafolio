'use client'
import {Image} from "@nextui-org/react"
import { motion } from "framer-motion";

const ProyectsPage = () => {
  return (
    <div className="dark:bg-zinc-900">
      <motion.h2 
      initial={{ y: -200 }} // Posición inicial en el eje Y
      animate={{ y: 0 }} // Posición final en el eje Y
      transition={{ duration: 1, delay: 0.5 }}
      className="box uppercase text-emerald-500 font-bold text-center text-xl pt-6">Proyectos</motion.h2>

      <motion.article 
      initial={{ y: 200 }} // Posición inicial en el eje Y
      animate={{ y: 0 }} // Posición final en el eje Y
      transition={{ duration: 1, delay: 0.5}}
      className="box p-6 flex flex-wrap gap-8 justify-center">
        <a href="https://danielav26.github.io/Landing-de-venta/">
        <Image
        width={400}
        alt="Landing Vinos"
        src="https://res.cloudinary.com/dhijxrbsk/image/upload/v1699457220/proy-1_dvfzrf.png"/>
        </a>
        <a href="https://danielav26.github.io/aplicacion-CRUD/">
        <Image
        width={400}
        alt="CRUD Nutrición"
        src="https://res.cloudinary.com/dhijxrbsk/image/upload/v1699457235/proy-2_txno1a.png"/>
        </a>
        <a href="https://danielav26.github.io/Dashboard/">
        <Image
        width={400}
        alt="Dashboard API Pokemon"
        src="https://res.cloudinary.com/dhijxrbsk/image/upload/v1699457246/proy-3_pvfrp5.png"/>
        </a>
        <a href="https://playful-heliotrope-23594b.netlify.app/">
        <Image
        width={400}
        alt="Restaurante"
        src="https://res.cloudinary.com/dhijxrbsk/image/upload/v1699457262/proy-4_e1hkey.png"/>
        </a>
        <a href="https://brightbooksp5.netlify.app/">
        <Image
        width={400}
        alt="Ecommerce"
        src="https://res.cloudinary.com/dhijxrbsk/image/upload/v1699457275/proy-5_aekvnz.png"/>
        </a>
      </motion.article>
    </div>
  )
}

export default ProyectsPage