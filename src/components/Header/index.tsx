import Link from "next/link";
import Image from "next/image";
import { Roboto } from "next/font/google";
import { Menu } from "./Menu";
import { useCallback, useState } from "react";
import { MenuIcon } from "../icons/menuicon";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "500",
});

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = useCallback(() => {
    setIsMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <header
      className={`${roboto.className} bg-gray-800  text-sm flex py-3 px-5 justify-between items-center sticky top-0 z-20 `}
    >
      <Link href="/">
        <Image
          src="/images/Logo_G.png"
          width={55}
          height={55}
          alt="Ícone da Página principal"
        />
      </Link>
      <button className="p-1 md:hidden" onClick={openMenu}>
        <MenuIcon className="fill-white w-10 h-10" />
      </button>
      <nav className="hidden md:flex items-center gap-10 text-md">
        <Link href="/">Sobre mim</Link>
        {/* <Link href="/portfolio">Meu Portfolio</Link> */}
        <Link href="/contatos">Entre em contato</Link>
      </nav>
      <Menu isVisible={isMenuOpen} onClose={closeMenu} />
    </header>
  );
};
