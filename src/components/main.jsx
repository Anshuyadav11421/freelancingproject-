import React ,{useState} from "react";
import "../main.css";

const Main = () => {
  const[open,setOpen] = useState(false);
 
  return (
    <div className="macbook-pro-16-14">
      <img className="icon" alt="" src="/assets/background.png" />
      <img
        className="hud-futuristic-elements-4-scre-icon"
        alt=""
        src="/assets/whitelogo.png"
      />
      <div className="macbook-pro-16-14-child" />
      <div className="macbook-pro-16-14-item" />
      
      <img
        className="hud-futuristic-elements-4-scre-icon1"
        alt=""
        // src="/assets/background.png"
      />
       
      <div className="macbook-pro-16-14-inner" />
      <div className="group-parent">
        <div className="ellipse-parent">
          <div className="group-child" />
          <div className="parent">
            <img className="icon1" alt=""
             src="/assets/connect1.png" />
            <div className="group-item" />
            <b className="connect">Connect</b>
          </div>
        </div>
        <div className="group-inner" />
        <div className="element">
          <img
            className="photo1704179808-6-icon"
            alt=""
            src="/assets/row3.png"
          />
          <div className="element-child" />
        </div>
        <div className="photo1704179808-6-parent">
          <img
            className="photo1704179808-6-icon1"
            alt=""
            src="/assets/row3.png"
          />
          <div className="element-child" />
        </div>
        <div className="photo1704179808-6-group">
          <img
            className="photo1704179808-6-icon2"
            alt=""
            src="/assets/bigrow.png"
          />
          <div className="group-child1" />
        </div>
        <b className="from">From</b>
        <b className="asset">Asset</b>
        <b className="amount">Amount</b>
        <b className="balance">Balance</b>
        <p className="bal">Balance</p>
        <div className="group-child2" />
        <div className="usdc">{`USDC `}</div>
        <div className="ethereum">(Ethereum)</div>
        <div className="ellipse-div" />
        <b className="b">{`2000`}</b>
        <div className="rectangle-parent">
          <div className="group-child3" />
          <img
            className="abstract-circle-technology-bac-icon"
            alt=""
            src="/assets/row.png"
          />
          <b className="bsc">BSC</b>
          <b className="network">Network</b>
          <img
            className="futuristic-hud-element-interfa-icon"
            alt=""
            src="/assets/box2.png"
          />
        </div>
        <img
          className="futuristic-hud-element-interfa-icon1"
          alt=""
          src="/assets/button.png"
        />
      </div>
        <img className="rectangle-icon" alt="" src="/assets/rectangle.png" />
      <img
        className="logo-white-f4487d53-2-icon" onClick={()=>{setOpen(!open)}}
        alt=""
        src="/assets/portal.png"
      />
      {/* add new  */}
        <b className="home-usdc-wormholescan"  >Home USDC Wormholescan</b>
        <div  className={`sub-menu-wrap ${open ? 'active':'inactive'}`} >
          <img className="nexpage" alt="" src="/assets/nextbox.png"/>
          <div className="nextconnect">
            <img className="nextImage" alt="" src="/assets/nextconnect.png"/>
          
            <p className="text1" >0001265s255A</p>
            <p className="text2">Etherium</p>
            
          </div>
         
          <div className="Circle">  <img className="circle" alt="" src="/assets/circle.png"/></div>
          <div className="main_box">
            <img className="mainbox" alt="" src="/assets/mainbox.png"/>
            <p className="points">Your Points</p>
            <p className="balance">Your Balance</p>
            <p className="zero" >0</p>
            <div className="smallbox">
              <p className="profit" >Your Profit</p>
              <p className="number">2.5K</p> 
              <p className="week">This Week</p> 
              <p className="redeem">Redeem</p>
            </div>

          </div>
          <div className="Bow">
            <img className="bow" onClick={()=>{setOpen(!open)}}  alt="" src="/assets/bow.png"/>
          </div>
          <div className="shadow">
              <p className="update">Updates</p>
              <img className="whiteshadow" alt="" src='/assets/whiterow.png'/>
              
              <img className="row2" alt="" src="/assets/row2.png"/>
              <img className="row3" alt="" src="/assets/row2.png"/>
              <img className="row4" alt="" src="/assets/row2.png"/>
              <img className="row5" alt="" src="/assets/row2.png"/>
              <img className="bigcol" alt="" src="/assets/bigcol.png"/>
              <img className="blackcol" alt="" src="/assets/blackcol.png"/>
            

            </div>
            <img className="cloud" alt="" src="/assets/cloud2.png"/>
          
         </div>
       
     
     

      {/* now break */}
      <img className="images-1-2" alt="" src="/assets/equally.png" />
      <div className="rectangle-group">
        <div className="group-child4" />
        <b className="to">
          <p className="to1">To</p>
        </b>
        <div className="element1">
          <img
            className="photo1704179808-6-icon"
            alt=""
            src="/assets/row3.png"
          />
          <div className="element-child" />
        </div>
        <div className="photo1704179808-6-container">
          <img
            className="photo1704179808-6-icon1"
            alt=""
            src="/assets/row3.png"
          />
          <div className="element-child" />
        </div>
        <div className="group-div">
          <img
            className="photo1704179808-6-icon2"
            alt=""
            src="/assets/bigrow.png"
          />
          <div className="group-child1" />
        </div>
        <div className="group-child7" />
        <div className="usdc1">{`USDC `}</div>
        <div className="ethereum1">(Ethereum)</div>
        <b className="b1">2000</b>
        <div className="rectangle-container">
          <div className="group-child3" />
          <img
            className="abstract-circle-technology-bac-icon"
            alt=""
             src="/assets/connect1.png"
          />
          <b className="bsc">BSC</b>
          <b className="network">Network</b>
          <img
            className="futuristic-hud-element-interfa-icon"
            alt=""
            src="/assets/box2.png"
          />
        </div>
        <img
          className="futuristic-hud-element-interfa-icon3"
          alt=""
          src="/assets/button.png"
        />
        <div className="ellipse-parent">
          <div className="group-child" />
          <div className="parent">
            <img className="icon1" alt="" src="/assets/connect1.png" />
            <div className="group-item" />
            <b className="connect">Connect</b>
          </div>
        </div>
        <b className="asset1">Asset</b>
        <b className="amount1">Amount</b>
        <b className="balance1">Balance</b>
        <div className="group-child11" />
      </div>
    </div>
  );
};

export default Main;
