
import React from 'react';
import { render } from 'react-dom';
import { VideoWidget } from './videowidget';

var ReactGridLayout = require('react-grid-layout');

export function Grid(props) {
    
    // layout is an array of objects, see the demo for more complete usage
    var layout = [
      {i: 'a', x: 0, y: 0, w: 3, h: 6, static: true},
      {i: 'b', x: 3, y: 0, w: 4, h: 6, minW: 2, maxW: 4},
      {i: 'c', x: 7, y: 0, w: 3, h: 6}
    ];

    


    return (
      <ReactGridLayout className="layout" layout={layout} onLayoutChange={this.onLayoutChange} cols={12} rowHeight={30} width={1200} autoSize={true}>
        <div key={'a'}>
          Static Content
        </div>
        <div key={'b'}> 
          <VideoWidget />
        </div>  
        <div key={'c'}>c</div>
      </ReactGridLayout>
    )
}