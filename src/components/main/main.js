import { createAbout } from '../about/about'
import { createButtons } from '../botones/botones'
import { creationEducation } from '../education/education'
import { createProjects } from '../projects/projects'
import { createSkills } from '../skills/skills'
import './main.css'

export const createMain = ( ) => {
  createAbout()
  createButtons()
  creationEducation()
  createProjects()
  createSkills()
}