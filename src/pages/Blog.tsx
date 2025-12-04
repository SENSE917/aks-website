import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardDescription, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { articles } from "../data/article";

export function Blog() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="pt-40 pb-20 px-6"
        style={{ background: "linear-gradient(135deg, #253c80 0%, #3fbd9e 100%)" }}
      >
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl mb-6 tracking-tight text-white">Insights & Articles</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest trends, innovations, and insights in technology solutions and smart systems.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {articles.map((article) => (
  <Card key={article.id} className="overflow-hidden border-gray-200 cursor-pointer">
    {/* Image Card */}
    <Link to={`/article/${article.id}`} className="relative h-56 overflow-hidden block">
      <img
        src={article.image || "https://via.placeholder.com/600x400"}
        className="w-full h-56 object-cover rounded-lg shadow-sm pointer-events-none"
        alt={article.title}
      />
    </Link>

    {/* Make content a flex column */}
    <div className="flex flex-col h-full px-4 py-2">
      <CardHeader>
        <CardTitle className="text-2xl">{article.title}</CardTitle>
        <CardDescription>{article.excerpt}</CardDescription>
      </CardHeader>

      <CardContent className="mt-auto">
        <div className="flex justify-between items-center mt-2 mb-4 text-sm text-gray-500">
          <span>{article.date}</span>
          <span>{article.readTime}</span>
        </div>

        {/* Read More Button */}
        <Link to={`/article/${article.id}`}>
          <Button
            className="w-full"
            style={{ background: "#3fbd9e", color: "white" }}
          >
            Read More
          </Button>
        </Link>
      </CardContent>
    </div>
  </Card>
))}
        </div>
      </section>
    </div>
  );
}
