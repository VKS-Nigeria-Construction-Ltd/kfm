import './App.scss';
import Switch from 'react-bootstrap/esm/Switch';
import { Route } from 'react-router';
import { HomePage } from './pages/home.page';
import { AboutPage } from './pages/about.page';
import { ServicesPage } from './pages/services.page';
import { NewsPage } from './pages/news.page';
import { ContactPage } from './pages/contact.page';
import Footer from './components/footer.component';
import { Copyright } from './components/copyright.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/services" component={ServicesPage} />
        <Route exact path="/news" component={NewsPage} />
        <Route exact path="/contact" component={ContactPage} />
      </Switch>
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
