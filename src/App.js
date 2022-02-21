import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Form from './components/Form';
import PureComp from './components/PureComp';
import RefsDemo from './components/RefsDemo';
import PortalDemo from './components/PortalDemo';
import ErrorHero from './components/ErrorHero';
import RenderProps from './components/RenderProps';
import HTTPGET from './components/HTTPGET';
import HTTPPOST from './components/HTTPPOST';
import UseStateHook from './components/Hooks/UseStateHook';

function App() {
  return (
    <div className="App">
    <UseStateHook/>
    {/* <HTTPPOST/> */}
    {/* <HTTPGET/> */}
    {/* <RenderProps/> */}
      {/* <ErrorHero heroName="Batman" />
      <ErrorHero heroName="Superman" /> */}
      {/* <ErrorHero heroName="Joker" /> */}
      {/* <PortalDemo/> */}
      {/* <RefsDemo/> */}
      {/* <PureComp/> */}
      {/* <Form /> */}
      {/* <NameList/> */}
      {/* <UserGreeting/> */}
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}
      {/* <ClassClick/> */}
      {/* <FunctionClick/> */}
      {/* <Counter/> */}
      {/* <Message/> */}
      {/* <Greet name="jack" nickName="joy" /> */}
      {/* <Greet name="aman" nickName="oyee" />
      <Greet name="arun" nickName="lala" /> */}
      {/* <Welcome name="jack" nickName="joy" /> */}
    </div>
  );
}

export default App;
