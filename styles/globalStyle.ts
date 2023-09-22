import { HeroCard } from "@/components/Carousel/Carousel.style";
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
export const GlobalStyle = createGlobalStyle`
  
${normalize}

  html {
    font-size: 16px;
    box-sizing: border-box;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  *, *::before, *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    outline:none;
  }

  body {
    margin: 0;
    font-size: 16px;
    overflow-x: hidden;
    font-family: "Source Sans Pro", sans-serif;
  }

  // TODO: consider to use it on section title styles
  h1 {
    font-size: 24px;
    line-height: 33px;
    margin:0px;
  }
  h2 {
    font-size: 20px;
    line-height: 33px;
    margin:0px;
  }
  section {
    width: 100%;
  }
  a {
  color: #111;
  text-transform: capitalize;
  text-decoration: none;
  transition: all 0.3s ease-in-out 0s;
  }
  a:hover{
    color:#47c757
  }
  @media (max-width: 800px) {
   html, body {
     overflow-x: hidden;
   }
}

  
  .SliderContainer:hover {
    ${HeroCard}{
      bottom: 0px;
    }
    .navigator-left, .navigator-right {
      opacity: 1;
    }
  }
  
  .navigator-left, .navigator-right {
    width: 60px;
    height: 60px;
    color: #47c757;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0px 0px 8px 0px rgb(222 222 222 / 70%);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0;
    transition: all 0.2s ease 0s;
    z-index: 20;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .navigator-left{left:5%;}
  .navigator-right{right:5%;}


`;
