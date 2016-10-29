import React, { Component, PropTypes } from 'react';
import ItemTypes from './ItemTypes';
import { DragSource } from 'react-dnd';

import './css/item.sass';

const ItemSource = {
  beginDrag(props) {
    return {
      name: props.name
    };
  },

  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if (dropResult) {
      console.log(`You dropped ${item.name} into ${dropResult.name}!`);
    }
  }
};

class Item extends Component {
  render() {
    const { isDragging, connectDragSource } = this.props;
    const { name } = this.props;
    const opacity = isDragging ? 0.22 : 1;

    return (
      connectDragSource(
        <div className='item' style={{ opacity }}>
          {name}
        </div>
      )
    );
  }
};

Item.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
};

export default DragSource(ItemTypes.BOX, ItemSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))(Item);
