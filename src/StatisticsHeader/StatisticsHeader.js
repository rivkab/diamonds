import React from 'react';
import './StatisticsHeader.css';

export default function StatisticsHeader(props) {
    return (
        <div className="StatisticsHeader">
            <h2 className="Stat">Average price: ${props.avgPrice}</h2>
            <h2 className="Stat">Total diamonds: {props.count}</h2>
            <h2 className="Stat">Average discount: ${props.avgDiscount}</h2>
        </div>
    );
}