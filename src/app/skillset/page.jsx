'use client'
import { motion } from "framer-motion"
import { SvgCss } from "@/components/LogosSvg/CSS3"
import { SvgHT } from "@/components/LogosSvg/HTML5"
import { SvgJS } from "@/components/LogosSvg/JS"
import { SvgMongo } from "@/components/LogosSvg/MongoDB"
import { SvgNextjs } from "@/components/LogosSvg/NextJS"
import { SvgNodejs } from "@/components/LogosSvg/Node"
import { SvgReact } from "@/components/LogosSvg/React"
import { SvgTailwind } from "@/components/LogosSvg/TailwindCSS"
import { Image } from "@nextui-org/react"
import { SvgVercel } from "@/components/LogosSvg/Vercel"
import { SvgFirebase } from "@/components/LogosSvg/Firebase"
import { SvgNetlify } from "@/components/LogosSvg/Netlify"
import { SvgVite } from "@/components/LogosSvg/Vite"
import { SvgCloudinary } from "@/components/LogosSvg/Cloudinary"
import { SvgNotion } from "@/components/LogosSvg/Notion"
import { SvgFramer } from "@/components/LogosSvg/FramerMotion"
import { SvgExpress } from "@/components/LogosSvg/Express"

const SkillPage = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01]}} className="box dark:bg-zinc-900">
      <h2 className="uppercase text-center font-bold text-emerald-500 text-2xl pt-6">skillset</h2>

      <section className="p-6 flex flex-row flex-wrap gap-4 justify-between">
            <motion.div whileHover={{ scale: [null, 1.3, 1.2] }}
      transition={{ duration: 0.3 }} className="box">
                  <SvgHT/>
            </motion.div>
            <motion.div whileHover={{ scale: [null, 1.3, 1.2] }}
      transition={{ duration: 0.3 }} className="box">
                  <SvgCss/>
            </motion.div>
            <motion.div whileHover={{ scale: [null, 1.3, 1.2] }}
      transition={{ duration: 0.3 }} className="box">
                  <SvgJS/>
            </motion.div>
            <motion.div whileHover={{ scale: [null, 1.3, 1.2] }}
      transition={{ duration: 0.3 }} className="box">
                  <SvgNodejs/>
            </motion.div>
            <motion.div whileHover={{ scale: [null, 1.3, 1.2] }}
      transition={{ duration: 0.3 }} className="box">
                  <SvgExpress/>
            </motion.div>
            <motion.div whileHover={{ scale: [null, 1.3, 1.2] }}
      transition={{ duration: 0.3 }} className="box">
                  <SvgMongo/>
            </motion.div>
            <motion.div whileHover={{ scale: [null, 1.3, 1.2] }}
      transition={{ duration: 0.3 }} className="box">
                  <SvgReact/>
            </motion.div>
            <motion.div whileHover={{ scale: [null, 1.3, 1.2] }}
      transition={{ duration: 0.3 }} className="box">
                  <SvgNextjs/>
            </motion.div>
            <motion.div whileHover={{ scale: [null, 1.3, 1.2] }}
      transition={{ duration: 0.3 }} className="box">
                  <SvgVercel/>
            </motion.div>
            <motion.div whileHover={{ scale: [null, 1.3, 1.2] }}
      transition={{ duration: 0.3 }} className="box">
                  <SvgFirebase/>
            </motion.div>
            <motion.div whileHover={{ scale: [null, 1.3, 1.2] }}
      transition={{ duration: 0.3 }} className="box">
                  <SvgNetlify/>
            </motion.div>
            <motion.div whileHover={{ scale: [null, 1.3, 1.2] }}
      transition={{ duration: 0.3 }} className="box">
                  <SvgVite/>
            </motion.div>
            <motion.div whileHover={{ scale: [null, 1.3, 1.2] }}
      transition={{ duration: 0.3 }} className="box">
                  <SvgTailwind/>
            </motion.div>
            <motion.div whileHover={{ scale: [null, 1.3, 1.2] }}
      transition={{ duration: 0.3 }} className="box">
                  <SvgFramer/>
            </motion.div>
            <motion.div whileHover={{ scale: [null, 1.3, 1.2] }}
      transition={{ duration: 0.3 }} className="box">
                  <SvgCloudinary/>
            </motion.div>
            <motion.div whileHover={{ scale: [null, 1.3, 1.2] }}
      transition={{ duration: 0.3 }} className="box">
                  <SvgNotion/>
            </motion.div>
      </section>

    <h2 className="uppercase text-center font-bold text-emerald-500 text-2xl pt-10">Badges</h2>

    <section className="p-6 flex flex-row flex-wrap gap-4 justify-around">
    <Image className="rounded-full"
      isZoomed
      width={220}
      alt="badge1"
      src="https://res.cloudinary.com/dhijxrbsk/image/upload/v1699512585/IMG_7640_a6ypin.jpg"/>
    <Image className="rounded-full"
      isZoomed
      width={220}
      alt="badge2"
      src="https://res.cloudinary.com/dhijxrbsk/image/upload/v1699512602/IMG_7641_mcupbc.jpg"/>
      <Image className="rounded-full"
      isZoomed
      width={220}
      alt="badge3"
      src="https://res.cloudinary.com/dhijxrbsk/image/upload/v1699512613/IMG_7638_m14kic.jpg"/>
      <Image className="rounded-full"
      isZoomed
      width={220}
      alt="badge5"
      src="https://res.cloudinary.com/dhijxrbsk/image/upload/v1699512628/IMG_7639_mzowkh.jpg"/>
    </section>


    </motion.div>
  )
}

export default SkillPage