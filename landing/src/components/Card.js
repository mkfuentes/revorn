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
        <div className="card">
          <span className="service_icon" style={{backgroundColor:"ddfbf9"}}>
            <IconContext.Provider value={{ color: "#14da8f", size: "22px" }}>
              <IoMailOutline/>
            </IconContext.Provider>
          </span>
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