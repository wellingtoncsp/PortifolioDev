import emailjs from 'emailjs-com';

interface EmailData {
  name: string;
  email: string;
  message: string;
}

// Substitua estas constantes pelos seus IDs reais do EmailJS
const SERVICE_ID = "service_hxoajo4";
const TEMPLATE_ID = "template_j96ru9u";
const USER_ID = "qcyzFDIkuB4K_oQiP";

// Initialize EmailJS with your user ID
emailjs.init(USER_ID);

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
      to_name: "Wellington", // Nome do destinatário
      reply_to: data.email
    };

    const result = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      USER_ID
    );

    return result.status === 200;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};