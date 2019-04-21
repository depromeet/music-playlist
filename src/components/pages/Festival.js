import React, { Component } from 'react';
// import ScrollablePicker from '../organisms/ScrollablePicker';
import '../../resources/sass/detail/Festival.scss'
import FestivalHeader from '../organisms/FestivalHeader';
import FestivalBody from '../organisms/FestivalBody';

class Festival extends Component {
    state = {
        title: "SEOUL JAZZ FESTIVAL",
        data: {
            '05/19' : [{
                'Ms. Lauryn Hill': ['Lose Myself', 'Neurotic Society', 'Black Is the Color of My True Love’s Hair', 
                'Consumerism'],
                'Maceo Parker': ['Lose Myself', 'Neurotic Society', 'Black Is the Color of My True Love’s Hair', 
                'Consumerism'] ,
                'Chris Botti': ['Lose Myself', 'Neurotic Society', 'Black Is the Color of My True Love’s Hair', 
                'Consumerism']  
            }],
            '05/20' : [{
                'Ms. Lauryn Hill2': ['Lose Myself', 'Neurotic Society', 'Black Is the Color of My True Love’s Hair', 
                'Consumerism'],
                'Ms. Lauryn Hill3': ['Lose Myself', 'Neurotic Society', 'Black Is the Color of My True Love’s Hair', 
                'Consumerism'],
                'Ms. Lauryn Hill4': ['Lose Myself', 'Neurotic Society', 'Black Is the Color of My True Love’s Hair', 
                'Consumerism'],
                'Ms. Lauryn Hill5': ['Lose Myself', 'Neurotic Society', 'Black Is the Color of My True Love’s Hair', 
                'Consumerism'] 
            }]
        }
    }
    render() {
        const {title, data} = this.state;
        return (
            <div className="festival-component">
                <FestivalHeader title={title}/>
                <FestivalBody data= {data}/>
                {/* <ScrollablePicker/> */}
            </div>
        );
    }
}

export default Festival;