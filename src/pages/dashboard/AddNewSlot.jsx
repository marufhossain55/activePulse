import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const AddNewSlot = () => {
  const axiosSecure = useAxiosSecure();
  const [previousData, setPreviousData] = useState({});
  const [selectedDays, setSelectedDays] = useState([]);
  const [slotName, setSlotName] = useState('');
  const [slotTime, setSlotTime] = useState('');
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [classesOptions, setClassesOptions] = useState([]);

  useEffect(() => {
    const fetchTrainerData = async () => {
      try {
        const res = await axiosSecure.get('/getTrainerData', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access-token')}`,
          },
        });
        setPreviousData(res.data);
        setSelectedDays(
          res.data?.days?.map((day) => ({ value: day, label: day }))
        );
      } catch (error) {
        console.error('Error fetching trainer data:', error);
      }
    };

    fetchTrainerData();
  }, [axiosSecure]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const res = await axiosSecure.get('/getClasses', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access-token')}`,
          },
        });
        const classesData = res.data?.map((classItem) => ({
          value: classItem.name,
          label: classItem.name,
        }));
        setClassesOptions(classesData);
      } catch (error) {
        console.error('Error fetching classes:', error);
      }
    };

    fetchClasses();
  }, [axiosSecure]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newSlotData = {
      slotName,
      slotTime,
      days: selectedDays?.map((day) => day.value),
      classes: selectedClasses?.map((classItem) => classItem.value),
    };

    try {
      const res = await axiosSecure.post('/addNewSlot', newSlotData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access-token')}`,
        },
      });
      if (res.data.acknowledged) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'New slot added successfully',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error('Error adding new slot:', error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-center text-3xl font-bold mt-20">Add New Slot</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md mt-8"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Previous Data
          </label>
          <textarea
            readOnly
            value={JSON.stringify(previousData, null, 2)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Select Days
          </label>
          <Select
            isMulti
            options={[
              { value: 'Monday', label: 'Monday' },
              { value: 'Tuesday', label: 'Tuesday' },
              { value: 'Wednesday', label: 'Wednesday' },
              { value: 'Thursday', label: 'Thursday' },
              { value: 'Friday', label: 'Friday' },
              { value: 'Saturday', label: 'Saturday' },
              { value: 'Sunday', label: 'Sunday' },
            ]}
            value={selectedDays}
            onChange={setSelectedDays}
            className="w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Slot Name
          </label>
          <input
            type="text"
            value={slotName}
            onChange={(e) => setSlotName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Slot Time
          </label>
          <input
            type="text"
            value={slotTime}
            onChange={(e) => setSlotTime(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Classes Include
          </label>
          <Select
            isMulti
            options={classesOptions}
            value={selectedClasses}
            onChange={setSelectedClasses}
            className="w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Slot
        </button>
      </form>
    </div>
  );
};

export default AddNewSlot;
