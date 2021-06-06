import { makeStyles } from '@material-ui/core'
import React from 'react'

import {FaSuitcase} from 'react-icons/fa'
import './style.css'
/*
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";
*/
import WorkIcon from './work.svg'
import SchoolIcon from './school.svg'


import timelineElements from './timelineElements'; 
import {VerticalTimeline,
     VerticalTimelineElement} 
     from 'react-vertical-timeline-component'

import 'react-vertical-timeline-component/style.min.css'

const useStyles= makeStyles(theme =>({
    name :{
        display: 'flex',
        justifyContent: 'center',
        alignItems : 'flex-start',
        opacity: ".7",
        fontSize: '20px',
        fontWeight :'normal',
        marginTop: '-100px'
        
       },
       line: {
           marginTop: '50px'
       }
}))
let workIconStyles = { background: '#2196f3'}
let schoolIconStyles = { background: '#f9c74f'}


function Works() {
    const classes = useStyles();
    return (
        <div>
            
         <div className={classes.name}>
                 <h2 > <FaSuitcase/> Work Experience</h2>
         </div>

                  <VerticalTimeline className={classes.line}>
                      {
                          timelineElements.map((element) => {
                            let isWorkIcon = element.icon ==='work';
                            let showButton =
                                element.buttonText !== undefined &&
                                element.buttonText !== null &&
                                element.buttonText !== "";
                              return (
                                  <VerticalTimelineElement
                                    key={element.key}
                                     date={element.date}
                                     dateClassName= 'date'
                                     iconStyle ={isWorkIcon ? workIconStyles : schoolIconStyles}
                                   //  icon={isWorkIcon ? <WorkIcon/> : <SchoolIcon/> }
                                   >


                                   <h3 className="vertical-timeline-element-title">
                                         {element.title}
                                    </h3> 
                                    <h5 className="vertical-timeline-element-subtitle">
                                        {element.location}
                                    </h5>
                                    <p id="description">{element.description}</p>
                                        {showButton && (
                                            <a
                                            className={`button ${
                                                isWorkIcon ? "workButton" : "schoolButton"
                                            }`}

                                            href="/"
                                            >
                                            {element.buttonText}
                                            </a>
                                        )}

                                  </VerticalTimelineElement>
                              )
                          })
                      }
                  </VerticalTimeline>
    
            
                
        </div>
    )
}

export default Works
