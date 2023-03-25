import './App.css';

import React from 'react';
import Listitems from './Listitems';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
      },
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItems = this.addItems.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }

  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  addItems(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: "",
          key: ''
        }
      })
    }
  }
  deleteItem(key) {
    const filterItems = this.state.items.filter(item => item.key !== key);
    this.setState({
      items: filterItems
    })
  }
  setUpdate(text,key){
    const items = this.state.items;
    items.map(item => {
      if(item.key === key){
        item.text=text;
      }
    })
    this.setState({
      items:items
    })
  }
  render() {
    return (
      <div className='App'>
        <header>
          <form id='todo-form' onSubmit={this.addItems}>
            <input type="text" placeholder='Enter the Task' value={this.state.currentItem.text} onChange={this.handleInput} />
            <button type='submit'>Add-Task</button>

          </form>
        </header>
        <Listitems items={this.state.items}
          deleteItem={this.deleteItem}
          setUpdate={this.setUpdate}
          >
        </Listitems>
      </div>
    )
  }
}

export default App


