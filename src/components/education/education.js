import './education.css'

export const creationEducation = () => {

  const sectionEducation = document.querySelector('.sectionEducation')

  const education = [
    {img: 'https://res.cloudinary.com/dgyeaj8pu/image/upload/v1702465868/Proyecto%20web%20components/Coco-School_pakumy.jpg',
    text: 'Master in Digital Photography and Lighting'
    },
    {img: 'https://res.cloudinary.com/dgyeaj8pu/image/upload/v1702372334/Proyecto%20web%20components/aoksm782ujpb2a3neyuu.jpg',
    text: 'Python Total - Advanced Programmer in 16 days'
    },
    {img: 'https://res.cloudinary.com/dgyeaj8pu/image/upload/v1702372334/Proyecto%20web%20components/zl99splgojjikyzpzxmp.jpg',
    text: 'Data Analysis with Pandas and Python'
    },
    {img: 'https://res.cloudinary.com/dgyeaj8pu/image/upload/v1709730472/Porfolio/certificado%20javascript.png',
    text: 'JavaScript Developer'
    }
  ]
  for (const element of education) {
    const articleEducation = document.createElement('article')
    articleEducation.className = 'articleEducation'
    const img = document.createElement('img')
    img.className = 'imgEducation'
    img.src = element.img
    const textEducation = document.createElement('h2')
    textEducation.className = 'textEducation'
    textEducation.textContent = element.text
  
    
    articleEducation.append(img)
    articleEducation.append(textEducation)
    sectionEducation.append(articleEducation)
  }

}