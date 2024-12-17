import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Send, User, Mail, MessageCircle } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const gradientBackgrounds = [
  "from-[#2C3E50] to-[#3498DB]",
  "from-[#4A148C] to-[#FF6F00]",
  "from-[#1A2980] to-[#26D07C]",
  "from-[#0F2027] to-[#203A43]",
  "from-[#16222A] to-[#3A6073]",
];

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value.trimStart() }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const { VITE_APP_EMAILJS_SERVICE_ID, VITE_APP_EMAILJS_TEMPLATE_ID, VITE_APP_EMAILJS_PUBLIC_KEY } = import.meta.env;

    if (!VITE_APP_EMAILJS_SERVICE_ID || !VITE_APP_EMAILJS_TEMPLATE_ID || !VITE_APP_EMAILJS_PUBLIC_KEY) {
      toast.error('Service is not properly configured.');
      setLoading(false);
      return;
    }

    try {
      await emailjs.send(
        VITE_APP_EMAILJS_SERVICE_ID,
        VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name.trim(),
          to_name: 'Vasini Singh',
          from_email: form.email.trim(),
          to_email: 'tovasinisingh@gmail.com',
          message: form.message.trim(),
        },
        VITE_APP_EMAILJS_PUBLIC_KEY
      );
      
      toast.success('Message sent successfully! 🎉', {
        duration: 4000,
        position: 'top-right',
      });
      
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error("Couldn't send message. Please try again.", {
        duration: 4000,
        position: 'top-right',
      });
      console.error('Failed to send message:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-[#8d4cc799] via-[#1b018d] to-[#6e0bd0]  min-h-screen">
        <div className="max-w-5xl mx-auto py-16 px-6 ">
        <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#4A90E2] to-[#6A11CB] "
        >
            Get In Touch
        </motion.h1>

        <Toaster />

        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
            type: "spring",
            stiffness: 100
            }}
            className={`
            bg-gradient-to-br ${gradientBackgrounds[0]}
            rounded-2xl p-7 shadow-2xl border-2 border-opacity-20 border-white
            transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl
            `}
        >
            <div className="flex items-center mb-5">
            <Send className="text-white mr-4" size={32} strokeWidth={2} />
            <div>
                <h2 className="text-3xl font-bold text-white drop-shadow-md">
                Contact Form
                </h2>
                <h3 className="text-xl text-gray-200 opacity-90">
                Share Your Thoughts
                </h3>
            </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
            <motion.label 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="block"
            >
                <span className="block text-sm font-medium text-white/80 flex items-center gap-2">
                <User className="w-4 h-4 text-[#4A90E2]" /> Full Name
                </span>
                <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#4A90E2] transition-all"
                placeholder="Ex: Vasinin Singh"
                />
            </motion.label>

            <motion.label 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="block"
            >
                <span className="block text-sm font-medium text-white/80 flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#4A90E2]" /> Email address
                </span>
                <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#4A90E2] transition-all"
                placeholder="Ex: vasinisingh01@gmail.com"
                />
            </motion.label>

            <motion.label 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="block"
            >
                <span className="block text-sm font-medium text-white/80 flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#4A90E2]" /> Your message
                </span>
                <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="mt-1 block w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#4A90E2] transition-all"
                placeholder="Write your thoughts here..."
                />
            </motion.label>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={loading}
                className={`
                w-full py-3 rounded-md 
                bg-[#4A90E2] text-white font-medium 
                flex items-center justify-center gap-2 
                ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#6A11CB]'} 
                transition-all
                `}
            >
                {loading ? (
                <span>Sending...</span>
                ) : (
                <>
                    <Send className="w-5 h-5" />
                    Send Message
                </>
                )}
            </motion.button>
            </form>
        </motion.div>
        </div>
    </div>
  );
};

export default Contact;