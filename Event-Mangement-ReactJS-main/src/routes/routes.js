import Home from '../pages/Home';
import Blogs from '../pages/Blogs';
import BlogDetails from '../pages/BlogDetails';

export const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/blogs",
    element: <Blogs />
  },
  {
    path: "/blogs/:postId",
    element: <BlogDetails />
  }
];
