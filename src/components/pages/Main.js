import React, { Component } from 'react';
import axios from 'axios';
import FestivalName from './FestivalName';
import FestivalSelector from '../molecules/FestivalSelector';
import '../../resources/sass/Main.scss';

// event 핸들러, 그 핸들러를 제어하는 throttle 함수, throttle 안에는 ._throttle
class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            festivals : []
        }
    }

    list(){
        const { festivals } = this.state;
       return festivals.map(function(festival, i){
         return <FestivalName festival={festival.name} curPosition={i} key={i}/>
       })
    }

    componentDidMount(){
        axios.get('http://localhost:3231/festival')
        .then(res => {
            this.setState({festivals : res.data})
        })
        .catch( err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div className="main-container">
                {/* <ul className="main-festival">
                    {this.list()}
                </ul> */}
                <FestivalSelector/>
            </div>
        );
    }
}

export default Main;

