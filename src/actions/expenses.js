import {v1 as uuid} from 'uuid';
import { getDatabase, ref, push, get, query, child, onChildAdded, childSnapshot, onChildChanged, onChildRemoved, set, update, remove, onValue, onValueChange, off } from 'firebase/database';
import db from '../firebase/firebase';

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

// v8 dot
export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    return db.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });
  };
};
// // v9 modular
// export const startAddExpense = (expenseData = {}) => {
//   return (dispatch) => {
//     const {
//       description = '', 
//     note = '', 
//     amount = 0, 
//     createdAt = 0
//     } = expenseData;
//     const expense = { description, note, amount, createdAt };
//     const ref = push(ref(db, 'expenses'), (expense));
//     dispatch(addExpense({
//       id: ref.key,
//       ...expense
//     }));
//   };
// };

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// startRemoveExpense
export const startRemoveExpense = ( { id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return db.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
      dispatch(removeExpense({ id }));
    });
  };
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// startEditExpense
export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return db.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
      dispatch(editExpense(id, updates));
    });
  };
};

// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

// startSetExpenses - v8 dot
export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return db.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
      const expenses = [];
      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      dispatch(setExpenses(expenses));
    });
  };
};

// // v9 modular
// export const startAddExpense = (expenseData = {}) => {
//   return (dispatch) => {
//     const {
//       description = '', 
//     note = '', 
//     amount = 0, 
//     createdAt = 0
//     } = expenseData;
//     const expense = { description, note, amount, createdAt };
//     return push(ref(db, 'expenses'), (expense)).then((ref) => {
//       dispatch(addExpense({
//         id: ref.key,
//         ...expense
//       }));
//     });
//   };
// };