import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { current, resetPasswordUser } from "../../redux/Actions/UserActions";
import { useNavigate } from "react-router-dom";
import "./Profile.scss";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Accessing user from the Redux store
  const { user, load, error } = useSelector((state) => state.user); // user will be fetched from the Redux store

  const [username, setUsername] = useState(user?.username || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [photo, setPhoto] = useState(user?.photo || "");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPasswordReset, setShowPasswordReset] = useState(false);

  useEffect(() => {
    if (!user && !load) {
      // Fetch current user if not already fetched
      dispatch(current());
    } else if (user) {
      setUsername(user.username);
      setEmail(user.email);
      setPhone(user.phone);
      setPhoto(user.photo);
    }
  }, [user, load, dispatch]);

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    dispatch(resetPasswordUser(user._id, newPassword)); // Reset password using the current user's ID
  };

  return (
    <div className="user-profile-container">
      <div className="user-profile">
        <h1>Profile</h1>
        <div className="profile-image">
          {photo ? (
            <img src={photo} alt="User profile" className="profile-photo" />
          ) : (
            <div className="default-avatar">No Image</div>
          )}
        </div>
        <div className="profile-details">
          <div className="form-group">
            <label>Username</label>
            <p>{username}</p>
          </div>
          <div className="form-group">
            <label>Email</label>
            <p>{email}</p>
          </div>
          <div className="form-group">
            <label>Phone</label>
            <p>{phone}</p>
          </div>
        </div>

        <button
          className="toggle-password-reset"
          onClick={() => setShowPasswordReset(!showPasswordReset)}
        >
          {showPasswordReset ? "Cancel Reset" : "Reset Password"}
        </button>

        {showPasswordReset && (
          <div className="password-reset">
            <h2>Reset Password</h2>
            <form onSubmit={handleResetPassword}>
              <div className="form-group">
                <label>Current Password</label>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>New Password</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Confirm New Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <button type="submit">Reset Password</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
