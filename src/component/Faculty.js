import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';

// ... (existing imports)

const colorAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(45deg, #D8BFD8, #9370DB, #D8BFD8, #9370DB);
  background-size: 400% 400%;
  animation: ${colorAnimation} 15s infinite;
`;

// ... (rest of the code remains unchanged)




const FormContainer = styled.div`
  max-width: 400px;
  width: 100%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fce8ec; /* Light pink pastel background color */
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
  background-color: #9370DB;  /* Pink button color */
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const Icon = styled.i`
  margin-right: 8px;
`;
// ... (existing imports)

const Faculty = () => {
  const [email, setEmail] = useState('');
  const [fid, setFid] = useState('');
  const navigate = useNavigate();

// Inside handleLogin function in Faculty.js
const handleLogin = async () => {
  try {
    const response = await axios.post('http://localhost:8081/faculty-login', {
      email: email,
      fid: fid,
    });

    if (response.data.success) {
      const facultyId = response.data.facultyId;
      navigate(`/fac?userId=${facultyId}`);
    } else {
      alert('Wrong credentials. Please try again.');
    }
  } catch (error) {
    console.error('Error during faculty login:', error);
    alert('Error during faculty login. Please try again.');
  }
};





  return (
    <Container>
      <FormContainer>
        <Title>Faculty Login</Title>
        <div>
          <Icon className="fas fa-user" />
          <Input type="text" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <Icon className="fas fa-lock" />
          <Input type="password" placeholder="Password" value={fid} onChange={(e) => setFid(e.target.value)} />
        </div>
        <Button onClick={handleLogin}>
          <Icon className="fas fa-sign-in-alt" />
          Login
        </Button>
      </FormContainer>
    </Container>
  );
};

export default Faculty;
