import React, { Component, PropTypes } from 'react';
import ItemTypes from './ItemTypes';
import { DropTarget } from 'react-dnd';

import './css/box.css';

const boxTarget = {
  drop(props, monitor, component) {
    props.setLastItem(monitor.getItem().name);
    return { name: 'Box' };
  }
};

class Box extends Component {
  render() {
    const { item, name, canDrop, isOver, connectDropTarget } = this.props;

    let backgroundColor = 'teal';
    if (isOver) {
      backgroundColor = 'green';
    } else if (canDrop) {
      backgroundColor = 'red';
    }

    return connectDropTarget(
      <div className='box' style={{ backgroundColor }}>
        {isOver ? 'Release to drop' : 'Drag a box here' }
        <br />
        {name}
        <p>
          {item}
        </p>
      </div>
    );
  }
}

Box.propTypes = {
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
  canDrop: PropTypes.bool.isRequired
};

export default DropTarget(ItemTypes.BOX, boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop()
}))(Box);
