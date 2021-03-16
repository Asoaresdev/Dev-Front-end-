import { CssBaseline } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
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
      </CssBaseline>
    </div>
    </ThemeProvider>
  );
}

export default App;
