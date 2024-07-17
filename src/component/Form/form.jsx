import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Select,
  useToast,
} from '@chakra-ui/react';
import { ref, push } from 'firebase/database';
import { db } from './firebaseConfig';

const ApplyNowModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    gender: '',
    email: '',
    city: '',
    education: '',
    experience: '',
    preferredMode: '', // Added preferredMode field
  });
  const [errors, setErrors] = useState({});
  const toast = useToast();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.contact) {
      errors.contact = "Contact is required";
    } else if (!/^\d{10}$/.test(formData.contact)) {
      errors.contact = "Contact number is invalid. It should be 10 digits";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.city) errors.city = "City is required";
    if (!formData.education) errors.education = "Education is required";
    if (!formData.experience) errors.experience = "Experience is required";
    if (!formData.gender) errors.gender = "Gender is required";
    if (!formData.preferredMode) errors.preferredMode = "Preferred Mode is required"; // Added validation for preferredMode
    return errors;
  };

  const handleSubmit = async () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    try {
      await push(ref(db, 'applications'), formData);
      toast({
        title: 'Application Submitted.',
        description: 'Your application has been submitted successfully.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      handleClose();
    } catch (e) {
      toast({
        title: 'Submission Failed.',
        description: 'There was an error submitting your application. Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleClose = () => {
    setFormData({
      name: '',
      contact: '',
      gender: '',
      email: '',
      city: '',
      education: '',
      experience: '',
      preferredMode: '', // Reset preferredMode field
    });
    setErrors({});
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Apply Now</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl id="name" isInvalid={errors.name}>
            <FormLabel>Name</FormLabel>
            <Input type="text" value={formData.name} onChange={handleChange} />
            {errors.name && <FormErrorMessage>{errors.name}</FormErrorMessage>}
          </FormControl>
          <FormControl id="contact" mt={4} isInvalid={errors.contact}>
            <FormLabel>Contact</FormLabel>
            <Input type="tel" value={formData.contact} onChange={handleChange} />
            {errors.contact && <FormErrorMessage>{errors.contact}</FormErrorMessage>}
          </FormControl>
          <FormControl id="gender" mt={4} isInvalid={errors.gender}>
            <FormLabel>Gender</FormLabel>
            <Select placeholder="Select gender" value={formData.gender} onChange={handleChange}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Select>
            {errors.gender && <FormErrorMessage>{errors.gender}</FormErrorMessage>}
          </FormControl>
          <FormControl id="email" mt={4} isInvalid={errors.email}>
            <FormLabel>Email</FormLabel>
            <Input type="email" value={formData.email} onChange={handleChange} />
            {errors.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
          </FormControl>
          <FormControl id="city" mt={4} isInvalid={errors.city}>
            <FormLabel>City</FormLabel>
            <Input type="text" value={formData.city} onChange={handleChange} />
            {errors.city && <FormErrorMessage>{errors.city}</FormErrorMessage>}
          </FormControl>
          <FormControl id="education" mt={4} isInvalid={errors.education}>
            <FormLabel>Education</FormLabel>
            <Input type="text" value={formData.education} onChange={handleChange} />
            {errors.education && <FormErrorMessage>{errors.education}</FormErrorMessage>}
          </FormControl>
          <FormControl id="experience" mt={4} isInvalid={errors.experience}>
            <FormLabel>Fresher/Experienced</FormLabel>
            <Select placeholder="Select option" value={formData.experience} onChange={handleChange}>
              <option value="fresher">Fresher</option>
              <option value="experienced">Experienced</option>
            </Select>
            {errors.experience && <FormErrorMessage>{errors.experience}</FormErrorMessage>}
          </FormControl>
          <FormControl id="preferredMode" mt={4} isInvalid={errors.preferredMode}> {/* Added preferredMode field */}
            <FormLabel>Preferred Mode</FormLabel>
            <Select placeholder="Select mode" value={formData.preferredMode} onChange={handleChange}>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </Select>
            {errors.preferredMode && <FormErrorMessage>{errors.preferredMode}</FormErrorMessage>}
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
            Submit
          </Button>
          <Button variant="ghost" onClick={handleClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ApplyNowModal;
