import React, { useState } from 'react';
import './App.css';
import './components/ListItem';
import ListItem from './components/ListItem';
import AppHeader from './components/AppHeader';
import PageTitle from './components/PageTitle';

interface iListItem {
  id: number;
  description: string;
}

function App() {
  const [inputValue, setInputValue] = useState('');
  const [listItems, setListItems] = useState<iListItem[]>([]);

  const updateInput = function (inputValue: string) {
    setInputValue(inputValue);
  };

  const addToListItems = function () {
    if (!inputValue) {
      return;
    }

    let maxId = 0;

    if (listItems.length !== 0) {
      const ids: number[] = listItems.map((x) => x.id);
      maxId = Math.max(...ids);
    }

    const newItem = { id: maxId + 1, description: inputValue };
    setListItems((oldArray) => [...oldArray, newItem]);
    setInputValue('');
  };

  const deleteFromListItems = function (id: number) {
    const newArray = listItems.filter((x) => x.id !== id);

    setListItems((oldArray) => [...newArray]);
  };

  return (
    <div className='App'>
      <AppHeader></AppHeader>
      <div className='container'>
        <PageTitle pageTitle='Create List'></PageTitle>
        <div className='row' id='newItem'>
          New Item
        </div>
        <div className='row'>
          <br></br>
        </div>
        <div className='row'>
          <input
            name='myInput'
            type='text'
            value={inputValue}
            onChange={(event) => updateInput(event.target.value)}
            className='form-control rounded'
            id='usr'
            maxLength={50}
          />
        </div>
        <div className='row'>
          <br></br>
        </div>
        <div className='row'>
          <button
            type='button'
            className='btn btn-primary'
            onClick={addToListItems}
          >
            Add Item To List
          </button>
        </div>

        <div>
          {listItems.map((item) => (
            <ListItem
              key={item.id}
              itemId={item.id}
              itemText={item.description}
              onDelete={(id: number) => {
                deleteFromListItems(id);
              }}
            ></ListItem>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
