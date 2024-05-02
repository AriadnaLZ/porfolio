import './about.css'

export const createAbout = () => {
  const sectionAbout = document.querySelector('.sectionAbout')

  // Fotografía
  const articleAvatar = document.createElement('article')
  articleAvatar.className = 'articleAvatar'
  sectionAbout.append(articleAvatar)
  const avatar = document.createElement('img')
  avatar.src = 'https://res.cloudinary.com/dgyeaj8pu/image/upload/v1709724158/Porfolio/foto.jpg'
  avatar.className = 'avatar'
  articleAvatar.append(avatar)

  // Texto
  const articleAboutText = document.createElement('article')
  articleAboutText.className = 'articleAboutText'
  sectionAbout.append(articleAboutText)

  const aboutText = document.createElement('p')
  aboutText.textContent = `Since I was little I have been curious and eager to learn new things, technology has been one of those things that has always caught my attention, in addition to photography, I saw that hidden photo. So when I finished high school I decided to do a Master's Degree in Digital Photography and Lighting. 
  Currently, a few months ago I decided to delve into the world of programming, I started taking some Python courses and discovered how much fun it seemed to me. I left my job, which had nothing to do with this world, and embarked on this new adventure by taking a Full Stack Developer course, in ThePowerMBA's Rock the Code program.`
  articleAboutText.append(aboutText)

}