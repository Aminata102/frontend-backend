import React, { useState } from 'react';
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Button } from "@material-tailwind/react";
import h1 from '../images/h1.png';
import h2 from '../images/h2.png'; 
import h3 from '../images/h3.png'; 
import h4 from '../images/h4.png'; 
import h5 from '../images/h5.png'; 
import h6 from '../images/h6.png'; 
import h7 from '../images/h7.png'; 
import h8 from '../images/h8.png'; 
import AddHotel from './AddHotel';

const HotelList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    // Données d'hôtel
    const hotelsData = [
        { 
            name: "Pullman Dakar Teranga", 
            location: "Dakar", 
            description: "L'un des hôtels les plus prestigieux de Dakar, offrant une vue imprenable sur l'océan.",
            image: h1,
        },
        { 
            name: "Hôtel Terrou-Bi", 
            location: "Dakar", 
            description: "Un luxueux hôtel en bord de mer, proposant des services haut de gamme et une cuisine raffinée.",
            image: h2, 
        },
        { 
            name: "Lac Rose Hotel", 
            location: "Lac Rose", 
            description: "Un hôtel charmant situé au bord du lac rose, offrant une expérience unique au Sénégal.",
            image: h3,
        },
        { 
            name: "Saly Hotel", 
            location: "Saly", 
            description: "Un complexe hôtelier idyllique niché dans la station balnéaire animée de Saly, offrant des vacances de détente.",
            image:h4,
        },
        { 
            name: "Radisson Blu Hotel", 
            location: "Dakar", 
            description: "Un hôtel moderne et élégant situé dans le quartier des affaires de Dakar, proposant des chambres confortables et des installations de premier ordre.",
            image:h5, 
        },
        { 
            name: "King Fahd Palace Hotel", 
            location: "Dakar", 
            description: "Un hôtel de luxe offrant un hébergement raffiné, des restaurants gastronomiques et des installations de loisirs haut de gamme.",
            image: h6,
        },
        { 
            name: "Palm Beach Hotel", 
            location: "Saly", 
            description: "Un hôtel de charme niché dans un cadre tropical paisible à Saly, offrant une escapade tranquille au bord de la mer.",
            image: h7,
        },
        { 
            name: "Pullman Dakar Teranga", 
            location: "Saly", 
            description: "Un hôtel de charme niché dans un cadre tropical paisible à Saly, offrant une escapade tranquille au bord de la mer.",
            image: h8,
        }
    ];

    return (
        <div className="border border-black">
            <Sidebar />
            <Navbar />
            <div className="dashboard flex">
                <main className="flex gap-12 ml-64 w-full"> 
                    <div className='flex-1'>
                    <nav>
                        <h1 className='text-lg font-bold '>Hôtels 8</h1>
                    </nav>
                    </div>
                    <div className='px-8 py-3 relative'>
                        <button className='font-semibold rounded shadow px-4 py-1 pl-12 rounded shadow outline-none' onClick={openModal}>+ Créer un nouveau hôtel</button>
                        {isModalOpen && (
                            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50" id="my-modal">
                                <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                                    <AddHotel />
                                    <button onClick={closeModal} className="absolute top-0 right-0 cursor-pointer">
                                        Fermer
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </main>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-4 ml-64">
                {hotelsData.map((hotel, index) => (
                    <div key={index} className="max-w-300 rounded overflow-hidden border border-gray-200">
                        <img className="w-200 rounded-lg border" src={hotel.image} alt={hotel.name} />
                        <div className="px-5 py-3">
                            <div className="font-bold t mb-2">{hotel.name}</div>
                            <p className="text-gray-700">{hotel.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HotelList;
