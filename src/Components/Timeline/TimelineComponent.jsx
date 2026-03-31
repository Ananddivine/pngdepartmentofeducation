
import React, { useEffect, useState, useRef } from 'react';
import './TimelineComponent.css';
import processor from "../../assets/Homepageimages/slider1.jpg"
import chiplevel from '../../assets/Homepageimages/slider2.jpg';
import { FaDotCircle, FaQuestion } from "react-icons/fa";
import { Fireworks } from "@fireworks-js/react";
import green from '../../assets/green.png';
import pink from '../../assets/pink.png';
import blue from '../../assets/blue.png';

const TimelineComponent = () => {
  const [prevScrollY, setPrevScrollY] = useState(window.scrollY);
  const [up, setUp] = useState(false);
   const fireworksRef = useRef(null);
  const [down, setDown] = useState(false);
  const [full, setFull] = useState(false);
  const [setHeight] = useState(0);
  const targetY = window.innerHeight * 0.8;


  useEffect(() => {
    let frame;
    const animate = (time) => {
      const opacity = (Math.sin(time / 1000) + 1) / 5; 
      fireworksRef.current?.updateOptions({ opacity });
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);


  useEffect(() => {
    const scrollHandler = () => {
      const scrollY = window.scrollY;
      setUp(scrollY < prevScrollY);
      setDown(!up);

      const timelineRect = document.querySelector('.timelines').getBoundingClientRect();
      const dist = targetY - timelineRect.top;

      if (down && !full) {
        document.querySelector('.lines').style.bottom = `calc(100% - ${Math.min(dist, scrollY)}px)`;
      } else if (!full) {
        const linePosition = Math.max(dist - scrollY, 0);
        document.querySelector('.lines').style.bottom = `${linePosition}px`;
  
        if (linePosition === 0) {
          setFull(false); 
        }
      }

      if (dist > document.querySelector('.timelines').offsetHeight + 50 && !full) {
        setFull(true);
        document.querySelector('.lines').style.bottom = '-50px';
      } 

      
      document.querySelectorAll('.sections').forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top + item.offsetHeight / 5 < targetY) {
          item.classList.add('show-me');
        } else {
          item.classList.remove('show-me');
        }
      });

      setPrevScrollY(window.scrollY);
    };

    scrollHandler();
    document.querySelector('.lines').style.display = 'block';
    window.addEventListener('scroll', scrollHandler);
    

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [down, full, prevScrollY, setHeight, targetY, up]);

  return (
 <section id="time-line" style={{ position: "relative", overflow: "hidden" }}>
         <Fireworks
              ref={fireworksRef}
              style={{
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                position: "absolute",
                zIndex: 0,
                background: "transparent", 
                pointerEvents: "none",
              }}
            />
      <div className="bodys">
        <div className="continers">
        <div className="top-section">
          <h1 className='text-white'>Department of Education <FaQuestion  /> </h1>
          <p className='text-blue-500'>The Department of Education leads the delivery of education services to children, young people and adults both:</p>
          <p className='text-gray-500 flex gap-2 align-items-center' > <FaDotCircle  size={12} /> Directly through government schools</p>
          <p className='text-gray-500 flex gap-2 align-items-center' > <FaDotCircle size={12} /> Indirectly through the regulation and funding of permitted private schools</p>
          <p className='text-blue-500'>We implement the PNG Government policy on early childhood, general school education and vocational training. Its core functions are:</p>
          <p className='text-gray-500 flex gap-2 align-items-center' > <FaDotCircle size={12} /> Curriculum and Examinations</p>
          <p className='text-gray-500 flex gap-2 align-items-center' > <FaDotCircle size={12} /> Education Standards</p>
          <p className='text-gray-500 flex gap-2 align-items-center' > <FaDotCircle size={12} /> National Education Policies & Plans</p>
          <p className='text-gray-500 flex gap-2 align-items-center' > <FaDotCircle size={12} /> National Institutions – National Schools of Excellence</p>
          <p className='text-gray-500 flex gap-2 align-items-center' > <FaDotCircle size={12} /> Teacher Management (TSC) – Payroll – DoE</p>
          <p className='text-gray-500 flex gap-2 align-items-center' > <FaDotCircle size={12} /> Government Tuition Fee Policy</p>

        </div>    
      <div className="timelines mt-10">
        <div className="lines"></div>
        <div className='beds'></div>
        <div className="sections"> 
               <img src={green} alt='img'/>
                <div className="content"> <div className='pfor'>
                <a href='./services'> <p className='buttons'>Do you know?</p></a>
         </div>
              <h2>Our Mandate<i className="fa fa-2x fa-question"></i></h2>
               <p className='text-gray-400 '> The Department of Education is the executive and inspectorial branch of the National Education System. It derives its powers from the Education Act 1983 (amended 1995) and any other law relating to education matters. DoE is also subjected to Section 42 of the Organic Law on Provincial Governments and Local level Governments.</p>           
        </div>
        </div>
        <div className='divine'>
        <h3 >"Under the Organic Law on Provincial Governments and Local-Level Governments, the NDoE determines national policies and standards and supports their implementation by the provinces with services such as planning, research, training and staff development.
The NDoE is responsible for: teacher in-service, inspection and registration; the national curriculum; curriculum materials; and examinations. It is also responsible for national institutions, namely national high schools, special education resource centers, flexible, open and distance education (FODE) centres and schools in the National Capital District. DoE is also responsible for the disbursement and the supervision of the expenditure of money lawfully available for schools."</h3>
        </div>
       <div className='processor mt-10'> <img src={processor} alt='processor' /></div>     
        <div className="sections">
          <img src={pink} alt='Laptop' />
          <div className="contents">
            <h3>Education Boards<i className="fa fa-2x fa-question"></i></h3>
            <p className='text-justify mt-10 text-gray-400'>The Provincial Education Board (PEB) is the highest education decision-making body in a province. Most provincial boards are headed by a chairman, who is the Provincial Education Adviser. Powers and functions of the PEBs vary from province to province depending on the powers devolved to them through their provincial laws and subject to the capacity of the province.
District Education Boards are an integral part of the administration of education in the districts. Members are stakeholders within the districts. The powers and functions of the district boards vary from province to province depending on the powers devolved to them. The National Education Board can veto board decisions.
Local-Level Government is the third level of government. It plays a minimal role in education but its responsibilities include the funding and maintenance of elementary and primary schools and helping districts to develop district education plans consistent with provincial education plans.</p> 
          </div>
        </div>                       
        <div className='chip'> <img src={chiplevel} alt='chip' /> </div>     
        <div className="sections"> 
        <img src={blue} alt='laptop' />
          <div className="contents">
            <div className="box-size">
              <h4 style={{color: 'aqua'}}>Department Head</h4>
              <p className='text-gray-400'>The head of the Department of Education is the Secretary for Education. The Secretary also chairs the National Education Board.
The Secretary is the chief executive of the National Education System and is responsible under the Minister for the provision of administrative services to the National Education Board and is responsible for determining the qualifications and standards required for registration or provisional registration of teachers, for the inspection of all schools, and for the certification and assessment of teachers.</p>
            </div>              
          </div>
        </div>
      </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineComponent;
    