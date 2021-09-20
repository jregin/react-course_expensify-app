import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import 'numeral/locales/da-dk';

{numeral.locale('da-dk')}
const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <Link className="list-item" to={`/edit/${id}`}>
  <div>
    <h3 className="list-item__title">{description}</h3>
    <span className="list-item__sub-title">{moment(createdAt).format('LL')}</span>
  </div>
    <h3 className="list-item__data">{numeral(amount / 100).format('$ 0,0.00')}</h3>
  </Link>
);

// props.dispatch(removeExpense(e.target.id))

// const mapStateToProps = (state) => {
//   return {
//     filters: state.filters
//   };
// };

export default ExpenseListItem;
