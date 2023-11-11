'use client'
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenuItem, NavbarMenu} from "@nextui-org/react";

const NavbarPage = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link className="font-tilt text-emerald-400 text-2xl" href="/">
            DV
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6 font-tilt text-lg" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Sobre mí
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/skillset">
            Skillset
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/proyects">
            Proyectos
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} href="/contact" variant="flat" className="bg-emerald-400 bg-opacity-20 text-emerald-400 text-base font-tilt">
            Contacto
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
          <NavbarMenuItem>
            <Link href="/" className="w-full text-slate-300 hover:text-emerald-400 font-tilt text-xl">Sobre mí</Link>
            <Link href="/skillset" className="w-full text-slate-300 hover:text-emerald-400 font-tilt text-xl">Skillset</Link>
            <Link href="/proyects" className="w-full text-slate-300 hover:text-emerald-400 font-bold text-xl">Proyectos</Link>
            <Link href="/contact" className="w-full text-slate-300 hover:text-emerald-400 font-bold text-xl">Contacto</Link>
          </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}

export default NavbarPage