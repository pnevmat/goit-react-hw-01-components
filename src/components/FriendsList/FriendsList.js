import React from "react";
import PropTypes from 'prop-types';
import DefaultAvatar from "./defaultFriendAvatar.webp";
import Styles from './FriendsList.module.css';

const FriendsList = ({props}) => (
    <ul className={Styles.friendList}>
        {props.map(prop => (
            <li className={Styles.item} key={prop.id}>
                <span className={prop.isOnline === true ? Styles.online : Styles.offline}></span>
                <img className={Styles.avatar} src={prop.avatar} alt={prop.name} width="48" />
                <p className={Styles.name}>{prop.name}</p>
            </li>
        ))}
    </ul>
);

FriendsList.defaultProps = {
    avatar: DefaultAvatar
};

FriendsList.propTypes = {
    props: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired
        }).isRequired,
    ),
}

export default FriendsList;