import React from 'react';
import myResume from '../assets/documents/myresume.pdf';
import '../styles/Resume.css';
function Resume() {
  return (
    <div className='resume-container'>
      <h1 className="page-title">My Resume</h1>
      <a href={myResume} download="myresume.pdf" className="download-button">
        Download Resume
      </a>
      <div className="resume-viewer">
        <embed src={myResume} type="application/pdf" width="100%" height="800px" />
      </div>
    </div>
  )
}

export default Resume