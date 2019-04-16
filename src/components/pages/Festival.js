import React, { Component } from 'react';
import ScrollablePicker from '../organisms/ScrollablePicker';
import FestivalTitle from '../molecules/FestivalTitle';
import YearSelector from '../organisms/YearSelector';

class Festival extends Component {
    render() {
        return (
            <div>
                <FestivalTitle/>
                <YearSelector/>
                {/* <ScrollablePicker/> */}
            </div>
        );
    }
}

export default Festival;