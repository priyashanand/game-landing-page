import React from 'react'
import Intro from '../casestudy/Intro'
import RecentWorks from '../casestudy/RecentWorks'
// import Blog from '../casestudy/Blog'
// import VideoSlider from '../casestudy/VideoSlider'
import Ready from '../casestudy/Ready'

const CaseStudies:React.FC = () => {
  return (
    <main>
      <Intro/>
      <RecentWorks/>
      {/* <Blog/>
      <VideoSlider/> */}
      <Ready/>
    </main>
  )
}

export default CaseStudies