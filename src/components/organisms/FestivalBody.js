import React, { Component } from 'react';
import FixedNav from './FixedNav';
import SingerInfos from './SingerInfos';

class FestivalBody extends Component {
    state = {
        selectedDate: Object.keys(this.props.data)[0],
    }
    handleChange = (date) => {
        this.setState({
            selectedDate: date,
        })
    }
    render() {
        const stlyeBody = {
            display: 'flex',
            marginTop: '174px',
            color: 'white',
        }
        const {data} = this.props;
        const {selectedDate} = this.state;
        const dates = Object.keys(data);
        const singerInfos = data[selectedDate][0];

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