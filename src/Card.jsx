import profilePic from './assets/mouse.jpg'

function Card(){
    return(

       <div className="card">
        <img className="card-image" src={profilePic} alt="profile_picture"></img>
        <h3 className='card-title'>Liam</h3>
        <p className='card-text'>I am a Computer Science Student</p>
       </div>
    );

}

export default Card