import './App.css';
import Posts from './Posts';
import Test from './Test';
import Store from './Store';

function App() {
  console.log('🏠 APP RUN')
  return (
    <Store>
      <Posts />
      <Test />
    </Store>
  );
}

export default App;
