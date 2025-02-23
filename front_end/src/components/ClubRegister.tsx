"use client"

import React, { useState } from 'react';
import { Button, Textarea, Input } from '@chakra-ui/react';

interface FormData {
  clubName: string;
  description: string;
}

const ClubRegister: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    clubName: '',
    description: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.clubName) newErrors.clubName = 'Club name is required';
    if (!formData.description) newErrors.description = 'Description is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      // Here you can handle the form submission, e.g., send data to an API
      setFormData({ clubName: '', description: '' }); // Reset form
      setErrors({}); // Clear errors
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '2rem', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#203032'}}>
      <h1>Club Registration</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Club Name:
            <Input
              type="text"
              name="clubName"
              value={formData.clubName}
              onChange={handleChange}
            />
          </label>
          {errors.clubName && <p style={{ color: 'red' }}>{errors.clubName}</p>}
        </div>
        <div>
          <label>
            Description:
            <Textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </label>
          {errors.description && <p style={{ color: 'red' }}>{errors.description}</p>}
        </div>
        <Button type="submit">Register Club</Button>
      </form>
    </div>
  );
};

export default ClubRegister;
