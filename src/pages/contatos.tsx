import { CopyButton } from "@/components/commons/CopyButton";
import Head from "next/head";

interface ContatosProps {
  contacts: {
    name: string;
    link: string;
    isMail?: boolean;
  }[];
}

const Contatos = ({ contacts }: ContatosProps) => {
  console.log(contacts);

  return (
    <>
      <Head>
        <title>Contatos | Gabriel</title>
      </Head>
      <div className="mt-12 md:mt-24 space-y-8 md:space-y-16 px-6 md:px-32">
        <h1 className="text-5xl md:text-7xl font-bold text-center">Contatos</h1>
        <ul className="table mx-auto space-y-6 md:space-y-8">
          {contacts.map(({ link, name, isMail }, idx) => (
            <li key={name + idx}></li>
          ))}
          <li className="md:text-xl">
            <span className="font-bold">E-mail</span>
            <div className="flex gap-1 md:gap-3 items-center">
              <a
                href="mailto:araujo.jhs18@gmail.com"
                target="_blank"
                className="text-sm md:text-lg text-slate-300 underline truncate"
              >
                araujo.jhs18@gmail.com
              </a>
              <CopyButton textToCopy="araujo.jhs18@gmail.com" />
            </div>
          </li>
          <li className="md:text-xl">
            <span className="font-bold">LinkedIn</span>
            <div className="flex gap-1 md:gap-3 items-center">
              <a
                className="text-sm md:text-lg text-slate-300 underline truncate"
                href="https://www.linkedin.com/in/gabriel-ara%C3%BAjo-/"
              >
                https://www.linkedin.com/in/gabriel-ara%C3%BAjo-/
              </a>
            </div>
          </li>
          <li className="md:text-xl">
            <span className="font-bold">GitHub</span>
            <div className="flex-gap-1 md:gap-3 items-center">
              <a
                className="text-sm md:text-lg text-slate-300 underline truncate"
                href="https://github.com/gabrielojuara"
              >
                https://github.com/gabrielojuara
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

const loadContacts = async () => {
  const res = await fetch(
    "https://gist.githubusercontent.com/gabrielojuara/cfd4f08784c0f9d7a01660ab255931e4/raw/49bad5d6a9f49d294c4c330040917e70f32d9d0a/contacts.json"
  );

  const data = res.json();
  return data;
};

export const getServerSideProps = async () => {
  const contacts = await loadContacts();
  return {
    props: {
      contacts,
    },
  };
};
export default Contatos;
