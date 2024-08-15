import { ThemeProvider } from "styled-components"
import {defaultTheme} from './styles/themes/default';
import { GlobalStyle } from "./styles/global";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
    <h1>ola mundo</h1>
    import { GlobalStyle } from "./styles/global";
    <GlobalStyle />

    </ThemeProvider>
  )
}


