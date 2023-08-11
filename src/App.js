import { SnackbarProvider } from 'notistack';
import './App.css';
import RoutesPage from './routes';

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <RoutesPage />
    </SnackbarProvider>
  );
}

export default App;
