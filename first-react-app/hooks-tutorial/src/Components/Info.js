import React, { useState } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  const styles = {
    padding: "5px 10px",
    marginBottom: "10px",
  };

  return (
    <div>
      <div>
        <input onChange={ onChangeName } placeholder="이름을 입력하세요."  style={ styles } /><br />
        <input onChange={ onChangeNickname } placeholder="닉네임을 입력하세요." style={ styles } /><br />
      </div>
      <div>
        <p><b>이름: </b>{name}</p>
        <p><b>닉네임: </b>{nickname}</p>
      </div>
    </div>
  );
};


export default Info;