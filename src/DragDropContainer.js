import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Box from './Box';
import Item from './Item';

class DragDropContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.setLastItem = this.setLastItem.bind(this);
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
    const boxes = boxe_names.map(box_name =>
      <Box key={box_name} name={box_name} setLastItem={this.setLastItem(box_name)}
           item={this.state[box_name]} />);

    const item_names = ['Glass', 'Banana', 'Paper', 'Vata', 'Grechka', 'Vodka'];
    const items = item_names.map(box_name => <Item key={box_name} name={box_name} />);

    return (
      <div>
        <div>
          {boxes}
        </div>
        <div style={{clear: 'both'}} />
        <div>
          {items}
        </div>
        <div style={{clear: 'both'}} />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(DragDropContainer);
