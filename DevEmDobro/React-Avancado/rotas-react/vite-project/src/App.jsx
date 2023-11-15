import './App.css';
import { Card } from './components/card/card';
import { ThemeTogglerButton } from './components/theme-toggler-button/theme-toggler-button';
import { ThemeProvider } from './contexts/theme-context';
import AppRoutes from './pages/routes'

function App() {
  return (
    <div>
      {/* <AppRoutes /> */}
      <ThemeProvider>
        <ThemeTogglerButton />
        <Card />
      </ThemeProvider>
    </div>
  );
}

export default App;

