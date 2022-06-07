import styledComponents from "styled-components"
import React from 'react'

export const  Header = (props) => {
  return (
    <HeaderContainer>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.element ? props.element.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.element ? props.element.paragraph : 'Loading'}</p>
                <a
                  href='#contact'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Contact me
                </a>{' '}
              </div>
            </div>
          </div>
        </div>  
      </div>
    </HeaderContainer>
  )
}

const HeaderContainer = styledComponents.header`

  .intro {
    background: url(../img/unsplash.jpg) no-repeat center center;
    background-size: cover;
    height: 100vh;
    width: 100%;
    position: relative;
    overflow: hidden;
    color: #fff;
    text-align: center;
    padding: 0;
    margin: 0;

  }
  .intro-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    padding: 15px;
    height: 100vh;
    width: 70%;
    padding-top: 600px;
    text-align: center;
    background: rgba(0, 0, 0, 0.1);
    &:hover{
      transition: 2s ease-in-out all;
      animation: shake 2s;
      animation-iteration-count: infinite;
    }
    @media (max-width: 1203px) {
      height: 100vh;
      width: 100%;
    }
  }
  .intro-text h1 {
    font-size: 60px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #608AFD;
    letter-spacing: -3px;
  }
  .intro-text p {
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 30px;
    color: #ddd;
  }
  .intro-text a {
    background: #fff;
    border: 2px solid #fff;
    color: #000;
    display: inline-block;
    padding: 10px 30px;
    text-decoration: none;
  }
  .intro-text a:hover {
    background: #000;
    color: #fff;
  }
  .intro-text a.btn-custom {
    background: #000;
    border: 2px solid #000;
    color: #fff;
  }
  .intro-text a.btn-custom:hover {
    background: #fff;
    color: #000;
  }
  
`

