import React, { Component } from 'react';

class DateSelector extends Component {
    handleClick = (e) => {
        const target = e.target;
        const selectedNode = target.parentNode.querySelector('.selected');
        if(selectedNode) {
            selectedNode.classList.remove('selected');
        
        }
        target.classList.add('selected');
        this.props.handleChange(target.innerText);
    }
    render() {
        const {dates, selectedDate} = this.props;
        const a = dates.map((date, index) => {
            let className;
            if(selectedDate === date) {
                className = 'selected'
            }
            return (<a key={index} onClick={this.handleClick} className={className}>
                {date}
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