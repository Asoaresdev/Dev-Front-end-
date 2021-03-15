import { CssBaseline } from '@material-ui/core';
import './App.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import SimpleModal from './components/Modal/Modal';
import Home from './pages/Home/Home';
function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#2C7bbf',
      },
      secondary: {
        main: '#898ca9',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <CssBaseline>
       <Home />
        <div>ola</div>
      </CssBaseline>
    </div>
    </ThemeProvider>
  );
}

export default App;
