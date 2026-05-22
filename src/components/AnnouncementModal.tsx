import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { WPPost, fetchPostsByCategory, getPostImage, stripHtml, WP_CATEGORIES } from "@/lib/wp";

const STORAGE_KEY = "dsilva-announcement-dismissed";

const AnnouncementModal = () => {
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === "1") return;
    fetchPostsByCategory(WP_CATEGORIES.modal, 10).then(({ posts }) => {
      if (posts.length > 0) {
        setPosts(posts);
        setTimeout(() => setOpen(true), 800);
      }
    });
  }, []);

  const close = () => {
    setOpen(false);
    sessionStorage.setItem(STORAGE_KEY, "1");
  };

  const next = () => setCurrent((c) => (c + 1) % posts.length);
  const prev = () => setCurrent((c) => (c - 1 + posts.length) % posts.length);

  if (!open || posts.length === 0) return null;

  const post = posts[current];
  const image = getPostImage(post, true);
  const title = stripHtml(post.title.rendered);
  const excerpt = stripHtml(post.excerpt.rendered);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-[fadeSlideIn_0.3s_ease-out]"
      role="dialog"
      aria-modal="true"
      onClick={close}
    >
      <div
        className="relative w-full max-w-2xl bg-background rounded-2xl shadow-2xl overflow-hidden border border-secondary/30"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          aria-label="Cerrar"
          className="absolute top-3 right-3 z-20 w-10 h-10 rounded-full bg-background/90 backdrop-blur border border-border flex items-center justify-center text-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:scale-110 shadow-md"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative">
          {image && (
            <div className="relative h-64 md:h-80 bg-muted overflow-hidden">
              <img src={image} alt={title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            </div>
          )}

          <div className="p-6 md:p-8">
            <span className="inline-block px-3 py-1 mb-3 text-xs font-bold uppercase tracking-wider bg-secondary/15 text-secondary rounded-full">
              Aviso
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-3 bg-gradient-primary bg-clip-text text-transparent">
              {title}
            </h2>
            {excerpt && (
              <p className="text-muted-foreground leading-relaxed mb-5 line-clamp-4">{excerpt}</p>
            )}
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-secondary font-semibold hover:underline"
            >
              Ver más detalles →
            </a>
          </div>

          {posts.length > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Anterior"
                className="absolute left-3 top-1/3 z-10 w-10 h-10 rounded-full bg-background/90 backdrop-blur border border-border flex items-center justify-center text-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 shadow-md"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                aria-label="Siguiente"
                className="absolute right-3 top-1/3 z-10 w-10 h-10 rounded-full bg-background/90 backdrop-blur border border-border flex items-center justify-center text-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 shadow-md"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              <div className="flex justify-center gap-2 pb-5">
                {posts.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Ir al aviso ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current ? "w-8 bg-secondary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementModal;
