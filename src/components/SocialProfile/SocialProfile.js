import React from 'react';
import PropTypes from 'prop-types';
import DefaultImg from './user-photo-placeholder.webp';
import Styles from './SocialProfile.module.css';

const SocialProfile = (props) => (
    <div className={Styles.profile}>
        <div className={Styles.description}>
            <img
                src={props.avatar}
                alt="Аватар пользователя"
                className={Styles.avatar}
            />
            <p className={Styles.name}>{props.name}</p>
            <p className={Styles.tag}>@{props.tag}</p>
            <p className={Styles.location}>{props.location}</p>
        </div>
        <ul className={Styles.stats}>
            <li>
                <span className={Styles.label}>Followers</span>
                <span className={Styles.quantity}>{props.userFollowers}</span>
            </li>
            <li className={Styles.stats_item}>
                <span className={Styles.label}>Views</span>
                <span className={Styles.quantity}>{props.userViews}</span>
            </li>
            <li>
                <span className={Styles.label}>Likes</span>
                <span className={Styles.quantity}>{props.userLikes}</span>
            </li>
        </ul>
    </div>

);

SocialProfile.defaultProps = {
    avatar: DefaultImg
};

SocialProfile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    userFollowers: PropTypes.number.isRequired,
    userViews: PropTypes.number.isRequired,
    userLikes: PropTypes.number.isRequired
};

export default SocialProfile;