import React, { Component } from 'react';
import DateSelector from '../molecules/DateSelector';
import SingerList from '../molecules/SingerList';
import '../../resources/sass/detail/FixedNav.scss';

class FixedNav extends Component {
    handleChangeForSinger = (index) => {
        this.props.handleChangeSinger(index);
    }

    handleParentState = (data) => {
        this.handleChangeForSinger(null);
        this.props.handleChange(data)
    }

    render() {
        const {dates, singerInfos, selectedDateId, selectedSingerIndex} = this.props;
        if(singerInfos.length > 0 && selectedSingerIndex === null) {
            this.handleChangeForSinger(0);
        }
        return (
            <nav>
                <DateSelector dates={dates}
                    handleChange={this.handleParentState} 
                    selectedDateId={selectedDateId}/>
                <SingerList singerInfos={singerInfos}
                    selectedSingerIndex={selectedSingerIndex}
                    handleChangeForSinger={this.handleChangeForSinger}/>
            </nav>
        );
    }
}

export default FixedNav;