import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import AllRecipes from "../components/AllRecipes"
import SEO from "../components/SEO"

// import FetchData from "../examples/fetchData"

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" description="This is home page for Recipe Bank" />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/heros/hero-1.jpg"
            alt="food img"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>Recipe bank</h1>
              <h4>no fluff, just recipes</h4>
            </div>
          </div>
        </header>

        {/* <FetchData /> */}
        <AllRecipes />
      </main>
    </Layout>
  )
}
