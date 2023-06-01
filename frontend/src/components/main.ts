import "../style.css"
import typescriptLogo from "../assets/typescript.svg"
import viteLogo from "/vite.svg"
import { setupCounter } from "./counter.ts"

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a class="inline-block" href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a class="inline-block" href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1 class="font-bold text-6xl">Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

fetch(`/api/test`)
  .then((r) => r.json())
  .then((res) => {
    const container = document.createElement("div")
    container.innerHTML = JSON.stringify(res)
    container.className =
      "font-bold p-4 bg-black font-mono text-white rounded-md"
    document.querySelector<HTMLDivElement>("#app")!.appendChild(container)
  })

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!)
