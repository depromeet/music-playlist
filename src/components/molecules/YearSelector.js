import React, { Component } from 'react';
import '../../resources/sass/detail/YearSelector.scss';
import ScrollableSelector from './ScrollableSelector';

class YearSelector extends ScrollableSelector {
    constructor() {
        super({
            amount:300,
            list: [2019,2018,2017,2016,2015,2014,2013,2012,2011, 2010]
        })
    }
}

export default YearSelector;