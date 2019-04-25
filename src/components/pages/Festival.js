import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FestivalHeader from '../organisms/FestivalHeader';
import FestivalBody from '../organisms/FestivalBody';
import '../../resources/sass/detail/Festival.scss'
import { SERVER_URL } from '../../util/util';

class Festival extends Component {
    state = {
        data: null
    }
    componentWillMount = () => {
        console.log(SERVER_URL)
        axios.get(`${SERVER_URL}/festivals/1`)
        .then(res => {
            const {data} = res;
            this.setState({
                data,
            })

        }) 
    }
    handleClickRedrectMain = () => {

    }
    render() {
        if(!this.state.data) {
            return (<React.Fragment/>)
        }
        const { title_en, festival_details } = this.state.data;
        const years = festival_details.map((festival_detail) => festival_detail.year);
        return (
            <div className="festival-component">
                <div className="go-main"><Link to="/">ｘ</Link></div>
                <FestivalHeader title={title_en}
                                years = {years} />
                // {/* TODO: 0 -> 연도에 맞게 보내게 변경  */}
                <FestivalBody data={festival_details[0]} />
            </div>
        );
    }
}

export default Festival;