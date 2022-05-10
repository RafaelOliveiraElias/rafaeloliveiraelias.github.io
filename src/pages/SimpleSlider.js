import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import pokedex from '../imgs/pokedex.jpg'
import trivia from '../imgs/trivia.jpg'
import reactStore from '../imgs/reactStore.jpg'
import wallet from '../imgs/wallet.jpg'
import { AiOutlineLink, AiOutlineGithub } from "react-icons/ai";

import Mobilepreview from '../imgs/Mobile-preview.png'



// import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
// import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

export default class Responsive extends Component {
  constructor(props){
    super(props)
    this.state = {
      img1: false,
      img2: false,
      img3: false,
      img4: false,
      img5: false,
      img6: false,
    }
  }
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,


      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,

      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
            speed: 500
          }
        },
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
            // infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            // infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            // infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            dots: false
          }
        }
      ]
    };
    const { img1, img2, img3, img4, img5, img6 } = this.state;
    return (
      <div className="sliderClass">
      <Slider {...settings}>
        <div className="cards">
          <div className="cardTitle">
            <h3>Pokedex</h3>
          </div>
          <div className="cardImgCont" onMouseOver={ () => this.setState({img1: true})} onMouseOut={ () => this.setState({img1: false})}>
            <div className={ !img1 ? 'buttons enabled' : 'buttons' } >
              <button
                onClick={()=> window.open("https://github.com/RafaelOliveiraElias/my-pokedex", "_blank")}
              >
                <AiOutlineGithub size="60px" />
              </button>
              <button
                onClick={()=> window.open("https://my-pokedex-beige.vercel.app/", "_blank")}
              >
                <AiOutlineLink size="60px" />
              </button>
            </div>
            <img className="imgClass" src={pokedex} alt="pokedex"/>
          </div>
          <div className="details">
            <div>
              <span><span className="tag">Skills:</span> HTML, Css, JavaScript</span>
            </div>
            <div>
              <span><span className="tag">Description:</span> Personal project to practice the use of API's and Basic HTML websites making an interactable Pokedex divided by each gen.</span>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="cardTitle">
            <h3>Trivia</h3>
          </div>
          <div className="cardImgCont" onMouseOver={ () => this.setState({img2: true})} onMouseOut={ () => this.setState({img2: false})}>
            <div className={ !img2 ? 'buttons enabled' : 'buttons' } >
              <button
                onClick={()=> window.open("https://github.com/RafaelOliveiraElias/trivia-react-app", "_blank")}
              >
                <AiOutlineGithub size="60px" />
              </button>
              <button
                onClick={()=> window.open("https://trivia-react-app.vercel.app/", "_blank")}
              >
                <AiOutlineLink size="60px" />
              </button>
            </div>
            <img src={trivia} alt="trivia"/>
          </div>
          <div className="details">
            <div>
              <span><span className="tag">Skills:</span> React, Redux, Css, JavaScript</span>
            </div>
            <div>
              <span><span className="tag">Description:</span> Group project made to practice React, Redux and Agile-Methodologies. Using a trivia API, it's possible to modify the questions the way the user wants. </span>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="cardTitle">
            <h3>React Store</h3>
          </div>
          <div className="cardImgCont" onMouseOver={ () => this.setState({img3: true})} onMouseOut={ () => this.setState({img3: false})}>
            <div className={ !img3 ? 'buttons enabled' : 'buttons' } >
              <button>
                <a href='https://github.com/RafaelOliveiraElias/Online-Store-w-react' target="_blank" rel="noreferrer">
                  <AiOutlineGithub size="60px" />
                </a>
              </button>
              <button>
                  <a href='https://online-store-with-react-ruddy.vercel.app/' target="_blank" rel="noreferrer">
                    <AiOutlineLink size="60px" />
                  </a>
              </button>
            </div>
            <img src={reactStore} alt="trivia"/>
          </div>
          <div className="details">
            <div>
              <span><span className="tag">Skills:</span> React, Css, JavaScript</span>
            </div>
            <div>
              <span><span className="tag">Description:</span> Group project made to practice ReactJS and Agile-Methodologies. Using Real eCommerce shop API and very similar to a operational one. </span>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="cardTitle">
            <h3>Wallet</h3>
          </div>
          <div className="cardImgCont" onMouseOver={ () => this.setState({img4: true})} onMouseOut={ () => this.setState({img4: false})}>
            <div className={ !img4 ? 'buttons enabled' : 'buttons' } >
              <button
                onClick={()=> window.open("https://github.com/RafaelOliveiraElias/wallet-react-rafael", "_blank")}
              >
                <AiOutlineGithub size="60px" />
              </button>
              <button
                onClick={()=> window.open("https://wallet-react-rafael.vercel.app/", "_blank")}
              >
                <AiOutlineLink size="60px" />
              </button>
            </div>
            <img src={wallet} alt="trivia"/>
          </div>
          <div className="details">
            <div>
              <span><span className="tag">Skills:</span> React, Redux, Css, JavaScript</span>
            </div>
            <div>
              <span><span className="tag">Description:</span> Personal project made to practice React and Redux. Organization of multiple expenses and convertions of diferent currencies returning a total value. </span>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="cardTitle">
            <h3>What to cook</h3>
          </div>
          <div className="cardImgCont" onMouseOver={ () => this.setState({img5: true})} onMouseOut={ () => this.setState({img5: false})}>
            <div className={ !img5 ? 'buttons enabled' : 'buttons' } >
              <button
                onClick={()=> window.open("https://github.com/RafaelOliveiraElias/what-to-cook-web-app", "_blank")}
              >
                <AiOutlineGithub size="60px" />
              </button>
              <button
                onClick={()=> window.open("https://what-to-cook-web-app.vercel.app/", "_blank")}
              >
                <AiOutlineLink size="60px" />
              </button>
            </div>
            <img src={Mobilepreview} alt="Mobile-preview"/>
          </div>
          <div className="details">
            <div>
              <span><span className="tag">Skills:</span> HTML, CSS, and JavaScript</span>
            </div>
            <div>
              <span><span className="tag">Description:</span> Group project of a random recipe suggestions web app with a chat-bot to set user preferences. </span>
            </div>
          </div>
        </div>
      </Slider>
    </div>
    );
  }
}
