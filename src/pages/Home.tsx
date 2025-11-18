import { motion } from 'framer-motion';
import bannerpic2 from '../assets/images/bannerpic2.png';
import nailIcon from '../assets/images/nail-icon.png';
import nailIcon1 from '../assets/images/nail-icon-1.png';
import nailIcon2 from '../assets/images/nail-icon-2.png';
import nailpic from '../assets/images/nailpic.png';
import nailpic2 from '../assets/images/nailpic2.png';
import glitter from '../assets/images/glitter.png';
import glitter2 from '../assets/images/glitter2.png';
import nailPolish1 from '../assets/images/nail-polish-1.png';
import nailPolish2 from '../assets/images/nail-polish-2.png';
import nailPolish3 from '../assets/images/nail-polish-3.png';
import nailPolish4 from '../assets/images/nail-polish-4.png';
import nailpic5 from '../assets/images/nailpic5.png';
import nailpic3 from '../assets/images/nailpic3.png';
import nailpic4 from '../assets/images/nailpic4.png';
import nailpic6 from '../assets/images/nailpic6.png';
import instagramIcon from '../assets/images/004-instagram.png';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: {},
  viewport: { once: true, margin: "-100px" }
};

const staggerItem = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

const Home = () => {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative bg-cream overflow-hidden">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[400px] md:min-h-[500px]">
            {/* Left Section - Introduction Text */}
            <motion.div
              className="relative flex flex-col justify-center py-12 md:py-16 px-6 md:px-8 lg:px-16 order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="max-w-lg">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 md:mb-6 tracking-wide">
                  Welcome to<br />
                  <span className="text-brown">Studio April</span>
                </h1>
                <p className="text-charcoal/80 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                  Experience premium nail artistry with a focus on hygiene and health.
                  We specialize in BIAB, gel manicures, pedicures, lash lifts, and brow
                  lamination—all delivered in a clean, welcoming studio environment.
                </p>
                <p className="text-charcoal/70 text-xs md:text-sm leading-relaxed">
                  At Studio April, your safety and satisfaction come first. Every service
                  is performed using sterilized tools and high-quality products to ensure
                  you leave feeling beautiful and confident.
                </p>
                <button
                  onClick={() => window.open('https://www.fresha.com/book-now/studio-april-f1fyri2u/alloffer?share=true&pId=2529794', '_blank')}
                  className="mt-6 md:mt-8 px-6 md:px-8 py-2.5 md:py-3 bg-charcoal text-cream rounded-full hover:bg-brown transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 text-sm md:text-base"
                >
                  Book Your Appointment
                </button>
              </div>
            </motion.div>

            {/* Right Section - Banner Image 2 */}
            <motion.div
              className="relative min-h-[350px] md:min-h-[500px] lg:min-h-[600px] order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <img
                src={bannerpic2}
                alt="Studio April"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brown Band Section */}
      <motion.section
        className="text-cream py-6 md:py-8"
        style={{ backgroundColor: '#8f5d46' }}
        {...fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center">
            <p className="text-cream italic text-sm md:text-base lg:text-lg font-light">
              Premium nail care with a focus on hygiene, health, and artistry
            </p>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="relative bg-cream pt-8 md:pt-10 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Service Icons */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-20"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Nail Care */}
            <motion.div
              className="text-center"
              variants={staggerItem}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex justify-center mb-4">
                <img src={nailIcon} alt="Nail Care" className="w-12 h-12 md:w-16 md:h-16 object-contain transition-transform duration-300 hover:scale-110" />
              </div>
              <h3 className="text-base md:text-lg font-light mb-2 text-brown">Nail Care</h3>
              <p className="text-xs md:text-sm text-charcoal/70 leading-relaxed">
                Expert manicures & pedicures with premium products and meticulous attention to detail.
              </p>
            </motion.div>

            {/* Nail Art */}
            <motion.div
              className="text-center"
              variants={staggerItem}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex justify-center mb-4">
                <img src={nailIcon1} alt="Nail Art" className="w-12 h-12 md:w-16 md:h-16 object-contain transition-transform duration-300 hover:scale-110" />
              </div>
              <h3 className="text-base md:text-lg font-light mb-2 text-brown">Nail Art</h3>
              <p className="text-xs md:text-sm text-charcoal/70 leading-relaxed">
                Custom designs and creative nail art to express your unique style beautifully.
              </p>
            </motion.div>

            {/* Tint & Trends */}
            <motion.div
              className="text-center"
              variants={staggerItem}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex justify-center mb-4">
                <img src={nailIcon2} alt="Tint & Trends" className="w-12 h-12 md:w-16 md:h-16 object-contain transition-transform duration-300 hover:scale-110" />
              </div>
              <h3 className="text-base md:text-lg font-light mb-2 text-brown">Tint & Trends</h3>
              <p className="text-xs md:text-sm text-charcoal/70 leading-relaxed">
                Lash lifts and brow lamination for effortless beauty that lasts.
              </p>
            </motion.div>
          </motion.div>

          {/* Our Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left - Images */}
            <motion.div
              className="relative max-w-md mx-auto px-6 md:px-0"
              {...fadeInUp}
            >
              {/* Glitter decorations */}
              <img
                src={glitter}
                alt=""
                className="absolute -top-2 -left-2 md:-top-4 md:-left-4 w-12 h-12 md:w-16 md:h-16 object-contain opacity-60 z-10"
              />
              <img
                src={glitter2}
                alt=""
                className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 w-10 h-10 md:w-12 md:h-12 object-contain opacity-60 z-10"
              />

              {/* Main nailpic image */}
              <img
                src={nailpic}
                alt="Studio April Nails"
                className="w-full h-auto object-contain shadow-lg relative z-0 transition-transform duration-300 hover:scale-105"
              />

              {/* nailpic2 overlapping at bottom right */}
              <img
                src={nailpic2}
                alt="Studio April Services"
                className="absolute -bottom-12 -right-12 md:-bottom-16 md:-right-16 w-1/2 h-auto object-contain z-20 transition-transform duration-300 hover:scale-105"
                style={{ filter: 'drop-shadow(4px 4px 8px rgba(0, 0, 0, 0.15))' }}
              />
            </motion.div>

            {/* Right - Our Story Text */}
            <motion.div
              className="flex flex-col justify-center px-4 md:px-0"
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-light mb-4 md:mb-6 text-brown">OUR STORY</h2>
              <p className="text-charcoal/80 leading-relaxed mb-3 md:mb-4 text-sm md:text-base">
                Studio April began with a simple vision: to create a beauty space where hygiene,
                artistry, and client care come together seamlessly. Founded by April, a passionate
                nail technician and beauty specialist, our studio is built on years of experience
                and a commitment to excellence.
              </p>
              <p className="text-charcoal/70 text-xs md:text-sm leading-relaxed mb-3 md:mb-4">
                Every client who walks through our doors receives personalized attention and services
                tailored to their unique style. We believe beauty should never compromise health, which
                is why we maintain the highest standards of cleanliness and use only premium products.
              </p>
              <p className="text-charcoal/70 text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
                From classic manicures to modern BIAB applications, lash lifts, and brow lamination,
                we're here to help you look and feel your absolute best. Welcome to Studio April—
                where your beauty journey begins.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mix & Match Polishes Section */}
      <motion.section
        className="text-cream py-12 md:py-16"
        style={{ backgroundColor: '#8f5d46' }}
        {...fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-center mb-8 md:mb-12">
            MIX & MATCH POLISHES
          </h2>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Base Coat */}
            <motion.div
              className="text-center"
              variants={staggerItem}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex justify-center mb-3 md:mb-4">
                <img
                  src={nailPolish1}
                  alt="Base Coat"
                  className="h-32 md:h-48 w-auto object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="text-base md:text-lg font-light mb-1">Base Coat</h3>
              <p className="text-cream/70 text-xs">Film protector / No.01 oz</p>
            </motion.div>

            {/* Gel Polish */}
            <motion.div
              className="text-center"
              variants={staggerItem}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex justify-center mb-3 md:mb-4">
                <img
                  src={nailPolish2}
                  alt="Gel Polish"
                  className="h-32 md:h-48 w-auto object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="text-base md:text-lg font-light mb-1">Gel Polish</h3>
              <p className="text-cream/70 text-xs">Sunset Pink / No.01 oz</p>
            </motion.div>

            {/* Top Coat */}
            <motion.div
              className="text-center"
              variants={staggerItem}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex justify-center mb-3 md:mb-4">
                <img
                  src={nailPolish3}
                  alt="Top Coat"
                  className="h-32 md:h-48 w-auto object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="text-base md:text-lg font-light mb-1">Top Coat</h3>
              <p className="text-cream/70 text-xs">Summer Rouge / No.01 oz</p>
            </motion.div>

            {/* Matte Polish */}
            <motion.div
              className="text-center"
              variants={staggerItem}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex justify-center mb-3 md:mb-4">
                <img
                  src={nailPolish4}
                  alt="Matte Polish"
                  className="h-32 md:h-48 w-auto object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="text-base md:text-lg font-light mb-1">Matte Polish</h3>
              <p className="text-cream/70 text-xs">Blue Pottery / No.01 oz</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Treatments & Prices Section */}
      <section className="relative bg-cream py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-start">
            {/* Left - Treatments & Prices List */}
            <motion.div
              {...fadeInUp}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-6 md:mb-8 text-brown">
                TREATMENTS & PRICES
              </h2>

              {/* Service Items */}
              <div className="space-y-5 md:space-y-6 mb-6 md:mb-8">
                {/* BIAB Manicure */}
                <motion.div
                  className="border-b border-charcoal/10 pb-5 md:pb-6"
                  variants={staggerItem}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-start mb-2 gap-4">
                    <h3 className="text-sm md:text-base lg:text-lg font-medium flex-1">BUILDER GEL (BIAB) MANICURE</h3>
                    <div className="text-right flex-shrink-0">
                      <p className="text-brown font-medium text-base md:text-lg">$85</p>
                      <p className="text-xs md:text-sm text-charcoal/60">75mins</p>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-charcoal/70 leading-relaxed">
                    If you have damaged, thin nails, are a nail biter or you struggle to grow your nails
                    then a super gel manicure is the perfect option for you. A builder gel is applied over
                    your natural nail to add the extra strength and durability to your nails supporting them
                    to grow. Expect 3 to 4 weeks flawless wear. This service includes a full signature manicure
                    with detailed cuticle work, massage and gel polish colour of your choice (if desired).
                  </p>
                </motion.div>

                {/* BIAB Rebalance */}
                <motion.div
                  className="border-b border-charcoal/10 pb-5 md:pb-6"
                  variants={staggerItem}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex justify-between items-start mb-2 gap-4">
                    <h3 className="text-sm md:text-base lg:text-lg font-medium flex-1">BUILDER GEL (BIAB) MANICURE REBALANCE</h3>
                    <div className="text-right flex-shrink-0">
                      <p className="text-brown font-medium text-base md:text-lg">$95</p>
                      <p className="text-xs md:text-sm text-charcoal/60">90mins</p>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-charcoal/70 leading-relaxed">
                    Re-balance and refresh your BIAB Manicure so it looks as good as new again. This service
                    includes detailed e-file cuticle care, massage and a gel polish colour of your choice (if desired).
                  </p>
                </motion.div>

                {/* Extensions */}
                <motion.div
                  className="pb-5 md:pb-6"
                  variants={staggerItem}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex justify-between items-start mb-2 gap-4">
                    <h3 className="text-sm md:text-base lg:text-lg font-medium flex-1">EXTENSIONS</h3>
                    <div className="text-right flex-shrink-0">
                      <p className="text-brown font-medium text-base md:text-lg">$130</p>
                      <p className="text-xs md:text-sm text-charcoal/60">2hours</p>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-charcoal/70 leading-relaxed mb-2">
                    Add length to your natural nails with either tips or full cover extensions. This service
                    includes our cuticle care and gel colour of your choice.
                  </p>
                  <p className="text-xs md:text-sm text-charcoal/70 leading-relaxed">
                    Please Add On: Extra Long Nails if you desire an extra long look (8mm past the free edge or more).
                  </p>
                </motion.div>
              </div>

              {/* Explore Button */}
              <button
                onClick={() => window.open('https://www.fresha.com/book-now/studio-april-f1fyri2u/alloffer?share=true&pId=2529794', '_blank')}
                className="px-6 md:px-8 py-2.5 md:py-3 bg-brown text-cream rounded-full hover:bg-brown/90 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 text-sm md:text-base"
              >
                EXPLORE
              </button>
            </motion.div>

            {/* Right - Image with decorative elements */}
            <motion.div
              className="relative mt-8 lg:mt-0"
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Decorative glitters */}
              <img
                src={glitter}
                alt=""
                className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-16 h-16 md:w-20 md:h-20 object-contain opacity-40 z-10"
              />
              <img
                src={glitter2}
                alt=""
                className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-12 h-12 md:w-16 md:h-16 object-contain opacity-40 z-10"
              />

              {/* Main image */}
              <div className="relative">
                <img
                  src={nailpic5}
                  alt="Nail Treatment"
                  className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
