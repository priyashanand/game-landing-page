import { useParams } from 'react-router-dom';
import CasePageBody from '../casepage/CasePageBody';
import Ready from '../casestudy/Ready';

const CaseStudies: React.FC = () => {
  const { casename } = useParams<{ casename: 'revolvingGames' | 'netsol' | 'metaende' | 'cerwinvega' }>();

  return (
    <main>
      <div>
        {casename ? <CasePageBody casename={casename} /> : <p>Case study not found.</p>}
        <Ready/>
      </div>
    </main>
  );
};

export default CaseStudies;
