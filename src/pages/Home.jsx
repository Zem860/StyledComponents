import { LandingPage } from "../componets/Index";
import Footer from "../componets/Footer/Footer";
import Banner from '../componets/Banner/Banner'

const Home = () => {
    return ( <>
    
    <LandingPage>
    <Banner $imgUrl={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE_RSg0nzWN3fMgt0aSja5qmLzts9lDm_q-Q&s`}/>
    </LandingPage>

    <Footer/>

    </> );
}
 
export default Home;