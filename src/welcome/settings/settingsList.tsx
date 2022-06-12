import React from 'react';

export const SettingsList = () => {
  return (
    <div>
      <ul>
        <li>Time period between meals</li>
        <li>Number of meals per day</li>
        <li>Number of minutes from waking up to the first meal on the list</li>
      </ul>
      <button>Save</button>
    </div>
  );
};
