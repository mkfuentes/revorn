import './App.scss'
import {FaBehance, FaDribbble} from 'react-icons/fa'
import { IoMailOutline, IoChevronForwardCircle, IoStar } from 'react-icons/io5'
import { IconContext } from 'react-icons'
import {BsFillArrowDownCircleFill} from 'react-icons/bs'
import Card from '../src/components/Card'
import mainPhoto from '../src/images/truck.png'

function App() {
  return (
    < >
      <header>
      <div className="logo_wrapper">R<span>EV</span>ORN</div>
      <div className="menu_container">
      <span>
        <IconContext.Provider value={{color:"#000", size:"18px", className:"icons_container"}}>
          <div className="icon"><FaBehance/></div>
          <div className="icon"><FaDribbble/></div>
        </IconContext.Provider>
      </span>
      <span>
        <IconContext.Provider value={{ color: "#000", size: "18px" }}>
          <div className="icon"><IoMailOutline/></div>
          hello@example.com
        </IconContext.Provider>
      </span>
      <span className="menu">
        <span></span>
        <span></span>
        <span></span>
          </span>
          </div>
    </header>

    <div className="content_wrapper">
        <div className="left_content_wrapper">
          <h2>
            <span>Help me to save <span className="second"> the world </span></span>
            <span>transforming  <span className="second">gasoline vehicles</span></span>
          </h2>
          <p>Fully electric cars have zero tailpipe emissions making them greener, cleaner and better for the environment than petrol or diesel</p>
          <div className="btn_group">
            <div className="btn btn_primary">
              <form action="https://www.paypal.com/donate" method="post" target="_top">
                <input type="hidden" name="submit" value="XLWPTLULTDXQN" />
                <input type="image" src="" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                PayPal
                </form>
            </div>
            <div className="btn btn_secondary">Live Chat</div>
          </div>
          <div className="review_container">
            <p className="total_review">64 reviews</p>
            <IconContext.Provider value={{ color: "#fff", size: "18px" }}>
              <span><BsFillArrowDownCircleFill/> </span>
            </IconContext.Provider>
            <p className="review_containe">More information</p>
          </div>

        </div>
        <div className="right_content_wrapper">
          <img src={mainPhoto} alt="tech" />
        </div>
      </div>

      <Card/>

      </ >
  );
}

export default App;
