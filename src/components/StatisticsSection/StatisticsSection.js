import React from 'react';
import PropTypes from 'prop-types';
import StatisticsCard from './StatisticsCard';
import Styles from './StatisticsSection.module.css';

const StatisticsSection = ({props}) => (
    <section className={Styles.statistics}>
        <h2 className={Styles.title}>Upload stats</h2>
        <ul className={Styles.statList}>
            {props.map(prop => (
                <StatisticsCard key={prop.id}
                    props={prop}
                />
            ))}
        </ul>
    </section>
);

StatisticsSection.propTypes = {
    props: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired
        }),
    ).isRequired,
};

export default StatisticsSection;
