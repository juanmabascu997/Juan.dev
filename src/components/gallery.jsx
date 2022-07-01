import styled from 'styled-components';
import Carousel from './carousel.jsx';

export const Gallery = (props) => {
  return (
    <Container id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Gallery of projects</h2>
          <p>
           Below are some of the projects I have had the opportunity to work on.
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