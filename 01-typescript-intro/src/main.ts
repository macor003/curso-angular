import './style.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>HOLA MUNDO!</h1>  
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
