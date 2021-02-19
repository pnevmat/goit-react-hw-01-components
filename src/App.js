import React from "react";
import './App.css';
import SocialProfile from './components/SocialProfile/SocialProfile';
import User from './components/SocialProfile/user.json'

const App = () => {
  return (
      <SocialProfile
        name={User.name}
        tag={User.tag}
        location={User.location}
        avatar={User.avatar}
        userFollowers={User.stats.followers}
        userViews={User.stats.views}
        userLikes={User.stats.likes}
      />
  );
};

export default App;
