import { Container } from 'react-bootstrap';
import { Pageheader } from '../container/pageHeader.container';
import { Helmet } from 'react-helmet';
import { Interview } from '../news/interview';
import { VksContributions } from '../news/vks-contributions';
import { AkpabioVisit } from '../news/akapbio';

export function NewsPage() {
    <Helmet>
      <title>News | KINGS FLOUR MILL – HAPPINESS BEGINS NOW</title>
    </Helmet>
    
    return (
        <>
         <Pageheader title="News" />
         <Container className="mt-4 mb-5">
            <Interview />
            <AkpabioVisit />
            <VksContributions />
         </Container>
         </>
    )
}
