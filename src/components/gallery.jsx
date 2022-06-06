
import Carousel from './carousel.jsx';

export const Gallery = (props) => {
  return (
    <div id='portfolio' className='text-center'>
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
    </div>
  )
}
