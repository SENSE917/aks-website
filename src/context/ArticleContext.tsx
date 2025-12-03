import React, { createContext, useState, ReactNode, useEffect, useContext } from "react";

export interface BlogArticle {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
}

interface ArticleContextType {
  articles: BlogArticle[];
  addArticle: (article: BlogArticle) => void;
  editArticle: (id: number, updated: BlogArticle) => void;
  deleteArticle: (id: number) => void;
}

export const ArticleContext = createContext<ArticleContextType | undefined>(undefined);

export const ArticleProvider = ({ children }: { children: ReactNode }) => {
  const [articles, setArticles] = useState<BlogArticle[]>(() => {
    const saved = localStorage.getItem("articles");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            title: "Digital Signage AKS sudah aktif di stasiun Kertasono",
            excerpt: "Digital Signage AKS sudah aktif di stasiun Kertasono.",
            category: "News",
            date: "2025-11-15",
            readTime: "5 min read",
            image: "/assets/1.jpg",
            author: "Arda Karya Team",
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("articles", JSON.stringify(articles));
  }, [articles]);

  const addArticle = (article: BlogArticle) => setArticles((prev) => [...prev, article]);
  const editArticle = (id: number, updated: BlogArticle) =>
    setArticles((prev) => prev.map((a) => (a.id === id ? { ...updated, id } : a)));
  const deleteArticle = (id: number) => setArticles((prev) => prev.filter((a) => a.id !== id));

  return (
    <ArticleContext.Provider value={{ articles, addArticle, editArticle, deleteArticle }}>
      {children}
    </ArticleContext.Provider>
  );
};

export const useArticles = () => {
  const ctx = useContext(ArticleContext);
  if (!ctx) throw new Error("useArticles must be used within ArticleProvider");
  return ctx;
};
