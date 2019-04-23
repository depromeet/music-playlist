import React, { Component } from 'react';
import FestivalTitle from '../atoms/FestivalTitle';
import YearSelector from '../molecules/YearSelector';

class FestivalHeader extends Component {
    render() {
        const {title} = this.props;
        const style = {
            position: 'relative'
        }
        return (
            <div style={style}>
                <FestivalTitle title={title}/>
                <YearSelector/>
            </div>
        );
    }
}

export default FestivalHeader;