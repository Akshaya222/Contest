import React from 'react'
import './mycontest.css';
export default function Mycontest() {
    return (
        <div className="contest-main-box">
            <div className="contest-box-heading">
                <div style={{width:'33.3%' , textAlign:'center'}}>Contest</div>
                <div style={{width:'33.3%', textAlign:'center'}}>Status</div>
                <div style={{width:'33.3%', textAlign:'center'}}>Date</div>
            </div>
            <div className="contest-details"></div>
            <div className="contest-details"></div>
            <div className="contest-details"></div>
            <div className="contest-details"></div>
        </div>
    )
}
