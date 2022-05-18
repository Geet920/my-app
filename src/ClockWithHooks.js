import React, { useState } from 'react';
const ClockWithHooks = () =>
{
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <h1>It is now {date.toLocaleTimeString()}</h1>
            <button type="button" onClick={() => setDate(new Date())}>Click </button>
        </div>
    )
}
export default ClockWithHooks;