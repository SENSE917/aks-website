import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { useArticles } from "../../context/ArticleContext";
import { ImageUpload } from "../../components/ImageUpload";

export function NewArticle() {
  const navigate = useNavigate();
  const { addArticle } = useArticles();

  const [form, setForm] = useState({
    image: "",
    title: "",
    excerpt: "",
    category: "",
    author: "",
    date: "",
    readTime: "",
  });

  const [showSaveModal, setShowSaveModal] = useState(false);

  const save = () => {
    const newArticle = {
      ...form,
      id: Date.now(), // unique ID
    };
    addArticle(newArticle); // add article instantly
    setShowSaveModal(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (img: string) => setForm({ ...form, image: img });

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section
        className="py-32 px-6"
        style={{ background: "linear-gradient(135deg, #253c80 0%, #3fbd9e 100%)" }}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl mb-6 tracking-tight text-white">
            Add New Article
          </h1>
          <p className="text-lg md:text-2xl text-white/80 leading-relaxed">
            Fill out the form below to publish a new article.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              save();
            }}
            className="space-y-6"
          >
            <ImageUpload value={form.image} onChange={handleImageChange} />

            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Title"
              required
              className="w-full px-4 py-3 border rounded-lg"
            />

            <textarea
              name="excerpt"
              value={form.excerpt}
              onChange={handleChange}
              rows={4}
              placeholder="Excerpt"
              required
              className="w-full px-4 py-3 border rounded-lg"
            />

            <div className="grid grid-cols-2 gap-6">
              <input
                name="category"
                value={form.category}
                onChange={handleChange}
                placeholder="Category"
                required
                className="border p-3 rounded-lg"
              />
              <input
                name="author"
                value={form.author}
                onChange={handleChange}
                placeholder="Author"
                required
                className="border p-3 rounded-lg"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                className="border p-3 rounded-lg"
              />
              <input
                name="readTime"
                value={form.readTime}
                onChange={handleChange}
                placeholder="5 min read"
                required
                className="border p-3 rounded-lg"
              />
            </div>

            <Button
              type="submit"
              className="w-full py-6 text-lg text-white"
              style={{ background: "linear-gradient(135deg, #253c80 0%, #3fbd9e 100%)" }}
            >
              Save Article
            </Button>
          </form>
        </div>
      </section>

      {/* Save Confirmation Modal */}
      {showSaveModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-96 text-center flex flex-col gap-6">
            <h2 className="text-xl font-bold text-gray-800">Article Saved!</h2>
            <p className="text-gray-600">Your new article has been added successfully.</p>
            <button
              className="px-6 py-3 rounded-lg text-white font-semibold"
              style={{ background: "#3fbd9e" }}
              onClick={() => {
                setShowSaveModal(false);
                navigate("/blog");
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
