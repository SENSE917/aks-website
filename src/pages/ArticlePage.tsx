import React from "react";
import { useParams, Link } from "react-router-dom";
import { articles } from "../data/article";
import { Button } from "../components/ui/button";

export function ArticlePage() {
  const { id } = useParams<{ id: string }>();

  const article = articles.find((a) => a.id === Number(id));

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-700">
        <h1 className="text-3xl font-bold mb-6">Article Not Found</h1>
        <Link to="/blog">
          <Button style={{ background: "#3fbd9e", color: "white", padding: "0.75rem 1.5rem" }}>
            Back to Blog
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image */}
      <div className="relative w-full max-w-4xl mx-auto mt-10 rounded overflow-hidden">
        <img
  src={article.image} // no process.env.PUBLIC_URL needed
  
/>

<h1 className="text-4xl font-bold mb-8">{article.title}</h1>

      </div>

      {/* Article Content */}
      <div className="container mx-auto max-w-4xl px-6 py-12">
        <div className="flex justify-between items-center text-gray-500 mb-6 text-sm">
          <span>{article.date}</span>
          <span>{article.readTime}</span>
        </div>
        <div className="prose max-w-full mb-8">
          {(article.content || "").split("\n").map((line: string, index: number) => (
            <p key={index}>{line}</p>
          ))}
        </div>

        {/* Back to Blog Button */}
        <div className="mt-12 mb-12">
  <Link to="/blog">
    <Button style={{ background: "#3fbd9e", color: "white", padding: "0.75rem 1.5rem" }}>
      Back to Blog
    </Button>
  </Link>
</div>
      </div>
    </div>
  );
}
