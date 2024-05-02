import './botones.css'

export const createButtons = () => {
  // const sectionButtons = document.querySelector('.sectionButtons')
  const sectionSkills = document.querySelector('.sectionSkills')
  const sectionEducation = document.querySelector('.sectionEducation')
  const sectionProjects = document.querySelector('.sectionProjects')
  
  const buttonEducation = document.querySelector('#buttonEducation')
  buttonEducation.textContent = 'Education'
  buttonEducation.addEventListener('click', () => {
    if (sectionEducation.style.display = 'none') {
      sectionEducation.style.display = 'flex'
    }
    if (sectionProjects.style.display = 'flex') {
      sectionProjects.style.display = 'none'
    }

    if (sectionSkills.style.display = 'flex') {
      sectionSkills.style.display = 'none'
    }

  })

  const buttonSkills = document.querySelector('#buttonSkills')
  buttonSkills.textContent = 'Skills'
  buttonSkills.addEventListener('click', () => {
    if (sectionSkills.style.display = 'none') {
      sectionSkills.style.display = 'flex'
    }
    if (sectionProjects.style.display = 'flex') {
      sectionProjects.style.display = 'none'
    }

    if (sectionEducation.style.display = 'flex') {
      sectionEducation.style.display = 'none'
    }
  })

  const buttonProjects = document.querySelector('#buttonProjects')
  buttonProjects.textContent = 'Projects'
  buttonProjects.addEventListener('click', () => {
    if (sectionProjects.style.display = 'none') {
      sectionProjects.style.display = 'flex'
    }
    if (sectionEducation.style.display = 'flex') {
      sectionEducation.style.display = 'none'
    }

    if (sectionSkills.style.display = 'flex') {
      sectionSkills.style.display = 'none'
    }
  })

}