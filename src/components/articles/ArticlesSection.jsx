import React from 'react'

import "./articles.css";
import ArticleCard from "./ArticleCard";
import a1 from "../../assets/a1.jpg";
import a2 from "../../assets/a2.jpg";
import a3 from "../../assets/a3.jpg";

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
            img={a1}
            category="Design"
            title="Modern UI Trends in 2026"
            desc="Explore the latest UI patterns and visual trends that are shaping modern web interfaces."
            author="Nursultan"
            date="March 2026"
          />

          <ArticleCard
            img={a2}
            category="Development"
            title="Building Scalable React Apps"
            desc="Best practices for structuring large React applications with performance in mind."
            author="Otabek"
            date="March 2026"
          />

          <ArticleCard
            img={a3}
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