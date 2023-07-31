import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <>
      <div>
        <div id="main">
          <div id="left">
            <h2 className="lefttxt">CHECK MODESENS BEFORE YOU BUY</h2>
            <p id="leftpara">We’re not a store <br /> We’re your fashion shopping assistant</p>
          </div>
          <div id="right">
            <img src="https://cdn.modesens.com/static/img/20230713topbanner_gif_en.gif" alt="" height="100%" width="100%" />
          </div>
        </div>
        <div className="main2">
          <div className="left2">
            <p className="lefttxt2"><b>Compare 500+ Stores In <span style={{ color: "#C00000" }}>one</span> place</b></p>
            <p>ModeSens allows you to compare prices and availability across hundreds of stores and thousands of brands.</p>
            <a style={{ color: "#C00000" }} href="">TRY IT OUT</a>
          </div>
          <div className="right2">
            <img src="https://cdn.modesens.com/static/img/20221231bg1_en.png" alt="" width="100%" height="90%" />
          </div>
        </div>
        <h2 style={{ marginTop: 100, textAlign: "center" }}><b>PARTNER SPOTLIGHT</b></h2>
        <p style={{ textAlign: "center" }}>Discover the largest selection of authentic products from 500+ trusted stores</p>
        <div id="main3">
          <div className="slide">

          </div>
        </div>
        <div className="main2">
          <div className="left2">
            <p className="lefttxt2"><b>Check ModeSens Before You Buy</b></p>
            <p>Want to score the best price—on anything—in seconds? Just paste a product link from any partner retailer into the search bar on our app or website.</p>
            <a style={{ color: "#C00000" }} href="">TRY IT OUT</a>
          </div>
          <div className="right2">
            <img src="https://cdn.modesens.com/static/img/20221231bg2_en.png" alt="" width="100%" height="90%" />
          </div>
        </div>
        <h2 style={{ marginTop: 100, textAlign: "center" }}><b>COMPARE AND SHOP WHEREVER YOU GO</b></h2>
        <p style={{ textAlign: "center" }}>To unlock all of ModeSens' features and functionality, simply download our App and Browser Extension.</p>
        <div className="main2">
          <div className="left2">
            <p className="lefttxt2"><b>Install the ModeSens Browser Extension</b></p>
            <p>Automatically compare products across 500+ stores while you browse at any of our partner stores’ websites.</p>
            <div id="Install">
              <img src="https://cdn.modesens.com/static/img/20230725chromelogo.svg" alt="" height="14px" width="14px" />
              <span style={{ color: "#C00000" }}>INSTALL NOW</span>
            </div>
          </div>
          <div className="right2">
            <img src="https://cdn.modesens.com/static/img/20221231bg3_en.png" alt="" height="90%" width="100%" style={{ padding: 10, paddingTop: 20 }} />
          </div>
        </div>
        <div className="main2">
          <div id="left3">
            <img src="https://cdn.modesens.com/static/img/20221231bg4_en.png" alt="" height="100%" />
          </div>
          <div className="right3">
            <p className="lefttxt2" style={{ paddingTop: 50 }}><b>Download The ModeSens App</b></p>
            <p>Scan any bar code or tag on a product to compare across 500+ stores before you buy.</p>
            <div id="app">
              <img src="https://cdn.modesens.com/static/img/20220926download_ios.svg" alt="" />
              <img src="https://cdn.modesens.com/static/img/20220926download_android.svg" alt="" />
            </div>
          </div>
        </div>
        <div id="main4">
          <img src="https://cdn.modesens.com/static/img/20220915-bg2.png" alt="" height="100%" width="100%" />
          <div id="intxt1">
            <p>WE HAVE HELPED MILLIONS OF MEMBERS SAVE:</p>
            <p><b>$373, 614, 000+</b></p>
            <div id="btndiv">
              <span style={{ fontSize: "1rem", color: "white" }}>JOIN NOW FOR FREE</span>
            </div>
          </div>
        </div>

       
        <hr />
      </div>
    </>
  );
};

export default Home;