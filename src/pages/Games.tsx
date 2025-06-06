import Intro from '../games/Intro'
import GameLogic from '../games/GameLogic';
import Character from '../games/Character';
import StoryDesign from '../games/StoryDesign';
import ItsTime from '../games/ItsTime';
import Slider from '../home/Slider';

const Games = () => {
  return (
    <main >
      {/* <div className='w-[1400px] h-96 bg-black'></div> */}
      <Intro/>
      <Character/>
      <GameLogic/>
      <Slider/>
      <StoryDesign/>
      <ItsTime/>
    </main>
  )
}

export default Games;
