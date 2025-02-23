"use client"

import React, { useState, useCallback } from 'react';
import { Button, Textarea, Input, FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface Leader {
  name: string;
  email: string;
}

interface FormData {
  clubName: string;
  description: string;
  email: string;
  location: string;
  password: string;
  budget: number | ''; // Add budget field
  leaders: Leader[];
}

const ClubRegister: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    clubName: '',
    description: '',
    email: '',
    location: '',
    password: '',
    budget: '', // Initialize budget
    leaders: [{ name: '', email: '' }],
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

  const handleLeaderChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedLeaders = [...formData.leaders];
    updatedLeaders[index] = { ...updatedLeaders[index], [name]: value };
    setFormData((prevData) => ({
      ...prevData,
      leaders: updatedLeaders,
    }));
  };

  const addLeader = () => {
    setFormData((prevData) => ({
      ...prevData,
      leaders: [...prevData.leaders, { name: '', email: '' }],
    }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.clubName) newErrors.clubName = 'Club name is required';
    if (!formData.description) newErrors.description = 'Description is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.location) newErrors.location = 'Location is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.budget === '' || formData.budget < 0) newErrors.budget = 'Budget must be a positive number'; // Validate budget

    // Validate leaders
    formData.leaders.forEach((leader, index) => {
      if (!leader.name) newErrors[`leaderName${index}`] = 'Leader name is required';
      if (!leader.email) newErrors[`leaderEmail${index}`] = 'Leader email is required';
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      console.log('Form submitted:', formData);
      // Here you can handle the form submission, e.g., send data to an API
      setFormData({ clubName: '', description: '', email: '', location: '', password: '', budget: '', leaders: [{ name: '', email: '' }] }); // Reset form
      setErrors({}); // Clear errors
      setIsSubmitting(false);
    }
  }, [formData]);

  return (
    <div style={{ margin: 'auto', padding: '2rem', border: '1px solid #ccc', backgroundColor: '#ADD8E6'}}>
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
        <FormControl isInvalid={!!errors.budget} mt={4}>
          <FormLabel htmlFor="budget">Budget</FormLabel>
          <Input
            id="budget"
            type="number"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            aria-describedby="budget-error"
            maxWidth="400px"
          />
          <FormErrorMessage id="budget-error">{errors.budget}</FormErrorMessage>
        </FormControl>
        <h2>Club Leaders</h2>
        {formData.leaders.map((leader, index) => (
          <div key={index}>
            <FormControl isInvalid={!!errors[`leaderName${index}`]}>
              <FormLabel htmlFor={`leaderName${index}`}>Leader Name</FormLabel>
              <Input
                id={`leaderName${index}`}
                type="text"
                name="name"
                value={leader.name}
                onChange={(e) => handleLeaderChange(index, e)}
                aria-describedby={`leaderName${index}-error`}
                maxWidth="400px"
              />
              <FormErrorMessage id={`leaderName${index}-error`}>{errors[`leaderName${index}`]}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors[`leaderEmail${index}`]} mt={2}>
              <FormLabel htmlFor={`leaderEmail${index}`}>Leader Email</FormLabel>
              <Input
                id={`leaderEmail${index}`}
                type="email"
                name="email"
                value={leader.email}
                onChange={(e) => handleLeaderChange(index, e)}
                aria-describedby={`leaderEmail${index}-error`}
                maxWidth="400px"
              />
              <FormErrorMessage id={`leaderEmail${index}-error`}>{errors[`leaderEmail${index}`]}</FormErrorMessage>
            </FormControl>
          </div>
        ))}
        <Button onClick={addLeader} mt={4}>Add Another Leader</Button>
        <Button type="submit" isLoading={isSubmitting} mt={4}>Register Club</Button>
        <Link to='/'>
          <Button mt={4} variant="outline">Cancel</Button>
        </Link>
      </form>
    </div>
  );
};

export default ClubRegister;
