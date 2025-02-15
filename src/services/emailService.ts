import emailjs from 'emailjs-com';

interface EmailData {
  name: string;
  email: string;
  message: string;
}

// Initialize EmailJS
emailjs.init("user_YOUR_USER_ID");

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    const result = await emailjs.send(
      "service_YOUR_SERVICE_ID",
      "template_YOUR_TEMPLATE_ID",
      {
        to_email: 'wellingtoncsp25@gmail.com',
        from_name: data.name,
        from_email: data.email,
        message: data.message,
      },
      "user_YOUR_USER_ID" // Your user ID
    );

    return result.status === 200;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};