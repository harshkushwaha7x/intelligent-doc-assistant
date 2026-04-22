import {motion} from "motion/react"
import logo1 from '../assets/icon1.svg';
import logo2 from '../assets/icon2.svg';
import logo3 from '../assets/icon3.svg';
import logo4 from '../assets/icon4.svg';
import logo5 from '../assets/icon5.svg';
import logo6 from '../assets/icon6.svg';

const featuresData = [
  {
    icon: logo1,
    title: 'Intelligent Writing Assistance',
    description: 'Our AI writing tool analyzes your content, suggesting improvements.',
  },
  {
    icon: logo2,
    title: 'Grammar and Spell Check',
    description: 'Say goodbye to embarrassing typos and grammar mistakes.',
  },
  {
    icon: logo3,
    title: 'Time-Efficient Summarization',
    description: 'Use our AI tool to summarize text, articles, and documents efficiently.',
  },
  {
    icon: logo4,
    title: 'Chat with your Document',
    description: 'Ask questions and get accurate information included in the document',
  },
  {
    icon: logo5,
    title: 'Upload multiple files',
    description: 'upload multiple files and retrive accurate information from them.',
  },
  {
    icon: logo6,
    title: 'Content Generation',
    description: 'Get inspiration or assistance with generating content on demand.',
  },
];

const Features = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 5 }}
    transition={{
      duration: 0.3,
      delay:1,
      ease: "easeInOut",
    }}
     className="relative  text-white py-12 overflow-y-hidden">

      <div className="mx-auto max-w-5xl overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className={` hover:opacity-100 transition duration-300 p-6 text-center border border-gray-800  md:border-gray-800/50 m-2 md:m-0 ${
                (index + 1) % 3 !== 0 ? 'border-r ' : ''
              } ${index < featuresData.length - 3 ? 'border-b ' : ''}`}
            >
              <div className="group relative">
                {/* Icon */}
                <span className="inline-block mb-6 mx-auto w-16 h-16">
                  <img src={feature.icon} alt={feature.title} className="max-w-full h-auto" />
                </span>
                {/* Title */}
                <h4 className="font-primary font-semibold text-xl mb-4">{feature.title}</h4>
                {/* Description */}
                <p className="font-primary text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};



export default Features;