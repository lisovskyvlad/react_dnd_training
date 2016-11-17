import React, { Component, PropTypes } from 'react';
import ItemTypes from './ItemTypes';
import { DropTarget } from 'react-dnd';

const boxTarget = {
  drop(props, monitor, component) {
    // monitor.getItem() return values from ItemSource.beginDrag method
    props.setLastItem(monitor.getItem());
    return { name: props.name };
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

    let item_info = <p></p>;
    if (item) { item_info = <p>{item.name}<img role='presentation' src={item.image_url} /></p>;}

    return connectDropTarget(
      <div className='box' style={{ backgroundColor }}>
        {isOver ? 'Release to drop' : 'Drag a box here' }
        <br />
        {name}
        {item_info}
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
