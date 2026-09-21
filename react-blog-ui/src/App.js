import { useState } from "react";
import postsData from "./posts.json";
import PostCard from "./components/PostCard";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Get unique categories for the dropdown
  const categories = ["All", ...new Set(postsData.map((post) => post.category))];

  // Filter posts based on search text and selected category
  const filteredPosts = postsData.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || post.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>React Blog</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "8px", marginRight: "10px" }}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ padding: "8px" }}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => <PostCard key={post.id} post={post} />)
        ) : (
          <p>No posts found.</p>
        )}
      </div>
    </div>
  );
}

export default App;