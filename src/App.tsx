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
  { title: 'Cora Duos', items: [
    { name: 'The Refresh', price: '$80', time: '60 min', note: 'Essential classic pairing for clean, revitalized hands and feet. Includes Classic Manicure and Classic Pedicure with regular polish.' },
    { name: 'The Shellac Duo', price: '$110', time: '75 min', note: 'Long-lasting shine and zero dry-time for both hands and feet. Includes Manicure and Pedicure with high-gloss Shellac gel polish.' },
    { name: 'Cora Deluxe', price: '$140', time: '100 min', note: 'The ultimate head-to-toe pampering ritual combining deep exfoliation, hydration and soothing massage. Includes Cora Deluxe Manicure and Cora Deluxe Pedicure.' },
    { name: 'Cora Builder Pedicure', price: '$135', time: '90 min', note: 'Long-lasting toe care reinforced with builder gel overlay for superior durability and shine. Includes Pedicure Shellac and builder overlay on toenails.' },
  ]},
  { title: 'Builder Gel / BIAB', items: [
    { name: 'Builder Gel Overlay · Natural Nails', price: '$80', time: '50 min', note: 'Premium builder gel applied over natural nails to enhance strength, prevent breakage and promote healthy nail growth.' },
    { name: 'Builder Gel Full Set', price: '$90', time: '60 min', note: 'Complete extension set sculpted with builder gel to add both desired length and lasting strength.' },
    { name: 'Builder Gel Infill · Tips', price: '$75', time: '55 min', note: 'Maintenance and rebalancing for existing tip extensions with builder gel.' },
    { name: 'Builder Gel Infill · Natural Nails', price: '$65', time: '45 min', note: 'Regular upkeep and infill over natural nails to maintain apex balance and structure.' },
    { name: 'Extra Length / Custom Form', price: '$10–$30', note: 'Optional add-on; price varies by length.' },
  ]},
  { title: 'SNS / Dip Powder', items: [
    { name: 'SNS French Signature', price: '$70', time: '60 min', note: 'Elegant and timeless French tips using a high-quality dip powder system. Includes SNS overlay, French tip design and previous colour removal.' },
    { name: 'SNS Luxe Overlay', price: '$70', time: '60 min', note: 'Complete nail rejuvenation combined with a durable dipping powder coating. Includes full manicure care, SNS overlay and previous colour removal.' },
    { name: 'SNS Classic', price: '$65', time: '50 min', note: 'Basic full set application using dip powder for resilient, chip-free colour.' },
    { name: 'SNS Overlay', price: '$55', time: '50 min', note: 'Direct dip powder application over natural nails to provide colour and lightweight reinforcement.' },
    { name: 'Extra Length / Custom Form', price: '$10–$30', note: 'Optional add-on; price varies by length.' },
  ]},
  { title: 'Acrylic', items: [
    { name: 'Full Set Acrylic + Shellac', price: '$70', time: '55 min', note: 'Full set of acrylic extensions finished with your choice of long-lasting, glossy shellac colour.' },
    { name: 'Classic Acrylic Full Set', price: '$65', time: '50 min', note: 'Full set of acrylic extensions finished with standard professional lacquer polish.' },
    { name: 'Acrylic Infill + Shellac', price: '$60', time: '50 min', note: 'Maintenance for existing acrylics, including growth infill, reshaping, cuticle neatening and fresh shellac colour.' },
    { name: 'Acrylic Infill + Polish', price: '$55', time: '45 min', note: 'Standard upkeep for existing acrylics, including infill, reshaping and fresh regular polish.' },
    { name: 'Extra Length / Custom Form', price: '$10–$30', note: 'Optional add-on; price varies by length.' },
  ]},
  { title: 'Gel-X Extensions', items: [
    { name: 'Gel-X Extensions · Full Set', price: 'From $70', time: '40 min', note: 'Gentle, 100% soft-gel full-cover tip extensions that provide instant length with minimal natural nail damage. No infills are available; a fresh set and soak-off are required.' },
  ]},
  { title: 'Manicure', items: [
    { name: 'Classic Manicure', price: '$35', time: '30 min', note: 'Essential routine hand grooming for clean, polished, healthy-looking nails. Includes nail and cuticle care, gentle hand massage, moisturizing lotion and classic polish. Complimentary colour removal included.' },
    { name: 'Cora Deluxe Manicure', price: '$65', time: '60 min', note: 'An indulgent spa experience focused on deep skin hydration and hand rejuvenation. Includes detailed nail and cuticle care, premium exfoliating scrub, hydrating mask, warm towel compress, tension-relief massage, premium moisturizer and shellac finish. Complimentary colour removal included.' },
    { name: 'Gel Manicure', price: '$55', time: '45 min', note: 'Detailed precision cuticle preparation finished with durable gel colour that stays shiny for weeks. Includes detailed prep, cuticle treatment, gel colour, hand massage and moisturizer. Complimentary colour removal included.' },
    { name: 'Shellac Manicure · Cut & Polish', price: '$45', time: '30 min', note: 'A quick nail refresh with high-gloss shellac colour. Includes cutting, nail shaping and shellac gel polish. Complimentary colour removal included.' },
  ]},
  { title: 'Pedicure', items: [
    { name: 'Classic Pedicure', price: '$55', time: '40 min', note: 'A refreshing foot soak and grooming ritual to soothe tired feet. Includes warm foot soak, nail and cuticle care, heel and callus smoothing, exfoliating scrub, warm towels, steam therapy, foot massage, moisturizer and classic polish. Complimentary colour removal included.' },
    { name: 'Cora Deluxe Pedicure', price: '$85', time: 'From 60 min', note: 'Our signature sensory foot spa treatment with nourishing warm candle massage and intensive steam therapy. Includes herbal soak, precision nail and cuticle care, heel and callus treatment, premium exfoliating scrub, hydrating mask, steam therapy, warm towels, warm candle oil massage, premium moisturizer and shellac polish. Complimentary colour removal included.' },
    { name: 'Gel Pedicure', price: '$65', time: '45 min', note: 'A complete foot and nail overhaul paired with smudge-free, instant-dry gel colour. Includes foot soak, nail and cuticle treatment, heel and callus care, body scrub, warm towel, steam therapy, foot massage, moisturizer and gel colour. Complimentary colour removal included.' },
    { name: 'Shellac Pedicure · Cut & Polish', price: '$40', time: '20 min', note: 'Quick maintenance for fast, beautiful toenails. Includes trimming, filing, shaping and shellac polish. Complimentary colour removal included.' },
  ]},
  { title: 'Nail Art & Add-ons', items: [
    { name: 'French Tips', price: 'From $20', note: 'Classic white or modern colourful French smile line accent.' },
    { name: 'Ombré', price: 'From $25', note: 'A seamless gradient blend between two or more contrasting or complementary shades.' },
    { name: 'Cat Eye Effect', price: 'From $15', note: 'A velvet metallic magnetic effect creating multidimensional light reflections.' },
    { name: 'Chrome Finish', price: 'From $15', note: 'High-shine mirror, glazed-donut or holographic pigment powder buffed onto polish.' },
    { name: 'Custom Nail Art', price: 'From $50', note: 'Bespoke hand-painted artwork, charms, 3D gel sculpting or intricate multi-finger designs — your idea, your style.' },
  ]},
  { title: 'Removal Services', items: [
    { name: 'Professional Removal', price: '$30', time: '25 min', note: 'Safe, gentle removal of acrylic, SNS dip powder or builder gel without damaging the natural nail plate. Finished with nail conditioning.' },
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
