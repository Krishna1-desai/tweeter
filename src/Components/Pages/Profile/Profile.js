
// import Feed from './Feed/Feed';
// import Feed from '../Feed/Feed';
import './Profile.css'
import Homeoptions from '../../Homeoptions/Homeoptions';
// import Homeoptions from './Homeoptions/Homeoptions';
import LoginOptions from '../../LoginOptions/LoginOptions';
import Profilemain from '../../Profilemain/Profilemain';

function Profile(){
    return(
        <div className='homeContainer'>

            <div className="leftContainer">
                <Homeoptions/>
            </div>
            <div className="centerContainer">
                <Profilemain/>
               </div>
            <div className="rightContainer">
                <LoginOptions/>
            </div>

        </div>
    )
}

export default Profile;