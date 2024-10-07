import React, { useState } from 'react';
import axios from 'axios';

// Komponen ImageSearch memungkinkan pengguna untuk mencari gambar dari Unsplash berdasarkan kata kunci pencarian
const ImageSearch = () => {
    // State untuk menyimpan kata kunci pencarian
    const [ query, setQuery ] = useState('');
    // State untuk menyimpan daftar gambar yang diperoleh dari hasil pencarian
    const [ images, setImages ] = useState([]);

    // Fungsi untuk mencari gambar dari Unsplash berdasarkan kata kunci yang diberikan
    const searchImages = async (e) => {
        e.preventDefault(); // Mencegah reload halaman saat form disubmit
        try {
            // Permintaan GET ke API Unsplash dengan query yang dimasukkan pengguna
            const response = await axios.get(`https://api.unsplash.com/search/photos`, {
                params: { query },
                headers: {
                    Authorization: `Client-ID fAVbtzCqHYcB9Z_wfrgfzRJXPR9xC6JdKM4YgB9Ovyk`, // Menggunakan API key Unsplash
                },
            });
            // Menyimpan hasil gambar ke dalam state 'images'
            setImages(response.data.results);
        } catch (error) {
            console.error('Error fetching images:', error); // Menangani kesalahan saat mengambil data
        }
    };

    return (
        <div className='border-2 rounded-lg px-4 py-8 w-full flex flex-col items-start'>
            <h4 className="font-bold mb-4">Image Search</h4>
            {/* Form untuk menerima input kata kunci dari pengguna */}
            <form onSubmit={searchImages} className='flex flex-col items-start w-full'>
                <input
                    type="text"
                    className='rounded-lg w-full p-2 border mb-2'
                    value={query} // Menghubungkan input dengan state 'query'
                    onChange={(e) => setQuery(e.target.value)} // Mengubah state 'query' setiap kali input berubah
                    placeholder="Search for images..." // Placeholder untuk input
                />
                <button type="submit" className='bg-blue-500 text-white px-4 py-2 rounded-lg'>
                    Search
                </button>
            </form>
            {/* Menampilkan gambar dalam bentuk grid setelah hasil pencarian */}
            <div className='grid grid-cols-6 gap-4 mt-4'>
                {images.map((image) => (
                    <img
                        key={image.id} // Setiap gambar memiliki 'key' unik berdasarkan 'id' gambar
                        src={image.urls.small} // URL kecil dari gambar untuk ditampilkan
                        alt={image.alt_description} // Deskripsi alternatif untuk gambar
                        className='w-full h-60 object-cover rounded-lg' // Styling untuk gambar
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageSearch;
