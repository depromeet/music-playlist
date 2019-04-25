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
    }
    componentWillMount = () => {
        const { params } = this.props.match;
        if (!params.id) {
            return;
        }

        axios.get(`${SERVER_URL}/festivals/${params.id}/`)
            .then(res => {
                const { data } = res;
                this.setState({
                    data,
                    selectedYearIndex: data ? 0 : null
                })

            })
    }
    handleYearChange = (selectedYearIndex) => {
        this.setState({
            selectedYearIndex,
        })
    }
    render() {
        if (!this.state.data) {
            return (<React.Fragment />)
        }
        const { title_en, festival_details } = this.state.data;
        const { selectedYearIndex } = this.state;
        if (festival_details && festival_details.length === 0) {
            return (
                <div className="festival-component">
                    <FestivalHeader title={title_en} />
                    <FestivalBody data={festival_details[selectedYearIndex]} />
                </div>
            );
        }
        const years = festival_details.map((festival_detail) => festival_detail.year);
        return (
            <div className="festival-component">
                <FestivalHeader title={title_en}
                    selectedYearIndex={selectedYearIndex}
                    handleYearChange={this.handleYearChange}
                    years={years} />
                {/* TODO: 0 -> 연도에 맞게 보내게 변경  */}
                <FestivalBody data={festival_details[selectedYearIndex]} />
            </div>
        );
    }
}

export default Festival;