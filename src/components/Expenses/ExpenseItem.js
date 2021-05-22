import {useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {

  const onClickHandler = (id) => {
    props.deleteItem(id);
  }

  return (
    <li>
      <Card classes="expense-item">
        <ExpenseDate date={props.attributes.date}/>
        <div className="expense-item__description" data-key={props.attributes.id}>
          <h2>{props.attributes.title}</h2>
          <div className="expense-item__price">${props.attributes.amount}</div>
        </div>
        <button className="expense-item__delete" onClick={() => onClickHandler(props.attributes.id)}> delete </button>
      </Card>
    </li>
  )
}

export default ExpenseItem;
