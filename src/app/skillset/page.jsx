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
      <div className="dark:bg-zinc-900">
    <motion.div 
     initial={{ x: -900 }} // Posición inicial en el eje x
     animate={{ x: 0 }} // Posición final en el eje x
     transition={{ duration: 1, delay: 0.2 }}
     className="box dark:bg-zinc-900">
      <h2 className="uppercase text-center text-emerald-500 text-3xl pt-6 font-tilt">skillset</h2>

      <section className="p-6 flex flex-wrap flex-row gap-6 justify-around">
            {/* <motion.div whileHover={{ scale: [null, 1.3, 1.2] }}
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
            </motion.div> */}

            <motion.div whileHover={{ scale: [null, 1.3, 1.2] }}
            transition={{ duration: 0.3 }} className="box">
                  <Image
                  width={90}
                  alt="HTML"
                  className="rounded-full"
                  src="https://res.cloudinary.com/dhijxrbsk/image/upload/v1699686474/Dise%C3%B1o_sin_t%C3%ADtulo_8_z7fj86.png"/>
            </motion.div>

            <motion.div whileHover={{ scale: [null, 1.3, 1.2] }}
            transition={{ duration: 0.3 }} className="box">
                  <Image
                  width={90}
                  alt="CSS"
                  className="rounded-full"
                  src="https://res.cloudinary.com/dhijxrbsk/image/upload/v1699686552/Dise%C3%B1o_sin_t%C3%ADtulo_7_dj1nnj.png"/>
            </motion.div>

            <motion.div whileHover={{ scale: [null, 1.3, 1.2] }}
            transition={{ duration: 0.3 }} className="box">
                  <Image
                  width={90}
                  alt="JavaScript"
                  className="rounded-full"
                  src="https://res.cloudinary.com/dhijxrbsk/image/upload/v1699686744/Dise%C3%B1o_sin_t%C3%ADtulo_10_g9n142.png"/>
            </motion.div>

            <motion.div whileHover={{ scale: [null, 1.3, 1.2] }}
            transition={{ duration: 0.3 }} className="box">
                  <Image
                  width={90}
                  alt="NodeJS"
                  className="rounded-full"
                  src="https://res.cloudinary.com/dhijxrbsk/image/upload/v1699685905/Dise%C3%B1o_sin_t%C3%ADtulo_5_uewt3x.png"/>
            </motion.div>

            <motion.div whileHover={{ scale: [null, 1.3, 1.2] }}
            transition={{ duration: 0.3 }} className="box">
                  <Image
                  width={90}
                  alt="ExpressJS"
                  className="rounded-full"
                  src="https://res.cloudinary.com/dhijxrbsk/image/upload/v1699688113/Dise%C3%B1o_sin_t%C3%ADtulo_9_gvk7v1.png"/>
            </motion.div>

            <motion.div whileHover={{ scale: [null, 1.3, 1.2] }}
            transition={{ duration: 0.3 }} className="box">
                  <Image
                  width={90}
                  alt="mongoDB"
                  className="rounded-full"
                  src="https://res.cloudinary.com/dhijxrbsk/image/upload/v1699688878/Dise%C3%B1o_sin_t%C3%ADtulo_11_pdbpe1.png"/>
            </motion.div>

            <motion.div whileHover={{ scale: [null, 1.3, 1.2] }}
            transition={{ duration: 0.3 }} className="box">
                  <Image
                  width={90}
                  alt="React"
                  className="rounded-full"
                  src="https://res.cloudinary.com/dhijxrbsk/image/upload/v1699688884/Dise%C3%B1o_sin_t%C3%ADtulo_12_fa3avu.png"/>
            </motion.div>

            <motion.div whileHover={{ scale: [null, 1.3, 1.2] }}
            transition={{ duration: 0.3 }} className="box">
                  <Image
                  width={90}
                  alt="NextJS"
                  className="rounded-full"
                  src="https://res.cloudinary.com/dhijxrbsk/image/upload/v1699688896/Dise%C3%B1o_sin_t%C3%ADtulo_13_oxjdlf.png"/>
            </motion.div>

            <motion.div whileHover={{ scale: [null, 1.3, 1.2] }}
            transition={{ duration: 0.3 }} className="box">
                  <Image
                  width={90}
                  alt="Vercel"
                  className="rounded-full"
                  src="https://res.cloudinary.com/dhijxrbsk/image/upload/v1699688906/Dise%C3%B1o_sin_t%C3%ADtulo_14_u159ow.png"/>
            </motion.div>

            <motion.div whileHover={{ scale: [null, 1.3, 1.2] }}
            transition={{ duration: 0.3 }} className="box">
                  <Image
                  width={90}
                  alt="Firebase"
                  className="rounded-full"
                  src="https://res.cloudinary.com/dhijxrbsk/image/upload/v1699688919/Dise%C3%B1o_sin_t%C3%ADtulo_15_wmuiaf.png"/>
            </motion.div>

            <motion.div whileHover={{ scale: [null, 1.3, 1.2] }}
            transition={{ duration: 0.3 }} className="box">
                  <Image
                  width={90}
                  alt="Netlify"
                  className="rounded-full"
                  src="https://res.cloudinary.com/dhijxrbsk/image/upload/v1699688948/Dise%C3%B1o_sin_t%C3%ADtulo_16_sahwhm.png"/>
            </motion.div>

            <motion.div whileHover={{ scale: [null, 1.3, 1.2] }}
            transition={{ duration: 0.3 }} className="box">
                  <Image
                  width={90}
                  alt="ViteJS"
                  className="rounded-full"
                  src="https://res.cloudinary.com/dhijxrbsk/image/upload/v1699688955/Dise%C3%B1o_sin_t%C3%ADtulo_17_wgvcix.png"/>
            </motion.div>

            <motion.div whileHover={{ scale: [null, 1.3, 1.2] }}
            transition={{ duration: 0.3 }} className="box">
                  <Image
                  width={90}
                  alt="Tailwind"
                  className="rounded-full"
                  src="https://res.cloudinary.com/dhijxrbsk/image/upload/v1699688962/Dise%C3%B1o_sin_t%C3%ADtulo_18_fsy4p8.png"/>
            </motion.div>

            <motion.div whileHover={{ scale: [null, 1.3, 1.2] }}
            transition={{ duration: 0.3 }} className="box">
                  <Image
                  width={90}
                  alt="NextUI"
                  className="rounded-full"
                  src="https://res.cloudinary.com/dhijxrbsk/image/upload/v1699684272/Dise%C3%B1o_sin_t%C3%ADtulo_gaemad.png"/>
            </motion.div>

            <motion.div whileHover={{ scale: [null, 1.3, 1.2] }}
            transition={{ duration: 0.3 }} className="box">
                  <Image
                  width={90}
                  alt="Flowbite"
                  className="rounded-full"
                  src="https://res.cloudinary.com/dhijxrbsk/image/upload/v1699684081/Dise%C3%B1o_sin_t%C3%ADtulo_4_r33lgj.png"/>
            </motion.div>

            <motion.div whileHover={{ scale: [null, 1.3, 1.2] }}
            transition={{ duration: 0.3 }} className="box">
                  <Image
                  width={90}
                  alt="Framer"
                  className="rounded-full"
                  src="https://res.cloudinary.com/dhijxrbsk/image/upload/v1699688968/Dise%C3%B1o_sin_t%C3%ADtulo_19_bxado6.png"/>
            </motion.div>

            <motion.div whileHover={{ scale: [null, 1.3, 1.2] }}
            transition={{ duration: 0.3 }} className="box">
                  <Image
                  width={90}
                  alt="Clodinary"
                  className="rounded-full"
                  src="https://res.cloudinary.com/dhijxrbsk/image/upload/v1699688975/Dise%C3%B1o_sin_t%C3%ADtulo_20_d838h9.png"/>
            </motion.div>

            <motion.div whileHover={{ scale: [null, 1.3, 1.2] }}
            transition={{ duration: 0.3 }} className="box">
                  <Image
                  width={90}
                  alt="Notion"
                  className="rounded-full"
                  src="https://res.cloudinary.com/dhijxrbsk/image/upload/v1699688979/Dise%C3%B1o_sin_t%C3%ADtulo_21_vywlc2.png"/>
            </motion.div>
      </section>
      </motion.div>

      <motion.div className="box"
      initial={{ x: 900 }} // Posición inicial en el eje x
      animate={{ x: 0 }} // Posición final en el eje x
      transition={{ duration: 1, delay: 0.2 }}>
    <h2 className="uppercase text-center text-emerald-500 text-3xl pt-10 font-tilt">Insignias</h2>

    <section className="p-6 flex flex-row flex-wrap gap-4 justify-around">
    <Image className="rounded-full"
      isZoomed
      width={200}
      alt="badge1"
      src="https://res.cloudinary.com/dhijxrbsk/image/upload/v1699512585/IMG_7640_a6ypin.jpg"/>
    <Image className="rounded-full"
      isZoomed
      width={200}
      alt="badge2"
      src="https://res.cloudinary.com/dhijxrbsk/image/upload/v1699512602/IMG_7641_mcupbc.jpg"/>
      <Image className="rounded-full"
      isZoomed
      width={200}
      alt="badge3"
      src="https://res.cloudinary.com/dhijxrbsk/image/upload/v1699512613/IMG_7638_m14kic.jpg"/>
      <Image className="rounded-full"
      isZoomed
      width={200}
      alt="badge5"
      src="https://res.cloudinary.com/dhijxrbsk/image/upload/v1699512628/IMG_7639_mzowkh.jpg"/>
    </section>
    </motion.div>

    </div>
  )
}

export default SkillPage