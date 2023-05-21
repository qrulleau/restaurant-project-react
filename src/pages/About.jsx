import React from 'react';
import Header from '../components/header';
import AssetProfil from '../assets/presentation.png';
import AssetIngredient from '../assets/about/ingredient.jpg';
import AssetLounge from '../assets/about/lounge.jpg';
import LogoInstagram from '../assets/icon/instagram.png';
import LogoYoutube from '../assets/icon/youtube.png';
import LogoFacebook from '../assets/icon/facebook.png';


function About() {
  return (
    <div className='about'>
      <Header className="border" background={false} />
      <div className="content">
        <h2>ABOUT</h2>
        <section>
          <div className="d-flex">
            <div className="description">
              <h3>Allan Seven</h3>
              <h4>Chef & owner</h4>
              <p>Lorem ipsum dolor amet glavrida sit amet, consectetur adipiscing dolor sit amet, consectetur adipiscing elit. Aenean fermentum at urna at scelerisque. Praesent suscipit nisi non pretium ultrices. Ut eu ante sit amet ligula laoreet posuer euismod consectetur fringilla eu, lobortis in lorem amet sapien. Lorem dolor dolor amet glavrida sit amet, consectetur adipiscing amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.</p>
              <p className='last'>Fusce malesuada ligula enim, fermentum rhoncus eros efficitur efficitur. Maecenas tincidunt, elit eu ornare volutpat, lorem arcu ullamcorper tortor, quis cursus ante magna in erat.</p>
              <div className="d-flex justify-start social-network">
                <img src={LogoInstagram} alt="" />
                <img src={LogoFacebook} alt="" />
                <img src={LogoYoutube} alt="" />
              </div>
            </div>

              <img src={AssetProfil} alt="" />

          </div>
        </section>
        <section>
          <div className="d-flex">
            <img src={AssetIngredient} alt="" />
            <div className="description">
              <h3>Ingredient</h3>
              <div>
                <h4>Own vegetale garden</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis dapibus leo.</p>
              </div>
              <div>
                <h4>Own vegetale garden</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis dapibus leo.</p>
              </div>
              <div>
                <h4>Own vegetale garden</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis dapibus leo.</p>
              </div>
            </div>

          </div>
        </section>
        <section>
          <div className="d-flex">
            <div className="description">
                <h3>Atmosphere</h3>
                <div>
                  <h4>The restaurant</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis dapibus leo.</p>
                </div>
                <div>
                  <h4>The bar</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis dapibus leo.</p>
                </div>
                <div>
                  <h4>The lounge</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis dapibus leo.</p>
                </div>
              </div>

              <img src={AssetLounge} alt="" />

          </div>
        </section>
      </div>
    </div>
  );
}

export default About;