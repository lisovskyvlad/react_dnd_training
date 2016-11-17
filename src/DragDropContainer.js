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

    let item_names = ['Glass', 'Banana', 'Paper', 'Vata', 'Grechka', 'Vodka', 'Hallo', 'PIU PIU', 'WOW'];
    this.items_names_urls = item_names.map(item_name =>
      ({ 'name': item_name, 'image_url': `https://dummyimage.com/100X '${100 + random(40)}/302130/c799ad.png` })
    )
    this.boxe_names = range(1, 7).map(i => `Box ${i}`);
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
    const boxes = this.boxe_names.map(bname =>
      <Box key={bname} name={bname} setLastItem={this.setLastItem} item={this.state[bname]} />
    );

    let item_names_urls = this.items_names_urls;
    if (this.state.filter !== '') {
      item_names_urls = this.items_names_urls.filter(
        item => item.name.toLowerCase().indexOf(this.state.filter.toLowerCase()) !== -1
      )
    }
    const items = item_names_urls.map(
      item => <Item key={item.name} name={item.name} image_url={item.image_url} />
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
