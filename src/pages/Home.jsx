import { LandingPage } from "../componets/Index";
import Footer from "../componets/Footer/Footer";
import Banner from '../componets/Banner/Banner'
import {ShadeCardSection} from '../componets/ShadeSection'

const Home = () => {
    return ( <>
    
    <LandingPage>
    <Banner $imgUrl={`https://bit.ly/2OhbMHr`}/>
    <ShadeCardSection />
    </LandingPage>
    <Footer/>

    </> );
}
 
export default Home;