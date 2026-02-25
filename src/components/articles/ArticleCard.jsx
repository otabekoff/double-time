export default function ArticleCard({
  img,
  category,
  title,
  desc,
  author,
  date,
}) {
  return (
    <div className="articleCard">
      <div className="articleCard__image">
        <img src={img} alt={title} />
        <span className="articleCard__badge">{category}</span>
      </div>
      <div className="articleCard__content">
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className="articleCard__meta">
          <span>{author}</span>
          <span>{date}</span>
        </div>
        <button className="articleCard__btn">Read More</button>
      </div>
    </div>
  );
}
