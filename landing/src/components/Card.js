import React from 'react'
import {IoMailOutline, IoChevronForward, IoApps, IoNotifications, IoPieChart,IoNewspaper,IoCard,IoColorFill, IoChevronForwardCircle} from 'react-icons/io5'
import {IconContext} from 'react-icons'

function Card () {
  return (
    <div className="service_container">
      <div className="title_wrapper">
        <span className="service_title">Our services</span>
        <h2>save time managing social media <br />For your business</h2>
      </div>
      <div className="service_card">
        <div className="card">
          <span className="service_icon" style={{backgroundColor:"e7daf8"}}>
            <IconContext.Provider value={{ color: "#5700cf", size: "22px" }}>
              <IoApps/>
            </IconContext.Provider>
          </span>
          <h3>ui design <br />for mobile&web</h3>
          <a href="#">
            <span>learn more</span>
            <IconContext.Provider value={{ color: "#14da8f", size: "18px" }}>
              <IoChevronForward/>
            </IconContext.Provider>
          </a>
        </div>
        <div className="card">
          <span className="service_icon" style={{backgroundColor:"ffede6"}}>
            <IconContext.Provider value={{ color: "#ff8559", size: "22px" }}>
              <IoColorFill/>
            </IconContext.Provider>
          </span>
          <h3>web design <br />app&web</h3>
          <a href="#">
            <span>learn more</span>
            <IconContext.Provider value={{ color: "#14da8f", size: "18px" }}>
              <IoChevronForward/>
            </IconContext.Provider>
          </a>
        </div>
        <div className="card">
          <span className="service_icon" style={{backgroundColor:"ffele9"}}>
            <IconContext.Provider value={{ color: "#fa3970", size: "22px" }}>
              <IoNotifications/>
            </IconContext.Provider>
          </span>
          <h3>ui design <br />for mobile&web</h3>
          <a href="#">
            <span>learn more</span>
            <IconContext.Provider value={{ color: "#14da8f", size: "18px" }}>
              <IoChevronForward/>
            </IconContext.Provider>
          </a>
        </div>
        <div className="card">
          <span className="service_icon" style={{backgroundColor:"dcedff"}}>
            <IconContext.Provider value={{ color: "#56a8f4", size: "22px" }}>
              <IoPieChart/>
            </IconContext.Provider>
          </span>
          <h3>ui design <br />for mobile&web</h3>
          <a href="#">
            <span>learn more</span>
            <IconContext.Provider value={{ color: "#14da8f", size: "18px" }}>
              <IoChevronForward/>
            </IconContext.Provider>
          </a>
        </div>
        <div className="card">
          <span className="service_icon" style={{backgroundColor:"dbf9ed"}}>
            <IconContext.Provider value={{ color: "#06d786", size: "22px" }}>
              <IoMailOutline/>
            </IconContext.Provider>
          </span>
          <h3>ui design <br />for mobile&web</h3>
          <a href="#">
            <span>learn more</span>
            <IconContext.Provider value={{ color: "#14da8f", size: "18px" }}>
              <IoChevronForward/>
            </IconContext.Provider>
          </a>
        </div>
        <div className="card">
          <span className="service_icon" style={{backgroundColor:"fffada"}}>
            <IconContext.Provider value={{ color: "#f1df11", size: "22px" }}>
              <IoMailOutline/>
            </IconContext.Provider>
          </span>
          <h3>ui design <br />for mobile&web</h3>
          <a href="#">
            <span>learn more</span>
            <IconContext.Provider value={{ color: "#14da8f", size: "18px" }}>
              <IoChevronForward/>
            </IconContext.Provider>
          </a>
        </div>
        <div className="card">
          <span className="service_icon" style={{backgroundColor:"ddfbf9"}}>
            <IconContext.Provider value={{ color: "#14da8f", size: "22px" }}>
              <IoMailOutline/>
            </IconContext.Provider>
          </span>
          <h3>ui design <br />for mobile&web</h3>
          <a href="#">
            <span>learn more</span>
            <IconContext.Provider value={{ color: "#14da8f", size: "18px" }}>
              <IoChevronForward/>
            </IconContext.Provider>
          </a>
        </div>
        <div className="card dark">
<h2>4 <br /> More</h2>
          <h3>And More</h3>
          <a href="#">
            <span>learn more</span>
            <IconContext.Provider value={{ color: "#14da8f", size: "18px" }}>
              <IoChevronForward/>
            </IconContext.Provider>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card