---
name: Cora Nails
description: A quiet lacquer atelier for precise nail care in Rosebud.
colors:
  ink: "#26231f"
  muted-ink: "#625c54"
  warm-cream: "#f3efe7"
  paper-greige: "#e8e1d6"
  soft-greige: "#aaa093"
  warm-taupe: "#82776b"
  hairline: "rgba(38,35,31,.18)"
typography:
  display:
    fontFamily: "Italiana, serif"
    fontSize: "clamp(4rem,7.6vw,8rem)"
    fontWeight: 400
    lineHeight: 0.88
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Italiana, serif"
    fontSize: "clamp(3rem,5.6vw,6rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Italiana, serif"
    fontSize: "1.6rem"
    fontWeight: 400
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.12em"
rounded:
  image: "14px"
  pill: "999px"
  arch: "48% 48% 14px 14px"
spacing:
  xs: "0.8rem"
  sm: "1.5rem"
  md: "2rem"
  lg: "4rem"
  section: "10rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.warm-cream}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.95rem 1.4rem"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.warm-taupe}"
    textColor: "{colors.warm-cream}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.72rem 1.2rem"
  button-disabled:
    backgroundColor: "rgba(38,35,31,.75)"
    textColor: "{colors.warm-cream}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.95rem 1.4rem"
    height: "48px"
---

# Design System: Cora Nails

## Overview

**Creative North Star: "The Quiet Lacquer Atelier"**

Cora Nails presents nail care as a calm, contemporary atelier rather than a predictable pink salon. Warm greige paper, ink-black type, tactile photography, soft organic arches, and precise hairlines make the experience feel minimalist, refined, and human.

The system pairs editorial scale with unhurried spacing. Italiana gives promises, service names, and location details a crafted voice; DM Sans keeps navigation and practical information clear. Real salon and nail photography carries the proof, while motion remains slow, sparse, and material.

**Key Characteristics:**

- Warm, low-saturation neutrals with ink-led contrast.
- Editorial serif scale balanced by compact utilitarian labels.
- Tall photography, rounded arches, and asymmetric compositions.
- Hairline structure and generous negative space instead of decoration.
- Restrained reveal, underline, lift, and image-scale interactions.

## Colors

The palette resembles warm paper, stone, lacquer, and charcoal; contrast comes from value rather than bright chroma.

### Primary

- **Atelier Ink:** The principal text, dark surface, outline, and primary-action color.

### Secondary

- **Warm Taupe:** A restrained accent for italic display phrases, selection, hover states, and tactile details.
- **Soft Greige:** A grounded feature-section field that separates booking content without introducing a new hue.

### Neutral

- **Warm Cream:** The default page canvas and light-on-dark text color.
- **Paper Greige:** A secondary surface for service content and image placeholders.
- **Muted Ink:** Supporting copy and low-emphasis labels.
- **Ink Hairline:** Dividers and structural borders that organize without boxing content in.

### Named Rules

**The No Pink Default Rule.** Keep the identity grounded in warm mineral neutrals; nail photography supplies expressive color.

**The Ink First Rule.** Use Atelier Ink for decisive contrast and Warm Taupe only as a selective accent or state change.

## Typography

**Display Font:** Italiana (with serif fallback)  
**Body Font:** DM Sans (with sans-serif fallback)

**Character:** The narrow, elegant display face makes the salon feel editorial and crafted. The low-contrast sans-serif keeps practical information direct, contemporary, and easy to scan.

### Hierarchy

- **Display:** Regular, tightly set, and oversized; reserved for the hero promise.
- **Headline:** Regular with compact leading; used for section statements and calls to action.
- **Title:** Regular serif; used for services and prominent address text.
- **Body:** Regular sans-serif with open leading; used for explanatory copy, generally constrained to readable measures.
- **Label:** Small, tracked, uppercase sans-serif; used for navigation, metadata, buttons, captions, and location cues.

### Named Rules

**The Two-Voice Rule.** Italiana carries atmosphere and emphasis; DM Sans carries navigation, explanation, and action.

