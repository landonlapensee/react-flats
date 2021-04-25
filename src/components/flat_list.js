import React from 'react';
import Flat from './flat.js';

const FlatList = (props) => {
    return (
      props.flats.map( flat => {
        return ( 
        <Flat flat={flat} key={flat.lat} selectedFlat={props.FlatselectedFlat} selected={ flat.lat === props.selected }/>
        );
      })
    );
};

export default FlatList;