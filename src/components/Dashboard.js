import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {removeWidget, selectWidgets } from '../store/dashboardSlice ';
import Widget from './Widget';
import AddWidgetForm from './AddWidgetForm';

const Dashboard = () => {
  const dispatch = useDispatch();
  const widgets = useSelector(selectWidgets);
  const [searchQuery, setSearchQuery] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredWidgets = widgets.filter(widget =>
    widget.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="header">
        <h1>Dashboard</h1>
        <p>Manage your widgets dynamically.</p>
      </header>

      <div className="flex items-center mb-6">
        <input
          type="text"
          placeholder="Search widgets..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="p-3 w-full max-w-xs rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={() => setShowForm(!showForm)}
          className="add-widget-btn ml-4"
        >
          {showForm ? 'Cancel' : '+ Add Widget'}
        </button>
      </div>

      {showForm && <AddWidgetForm />}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWidgets.length > 0 ? (
          filteredWidgets.map(widget => (
            <Widget
              key={widget.id}
              name={widget.name}
              text={widget.text}
              onRemove={() => dispatch(removeWidget(widget.id))}
            />
          ))
        ) : (
          <p className="text-gray-500">No widgets found</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
