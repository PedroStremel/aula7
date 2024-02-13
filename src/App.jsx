
import './App.css';
import List from './componentes/List';

function App() {

  const users = [
    {
      id: 0,
      name: 'Siri',
    },
    {
      id: 1,
      name: 'Alexa',
    },
    {
      id: 2,
      name: 'Google',
    }
  ]
  return (
    <div>
      <List items={users}/>
    </div>
  );
}

export default App;
