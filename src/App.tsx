import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, MapPin, Menu, X } from 'lucide-react'
import interior from './assets/images2/nail_interior_cora.jpeg'
import nail1 from './assets/images2/nailpic1.jpeg'
import nail2 from './assets/images2/nailpic2.jpeg'
import nail3 from './assets/images2/nailpic3.jpeg'
import nail4 from './assets/images2/nailpic4.jpeg'
import nail5 from './assets/images2/nailpic5.jpeg'

const mapsUrl = 'https://share.google/MZ7t2PZCGkwwA43b4'

const services = [
  { name: 'Deluxe Naked Manicure', price: '$60', time: '45 min', note: 'Precise cuticle care, strengthening finish, exfoliation and a warm towel ritual.' },
  { name: 'Express Gel Manicure', price: '$65', time: '45 min', note: 'Detailed nail preparation with gel colour, hydrating lotion and cuticle oil.' },
  { name: 'Deluxe Gel Manicure', price: '$80', time: '60 min', note: 'A complete gel manicure with exfoliation, hydration and a warm towel finish.' },
  { name: 'Builder Gel / BIAB', price: '$85', time: '75 min', note: 'Strength and structure for natural nails, finished with your chosen gel colour.' },
  { name: 'BIAB Rebalance', price: '$95', time: '90 min', note: 'A considered refresh with detailed e-file cuticle care and colour.' },
  { name: 'Extensions', price: '$130', time: '120 min', note: 'Added length with tips or full-cover extensions, cuticle care and gel colour.' },
  { name: 'Deluxe Naked Pedicure', price: '$75', time: '45 min', note: 'Cuticle and callus care, exfoliation, hydration and warm towels.' },
  { name: 'Deluxe Gel Pedicure', price: '$95', time: '60 min', note: 'Detailed nail and callus care with gel colour and a restorative finish.' },
]

const gallery = [
  [nail1, 'Olive and cream almond nail art with gold detail'],
  [nail2, 'Neutral almond manicure with fine gold accents'],
  [nail3, 'Soft blush heart nail art'],
  [nail4, 'Warm taupe shimmer manicure'],
  [nail5, 'Chocolate and blush modern nail design'],
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
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Cora Nails home"><span>Cora</span> Nails</a>
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
          <motion.figure className="detail-frame" {...reveal}><img src={nail4} alt="Warm taupe shimmer manicure" /></motion.figure>
        </section>

        <section className="services" id="services">
          <motion.div className="services-title" {...reveal}><h2>Nail rituals,<br /><em>beautifully considered.</em></h2><p>Our focused menu is designed around healthy-looking nails, lasting finishes and detail-led artistry.</p></motion.div>
          <div className="service-list">
            {services.map((service) => <article className="service-row" key={service.name}><div><h3>{service.name}</h3><p>{service.note}</p></div><div className="service-meta"><strong>{service.price}</strong><span>{service.time}</span></div></article>)}
          </div>
          <p className="price-note">Indicative pricing carried over from the current menu — please confirm before launch. Nail art and removal can be added to your service.</p>
        </section>

        <section className="gallery" id="gallery">
          <motion.div className="gallery-heading" {...reveal}><h2>Recent<br /><em>details.</em></h2><p>Soft neutrals, considered lines and tiny moments of shine.</p></motion.div>
          <div className="gallery-grid">{gallery.map(([src, alt], index) => <figure className={`gallery-item gallery-item-${index + 1}`} key={src}><img src={src} alt={alt} loading="lazy" /></figure>)}</div>
        </section>

        <section className="booking" id="booking">
          <motion.div {...reveal}><h2>Your next nail moment<br />is almost ready.</h2><p>Online booking is currently in development. In the meantime, visit us in Rosebud or check back soon.</p><button className="button button-disabled" disabled>Online booking · coming soon</button></motion.div>
          <motion.img src={nail3} alt="Blush heart nail art" {...reveal} />
        </section>

        <section className="contact" id="contact">
          <motion.div {...reveal}><h2>Come by.<br /><em>Stay awhile.</em></h2><p>We are located in the heart of Rosebud on the Mornington Peninsula.</p></motion.div>
          <motion.a className="address-card" href={mapsUrl} target="_blank" rel="noreferrer" {...reveal}><MapPin /><span>919 Point Nepean Road<br />Rosebud, VIC</span><ArrowUpRight /></motion.a>
        </section>
      </main>

      <footer><a className="brand footer-brand" href="#top"><span>Cora</span> Nails</a><p>Nails Lounge · Rosebud, Victoria</p><a href={mapsUrl} target="_blank" rel="noreferrer">Open in Google Maps <ArrowUpRight size={15} /></a><p>© {new Date().getFullYear()} Cora Nails</p></footer>
    </div>
  )
}

export default App
