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
  useToast,
} from '@chakra-ui/react';
import { ref, push } from 'firebase/database';
import { db } from './firebaseConfig';

const ApplyNowModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
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
    if (!formData.fname) errors.fname = "First Name is required";
    if (!formData.lname) errors.lname = "Last Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.phone) {
      errors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Phone number is invalid. It should be 10 digits";
    }
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
      handleClose(); // Call the updated handleClose
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
      fname: '',
      lname: '',
      email: '',
      phone: '',
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
          <FormControl id="fname" isInvalid={errors.fname}>
            <FormLabel>First Name</FormLabel>
            <Input type="text" value={formData.fname} onChange={handleChange} />
            {errors.fname && <FormErrorMessage>{errors.fname}</FormErrorMessage>}
          </FormControl>
          <FormControl id="lname" isInvalid={errors.lname}>
            <FormLabel>Last Name</FormLabel>
            <Input type="text" value={formData.lname} onChange={handleChange} />
            {errors.lname && <FormErrorMessage>{errors.lname}</FormErrorMessage>}
          </FormControl>
          <FormControl id="email" mt={4} isInvalid={errors.email}>
            <FormLabel>Email</FormLabel>
            <Input type="email" value={formData.email} onChange={handleChange} />
            {errors.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
          </FormControl>
          <FormControl id="phone" mt={4} isInvalid={errors.phone}>
            <FormLabel>Phone</FormLabel>
            <Input type="tel" value={formData.phone} onChange={handleChange} />
            {errors.phone && <FormErrorMessage>{errors.phone}</FormErrorMessage>}
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
