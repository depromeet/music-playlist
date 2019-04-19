import React, { Component } from 'react';
// import ScrollablePicker from '../organisms/ScrollablePicker';
import '../../resources/sass/detail/Festival.scss'
import FestivalHeader from '../organisms/FestivalHeader';

class Festival extends Component {
    state = {
        title: "SEOUL JAZZ FESTIVAL",
    }
    render() {
        const {title} = this.state;
        return (
            <div className="festival-component">
                <FestivalHeader title={title}/>
                {/* <ScrollablePicker/> */}
            </div>
        );
    }
}

export default Festival;