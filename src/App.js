import './App.scss';
import MainNav from './components/mainNav.component';
import Slider from './components/slider.component';

function App() {
  return (
    <div>
      <MainNav />
      {/* TODO: Fix slide text on mobile */}
      <Slider />
    </div>
  );
}

export default App;
