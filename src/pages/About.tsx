import { motion } from 'framer-motion';
import aboutme from '../assets/images/aboutme.jpg';
import aboutme2 from '../assets/images/aboutme2.jpg';
import nailpic from '../assets/images/nailpic.png';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

const About = () => {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative bg-cream py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Owner Photos */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Main large photo */}
              <img
                src={aboutme}
                alt="Kim - Studio April Owner"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
              {/* Smaller photo top right */}
              <img
                src={aboutme2}
                alt="Kim"
                className="absolute -top-4 -right-4 md:-top-8 md:-right-8 w-2/5 h-auto object-cover rounded-lg shadow-lg"
              />
            </motion.div>

            {/* Right - Studio Introduction */}
            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <div className="space-y-6">
                <div className="border-b border-charcoal/20 pb-6">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.2em] mb-2">
                    STUDIO<br />APRIL
                  </h1>
                </div>

                <div className="border-b border-charcoal/20 pb-6">
                  <p className="text-sm tracking-widest mb-2 text-charcoal/70">MY NAME IS</p>
                  <h2 className="text-3xl md:text-4xl font-light">Kim</h2>
                </div>

                <div>
                  <p className="text-sm tracking-widest mb-3 text-charcoal/70">I SPECIALISE IN</p>
                  <h3 className="text-2xl md:text-3xl font-light leading-relaxed">
                    Gel Nails, Makeup,<br />
                    Brows, Lashes
                  </h3>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="relative bg-cream py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left - About Me Text */}
            <motion.div
              className="space-y-6"
              {...fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide">
                ABOUT ME
              </h2>

              <div className="space-y-4 text-charcoal/80 leading-relaxed">
                <p className="text-sm md:text-base">
                  Hi, I'm Kim, a Melbourne-based beauty and nail artist with over a decade of
                  experience helping clients look and feel their best. Specialising in nails,
                  makeup, brows, and lashes, I bring elevated, on-trend looks to life.
                </p>

                <p className="text-sm md:text-base">
                  With a passion for creativity, top-tier service, and keeping up with the latest
                  trends, I'm here to give you a beauty experience you'll love coming back to.
                </p>
              </div>

              <div className="pt-6 border-t border-charcoal/20">
                <h3 className="text-lg md:text-xl font-light tracking-wider mb-3">CONTACT</h3>
                <p className="text-sm md:text-base text-charcoal/80">
                  Studioapril004@gmail.com
                </p>
              </div>
            </motion.div>

            {/* Right - Nail Work Image */}
            <motion.div
              className="flex items-center justify-center"
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={nailpic}
                alt="Nail Art Work"
                className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
