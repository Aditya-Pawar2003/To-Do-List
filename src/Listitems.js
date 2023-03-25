import React from 'react';
import './Listitem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

function Listitems(props) {
  const items = props.items;
  const listItems = items.map(item => {
    return(
      <FlipMove duration={300} easing="ease-in-out">
     <div className='list' key={item.key}>
      <p>
        <input type="text"
          id={item.key}
          value={item.text}
          onChange={
            (e) => {
              props.SetUpdate(e.target.value, item.key)
            }
          }
        />
        <span>
          <FontAwesomeIcon className='faicons' icon='trash'
            onClick={() => props.deleteItem(item.key)} />
        </span>
      </p>

    </div>
    </FlipMove>
    );
  })
  return (
    <div>
      <FlipMove duration={300} easing="ease-in-out">
        {listItems}
      </FlipMove>
    </div>
  )
}

export default Listitems

