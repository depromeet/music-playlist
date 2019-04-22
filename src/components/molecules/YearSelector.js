import React, { Component } from 'react';
import '../../resources/sass/detail/YearSelector.scss';

const YEAR_LENGTH = 10;
class YearSelector extends Component {
    state = {
        angle: 36,
    }
    handleScroll= (e) => {
        const lis = document.getElementById("picker").querySelectorAll("li");
        lis.forEach(element => {
            const re = new RegExp(/(\d.*)deg/);
            let deg = parseInt(re.exec(element.style.webkitTransform)[1]);
            deg += this.state.angle;
            element.style.webkitTransform = 'rotateX(-'+deg+'deg) translateZ(120px)';
        });
    }
    render() {
        console.log('render')
        const currentYear = (new Date()).getFullYear();
        const lis= [];
        let deg = 0;
        const angle = 360 / YEAR_LENGTH;
        for (let i = 0 ; i < YEAR_LENGTH ; i ++) {
            const style = {
                webkitTransform: `rotateX(-${deg}deg) translateZ(120px)`
            } 
            lis.push(<li style={style}>
                    {currentYear - i}
                </li>);
            deg += angle;
        }
        return (
            <div id="picker" className="year-selector" onScroll={this.handleScroll} onMo>
                <ul>
                    {lis}
                </ul>
             </div>
        );
    }
}

export default YearSelector;