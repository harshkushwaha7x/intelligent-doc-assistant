import logo1 from '../assets/icon1.svg';
import logo2 from '../assets/icon2.svg';
import logo3 from '../assets/icon3.svg';

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
];

export const Features2 = () => {
    return (
        <div className='flex justify-center w-[100vw] bg-gradient-to-t from-black to-blue-600 via-blue-600/20'>
      <section className="bg-black text-white py-[72px] font-primary w-[100vw] md:w-[80vw]  bg-gradient-to-t from-black to-blue-600 via-blue-600/20">
            <div className="container">
                <h2 className="text-center font-bold text-5xl tracking-tighter">Everything you Need</h2>
                <div className="max-w-xl mx-auto">
                    <p className="text-center mt-5 text-md text-white/70 tracking-tight">
                        Summarize your documents with cool UI.
                    </p>
                </div>

                <div className="mt-16 flex sm:flex-row flex-col gap-4 px-8 ">
                    {featuresData.map(({ icon, title, description }) => (
                        <div key={title} className="rounded-xl bg-black border font-primary tracking-tight border-white/15 px-5 py-10 text-center">
                            <div className="inline-flex h-14 w-14  justify-center items-center rounded-lg border border-white/15 p-2">
                                <img src={icon} alt={title} className="h-10 w-10" />
                            </div>
                            <h3 className="mt-6 text-lg font-bold">{title}</h3>
                            <p className="mt-2 text-white/70">{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </div>
  
    );
};
