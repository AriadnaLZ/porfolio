import './skills.css'

export const createSkills = () => {
  const sectionSkills = document.querySelector('.sectionSkills')
  const lista = ['HTML', 'CSS', 'Javascript', 'Vite', 'Python', 'Responsive', 'Git', 'API']
  const ul = document.createElement('ul')
  ul.className = 'ulSkills'

  for (const element of lista) {
    const li = document.createElement('li')
    li.className = 'liSkills'
    const p = document.createElement('p')
    p.className = 'textLi'
    p.textContent = element
    li.append(p)
    ul.append(li)
  }
  sectionSkills.append(ul)

}