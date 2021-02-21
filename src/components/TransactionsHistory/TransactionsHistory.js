import React from 'react';
import PropTypes from 'prop-types';
import Styles from './TransactionsHistory.module.css';

const TransactionsHistory = ({props}) => {
    return <table className={Styles.transactionHistory}>
        <thead>
            <tr className={Styles.tableHead}>
                <th className={Styles.tableHeadItem}>Type</th>
                <th className={Styles.tableHeadItem}>Amount</th>
                <th className={Styles.tableHeadItem}>Currency</th>
            </tr>
        </thead>
        <tbody>
            {props.map((prop, index) => (
                <tr className={(index % -2) ? Styles.evenRow : Styles.tableBodyItem} key={prop.id}>
                    <td>{prop.type}</td>
                    <td>{prop.amount}</td>
                    <td>{prop.currency}</td>
                </tr>
            ))}
        </tbody>
    </table>
};

TransactionsHistory.propTypes = {
    props: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired
        }),
    ),
};

export default TransactionsHistory;
