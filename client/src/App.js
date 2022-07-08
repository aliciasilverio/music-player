import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Dashboard from './Dashboard';

// get the url param called code
const code = new URLSearchParams(window.location.search).get('code');

function App() {
  // if we have a code, reder out dashboard and pass in, otherwise render login component
  return code ? <Dashboard code={code} /> : <Login />
}

export default App;
