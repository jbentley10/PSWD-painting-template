import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { PaintBucket, Droplets, Building2, Palette } from "lucide-react";

export default function Component() {
  return (
    <div className='flex flex-col min-h-screen bg-amber-50'>
      <header className='px-4 lg:px-6 h-14 flex items-center'>
        <Link className='flex items-center justify-center' href='#'>
          <PaintBucket className='h-6 w-6 text-amber-600' />
          <span className='ml-2 text-lg font-semibold'>
            ${process.env.NEXT_PUBLIC_COMPANY_NAME}
          </span>
        </Link>
        <nav className='ml-auto flex gap-4 sm:gap-6'>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#services'
          >
            Services
          </Link>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#gallery'
          >
            Gallery
          </Link>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#contact'
          >
            Contact
          </Link>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='/about'
          >
            About
          </Link>
        </nav>
      </header>
      <main className='flex-1'>
        <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-amber-100'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
                  {process.env.NEXT_PUBLIC_COMPANY_NAME}: Transforming Spaces
                  with Color
                </h1>
                <p className='mx-auto max-w-[700px] text-amber-800 md:text-xl'>
                  Bringing vibrant life to your home and business in the heart
                  of the desert.
                </p>
              </div>
              <div className='space-x-4'>
                <Link
                  className='inline-flex h-9 items-center justify-center rounded-md bg-amber-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-amber-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-700'
                  href='#contact'
                >
                  Get a Quote
                </Link>
                <Link
                  className='inline-flex h-9 items-center justify-center rounded-md border border-amber-600 px-4 py-2 text-sm font-medium text-amber-600 shadow transition-colors hover:bg-amber-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-700'
                  href='#services'
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          id='services'
          className='w-full py-12 md:py-24 lg:py-32 bg-white'
        >
          <div className='container px-4 md:px-6'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8'>
              Our Services
            </h2>
            <div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-3'>
              <div className='flex flex-col items-center text-center'>
                <Droplets className='h-12 w-12 text-amber-600 mb-4' />
                <h3 className='text-xl font-bold mb-2'>Exterior Painting</h3>
                <p className='text-amber-800'>
                  Protect and beautify your home's exterior with our durable,
                  weather-resistant paints.
                </p>
              </div>
              <div className='flex flex-col items-center text-center'>
                <Palette className='h-12 w-12 text-amber-600 mb-4' />
                <h3 className='text-xl font-bold mb-2'>Faux Painting</h3>
                <p className='text-amber-800'>
                  Create unique textures and finishes that mimic materials like
                  marble, wood, or stone.
                </p>
              </div>
              <div className='flex flex-col items-center text-center'>
                <Building2 className='h-12 w-12 text-amber-600 mb-4' />
                <h3 className='text-xl font-bold mb-2'>Commercial Painting</h3>
                <p className='text-amber-800'>
                  Enhance your business space with professional painting
                  services tailored to your brand.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id='gallery'
          className='w-full py-12 md:py-24 lg:py-32 bg-amber-50'
        >
          <div className='container px-4 md:px-6'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8'>
              Our Work
            </h2>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className='relative aspect-square'>
                  <Image
                    src={`/placeholder.svg?height=300&width=300`}
                    alt={`Gallery Image ${i}`}
                    layout='fill'
                    objectFit='cover'
                    className='rounded-lg'
                  />
                </div>
              ))}
            </div>
            <div className='text-center mt-8'>
              <Link
                href='/gallery'
                className='inline-flex h-9 items-center justify-center rounded-md bg-amber-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-amber-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-700'
              >
                View Full Gallery
              </Link>
            </div>
          </div>
        </section>
        <section
          id='contact'
          className='w-full py-12 md:py-24 lg:py-32 bg-amber-100'
        >
          <div className='container px-4 md:px-6'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8'>
              Get in Touch
            </h2>
            <form className='max-w-md mx-auto space-y-4'>
              <Input placeholder='Your Name' />
              <Input type='email' placeholder='Your Email' />
              <Input placeholder='Phone Number' />
              <Textarea placeholder='Tell us about your project' />
              <Button
                type='submit'
                className='w-full bg-amber-600 hover:bg-amber-700 text-white'
              >
                Request a Quote
              </Button>
            </form>
          </div>
        </section>
      </main>
      <footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-amber-50'>
        <p className='text-xs text-amber-800'>
          © 2024 {process.env.NEXT_PUBLIC_COMPANY_NAME}. All rights reserved.
        </p>
        <nav className='sm:ml-auto flex gap-4 sm:gap-6'>
          <Link
            className='text-xs hover:underline underline-offset-4 text-amber-800'
            href='#'
          >
            Terms of Service
          </Link>
          <Link
            className='text-xs hover:underline underline-offset-4 text-amber-800'
            href='#'
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
