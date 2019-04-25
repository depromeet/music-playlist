import React, { Component } from 'react';
import PickerUl from '../molecules/PickerUl';
import '../../resources/sass/ScrollablePicker.scss'

class ScrollablePicker extends Component {
    render() {
        return (
            <div className="scroll-picker">
                <PickerUl/>
            </div>
        );
    }
}

export default ScrollablePicker;