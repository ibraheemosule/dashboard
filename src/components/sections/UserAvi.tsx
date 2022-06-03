import userImage from '../../assets/images/user-image.png';

const UserAvi: React.FC = () => {
  return (
    <div className="user-avi">
      <img src={userImage} alt="user avi" />
      <h4>Hello ! Rusalba Ruiz</h4>
      <small>Welcome Back To Your Insurance Portal</small>
      <div>
        <p>
          Your Plan : <span>Free</span>
        </p>
        <button>
          Create New Plan <span>+</span>
        </button>
      </div>
    </div>
  );
};

export default UserAvi;
