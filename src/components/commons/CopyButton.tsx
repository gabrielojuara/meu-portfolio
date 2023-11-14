import { CopyIcon } from "../icons/Copyicon";

interface CopyButtonProps {
  textToCopy: string;
}

export const CopyButton = ({ textToCopy }: CopyButtonProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
  };

  return (
    <button className="inline-flex justify-center items-center">
      <CopyIcon title="Clique para copiar" className="fill-white" />
    </button>
  );
};
