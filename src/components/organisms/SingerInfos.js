import React, { Component } from 'react';
import Singer from './Singer';

class SingerInfos extends Component {
    render() {
        const style ={
            width: '100%',
            paddingLeft: '205px',
        }
        const {singerInfos} =this.props;
        const singerDatas = [];
        let index = 1;
        for (const key in singerInfos) {
            const element = singerInfos[key];
            const align = index % 2 === 0 ? 'right' : 'left'
            singerDatas.push(<Singer
                key={index}
                index={index} 
                align={align}
                name={key}
                songs={element}/>)
            index += 1;    
        }
        return (
            <div className="singer-infos" style={style}>
                {singerDatas}
            </div>
        );
    }
}

export default SingerInfos;