import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const colorAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  background: linear-gradient(45deg, #FF6B6B, #FF8E53, #FFC97E, #FF6B6B);
  background-size: 400% 400%;
  animation: ${colorAnimation} 15s infinite;
`;

const FormContainer = styled.div`
  max-width: 400px;
  width: 100%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
`;

const Input = styled.input`
  width: 90%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 3px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #FF6B6B; /* Pinkish tone */
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const Icon = styled.i`
  margin-right: 8px;
`;

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  margin-top: 10px;
`;

const Admin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'admin' && password === '123') {
      navigate('/adm');
    } else {
      setError('Enter valid username and password');
    }
  };

  return (
    <CenteredContainer>
      <FormContainer>
        <Title>Admin Login</Title>
        <div>
          <Icon className="fas fa-user" />
          <Input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <Icon className="fas fa-lock" />
          <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <Button onClick={handleLogin}>
          <Icon className="fas fa-sign-in-alt" />
          Login
        </Button>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </FormContainer>
    </CenteredContainer>
  );
};

export default Admin;
