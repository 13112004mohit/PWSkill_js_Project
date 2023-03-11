import React from 'react'
import '../style/courses.css'

const Courses = () => {
  return (
    <>
       <div className="course_m_con">
            <h1>Our Courses</h1>
            <div className="all_courses_container">

                <div className="course_box">
                    <div className="course_name">
                       <h1>B.A</h1>
                    </div>
                    <div className="course_duration">
                        <p><b>DURATION</b> 3Year's</p>
                    </div>
                    <div className="course_elijibility">
                      <p> <b>Eligibility ⤵ </b> <br /> 10+2 From any recognized board</p>
                    </div>         
                </div>

                <div className="course_box">
                    <div className="course_name">
                       <h1>B.Com</h1>
                    </div>
                    <div className="course_duration">
                        <p><b>DURATION</b> 3Year's</p>
                    </div>
                    <div className="course_elijibility">
                      <p> <b>Eligibility ⤵ </b> <br /> 10+2 From any recognized board</p>
                    </div>         
                </div>

                <div className="course_box">
                    <div className="course_name">
                       <h1>B.Sc Bio</h1>
                    </div>
                    <div className="course_duration">
                        <p><b>DURATION</b> 3Year's</p>
                    </div>
                    <div className="course_elijibility">
                      <p> <b>Eligibility ⤵ </b> <br /> 10+2 From any recognized board</p>
                    </div>         
                </div>

                <div className="course_box">
                    <div className="course_name">
                       <h1>B.Sc Math</h1>
                    </div>
                    <div className="course_duration">
                        <p><b>DURATION</b> 3Year's</p>
                    </div>
                    <div className="course_elijibility">
                      <p> <b>Eligibility ⤵ </b> <br /> 10+2 From any recognized board</p>
                    </div>         
                </div>
              
            </div>
       </div>
    </>
  )
}

export default Courses
