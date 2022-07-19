import Image from 'next/image'

import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
// import backgroundImage from '@/images/logos/eden-place-blur.png'

export function Hero() {
  return (
    <div className="relative pt-10 pb-20 sm:py-24">
      <div className="absolute -inset-x-0 -top-48 -bottom-14 overflow-hidden bg-emerald-50">
        {/* <div className="absolute top-0 left-0 -translate-y-[10%] -translate-x-[55%] -scale-x-100 sm:left-1/2 sm:-translate-y-[6%] sm:-translate-x-[98%] lg:-translate-x-[106%] xl:-translate-x-[122%]">
          <Image
            src={backgroundImage}
            alt=""
            layout="fixed"
            width={918}
            height={1495}
            priority
            unoptimized
          />
        </div> */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-emerald-600 sm:text-7xl">
            <span className="sr-only">Friendly Style - </span>A social club for
            food lovers.
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-emerald-900">
            <p>
              The last few years, we have lost the art of social acquaintances
              and meeting our next pal or partner across the dinner table. As
              the world opens up we&apos;ll find home and community in
              restaurants.
            </p>
            <p>
              Eden is a new company dedicated to people passionate about food
              and community. Our first act is Friendly Style, a series of
              dinners inspired by family-style meals, dinner parties, and good
              conversation.
            </p>
          </div>
          <ButtonLink
            className="mt-10 w-full sm:hidden"
            href="https://edenplace.typeform.com/to/sL4gZaYs"
          >
            Apply now
          </ButtonLink>
          <dl className="mt-10 grid grid-cols-2 gap-y-6 gap-x-10 sm:mt-16 sm:gap-y-10 sm:gap-x-16 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Meals', '10'],
              ['People Attending', '20-40'],
              ['Venue', 'Top Restaurants'],
              ['Location', 'New York City'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-emerald-600">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-emerald-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}
