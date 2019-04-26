import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import FixedNav from './FixedNav';
import SingerInfos from './SingerInfos';

class FestivalBody extends Component {
    render() {
        const { data, selectedDateId, selectedSingerIndex,
            handleChangeDate, handleChangeSinger} = this.props;
            if (!data || (data && data.festival_days.length === 0)) {
                const noDataStyle = {
                    marginTop: '200px',
                    color: 'rgba(255, 255, 255, 0.5)',
                    fontSize: '30px',
                    textAlign: 'center',
                }
                return (
                <React.Fragment>
                     <Fade bottom>
                        <div style={noDataStyle}>죄송합니다 해당 데이터가 없습니다.</div>
                    </Fade>
                </React.Fragment>
            )
        }
        // const { selectedDateId, selectedSingerIndex } = this.state;
        const dates = data.festival_days.map((day) => ( day.perform_date))
        const singerInfos = data.festival_days[selectedDateId].singers;

        return (
            <React.Fragment>
                <div className="festival-body">
                    <FixedNav dates={dates}
                        singerInfos={singerInfos}
                        selectedDateId={selectedDateId}
                        selectedSingerIndex={selectedSingerIndex}
                        handleChangeSinger={handleChangeSinger}
                        handleChange={handleChangeDate}/>
                    <SingerInfos singerInfos={singerInfos}/>
                </div>
            </React.Fragment>
        );
    }
}

export default FestivalBody;