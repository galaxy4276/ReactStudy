import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  const onClick = async () => {
    try {
      const response = await axios.get(
        'http://newsapi.org/v2/top-headlines?country=kr&apiKey=ae612e97d74842a1af322f3ab643944b'
      );
      setData(response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={10} value={JSON.stringify(data, null, 2)} />}
    </div>
  );
}

export default App;
