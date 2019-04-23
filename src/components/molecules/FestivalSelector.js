import React, { Component } from 'react';
import ScrollableSelector from './ScrollableSelector';
import '../../resources/sass/detail/FestivalSelector.scss';

class FestivalSelector extends ScrollableSelector{
    constructor(){
        super({
            amount : 300,
            list : [2019,
            2018,2017,2016,2015,2014,2013,2012,2011,2010]
        })
    }
    render(){
        return super.render(-18, 140);
    }
}

export default FestivalSelector;