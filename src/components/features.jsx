import {useSelector} from 'react-redux'

export const Features = (props) => {
  const leng = useSelector(state => state.lenguaje)

  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2 id="featuresH2">
            {leng === "esp" ? "Proyectos" : "Projects" }       
            
          </h2>
        </div>
        <div id="featuresImgs" className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3'>
                  {' '}
                  <img id="projects_imgs" src={`../img/portfolio/${d.img}.png`}/>
                  <h3 id="featuresH2">{d.title}</h3>
                  <p>{d.text}</p>
                  
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
