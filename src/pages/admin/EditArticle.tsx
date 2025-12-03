import { useParams, useNavigate } from "react-router-dom";
import { useArticles } from "../../context/ArticleContext";
import { useState } from "react";
import { ImageUpload } from "../../components/ImageUpload";
import { Button } from "../../components/ui/button";

export function EditArticle() {
  const { id } = useParams();
  const { articles, editArticle } = useArticles();
  const navigate = useNavigate();

  const article = articles.find(a => a.id === Number(id));

  const [form, setForm] = useState(article || {
    id: 0, title: "", excerpt: "", category: "", date: "", readTime: "", image: "", author: ""
  });

  if (!article) return <div className="p-10">Article not found.</div>;

  const save = () => {
    editArticle(form.id, form);
    navigate("/blog");
  };

  return (
    <div className="pt-24">
      <section
        className="py-32 px-6"
        style={{ background: "linear-gradient(135deg, #253c80 0%, #3fbd9e 100%)" }}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl mb-6 tracking-tight text-white">
            Edit Article
          </h1>
          <p className="text-lg md:text-2xl text-white/80 leading-relaxed">
            Update the article below.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <form onSubmit={(e) => { e.preventDefault(); save(); }} className="space-y-6">
            <ImageUpload value={form.image} onChange={img => setForm({...form, image: img})} />
            <input className="border p-3 w-full rounded" placeholder="Title" value={form.title} onChange={e => setForm({...form, title: e.target.value})} />
            <textarea className="border p-3 w-full rounded" placeholder="Excerpt" value={form.excerpt} onChange={e => setForm({...form, excerpt: e.target.value})} />
            <input className="border p-3 w-full rounded" placeholder="Category" value={form.category} onChange={e => setForm({...form, category: e.target.value})} />
            <input className="border p-3 w-full rounded" placeholder="Author" value={form.author} onChange={e => setForm({...form, author: e.target.value})} />
            <input type="date" className="border p-3 w-full rounded" value={form.date} onChange={e => setForm({...form, date: e.target.value})} />
            <input className="border p-3 w-full rounded" placeholder="Read Time" value={form.readTime} onChange={e => setForm({...form, readTime: e.target.value})} />

            <Button type="submit" className="w-full py-4 text-white" style={{ background: "linear-gradient(135deg, #253c80 0%, #3fbd9e 100%)" }}>
              Save Changes
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
