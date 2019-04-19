import React, { Component } from 'react';
import FestivalTitle from '../molecules/FestivalTitle';
import YearSelector from '../molecules/YearSelector';

class FestivalHeader extends Component {
    render() {
        const {title} = this.props;
        return (
            <div>
                <FestivalTitle title={title}/>
                <YearSelector/>
            </div>
        );
    }
}

export default FestivalHeader;