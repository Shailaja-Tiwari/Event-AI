import { Link } from 'react-router-dom';
import './Blogs.css'; // You can extract the CSS into this file

const blogPosts = {
  "ai-chat": {
    title: "Next-Gen AI Chat Tools",
    excerpt: "Explore how modern AI tools are transforming customer interaction and productivity.",
    image: "/next gen ai tools.png"
  },
  "future-tech": {
    title: "Top Emerging Technologies",
    excerpt: "Quantum computing, biotech, AR/VR—here's what's changing the game in tech.",
    image: "/top ai tools.png"
  },
  "ai-healthcare": {
    title: "AI in Event Management",
    excerpt: "From diagnosis to robotics—AI is healing the future.",
    image: "/ai in event management.png"
  },
  "ai-management": {
    title: "Rise of AI",
    excerpt: "How businesses use AI to streamline operations and decision-making.",
    image: "/rise og ai.png"
  }
};

export default function Blogs() {
  return (
    <>
      <header>
        <h1>Tech & AI Insights</h1>
        <p>Explore the future of technology and artificial intelligence</p>
      </header>
      <section className="blog-container">
        {Object.entries(blogPosts).map(([key, { title, excerpt, image }]) => (
          <div className="blog-card" key={key}>
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{excerpt}</p>
            <Link className="read-more" to={`/blogs/${key}`}>Read More</Link>
          </div>
        ))}
      </section>
    </>
  );
}
