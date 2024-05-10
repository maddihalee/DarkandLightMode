import { useContext } from "react"
import { ThemeContext } from "./App"

export default function Header() {
  const { theme } = useContext(ThemeContext);
  return (
      <header className={`${theme}-theme`}>
          <h1>{theme === "light" ? "Light" : "Dark"} Theme</h1>
      </header>
  )
}
