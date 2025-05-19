import Intro from '../games/Intro'
import GameLogic from '../games/GameLogic';
import Character from '../games/Character';
import StoryDesign from '../games/StoryDesign';
import ItsTime from '../games/ItsTime';

const Games = () => {
  return (
    <main >
      {/* <div className='w-[1400px] h-96 bg-black'></div> */}
      <Intro/>
      <GameLogic/>
      <Character/>
      <StoryDesign/>
      <ItsTime/>
    </main>
  )
}

export default Games;
