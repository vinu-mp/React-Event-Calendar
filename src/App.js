import React, {useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {

  const [expenses, updateExpenses] = useState([
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', 
      title: 'New TV', 
      amount: 799.49, 
      date: new Date(2021, 2, 12) 
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2022, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    } 
  ]);

  const getFormSubmitData = (formData) => {
    formData['date'] = new Date(formData['date']);
    var updatedData = { id:Math.random().toString(), ...formData}
    updateExpenses((prevState) => {
      return [
        ...prevState,
        {...updatedData}
      ]
    })
  }

  const deleteItemHandler = (itemKey) => {
    const currentList = expenses;
    const updatedList = currentList.filter((item) => item.id !== itemKey);
    console.log('here triggered',updatedList, itemKey);
    updateExpenses([...updatedList])
  }

  return (
    <div> 
      <NewExpense getFormData={getFormSubmitData}/>
      <Expenses deleteItem={deleteItemHandler} expenses={expenses}/>
    </div>

    // This is how it works under the hood. Also explains why we need a wrapping div -  3 args - element/attributes or props/ children

    // React.createElement('div', {}, 
    //   React.createElement('h2', {}),
    //   React.createElement(Expenses, {expenses: expenses})
    // )

  );
}

export default App;
