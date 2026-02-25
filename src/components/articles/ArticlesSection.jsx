import React from "react";

import "./articles.css";
import ArticleCard from "./ArticleCard";

export default function Articles() {
  return (
    <section className="articles">
      <div className="articles__container">
        <div className="articles__header">
          <h2>Latest Articles</h2>
          <p>Insights, tutorials and web development tips from our team.</p>
        </div>

        <div className="articles__grid">
          <ArticleCard
            img={"/maldives.jpg"}
            category="Design"
            title="Modern UI Trends in 2026"
            desc="Explore the latest UI patterns and visual trends that are shaping modern web interfaces."
            author="Nursultan"
            date="March 2026"
          />

          <ArticleCard
            img={"/beautiful.jpg"}
            category="Development"
            title="Building Scalable React Apps"
            desc="Best practices for structuring large React applications with performance in mind."
            author="Otabek"
            date="March 2026"
          />

          <ArticleCard
            img={"/island.webp"}
            category="Performance"
            title="Speed Optimization Techniques"
            desc="Improve your website speed with advanced optimization and best coding practices."
            author="ON Studio"
            date="March 2026"
          />
        </div>
      </div>
    </section>
  );
}
