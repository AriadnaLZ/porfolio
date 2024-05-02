import './footer.css'
export const createFooter = () => {
  const footer = document.querySelector('footer')

  // Copyright
  const divCopyright = document.createElement('div')
  footer.append(divCopyright)

  const copyright = document.createElement('p')
  copyright.textContent = '©️ Created by Ariadna López Zárate'
  divCopyright.append(copyright)

  // Contacto
  const divRedes = document.createElement('div')
  divRedes.className = 'divRedes'
  footer.append(divRedes)

  const linkedinAncore = document.createElement('a')
  linkedinAncore.href = 'https://www.linkedin.com/in/ariadnalopezzarate/'
  linkedinAncore.target = '_blank'
  const imgLinkedin = document.createElement('img')
  imgLinkedin.src = 'https://res.cloudinary.com/dgyeaj8pu/image/upload/v1709720887/Porfolio/linkedin.png'
  linkedinAncore.append(imgLinkedin)
  imgLinkedin.className = 'iconoRedes'

  const emailAncore = document.createElement('a')
  emailAncore.href = 'mailto:ariadnalopezzarate@gmail.com'
  const imgMail = document.createElement('img')
  imgMail.src = 'https://res.cloudinary.com/dgyeaj8pu/image/upload/v1709720940/Porfolio/email.png'
  imgMail.className = 'iconoRedes'
  emailAncore.append(imgMail)

  const gitAncore = document.createElement('a')
  gitAncore.href = 'https://github.com/AriadnaLZ/porfolio.git'
  gitAncore.target = '_blank'
  const imgGit = document.createElement('img')
  imgGit.src = 'https://res.cloudinary.com/dgyeaj8pu/image/upload/v1709721880/Porfolio/github.png'
  imgGit.className = 'iconoRedes'
  gitAncore.append(imgGit)

  divRedes.append(linkedinAncore)
  divRedes.append(emailAncore)
  divRedes.append(gitAncore)


}