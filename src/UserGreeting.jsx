import PropTypes from 'prop-types'
function UserGreeting(props){

    const welcomeMessage =<h2>Welcome {props.username}</h2>

    const prompt =   <h2>Please login to continue</h2>

    return( props.isLoggedIn ? welcomeMessage : prompt 
                              
    );

  
}


UserGreeting.propTypes = {
    username: PropTypes.string,
    isLoggedIn: PropTypes.bool,
};

UserGreeting.defaultProps = {
    username: "Guest",
    isLoggedIn: false,
};

export default UserGreeting;
