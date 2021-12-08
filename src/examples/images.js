import React from "react"
import styled from "styled-components"

import { StaticImage } from "gatsby-plugin-image"

const Images = () => {
  return (
    <Wrapper>
      <article>
        <h4>costrained / default</h4>
        <StaticImage
          src="../assets/images/recipes/img-1.jpg"
          alt="food"
          //height={300} 
          placeholder="tracedSVG"
          layout="constrained" // which is the default
          className="example-img"
          as="section"
        />
      </article>
      <article>
        <h4>fixed</h4>
        <StaticImage
          src="../assets/images/recipes/img-0.jpg"
          alt="food"
          //height={300} 
          placeholder="blurred"
          layout="fixed" 
          width= {200}
          className="example-img"
          as="div"
        />
      </article>
      <article>
        <h4>full width</h4>
        <StaticImage
          src="../assets/images/recipes/img-2.jpg"
          alt="food"          
          placeholder="dominantColor"
          layout="fullWidth" // which is the default
          className="example-img"
          as="article"
        />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 70vw;
  margin: 0 auto;
  display: grid;
  text-align: center;
  gap: 2rem;
  article {
    border: 2px solid red;
    border-radius: 1rem;
    h4{
      padding: 5px;
    }
  }
  .example-img {
    border-radius: 1rem;
    height: 300px;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
    .example-img{
      height: 200px;
    }
  }
`

export default Images
