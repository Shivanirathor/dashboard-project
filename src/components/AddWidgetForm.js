import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWidget } from '../store/dashboardSlice ';

const AddWidgetForm = () => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && text) {
      dispatch(addWidget({ id: Date.now(), name, text }));
      setName('');
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 mb-6">
      <h2 className="text-2xl font-semibold mb-4">Add New Widget</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Widget Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-3 w-full rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Widget Text</label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows="4"
          className="p-3 w-full rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="add-widget-btn"
      >
        Add Widget
      </button>
    </form>
  );
};

export default AddWidgetForm;
