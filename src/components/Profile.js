// Profile.js
import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import ProfileDropdown from './ProfileDropdown';

const Profile = () => {
  const [isDropdownVisible, setDropdownVisibility] = useState(false);
  const buttonRef = useRef(null);

  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    currency: 'ZAR',
  };

  const handleSignOut = () => {
    // sign-out logic
    console.log('User signed out');
  };

  const toggleDropdown = () => {
    setDropdownVisibility(!isDropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisibility(false);
  };

  return (
    <div className="profile-container">
      <button ref={buttonRef} onClick={toggleDropdown}>
        <FontAwesomeIcon icon={faUser} font-size="23" color="black" /> Profile
      </button>
      {isDropdownVisible && (
        <ProfileDropdown
          user={user}
          onSignOut={handleSignOut}
          onClose={closeDropdown}
          buttonRef={buttonRef}
        />
      )}
    </div>
  );
};

export default Profile;
