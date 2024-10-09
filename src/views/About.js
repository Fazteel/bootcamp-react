import React from 'react'
import Profile from '../assets/img/profile.jpg'

export default function About() {
    return (
        <div>
            <div class="flex flex-col items-center mt-4 mb-24">
                <h1 class="mb-6 mt-2 text-3xl font-bold text-gray-900 dark:text-white">About Me</h1>
                <div class="flex justify-center items-center bg-gray-100 dark:bg-gray-900">
                    <div class="flex w-full max-w-2xl bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
                        <div class="flex items-center justify-center w-1/3 p-6 bg-gray-50 dark:bg-gray-700">
                            <img class="rounded-lg w-full shadow-lg" src={Profile} alt="Fahmi image" />
                        </div>
                        <div class="flex flex-col justify-center p-6 w-2/3">
                            <h5 class="mb-2 text-3xl font-semibold text-gray-900 dark:text-white">Fahmi Andika Setiono</h5>
                            <span class="text-lg text-gray-500 dark:text-gray-400">Fullstack Developer</span>
                            <p class="mt-4 text-md text-gray-500 dark:text-gray-400 leading-relaxed">
                                A student pursuing an Associate Degree in Informatics Engineering at the Electronic Engineering
                                Polytechnic Institute of Surabaya. I enjoy learning new things and am oriented towards technology
                                and information. I am proficient in several programming languages and capable of developing
                                websites and managing databases.
                            </p>
                            <div class="flex mt-6 space-x-4">
                                <a href="https://www.instagram.com/4ntaressss/" target="_blank" class="inline-flex items-center px-6 py-2 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
                                    friend</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
