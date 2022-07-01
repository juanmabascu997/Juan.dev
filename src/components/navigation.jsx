import { About } from "./about"
import { Services } from "./services"
import { Header } from "./header"
import { Gallery } from "./gallery"
import { Contact } from "./contact"
import JsonData from "../data/data.json";
import { useState, useEffect } from "react";
import styled from "styled-components"
import { Certificates } from "./certificates"


export const Navigation = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);


  return (
    <div>
      <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
        <div className='container'>
          <div className='navbar-header'>
            <button
              type='button'
              className='navbar-toggle collapsed'
              data-toggle='collapse'
              data-target='#bs-example-navbar-collapse-1'
            >
              {' '}
              <span className='sr-only'>Toggle navigation</span>{' '}
              <span className='icon-bar'></span>{' '}
              <span className='icon-bar'></span>{' '}
              <span className='icon-bar'></span>{' '}
            </button>
            <NavName className='navbar-brand page-scroll name' href='#page-top'>
              <Logo>Juan</Logo><Dev>.dev</Dev>
            </NavName>{' '}
          </div>

          <div
            className='collapse navbar-collapse'
            id='bs-example-navbar-collapse-1'
          >
            <ul className='nav navbar-nav navbar-right'>
              <li>
                <a href='#portfolio'>
                  Projects
                </a>
              </li>
              <li>
                <a href='#about'>
                  About
                </a>
              </li>
              <li>
                <a href='#services'>
                  Services
                </a>
              </li>
              <li>
                <a href='#certificates'>
                  Certificates
                </a>
              </li>
              <li>
                <a href='#contact'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Header element={landingPageData.Header}/>
      <Gallery element={landingPageData.Gallery}/>
      <About element={landingPageData.About}/>
      <Services element={landingPageData.Services}/>
      <Certificates element={landingPageData.Certificates}/>
      <Contact element={landingPageData.Contact}/>
   </div>
  )
}


const Logo = styled.h1`
  font-size: 60px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #608AFD;
  letter-spacing: -3.2px;

`
const Dev = styled.h1`
  font-size: 30px;
  font-weight: 700;
  color: #fff;
`

const NavName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 10px;
`