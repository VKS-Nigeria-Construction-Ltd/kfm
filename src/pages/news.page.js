import { Container } from 'react-bootstrap';
import { Pageheader } from '../container/pageHeader.container'

export function NewsPage() {
    
    return (
        <>
         <Pageheader title="News" />
         <Container className="mt-4 mb-5">
            <h1>Latest News</h1>
            <p>No news at the moment</p>
         </Container>
         </>
    )
}
