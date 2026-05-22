import { useEffect, useState } from "react";
import { RefreshCw } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { PostCard, WPPost } from "@/components/BlogSection";

const Blog = () => {
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    setLoading(true);
    fetch("https://blog.varmarsac.com/wp-json/wp/v2/posts?_embed&per_page=12")
      .then((r) => r.json())
      .then((data) => setPosts(Array.isArray(data) ? data : []))
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }, [reloadKey]);

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
                {loading ? "Cargando publicaciones..." : `Mostrando ${posts.length} publicaciones.`}
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
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-[480px] rounded-lg bg-muted animate-pulse" />
              ))}
            </div>
          ) : posts.length === 0 ? (
            <p className="text-center text-muted-foreground py-20">No se pudieron cargar las publicaciones.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, i) => (
                <PostCard key={post.id} post={post} delay={(i % 3) * 0.1} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
