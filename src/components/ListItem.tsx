import React from 'react';
import '../App.css';

interface ListItemProps {
  itemId: number;
  itemText: string;
  onDelete: (id: number) => void;
}

const divStyle = {
  paddingTop: '6px',
};

const fontSize = {
  fontSize: '1em',
};

const ListItem = ({ itemId, itemText, onDelete }: ListItemProps) => {
  return (
    <div className='row'>
      <div className='row'>
        <br></br>
      </div>
      <div className='col-sm'>
        <div className='addedItem'>
          <div className='text-start' style={fontSize}>
            {itemText}
          </div>
        </div>
      </div>
      <div className='col-sm'></div>
      <div className='col-sm text-end'>
        <button
          type='button'
          className='btn btn-primary'
          onClick={() => onDelete(itemId)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default ListItem;
