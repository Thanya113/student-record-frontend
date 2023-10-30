import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';

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
  background: linear-gradient(45deg, #6A5ACD, #87CEEB, #6A5ACD);
  background-size: 400% 400%;
  animation: ${colorAnimation} 15s infinite;
  font-family: 'Poppins', sans-serif;
`;

const FormContainer = styled.div`
  max-width: 400px; /* Increase the max-width */
  width: 100%;
  padding: 30px; /* Increase padding for more space */
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;



const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const Input = styled.input`
  width: 72%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 3px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #3498db; /* Blue button color */
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const Icon = styled.i`
  margin-right: 8px;
`;

const Student = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    roll: '',
    name: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/login', formData);

      if (response.data.success) {
        const userId = response.data.userId;

        const studDetailsResponse = await axios.get(`/stud?userId=${userId}`);

        if (studDetailsResponse.data.success) {
          navigate(`/stud?userId=${userId}`);
        } else {
          alert('Student not found');
        }
      } else {
        alert('Wrong login credentials');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <Container>
      <FormContainer>
        <Title>Student Login</Title>
        <form onSubmit={handleLogin}>
          <InputContainer>
            
              <Icon className="fas fa-id-card" />
              Roll No:
            
            <Input
              type="text"
              id="roll"
              name="roll"
              value={formData.roll}
              onChange={handleInputChange}
            />
          </InputContainer>
          <InputContainer>
            
              <Icon className="fas fa-user" />
              Name:
            
            <Input
              type="text"
              id="name"
              name="name" 
              value={formData.name}
              onChange={handleInputChange}
            />
          </InputContainer>
          <Button type="submit">
            <Icon className="fas fa-sign-in-alt" />
            Login
          </Button>
        </form>
      </FormContainer>
    </Container>
  );
};

export default Student;
