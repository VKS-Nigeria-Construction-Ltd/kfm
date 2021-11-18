import './App.scss';
import { AboutSection } from './components/aboutSection.component';
import { HealthSection } from './components/healthSection.component';
import { Mainsection } from './components/mainSection.component';
import { HeaderContainer } from './container/header.container';
import Footer from './components/footer.component';
import { Copyright } from './components/copyright.component';

function App() {
  return (
    <div>
      <HeaderContainer />
      <Mainsection />
      <AboutSection />
      <div className="extra_space"></div>
      <HealthSection />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
