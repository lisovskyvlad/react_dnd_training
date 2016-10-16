import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Box from './Box';
import Item from './Item';

class DragDropContainer extends Component {
  render() {
    return (
      <div>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
          <Box />
        </div>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
          <Item name='Glass' />
          <Item name='Banana' />
          <Item name='Paper' />
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(DragDropContainer);
