import React from 'react';
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
const Calendar = () => {
    return (
      <div className="grid sm:grid-cols-1 mr-20 justify-center items-center">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-6">
            <DayPicker />
          </div>
        </div>
      </div>
    );
};

export default Calendar;