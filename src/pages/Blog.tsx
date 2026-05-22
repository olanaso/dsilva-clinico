import { useEffect, useState } from "react";
import { RefreshCw, ChevronLeft, ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { PostCard, WPPost } from "@/components/BlogSection";

const PER_PAGE = 9;

const Blog = () => {
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [reloadKey, setReloadKey] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setLoading(true);
    fetch(`https://blog.varmarsac.com/wp-json/wp/v2/posts?_embed&per_page=${PER_PAGE}&page=${page}`)
      .then(async (r) => {
        const tp = parseInt(r.headers.get("X-WP-TotalPages") || "1", 10);
        const t = parseInt(r.headers.get("X-WP-Total") || "0", 10);
        setTotalPages(isNaN(tp) ? 1 : tp);
        setTotal(isNaN(t) ? 0 : t);
        const data = await r.json();
        return data;
      })
      .then((data) => setPosts(Array.isArray(data) ? data : []))
      .catch(() => setPosts([]))
      .finally(() => {
        setLoading(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
  }, [reloadKey, page]);

  const goTo = (p: number) => {
    if (p < 1 || p > totalPages || p === page) return;
    setPage(p);
  };

  const getPageNumbers = (): (number | "...")[] => {
    const pages: (number | "...")[] = [];
    const max = totalPages;
    if (max <= 7) {
      for (let i = 1; i <= max; i++) pages.push(i);
      return pages;
    }
    pages.push(1);
    if (page > 3) pages.push("...");
    const start = Math.max(2, page - 1);
    const end = Math.min(max - 1, page + 1);
    for (let i = start; i <= end; i++) pages.push(i);
    if (page < max - 2) pages.push("...");
    pages.push(max);
    return pages;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="relative bg-gradient-hero py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-1/2 -right-1/4 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-3xl animate-float" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="font-display text-6xl md:text-7xl font-bold text-primary-foreground mb-4 animate-[fadeSlideIn_0.6s_ease-out]">
            Blog
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl">
            Noticias, novedades y perspectivas sobre salud, bienestar y medicina ocupacional.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 bg-gradient-to-b from-background to-muted flex-1">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Actualidad</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-3 bg-gradient-primary bg-clip-text text-transparent">
                Últimas noticias
              </h2>
              <p className="text-muted-foreground">
                {loading
                  ? "Cargando publicaciones..."
                  : total > 0
                  ? `Página ${page} de ${totalPages} · ${total} publicaciones en total`
                  : "Sin publicaciones."}
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => setReloadKey((k) => k + 1)}
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`} />
              ACTUALIZAR
            </Button>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: PER_PAGE }).map((_, i) => (
                <div key={i} className="h-[480px] rounded-lg bg-muted animate-pulse" />
              ))}
            </div>
          ) : posts.length === 0 ? (
            <p className="text-center text-muted-foreground py-20">No se pudieron cargar las publicaciones.</p>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, i) => (
                  <PostCard key={post.id} post={post} delay={(i % 3) * 0.1} />
                ))}
              </div>

              {totalPages > 1 && (
                <nav className="flex flex-wrap items-center justify-center gap-2 mt-16" aria-label="Paginación">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => goTo(page - 1)}
                    disabled={page === 1}
                    className="border-secondary/40"
                  >
                    <ChevronLeft className="h-4 w-4 mr-1" /> Anterior
                  </Button>

                  {getPageNumbers().map((p, idx) =>
                    p === "..." ? (
                      <span key={`e-${idx}`} className="px-3 text-muted-foreground select-none">
                        …
                      </span>
                    ) : (
                      <Button
                        key={p}
                        size="sm"
                        variant={p === page ? "default" : "outline"}
                        onClick={() => goTo(p)}
                        className={
                          p === page
                            ? "bg-secondary text-secondary-foreground hover:bg-secondary/90 min-w-10"
                            : "border-secondary/40 min-w-10"
                        }
                      >
                        {p}
                      </Button>
                    ),
                  )}

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => goTo(page + 1)}
                    disabled={page === totalPages}
                    className="border-secondary/40"
                  >
                    Siguiente <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </nav>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
