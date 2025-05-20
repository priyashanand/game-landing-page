import React from 'react'
import Intro from '../casestudy/Intro'
import RecentWorks from '../casestudy/RecentWorks'
import Blog from '../casestudy/Blog'
import VideoSlider from '../casestudy/VideoSlider'

const CaseStudies:React.FC = () => {
  return (
    <main>
      <Intro/>
      <RecentWorks/>
      <Blog/>
      <VideoSlider/>
    </main>
  )
}

export default CaseStudies