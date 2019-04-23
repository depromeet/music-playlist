import React, { Component } from 'react';

const keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
class ScrollableSelector extends Component {
    constructor(props) {
        super(props);
        /* 
        amount: 원통 각도
        !!list 길이 웬만하면 원통각도의 약수로
        */
       const {amount = 360, list} = props; 
        this.state = {
            angle: amount / list.length,
            list : list,
            selectedIndex: 0,
        }
    }
    
    preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault)
        e.preventDefault();
        e.returnValue = false;
    }
    
    preventDefaultForScrollKeys(e) {
        if (keys[e.keyCode]) {
            this.preventDefault(e);
            return false;
        }
    }
    
    disableScroll() {
        const newLocal = document.querySelector('.festival-component') ? document.querySelector('.festival-component') : window;
        if (newLocal.addEventListener) // older FF
        newLocal.addEventListener('DOMMouseScroll', this.preventDefault, false);
        newLocal.onwheel = this.preventDefault; // modern standard
        newLocal.onmousewheel = document.onmousewheel = this.preventDefault; // older browsers, IE
        newLocal.ontouchmove = this.preventDefault; // mobile
        document.onkeydown = this.preventDefaultForScrollKeys;
    }
    
    enableScroll() {
        const newLocal = document.querySelector('.festival-component') ? document.querySelector('.festival-component') : window;
        if (newLocal.removeEventListener)
        newLocal.removeEventListener('DOMMouseScroll', this.preventDefault, false);
        newLocal.onmousewheel = document.onmousewheel = null;
        newLocal.onwheel = null;
        newLocal.ontouchmove = null;
        document.onkeydown = null;
    }
    setSelectedIndex = (index) => {
        this.setState({
            selectedIndex: index,
        })
    }

    handleScroll = (e, selectYpixel, z) => {
        // -1:up 1:down
        const lis = document.querySelector(".scrollable-selector").querySelectorAll("li");
        const direction = e.deltaY > 0 ? -1 : 1;
        if(direction < 0 && this.state.selectedIndex === 0 
            || direction > 0 && this.state.selectedIndex === (lis.length - 1)) {
            return;
        }
        for(let i = 0 ; i < lis.length ; i++ ){
            const element = lis[i]; 
            
            const re = new RegExp(/(-?\d.*)deg/);
            let deg = parseInt(re.exec(element.style.webkitTransform)[1]);
            deg += (this.state.angle * direction);
            
            let y = 0;
            if (Math.floor(deg % 360) === 0) {
                this.setSelectedIndex(i);
                y = selectYpixel;
            }
    
            element.style.webkitTransform = `rotateX(${deg}deg) translateZ(${z}px) translateY(${y}px)`;
        }

    }
    render(selectYpixel, z) {
        let deg = 0;
        let y = 0;
        const { angle, selectedIndex } = this.state;
        const { list } = this.state; 
        const lis = [];
        for(let i = 0 ; i < list.length ; i++ ){
            const style = {
                webkitTransform: `rotateX(-${deg}deg) translateZ(${z}px)`
            }
            let className;
            if (i === selectedIndex) {
                className = 'selected';
                y = selectYpixel;
            } else if(i === selectedIndex - 1) {
                className = 'select-before';
            }
            deg += angle;
            lis.push(<li style={style}
                className={className}>
                {list[i]}
            </li>)
        }

        return (
            <div className="scrollable-selector"
                onMouseOver={() => {this.disableScroll()}}
                onMouseLeave={() => {this.enableScroll()}}
                onWheel={(e) => {this.handleScroll(e, selectYpixel, z)}}>
                <ul>
                    {lis}
                </ul>
            </div>
        );
    }
}

export default ScrollableSelector;