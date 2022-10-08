import './App.scss'
import {FaBehance, FaDribbble, FaLinkedin} from 'react-icons/fa'
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
          <div className="icon"><FaLinkedin/></div>
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
              <a href="https://www.paypal.com/donate/?hosted_button_id=XLWPTLULTDXQN">PayPal</a>
            </div>
            <div className="btn btn_secondary">Contact</div>
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
