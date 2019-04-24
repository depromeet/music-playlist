import React, { Component } from 'react';
import axios from 'axios';
import FestivalSelector from '../molecules/FestivalSelector';
import '../../resources/sass/Main.scss';
import { white } from 'ansi-colors';
import Background from '../../resources/image/main3.png';

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
        axios.get('http://localhost:3231/festival')
        .then(res => {
            console.log(res.data.result);
            this.setState({festivals : res.data.result})
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
            <div
            style={style}
            className="main-container">
                <FestivalSelector festivals={this.state.festivals}/>
            </div>
        );
    }
}

export default Main;

