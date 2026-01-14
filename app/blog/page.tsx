import { getAllPSeoArticles } from "@/utils/pSeo";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - AI Agency",
  description: "Scopri articoli informativi su tecnologia, e-commerce, SEO e molto altro. Rimani aggiornato con le ultime tendenze del settore.",
  keywords: ["blog", "articoli", "tecnologia", "e-commerce", "SEO", "IA", "intelligenza artificiale"],
  openGraph: {
    title: "Blog - AI Agency",
    description: "Scopri articoli informativi su tecnologia, e-commerce, SEO e molto altro. Rimani aggiornato con le ultime tendenze del settore.",
    type: "website",
    url: "https://terabrain.ai/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - AI Agency",
    description: "Scopri articoli informativi su tecnologia, e-commerce, SEO e molto altro. Rimani aggiornato con le ultime tendenze del settore.",
  },
};

export default function BlogPage() {
  const articles = getAllPSeoArticles();

  return (
    <main className="min-h-screen bg-zinc-950 pt-24 pb-12">
      <div className="custom-screen-lg">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Blog</h1>
          <p className="text-xl text-zinc-400">
            Scopri articoli informativi su tecnologia, e-commerce, SEO e molto altro. Rimani aggiornato con le ultime tendenze del settore.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid gap-8 md:gap-12">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="border-b border-zinc-800 pb-8 md:pb-12 last:border-b-0"
            >
              <Link href={`/blog/${article.slug}`} className="block group">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Image */}
                  {article.image && (
                    <div className="md:col-span-1 overflow-hidden rounded-lg aspect-square md:aspect-auto">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className={article.image ? "md:col-span-2" : ""}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-block px-3 py-1 bg-yellow-500/10 text-yellow-500 text-xs rounded-full">
                        {article.category}
                      </span>
                      <time className="text-zinc-500 text-sm">
                        {new Date(article.createdAt).toLocaleDateString("it-IT", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </time>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors">
                      {article.title}
                    </h2>

                    <p className="text-zinc-400 mb-4 line-clamp-2">
                      {article.metaDescription}
                    </p>

                    <div className="flex items-center gap-2 text-yellow-500 group-hover:gap-3 transition-all">
                      <span>Leggi articolo</span>
                      <ArrowLongRightIcon className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">
            Vuoi rimanere aggiornato?
          </h3>
          <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
            Iscriviti alla nostra newsletter per ricevere i nuovi articoli direttamente nella tua casella di posta.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Il tuo email"
              className="flex-1 px-4 py-2 bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 rounded-lg focus:outline-none focus:border-yellow-500 transition-colors"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-colors"
            >
              Iscriviti
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
