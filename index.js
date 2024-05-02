import { createFooter } from './src/components/footer/footer'
import { createHeader } from './src/components/header/header'
import { createMain } from './src/components/main/main'
import './style.css'

const app = document.querySelector('#app')

createHeader()
createMain()
createFooter()