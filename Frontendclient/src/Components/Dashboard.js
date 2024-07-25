import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons'
import {faP} from '@fortawesome/free-solid-svg-icons'
import {faUserGroup}  from '@fortawesome/free-solid-svg-icons' 


function Dashboard() {
  return (
    <body className=''>
      <Sidebar />
      <Navbar />
      <div className="dashboard flex">
       
        

        <main className="flex flex-col gap-12 ml-64 w-full"> {/* Ajoutez la classe w-full pour que le main prenne toute la largeur disponible */}
        <nav>
         <h1 className='text-lg font-bold bg-gray-100'>Bienvenue sur RED Product</h1>
         <p>Lorem isupm dolor sit amet consectetur</p>
        </nav>
           
          <section className="grid grid-cols-3 gap-4">
            <div className="bg-gray-100 p-4 rounded-md shadow-md flex justify-center">
            <FontAwesomeIcon className="bg-purple-600 p-3 rounded-full" icon={faEnvelopeOpen} style={{color: "#f0f2f5",}} />            
            <p className="text-lg font-bold">125</p>
            <p>Formulaires<br/>je ne sais pas quoi dire</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md shadow-md flex justify-center">
            <FontAwesomeIcon className="bg-green-800 p-3 rounded-full" icon={faP} style={{color: "#f1f2f3",}} />
               <p className="text-lg font-bold">40</p>
              <p>Formulaires<br/>je ne sais pas quoi dire</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md shadow-md flex justify-center">
            <FontAwesomeIcon className="bg-yellow-600 p-3 rounded-full" icon={faUserGroup} style={{color: "#f7f7f8",}} />
               <p className="text-lg font-bold">600 </p>
              <p>Formulaires<br/>je ne sais pas quoi dire</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md shadow-md flex justify-center">
            <FontAwesomeIcon className="bg-red-500 p-3 rounded-full" icon={faEnvelopeOpen} style={{color: "#f0f2f5",}} />            
               <p className="text-lg font-bold">25 </p>
              <p>Formulaires<br/>je ne sais pas quoi dire</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md shadow-md flex justify-center">
            <FontAwesomeIcon className="bg-green-800 p-3 rounded-full" icon={faP} style={{color: "#f1f2f3",}} />
               <p className="text-lg font-bold">40 </p>
              <p>Formulaires<br/>je ne sais pas quoi dire</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md shadow-md flex justify-center">
            <FontAwesomeIcon className="bg-blue-900 p-3 rounded-full" icon={faUserGroup} style={{color: "#f7f7f8",}} />
               <p className="text-lg font-bold">02 </p>
              <p>Formulaires<br/>je ne sais pas quoi dire</p>
            </div>
          </section>
         
        </main>
      </div>
    </body>
  );
}


export default Dashboard