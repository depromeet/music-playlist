import React, { Component } from 'react';
import Axios from 'axios';
import FestivalHeader from '../organisms/FestivalHeader';
import FestivalBody from '../organisms/FestivalBody';
import '../../resources/sass/detail/Festival.scss'

class Festival extends Component {
    state = {
        title: "SEOUL JAZZ FESTIVAL",
        data: {
            "id": 1,
            "title_en": "Seoul Jazz Festival",
            "title_ko": "서울 재즈 페스티벌",
            "img": null,
            "description": "",
            "festival_details": [
                {
                    "id": 1,
                    "festival": 1,
                    "year": 2018,
                    "description": "",
                    "img": null,
                    "festival_days": [
                        {
                            "festival_detail": 1,
                            "order": 1,
                            "perform_date": "2018-05-20",
                            "singers": [
                                {
                                    "id": 1,
                                    "name": "크러쉬",
                                    "img": null,
                                    "musics": [],
                                },
                                {
                                    "id": 2,
                                    "name": "곽진언",
                                    "img": null,
                                    "musics": [],
                                },
                                {
                                    "id": 3,
                                    "name": "에픽하이",
                                    "img": null,
                                    "musics": [],
                                }
                            ],
                        }
                    ],
                }
            ],
        }
    }
    componentDidMount() {
        Axios.get("http://festivalmusic-dev.ap-northeast-2.elasticbeanstalk.com/festivals/1", {
            mode: "no-cors",
        })
            .then(res => {
                console.log(res);
                this.setState({
                    data: res.data,
                })
            })
    }
    render() {
        const { title_en, festival_details } = this.state.data;
        return (
            <div className="festival-component">
                <FestivalHeader title={title_en} />
                {/* TODO: 0 -> 연도에 맞게 보내게 변경  */}
                <FestivalBody data={festival_details[0]} />
            </div>
        );
    }
}

export default Festival;