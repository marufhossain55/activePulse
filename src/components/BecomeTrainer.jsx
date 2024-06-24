import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import useAxiosPublic from '../hooks/useAxiosPublic';

function BecomeTrainer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experience: '',
    expertise: '',
  });

  const axiosPublic = useAxiosPublic();

  const mutation = useMutation({
    mutationFn: (formData) => {
      return axiosPublic.post('/api/become-trainer', formData);
    },
    onSuccess: (data) => {
      console.log('Application submitted:', data);
      // Handle success (e.g., show a success message, redirect)
    },
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Become a Trainer</h1>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        name="experience"
        type="number"
        value={formData.experience}
        onChange={handleChange}
        placeholder="Years of Experience"
        required
      />
      <textarea
        name="expertise"
        value={formData.expertise}
        onChange={handleChange}
        placeholder="Your Expertise"
        required
      />
      <button type="submit" disabled={mutation.isLoading}>
        {mutation.isLoading ? 'Submitting...' : 'Submit Application'}
      </button>
      {mutation.isError && (
        <div>An error occurred: {mutation.error.message}</div>
      )}
    </form>
  );
}

export default BecomeTrainer;
