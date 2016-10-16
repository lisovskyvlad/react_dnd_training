import React, { Component, PropTypes } from 'react';
import ItemTypes from './ItemTypes';
import { DropTarget } from 'react-dnd';

const style = {
  height: '12rem',
  width: '12rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
};

const boxTarget = {
  drop(props, monitor, component) {
    debugger;
    return { name: 'Box' };
  }
};

class Box extends Component {
  render() {
    const { canDrop, isOver, connectDropTarget } = this.props;

    let backgroundColor = 'teal';
    if (isOver) {
      backgroundColor = 'green';
    } else if (canDrop) {
      backgroundColor = 'red';
    }

    return connectDropTarget(
      <div style={{ ...style, backgroundColor }}>
        {isOver ? 'Release to drop' : 'Drag a box here' }
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
