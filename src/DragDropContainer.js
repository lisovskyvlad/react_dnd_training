import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Box from './Box';
import Item from './Item';

class DragDropContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.setLastItem = this.setLastItem.bind(this)
  }

  setLastItem(box_name) {
    return (val) => {
      var newState = {};
      newState[box_name] = val;
      this.setState(newState);
    }
  }

  render() {
    const boxe_names = ['box1', 'box2', 'box3'];
    const boxes = boxe_names.map((box_name) => {
      return <Box key={box_name} name={box_name} setLastItem={this.setLastItem(box_name)} item={this.state[box_name]} />
    });
    return (
      <div>
        <div>
          {boxes}
        </div>
        <div style={{clear: 'both'}} />
        <div>
          <Item name='Glass' />
          <Item name='Banana' />
          <Item name='Paper' />
          <Item name='Vata' />
        </div>
        <div style={{clear: 'both'}} />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(DragDropContainer);
