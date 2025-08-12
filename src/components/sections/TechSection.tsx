import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Headphones, Zap, Waveform, Cpu, Music } from 'lucide-react';
import SkewedBackground from '../ui/SkewedBackground';
import GlassContainer from '../ui/GlassContainer';

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
      title: 'AI-Powered Creation',
      description:
        'We harness cutting-edge AI to generate initial concepts and explore sonic possibilities beyond traditional boundaries.',
      tools: ['Custom AI Models', 'Machine Learning', 'Pattern Recognition'],
    },
    {
      id: '2',
      icon: Waveform,
      title: 'Human Enhancement',
      description:
        'Our creative vision and musical expertise shape every AI-generated element into something uniquely LOST K3YS.',
      tools: ['Creative Direction', 'Melody Crafting', 'Emotional Tuning'],
    },
    {
      id: '3',
      icon: Headphones,
      title: 'Professional Production',
      description:
        'Industry-standard tools and techniques ensure our tracks meet the highest quality standards for clubs and festivals.',
      tools: ['Ableton Live', 'Professional Mixing', 'Mastering Suite'],
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
              Where AI Meets
              <span className="block bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                Human Soul
              </span>
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-300"
            >
              We believe the future of music lies in the perfect harmony between artificial
              intelligence and human creativity. Here's how we craft our signature sound.
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
                <GlassContainer className="h-full p-8 text-center" hover={true}>
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
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
            {/* Skills Chart */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <GlassContainer className="p-8">
                <h3 className="mb-8 text-center text-2xl font-bold text-white">
                  Our Production Stack
                </h3>
                <div className="space-y-6">
                  {tools.map((tool, index) => (
                    <div key={index}>
                      <div className="mb-2 flex items-center justify-between">
                        <span className="font-medium text-gray-300">{tool.name}</span>
                        <span className="text-cosmic-blue font-bold">{tool.usage}%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-gray-700/30">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tool.usage}%` }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          viewport={{ once: true }}
                          className="from-cosmic-blue h-2 rounded-full bg-gradient-to-r to-purple-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </GlassContainer>
            </motion.div>

            {/* Philosophy */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <GlassContainer className="p-6" variant="blue">
                <div className="mb-4 flex items-center">
                  <Cpu className="text-cosmic-blue mr-3 h-6 w-6" />
                  <h4 className="text-lg font-bold text-white">AI as a Creative Partner</h4>
                </div>
                <p className="leading-relaxed text-gray-300">
                  We don't see AI as a replacement for human creativity, but as a powerful
                  collaborator that helps us explore new sonic territories and push the boundaries
                  of hardstyle music.
                </p>
              </GlassContainer>

              <GlassContainer className="p-6" variant="default">
                <div className="mb-4 flex items-center">
                  <Music className="text-cosmic-blue mr-3 h-6 w-6" />
                  <h4 className="text-lg font-bold text-white">Human Touch is Everything</h4>
                </div>
                <p className="leading-relaxed text-gray-300">
                  Every track is infused with our personal experiences, emotions, and musical
                  vision. The AI generates possibilities, but we craft the soul of each song.
                </p>
              </GlassContainer>

              <GlassContainer className="p-6" variant="minimal">
                <div className="mb-4 flex items-center">
                  <Zap className="text-cosmic-blue mr-3 h-6 w-6" />
                  <h4 className="text-lg font-bold text-white">Innovation Through Fusion</h4>
                </div>
                <p className="leading-relaxed text-gray-300">
                  By combining the computational power of AI with human intuition and creativity,
                  we're able to create hardstyle that's both technically innovative and emotionally
                  powerful.
                </p>
              </GlassContainer>
            </motion.div>
          </div>
        </div>
      </SkewedBackground>
    </section>
  );
};

export default TechSection;
