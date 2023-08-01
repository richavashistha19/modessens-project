import React from 'react'
import './HomePage.css'

const HomePage = () => {

return (
<>
<div>

    <div style={{display: "flex", margintop: "20px"}}>
        <div>
        <img src="https://cdn.modesens.com/static/img/20190228newlogo-black.svg" alt="img" height="22px" style={{ paddingTop: 8 }}/>

        </div>
        <div id="head">
            <div style={{ margin: 10 }}>
                <a href=""className="top">WOMEN</a>
                <a href=""className="top">MEN</a>
                <a href=""className="top">KIDS</a>
                <a href=""className="top">Home</a>
                <a href=""className="top">DESIGNERS</a>
                <a href=""className="top">COMMUNITY</a>
                <a href="" classname="top" style={{ color: "red" }}>SALE</a>
            </div>
            <div style={{ display: "flex" }}>
                <div  className="side">
                    <a href=""><img src="https://cdn.modesens.com/static/img/prd-update-20191109.svg" alt="img"/></a>
                </div>
                <div  className="side">
                    <a href=""><img src="https://cdn.modesens.com/static/img/20230724heart.svg" alt=""/></a>
                </div> 
                <div  className="side">
                    <a href=""><img src="https://cdn.modesens.com/static/img/20200612shopping_bag2.svg" alt=""/></a>
                </div>  
                <div  className="side" id="contact">
                    <a href=""><img src="https://cdn.modesens.com/static/img/20200612account_b2.svg" alt=""/></a>
                </div>
                <div className="side">
                    <a href=""><img src="https://cdn.modesens.com/static/img/20200612search_img1.svg" alt=""/></a>
                    <span>SEARCH</span>
                </div>
            </div>
        </div>
    </div>
    <div id="main">
        <div id="left">
            <h2 className="lefttxt">CHECK MODESENS BEFORE YOU BUY</h2>
            <p id="leftpara">We’re not a store <br/> We’re your fashion shopping assistant</p>
        </div>
        <div id="right">
            <img src="https://cdn.modesens.com/static/img/20230713topbanner_gif_en.gif" alt="" height="100%" width="100%"/>
        </div>
    </div>
    <div className="main2">
        <div className="left2">
            <p className="lefttxt2"><b>Compare 500+ Stores In <span style={{ color: "#C00000" }}>one</span> place</b></p>
            <p>ModeSens allows you to compare prices and availability across hundreds of stores and thousands of brands.</p>
            <a style={{ color: "#C00000" }} href="">TRY IT OUT</a>
        </div>
        <div className="right2">
            <img src="https://cdn.modesens.com/static/img/20221231bg1_en.png" alt="" width="100%" height="90%"/>
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
            <img src="https://cdn.modesens.com/static/img/20221231bg2_en.png" alt="" width="100%" height="90%"/>
        </div>
    </div>
    <h2 style={{ marginTop: 100, textAlign: "center" }}><b>COMPARE AND SHOP WHEREVER YOU GO</b></h2>
    <p style={{ textAlign: "center" }}>To unlock all of ModeSens' features and functionality, simply download our App and Browser Extension.</p>
    <div className="main2">
        <div className="left2">
            <p className="lefttxt2"><b>Install the ModeSens Browser Extension</b></p>
            <p>Automatically compare products across 500+ stores while you browse at any of our partner stores’ websites.</p>
            <div id="Install">
                <img src="https://cdn.modesens.com/static/img/20230725chromelogo.svg" alt="" height="14px" width="14px"/>
                <span style={{ color: "#C00000" }}>INSTALL NOW</span>
            </div>
        </div>
        <div className="right2">
        <img src="https://cdn.modesens.com/static/img/20221231bg3_en.png" alt="" height="90%" width="100%" style={{ padding: 10, paddingTop: 20 }}/>
        </div>
    </div>
    <div className="main2">
        <div id="left3">
            <img src="https://cdn.modesens.com/static/img/20221231bg4_en.png" alt="" height="100%"/>
        </div>
        <div className="right3">
        <p classname="lefttxt2" style={{ paddingTop: 50 }}><b>Download The ModeSens App</b></p>
            <p>Scan any bar code or tag on a product to compare across 500+ stores before you buy.</p>
            <div id="app">
                <img src="https://cdn.modesens.com/static/img/20220926download_ios.svg" alt=""/>
                <img src="https://cdn.modesens.com/static/img/20220926download_android.svg" alt=""/>
            </div>
        </div>
    </div>
    <div id="main4">
        <img src="https://cdn.modesens.com/static/img/20220915-bg2.png" alt="" height="100%" width="100%"/>
        <div id="intxt1">
            <p>WE HAVE HELPED MILLIONS OF MEMBERS SAVE:</p>
            <p><b>$373, 614, 000+</b></p>
            <div id="btndiv">
            <span style={{ fontSize: 15, color: "white" }}>JOIN NOW FOR FREE</span>
            </div>
        </div>
    </div>
    <h2 style={{ marginTop: 100, textAlign: "center" }}><b>SHOP YOUR FAVORITE CATEGORY</b></h2>
    <div className="main2">

    </div>
    <div className="main2">
        <div id="left4">
            <img src="https://cdn.modesens.com/static/img/20220922_fashion_pic.png" alt="" height="100%"/>
        </div>
        <div id="right4">
           <p className="lefttxt2"><b>Fashion-Forward Community</b></p>
           <p>You look amazing on us! Come on, join the ModeSens Fashion Community.</p>
           <div style={{ marginBottom: 10 }}>
           <a href="" style={{ color: "#C00000", textTransform: "uppercase" }}>Join Modesens Community</a>
           </div>
           <a href="" style={{ color: "#C00000", textTransform: "uppercase" }}> Fashion Blogs</a>
        </div>
    </div>
    <div className="main2">
        <div id="lastd">
            <img src="https://cdn.modesens.com/static/img/20220915-bg3.png" alt="" width="100%" height="100%"/>
            <div id="intxt2">
                <p style={{ fontSize: 30 }}><b>Built By Shoppers For Shoppers</b></p>
                <p style={{ fontSize: 30 }}>Our mission is to develop the future of shopping. You only need to know what you like. We’ll handle the rest.</p>
                <a href="" style={{ color: "white" }}>READ OUR STORY</a>
            </div>
        </div>
    </div>
    <hr/>
    <div id="about">
        <div className="subabout">
            <h3>CUSTOMER CARE</h3>
            <a href="" className="links">Shopper Protection</a><br/>
            <a href="" className="links">Loyalty Program</a><br/>
            <a href="" className="links">Help Center</a><br/>
            <a href="" className="links">Size Guides</a><br/>
            <a href="" className="links">Shopper Protection</a><br/>
        </div>
        <div className="subabout">
            <h3>INFORMATION</h3>
            <a href="" className="links">About Us</a><br/>
            <a href="" className="links">Influencer Program</a><br/>
            <a href="" className="links">Partner Stores</a><br/>
            <a href="" className="links">Sitemap</a><br/>
        </div>
        <div className="subabout">
            <h3>LEGAL</h3>
            <a href="" className="links">Terms Of Use</a><br/>
            <a href="" className="links">Disclosure</a><br/>
            <a href="" className="links">Privacy Policy</a><br/>
            <a href="" className="links">Community Guidelines</a><br/>
        </div>
        <div className="subabout">
            <h3>INTERNATIONAL</h3>
            <a href="" className="links">ModeSens</a><br/>
            <a href="" className="links"> ModeSens - United Kingdom</a><br/>
            <a href="" className="links">ModeSens - China(中国大陆)</a><br/>
        </div>
        <div className="subabout">
            <h3>CONNECT WITH US</h3>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <a href=""><img src="https://cdn.modesens.com/static/img/20220815download_ios.svg" alt=""/></a>
                <a href=""><img src="https://cdn.modesens.com/static/img/20220815download_android.svg" alt=""/></a>
                <a href=""><img src="https://cdn.modesens.com/static/img/20220815down_chromestrore.svg" alt=""/></a>
            </div>
        </div>
        <div className="subabout">
            <h3>NEWSLETTER SIGN UP</h3> 

            </div>
        </div>
    </div>
    <hr/>
</>
)

} 

export default HomePage 