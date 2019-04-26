import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Singer from './Singer';

class SingerInfos extends Component {
    render() {
        const style ={
            width: '100%',
            marginLeft: '190px',
        }
        const {singerInfos} =this.props;
        if(singerInfos.length === 0) {
            const noDataStyle = {
                color: 'rgba(255, 255, 255, 0.5)',
                fontSize: '30px',
                width: '100%',
                textAlign: 'center',
            }
            return (
                <React.Fragment>
                     <Fade bottom>
                        <div style={noDataStyle}>죄송합니다 날짜에 대한 데이터가 없습니다.</div>
                    </Fade>
                </React.Fragment>
            )
        }
        const singerDatas = singerInfos.map((singerInfo, index) => {
            const {id, name, img_url, musics} = singerInfo;
            const align = index % 2 === 0 ? 'left' : 'right';
            return <Singer key={id}
                        id={id}
                        index={index}
                        align={align}
                        name={name}
                        url={img_url}
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