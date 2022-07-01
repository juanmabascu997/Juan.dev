import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import {SiStyledcomponents, SiFirebase} from "react-icons/si";
import { GrStripe } from "react-icons/gr";
import { FaBootstrap } from "react-icons/fa";

import styled from "styled-components";

export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Our Services</h2>
          <p>
            This is a list of skills
          </p>
        </div>
        <Row>
          {props.element
            ? props.element.map((d, i) => (
                <Card key={`${d.name}-${i}`}>
                  {' '}
                  {d.icon==='React' ? <FaReact/> :
                  d.icon==='HTML5' ? <FaHtml5/> :
                  d.icon==='CSS' ? <FaCss3Alt/> :
                  d.icon==='javascript' ? <FaJsSquare/> :
                  d.icon==='node.js' ? <FaNodeJs/> :
                  d.icon==='Git' ? <FaGithub/>:
                  d.icon==='SQL' ? <SiPostgresql/>:
                  d.icon==='Figma' ? <FaFigma/>:
                  d.icon==='Firebase' ? <SiFirebase/>:
                  d.icon==='Stripe.js' ? <GrStripe/>:
                  d.icon==='Bootsrap' ? <FaBootstrap/>:
                  d.icon==='Styled Components' ? <SiStyledcomponents/>
                  : null
                  }                  
                    <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </Card>
              ))
            : 'loading'}
        </Row>
      </div>
    </div>
  )
}

const Card = styled.div`
  background-color: #222222;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 14px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #608AFD;
  width: 200px;
  height: 300px;
  h3 {
    font-size: 1.7rem;
    margin-bottom: 5px;
  }
  p {
    font-size: 1.2rem;
  }
  svg {
    font-size: 4.5rem;
    margin-top: 10px;
  }
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    text-align: center;
    color: #608AFD;
    width: 40vw;
    height: 100%;
    h3 {
      font-size: 1.7rem;
      margin-bottom: 5px;
    }
    p {
      display: none;
    }
    svg {
      font-size: 4.5rem;
      margin-top: 10px;
    }
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 1200px;  
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-top: 20px;
  margin-left: -20px;
  justify-content: space-around;
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    color: #608AFD;
    width: 100%;
  }

`;
