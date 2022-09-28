import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import Base from './components/Base';

function App() {
  return (
    <Base>
      <h1> This is App Component </h1>
      <Button> click me </Button>
    </Base>
  );
}

export default App;
