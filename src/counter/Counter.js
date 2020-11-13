import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export const Counter = () => {
  const dispatch = useDispatch();
  const reduxNumber = useSelector(state => state.number);

  const plus = () => {
    dispatch({
      type: 'PLUS',
      payload: 1,
    });
  };

  const minus = () => {
    dispatch({
      type: 'MINUS',
      payload: 1,
    });
  };

  console.log('reduxNumber', reduxNumber);

  return (
    <div>
      <div> Number : {reduxNumber} </div>
      <button onClick={plus}> PLUS </button>
      <button onClick={minus}> MINUS </button>
    </div>
  );
};
