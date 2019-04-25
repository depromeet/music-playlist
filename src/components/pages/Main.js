import React, { Component } from 'react';
import axios from 'axios';
import FestivalSelector from '../molecules/FestivalSelector';
import '../../resources/sass/Main.scss';
import Background from '../../resources/image/main3.png';
import Logo from '../atoms/Logo';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            festivals : []
        }
    }
    // list(){
    //     const { festivals } = this.state;
    //     const style = {
    //         color : white
    //     }
    //    return festivals.map(function(festival, i){
    //      return <li style={style} key={i}> {festival} </li>
    //    })
    // }

    componentDidMount(){
        axios.get('http://festivalmusic-dev.ap-northeast-2.elasticbeanstalk.com/festivals/', {
        })
        .then(res => {
            this.setState({festivals : res.data.results})
        })
        .catch( err => {
            console.log(err);
        })
    }

    render() {
        let style ={
            backgroundImage: `url(${Background})`
        }
        return (
            <div style={style}>   
                <div className="main-container">
                    <FestivalSelector festivals={this.state.festivals}/>
                </div>
                <Logo/>
            </div>
        );
    }
}

export default Main;

