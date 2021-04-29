import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const TodoItem = ({ onClick, onDelete, completed, text }) => (
  <ListGroupItem onClick={onClick} style={{ cursor: 'pointer' }}>
    <div
      className={'float-start my-3' + (completed ? ' text-muted' : '')}
      style={{
        textDecoration: completed ? 'line-through' : 'none',
      }}
    >
      {text}
    </div>
    <Button className='float-end  mt-2' color='info' onClick={onDelete}>
      <FontAwesomeIcon icon={faTrashAlt} />
    </Button>
  </ListGroupItem>
);

TodoItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default TodoItem;
