import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Mail, MapPin, Menu, Phone, X } from 'lucide-react'
import interior from './assets/images2/nail_interior_cora.webp'
import nail1 from './assets/images2/nailpic1.jpeg'
import nail2 from './assets/images2/nailpic2.jpeg'
import nail3 from './assets/images2/nailpic3.webp'
import nail4 from './assets/images2/nailpic4.jpeg'
import nail5 from './assets/images2/nailpic5.jpeg'
import logo from './assets/images2/logo-transparent.webp'

const mapsUrl = 'https://share.google/MZ7t2PZCGkwwA43b4'

const serviceGroups = [
  { title: 'SNS / Dip Powder', items: [
    { name: 'SNS French Signature', price: '$70', time: '60 min', note: 'Overlay, French finish and removal.' },
    { name: 'SNS Luxe Overlay', price: '$70', time: '60 min', note: 'Overlay, removal and manicure.' },
    { name: 'SNS Classic', price: '$65', time: '50 min', note: 'Basic full set.' },
    { name: 'SNS Overlay', price: '$55', time: '50 min', note: 'Dip powder overlay.' },
    { name: 'Extra Length Form', price: '$10–$30', note: 'Price varies by length.' },
  ]},
  { title: 'Builder Gel / BIAB', items: [
    { name: 'Builder Gel Overlay · Natural Nails', price: '$80', time: '50 min', note: 'Builder gel over natural nails for added strength and structure.' },
    { name: 'Builder Gel Full Set', price: '$90', time: '60 min', note: 'Full set of builder gel with extensions.' },
    { name: 'Builder Gel Infill · Tips', price: '$75', time: '55 min', note: 'Builder gel infill for existing tip extensions.' },
    { name: 'Builder Gel Infill · Natural Nails', price: '$65', time: '45 min', note: 'Builder gel infill on natural nails.' },
    { name: 'Gel-X Extensions · Full Set', price: 'From $70', time: '40 min', note: 'Full set of Gel-X extensions. Infill is not available.' },
    { name: 'Extra Length Form', price: '$10–$30', note: 'Price varies by length.' },
  ]},
  { title: 'Acrylic', items: [
    { name: 'Full Set Acrylic + Shellac', price: '$70', time: '55 min', note: 'Acrylic extensions finished with one solid shellac colour.' },
    { name: 'Classic Acrylic Full Set', price: '$65', time: '50 min', note: 'Full set finished with regular polish.' },
    { name: 'Acrylic Infill + Shellac', price: '$60', time: '50 min', note: 'Infill, reshaping and shellac colour for existing acrylic nails.' },
    { name: 'Acrylic Infill + Polish', price: '$55', time: '45 min', note: 'Infill, reshaping and regular polish for existing acrylic nails.' },
    { name: 'Extra Length Form', price: '$10–$30', note: 'Price varies by length.' },
  ]},
  { title: 'Manicure', items: [
    { name: 'Classic Manicure', price: '$35', note: 'Nail shaping, cuticle care, buff, massage and polish.' },
    { name: 'Cora Deluxe Manicure', price: '$65', time: '60 min', note: 'Manicure, scrub, hydrating mask, warm towel, massage and shellac.' },
    { name: 'Gel Manicure', price: '$55', time: '50 min', note: 'Detailed preparation, cuticle care, gel colour and massage.' },
    { name: 'Shellac', price: '$45', time: '35 min', note: 'Cut, shape and polish.' },
  ]},
  { title: 'Pedicure', items: [
    { name: 'Classic Pedicure', price: '$55', time: '40 min', note: 'Soak, colour removal, steam therapy, nail and cuticle care, heel and callus care, scrub, massage, warm towels and classic polish.' },
    { name: 'Cora Deluxe Pedicure', price: '$90', time: '70 min', note: 'Soak, steam therapy, detailed care, rose scrub, foot mask, warm towels, candle massage and shellac.' },
    { name: 'Gel Pedicure', price: '$65', time: '45 min', note: 'Soak, steam therapy, detailed nail, cuticle, heel and callus care, scrub, warm towel, massage and gel colour.' },
    { name: 'Shellac', price: '$40', time: '20 min', note: 'Cut, shape and polish.' },
  ]},
  { title: 'Cora Duos', items: [
    { name: 'The Refresh', price: '$80', time: '60 min', note: 'Manicure and pedicure with regular polish.' },
    { name: 'The Shellac Duo', price: '$110', time: '75 min', note: 'Manicure and pedicure with shellac.' },
    { name: 'Cora Deluxe · Mani + Pedi', price: '$140', time: '100 min', note: 'The complete Cora manicure and pedicure ritual.' },
  ]},
  { title: 'Design & Removal', items: [
    { name: 'French', price: 'From $15', note: 'A timeless French finish.' },
    { name: 'Ombré', price: 'From $20', note: 'A soft blended colour finish.' },
    { name: 'Cat Eye', price: 'From $15', note: 'Magnetic, light-catching gel detail.' },
    { name: 'Chrome', price: 'From $15', note: 'A high-shine metallic finish.' },
    { name: 'Custom Nail Art', price: 'From $40', note: 'Your idea, your style.' },
    { name: 'Removal', price: '$25', time: '30 min', note: 'Safe removal of existing product.' },
  ]},
]

