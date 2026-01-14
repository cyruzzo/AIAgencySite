import { getPSeoArticle, getAllPSeoArticles } from "@/utils/pSeo";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import { Metadata } from "next";

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const articles = getAllPSeoArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const article = getPSeoArticle(params.slug);

  if (!article) {
    return {
      title: "Articolo non trovato",
    };
  }

  const baseUrl = "https://terabrain.ai";
  const articleUrl = `${baseUrl}/blog/${article.slug}`;

  return {
    title: `${article.title} | Blog AI Agency`,
    description: article.metaDescription,
    keywords: [article.category.toLowerCase(), "blog", "articolo", article.title],
    authors: [{ name: article.author }],
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      type: "article",
      url: articleUrl,
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      publishedTime: article.createdAt,
      authors: [article.author],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.metaDescription,
      images: [article.image],
    },
  };
}

export default function BlogPage({ params }: BlogPageProps) {
  const article = getPSeoArticle(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-zinc-950 pt-24 pb-12">
      <div className="custom-screen-lg">
        {/* Back Button */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 transition-colors mb-8">
          <ArrowLongLeftIcon className="w-5 h-5" />
          Torna al blog
        </Link>

        {/* Article Header */}
        <div className="max-w-3xl">
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-4">
              <span className="inline-block px-3 py-1 bg-yellow-500/10 text-yellow-500 text-sm rounded-full">
                {article.category}
              </span>
              <time className="text-zinc-400 text-sm">
                {new Date(article.createdAt).toLocaleDateString("it-IT", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              {article.title}
            </h1>
            <p className="text-xl text-zinc-400">
              {article.metaDescription}
            </p>
          </div>

          {/* Featured Image */}
          {article.image && (
            <div className="mb-12 rounded-lg overflow-hidden aspect-video">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Article Meta */}
          <div className="flex items-center gap-4 pb-12 border-b border-zinc-800 mb-12">
            <div>
              <p className="text-white font-semibold">{article.author}</p>
              <p className="text-zinc-400 text-sm">Autore</p>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert max-w-none mb-12">
            <div
              className="text-zinc-300 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{
                __html: article.content
                  .split("\n")
                  .map((line) => {
                    if (line.startsWith("# ")) {
                      return `<h1 class="text-3xl font-bold text-white mt-8 mb-4">${line.substring(2)}</h1>`;
                    }
                    if (line.startsWith("## ")) {
                      return `<h2 class="text-2xl font-bold text-white mt-6 mb-3">${line.substring(3)}</h2>`;
                    }
                    if (line.startsWith("### ")) {
                      return `<h3 class="text-xl font-bold text-white mt-4 mb-2">${line.substring(4)}</h3>`;
                    }
                    if (line.startsWith("- ")) {
                      return `<li class="ml-6">${line.substring(2)}</li>`;
                    }
                    if (line.trim() === "") {
                      return "";
                    }
                    return `<p>${line}</p>`;
                  })
                  .join(""),
              }}
            />
          </div>

          {/* Article Footer */}
          <div className="border-t border-zinc-800 pt-12">
            <div className="bg-zinc-900/50 rounded-lg p-8 border border-zinc-800">
              <h3 className="text-white font-semibold mb-4">Condividi questo articolo</h3>
              <div className="flex gap-4">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded transition-colors"
                >
                  Twitter
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
