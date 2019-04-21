import React, { Component } from 'react';

class SingerList extends Component {
    handleClick = (e) => {
        const target = e.target;
        const { index } = target.dataset;
        const selectedNode = target.parentNode.querySelector('.selected');
        if(selectedNode) {
            selectedNode.classList.remove('selected');
        
        }
        target.classList.add('selected');
        this.props.handleChangeForSinger(target.innerText);
        document.getElementById(`div_${index}`).scrollIntoView({ block: 'end',  behavior: 'smooth' });
    }
    render() {
        const {singerList, selectedSinger} = this.props;
        if(!selectedSinger) {

        }
        const lis = singerList.map((singer, index) => {
            let className;
            if(singer === selectedSinger) {
                className = 'selected';
            }
            return (
                <li className={className} onClick={this.handleClick} data-index={index + 1}> 
                    {singer}
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