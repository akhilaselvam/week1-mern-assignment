function PostCard({ post }) {
  return (
    <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "16px", margin: "10px", width: "250px" }}>
      <h3>{post.title}</h3>
      <p><strong>Category:</strong> {post.category}</p>
      <p><strong>Author:</strong> {post.author}</p>
      <p>{post.excerpt}</p>
    </div>
  );
}

export default PostCard;