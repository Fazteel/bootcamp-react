import React, { useState } from 'react'

function CekKhodam() {
    const [ name, setName ] = useState('');
    const [ result, setResult ] = useState('');
    const namaKhodam = [
        "Kecoa Panggang",
        "Gajah Kesemutan",
        "Cacing Kepanasan",
        "Nasi Goreng Kuah",
        "Es Teh Anget",
        "Kucing Tipes",
        "Macan Ngantuk"
    ]

    const namaRandom = () => {
        const randomIndex = Math.floor(Math.random() * namaKhodam.length);
        return namaKhodam[ randomIndex ];
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) {
            const namaKhodam = namaRandom();
            setResult(`Khodam mu adalah ${namaKhodam}`);
        } else {
            setResult('Masukan Nama!')
        }
    }
    return (
        <div className='p-44 min-h-screen'>
            <h1 className='font-bold text-center mb-20'>Cek Khodam</h1>
            <form className='flex flex-col' onSubmit={handleSubmit}>
                <input className='rounded-full' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Masukan Nama...' />
                <button className='bg-blue-600 text-white mt-4 px-4 py-2 rounded-lg' type="submit">Cek khodam</button>
            </form>
            {result && <h1 className='font-bold text-center mt-16'>{result}</h1>}
        </div>
    )
}

export default CekKhodam 