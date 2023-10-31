import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled,{keyframes} from 'styled-components';
 
const colorAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;


const CenteredContainer = styled.div`
display: flex;
height: 90vh;
`;

const ImageContainer = styled.div`
flex: 1;
background: url('https://epe.brightspotcdn.com/dims4/default/27b1e43/2147483647/strip/true/crop/2838x1926+81+0/resize/840x570!/quality/90/?url=https%3A%2F%2Fepe-brightspot.s3.us-east-1.amazonaws.com%2Fa2%2F59%2F1338688947809cff88b4c7ce7c7a%2Fai-laptop-102023-1473211827.jpg') center/cover no-repeat; /* Replace with your image URL */
display: flex;
align-items: center;
justify-content: center;
`;

const FormContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, #00427F, #00284F, #00427F, #00284F);
  background-size: 400% 400%;
  animation: ${colorAnimation} 15s infinite;
`;


const FormWrapper = styled.div`
max-width: 400px;
width: 100%;
padding: 20px;
background-color:  #f6e9d7;
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
text-align: center;
color: #333;
`;

const Input = styled.input`
width: 90%;
padding: 10px;
margin-bottom: 10px;
border: 1px solid #ddd;
border-radius: 3px;
box-sizing: border-box;
`;

const Button = styled.button`
width: 100%;
padding: 12px;
background-color: #00427F; /* Pinkish tone */
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
    <CenteredContainer> <ImageContainer>
    {/* Image goes here */}
  </ImageContainer>
      <FormContainer>
      <FormWrapper>
        <Title>Admin Login</Title>
        <div>
          <Icon className="fas fa-user" />
          <Input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <Icon className="fas fa-lock" />
          <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
        <Button onClick={handleLogin}>
          <Icon className="fas fa-sign-in-alt" />
          Login
        </Button>
        </div>
        </FormWrapper>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </FormContainer>
    </CenteredContainer>
  );
};

export default Admin;
