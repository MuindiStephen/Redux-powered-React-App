import { Provider } from 'react-redux';
import './App.css';
import Cart from './component/Cart';
import store from './store';

function App() {
  return (
    //providing the store to the app
    <Provider store={store}>
    
      <Cart />
      </Provider>
    
   
  );
}

export default App;
