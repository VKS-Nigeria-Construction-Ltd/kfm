import { Container } from 'react-bootstrap';
import { Pageheader } from '../container/pageHeader.container'

export function ContactPage() {
    
    return (
        <>
         <Pageheader title="Contact Us" />
         <Container className="mt-4 mb-5">
            <h1>Contact Us</h1>
            <p>The company was established for the production of superior quality wheat based flour and other Agro allied products. The initial installed production capacity of the mill is 500 metric tons per day.</p>
         </Container>
         </>
    )
}
