import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Headphones, Zap, AudioWaveform, Cpu, Music } from 'lucide-react';
import SkewedBackground from '../ui/SkewedBackground';
import GlassContainer from '../ui/GlassContainer';
import { content } from '@/content/content';

interface TechStep {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  tools: string[];
}

const TechSection: React.FC = () => {
  const techSteps: TechStep[] = [
    {
      id: '1',
      icon: Brain,
      title: content.processSection.step1.title,
      description: content.processSection.step1.description,
      tools: content.processSection.step1.features
    },
    {
      id: '2',
      icon: AudioWaveform,
      title: content.processSection.step2.title,
      description: content.processSection.step2.description,
      tools: content.processSection.step2.features
    },
    {
      id: '3',
      icon: Headphones,
      title: content.processSection.step3.title,
      description: content.processSection.step3.description,
      tools: content.processSection.step3.features
    },
  ];

  const tools = [
    { name: 'AI Composition', usage: 85 },
    { name: 'Human Creativity', usage: 95 },
    { name: 'Sound Design', usage: 90 },
    { name: 'Mixing & Mastering', usage: 88 },
  ];

  return (
    <section id="tech" className="relative">
      <SkewedBackground variant="white-to-cosmic" className="py-24">
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
                  Our Process
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
              Where Technology
              <span className="block bg-gradient-to-r from-cosmic-blue to-cosmic-blue-glow bg-clip-text text-transparent">
                Meets Soul
              </span>
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-300"
            >
              {content.processSection.intro}
            </motion.p>
          </div>

          {/* Tech Process Steps */}
          <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-3">
            {techSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <GlassContainer className="h-full p-8 text-center" variant='blue'>
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="from-cosmic-blue mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br to-purple-600">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-cosmic-blue text-sm font-bold">Step {step.id}</div>
                  </div>

                  {/* Content */}
                  <h3 className="mb-4 text-xl font-bold text-white">{step.title}</h3>
                  <p className="mb-6 leading-relaxed text-gray-300">{step.description}</p>

                  {/* Tools */}
                  <div className="space-y-2">
                    {step.tools.map((tool, toolIndex) => (
                      <div
                        key={toolIndex}
                        className="text-cosmic-blue bg-cosmic-blue/10 rounded-full px-3 py-1 text-sm"
                      >
                        {tool}
                      </div>
                    ))}
                  </div>
                </GlassContainer>
              </motion.div>
            ))}
          </div>

          {/* Skills/Tools Visualization */}
            {/* Philosophy */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mx-auto grid max-w-6xl  place-items-center
 grid-cols-1 items-center gap-16 lg:grid-cols-2"
            >
              <GlassContainer className="p-6">
                <div className="mb-4 flex items-center">
                  <Cpu className="text-cosmic-blue mr-3 h-6 w-6" />
                  <h4 className="text-lg font-bold text-white">{content.processSection.philosophy.creativity.title}</h4>
                </div>
                <p className="leading-relaxed text-gray-300">
                  {content.processSection.philosophy.creativity.content}
                </p>
              </GlassContainer>

              <GlassContainer className="p-6">
                <div className="mb-4 flex items-center">
                  <Music className="text-cosmic-blue mr-3 h-6 w-6" />
                  <h4 className="text-lg font-bold text-white">{content.processSection.philosophy.humanTouch.title}</h4>
                </div>
                <p className="leading-relaxed text-gray-300">
                  {content.processSection.philosophy.humanTouch.content}
                </p>
              </GlassContainer>

              <GlassContainer className="p-6">
                <div className="mb-4 flex items-center">
                  <Zap className="text-cosmic-blue mr-3 h-6 w-6" />
                  <h4 className="text-lg font-bold text-white">{content.processSection.philosophy.innovation.title}</h4>
                </div>
                <p className="leading-relaxed text-gray-300">
                  {content.processSection.philosophy.innovation.content}
                </p>
              </GlassContainer>
            </motion.div>
        </div>
      </SkewedBackground>
    </section>
  );
};

export default TechSection;
