import './App.scss';
import { AboutSection } from './components/aboutSection.component';
import { Mainsection } from './components/mainSection.component';
import { HeaderContainer } from './container/header.container';

function App() {
  return (
    <div>
      <HeaderContainer />
      <Mainsection />
      <AboutSection />
    </div>
  );
}

export default App;
