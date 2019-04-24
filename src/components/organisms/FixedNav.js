import React, { Component } from 'react';
import '../../resources/sass/detail/FixedNav.scss';
import DateSelector from '../molecules/DateSelector';
import SingerList from '../molecules/SingerList';

class FixedNav extends Component {
    state = {
        selectedSinger: null,
    }

    handleChangeForSinger = (singer) => {
        this.setState({
            selectedSinger: singer
        })
    }

    handleParentState = (data) => {
        this.handleChangeForSinger(null);
        this.props.handleChange(data)
    }

    render() {
        const {dates, singerInfos, selectedDate} = this.props;
        const { selectedSinger} = this.state;
        const singerList = singerInfos.map((singerInfo) => (singerInfo.name));

        if(singerList && !selectedSinger) {
            this.handleChangeForSinger(singerList[0]);
        }

        return (
            <nav>
                <DateSelector dates={dates}
                    handleChange={this.handleParentState} 
                    selectedDate={selectedDate}/>
                <SingerList singerList={singerList}
                    selectedSinger={selectedSinger}
                    handleChangeForSinger={this.handleChangeForSinger}/>
            </nav>
        );
    }
}

export default FixedNav;