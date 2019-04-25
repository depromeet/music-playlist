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
        // let value = (props.fetivalLength-1-props.index) * 36
        if(state.deg === props.index * -36 && props.upDown === -1) return{
            deg : state.deg
        }
        if(state.deg === (props.festivalLength-1-props.index)*36 && props.upDown === 1) return {
            deg : state.deg
        }
        return {
            deg : state.deg + (36*props.upDown)
        }
    }
   
    render(){
        let className ;
        const style = {
            webkitTransform: `rotateX(${this.state.deg}deg) translateZ(140px)`
        }
        const { deg } = this.state;
        const { festival} = this.props;
        if(deg === 0){
            className = "selected";
        }else if(Math.abs(deg) === 36){
            className = "festival-36deg"
        }else if(Math.abs(deg) === 72){
            className = "festival-72deg"
        }
        else{
            console.log(Math.abs(deg));
            className= "";
        }
        return(
                <li style={style}> 
                    <a href="1" className={className}> {festival} </a>
                </li>
        )
    }

}