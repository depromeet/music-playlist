import React, { Component } from 'react';
import axios from 'axios';
import FestivalName from '../molecules/FestivalName';
import FestivalSelector from '../molecules/FestivalSelector';
import '../../resources/sass/Main.scss';
import { white } from 'ansi-colors';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            festivals : []
        }
    }

    list(){
        const { festivals } = this.state;
        const style = {
            color : white
        }
       return festivals.map(function(festival, i){
         return <li style={style} key={i}> {festival} </li>
       })
    }

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
        return (
            <div className="main-container">
                {/* <ul className="main-festival">
                    {this.list()}
                </ul> */}
                {/* {this.list()} */}
                <FestivalSelector festivals={this.state.festivals}/>
            </div>
        );
    }
}

export default Main;

