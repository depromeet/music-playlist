import React, { Component } from 'react';
import Singer from './Singer';

class SingerInfos extends Component {
    render() {
        const style ={
            width: '100%',
            marginLeft: '190px',
        }
        const {singerInfos} =this.props;
        const singerDatas = singerInfos.map((singerInfo) => {
            const {id, name, link, musics} = singerInfo;
            const align = id % 2 === 0 ? 'right' : 'left';
            return <Singer key={id}
                        index={id}
                        align={align}
                        name={name}
                        url={link}
                        songs={musics}/>;
        })
        return (
            <div className="singer-infos" style={style}>
                {singerDatas}
            </div>
        );
    }
}

export default SingerInfos;