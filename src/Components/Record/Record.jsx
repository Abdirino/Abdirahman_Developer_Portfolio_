import React, { useState } from 'react';
import './record.css';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Record = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>
      <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
        <div className="Record">
          <div className="records">

            <div className="record">
              <div className="r-icon">
                <i class="fa-solid fa-user"></i>
              </div>
              <div className="r-detail">
                <h1>
                  {counterOn && <CountUp start={0} end={2} duration={2} delay={0} />}
                  +
                </h1>
                <p>Delighted Clients</p>
              </div>
            </div>

            <div className="record">
              <div className="r-icon">
                <i class="fa-solid fa-gear"></i>
              </div>
              <div className="r-detail">
                <h1>
                  {counterOn && <CountUp start={0} end={6} duration={2} delay={0} />}
                  +
                </h1>
                <p>Complete Projects</p>
              </div>
            </div>

            <div className="record">
              <div className="r-icon">
                <i class="fa-regular fa-calendar-days"></i>
              </div>
              <div className="r-detail">
                <h1>
                  {counterOn && <CountUp start={0} end={1} duration={2} delay={0} />}
                  +
                </h1>
                <p>Years Experience</p>
              </div>
            </div>

          </div>
        </div>
      </ScrollTrigger>
    </>
  )
}

export default Record