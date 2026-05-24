import { Link } from 'react-router-dom'
import { useState, useRef } from 'react'
import { Button} from '../components/ui/button'
import { Carousel, CarouselContent, CarouselItem } from '../components/ui/carousel'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import companies from '../data/companies.json'
import Autoplay from 'embla-carousel-autoplay'
import faqs from '../data/faq.json'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion'

const LandingPage = () => {
  const [sent, setSent] = useState(false)
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const messageRef = useRef(null)

  return (
    <main className="px-4 pb-6 sm:px-6 scroll-smooth">
      <section className="relative mx-auto mt-6 flex min-h-[32rem] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl shadow-black/30 sm:min-h-[calc(100vh-7rem)] sm:rounded-[5px]">
        <video
          src="/bgvid.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />

        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/35 to-black/55" />

        <div className="relative z-10 px-4 py-16 text-center text-white sm:px-6 sm:py-20">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-blue-300/80">Hire faster. Build smarter.</p>
          <h2 className="mx-auto max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl md:text-6xl">
            Find Your Dream Job and get
            <span className="text-blue-400"> Hired</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/75 md:text-base">
            Explore thousands of job listings or find the perfect candidate with our dynamic platform.
          </p>
        </div>
      </section>
      <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
        <Link to="/jobs">
          <Button variant="blue" size="xl">
            Explore Jobs
          </Button>
        </Link>
        <Link to="/post-job">
          <Button variant="red" size="xl">
            Post a Job
          </Button>
        </Link>
      </div>
<h1 id="companies" className="mt-20 mb-10 text-center text-3xl font-bold text-white sm:text-4xl">WORK WITH GLOBAL ORGANIZATIONS</h1>
<Carousel plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full py-10">
        <CarouselContent className="flex items-center gap-5 sm:gap-20">
          {companies.map(({ name, id, path }) => (
                    <CarouselItem key={id} className="basis-1/2 sm:basis-1/3 lg:basis-1/6 ">
              <img
                src={path}
                alt={name}
                        className="h-8 object-contain sm:h-14"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
<h1 id="community" className="mt-20 mb-10 text-center text-3xl font-bold text-white sm:text-4xl">Be Part of The Community</h1>

      <section className="mx-auto mt-8 max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { src: '/community/one.jpg', alt: 'Community one' },
            { src: '/community/two.jpg', alt: 'Community two' },
            { src: '/community/three.jpg', alt: 'Community three' },
            { src: '/community/four.jpg', alt: 'Community four' },
          ].map((image) => (
            <div
              key={image.src}
              className="overflow-hidden rounded-[5px] hover:scale-105 transition-transform duration-300]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-56 w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

  <h1 id="services" className="mt-20 mb-10 text-center text-3xl font-bold text-white sm:text-4xl">Our Services</h1>

<section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card className="p-0">
          <CardHeader className="px-6 py-5">
            <CardTitle className="font-bold text-xl">For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent className="px-6 pb-6">
            <p className="mb-3 text-blue-500">Search and apply for jobs, track applications, and more.</p>
            <ul className="mb-4 list-disc pl-5 text-white/60">
              <li>Personalized job recommendations</li>
              <li>One-click applications</li>
              <li>Track application status</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="p-0">
          <CardHeader className="px-6 py-5">
            <CardTitle className="font-bold text-xl">For Employers</CardTitle>
          </CardHeader>
          <CardContent className="px-6 pb-6">
            <p className="mb-3 text-blue-500">Post jobs, manage applications, and find the best candidates.</p>
            <ul className="mb-4 list-disc pl-5 text-white/60">
              <li>Post unlimited jobs (premium)</li>
              <li>Advanced candidate search</li>
              <li>Collaborative hiring tools</li>
            </ul>
          </CardContent>
        </Card>
      </section>

<h1 id="pricing" className="mt-20 mb-10 text-center text-3xl font-bold text-white sm:text-4xl">Choose a Plan that Fits you</h1>

<section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: 'Basic Plan',
            price: 'Free',
            buttonLabel: 'Choose Basic',
            buttonClassName: 'bg-green-500 text-white hover:bg-green-600 focus-visible:ring-green-400',
            points: [
              'Job Seekers — Browse and save jobs',
              'Recruiters — Post up to 5 jobs per month',
              'Both — Email alerts and mobile access',
              'Candidate profiles with resume upload',
              'Basic analytics and applicant tracking',
            ],
          },
          {
            title: 'Premium Plan',
            price: '$49/mo',
            buttonLabel: 'Choose Premium',
            buttonClassName: 'bg-blue-500 text-white hover:bg-blue-700 focus-visible:ring-blue-400',
            points: [
              'Featured profile and priority matching',
              'Recruiters — Unlimited job postings',
              'Both — Advanced filters and integrations',
              'Priority support and onboarding',
              'Applicant export and collaboration tools',
            ],
          },
          {
              buttonLabel: 'Contact Us',
              buttonClassName: 'bg-red-500 text-white hover:bg-red-700 focus-visible:ring-red-400',
            title: 'Enterprise Plan',
            price: 'Contact Us',
            points: [
              'Enterprise placement opportunities',
              'Dedicated account manager and SSO',
              'Both — Custom integrations and SLAs',
              'Advanced security and compliance',
              'Custom reporting and analytics',
            ],
          },
        ].map((plan) => (
          <Card key={plan.title} className="p-0 border border-blue-500/20 hover:border-blue-600/40">
            <CardHeader className="px-6 pt-6">
              <CardTitle className="text-2xl font-extrabold">{plan.title}</CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <div className="mb-4 text-3xl font-bold text-blue-500">{plan.price}</div>
              <ul className="mt-4 mb-8 list-disc space-y-2 pl-5 text-white/70">
                {plan.points.map((p) => (<li key={p}>{p}</li>))}
              </ul>
              <Button className={`${plan.buttonClassName} cursor-pointer`} onClick={(e) => e.preventDefault()}>
                {plan.buttonLabel}
              </Button>
            </CardContent>
          </Card>
        ))}

  </section>

  <h1 id="about" className="mt-20 mb-10 text-center text-3xl font-bold text-white sm:text-4xl">About Us</h1>
  <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch">
      <div className="overflow-hidden rounded-[5px] border border-blue-500/25">
        <video
          src="/aboutus.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-64 w-full object-cover sm:h-72 md:h-96"
        />
      </div>

        <div className="min-h-72 rounded-[5px] border border-blue-700 bg-transparent p-5 text-white md:min-h-96 md:p-8">
        <h3 className="mb-3 text-lg font-semibold text-blue-400 md:text-xl">Who Are We</h3>
        <p className="text-base leading-7 md:text-base lg:text-xl">
          Hired is a modern job finding and publishing platform built to make hiring simpler for everyone. Whether you're a professional looking for your next big opportunity or a company searching for the right talent, Hired cuts through the clutter and connects people who belong together. We believe that the right job can change a life, and the right hire can change a business - so we've built a platform that takes both sides seriously, with smart tools, honest listings, and a seamless experience from first click to first day on the job. Join us and find your place in the future of work.
        </p>
      </div>
      
    </div>
  </section>
  <h1 id="faqs" className="mt-20 mb-10 text-center text-3xl font-bold text-white sm:text-4xl">Frequently Asked Questions</h1>
  
  <Accordion type="multiple" className="w-full cursor-pointer rounded-lg border border-blue-700 bg-transparent p-4 text-white">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
  <h1 id="contact" className="mt-20 mb-10 text-center text-3xl font-bold text-white sm:text-4xl">Get in Touch with Us</h1>
  <section id="get-in-touch" className="mx-auto max-w-2xl px-4 pb-6 sm:px-6">
    <div className="rounded-lg border border-white/10 bg-transparent p-6 text-white">
      <form onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
          if (nameRef.current) nameRef.current.value = '';
          if (emailRef.current) emailRef.current.value = '';
          if (messageRef.current) messageRef.current.value = '';
        }} className="grid gap-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <input ref={nameRef} name="name" placeholder="Your name" className="flex-1 min-w-0 rounded-md bg-transparent border border-white/20 px-3 py-2 text-white placeholder-white/60" required />
          <input ref={emailRef} name="email" type="email" placeholder="Your email" className="flex-1 min-w-0 rounded-md bg-transparent border border-white/20 px-3 py-2 text-white placeholder-white/60" required />
        </div>
        <textarea ref={messageRef} name="message" placeholder="Message" rows={4} className="w-full rounded-md bg-transparent border border-white/20 px-3 py-2 text-white placeholder-white/60" required />
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <Button variant="blue" size="lg" type="submit">Send Message</Button>
          {sent && <span className="text-green-400">We will get back to you shortly 😄</span>}
        </div>
      </form>
    </div>
  </section>
    </main>
  )
}

export default LandingPage