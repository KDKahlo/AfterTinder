import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../contexts/AuthContext';

function Profile() {
    const { user } = useContext(AuthContext); // Confirm if user info is stored in AuthContext
    const [userDetails, setUserDetails] = useState(null);
    const [inviteCode, setInviteCode] = useState("");
    const [partnerCode, setPartnerCode] = useState("");

    useEffect(() => {
        // fetchUserDetails();
        generateInviteCode();
    }, []);

    // const fetchUserDetails = async () => {
    //     try {
    //         const response = await axios.get('Update URL'); // Adjust URL or this should come from context?
    //         setUserDetails(response.data);
    //     } catch (error) {
    //         console.error('Failed to fetch user details', error);
    //     }
    // };

    const generateInviteCode = () => {
        // Simple random code generator, consider a more robust approach or backend generation
        setInviteCode(Math.random().toString(36).substring(2, 8).toUpperCase());
    };

    const handleCopyCode = () => {
        navigator.clipboard.writeText(inviteCode);
        alert('Code copied to clipboard!');
    };

    const handlePartnerCodeSubmit = async () => {
        try {
            const response = await axios.post('/api/relationships', { code: partnerCode });
            alert('Partner added successfully!');
        } catch (error) {
            alert('Failed to add partner');
        }
    };

    return (
        <div>
            <h1>Profile</h1>
            {userDetails && (
                <div>
                    <img src="src/assets/TestPic.jpg" alt="Profile" />
                    <p>{userDetails.name}</p>
                </div>
            )}
            <div>
                <p>My code: {inviteCode}</p>
                <button onClick={handleCopyCode}>Copy Code</button>
            </div>
            <div>
                <input type="text" value={partnerCode} onChange={(e) => setPartnerCode(e.target.value)} placeholder="Enter partner's code" />
                <button onClick={handlePartnerCodeSubmit}>Enter Partner's Code</button>
            </div>
            <button onClick={() => { /* Navigate to Quiz Results */ }}>My Quiz</button>
            <button onClick={() => { /* Navigate to Manage Relationships */ }}>My Relationships</button>
        </div>
    );
}

export default Profile;
