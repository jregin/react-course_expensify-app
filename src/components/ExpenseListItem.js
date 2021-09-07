import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
  <Link to={`/edit/${id}`}>
    <h3>{description}</h3>
  </Link>
    <p>{amount} - {createdAt}</p>
  </div>
);

// props.dispatch(removeExpense(e.target.id))

// const mapStateToProps = (state) => {
//   return {
//     filters: state.filters
//   };
// };

export default ExpenseListItem;
