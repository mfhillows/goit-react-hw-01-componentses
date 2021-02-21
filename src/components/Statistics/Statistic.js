import PropTypes from "prop-types";
import s from "./Statistic.module.css";

function getRandomColor() {
  let color =
    "rgb(" +
    Math.round(Math.random() * 255) +
    "," +
    Math.round(Math.random() * 255) +
    "," +
    Math.round(Math.random() * 255) +
    ")";

  return color;
}

export default function Statistic({ title = "", stats }) {
  return (
    <section className={s.statistic}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statlist}>
        {stats.map((stat) => (
          <li
            style={{ backgroundColor: getRandomColor() }}
            className={s.item}
            key={stat.id}
          >
            <span className={s.label}>{stat.label}</span>
            <span className={s.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
