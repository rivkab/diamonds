import React from 'react';
import './StatisticsHeader.css';

export default function StatisticsHeader(props) {
    return (
        <p className="StatisticsHeader">
            <h2 className="Stat">Average price: ${props.average}</h2>
            <h2 className="Stat">Total diamonds: {props.count}</h2>
            <h2 className="Stat">Minimum price: ${props.min}</h2>
        </p>
    );
}