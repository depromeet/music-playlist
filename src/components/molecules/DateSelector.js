import React, { Component } from 'react';
import { pad0 } from '../../util/util';

class DateSelector extends Component {
    handleClick = (e) => {
        const target = e.target;
        const selectedNode = target.parentNode.querySelector('.selected');
        if(selectedNode) {
            selectedNode.classList.remove('selected');
        
        }
        target.classList.add('selected');
        document.querySelector('.singer-ul').style.display = 'none';
        this.props.handleChange(target.innerText);
    }
    dateFormat(date) {
        const dateObj = new Date(date);
        return `${pad0(dateObj.getMonth(), 2)}/${pad0(dateObj.getDate(), 2)}`;
    }
    render() {
        const {dates, selectedDate} = this.props;
        const a = dates.map((date, index) => {
            let className;
            if(selectedDate === date) {
                className = 'selected'
            }
            return (<a key={index} onClick={this.handleClick} className={className}>
                {this.dateFormat(date)}
            </a>)
        });
        return (
            <div>
                {a}
            </div>
        );
    }
}

export default DateSelector;