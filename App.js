
import { Provider } from 'react-redux';
import { store } from './Redux/store';

import StackNavigator from './screens/StackNavigator';
// Import the functions you need from the SDKs you need



export default function App() {
  return (
    <Provider store={store}>
  <StackNavigator/>
    </Provider>
  );
}

