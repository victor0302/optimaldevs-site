import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { HelmetProvider } from "react-helmet-async"
import "./index.css"
import App from "./App.jsx"

// Keep static metadata for non-JavaScript visitors. React 19 hoists the page's
// metadata itself, so remove the static fallback before mounting to avoid duplicates.
document
  .querySelectorAll("[data-site-meta]")
  .forEach((element) => element.remove())

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)
