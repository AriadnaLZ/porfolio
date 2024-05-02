import './projects.css'

export const createProjects = () => {
  const sectionProjects = document.querySelector('.sectionProjects')

  const projects =  [
    {
      title: "Marvel movies",
      description:
        "Project created only with HTML and CSS.",
      link: "https://proyecto1ariadna.netlify.app/",
      preview: "https://res.cloudinary.com/dgyeaj8pu/image/upload/v1702372336/Proyecto%20web%20components/xfp4e2cnumwhq61lji20.png"
    },
    {
      title: "Your pharmacy at home",
      description:
        `In this project i have worked with the use of filters 
        and treatment of a base to print the products.`,
      link: "https://domprojectariadna.netlify.app/",
      preview:
        "https://res.cloudinary.com/dgyeaj8pu/image/upload/v1702372335/Proyecto%20web%20components/vs50qpmli46zyssqtwwb.png",
    },
    {
      title: "Game of Thrones Api",
      description:
        `Throught an API we paint the Game of Thrones
         characters that we choose.`,
      link: "https://gotapibyari.netlify.app/",
      preview:
        "https://res.cloudinary.com/dgyeaj8pu/image/upload/v1702372335/Proyecto%20web%20components/j8vwcbgqmvhrcivqe4d8.png",
    },{
      title: "Ari's Games",
      description:
        `Project created with HTML, CSS and JavaScript`,
      link: 'https://losjuegosdeari.netlify.app/',
      preview: "https://res.cloudinary.com/dgyeaj8pu/image/upload/v1714636888/Porfolio/gameshub.png",
    }
  ]

  for (const element of projects) {
    const articleProject = document.createElement('article')
    articleProject.className = 'articleProject'

    const imgProject = document.createElement('img')
    imgProject.className = 'imgProject'
    imgProject.src = element.preview
    articleProject.append(imgProject)

    const titleProject = document.createElement('h2')
    titleProject.className = 'titleProject'
    titleProject.textContent = element.title
    articleProject.append(titleProject)

    const description = document.createElement('p')
    description.className = 'description'
    description.textContent = element.description
    articleProject.append(description)

    const link = document.createElement('a')
    link.className = 'link'
    link.href = element.link
    link.textContent = 'Watch Project'
    articleProject.append(link)
    link.target = '_blank'


    sectionProjects.append(articleProject)
  }
}