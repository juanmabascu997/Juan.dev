import styled from "styled-components";
import {useSelector} from 'react-redux'

export const About = (props) => {
  const leng = useSelector(state => state.lenguaje)

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <Img src="img/yo.png" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2 id="featuresH2">
                {leng === "esp" ? "Acerca de mi" : "About me" }
              </h2>
              <p>{props.element ? props.element.paragraph : "loading..."}</p>
              <h3 id="featuresH2">
                {leng === "esp" ? "Porque deberias contratarme?" : "Why you should hire me?" }
              </h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.element
                      ? props.element.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.element
                      ? props.element.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Img = styled.img`
  border-radius: 130%;
  width: 100%;
`;
