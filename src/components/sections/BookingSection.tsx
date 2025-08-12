import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Calendar, MapPin, Users, Send, CheckCircle } from 'lucide-react';
import SkewedBackground from '../ui/SkewedBackground';
import GlassContainer from '../ui/GlassContainer';
import { content } from '@/content/content';

interface FormData {
  name: string;
  email: string;
  eventType: string;
  venue: string;
  eventDate: string;
  expectedAttendees: string;
  budget: string;
  message: string;
}

const BookingSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    eventType: '',
    venue: '',
    eventDate: '',
    expectedAttendees: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const eventTypes = [
    'Festival',
    'Club Night',
    'Private Party',
    'Corporate Event',
    'Wedding',
    'Other',
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual form service)
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="booking" className="relative">
        <SkewedBackground variant="cosmic" className="py-24">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-2xl text-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <GlassContainer className="p-12">
                  <CheckCircle className="mx-auto mb-6 h-16 w-16 text-green-400" />
                  <h3 className="mb-4 text-3xl font-bold text-white">Booking Request Sent!</h3>
                  <p className="mb-8 text-lg leading-relaxed text-gray-300">
                    Thank you for your interest in booking LOST K3YS. We'll get back to you within
                    24 hours to discuss your event details.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-cosmic-blue transition-colors duration-300 hover:text-white"
                  >
                    Send Another Request
                  </button>
                </GlassContainer>
              </motion.div>
            </div>
          </div>
        </SkewedBackground>
      </section>
    );
  }

  return (
    <section id="booking" className="relative">
      <SkewedBackground variant="cosmic" className="py-24">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <GlassContainer className="mb-6 inline-block p-2" variant="blue">
                <span className="text-cosmic-blue text-sm font-medium tracking-wider uppercase">
                  Book Us
                </span>
              </GlassContainer>
            </motion.div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-6 text-4xl leading-tight font-black text-white md:text-5xl"
            >
              Ready to
              <span className="block bg-gradient-to-r from-cosmic-blue to-cosmic-blue-glow bg-clip-text text-transparent">
                Unlock the Experience?
              </span>
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-300"
            >
              {content.bookingSection.description}
            </motion.p>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <GlassContainer className="p-8">
                <h3 className="mb-8 text-2xl font-bold text-white">Book LOST K3YS</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-300">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-glass-white/10 border-glass-white-border focus:border-cosmic-blue w-full rounded-lg border px-4 py-3 text-white placeholder-gray-400 transition-colors duration-300 focus:outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-300">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-glass-white/10 border-glass-white-border focus:border-cosmic-blue w-full rounded-lg border px-4 py-3 text-white placeholder-gray-400 transition-colors duration-300 focus:outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-300">
                        Event Type
                      </label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleInputChange}
                        className="bg-glass-white/10 border-glass-white-border focus:border-cosmic-blue w-full rounded-lg border px-4 py-3 text-white transition-colors duration-300 focus:outline-none"
                      >
                        <option value="">Select event type</option>
                        {eventTypes.map(type => (
                          <option key={type} value={type} className="bg-cosmic-primary">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-300">
                        Event Date
                      </label>
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        className="bg-glass-white/10 border-glass-white-border focus:border-cosmic-blue w-full rounded-lg border px-4 py-3 text-white transition-colors duration-300 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-300">
                        Venue/Location
                      </label>
                      <input
                        type="text"
                        name="venue"
                        value={formData.venue}
                        onChange={handleInputChange}
                        className="bg-glass-white/10 border-glass-white-border focus:border-cosmic-blue w-full rounded-lg border px-4 py-3 text-white placeholder-gray-400 transition-colors duration-300 focus:outline-none"
                        placeholder="Club XYZ, Amsterdam"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-300">
                        Expected Attendees
                      </label>
                      <input
                        type="text"
                        name="expectedAttendees"
                        value={formData.expectedAttendees}
                        onChange={handleInputChange}
                        className="bg-glass-white/10 border-glass-white-border focus:border-cosmic-blue w-full rounded-lg border px-4 py-3 text-white placeholder-gray-400 transition-colors duration-300 focus:outline-none"
                        placeholder="500-1000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      Budget Range
                    </label>
                    <input
                      type="text"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="bg-glass-white/10 border-glass-white-border focus:border-cosmic-blue w-full rounded-lg border px-4 py-3 text-white placeholder-gray-400 transition-colors duration-300 focus:outline-none"
                      placeholder="€2,000 - €5,000"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      Additional Details
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="bg-glass-white/10 border-glass-white-border focus:border-cosmic-blue w-full resize-none rounded-lg border px-4 py-3 text-white placeholder-gray-400 transition-colors duration-300 focus:outline-none"
                      placeholder={content.ui.bookingForm.additionalDetails}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="from-cosmic-blue hover:from-cosmic-blue/80 flex w-full items-center justify-center space-x-2 rounded-lg bg-gradient-to-r to-purple-600 px-6 py-4 font-medium text-white transition-all duration-300 hover:to-purple-600/80 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Send Booking Request</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </GlassContainer>
            </motion.div>

            {/* Event Info & Contact Details */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* What We Offer */}
              <GlassContainer className="p-6">
                <h4 className="mb-4 text-xl font-bold text-white">{content.bookingSection.whatWeBring.title}</h4>
                <div className="space-y-4">
                  {[
                    { icon: Users, text: content.bookingSection.whatWeBring.items.energy },
                    { icon: Calendar, text: content.bookingSection.whatWeBring.items.flexible },
                    { icon: MapPin, text: content.bookingSection.whatWeBring.items.travel },
                    { icon: Mail, text: content.bookingSection.whatWeBring.items.communication },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <item.icon className="text-cosmic-blue h-5 w-5" />
                      <span className="text-gray-300">{item.text}</span>
                    </div>
                  ))}
                </div>
              </GlassContainer>

              {/* Technical Requirements */}
              <GlassContainer className="p-6" variant="blue">
                <h4 className="mb-4 text-xl font-bold text-white">Technical Requirements</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  {content.bookingSection.technicalRequirements.items.map(requirement => {
                    return (<p>• {requirement}</p>)

                  })}
                </div>
              </GlassContainer>

              {/* Contact Info */}
              <GlassContainer className="p-6" variant="minimal">
                <h4 className="mb-4 text-xl font-bold text-white">Direct Contact</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="text-cosmic-blue h-5 w-5" />
                    <span className="text-gray-300">{content.bookingSection.directContact.email}</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    {content.bookingSection.directContact.note}
                  </p>
                </div>
              </GlassContainer>

              {/* Response Time */}
              <GlassContainer className="p-6 text-center" variant="blue">
                <h4 className="mb-2 text-lg font-bold text-white">Response Time</h4>
                <p className="text-cosmic-blue mb-2 text-2xl font-bold">24 Hours</p>
                <p className="text-sm text-gray-300">
                  {content.ui.bookingForm.responseTime}
                </p>
              </GlassContainer>
            </motion.div>
          </div>
        </div>
      </SkewedBackground>
    </section>
  );
};

export default BookingSection;
