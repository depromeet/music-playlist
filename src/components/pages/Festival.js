import React, { Component } from 'react';
import axios from 'axios';
import FestivalHeader from '../organisms/FestivalHeader';
import FestivalBody from '../organisms/FestivalBody';
import '../../resources/sass/detail/Festival.scss'
import { SERVER_URL } from '../../util/util';

class Festival extends Component {
    state = {
        data: null,
        selectedYearIndex: null,
        selectedDateId:this.props.data? 0 : null,
        selectedSinger: null,   
    }
    componentWillMount = () => {
        const { params } = this.props.match;
        if (!params.id) {
            return;
        }

        axios.get(`${SERVER_URL}/festivals/${params.id}/`)
            .then(res => {
                const { data } = res;
                if(data) {
                    data.festival_details.sort((a, b)=> {
                        return b.year - a.year;
                    })
                }
                this.setState({
                    data: data,
                    selectedYearIndex: data ? 0 : null,
                    selectedDateId: data ? 0 : null,
                    selectedSinger: data ? 0 : null,
                })

            })
    }
    handleYearChange = (selectedYearIndex) => {
        // const selectedElem = document.querySelectorAll('.selected');
        // [...selectedElem].forEach((elem) => {
        //     elem.classList.remove('selected');
        // })
        this.setState({
            selectedYearIndex,
            selectedSingerIndex: 0,
            selectedDateId: 0
        })
    }
    handleChangeDate = (selectedDateId) => {
        this.setState({
            selectedDateId,
            selectedSingerIndex: null
        })
    }
    handleChangeSinger = (selectedSingerIndex) => {
        this.setState({
            selectedSingerIndex,
        })
    }
    render() {
        if (!this.state.data) {
            return (<React.Fragment />)
        }
        const { title_en, festival_details } = this.state.data;
        const { selectedYearIndex, selectedDateId, selectedSingerIndex } = this.state;
        const { id } = this.props.match.params;
        if (festival_details && festival_details.length === 0) {
            return (
                <div className={`festival-component fid-${id}`}>
                    <FestivalHeader title={title_en} />
                    <FestivalBody data={festival_details[selectedYearIndex]} />
                </div>
            );
        }
        const years = festival_details.map((festival_detail) => festival_detail.year);
        return (
            <div className={`festival-component fid-${id}`}>
                <FestivalHeader title={title_en}
                    selectedYearIndex={selectedYearIndex}
                    handleYearChange={this.handleYearChange}
                    years={years} />
                {/* TODO: 0 -> 연도에 맞게 보내게 변경  */}
                <FestivalBody data={festival_details[selectedYearIndex]}
                    selectedDateId={selectedDateId}
                    selectedSingerIndex={selectedSingerIndex}
                    handleChangeDate={this.handleChangeDate}
                    handleChangeSinger={this.handleChangeSinger} />
            </div>
        );
    }
}

export default Festival;