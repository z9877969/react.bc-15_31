import s from "./NewsList.module.scss";

const NewsList = ({ news }) => {
  return (
    <ul className={s.news}>
      {news.map((item, idx) => (
        <li key={idx} className={s.item}>
          <h3 className={s.title}>{item.title}</h3>
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