**The Italic Accent Rule.** Use taupe italic display text to soften one phrase, never an entire heading or paragraph.

## Layout

Desktop compositions use broad editorial grids inside fluid gutters of roughly 6–8vw, with primary content capped near 1400px. Sections breathe vertically, typically using the section spacing token, while hero and feature areas use split layouts with intentionally unequal columns.

At 900px, navigation collapses, major grids simplify, and gutters tighten to 5vw. At 600px, compositions become single-column or compact two-column galleries; service descriptions yield to names, price, and duration. Mobile keeps the asymmetric image overlaps and arches rather than flattening the design into generic stacked cards.

**The Breathing Room Rule.** Preserve generous section rhythm and readable copy measures; do not fill empty space with ornamental UI.

## Elevation & Depth

The system is flat by default and uses no box shadows. Depth comes from tonal fields, photography, clipping, translucent surfaces, backdrop blur in the fixed header and hero stamp, and small state-based transforms.

**The Tonal Depth Rule.** Separate layers with warm surface changes, hairlines, blur, and overlap before considering a shadow.

## Shapes

The form language alternates between precise hairlines, softly rounded rectangular images, full pill actions, and tall organic arches. Standard media corners use the image radius; hero and booking portraits use the arch radius. Large circular or arched forms belong to photography and stamps, not arbitrary content containers.

**The Arch Belongs to Imagery Rule.** Use the organic arch to frame nail work or the salon atmosphere; keep information surfaces quiet and structurally simple.

## Components

### Buttons

- **Shape:** Full pill with a 48px minimum touch height.
- **Primary:** Atelier Ink field, Warm Cream label, compact horizontal padding, and a small directional icon where useful.
- **Hover / Focus:** Lift slightly and shift to Warm Taupe; retain the global high-contrast offset focus outline.
- **Outline:** Transparent pill with an ink hairline, reversing to Ink on hover.
- **Disabled:** Muted translucent ink with a not-allowed cursor and no implied destination.

### Cards / Containers

- **Corner Style:** Most information stays unboxed; media uses softly rounded rectangles or arches.
- **Background:** Warm Cream is primary; Paper Greige and Soft Greige create major sectional shifts.
- **Shadow Strategy:** None; use tonal contrast, hairlines, overlap, and clipping.
- **Internal Padding:** Generous only where a full section acts as the container.

### Navigation

The fixed desktop header uses a three-column arrangement: wordmark, centered uppercase links, and a right-aligned outlined status action. Links reveal a fine underline on hover. Below 900px, a plain icon button opens a full-width cream menu with large serif links; the motion clips downward rather than sliding laterally.

### Service Rows

Service rows are separated by hairlines and pair a serif title with restrained supporting copy and right-aligned price metadata. Desktop hover shifts the row slightly and adds a faint light wash; mobile removes that movement and hides descriptions to protect scanability.

### Image Frames

Photography is full-bleed within clipped frames, always using `object-fit: cover`. Gallery images use quiet rounded rectangles and a very subtle hover scale; hero, detail, and booking imagery use distinctive arches to carry the visual identity.

### Address Card

The address is a large serif text link framed only by top and bottom ink hairlines. A location icon opens the reading order and an arrow signals the external Maps destination; hover shifts the complete row as one unit.

## Do's and Don'ts

### Do:

- **Do** let real nail and salon photography carry color, texture, and proof.
- **Do** maintain strong ink-on-cream contrast, visible focus, mobile touch targets, and reduced-motion behavior.
- **Do** use generous whitespace, asymmetric editorial grids, and hairlines to establish hierarchy.
- **Do** keep booking language explicitly unavailable until a verified booking route exists.

### Don't:

- **Don't** introduce default salon pinks, glossy gradients, ornamental florals, or faux-luxury gold effects.
- **Don't** add card shadows or rounded boxes around every piece of content.
- **Don't** use arches indiscriminately; reserve them for photographic and stamp-like moments.
- **Don't** turn every heading into italic taupe or dilute the two-typeface hierarchy.
- **Don't** present unverified contact, opening-hour, social, or booking details as fact.
