import React from 'react'
import '../component/Maincontent.css'
import img1 from '../component/reactsimple.jpg'
import img2 from '../component/f.jpg';
import Toggle from './Toggle'
const Maincontent = () => {
  return (
    <div className='Maincontent'>
        <h1>
            React<br/>
            components <br/>
            for fast & <br/>
            beautiful apps.
        </h1>
        <img src={img1} className='img1' alt=""/>
        <p>
        React components for faster and easier web <br/>
development.Build your own design system or start<br/>
with Material Design.
        </p>
        <button className='btn btn-1'>Get Started 	&gt;</button>
        <button className='btn btn-2'>Material UI-X 	&gt;</button>
        <Toggle></Toggle>
        <img src={img2}  className="img2"alt='' usemap="#imageMap"/>

      <map name="imageMap">
          <area target="_self" alt="coursera" title="coursera" href="https://www.coursera.org/" coords="127,44,56,65" shape="rect"/>
          <area target="_self" alt="amazon" title="amazon" href="https://www.amazon.com/" coords="173,39,243,69" shape="rect"/>
          <area target="_self" alt="nasa" title="nasa" href="https://www.nasa.gov/" coords="288,36,342,76" shape="rect"/>
          <area target="_self" alt="netflix" title="netflix" href="https://www.netflix.com/in/" coords="383,41,457,67" shape="rect"/>
          <area target="_self" alt="unity" title="unity" href="https://unity.com/" coords="501,40,578,70" shape="rect"/>
          <area target="_self" alt="shutterstock" title="shutterstock" href="https://www.shutterstock.com/" coords="629,39,722,73" shape="rect"/>
      </map>
    </div>
  )
}

export default Maincontent