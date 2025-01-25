import { LandingPage } from "../componets/Index";
import Footer from "../componets/Footer/Footer";
import Banner from '../componets/Banner/Banner'
import {ShadeCardSection} from '../componets/ShadeSection'
import IntroSection from "../componets/IntroSec/IntroSection";



const Home = () => {
    return ( <>
    
    <LandingPage>
    <Banner $imgUrl={`https://bit.ly/2OhbMHr`}/>
    <ShadeCardSection />
    <IntroSection configure={1}></IntroSection>    
    <IntroSection configure={2}></IntroSection>

    </LandingPage>
    <Footer/>

    </> );
}
 
export default Home;