import MainNav from '../components/mainNav.component';
import Slider from '../components/slider.component';

export function HeaderContainer() {
    

    return (
        <>
        <div className="top_bar"></div>
        <MainNav />
        <Slider />
        <div className="top_bar sm"></div>  
        </>
    )
}
