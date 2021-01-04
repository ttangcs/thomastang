import React from "react";
import Layout from "../components/layout"
import About from "../components/about"
import Landing from "../components/landing"
import Resume from "../components/resume"
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import landingImage from "../images/landing.jpg"


const IndexPage = () => {
  return (
      <Parallax pages={2}>
        <ParallaxLayer speed={0.3}>
          <div style={{background: `url(${landingImage})`, backgroundColor: 'black', backgroundSize: 'cover'}}>
            <Layout>
              <Landing />
            </Layout> 
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.15}>
          <Layout>
            <About />
            <Resume />
          </Layout>
        </ParallaxLayer>
      </Parallax>
  );
};

export default IndexPage;
