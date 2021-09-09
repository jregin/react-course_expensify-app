import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import 'numeral/locales/da-dk';

{numeral.locale('da-dk')}
const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
  <Link to={`/edit/${id}`}>
    <h3>{description}</h3>
  </Link>
    <p>
    {numeral(amount / 100).format('$ 0,0.00')} 
    -- 
    {moment(createdAt).format('LL')}</p>
  </div>
);

// props.dispatch(removeExpense(e.target.id))

// const mapStateToProps = (state) => {
//   return {
//     filters: state.filters
//   };
// };

export default ExpenseListItem;
