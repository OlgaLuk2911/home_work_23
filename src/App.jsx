import Rate from './components/Rate/Rate';
import data from './data.json'
import './style/App.css';


function App() {
  return (
    <div className="grid">
{data.map(item=><Rate {...item}/>)}
    </div>
  );
}

export default App;
