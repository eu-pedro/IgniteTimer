import { Button } from "./components/Button"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./components/styles/theme/default"

export function App() {
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary"/>
      <Button variant="secondary"/>
      <Button variant="success"/>
      <Button variant="danger"/>
    </ThemeProvider>
  )
}

export default App
