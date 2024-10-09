import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Mengatur interval setiap 1 detik untuk memperbarui waktu
    const timerID = setInterval(() => setTime(new Date()), 1000);

    // Membersihkan interval saat komponen di-unmount
    return () => clearInterval(timerID);
  }, []);

  return (
    <div>
      <h1 className='font-bold text-9xl mt-4 text-center text-black'>{time.toLocaleTimeString()}</h1>
    </div>
  );
};

export default Clock;
