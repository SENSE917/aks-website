import { useAuth } from "../../context/AuthContext";
import { useArticles } from "../../context/ArticleContext";
import { Button } from "../../components/ui/button";

export function AdminArticles() {
  const { role } = useAuth();
  const { articles, deleteArticle } = useArticles();

  if (role !== "admin") return <div className="p-10">Access Denied</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Manage Articles</h1>
      {articles.map((a) => (
        <div key={a.id} className="border p-4 mb-4 rounded">
          <h2 className="text-xl font-semibold">{a.title}</h2>
          <div className="flex gap-3 mt-2">
            <Button onClick={() => deleteArticle(a.id)} style={{ background: "#3fbd9e" }}>Delete</Button>
            {/* Link to edit page */}
          </div>
        </div>
      ))}
    </div>
  );
}
