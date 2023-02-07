import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { Stack, Pie, Button, SparkLink } from '../components';
import { earningData, SparkLineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Ecommerce = () => {
  return (
    <div className="mt-12" >
      <div className="flex flex-wrap lg:flex-nowrap justify-center" >
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repat bg-cover bg-center" >
          <div className="flex justify-between" >
            <div>
              <p className="font-bold text-gray-400" >Earnings</p>
              <p className="text-3xl" >$20000.78</p>
            </div>
          </div>
          <div className="mt-6" >
              <Button
                color="white"
                bgColor="blue"
                text="Download"
                borderRadius="10px"
                size="md"
              />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ecommerce