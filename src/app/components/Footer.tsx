import React from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};

type FooterProps = {
  posts: Post[];
};

export default function Footer({ posts }: FooterProps) {
  return (
    <footer>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </footer>
  );
}
