import { NextResponse } from "next/server";
import nodemailer from 'nodemailer'
require('dotenv').config()

export async function POST(req) {
    console.log("ruta api")
   console.log("user",  process.env.GMAIL_EMAIL)
  console.log("pass", process.env.GMAIL_PASSWORD)
  const {email, mensaje} = await req.json()
   
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_EMAIL,
          pass: process.env.GMAIL_PASSWORD,
        },
      });

      const  mailOption = {
        from : process.env.GMAIL_EMAIL,
        to : "daani.vg@gmail.com",
        text : `Correo electronico:${email}\nMensaje:${mensaje}`,
      }
      try{
        await transporter.sendMail(mailOption)
        console.log("todo bien")
        return NextResponse.json({message:"email enviado con éxito"})
        res.status(200).send("mensaje enviado con éxito")
      }
      catch (error){
        console.log(error)
        return NextResponse.json({message:"ocurrio un error al enviar el correo"})
    }
}