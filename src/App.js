import { HAppBar } from "./components/MuiComponents";
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from "./pages/Home";



const theme = createTheme({
  palette: {
    neutral: {
      main: '#053082',
    },
    white: {
      main: "#ffffff"
    },
  },
});



function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <HAppBar />
        <Container>
          <Home></Home>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
