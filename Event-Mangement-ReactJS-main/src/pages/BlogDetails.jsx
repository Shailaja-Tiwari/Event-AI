import { useParams, Link } from 'react-router-dom';

const posts = {
  "ai-chat": {
    title: "Next-Gen AI Chat Tools",
    content: `AI chat tools like ChatGPT and Bard are reshaping conversations...`
  },
  "future-tech": {
    title: "Top 5 Emerging Technologies",
    content: `Quantum computing, AR/VR, biotechnology...`
  },
  "ai-healthcare": {
    title: "AI in Healthcare",
    content: `AI aids in radiology, pathology, and predictive diagnosis...`
  },
  "ai-management": {
    title: "AI-Driven Management Platforms",
    content: `AI management platforms use machine learning for decision-making...`
  }
};

export default function BlogDetails() {
  const { postId } = useParams();
  const post = posts[postId];

  if (!post) {
    return (
      <div id="blog-detail">
        <p>Sorry, this blog post doesn't exist.</p>
        <Link to="/blogs" className="read-more">← Back to Insights</Link>
      </div>
    );
  }

  return (
    <div id="blog-detail">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <Link to="/blogs" className="read-more">← Back to Insights</Link>
    </div>
  );
}
