import React, { useState, useEffect, useReducer } from 'react';
import useInputs from './useInputs';

function reducer(state, action) {
  console.log(action);
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: '',
  });

  const { name, nickname } = state;
  
  const onChange = (e) => dispatch(e.target);

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름: </b> {name}
        </div>
        <div>
          <b>닉네임: </b> {nickname}
        </div>
      </div>
    </div>
  );
};


export default Info;










// const Info = () => {
//   const [name, setName] = useState('');
//   const [nickname, setNickname] = useState('');
//   // useEffect(() => {
//   //   console.log('렌더링이 완료되었습니다!');
//   //   console.log({
//   //     name,
//   //     nickname
//   //   });
//   // });

//   // useEffect(() => console.log("마운트될 때 수행됩니다."), []);

//   // useEffect(() => {
//   //   console.log(name);
//   // }, [name]);

//   useEffect(() => {
//     console.log('Effect');
//     console.log(name);
//     return () => { // cleanup?
//       console.log('cleanup');
//       console.log(name);
//     };
//   });

//   const onChangeName = (e) => {
//     setName(e.target.value);
//   };

//   const onChangeNickname = (e) => {
//     setNickname(e.target.value);
//   };

//   const styles = {
//     padding: "5px 10px",
//     marginBottom: "10px",
//   };

//   return (
//     <div>
//       <div>
//         <input onChange={ onChangeName } placeholder="이름을 입력하세요."  style={ styles } /><br />
//         <input onChange={ onChangeNickname } placeholder="닉네임을 입력하세요." style={ styles } /><br />
//       </div>
//       <div>
//         <p><b>이름: </b>{ name }</p>
//         <p><b>닉네임: </b>{nickname}</p>
//       </div>
//     </div>
//   );
// };


// export default Info;