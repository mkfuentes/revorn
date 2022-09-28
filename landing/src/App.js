import './App.scss'
import {FaBehance, FaDribbble} from 'react-icons/fa'
import { IoMailOutline, IoChevronForwardCircle, IoStar } from 'react-icons/io5'
import { IconContext } from 'react-icons'
import Card from '../src/components/Card'

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
            <span>Design <span className="second"> focused</span></span><br />
            <span>start <span className="second">up</span></span>
          </h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore voluptate, molestiae quod, provident nemo reprehenderit explicabo est dicta iste nesciunt natus numquam velit beatae exercitationem dolor esse itaque suscipit assumenda?</p>
          <div className="btn_group">
            <div className="btn btn_primary">Hire me
              <IconContext.Provider value={{ color: "#14da8f", size: "25px" }}>
                <IoChevronForwardCircle/>
              </IconContext.Provider>
            </div>
            <div className="btn btn_secondary">Live Chat</div>
          </div>
          <div className="review_container">
            <p className="total_review">64 reviews</p>
            <IconContext.Provider value={{ color: "#fff", size: "18px" }}>
              <span><IoStar/></span>
              <span><IoStar/></span>
              <span><IoStar/></span>
              <span><IoStar/></span>
              <span><IoStar/></span>
            </IconContext.Provider>
            <p className="review_containe">More than 50 people</p>
          </div>

        </div>
        <div className="right_content_wrapper">
          <img src={process.env.PUBLIC_URL + '../images/bg.png' } alt="bg" />
        </div>
      </div>

      <Card/>

      </ >
  );
}

export default App;
