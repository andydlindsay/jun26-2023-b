import './App.css';
import {useState} from 'react';
import UserInput from './components/UserInput';
import UserMap from './components/UserMap';
import PlaceDescription from './components/PlaceDescription';

function App() {

  const [position, setPosition] = useState({x: 0, y: 0});
  const [theMap, setTheMap] = useState([
    [
      {
      'shortDesc': 'home',
      'longDesc': 'You Are At Your Home Base'
      },
      {
      'shortDesc': 'garden',
      'longDesc': 'You Are At The Garden'
      },
      {
      'shortDesc': 'field',
      'longDesc': 'You Are At The Field'
      }
    ],
    [{},{},{}],
    [{},{},{
      'shortDesc': 'portal',
      'longDesc': 'You Are At The Portal'
      }]]);

  
  return (
    <div className="App">
      <PlaceDescription 
        short={theMap[position.x][position.y].shortDesc} 
        long={theMap[position.x][position.y].longDesc}
      />
      <UserInput setPosition={setPosition}/>
      {/* <UserMap /> */}
    </div>
  );
}

export default App;
