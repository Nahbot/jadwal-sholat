import { MdPlayArrow } from "react-icons/md";
import { suratProps } from "src/props";
import Link from "next/link";

const Selanjutnya = ({ surat }: suratProps) => {
  return (
    <>
      {surat.number < 114 ? (
        <Link href={`/quran/surah/${surat.number + 1}`} passHref>
          <button className="px-2 py-1 dark:border-white flex items-center justify-center gap-1 border-2 border-black rounded-md">
            <p className="text-md font-semibold">Selanjutnya</p>
            <MdPlayArrow size="25px" />
          </button>
        </Link>
      ) : null}
    </>
  );
};

export default Selanjutnya;
