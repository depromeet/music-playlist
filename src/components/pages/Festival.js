import React, { Component } from 'react';
import ScrollablePicker from '../organisms/ScrollablePicker';
import FestivalTitle from '../molecules/FestivalTitle';
import YearSelector from '../organisms/YearSelector';
import '../../resources/sass/Festival.scss'
import FestivalHeader from '../organisms/FestivalHeader';

class Festival extends Component {
    render() {
        return (
            <div className="festival-component">
                <FestivalHeader/>
                {/* <ScrollablePicker/> */}
            </div>
        );
    }
}

export default Festival;