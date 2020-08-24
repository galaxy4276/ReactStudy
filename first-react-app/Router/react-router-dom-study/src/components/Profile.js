import React from 'react';


const data = {
  choi: {
    name: '최은기',
    description: '리액트를 싫어하는 개발자'
  },
  jun: {
    name: '김준재',
    description: '프론트엔드를 너무 사랑하는 개발자'
  },
};


const Profile = ({ match }) => {
  console.log(match);
  const { username } = match.params;
  const profile = data[username];

  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>
  }

  return (
    <div>
      {username}<h3>{ profile.username }</h3>
      <p>
        { profile.description }
      </p>
    </div>
  );
};


export default Profile;