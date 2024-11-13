import React, { useState, useEffect } from 'react';

function Dashboard() {
  const [analytics, setAnalytics] = useState({});

  useEffect(() => {
    fetch('/api/analytics')
      .then((res) => res.json())
      .then((data) => setAnalytics(data));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Twitter Followers: {analytics.twitterFollowers}</p>
      <p>Facebook Likes: {analytics.facebookLikes}</p>
    </div>
  );
}

export default Dashboard;
