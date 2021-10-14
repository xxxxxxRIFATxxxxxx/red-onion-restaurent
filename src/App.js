import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './context/AuthProvider';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div>
      <AuthProvider>
        <Signup>
        </Signup>
      </AuthProvider>
    </div>
  );
}

export default App;
