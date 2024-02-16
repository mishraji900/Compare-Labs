"use client"
import React, { useState } from 'react';
import Select from 'react-select';
import Button from '../components/Button';

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
    <div id='predict' className='h-screen mx-10 rounded-3xl px-5 flex flex-col justify-center items-center'>
      <h1 className='text-5xl text-center my-4 font-bold text-white font-custom'>Find what you need!</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 p-5 bg-pink-600/10 rounded-3xl w-full max-w-3xl'>
        <div className='text-white p-4 rounded-lg'>
          <form action="" className='space-y-6 text-lg font-custom'>
            <div className='space-x-4 font-medium'>
              <label>Date of Arrival</label>
              <input type="date" name="date of arrival" className='p-2 rounded-3xl text-black border border-gray-300 focus:outline-none focus:border-pink-500' />
            </div>
            <div className='space-x-4 font-medium'>
              <label>Date of Departure</label>
              <input type="date" name="date of departure" className='p-2 rounded-3xl text-black border border-gray-300 focus:outline-none focus:border-pink-500' />
            </div>
            <div className='space-x-4 font-medium'>
              <label>Source</label>
              <Select
                id="source-select"
                instanceId='source-select'
                value={source}
                onChange={handleSourceChange}
                options={sourceOptions}
                isSearchable={true}
                styles={customStyles}
                className='text-gray-700 rounded-3xl'
              />
            </div>
            <div className='space-x-4 font-medium'>
              <label>Destination</label>
              <Select
                id="destination-select"
                instanceId='destination-select'
                value={destination}
                onChange={handleDestinationChange}
                options={destinationOptions}
                isSearchable={true}
                styles={customStyles}
                className='text-gray-700 rounded-3xl'
              />
            </div>
            <div className='space-x-4 font-medium'>
              <label>Which Airline you want</label>
              <Select
                id="airline-select"
                instanceId='airline-select'
                value={airline}
                onChange={handleAirlineChange}
                options={airlineOptions}
                isSearchable={true}
                styles={customStyles}
                className='text-gray-700 rounded-3xl'
              />
            </div>
            <Button className='bg-white hover:bg-pink-600 hover:text-white text-black font-sans w-full rounded-full' text="Submit ->" link='/#predict' />
          </form>
        </div>
        <div className='text-white p-4 rounded-lg'>
          result
        </div>
      </div>
    </div>
  );
}

export default Page;
