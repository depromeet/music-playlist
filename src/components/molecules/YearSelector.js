import React, { Component } from 'react';
import '../../resources/sass/detail/YearSelector.scss';

class YearSelector extends Component {
    render() {
        return (
            <div className="year-selector">
                <ul>
                    <li>2019</li>
                    <li>2018</li>
                    <li>2017</li>
                    <li>2016</li>
                    <li>2015</li>
                    <li>2014</li>
                    <li>2013</li>
                    <li>2012</li>
                </ul>
            </div>
        );
    }
}

export default YearSelector;