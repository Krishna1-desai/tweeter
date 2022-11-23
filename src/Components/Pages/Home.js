
// import Feed from './Feed/Feed';
import Feed from '../Feed/Feed';
import './Home.css'
import Homeoptions from '../Homeoptions/Homeoptions';
// import Homeoptions from './Homeoptions/Homeoptions';
import LoginOptions from '../LoginOptions/LoginOptions';

function Home(){
    return(
        <div className='homeContainer'>

            <div className="leftContainer">
                <Homeoptions/>
            </div>
            <div className="centerContainer">
                <Feed/></div>
            <div className="rightContainer">
                <LoginOptions/>
            </div>

        </div>
    )
}

export default Home;