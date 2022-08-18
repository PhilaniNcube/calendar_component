import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {Fragment } from 'react'
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/solid'
import {Menu, Transition} from '@headlessui/react'
import {DotsVerticalIcon} from '@heroicons/react/outline'
import { eachDayOfInterval, endOfMonth, format, startOfToday } from 'date-fns'
import { startOfMonth } from 'date-fns/esm'




const days = [
  {date: '2021-12-27'},
  {date: '2021-12-28'},
  {date: '2021-12-29'},
  {date: '2021-12-30'},
  {date: '2021-12-31'},
  {date: '2022-01-01', isCurrentMonth: true},
  {date: '2022-01-02', isCurrentMonth: true},
  {date: '2022-01-03', isCurrentMonth: true},
  {date: '2022-01-04', isCurrentMonth: true},
  {date: '2022-01-05', isCurrentMonth: true},
  {date: '2022-01-06', isCurrentMonth: true},
  {date: '2022-01-07', isCurrentMonth: true},
  {date: '2022-01-08', isCurrentMonth: true},
  {date: '2022-01-09', isCurrentMonth: true},
  {date: '2022-01-10', isCurrentMonth: true},
  {date: '2022-01-11', isCurrentMonth: true},
  {date: '2022-01-12', isCurrentMonth: true, isToday: true},
  {date: '2022-01-13', isCurrentMonth: true},
  {date: '2022-01-14', isCurrentMonth: true},
  {date: '2022-01-15', isCurrentMonth: true},
  {date: '2022-01-16', isCurrentMonth: true},
  {date: '2022-01-17', isCurrentMonth: true},
  {date: '2022-01-18', isCurrentMonth: true},
  {date: '2022-01-19', isCurrentMonth: true},
  {date: '2022-01-20', isCurrentMonth: true},
  {date: '2022-01-21', isCurrentMonth: true},
  {date: '2022-01-22', isCurrentMonth: true},
  {date: '2022-01-23', isCurrentMonth: true},
  {date: '2022-01-24', isCurrentMonth: true},
  {date: '2022-01-25', isCurrentMonth: true},
  {date: '2022-01-26', isCurrentMonth: true},
  {date: '2022-01-27', isCurrentMonth: true},
  {date: '2022-01-28', isCurrentMonth: true},
  {date: '2022-01-29', isCurrentMonth: true},
  {date: '2022-01-30', isCurrentMonth: true},
  {date: '2022-01-31', isCurrentMonth: true},
  {date: '2022-02-01', isCurrentMonth: false},
  {date: '2022-02-02', isCurrentMonth: false},

]

const meetings = [
  {
    id: 1,
    name: "Leslie Alexander",
    imageUrl:
      "https://images.unsplash.com/photo-1502877828070-33b167ad6860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=605&q=80",
    start: "1:00 PM",
    startDateTime: "2022-01-21T13:00",
    end: "2:30 PM",
    endDateTime: "2022-01-21T14:30",
  },
];

function classNames(...classes: string[]): string{
  return classes.filter(Boolean).join(' ')
}


const Home: NextPage = () => {

  const today = startOfToday()

 let newDays = eachDayOfInterval({start: startOfMonth(today), end: endOfMonth(today)})

 console.log(newDays)


  return (
    <div className="pt-16">
      <div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6">
        <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
          <div className="md:pr-16">
            <div className="flex items-center">
              <h2 className="flex-auto font-semibold text-gray-900">
                {format(today, 'MMM yyyy')}
              </h2>
              <button type="button" className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500">
                <span className="sr-only">Previous Month</span>
                <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
              </button>
              <button type="button" className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500">
                <span className="sr-only">Next Month</span>
                <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
            <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
              <div>S</div>
            </div>
            <div className="grid grid-cols-7 mt-2 text-sm">

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
