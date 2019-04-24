import React, { Component } from 'react';
import '../../resources/sass/detail/FestivalSelector.scss';

export default class FestivalName extends Component{
    constructor(props){
        super(props);
        // 초기 위치 설정
        this.state={
            deg : this.props.defaultdeg
        }
    }
    // props로 받은 upDown이 바뀔 때 마다 deg값 update
    static getDerivedStateFromProps(props, state){
        return {
            deg : state.deg + (36*props.upDown)
        }
    }
   
    render(){
        const style = {
            webkitTransform: `rotateX(${this.state.deg}deg) translateZ(140px)`
        }
        const { festival } = this.props;
        return(
                <li style={style}> 
                    {festival}
                </li>
        )
    }

}