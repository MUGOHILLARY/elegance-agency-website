import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDownRight,
  ArrowRight,
  CalendarDays,
  Check,
  Crown,
  Flower2,
  Headset,
  Heart,
  MapPin,
  Menu,
  Music2,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from 'lucide-react'

const PHONE_DISPLAY = '0700303393'
const WHATSAPP_NUMBER = '254700303393'

const services = [
  {
    number: '01',
    title: 'Professional Ushering',
    description:
      'Warm welcomes, guest guidance and polished front-of-house service for every occasion.',
    icon: Users,
  },
  {
    number: '02',
    title: 'Event Planning & Management',
    description:
      'From the first idea to the final guest departure, we keep every detail running smoothly.',
    icon: CalendarDays,
  },
  {
    number: '03',
    title: 'Seating Management',
    description:
      'Beautifully considered spaces, thoughtful details and an atmosphere guests remember.',
    icon: Flower2,
  },
  {
    number: '04',
    title: 'Material Distribution',
    description:
      'Reliable waiters, hostesses, bar staff, security and event support professionals.',
    icon: ShieldCheck,
  },
  {
    number: '05',
    title: 'Crowd Control and Flow',
    description:
      'Help create the right mood with coordinated sound, lighting and event production support.',
    icon: Music2,
  },
  {
    number: '06',
    title: 'Additional Event Support',
    description:
      'Flexible assistance tailored to your event, venue, schedule and unique requirements.',
    icon: Sparkles,
  },
]

const eventTypes = [
  'Wedding',
  'Corporate event',
  'Birthday / celebration',
  'Graduation',
  'Conference',
  'Other',
]

function whatsappLink(
  message = 'Hello Elegance Agency, I would like to enquire about your services.'
) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

