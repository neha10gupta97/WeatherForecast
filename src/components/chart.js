//this is component we dont need any state..
//just some props comes in and we render the component
//=> functional component

import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default (props) => {
  return(
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color}/>
      </Sparklines>
    </div>
  );
}