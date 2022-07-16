import { useState, useEffect } from 'react'
import Header from "../../components/Header/Header"
import image from '../../assets/undraw_mobile_analytics.svg'
import { BsArrowReturnRight } from "react-icons/bs"
import axios from "axios"

import './portfolio.css'

const list = [
    {
      id: 1,
      nome: 'Personal landing page',
      descricao: 'Um site pessoal, como um CV.',
      conteudo: 'Feito com HTML5, CSS3 e JS.',
      imagem: 'https://media.giphy.com/media/rOKjhIiQEo6wi8lhBA/giphy.gif',
      link: 'https://maricaetanop.netlify.app/'
    },
    {
      id: 2,
      nome: 'CSS cheat-sheet',
      descricao: 'Site com com o resumo de conteúdos de CSS',
      conteudo: 'HTML5 e CSS3',
      imagem: 'https://media.giphy.com/media/ujeZbhbO73BFZS3b2f/giphy.gif',
      link: 'https://cheatsheet-css.netlify.app/'
    },
    {
      id: 3,
      nome: 'Lista de Transmissão WhatsApp',
      descricao: 'Documentação sobre como usar a ferramenta lista de transmissão do WhatsApp.',
      conteudo: 'Markdown',
      imagem: 'https://media.giphy.com/media/I9di9YFkFSsSbS5PHh/giphy.gif',
      link: 'https://mariana-caetano.github.io/WhatsApp-Lista/'
    },
    {
      id: 4,
      nome: 'Mariflix',
      descricao: 'Clone da netflix com vídeos que gosto de assistir.',
      conteudo: 'ReactJS: fundamentos e components.',
      imagem: 'https://media.giphy.com/media/b1qo9OkbRSNMZQGaq7/giphy.gif',
      link: 'https://mariflix.netlify.app/'
    }
  ]
  
  function Portfolio() {
    const [repos, setRepos] = useState([])
    const baseURL = 'https://api.github.com/users/Mariana-Caetano/repos'
  
    useEffect(()=> {
      axios
        .get(baseURL)
        .then((response) => setRepos(response.data))
    }, [])
  
    return(
     <>
      <Header 
        image={image} 
        description="ilustracao mulher com site"
      >
        Meus Projetos
      </Header>
  
      <div className="cartao-container">
        {
          list.map(projeto => {
            return(
              <div className="cartao" key={projeto.id}>
                <h1>{projeto.nome}</h1>
                <img src={projeto.imagem} alt={"gif do projeto " + projeto.nome}/>
                <p>{projeto.descricao}</p>
                <a href={projeto.link} className="enter-repo" target="_blank">
                  <BsArrowReturnRight size={16} color="#111"/>
                </a>
              </div>
            )
          })
        }
      </div>
      <h2 className="titulo">Outros Projetos no meu Github</h2>  
      <div className="card-container">
        {
          repos.map(repo => {
            return(
              <div className="card" key={repo.id}>
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>
                <a href={repo.html_url} className="enter-repo" target="_blank">
                  <BsArrowReturnRight size={16} color="#fff"/>
                </a>
              </div>
            )
          })
        }
      </div>
     </>
    )
   }
   
   export default Portfolio