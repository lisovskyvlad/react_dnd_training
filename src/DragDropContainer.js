import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { range } from 'lodash/util';
import { random } from 'lodash/number';

import Box from './Box';
import Item from './Item';

class DragDropContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ''
    };
    this.setLastItem = this.setLastItem.bind(this);

    this.filterImages = this.filterImages.bind(this);
  }

  setLastItem(box_name, item) {
    var newState = {};
    newState[box_name] = item;
    this.setState(newState);
  }

  filterImages(event) {
    this.setState({ filter: event.target.value });
  }

  render() {
    const boxe_names = range(1, 7).map(i => `Box ${i}`);
    const boxes = boxe_names.map(box_name =>
      <Box key={box_name} name={box_name} setLastItem={this.setLastItem}
           item={this.state[box_name]} />);

    let item_names = ['Glass', 'Banana', 'Paper', 'Vata', 'Grechka', 'Vodka', 'Hallo', 'PIU PIU', 'WOW'];
    if (this.state.filter !== '') {
      item_names = item_names.filter(
        name => name.toLowerCase().indexOf(this.state.filter.toLowerCase()) !== -1
      )
    }
    const items = item_names.map(
      box_name => {
        let url = "https://dummyimage.com/100X" + (100 + random(40)) + "/302130/c799ad.png";
        return <Item key={box_name} name={box_name} image_url={url} />;
      }
    );

    const images_height = { height: window.innerHeight }
    return (
      <div className='root_container'>
        <div className='menu'>
        </div>
        <div className='places_containter'>
          {boxes}
        </div>
        <div className='images_containter' style={images_height}>
          <input type='search' className='images_containter-image_search' onChange={this.filterImages} />
          {items}
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(DragDropContainer);
