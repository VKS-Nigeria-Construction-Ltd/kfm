import MainNav from '../components/mainNav.component';
import Slider from '../components/slider.component';

export function HeaderContainer() {
    

    return (
        <>
        <MainNav />
        {/* TODO: Fix slide text on mobile */}
        <Slider />
        <div className="top_bar sm"></div>  
        </>
    )
}
