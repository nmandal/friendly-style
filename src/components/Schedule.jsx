import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'

const schedule = [
  {
    date: 'May 12',
    dateTime: '2022-05-12',
    summary:
      'Chinese Tuxedo by Paul Donnelly and team are presenting traditional banquet-style dishes with a bit of a twist.',
    timeSlots: [
      {
        name: 'Sweet potato spring roll',
        description: '',
        start: '9:00AM',
        end: '10:00AM',
      },
      {
        name: 'Steamed branzino',
        description: '',
        start: '9:00AM',
        end: '10:00AM',
      },
      {
        name: 'Vegetarian xo fried rice',
        description: '',
        start: '9:00AM',
        end: '10:00AM',
      },
    ],
  },
  {
    date: 'May 15',
    dateTime: '2022-05-15',
    summary:
      'Dame by Patricia Howard & Ed Szymanski is showing NYC peeps that there is a high bar for hearty seafood.',
    timeSlots: [
      {
        name: 'Grilled oysters with green chartreuse hollandaise',
        description: '',
        start: '9:00AM',
        end: '10:00AM',
      },
      {
        name: 'Fish pie',
        description: '',
        start: '9:00AM',
        end: '10:00AM',
      },
      {
        name: 'Proper English chips',
        description: 'Fries for you Americans',
        start: '9:00AM',
        end: '10:00AM',
      },
      {
        name: 'Lemon posset',
        description: '',
        start: '9:00AM',
        end: '10:00AM',
      },
    ],
  },
  {
    date: 'May 17',
    dateTime: '2022-05-17',
    summary:
      'Olmsted by Greg Baxtrom and Ian Rothman have created a culinary institution that gives off this sense that they are chill but are really pretentious about the quality of dishes that they are serving.',
    timeSlots: [
      {
        name: 'Lime leaf popcorn monkfish',
        description: '',
        start: '9:00AM',
        end: '10:00AM',
      },
      {
        name: 'Rutabaga soup',
        description: '',
        start: '9:00AM',
        end: '10:00AM',
      },
      {
        name: 'Rainbow carrot cake',
        description: '',
        start: '9:00AM',
        end: '10:00AM',
      },
    ],
  },
  {
    date: 'May 25',
    dateTime: '2022-05-25',
    summary:
      'Falansai by Eric Tran and team showcases their heritage while remaining undeterred by the old guard says.',
    timeSlots: [
      {
        name: 'Dac Biet',
        description:
          'A special Vietnamese tasting menu featuring seasonal dishes that meld Vietnamese and Mexican dishes.',
        start: '9:00AM',
        end: '10:00AM',
      },
    ],
  },
  {
    date: 'May 26',
    dateTime: '2022-05-26',
    summary:
      "Bonnie's by Brooklyn native and Win Son alum Calvin Eng is whipping iconic dishes celebrating his Taiwanese heritage with that cool boy NYC flair.",
    timeSlots: [
      {
        name: 'Tinned dace fish',
        description: '',
        start: '9:00AM',
        end: '10:00AM',
      },
      {
        name: 'Cha sui McRib',
        description: '',
        start: '9:00AM',
        end: '10:00AM',
      },
      {
        name: 'Cantonese cacio e pepe',
        description: '',
        start: '9:00AM',
        end: '10:00AM',
      },
    ],
  },
]

function ScheduleTabbed() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let smMediaQuery = window.matchMedia('(min-width: 640px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(smMediaQuery)
    smMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      smMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <Tab.Group
      as="div"
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === 'vertical'}
    >
      <Tab.List className="-mx-4 flex space-x-4 overflow-x-auto pl-4 pb-4 sm:mx-0 sm:block sm:space-y-10 sm:space-x-0 sm:pb-0 sm:pl-0 sm:pr-8">
        {({ selectedIndex }) =>
          schedule.map((day, dayIndex) => (
            <div
              key={day.dateTime}
              className={clsx(
                'relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0',
                {
                  'opacity-70': dayIndex !== selectedIndex,
                }
              )}
            >
              <DaySummary
                day={{
                  ...day,
                  date: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                      <span className="absolute inset-0" />
                      {day.date}
                    </Tab>
                  ),
                }}
              />
            </div>
          ))
        }
      </Tab.List>
      <Tab.Panels>
        {schedule.map((day) => (
          <Tab.Panel
            key={day.dateTime}
            className="[&:not(:focus-visible)]:focus:outline-none"
          >
            <TimeSlots day={day} />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

function DaySummary({ day }) {
  return (
    <>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-emerald-900">
        <time dateTime={day.dateTime}>{day.date}</time>
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-emerald-900">
        {day.summary}
      </p>
    </>
  )
}

function TimeSlots({ day, className }) {
  return (
    <div
      className={clsx(
        className,
        'space-y-8 bg-white/60 py-14 px-10 text-center shadow-xl shadow-emerald-900/5 backdrop-blur'
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => (
        <div key={timeSlot.start}>
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-8 h-px w-48 bg-emerald-500/10" />
          )}
          <h4 className="text-lg font-semibold tracking-tight text-emerald-900">
            {timeSlot.name}
          </h4>
          {timeSlot.description && (
            <>
              <p className="sr-only">talking about</p>
              <p className="mt-1 tracking-tight text-emerald-900">
                {timeSlot.description}
              </p>
            </>
          )}
          {/* <p className="sr-only">at</p>
          <p className="mt-1 font-mono text-sm text-slate-500">
            <time dateTime={`${day.dateTime}T${timeSlot.start}-08:00`}>
              {timeSlot.start}
            </time>{' '}
            -{' '}
            <time dateTime={`${day.dateTime}T${timeSlot.end}-08:00`}>
              {timeSlot.end}
            </time>{' '}
            PST
          </p> */}
        </div>
      ))}
    </div>
  )
}

function ScheduleStatic() {
  return (
    <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-8">
      {schedule.map((day) => (
        <section key={day.dateTime}>
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-10" />
        </section>
      ))}
    </div>
  )
}

export function Schedule() {
  return (
    <section
      id="schedule"
      aria-labelledby="schedule-title"
      className="py-20 sm:py-32"
    >
      <h2 id="schedule-title" className="sr-only">
        Schedule
      </h2>
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <p className="font-display text-4xl font-medium tracking-tighter text-emerald-600 sm:text-5xl">
            Put on your best spring-summer outfits, practice the hand motions
            for passing plates, and join us in dining Friendly Style!
          </p>
          <p className="mt-4 font-display text-2xl tracking-tight text-emerald-900">
            Price includes the cost of dinners, drinks, vibes, and also the
            effort in putting together a memorable dining experience that you’ll
            tell everyone about.
          </p>
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <div className="absolute -inset-x-0 -top-40 -bottom-32 overflow-hidden bg-emerald-50">
          <div className="absolute left-full top-0 translate-y-[0%] -translate-x-[50%] sm:left-1/2 sm:-translate-y-[15%] sm:-translate-x-[20%] md:translate-x-[0%] lg:translate-x-[5%] lg:translate-y-[4%] xl:-translate-y-[8%] xl:translate-x-[27%]">
            {/* <Image
              src={backgroundImage}
              alt=""
              layout="fixed"
              width={918}
              height={1495}
              unoptimized
            /> */}
          </div>
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
        </div>
        <Container className="relative">
          <ScheduleTabbed />
          <ScheduleStatic />
        </Container>
      </div>
    </section>
  )
}
