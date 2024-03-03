"use client"
import React, { useState } from 'react';
import Select from 'react-select';

import { FiCommand } from "react-icons/fi";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import DatePicker from '@/components/ui/DatePicker';
import { ComboboxDemo } from '@/components/ui/Combobox';

const customStyles = {
  option: (base, { isFocused }) => ({
    ...base,
    backgroundColor: isFocused ? "rgba(255, 192, 203, 0.7)" : "white", // Pink if focused, white if not
  }),
};

const Page = () => {
  const sourceOptions = [
    { value: 'New York', label: 'New York' },
    { value: 'London', label: 'London' },
    { value: 'Tokyo', label: 'Tokyo' },
    // Add more options as needed
  ];

  const destinationOptions = [
    { value: 'Paris', label: 'Paris' },
    { value: 'Sydney', label: 'Sydney' },
    { value: 'Dubai', label: 'Dubai' },
    // Add more options as needed
  ];

  const airlineOptions = [
    { value: 'Emirates', label: 'Emirates' },
    { value: 'Delta', label: 'Delta' },
    { value: 'British Airways', label: 'British Airways' },
    // Add more options as needed
  ];

  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [airline, setAirline] = useState('');

  const handleSourceChange = selectedOption => {
    setSource(selectedOption);
  };

  const handleDestinationChange = selectedOption => {
    setDestination(selectedOption);
  };

  const handleAirlineChange = selectedOption => {
    setAirline(selectedOption);
  };

  return (
    <div id='predict' className='h-screen rounded-3xl px-5 flex flex-col justify-center w-screen items-center'>
      <h1 className='md:text-5xl text-3xl text-center my-4 font-bold font-custom'>Find what you need!</h1>
      <Card className='rounded-3xl w-full max-w-[70vw] mt-8 h-[60vh]'>
        <CardContent className='flex  flex-col p-10 items-center justify-evenly h-[60vh]'>
            <form action="" className='w-full flex text-lg font-custom  flex-wrap md:space-x-4 md:space-y-0 space-y-3'>
              <div className='font-medium flex-col flex'>
                <DatePicker text={"Pick Booking Date"}/>
              </div>
              <div className='font-medium flex-col flex'>
                <DatePicker text={"Pick Journy date"}/>
              </div>
              <div className='font-medium flex-col flex'>
                <ComboboxDemo placeholder={"From ...."}/>
              </div>
              <div className='font-medium flex-col flex'>
                <ComboboxDemo placeholder={"To ...."}/>
              </div>
              <div className='font-medium flex flex-col'>
                <ComboboxDemo placeholder={"Select Airlines"}/>
              </div>
              <Button>Submit</Button>
            </form>
          <div className='p-4 h-[50vh] rounded-lg flex items-center'>
          <FiCommand className="loading-icon" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


export default Page;
