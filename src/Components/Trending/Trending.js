

import './Trending.css'

//Props is an object which contains all attributes passed to the component..

function Trending(props){
    return(
       <div className='Trending_main'>

        <p className="header_small">{props.data.header}</p>
        <p className="text">{props.data.text}</p>
        <p className="header_small">{props.data.tweetCount}</p>

       </div>
    )
}
export default Trending;