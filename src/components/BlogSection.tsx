import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export interface WPPost {
  id: number;
  date: string;
  link: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url?: string; alt_text?: string }>;
    "wp:term"?: Array<Array<{ name: string }>>;
  };
}

const MONTHS_ES = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"];

export const stripHtml = (html: string) =>
  html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();

export const getPostImage = (post: WPPost) =>
  post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";

export const getPostCategory = (post: WPPost) =>
  post._embedded?.["wp:term"]?.[0]?.[0]?.name || "BLOG";

export const PostCard = ({ post, delay = 0 }: { post: WPPost; delay?: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.12);
  const date = new Date(post.date);
  const day = String(date.getDate()).padStart(2, "0");
  const month = MONTHS_ES[date.getMonth()];
  const image = getPostImage(post);
  const category = getPostCategory(post);

  return (
    <div
      ref={ref}
      className={`scroll-hidden ${isVisible ? "scroll-visible" : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <Card className="group overflow-hidden card-glow transition-all duration-400 hover:-translate-y-2 border-border/50 hover:border-secondary/50 h-full flex flex-col">
        <div className="relative h-56 img-zoom-container bg-muted">
          {image && (
            <img src={image} alt={stripHtml(post.title.rendered)} className="w-full h-full object-cover" loading="lazy" />
          )}
          <span className="absolute top-4 left-4 bg-background/95 backdrop-blur px-3 py-1 text-xs font-bold tracking-wide text-foreground rounded shadow-sm">
            {category.toUpperCase()}
          </span>
          <div className="absolute bottom-0 left-4 translate-y-1/2 bg-secondary text-secondary-foreground px-3 py-2 rounded shadow-medical text-center min-w-[56px]">
            <div className="text-xs font-bold leading-none">{month}</div>
            <div className="text-xl font-bold leading-tight">{day}</div>
          </div>
        </div>
        <div className="p-6 pt-8 flex flex-col flex-1">
          <div className="flex items-center gap-2 text-secondary text-sm font-semibold mb-3">
            <Calendar className="h-4 w-4" />
            <span>{date.toLocaleDateString("es-PE", { day: "numeric", month: "long", year: "numeric" }).toUpperCase()}</span>
          </div>
          <h3 className="font-display font-bold text-lg mb-3 text-foreground leading-snug group-hover:text-secondary transition-colors line-clamp-3">
            {stripHtml(post.title.rendered)}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-3 flex-1">
            {stripHtml(post.excerpt.rendered)}
          </p>
          <Button asChild size="sm" className="self-start btn-ripple bg-primary hover:opacity-90">
            <a href={post.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Leer más <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </Card>
    </div>
  );
};

const BlogSection = () => {
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://blog.varmarsac.com/wp-json/wp/v2/posts?_embed&per_page=3")
      .then((r) => r.json())
      .then((data) => setPosts(Array.isArray(data) ? data : []))
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="py-28 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Actualidad</span>
            <h2 className="font-display text-5xl md:text-6xl font-bold mt-4 mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Blog
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Noticias y perspectivas sobre <span className="text-secondary font-semibold">salud y bienestar</span>
            </p>
          </div>
          <Button asChild size="lg" className="btn-ripple bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-glow">
            <Link to="/blog" className="flex items-center gap-2">
              VER TODO <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-[480px] rounded-lg bg-muted animate-pulse" />
            ))}
          </div>
        ) : posts.length === 0 ? (
          <p className="text-center text-muted-foreground py-12">No se pudieron cargar las publicaciones.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <PostCard key={post.id} post={post} delay={i * 0.1} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
