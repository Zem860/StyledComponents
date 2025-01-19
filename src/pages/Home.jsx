import { LandingPage } from "../componets/Index";
import Footer from "../componets/Footer/Footer";
import Banner from "../componets/Banner/banner";
const Home = () => {
    return ( <>
    
    <LandingPage>
    <Banner $imgUrl={`https://images.unsplash.com/photo-1473256599800-b48c7c88cd7e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ae0d68ab0db4ee79bdce92722b31112b&auto=format&fit=crop&w=2725&q=80`}/>
    </LandingPage>
    <Footer/>


    
    </> );
}
 
export default Home;