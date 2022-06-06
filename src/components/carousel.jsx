import styled from 'styled-components'
import React from 'react'

const Carousel = ({images}) => {
    return (
    <Contanier>
        <Slider className='slider'>
            {images? <>
                <div>
                    <img src={images[5].largeImage}/>
                    <h1>{images[5].title}</h1>
                    <p>{images[5].description}</p>
                    {images[5].url? <Button href={images[5].url} target="_blank" rel="noopener noreferrer">Deploy</Button>: ''}
                </div>
                <div>
                    <img src={images[3].largeImage}/>
                    <h1>{images[3].title}</h1>
                    <p>{images[3].description}</p>
                    {images[3].url? <Button href={images[3].url} target="_blank" rel="noopener noreferrer">Deploy</Button>: ''}
                </div>
                <div>
                    <img src={images[4].largeImage}/>
                    <h1>{images[4].title}</h1>
                    <p>{images[4].description}</p>
                    {images[4].url? <Button href={images[4].url} target="_blank" rel="noopener noreferrer">Deploy</Button>: ''}
                </div>
                <div>
                    <img src={images[6].largeImage}/>
                    <h1>{images[6].title}</h1>
                    <p>{images[6].description}</p>
                    {images[6].url? <Button href={images[6].url} target="_blank" rel="noopener noreferrer">Deploy</Button>: ''}
                </div>
                <div>
                    <img src={images[0].largeImage}/>
                    <h1>{images[0].title}</h1>
                    <p>{images[0].description}</p>
                    {images[0].url? <Button href={images[0].url} target="_blank" rel="noopener noreferrer">Deploy</Button>: ''}
                </div>
                <div>
                    <img src={images[1].largeImage}/>
                    <h1>{images[1].title}</h1>
                    <p>{images[1].description}</p>
                    {images[1].url? <Button href={images[1].url} target="_blank" rel="noopener noreferrer">Deploy</Button>: ''}
                </div>
                <div>
                    <img src={images[2].largeImage}/>
                    <h1>{images[2].title}</h1>
                    <p>{images[2].description}</p>
                    {images[2].url? <Button href={images[2].url} target="_blank" rel="noopener noreferrer">Deploy</Button>: ''}
                </div>
            </>                
            : "Loading..."}
        </Slider>
    </Contanier>
  )
}

export default Carousel;


const Contanier = styled.div`
    height: 100vh;   
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #2d2d2d;
    border-radius: 2% 2% 0px 0px;
`

const Slider = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    div{
        padding-top: 25px;
        width: 100vw;
        height: 100%;
        h1{
            margin-top: 40px;
            font-size: 2.5rem;
            color: #fff;
            font-weight: bold;
        }
        p{  
            color: #ddd;
            font-size: 1.6rem;
            font-weight: lighter;
            font-style: italic;
            transition: all 0.5s ease-in-out;
        }

        img{
            width: 1280px;
            object-fit: cover;
            scroll-snap-align: center;
            transition: all 300ms;
        }
        &:hover{
            img{
                transform: scale(1.1);
            }
        }
    }

`

const Button = styled.a`
    background-color: #fff;
    color: #000;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 10px;
    border-radius: 5px;
    margin-top: 30px;
    text-decoration: none;
    &:hover{
        background-color: #000;
        color: #fff;
    }
`