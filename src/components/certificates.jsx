import styled from "styled-components"
import {BsArrowRightCircleFill, BsArrowLeftCircleFill} from "react-icons/bs"

export const Certificates = (props) => {
  return (
    <div id='certificates' className='text-center'>
        <Container className='container'>
            <div className='section-title'>
                <Tittle>Certificates</Tittle>
            </div>
            <div id="myCarousel" class="carousel slide" data-ride="carousel">

            {/* <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol> */}

            <div class="carousel-inner">
                <div class="item active">
                    <Img class="d-block w-100" src={props.element?props.element[0].img : ""} alt="First slide"/>
                    <Tittle>{props.element?props.element[0].academy : ""}</Tittle>
                    <p>{props.element?props.element[0].title : ""}</p>
                </div>
                <div class="item">
                    <Img class="d-block w-100" src={props.element?props.element[1].img : ""} alt="Second slide"/>
                    <Tittle>{props.element?props.element[1].academy : ""}</Tittle>
                    <p>{props.element?props.element[1].title : ""}</p>
                </div>
                <div class="item">
                    <Img class="d-block w-100" src={props.element?props.element[2].img : ""} alt="Third slide"/>
                    <Tittle>{props.element?props.element[2].academy : ""}</Tittle>
                    <p>{props.element?props.element[2].title : ""}</p>
                </div>
            </div>

            <BottonsLefth class="left carousel-control" href="#myCarousel" data-slide="prev">
                <BsArrowLeftCircleFill/>
            </BottonsLefth>
            <BottonsRight class="right carousel-control" href="#myCarousel" data-slide="next">
                <BsArrowRightCircleFill/>
            </BottonsRight>
            </div>
        </Container>
    </div>
  )
}

const Img = styled.img`
    border-radius: 2%;
    width: 100%;
    height: 80vh;
`

const Tittle = styled.h2`
    padding-top: 55px;
    color: #fff;
`
const BottonsLefth = styled.a`
    background: #222222;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    right: 95%;
    transition: all 300ms;
    svg{
        font-size: 3.5rem;
        color: #ffffff;
    }
    &:hover {
        transform: scale(1.1);
        color: #dddddd;
    }
`
const BottonsRight = styled.a`
background: #222222;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 95%;
    transition: all 300ms;

    svg{
        font-size: 3.5rem;
        color: #ffffff;
    }
    &:hover {
        transform: scale(1.1);
        color: #dddddd;
    }
`

const Container = styled.div`
    margin-bottom: 100px;

`