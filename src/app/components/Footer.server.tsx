import React from "react";
import Footer from "./Footer";

export default function FooterDataFetcher() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return <Footer posts={data} />;
}