function Brand({ light = false }) {
  return (
    <a
      href="#home"
      className={`group inline-flex items-center gap-3 ${
        light ? 'text-white' : 'text-wine'
      }`}
      aria-label="Elegance Agency home"
    >
      <span className="relative grid h-12 w-12 place-items-center rounded-full border border-gold/80 bg-wine text-gold shadow-sm">
        <Crown
          size={14}
          strokeWidth={1.6}
          className="absolute top-1.5"
        />
        <span className="mt-2 font-display text-[1.85rem] italic leading-none">
          E
        </span>
      </span>

      <span className="flex flex-col leading-none">
        <span className="font-display text-xl tracking-[.11em]">
          ELEGANCE
        </span>

        <span className="mt-1 flex items-center gap-2 text-[9px] font-semibold tracking-[.38em] text-gold">
          <span className="h-px w-4 bg-gold" />
          AGENCY
          <span className="h-px w-4 bg-gold" />
        </span>
      </span>
    </a>
  )
}

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}) {
  return (
    <div
      className={
        centered
          ? 'mx-auto mb-12 max-w-2xl text-center'
          : 'mb-12 max-w-2xl'
      }
    >
      <span className="eyebrow">{eyebrow}</span>

      <h2 className="mt-4 font-display text-4xl leading-tight text-wine sm:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-7 text-ink/65">
          {description}
        </p>
      )}
    </div>
  )
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'Wedding',
    eventDate: '',
    location: '',
    guests: '',
    details: '',
  })

  const updateForm = (event) => {
    const { name, value } = event.target

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }))
  }

  const submitInquiry = (event) => {
    event.preventDefault()

    const message = [
      'Hello Elegance Agency! I would like to make an event inquiry.',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email || 'Not provided'}`,
      `Event type: ${form.eventType}`,
      `Event date: ${form.eventDate || 'Not confirmed'}`,
      `Location: ${form.location || 'Not confirmed'}`,
      `Estimated guests: ${form.guests || 'Not confirmed'}`,
      `Details: ${form.details || 'Please contact me to discuss.'}`,
    ].join('\n')

    setSubmitted(true)

    window.open(
      whatsappLink(message),
      '_blank',
      'noopener,noreferrer'
    )
  }

  const closeMenu = () => setMobileOpen(false)

  return (
    <div className="overflow-hidden bg-cream">
      {/* Announcement bar */}
      <div className="bg-wine py-2 text-center text-[11px] tracking-wide text-white/85 sm:text-xs">
        <span className="text-gold">✦</span>{' '}
        Thoughtful service. Beautifully managed events.{' '}
        <span className="text-gold">✦</span>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-wine/10 bg-cream/95 backdrop-blur-md">
        <div className="container-wide flex h-[78px] items-center justify-between">
          <Brand />

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Main navigation"
          >
            <a
              className="text-sm font-medium text-ink/75 transition hover:text-wine"
              href="#about"
            >
              About
            </a>

            <a
              className="text-sm font-medium text-ink/75 transition hover:text-wine"
              href="#services"
            >
              Services
            </a>

            <a
              className="text-sm font-medium text-ink/75 transition hover:text-wine"
              href="#experience"
            >
              Our approach
            </a>

            <a
              className="text-sm font-medium text-ink/75 transition hover:text-wine"
              href="#contact"
            >
              Contact
            </a>
          </nav>

          <div className="hidden lg:block">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-wine px-5 py-3 text-sm font-semibold text-white transition hover:bg-wineDark"
            >
              Plan your event <ArrowRight size={16} />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="grid h-11 w-11 place-items-center rounded-full border border-wine/15 text-wine lg:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {mobileOpen && (
          <nav
            className="border-t border-wine/10 bg-cream px-6 py-5 lg:hidden"
            aria-label="Mobile navigation"
          >
            {[
              ['About', '#about'],
              ['Services', '#services'],
              ['Our approach', '#experience'],
              ['Contact', '#contact'],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={closeMenu}
                className="block border-b border-wine/10 py-3 text-sm font-medium text-wine"
              >
                {label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-wine px-5 py-3 text-sm font-semibold text-white"
            >
              Plan your event <ArrowRight size={16} />
            </a>
          </nav>
        )}
      </header>

      <main>
        {/* Hero section */}
        <section
          id="home"
          className="relative isolate bg-wine text-white"
        >
          <div className="absolute inset-0 -z-20 bg-[url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2200&q=85')] bg-cover bg-center" />

          <div className="image-overlay absolute inset-0 -z-10" />

          <div className="absolute inset-y-0 right-0 -z-10 hidden w-[38%] border-l border-gold/20 lg:block" />

          <div className="container-wide grid min-h-[650px] items-center gap-12 py-20 lg:grid-cols-[1.1fr_.9fr] lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
            >
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-gold/40 bg-wine/35 px-4 py-2 text-[10px] font-semibold uppercase tracking-[.22em] text-gold sm:text-xs">
                <Sparkles size={14} />
                Elegance in every detail
              </div>

              <h1 className="max-w-3xl font-display text-5xl leading-[1.08] sm:text-6xl lg:text-[4.5rem]">
                Your event,
                <br />
                our <span className="gold-text italic">priority.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
                Professional ushering and thoughtful event management
                that turn important moments into exceptional experiences.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-gold px-7 py-4 text-sm font-bold text-wineDark transition hover:bg-[#e4c675]"
                >
                  Book our services <ArrowRight size={17} />
                </a>

                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/40 px-7 py-4 text-sm font-semibold text-white transition hover:border-gold hover:text-gold"
                >
                  Explore services <ArrowDownRight size={17} />
                </a>
              </div>

              <div className="mt-12 flex flex-wrap gap-x-7 gap-y-4 border-t border-white/20 pt-6 text-xs text-white/75">
                <span className="inline-flex items-center gap-2">
                  <MapPin size={15} className="text-gold" />
                  Eldoret, Kenya
                </span>

                <span className="inline-flex items-center gap-2">
                  <ShieldCheck size={15} className="text-gold" />
                  Professional team
                </span>

                <span className="inline-flex items-center gap-2">
                  <Heart size={15} className="text-gold" />
                  Service with care
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative mx-auto hidden w-full max-w-md lg:block"
            >
              <div className="absolute -inset-5 rounded-t-[220px] border border-gold/55" />

              <div className="relative overflow-hidden rounded-t-[220px] border-[7px] border-gold/80 bg-wine p-2">
                <img
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=85"
                  alt="Elegant event reception with thoughtfully arranged tables"
                  className="h-[460px] w-full rounded-t-[210px] object-cover"
                />

                <div className="absolute bottom-7 left-7 right-7 border border-gold/50 bg-wine/90 p-5 backdrop-blur-sm">
                  <span className="text-[10px] uppercase tracking-[.25em] text-gold">
                    The Elegance promise
                  </span>

                  <p className="mt-2 font-display text-2xl italic text-white">
                    All occasions. One elegant touch.
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-7 -left-10 grid h-20 w-20 place-items-center rounded-full border border-gold bg-cream text-wine shadow-luxe">
                <div className="text-center">
                  <Crown size={20} className="mx-auto text-gold" />
                  <span className="mt-1 block text-[8px] font-bold tracking-[.15em]">
                    EXCELLENCE
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </section>

        {/* Highlights */}
        <section className="border-b border-wine/10 bg-white/70">
          <div className="container-wide grid grid-cols-2 gap-6 py-7 md:grid-cols-4">
            {[
              ['Personalised', 'service'],
              ['Professional', 'presentation'],
              ['Reliable', 'coordination'],
              ['Memorable', 'experiences'],
            ].map(([title, subtitle]) => (
              <div
                key={title}
                className="flex items-center justify-center gap-3 text-center md:justify-start md:text-left"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gold/50 text-gold">
                  <Check size={16} />
                </span>

                <div>
                  <p className="font-display text-base text-wine">
                    {title}
                  </p>
                  <p className="text-xs text-ink/55">{subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About section */}
        <section id="about" className="section-pad">
          <div className="container-wide grid items-center gap-14 lg:grid-cols-2">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  className="mt-12 h-64 w-full rounded-t-full object-cover shadow-luxe sm:h-80"
                  src="https://images.unsplash.com/photo-1519225421980-888cb6b6b6b6?auto=format&fit=crop&w=800&q=80"
                  onError={(event) => {
                    event.currentTarget.onerror = null
                    event.currentTarget.src =
                      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80'
                  }}
                  alt="Elegant wedding reception decor"
                />

                <img
                  className="h-64 w-full rounded-t-full object-cover shadow-luxe sm:h-80"
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80"
                  alt="Beautiful event venue"
                />
              </div>

              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 border border-gold/50 bg-wine px-6 py-4 text-center text-white shadow-luxe">
                <p className="font-display text-xl italic">
                  Grace in every detail
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[.22em] text-gold">
                  Elegance Agency
                </p>
              </div>
            </div>

            <div className="pt-5 lg:pl-4">
              <SectionHeading
                eyebrow="A little about us"
                title={
                  <>
                    We make hosting feel{' '}
                    <span className="italic text-gold">effortless.</span>
                  </>
                }
              />

              <p className="leading-8 text-ink/70">
                Elegance Agency is a Kenyan ushering and event management
                company dedicated to making special moments memorable. We
                bring a professional team, thoughtful coordination and a
                service-first mindset to every occasion.
              </p>

              <p className="mt-4 leading-8 text-ink/70">
                From welcoming your guests to coordinating the details
                behind the scenes, we help you focus on what matters most:
                enjoying your event.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-5 border-t border-wine/10 pt-6">
                <div>
                  <p className="font-display text-xl text-wine">
                    Thoughtful
                  </p>
                  <p className="mt-1 text-sm text-ink/60">
                    Attention to detail
                  </p>
                </div>

                <div>
                  <p className="font-display text-xl text-wine">
                    Dependable
                  </p>
                  <p className="mt-1 text-sm text-ink/60">
                    A team you can trust
                  </p>
                </div>
              </div>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-wine underline decoration-gold decoration-2 underline-offset-8"
              >
                Let’s plan together <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="section-pad bg-white">
          <div className="container-wide">
            <SectionHeading
              eyebrow="What we do"
              title={
                <>
                  Every detail,{' '}
                  <span className="italic text-gold">
                    beautifully handled.
                  </span>
                </>
              }
              description="Flexible event support shaped around your plans, your guests and the experience you want to create."
              centered
            />

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map(
                ({ number, title, description, icon: Icon }, index) => (
                  <motion.article
                    key={title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06,
                    }}
                    className="group relative border border-wine/10 bg-cream p-7 transition duration-300 hover:-translate-y-1 hover:border-gold/70 hover:shadow-luxe"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid h-14 w-14 place-items-center rounded-full bg-wine text-gold transition group-hover:bg-gold group-hover:text-wine">
                        <Icon size={24} strokeWidth={1.5} />
                      </span>

                      <span className="font-display text-2xl text-gold/70">
                        {number}
                      </span>
                    </div>

                    <h3 className="mt-7 font-display text-2xl text-wine">
                      {title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-ink/65">
                      {description}
                    </p>

                    <a
                      href="#contact"
                      className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-wine"
                    >
                      Enquire
                      <ArrowRight
                        size={14}
                        className="transition group-hover:translate-x-1"
                      />
                    </a>
                  </motion.article>
                )
              )}
            </div>
          </div>
        </section>

        {/* Our approach */}
        <section
          id="experience"
          className="relative isolate bg-wine py-20 text-white sm:py-24"
        >
          <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-15" />

          <div className="container-wide grid items-center gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <span className="eyebrow text-gold">
                The Elegance experience
              </span>

              <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
                More than an event.
                <br />
                <span className="italic text-gold">
                  It’s an experience.
                </span>
              </h2>

              <p className="mt-5 max-w-md leading-8 text-white/70">
                We believe the best events feel effortless to the host and
                welcoming to every guest. Our approach puts preparation,
                presentation and people first.
              </p>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-gold px-6 py-3.5 text-sm font-bold text-wine transition hover:bg-[#e4c675]"
              >
                Start a conversation <ArrowRight size={16} />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [
                  '01',
                  'Listen & understand',
                  'We learn about your occasion, priorities and expectations.',
                ],
                [
                  '02',
                  'Plan with purpose',
                  'We align the people, schedule and details that bring it together.',
                ],
                [
                  '03',
                  'Deliver with care',
                  'Our focus stays on professional service and smooth coordination.',
                ],
                [
                  '04',
                  'Make it memorable',
                  'We help create a warm, polished experience for your guests.',
                ],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="border border-gold/25 bg-white/5 p-6 backdrop-blur-sm"
                >
                  <span className="font-display text-3xl text-gold/80">
                    {number}
                  </span>

                  <h3 className="mt-4 font-display text-xl">{title}</h3>

                  <p className="mt-2 text-sm leading-6 text-white/65">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="section-pad">
          <div className="container-wide">
            <div className="relative overflow-hidden border border-gold/35 bg-[#f3eadb] px-7 py-12 text-center sm:px-12 sm:py-16">
              <div className="absolute left-0 top-0 h-24 w-24 border-l border-t border-gold/70" />

              <div className="absolute bottom-0 right-0 h-24 w-24 border-b border-r border-gold/70" />

              <Crown
                size={28}
                className="mx-auto text-gold"
                strokeWidth={1.4}
              />

              <p className="mt-5 text-[10px] font-bold uppercase tracking-[.28em] text-gold">
                For life’s special moments
              </p>

              <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl leading-tight text-wine sm:text-5xl">
                Your vision deserves an{' '}
                <span className="italic">elegant touch.</span>
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-ink/65">
                Tell us what you are planning. We would love to discuss how
                Elegance Agency can support your day.
              </p>

              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-3 rounded-full bg-wine px-7 py-4 text-sm font-bold text-white transition hover:bg-wineDark"
              >
                Make an inquiry <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Contact and inquiry form */}
        <section id="contact" className="section-pad bg-white">
          <div className="container-wide grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <SectionHeading
                eyebrow="Let's make it happen"
                title={
                  <>
                    Tell us about your{' '}
                    <span className="italic text-gold">event.</span>
                  </>
                }
                description="Share a few details and our team can follow up to discuss your plans and the support you need."
              />

              <div className="space-y-4">
                <a
                  href={`tel:${PHONE_DISPLAY}`}
                  className="flex items-center gap-4 border border-wine/10 p-4 transition hover:border-gold/60"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-wine text-gold">
                    <Phone size={20} />
                  </span>

                  <span>
                    <span className="block text-xs text-ink/55">
                      Call us
                    </span>
                    <span className="mt-1 block font-semibold text-wine">
                      {PHONE_DISPLAY}
                    </span>
                  </span>
                </a>

                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 border border-wine/10 p-4 transition hover:border-gold/60"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-wine text-gold">
                    <Headset size={20} />
                  </span>

                  <span>
                    <span className="block text-xs text-ink/55">
                      WhatsApp
                    </span>
                    <span className="mt-1 block font-semibold text-wine">
                      Chat with Elegance Agency
                    </span>
                  </span>

                  <ArrowRight size={17} className="ml-auto text-gold" />
                </a>

                <div className="flex items-center gap-4 border border-wine/10 p-4">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-wine text-gold">
                    <MapPin size={20} />
                  </span>

                  <span>
                    <span className="block text-xs text-ink/55">
                      Based in
                    </span>
                    <span className="mt-1 block font-semibold text-wine">
                      Eldoret, Kenya
                    </span>
                  </span>
                </div>
              </div>

              <p className="mt-6 text-xs leading-6 text-ink/50">
                Prefer a quick chat? Use WhatsApp and tell us the date,
                venue and type of event you are planning.
              </p>
            </div>

            <form
              onSubmit={submitInquiry}
              className="border border-wine/10 bg-cream p-6 sm:p-9"
            >
              <div className="mb-7 flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl text-wine">
                    Event inquiry
                  </h3>

                  <p className="mt-1 text-xs text-ink/55">
                    Fields marked * are required.
                  </p>
                </div>

                <span className="grid h-12 w-12 place-items-center rounded-full border border-gold/50 text-gold">
                  <Send size={20} />
                </span>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-xs font-semibold text-wine">
                  Full name *
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={updateForm}
                    placeholder="Your name"
                    className="mt-2 w-full border border-wine/15 bg-white px-4 py-3.5 text-sm font-normal outline-none transition focus:border-gold"
                  />
                </label>

                <label className="text-xs font-semibold text-wine">
                  Phone number *
                  <input
                    required
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={updateForm}
                    placeholder="e.g. 07XX XXX XXX"
                    className="mt-2 w-full border border-wine/15 bg-white px-4 py-3.5 text-sm font-normal outline-none transition focus:border-gold"
                  />
                </label>

                <label className="text-xs font-semibold text-wine">
                  Email address
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={updateForm}
                    placeholder="you@example.com"
                    className="mt-2 w-full border border-wine/15 bg-white px-4 py-3.5 text-sm font-normal outline-none transition focus:border-gold"
                  />
                </label>

                <label className="text-xs font-semibold text-wine">
                  Type of event *
                  <select
                    required
                    name="eventType"
                    value={form.eventType}
                    onChange={updateForm}
                    className="mt-2 w-full border border-wine/15 bg-white px-4 py-3.5 text-sm font-normal outline-none focus:border-gold"
                  >
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="text-xs font-semibold text-wine">
                  Event date
                  <input
                    name="eventDate"
                    type="date"
                    value={form.eventDate}
                    onChange={updateForm}
                    min={new Date().toISOString().split('T')[0]}
                    className="mt-2 w-full border border-wine/15 bg-white px-4 py-3.5 text-sm font-normal outline-none focus:border-gold"
                  />
                </label>

                <label className="text-xs font-semibold text-wine">
                  Event location
                  <input
                    name="location"
                    value={form.location}
                    onChange={updateForm}
                    placeholder="Venue or town"
                    className="mt-2 w-full border border-wine/15 bg-white px-4 py-3.5 text-sm font-normal outline-none focus:border-gold"
                  />
                </label>

                <label className="text-xs font-semibold text-wine sm:col-span-2">
                  Estimated number of guests
                  <input
                    name="guests"
                    type="number"
                    min="1"
                    value={form.guests}
                    onChange={updateForm}
                    placeholder="e.g. 150"
                    className="mt-2 w-full border border-wine/15 bg-white px-4 py-3.5 text-sm font-normal outline-none focus:border-gold"
                  />
                </label>

                <label className="text-xs font-semibold text-wine sm:col-span-2">
                  Tell us a little more
                  <textarea
                    name="details"
                    rows="4"
                    value={form.details}
                    onChange={updateForm}
                    placeholder="What services are you looking for? Any special requirements?"
                    className="mt-2 w-full resize-y border border-wine/15 bg-white px-4 py-3.5 text-sm font-normal outline-none focus:border-gold"
                  />
                </label>
              </div>

              {submitted && (
                <p className="mt-4 text-sm font-medium text-wine">
                  Your inquiry has been prepared. If WhatsApp did not open,
                  please use the WhatsApp button to send your details.
                </p>
              )}

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-wine px-6 py-4 text-sm font-bold text-white transition hover:bg-wineDark sm:w-auto"
              >
                Send inquiry via WhatsApp <ArrowRight size={16} />
              </button>

              <p className="mt-4 text-[11px] leading-5 text-ink/50">
                Submitting opens WhatsApp with your details pre-filled. You
                will need to press Send in WhatsApp to deliver the inquiry.
              </p>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-wineDark text-white">
        <div className="container-wide grid gap-10 py-12 md:grid-cols-[1.2fr_.8fr_.8fr]">
          <div>
            <Brand light />

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
              Professional ushering and event management with a personal
              touch. We help your occasion feel as special as it should.
            </p>

            <p className="mt-4 font-display text-lg italic text-gold">
              Your Event, Our Priority.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[.2em] text-gold">
              Explore
            </h3>

            <div className="mt-5 space-y-3 text-sm text-white/70">
              <a className="block hover:text-gold" href="#about">
                About us
              </a>

              <a className="block hover:text-gold" href="#services">
                Our services
              </a>

              <a className="block hover:text-gold" href="#experience">
                Our approach
              </a>

              <a className="block hover:text-gold" href="#contact">
                Contact & booking
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[.2em] text-gold">
              Get in touch
            </h3>

            <a
              href={`tel:${PHONE_DISPLAY}`}
              className="mt-5 flex items-center gap-3 text-sm text-white/75 hover:text-gold"
            >
              <Phone size={16} /> {PHONE_DISPLAY}
            </a>

            <p className="mt-3 flex items-center gap-3 text-sm text-white/75">
              <MapPin size={16} /> Eldoret, Kenya
            </p>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 border border-gold/50 px-4 py-2.5 text-xs font-semibold text-gold transition hover:bg-gold hover:text-wineDark"
            >
              WhatsApp us <ArrowRight size={14} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container-wide flex flex-col justify-between gap-3 py-5 text-[11px] text-white/45 sm:flex-row">
            <p>
              © {new Date().getFullYear()} Elegance Agency. All rights
              reserved.
            </p>

            <p>Made by Hillary Mugo Kuria.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp button */}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Elegance Agency on WhatsApp"
        className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full border-2 border-cream bg-[#1f9d58] text-white shadow-xl transition hover:scale-105"
      >
        <Headset size={24} />
      </a>
    </div>
  )
}

export default App