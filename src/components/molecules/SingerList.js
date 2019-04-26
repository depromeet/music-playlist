import React, { Component } from 'react';

class SingerList extends Component {
    handleClick = (e) => {
        const target = e.target;
        const { id, index } = target.dataset;
        this.props.handleChangeForSinger(parseInt(index));
        document.getElementById(`div_${id}`).scrollIntoView({ block: 'end',  behavior: 'smooth' });
    }

    componentDidUpdate() {
        document.querySelector('.singer-ul').style.display = 'block';
    }
    render() {
        const {singerInfos, selectedSingerIndex} = this.props;
        const lis = singerInfos.map((info, index) => {
            let style;
            if(selectedSingerIndex === index) {
                style={
                    color:'white',
                    textDecoration: 'underline',
                }
            }
            return (
                <li onClick={this.handleClick}
                    key={index}
                    style={style}
                    data-index={index}
                    data-id={info.id}> 
                    {info.name}
                </li>
            )
        });

        return (
            <ul className="singer-ul">
                {lis}
            </ul>
        );
    }
}

export default SingerList;