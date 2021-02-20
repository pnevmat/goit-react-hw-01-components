import React from 'react';
import PropTypes from 'prop-types';
import Styles from './StatisticsCard.module.css';

const StatisticsCard = ({props}) => (
        <li className={Styles.item} style={{backgroundColor: props.color}}>
            <span className={Styles.label}>{props.label}</span>
            <span className={Styles.percentage}>{props.percentage}%</span>
        </li>
);

StatisticsCard.propTypes = {
    props: PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }).isRequired,
}

export default StatisticsCard;