import {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

  // const [title, setTitle] = useState('');
  // const [amount, setAmount] = useState('');
  // const[date, setDate] = useState('');

  const [inputObj, setInput] = useState({
    title: '',
    amount: '',
    date: ''
  });

  const onInpputUpdateHandler = (event, label) => {
    const value = event.target.value
    setInput((prevState) => {
      return {
        ...prevState,
       [label]: value
      }
    })
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.getFormSubmitData(inputObj)
    setInput({
      title: '',
      amount: '',
      date: ''
    })
  }

  return(
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={inputObj.title} onChange={(event) => onInpputUpdateHandler(event, 'title')} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min='0.1' step='0.1' value={inputObj.amount} onChange={(event) => onInpputUpdateHandler(event, 'amount')}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min='2020-01-01' max='2022-12-31' value={inputObj.date} onChange={(event) => onInpputUpdateHandler(event, 'date')}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add</button>
      </div>
    </form>

  )
}

export default ExpenseForm