import styled from "styled-components"
import React from 'react'
import {useSelector} from 'react-redux'

export const  Header = (props) => {
  const leng = useSelector(state => state.lenguaje)

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
                  {leng === "esp" ? "Contactame" : "Contact me" }
                </a>{' '}
              </div>
            </div>
          </div>
        </div>  
      </div>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  .intro-text a{
    margin-bottom: 50px;
  }

  .intro {
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
    background: rgba(0, 0, 0, 0.5);
    transition: all 300ms;

    p{
      background-color: rgba(0, 0, 0, 0.2);
      color: #dddddd;
      font-size: 24px;
      font-weight: lighter;
      margin-bottom: 30px;
      @media (max-width: 1203px) {
        height: 100vh;
        width: 100%;
      }
    }
    &:hover{
      transform: translateY(-10px);
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
    @media (max-width: 1203px) {
      height: 100vh;
      width: 100%;
    }
  }

  .intro-text a {
    background: #fff;
    border: 2px solid #fff;
    color: #000;
    display: inline-block;
    padding: 10px 30px;
    text-decoration: none;
    @media (max-width: 1203px) {
      height: 100vh;
      width: 100%;
    }
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

