import React, { Component } from 'react';
import FestivalTitle from '../atoms/FestivalTitle';
import YearSelector from '../molecules/YearSelector';

class FestivalHeader extends Component {
    render() {
        const {title, years} = this.props;
        const style = {
            position: 'relative'
        }
        return (
            <div style={style}>
                <FestivalTitle title={title.toUpperCase()}/>
                <YearSelector years = {years}/>
            </div>
        );
    }
}

export default FestivalHeader;