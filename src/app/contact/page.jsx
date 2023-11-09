import {Textarea} from "@nextui-org/react";

const ContactPage = () => {
  const variants = [ "faded"];
  return (
    <div className="dark:bg-zinc-900">
    <h2 className="uppercase text-center pt-6 font-bold text-xl text-emerald-500">Contacto</h2>
    

    <section className="p-10 flex flex-col flex-direction: columns-2 items-center gap-6">
    <div className="w-72 ">
      {variants.map((variant) => (
        <Textarea
          key={variant}
          variant={variant}
          label="Email"
          labelPlacement="outside"
          placeholder="Ingresa tu email"
          className="col-span-12 md:col-span-6 mb-6 md:mb-0"
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
        className="col-span-12 md:col-span-6 mb-6 md:mb-0"
      />
    ))}
  </div>
  </section>
  </div>
  )
}

export default ContactPage