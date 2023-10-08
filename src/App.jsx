import { useState } from 'react';
import Rate from './components/Rate/Rate';
import data from './data.json'
import './style/App.css';


function App() {
  const [id, setId] = useState (0)
  
  return (
    <div className="grid">
{data.map((item, index)=><Rate {...item}
key={index}
activeCard = {item.id === id}
setId = {setId}/>)}
    </div>
  );
}

export default App;
