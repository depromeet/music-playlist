import React, { Component } from 'react';
import throttle from 'lodash.throttle';
import FestivalName from './FestivalName';
import '../../resources/sass/detail/FestivalSelector.scss';

class FestivalSelector extends Component{
    constructor(props){
        super(props);
        this.state={
            upDown : 1
        }
        this.makeList = this.makeList.bind(this);
        this.handleWheel = this.handleWheel.bind(this);
        this.handleWheelThrottled = throttle(this.handleWheelThrottled.bind(this), 250);
    }
    componentWillUnmount() {
        this.handleWheelThrottled.cancel();
    }

    makeList(){
        const { festivals } = this.props;
        const { upDown } = this.state;
        let defaultdeg = 0;
        let festivalLength = festivals.length;
        console.log(festivalLength);
        return festivals.map( function(festival, i) {
            defaultdeg = defaultdeg - 36;
            return <FestivalName
            upDown={upDown}
            defaultdeg={defaultdeg}
            festival={festival.name}
            festivalLength = {festivalLength}
            index={i}
            key={i}
             />
        })
    }
 
    handleWheelThrottled(e){
        const upDown = e.deltaY > 0 ? -1 : 1;
        this.setState({
            upDown : upDown
        })
    }

    handleWheel(e){
        e.persist();
        this.handleWheelThrottled(e);
    }
    // ul에 붙일 핸들러 this.onWheel
    // onWheel에 e.persist() 붙이고, this.throttleeWheel(e) 부름 
    // throttledWheel 안에 e.deltaY 가 있다.
    // throttledWheel을 위에서 throttle(this.throggledWHeel, 300);
    render(){
        return(
            <div  onWheel={this.handleWheel}>
            <ul className="scrollable-selector">
                {this.makeList()} 
            </ul>
            </div>
        )
    }
}

export default FestivalSelector;