const gallery = [
  [nail1, 'Soft pink almond manicure'],
  [nail2, 'White French almond manicure'],
  [nail4, 'Burgundy French manicure with heart details'],
  [nail5, 'Pearlescent nude almond manicure'],
  [nail3, 'White and nude stiletto nails with gold line art'],
]

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Cora Nails home"><img src={logo} alt="Cora Nails" /></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#about">About</a><a href="#services">Services</a><a href="#gallery">Gallery</a><a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="#booking">Booking soon</a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
        <AnimatePresence>
          {menuOpen && <motion.nav className="mobile-nav" aria-label="Mobile navigation" initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }} animate={{ opacity: 1, clipPath: 'inset(0)' }} exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }} transition={{ duration: 0.35 }}>
            {['about', 'services', 'gallery', 'contact'].map((item) => <a key={item} href={`#${item}`} onClick={closeMenu}>{item}</a>)}
          </motion.nav>}
        </AnimatePresence>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="location-line">Nails lounge · Rosebud, Victoria</p>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>Quiet luxury,<br /><em>at your fingertips.</em></motion.h1>
            <p className="hero-intro">Thoughtful nail care and refined artistry in a calm space made for slowing down.</p>
            <div className="hero-actions"><a className="button button-dark" href="#services">Explore services <ArrowUpRight size={17} /></a><a className="text-link" href={mapsUrl} target="_blank" rel="noreferrer">Find the lounge</a></div>
          </div>
          <motion.div className="hero-image-wrap" initial={{ clipPath: 'inset(0 0 100% 0)' }} animate={{ clipPath: 'inset(0)' }} transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}>
            <img src={nail2} alt="Neutral almond manicure by Cora Nails" /><span className="hero-stamp">Cora<br />Nails</span>
          </motion.div>
          <p className="vertical-note">MINIMAL · PERSONAL · PRECISE</p>
        </section>

        <section className="intro-band" id="about"><motion.p {...reveal}>A considered nails lounge where precise technique meets an unhurried, welcoming atmosphere.</motion.p></section>

        <section className="about section-grid">
          <motion.div className="section-heading" {...reveal}><h2>Care in every<br /><em>small detail.</em></h2></motion.div>
          <motion.div className="about-copy" {...reveal}><p>Cora Nails is a dedicated nails lounge in Rosebud, created for polished results and a genuinely relaxing pause in your day.</p><p>From natural nail care and BIAB to gel colour, extensions and custom art, every appointment is approached with patience, precision and an eye for balance.</p></motion.div>
          <motion.figure className="interior-frame" {...reveal}><img src={interior} alt="Warm neutral interior of Cora Nails in Rosebud" /><figcaption>Our Rosebud lounge</figcaption></motion.figure>
          <motion.figure className="detail-frame" {...reveal}><img src={nail5} alt="Pearlescent nude almond manicure" /></motion.figure>
        </section>

        <section className="services" id="services">
          <motion.div className="services-title" {...reveal}><h2>Nail rituals,<br /><em>beautifully considered.</em></h2><p>Our focused menu is designed around healthy-looking nails, lasting finishes and detail-led artistry.</p></motion.div>
          <div className="service-menu">
            {serviceGroups.map((group) => <section className="service-group" key={group.title}><h3>{group.title}</h3><div className="service-list">{group.items.map((service) => <article className="service-row" key={`${group.title}-${service.name}`}><div><h4>{service.name}</h4><p>{service.note}</p></div><div className="service-meta"><strong>{service.price}</strong>{service.time && <span>{service.time}</span>}</div></article>)}</div></section>)}
          </div>
          <p className="price-note">Please allow extra time for removal, detailed nail art and additional length.</p>
        </section>

        <section className="gallery" id="gallery">
          <motion.div className="gallery-heading" {...reveal}><h2>Recent<br /><em>details.</em></h2><p>Soft neutrals, considered lines and tiny moments of shine.</p></motion.div>
          <div className="gallery-grid">{gallery.map(([src, alt], index) => <figure className={`gallery-item gallery-item-${index + 1}`} key={src}><img src={src} alt={alt} loading="lazy" /></figure>)}</div>
        </section>

        <section className="booking" id="booking">
          <motion.div {...reveal}><h2>Your next nail moment<br />is almost ready.</h2><p>Online booking is currently in development. In the meantime, visit us in Rosebud or check back soon.</p><button className="button button-disabled" disabled>Online booking · coming soon</button></motion.div>
          <motion.img src={nail4} alt="Burgundy French manicure with heart details" {...reveal} />
        </section>

        <section className="contact" id="contact">
          <motion.div {...reveal}><h2>Come by.<br /><em>Stay awhile.</em></h2><p>We are located in the heart of Rosebud on the Mornington Peninsula.</p></motion.div>
          <motion.div className="contact-actions" {...reveal}>
            <a className="address-card" href={mapsUrl} target="_blank" rel="noreferrer"><MapPin /><span>919 Point Nepean Road<br />Rosebud, VIC</span><ArrowUpRight /></a>
            <a className="contact-row" href="tel:+61359100033"><Phone /><span>0359 100 033</span><ArrowUpRight /></a>
            <a className="contact-row" href="mailto:anhpham1611@icloud.com"><Mail /><span>anhpham1611@icloud.com</span><ArrowUpRight /></a>
          </motion.div>
        </section>
      </main>

      <footer><a className="brand footer-brand" href="#top"><img src={logo} alt="Cora Nails" /></a><p>Nails Lounge · Rosebud, Victoria</p><a href="tel:+61359100033">0359 100 033</a><a href="mailto:anhpham1611@icloud.com">anhpham1611@icloud.com</a><a href={mapsUrl} target="_blank" rel="noreferrer">Open in Google Maps <ArrowUpRight size={15} /></a><p>© {new Date().getFullYear()} Cora Nails</p></footer>
    </div>
  )
}

export default App
