
import { Provider } from 'react-redux';
import { Root, store } from '../config';
import './App.css';

function App() {
  return (
    // bungkus app kita dengan provider tujuan kita tambah store untuk state global
    <Provider store={store}>

      <Root /> 
      
    </Provider>
  );
}

export default App;
