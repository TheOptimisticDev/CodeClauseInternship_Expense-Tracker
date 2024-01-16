// ProfileDropdown.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const ProfileDropdown = ({ user, onSignOut, onClose, buttonRef }) => {
  return (
    <div className="profile-dropdown" style={{ zIndex: 2 }}>
      <h2>Profile</h2>
      <button className="back-button" onClick={onClose}><FontAwesomeIcon icon={faArrowLeft} onClick={onClose} font-size="30" color="black" /></button>
      <div className="profile-info">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Total Expenses:</strong> {user.totalExpenses} {user.currency}</p>
      </div>
      <button onClick={onSignOut}>
        <FontAwesomeIcon icon={faSignOutAlt} font-size="30" color="black" placeholder="Sign Out" />
      </button>
    </div>
  );
};

export default ProfileDropdown;
