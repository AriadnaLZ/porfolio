import './header.css'

export const createHeader = (place) => {
  const header = document.querySelector('header')

  // Logo
  const divLogo = document.createElement('div')
  const logo = document.createElement('img')
  logo.className = 'logo'
  logo.src = 'https://res.cloudinary.com/dgyeaj8pu/image/upload/v1709720865/Porfolio/logo.png'
  header.append(divLogo)
  divLogo.append(logo)

  // Nombre
  const divNombre = document.createElement('div')
divNombre.className = 'divNombre'
  const nombre = document.createElement('h1')
  nombre.className = 'nombre'
  nombre.textContent = 'ARIADNA LOPEZ ZARATE'
  divNombre.append(nombre)
  header.append(divNombre)


}