import { useState } from "react";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";

export const useContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    return Object.values(formData).every((field) => field !== "");
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );
      toast.success("Email sent successfully!");
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      toast.error("Error sending email");
    }
  };

  return { formData, handleChange, sendEmail };
};
