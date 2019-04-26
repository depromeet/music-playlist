import React, { Component } from 'react';
import FixedNav from './FixedNav';
import SingerInfos from './SingerInfos';

class FestivalBody extends Component {
    state = {
        selectedDateId:this.props.data? 0 : null,    
    }
    handleChange = (selectedDateId) => {
        this.setState({
            selectedDateId,
        })
    }
    render() {
        const stlyeBody = {
            display: 'flex',
            marginTop: '200px',
            color: 'white',
        }
        const { data } = this.props;
        if (!data ||
             (data && data.festival_days.length === 0)) {
            return (
                <React.Fragment>
                    <div style={stlyeBody}>정보가 없습니다.</div>
                </React.Fragment>
            )
        }
        const { selectedDateId } = this.state;
        const dates = data.festival_days.map((day) => ( day.perform_date))
        const singerInfos = data.festival_days[selectedDateId].singers;

        return (
            <React.Fragment>
                <div style={stlyeBody}>
                    <FixedNav dates={dates}
                        singerInfos={singerInfos}
                        selectedDateId={selectedDateId}
                        handleChange={this.handleChange}/>
                    <SingerInfos singerInfos={singerInfos}/>
                </div>
            </React.Fragment>
        );
    }
}

export default FestivalBody;