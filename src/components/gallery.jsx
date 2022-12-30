import styled from 'styled-components';
import Carousel from './carousel.jsx';
import {useSelector} from 'react-redux'

export const Gallery = (props) => {
  const leng = useSelector(state => state.lenguaje)

  return (
    <Container id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>
            {leng === "esp" ? "Galeria de proyectos" : "Gallery of projects" }       
          </h2>
          <p>
            {leng === "esp" ? "A continuacion se muestran algunos de los proyectos en los que tuve la oportunidad de trabajar." : "Below are some of the projects I have had the opportunity to work on." }       
          </p>
        </div>
        <div>
          <Carousel images={props.element}/>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
    background: linear-gradient(to right, #3b3b3b  5%,  #1E1E1E 100%);
    background-size: cover;
    background-position: center;  
`