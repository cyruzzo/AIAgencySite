import { Inter } from "next/font/google";
import "./tailwind.css";
import "./customize.css";
import "./prismjs-theme.css";
import Navbar from "components/ui/Navbar";
import Footer from "components/ui/Footer";
import metatag from "metatag";

const { title, desc, ogImage } = metatag;

export const metadata = {
  metadataBase: new URL("https://terabrain.ai"),
  title,
  description: desc,
  openGraph: {
    title,
    description: desc,
    images: ogImage,
    url: "https://terabrain.ai",
  },
  twitter: {
    title,
    description: desc,
    images: [ogImage],
  },
};

const inter = Inter({ subsets: ["latin"] });

const GA_ID = process.env.GA_ID;
const GOOGLE_SITE_VERIFICATION = process.env.GOOGLE_SITE_VERIFICATION;

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-zinc-950">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=3"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@float_ui" />
        <meta name="twitter:creator" content="@float_ui" />
        <link rel="icon" href="/logo.svg" />
        <meta
          name="google-site-verification"
          content={GOOGLE_SITE_VERIFICATION}
        />
        <meta name="msvalidate.01" content="D00EDAC78FB47DDD869F2C18FD8A6572" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
