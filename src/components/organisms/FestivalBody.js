import React, { Component } from 'react';
import FixedNav from './FixedNav';
import SingerInfos from './SingerInfos';

class FestivalBody extends Component {
    state = {
        selectedDate:this.props.data.festival_days[0].perform_date,    
    }
    handleChange = (date) => {
        this.setState({
            selectedDate: date,
        })
    }
    render() {
        const stlyeBody = {
            display: 'flex',
            marginTop: '200px',
            color: 'white',
        }
        const {data} = this.props;
        console.log(data);
        const {selectedDate} = this.state;
        const dates = data.festival_days.map((day) => ( day.perform_date))
        const singerInfos = data.festival_days.find((d)=> (d.perform_date === selectedDate)).singers;

        return (
            <React.Fragment>
                <div style={stlyeBody}>
                    <FixedNav dates={dates}
                        singerInfos={singerInfos}
                        selectedDate={selectedDate}
                        handleChange={this.handleChange}/>
                    <SingerInfos singerInfos={singerInfos}/>
                </div>
            </React.Fragment>
        );
    }
}

export default FestivalBody;