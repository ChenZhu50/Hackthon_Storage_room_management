"use client"

import React, { useState, useCallback } from 'react';
import { Button, Textarea, Input, FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface FormData {
  clubName: string;
  description: string;
  email: string;
  location: string;
  password: string;
}

const ClubRegister: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    clubName: '',
    description: '',
    email: '',
    location: '',
    password: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    if (!formData.location) newErrors.location = 'Location is required';
    if (!formData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      console.log('Form submitted:', formData);
      // Here you can handle the form submission, e.g., send data to an API
      setFormData({ clubName: '', description: '', email: '', location: '', password: '' }); // Reset form
      setErrors({}); // Clear errors
      setIsSubmitting(false);
    }
  }, [formData]);

  return (
    <div style={{ margin: 'auto', padding: '2rem', border: '1px solid #ccc', backgroundColor: '#CCCCCC'}}>
      <h1>Club Registration</h1>
      <form onSubmit={handleSubmit}>
        <FormControl isInvalid={!!errors.clubName}>
          <FormLabel htmlFor="clubName">Club Name</FormLabel>
          <Input
            id="clubName"
            type="text"
            name="clubName"
            value={formData.clubName}
            onChange={handleChange}
            aria-describedby="clubName-error"
            maxWidth="400px"
          />
          <FormErrorMessage id="clubName-error">{errors.clubName}</FormErrorMessage>
        </FormControl> 
        <FormControl isInvalid={!!errors.description} mt={4}>
          <FormLabel htmlFor="description">Description</FormLabel>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            aria-describedby="description-error"
            maxWidth="400px"
          />
          <FormErrorMessage id="description-error">{errors.description}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.email} mt={4}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            aria-describedby="email-error"
            maxWidth="400px"
          />
          <FormErrorMessage id="email-error">{errors.email}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.location} mt={4}>
          <FormLabel htmlFor="location">Location</FormLabel>
          <Input
            id="location"
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            aria-describedby="location-error"
            maxWidth="400px"
          />
          <FormErrorMessage id="location-error">{errors.location}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.password} mt={4}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            aria-describedby="password-error"
            maxWidth="400px"
          />
          <FormErrorMessage id="password-error">{errors.password}</FormErrorMessage>
        </FormControl>
        <Button type="submit" isLoading={isSubmitting} mt={4}>Register Club</Button>
        <Link to='/'>
          <Button mt={4} variant="outline">Go Back</Button>
        </Link>
      </form>
    </div>
  );
};

export default ClubRegister;