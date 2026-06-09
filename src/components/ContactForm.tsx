'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { Mail, User, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = language === 'en' ? 'Name is required' : 'İsim gereklidir';
    }
    if (!formData.email.trim()) {
      newErrors.email = language === 'en' ? 'Email is required' : 'E-posta gereklidir';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = language === 'en' ? 'Invalid email address' : 'Geçersiz e-posta adresi';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = language === 'en' ? 'Subject is required' : 'Konu gereklidir';
    }
    if (!formData.message.trim()) {
      newErrors.message = language === 'en' ? 'Message is required' : 'Mesaj gereklidir';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Create mailto link for email integration
      const mailtoLink = `mailto:info@robonino.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      window.location.href = mailtoLink;
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-800 mb-2">
          {language === 'en' ? 'Thank You!' : 'Teşekkürler!'}
        </h3>
        <p className="text-green-700">
          {language === 'en'
            ? 'Your email client has been opened. Please send the email to complete your inquiry.'
            : 'E-posta istemciniz açıldı. Sorunuzu tamamlamak için lütfen e-postayı gönderin.'}
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-4 text-green-600 hover:text-green-800 font-medium underline"
        >
          {language === 'en' ? 'Send another message' : 'Başka mesaj gönder'}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            {language === 'en' ? 'Name' : 'İsim'}
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder={language === 'en' ? 'Your name' : 'İsminiz'}
            />
          </div>
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            {language === 'en' ? 'Email' : 'E-posta'}
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder={language === 'en' ? 'your@email.com' : 'e-posta@adresiniz.com'}
            />
          </div>
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
      </div>

      {/* Subject */}
      <div className="space-y-2">
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
          {language === 'en' ? 'Subject' : 'Konu'}
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all ${
            errors.subject ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder={language === 'en' ? 'How can we help you?' : 'Size nasıl yardımcı olabiliriz?'}
        />
        {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          {language === 'en' ? 'Message' : 'Mesaj'}
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all resize-none ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder={language === 'en' ? 'Tell us more about your inquiry...' : 'Sorunuz hakkında daha fazla bilgi verin...'}
          />
        </div>
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-secondary text-white px-8 py-4 rounded-xl font-medium hover:bg-secondary-dark transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            {language === 'en' ? 'Sending...' : 'Gönderiliyor...'}
          </>
        ) : (
          <>
            <Send size={20} />
            {language === 'en' ? 'Send Message' : 'Mesaj Gönder'}
          </>
        )}
      </button>
    </form>
  );
}
