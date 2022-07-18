import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Header() {
  return (
    <header className="relative z-50 pb-11 lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <Logo className="h-12 w-auto text-slate-900" />
        </div>
        <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-emerald-600/10 py-4 font-mono text-sm text-emerald-600 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex items-center space-x-4 px-4">
            <p>
              <time dateTime="2022-05-12">12</time>-
              <time dateTime="2022-05-26">26 of May, 2022</time>
            </p>
            <svg
              aria-hidden="true"
              className="h-1.5 w-1.5 overflow-visible fill-current stroke-current"
            >
              <path
                d="M3 0L6 3L3 6L0 3Z"
                strokeWidth={2}
                strokeLinejoin="round"
              />
            </svg>
            <p>New York City</p>
          </div>
        </div>
        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <ButtonLink href="https://edenplace.typeform.com/to/sL4gZaYs">
            Apply now
          </ButtonLink>
        </div>
      </Container>
    </header>
  )
}
