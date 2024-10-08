// src/pages/ImageSearch.jsx
import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../layout/Navbar';
import axios from 'axios';

const ImageSearch = () => {
    const [images, setImages] = useState([]);
    const columnRefs = [useRef(), useRef(), useRef(), useRef()];

    const searchImages = async (query) => {
        try {
            const response = await axios.get('https://api.unsplash.com/search/photos', {
                params: {
                    query,
                    per_page: 30
                },
                headers: {
                    Authorization: 'Client-ID fAVbtzCqHYcB9Z_wfrgfzRJXPR9xC6JdKM4YgB9Ovyk',
                },
            });
            setImages(response.data.results);
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };

    const placeImagesInColumns = () => {
        columnRefs.forEach((column) => {
            while (column.current.firstChild) {
                column.current.removeChild(column.current.firstChild);
            }
        });

        images.forEach((image, index) => {
            const columnIndex = index % columnRefs.length;
            const column = columnRefs[columnIndex].current;
            if (column) {
                const imgElement = document.createElement('img');
                imgElement.src = image.urls.small;
                imgElement.alt = image.alt_description;
                imgElement.className = 'w-full h-auto object-cover rounded-lg mb-4';
                column.appendChild(imgElement);
            }
        });
    };

    useEffect(() => {
        if (images.length > 0) {
            placeImagesInColumns();
        }
    }, [images]);

    return (
        <div className="">
            <Navbar onSearch={searchImages} />
            <div className="rounded-lg px-4 w-full flex flex-col items-start">
                {/* Layout masonry dengan menggunakan referensi */}
                <div className="grid w-full md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                    {columnRefs.map((ref, index) => (
                        <div key={index} ref={ref} className="" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageSearch;
