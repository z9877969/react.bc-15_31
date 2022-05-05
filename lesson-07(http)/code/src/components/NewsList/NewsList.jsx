import s from "./NewsList.module.scss";

const NewsList = ({ news, openModal }) => {
  const handleClick = (e, modalNews) => {
    e.preventDefault();
    openModal(modalNews);
  };
  return (
    <ul className={s.news}>
      {news.map((item, idx) => (
        <li key={idx} className={s.item}>
          <a
            onClick={(e) => handleClick(e, item.description)}
            href={item.url}
            target="_blank"
            rel="noreferrer"
          >
            <img className={s.img} src={item.urlToImage} alt="" />
            <div className={s.textWrapper}>
              <h3 className={s.title}>{item.title}</h3>
              <p className={s.author}>{item.author}</p>
              <p className={s.date}>{item.publishedAt}</p>
              <p className={s.descr}>{item.description}</p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
