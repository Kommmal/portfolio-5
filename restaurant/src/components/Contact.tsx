"use client";
import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { Snackbar, Alert } from '@mui/material';  // Import Alert from MUI

// Define types for form elements
interface FormElements extends HTMLFormElement {
  from_email: HTMLInputElement;
  from_name: HTMLInputElement;
  subject: HTMLInputElement;
  message: HTMLTextAreaElement;
}

const Contact: React.FC = () => {
  // State to control Snackbar visibility
  const [open, setOpen] = useState<boolean>(false);

  // UseRef to reference the form
  const form = useRef<FormElements>(null);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_tox7kqs', 'template_nv7k7mj', form.current, 'SybVGsYS52j2TfLbi')
        .then(
          (result) => {
            setOpen(true); // Open Snackbar upon successful email send
            form.current?.reset(); // Reset form
          },
          (error) => {
            console.log(error.text); // Log error if email send fails
          }
        );
    }
  };

  return (
    <div id="contact" className="flex flex-col justify-center items-center relative z-10 py-12">
      <div className="relative flex flex-col items-center w-full max-w-3xl gap-5 px-4 pb-20">
        <div className="text-4xl font-semibold text-center mt-5 text-white md:text-3xl md:mt-3">
          Contact
        </div>
        <div className="text-xl text-center max-w-2xl text-white md:text-lg">
          Feel free to reach out to me for any questions or opportunities!
        </div>

        <form ref={form} onSubmit={handleSubmit} className="w-full max-w-lg bg-card p-8 rounded-xl shadow-lg mt-7 gap-4 flex flex-col">
          <div className="text-2xl font-semibold text-white mb-3">Email Me 🚀</div>
          
          <input
            type="email"
            placeholder="Your Email"
            name="from_email"
            className="bg-transparent border border-secondary text-primary rounded-lg p-4 text-lg focus:outline-none focus:border-primary"
          />
          
          <input
            type="text"
            placeholder="Your Name"
            name="from_name"
            className="bg-transparent border border-secondary text-primary rounded-lg p-4 text-lg focus:outline-none focus:border-primary"
          />
          
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            className="bg-transparent border border-secondary text-primary rounded-lg p-4 text-lg focus:outline-none focus:border-primary"
          />
          
          <textarea
            placeholder="Message"
            rows={4}
            name="message"
            className="bg-transparent border border-secondary text-primary rounded-lg p-4 text-lg focus:outline-none focus:border-primary"
          />
          
          <input
            type="submit"
            value="Send"
            className="w-full bg-[#465697] text-white font-semibold py-3 px-4 rounded-lg mt-2 cursor-pointer transition duration-300 ease-in-out hover:bg-gradient-to-tl"
          />
        </form>

        {/* Snackbar component for feedback after successful email submission */}
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
        >
          <Alert
            onClose={() => setOpen(false)}
            severity="success"  // This will now work correctly with Alert
            sx={{ width: '100%' }}
          >
            Email sent successfully!
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};

export default Contact;
