import Link from "next/link";
import Image from "next/image";
import { MenuCloseIcon } from "../icons/menuCloseicon";

interface MenuProps {
  isVisible: boolean;
  onClose: () => void;
}

export const Menu = ({ isVisible, onClose }: MenuProps) => {
  return (
    <div
      className={`${isVisible ? "flex" : "hidden"}
    fixed inset-0 w-full h-full bg-black bg-opacity-40 backdrop-blur-sm md:hidden`}
    >
      <div className="w-full h-96 bg-h-blue-900 shadow-md px-5 py-4">
        <div className="flex justify-between mb-5">
          <Link href="/">
            <Image
              src="/images/Logo_G.png"
              width={55}
              height={55}
              alt="ícone letra G"
            />
          </Link>
          <button onClick={onClose}>
            <MenuCloseIcon className="fill-white w-10 h-10" />
          </button>
        </div>
        <nav className="flex flex-col gap-5 text-xl p-5 items-center">
          <Link href="/" onClick={onClose}>
            Sobre mim
          </Link>
          {
            <Link href="/portfolio" onClick={onClose}>
              Portfolio
            </Link>
          }
          <Link href="/contatos" onClick={onClose}>
            Entre em contato
          </Link>
        </nav>
      </div>
    </div>
  );
};
