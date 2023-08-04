import { cx } from "classix";
import { ReadingProgress } from "~components/atoms";
import { env } from "~env.mjs";
import { ListSuratProps } from "~interfaces";
import { ofetch } from "~lib/utils/configured-ofetch";
import { DEFAULT_OG_URL, SITE_URL } from "~lib/utils/constants";

import Client from "./client";

const { NEXT_PUBLIC_QURAN_API } = env;

export async function generateStaticParams(): Promise<{ number: string }[]> {
  const response: ListSuratProps = await ofetch(`${NEXT_PUBLIC_QURAN_API}/quran`);
  return response.data.map((item) => ({ number: item.number.toString() }));
}

const baseMetadata = {
  title: "Baca Al-Qur'an | Jadwal Sholat",
  description: "Berlomba-lombalah kamu dalam berbuat kebaikan",
  url: SITE_URL,
};

const { title, description, url } = baseMetadata;

export const metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    url,
    title,
    description,
    images: [
      {
        url: DEFAULT_OG_URL,
        alt: "OG Image",
      },
    ],
    siteName: "info-jadwal-sholat.vercel.app",
  },
  twitter: {
    title,
    description,
    site: url,
    card: "summary_large_image",
  },
  metadataBase: new URL(url),
};

export default async function Surat({ params }: { params: { number: string } }) {
  const { number } = params;

  return (
    <>
      <ReadingProgress />
      <div
        className={cx(
          "flex w-full max-w-full",
          "flex-col items-center justify-start",
          "space-y-7 pt-8 pb-24 md:pb-8"
        )}
      >
        <Client number={number} />
      </div>
    </>
  );
}
