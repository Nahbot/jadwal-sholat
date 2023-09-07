import { cx } from "classix";
import Link from "next/link";
import { MdOutlineArrowForward } from "react-icons/md";
import { SuratProps } from "~interfaces";
import { removeSelectedSurat } from "~lib/helpers";

export function Next({ surat }: SuratProps) {
  return (
    <>
      {surat.number < 114 ? (
        <Link href={`/quran/surat/${surat.number + 1}`}>
          <button
            onClick={removeSelectedSurat}
            type="button"
            aria-label="Next"
            className={cx(
              "flex items-center justify-center space-x-1 rounded-md",
              "text-black border-2 border-black px-2 py-1",
              "dark:border-white dark:text-white"
            )}
          >
            <p className="text-base font-bold">Next</p>
            <MdOutlineArrowForward size={25} />
          </button>
        </Link>
      ) : null}
    </>
  );
}
