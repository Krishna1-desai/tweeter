

import './Profilemain.css'

function Profilemain(){
    return(
        <div className="Profilemain">
            <div className="cover">
                <a href='#'>
                    <img className='profile-img' src='https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg' />
                </a>
               
            </div>
            <div className='follow-btn-container fw-bold float-end'>

                <button className='follow-btn'>Follow</button>
            </div>
        </div>
        
    )
}

export default Profilemain;