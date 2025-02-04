import './App.css';
import SimpleCounter from './components/Ex1';
import DisplayText from './components/Ex2';
import LightSwitch from './components/Ex3';
import SimpleList from './components/Ex4';
import PostList from './components/UseEffect/Ex1';
import Timer from './components/UseEffect/Ex2';
import UserProfile from './components/UseEffect/Ex3';

function App() {
  return (
    <div className="App">
      <h1>UseState</h1>
        <br/>
        <SimpleCounter />
        <br/>
        <DisplayText />
        <br/>
        <LightSwitch />
        <br/>
        <SimpleList />
        <br/>
        <h1>Теперь UseEffect</h1>
        <PostList />
        <br/>
        <Timer />
        <br/>
        <UserProfile userId={3} />
    </div>
  );
}

export default App;
