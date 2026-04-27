import { motion } from "framer-motion";
import { User2Icon } from "lucide-react";

const testimonials = [
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
  },
  {
    text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
  },
  {
    text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
  },
  {
    text: "“Our team's productivity has increased significantly since we started using this tool”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 ">
      <div className="container w-[90vw] md:w-[70vw]">
        <h2 className="text-5xl md:text-6xl text-center tracking-tighter font-primary font-medium text-white">
          Beyond Expectations
        </h2>
        <p className="max-w-sm mx-auto font-primary tracking-tight text-white/70 text-lg md:text-xl text-center mt-5">
          What Our Users Say
        </p>

        <div className="relative flex overflow-hidden mt-10 pr-5" style={{ maskImage: "linear-gradient(to right, transparent, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, transparent)" }}>
          <motion.div
            initial={{ x: "0%" }}
            animate={{ x: "-50%" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20,
            }}
            className="flex flex-none gap-5"
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                className="flex-none text-white max-w-xs md:max-w-md border-white/15 border p-6 md:p-10 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(0,48,135,1),black)]"
                key={index}
              >
                <div className="text-lg font-primary md:text-2xl tracking-tight">{testimonial.text}</div>
                <div className="flex items-center gap-3 mt-5">
                  <div className="relative">
                    <div className="size-8 border border-white rounded-lg flex items-center justify-center p-1">
                      <User2Icon />
                    </div>
                  </div>
                  <div>
                    <div className="tracking-tight font-primary">{testimonial.name}</div>
                    <div className="text-white/50 tracking-tight font-primary text-sm">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
