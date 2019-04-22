import React, { Component } from 'react';
import '../../resources/sass/detail/YearSelector.scss';

const YEAR_LENGTH = 10;
class YearSelector extends Component {
    state = {
        angle: 300 / YEAR_LENGTH,
        selectedIndex: 0,
    }
    setSelectedIndex = (index) => {
        this.setState({
            selectedIndex: index,
        })
    }

    handleScroll= (e) => {
        // TODO : wheel 이벤트 발생 시 윈도우 scroll 막아야 함

        const upDown = e.deltaY > 0 ? -1 : 1;
        // window.scrollTo(0, 0); 
        // window.addEventListener('scroll', () => {
        //     window.scrollTo(0, 0);    
        // });
        const lis = document.getElementById("picker").querySelectorAll("li");
        lis.forEach((element, index) => {
            element.classList.remove('selected');
            const re = new RegExp(/(-?\d.*)deg/);
            let deg = parseInt(re.exec(element.style.webkitTransform)[1]);
            let y = 0;
            deg += (this.state.angle * upDown);
            if(deg % 360 === 0) {
                this.setSelectedIndex(index);
                element.classList.add('selected');
                y = -18;
            }
            
            element.style.webkitTransform = `rotateX(${deg}deg) translateZ(140px) translateY(${y}px)`;
        });
    }
    render() {
        const currentYear = (new Date()).getFullYear();
        const lis= [];
        let deg = 0;
        const { angle, selectedIndex } = this.state;
        for (let i = 0 ; i < YEAR_LENGTH ; i ++) {
            const style = {
                webkitTransform: `rotateX(-${deg}deg) translateZ(140px)`
            }
            let className;
            if(i === selectedIndex) {
                className = 'selected';
            }
            lis.push(<li style={style}
                        className={className}>
                    {currentYear - i}
                </li>);
            deg += angle;
        }
        return (
            <div id="picker" className="year-selector" onWheel={this.handleScroll}>
                <ul>
                    {lis}
                </ul>
             </div>
        );
    }
}

export default YearSelector;