import { useEffect } from 'react';
import { useForm } from '../../../hooks/useForm';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from '../../../hooks/useDispatch';
import { setLoggedState } from '../../../store/auth/authSlice';

interface FormData {
  email: string;
  password: string;
}

const initialFormData = {
  email: '',
  password: '',
};

const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;

export const useLoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    formData,
    isValid,
    errors,
    setErrors,
    setFormData,
    handleChangeFormData,
  } = useForm<FormData>(initialFormData);

  useEffect(() => {
    setFormData(initialFormData);
  }, [setFormData]);

  useEffect(() => {
    setErrors({
      email: emailRegex.test(formData.email) ? undefined : 'Email is incorrect',
      password:
        formData.password.length > 0 ? undefined : 'Password is required',
    });
  }, [formData, setErrors]);

  const handleSubmit = () => {
    if (isValid) {
      dispatch(setLoggedState('logged'));
      navigate('/');
    }
  };

  return {
    formData,
    isValid,
    errors,
    onChange: handleChangeFormData,
    onLogin: handleSubmit,
  };
};
