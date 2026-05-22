export const WP_BASE = "https://blog.clinicadsilva.com/wp-json/wp/v2";

export const WP_CATEGORIES = {
  modal: 2,
  banner: 3,
  blog: 4,
} as const;

export interface WPPost {
  id: number;
  date: string;
  link: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content?: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url?: string;
      alt_text?: string;
      media_details?: {
        sizes?: Record<string, { source_url?: string; width?: number; height?: number }>;
      };
    }>;
    "wp:term"?: Array<Array<{ name: string }>>;
  };
}

export const stripHtml = (html: string) =>
  (html || "").replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();

export const getPostImage = (post: WPPost, preferHigh = false) => {
  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  if (!media) return "";
  if (preferHigh) {
    const sizes = media.media_details?.sizes;
    if (sizes) {
      const ordered = ["2048x2048", "1536x1536", "full", "large", "medium_large", "medium"];
      for (const key of ordered) {
        const url = sizes[key]?.source_url;
        if (url) return url;
      }
    }
  }
  return media.source_url || "";
};

export const getPostCategory = (post: WPPost) =>
  post._embedded?.["wp:term"]?.[0]?.[0]?.name || "BLOG";

export const fetchPostsByCategory = async (
  category: number,
  perPage = 6,
  page = 1,
): Promise<{ posts: WPPost[]; totalPages: number; total: number }> => {
  const res = await fetch(
    `${WP_BASE}/posts?_embed&categories=${category}&per_page=${perPage}&page=${page}`,
  );
  if (!res.ok) return { posts: [], totalPages: 1, total: 0 };
  const totalPages = parseInt(res.headers.get("X-WP-TotalPages") || "1", 10) || 1;
  const total = parseInt(res.headers.get("X-WP-Total") || "0", 10) || 0;
  const data = await res.json();
  return { posts: Array.isArray(data) ? data : [], totalPages, total };
};
