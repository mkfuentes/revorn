import React from 'react'
import {IoMailOutline, IoChevronForward, IoApps, IoNotifications, IoPieChart,IoNewspaper,IoCard,IoColorFill, IoChevronForwardCircle} from 'react-icons/io5'
import { IconContext } from 'react-icons'
import {BsRecycle, BsScrewdriver, BsPlug} from 'react-icons/bs'


function Card () {
  return (
    <div className="service_container">
      <div className="title_wrapper">
        <h2>Transportation vehicles produce 25 to 75 percent <br /> of key chemicals that pollute the air, causing smog and health problems.</h2>
        <br /><br />
        <span className="service_title">Next steps</span>
      </div>
      <div className="service_card">
        <div className="card">
          <span className="service_icon" style={{backgroundColor:"ffede6"}}>
            <IconContext.Provider value={{ color: "#ff8559", size: "22px" }}>
              <BsRecycle/>
            </IconContext.Provider>
          </span><br />
          <h3>Auto restoration</h3><br />
          <span>Improve car value, many cars are worth a significant amount of money when restored.Establish the car’s identity.</span>        </div>
        <div className="card">
          <span className="service_icon" style={{backgroundColor:"ffele9"}}>
            <IconContext.Provider value={{ color: "#fa3970", size: "22px" }}>
              <BsScrewdriver/>
            </IconContext.Provider>
          </span><br />
          <h3>Update</h3><br />
          <span>Simply plug in your phone via a USB cable or wireless. The digital interface with which you’re most familiar is now accessible</span>
        </div>
        <div className="card">
          <span className="service_icon" style={{backgroundColor:"dcedff"}}>
            <IconContext.Provider value={{ color: "#56a8f4", size: "22px" }}>
              <BsPlug/>
            </IconContext.Provider>
          </span><br />
          <h3>Electric conversion</h3>
          Fully electric cars have zero tailpipe emissions making them greener, cleaner and better for the environment than petrol or diesel
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
              <IoNewspaper/>
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
              <IoCard/>
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