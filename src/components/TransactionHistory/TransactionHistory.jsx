import PropTypes from "prop-types";
import s from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
    return ( <table className={s.transaction}>

  <thead>
    <tr>
      <th className={s.head}>Type</th>
      <th className={s.head}>Amount</th>
      <th className={s.head}>Currency</th>
    </tr>
  </thead>

  <tbody>
            {items.map((item) => (<tr key={item.id}>
    <td className={s.item}>{item.type}</td>
      <td className={s.item}>{item.amount}</td>
      <td className={s.item}>{item.currency}</td>
    </tr>))}
  </tbody>
</table>)
}

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};