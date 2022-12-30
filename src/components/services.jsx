import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaVuejs } from 'react-icons/fa';
import { SiPostgresql } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiFirebase} from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import * as React from 'react';
// import Rating from '@mui/material/Rating';
// import Typography from '@mui/material/Typography';
import styled from "styled-components";

import {useSelector} from 'react-redux'

export const Services = (props) => {
  const leng = useSelector(state => state.lenguaje)
  const [value, setValue] = React.useState(2);

  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>{leng === "esp" ? "Nuestros servicios" : "Our Services" }</h2>
          <p>
            {leng === "esp" ? "Estas son mis habilidades" : "This is a list of skills" }
          </p>
        </div>
        <Row>
          {
            props.element
            ? props.element.map((d, i) => (
              <Card>
                <Progress className="progress">
                  <div className="progress-bar bg-warning" role="progressbar" aria-label="Success example" style={{width: d.level+'%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </Progress>
                {
                  d.icon==='React' ?<><FaReact/> React</>  :
                  d.icon==='HTML5' ? <><FaHtml5/> HTML</> :
                  d.icon==='CSS' ? <><FaCss3Alt/> CSS</> :
                  d.icon==='javascript' ? <><FaJsSquare/> JS</> :
                  d.icon==='node.js' ? <><FaNodeJs/> Node JS</> :
                  d.icon==='Git' ? <><FaGithub/> Git</>:
                  d.icon==='SQL' ? <><SiPostgresql/> PostgreSQL</>:
                  d.icon==='Figma' ? <><FaFigma/> Figma</>:
                  d.icon==='Firebase' ? <><SiFirebase/> Firebase</>:
                  d.icon==='Vue' ? <><FaVuejs/> Vue JS</>:
                  d.icon==='Bootsrap' ? <><FaBootstrap/> Bootsrap</>
                  : null
                }
              </Card>
            )) :
            'loading'
          }
        </Row>
      </div>
    </div>
  )
}

const Card = styled.div`
  display: flex;
  align-items: center;
    svg {
      font-size: 4.5rem;
    }
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;  
  align-items: stretch;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-top: 20px;
  margin-left: -20px;
  justify-content: space-around;
  max-height: 250px;
  align-content: stretch;
  gap: 20px;
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

const Progress = styled.div`
  display: flex;
  align-self: center;  
  height: 20px;
  width: 60%;
  margin-bottom: 0px;

  div {
    background-color: #FDEB39;
  }
`