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

    handleScroll = (e, selectYpixel) => {
        const upDown = e.deltaY > 0 ? -1 : 1;
        const lis = document.querySelector(".scrollable-selector").querySelectorAll("li");
        lis.forEach((element, index) => {
            element.classList.remove('selected');
            const re = new RegExp(/(-?\d.*)deg/);
            let deg = parseInt(re.exec(element.style.webkitTransform)[1]);
            let y = 0;
            deg += (this.state.angle * upDown);
            if (Math.floor(deg % 300) === 0) {
                this.setSelectedIndex(index);
                element.classList.add('selected');
                y = selectYpixel;
            }

            element.style.webkitTransform = `rotateX(${deg}deg) translateZ(140px) translateY(${y}px)`;
        });

    }
    render(y, z) {
        let deg = 0;
        const { angle, selectedIndex } = this.state;
        const lis = this.state.list.map((value, index) => {
            const style = {
                webkitTransform: `rotateX(-${deg}deg) translateZ(${z}px)`
            }
            let className;
            if (index === selectedIndex) {
                className = 'selected';
            }
            deg += angle;
            return (<li style={style}
                className={className} key={index}>
                {value}
            </li>)
        })

        return (
            <div className="scrollable-selector"
                onMouseOver={() => {this.disableScroll()}}
                onMouseLeave={() => {this.enableScroll()}}
                onWheel={(e) => {this.handleScroll(e, y)}}>
                <ul>
                    {lis}
                </ul>
            </div>
        );
    }
}

export default ScrollableSelector;