import React, { Component } from 'react';
import axios from 'axios';
import FestivalName from '../molecules/FestivalName';
import FestivalSelector from '../molecules/FestivalSelector';
import '../../resources/sass/Main.scss';

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
                <FestivalSelector festivals={this.state.festivals}/>
            </div>
        );
    }
}

export default Main;

