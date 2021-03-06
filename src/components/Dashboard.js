import React, { useContext, useState } from 'react';
import { Alert, Button, Card } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const Dashboard = () => {

    const [error, setError] = useState("");

    const { currentUser, logout } = useContext(AuthContext);

    const history = useHistory();

    const handleLogout = async () => {
        setError("")

        try {
            
            await logout();

            history.pushState('/login')

        } catch {
            setError('Failed to LogOut')
        }
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>Email:</strong> {currentUser.email}
                    <Link to="/update-profile" className="btn btn-primary w-100 mt-3" >Update Profile</Link>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogout}>Log Out</Button>
            </div>
        </>
    )
}
