import './App.scss';
import { Switch, Route, Redirect } from "react-router-dom";
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
        <Route path="*" render={() => <Redirect to="/" />} />
      </Switch>
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
