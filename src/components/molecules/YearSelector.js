import React, { Component } from 'react';
import '../../resources/sass/detail/YearSelector.scss';

const YEAR_LENGTH = 10;
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
class YearSelector extends Component {
    state = {
        angle: 300 / YEAR_LENGTH,
        selectedIndex: 0,
    }
    isScrolling;

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
        const lis = document.getElementById("picker").querySelectorAll("li");
        lis.forEach((element, index) => {
            element.classList.remove('selected');
            const re = new RegExp(/(-?\d.*)deg/);
            let deg = parseInt(re.exec(element.style.webkitTransform)[1]);
            let y = 0;
            deg += (this.state.angle * upDown);
            if (deg % 360 === 0) {
                this.setSelectedIndex(index);
                element.classList.add('selected');
                y = -18;
            }

            element.style.webkitTransform = `rotateX(${deg}deg) translateZ(140px) translateY(${y}px)`;
        });

    }
    render() {
        // document.querySelector('.festival-component').addEventListener("scroll", this.noneScroll);
        const currentYear = (new Date()).getFullYear();
        const lis = [];
        let deg = 0;
        const { angle, selectedIndex } = this.state;
        for (let i = 0; i < YEAR_LENGTH; i++) {
            const style = {
                webkitTransform: `rotateX(-${deg}deg) translateZ(140px)`
            }
            let className;
            if (i === selectedIndex) {
                className = 'selected';
            }
            lis.push(<li style={style}
                className={className}>
                {currentYear - i}
            </li>);
            deg += angle;
        }
        return (
            <div id="picker" className="year-selector"
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

export default YearSelector;