import Intro from '../home/Intro'
import HeroSection from '../home/HeroSection'
import Visuals from '../home/Visuals'
import Ideas from '../home/Ideas'
import TestimonialSection from '../home/TestimonialSection'
import NextLevel from '../home/NextLevel'
import Slider from '../home/Slider'

const Home = () => {
  return (
    <main >
      {/* <div className='w-[1400px] h-96 bg-black'></div> */}
      {/* <div className='bg-yellow-200 h-[100px] w-[1400px]'></div> */}
      <Intro/>
      <HeroSection/>
      <Visuals/>
      <div>
        
      </div>
      <Slider/>
      <Ideas/>
      <TestimonialSection/>
      <NextLevel/>
    </main>
  )
}

export default Home;
