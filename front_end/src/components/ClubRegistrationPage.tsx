"use client"

import React, { useState, useCallback, useEffect } from 'react';
import { Button, Textarea, Input, FormControl, FormLabel, FormErrorMessage, Select } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import clubBg from '../assets/club.jpg';

interface FormData {
  clubName: string;
  description: string;
  email: string;
  university: string;
  password: string;
  budget: number | '';
}

interface University {
  _id: string;
  name: string;
}

const ClubRegister: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    clubName: '',
    description: '',
    email: '',
    university: '',
    password: '',
    budget: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [universities, setUniversities] = useState<University[]>([]);
  const navigate = useNavigate();

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.clubName) newErrors.clubName = 'Club name is required';
    if (!formData.description) newErrors.description = 'Description is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.university) newErrors.university = 'University is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.budget === '' || formData.budget < 0) newErrors.budget = 'Budget must be a positive number';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      try {
        const response = await fetch('http://localhost:8000/clubs/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.clubName,
            clubEmail: formData.email,
            password: formData.password,
            school: formData.university,
          }),
        });

        if (response.ok) {
          alert('Registration successful!');
          navigate('/login');
        } else {
          const data = await response.json();
          alert(data.error || 'Registration failed');
        }
      } catch (error) {
        alert('Registration failed, please check your input');
      } finally {
        setIsSubmitting(false);
      }
    }
  }, [formData, validate, navigate]);

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const response = await fetch('http://localhost:8000/schools');
        if (response.ok) {
          const data = await response.json();
          console.log('Fetched universities:', data);
          setUniversities(data);
        } else {
          console.error('Failed to fetch universities');
        }
      } catch (error) {
        console.error('Error fetching universities:', error);
      }
    };

    fetchUniversities();
  }, []);

  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: `url(${clubBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }} />
      
      <div style={{
        backgroundColor: 'white',
        padding: '2.5rem',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '1000px',
        margin: '20px',
        position: 'relative',
        zIndex: 1
      }}>
        <h1 style={{
          fontSize: '28px',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '32px',
          color: '#1a365d'
        }}>Club Registration</h1>
        
        <form onSubmit={handleSubmit}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '24px'
          }}>
            <div>
              <FormControl isInvalid={!!errors.clubName} mb={4}>
                <FormLabel htmlFor="clubName">Club Name</FormLabel>
                <Input
                  id="clubName"
                  name="clubName"
                  value={formData.clubName}
                  onChange={handleChange}
                  bg="white"
                  borderColor="gray.300"
                  _hover={{ borderColor: 'gray.400' }}
                />
                <FormErrorMessage>{errors.clubName}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.email} mb={4}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.university} mb={4}>
                <FormLabel htmlFor="university">University</FormLabel>
                <Select
                  id="university"
                  name="university"
                  value={formData.university}
                  onChange={handleChange}
                >
                  <option value="">Select University</option>
                  {universities.map((university) => (
                    <option key={university._id} value={university._id}>
                      {university.name}
                    </option>
                  ))}
                </Select>
                <FormErrorMessage>{errors.university}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.password} mb={4}>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.budget} mb={4}>
                <FormLabel htmlFor="budget">Budget ($)</FormLabel>
                <Input
                  id="budget"
                  type="number"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                />
                <FormErrorMessage>{errors.budget}</FormErrorMessage>
              </FormControl>
            </div>

            <div>
              <FormControl isInvalid={!!errors.description} mb={4}>
                <FormLabel htmlFor="description">Club Description</FormLabel>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  height="300px"
                  placeholder="Please describe your club in detail..."
                  resize="vertical"
                  fontSize="md"
                  p={3}
                />
                <FormErrorMessage>{errors.description}</FormErrorMessage>
              </FormControl>
            </div>
          </div>

          <div style={{ 
            marginTop: '32px',
            display: 'flex',
            gap: '16px',
            justifyContent: 'center'
          }}>
            <Button 
              type="submit" 
              isLoading={isSubmitting} 
              width="200px"
              colorScheme="blue"
            >
              Register Club
            </Button>
            <Link to='/'>
              <Button 
                variant="outline" 
                width="200px"
                colorScheme="blue"
              >
                Cancel
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClubRegister;
