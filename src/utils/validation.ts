import { TFunction } from 'i18next';

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateContactForm = (
  name: string,
  email: string,
  message: string,
  t: TFunction
): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

<<<<<<< HEAD
  if (!name.trim()) {
    errors.push(t('contact.validation.nameRequired'));
  }
  if (!email.trim()) {
    errors.push(t('contact.validation.emailRequired'));
  } else if (!validateEmail(email)) {
    errors.push(t('contact.validation.emailInvalid'));
  }
  if (!message.trim()) {
    errors.push(t('contact.validation.messageRequired'));
  }
=======
  if (!name.trim()) errors.push(t('contact.validation.nameRequired'));
  if (!email.trim()) errors.push(t('contact.validation.emailRequired'));
  else if (!validateEmail(email)) errors.push(t('contact.validation.emailInvalid'));
  if (!message.trim()) errors.push(t('contact.validation.messageRequired'));
>>>>>>> 2b524c9947ad5c1d411bbac59927419c0cd4d165

  return {
    isValid: errors.length === 0,
    errors
  };
};