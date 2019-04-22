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
        if (document.querySelector('.festival-component').addEventListener) // older FF
            document.querySelector('.festival-component').addEventListener('DOMMouseScroll', this.preventDefault, false);
        document.querySelector('.festival-component').onwheel = this.preventDefault; // modern standard
        document.querySelector('.festival-component').onmousewheel = document.onmousewheel = this.preventDefault; // older browsers, IE
        document.querySelector('.festival-component').ontouchmove = this.preventDefault; // mobile
        document.onkeydown = this.preventDefaultForScrollKeys;
    }

    enableScroll() {
        if (document.querySelector('.festival-component').removeEventListener)
        document.querySelector('.festival-component').removeEventListener('DOMMouseScroll', this.preventDefault, false);
        document.querySelector('.festival-component').onmousewheel = document.onmousewheel = null;
        document.querySelector('.festival-component').onwheel = null;
        document.querySelector('.festival-component').ontouchmove = null;
        document.onkeydown = null;
    }
    setSelectedIndex = (index) => {
        this.setState({
            selectedIndex: index,
        })
    }

    handleScroll = (e) => {
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
                y = -18;
            }

            element.style.webkitTransform = `rotateX(${deg}deg) translateZ(140px) translateY(${y}px)`;
        });

    }
    render() {
        let deg = 0;
        const { angle, selectedIndex } = this.state;
        const lis = this.state.list.map((value, index) => {
            const style = {
                webkitTransform: `rotateX(-${deg}deg) translateZ(140px)`
            }
            let className;
            if (index === selectedIndex) {
                className = 'selected';
            }
            deg += angle;
            return (<li style={style}
                className={className}>
                {value}
            </li>)
        })

        return (
            <div className="scrollable-selector"
                onMouseOver={() => {this.disableScroll()}}
                onMouseLeave={() => {this.enableScroll()}}
                onWheel={this.handleScroll}>
                <ul>
                    {lis}
                </ul>
            </div>
        );
    }
}

export default ScrollableSelector;