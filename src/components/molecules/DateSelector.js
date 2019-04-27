import React, { Component } from 'react';
import { pad0 } from '../../util/util';

class DateSelector extends Component {
    handleClick = (e) => {
        const target = e.target;
        document.querySelector('.singer-ul').style.display = 'none';
        this.props.handleChange(parseInt(target.dataset.key));
    }
    dateFormat(date) {
        const dateObj = new Date(date);
        return `${pad0(dateObj.getMonth() + 1, 2)}/${pad0(dateObj.getDate(), 2)}`;
    }
    render() {
        const {dates, selectedDateId} = this.props;

        const a = dates.map((date, index) => {
            let style;
            if(selectedDateId === index) {
                style={
                    color:'white',
                    borderBottom: '10px solid #ffffff',
                    // animation: 'content 1s ease-in',
                    // animationIterationCount: '1',
                }
            }
            return (<a key={index} 
                data-key={index}
                onClick={this.handleClick}
                style={style}>
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