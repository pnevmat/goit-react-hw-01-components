import React from "react";
import SocialProfile from './components/SocialProfile/SocialProfile';
import StatisticsSection from './components/StatisticsSection/StatisticsSection';
import FriendsList from './components/FriendsList/FriendsList';
import TransactionsHistory from './components/TransactionsHistory/TransactionsHistory';

import User from './components/SocialProfile/user.json';
import StatisticalData from './components/StatisticsSection/statistical-data.json';
import Friends from './components/FriendsList/friends.json';
import Transactions from './components/TransactionsHistory/transactions.json';
import './App.css';import './App.css';

const App = () => {
  return (
    <>
      <SocialProfile
        name={User.name}
        tag={User.tag}
        location={User.location}
        avatar={User.avatar}
        userFollowers={User.stats.followers}
        userViews={User.stats.views}
        userLikes={User.stats.likes}
      />
      <StatisticsSection props={StatisticalData}/>
      <FriendsList props={Friends} />
      <TransactionsHistory props={Transactions} />
    </>
  );
};

export default App;
