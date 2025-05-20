import { useParams } from 'react-router-dom';
import CasePageBody from '../casepage/CasePageBody';

const CaseStudies: React.FC = () => {
  const { casename } = useParams<{ casename: 'revolvingGames' | 'netsol' | 'metaende' | 'cerwinvega' }>();

  return (
    <main>
      <div>
        {casename ? <CasePageBody casename={casename} /> : <p>Case study not found.</p>}
      </div>
    </main>
  );
};

export default CaseStudies;
