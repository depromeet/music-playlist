import React, { Component } from 'react';

const keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
class ScrollableSelector extends Component {
    constructor(props) {
        super(props);
       const {amount = 360, list} = props; 
        this.state = {
            angle: amount / 10,
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
        this.props.handleYearChange(index)
    }

    handleScroll = (e, selectYpixel, z) => {
        // -1:up 1:down
        const direction = e.deltaY > 0 ? -1 : 1;
        const {list} = this.state;
        const {selectedYearIndex} = this.props;
        if(direction < 0 && selectedYearIndex === 0 
            || direction > 0 && selectedYearIndex === (list.length - 1)) {
                return;
            }
        const lis = document.querySelector(".scrollable-selector").querySelectorAll("li");
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

        const scrollBar = document.querySelector(".scroll-bar");
        const styleTop = scrollBar.style.top ? parseInt(scrollBar.style.top) : 0;
        const newPositionX = styleTop + (100 /list.length) * direction; 
        scrollBar.style.top = `${newPositionX}%`

    }
    render(selectYpixel, z) {
        let deg = 0;
        let y = 0;
        const { angle, list } = this.state;
        const {selectedYearIndex} = this.props;
        const lis = [];
        for(let i = 0 ; i < 10 ; i++ ){
            const style = {
                WebkitTransform: `rotateX(-${deg}deg) translateZ(${z}px)`
            }
            let className;
            if (i === selectedYearIndex) {
                className = 'selected';
                y = selectYpixel;
            } else if(i === selectedYearIndex - 1) {
                className = 'select-before';
            }
            deg += angle;

            if( i < list.length) {
                lis.push(<li style={style}
                    data-key={i}
                    key={i}
                    className={className}>
                    {list[i]}
                </li>)
            } else {
                lis.push(<li style={style}
                    key={i}
                    className={className}/>)
            }
        }

        const scrollHeight = {
            height: `${100 /list.length}%`
        }
        return (
            <div className="scrollable-selector"
                onMouseOver={() => {this.disableScroll()}}
                onMouseLeave={() => {this.enableScroll()}}
                onWheel={(e) => {this.handleScroll(e, selectYpixel, z)}}>
                <ul>
                    {lis}
                </ul>
                <div className="scroll-body">
                    <div style={scrollHeight} className="scroll-bar"/>
                </div>
            </div>
        );
    }
}

export default ScrollableSelector;