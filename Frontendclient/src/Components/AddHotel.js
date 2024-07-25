import React, { useState } from 'react';





const AddHotel = () => {
  const [hotel, setHotel] = useState({
    nom: '',
    adresse: '',
    email: '',
    telephone: '',
    prixParNuit: '',
    devise: 'XOF'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHotel(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(hotel);
  };
  const handleImageChange = (e) => {
    
    const file = e.target.files[0];
    console.log(file);
    
  };

  return (
   
 
    <form onSubmit={handleSubmit} className=" mx-w-2x1 my-10 p-8 bg-white shadow-md rounded">
      <h1 className="text-2xl font-bold mb-6 text-center">CRÉER UN NOUVEAU HÔTEL</h1>
      
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nom">
            Nom de l'hôtel
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nom"
            type="text"
            name="nom"
            value={hotel.nom}
            onChange={handleChange}
            placeholder="Entrez le nom de l'hôtel"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="adresse">
            Adresse
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="adresse"
            type="text"
            name="adresse"
            value={hotel.adresse}
            onChange={handleChange}
            placeholder="Entrez l'adresse"
          />
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            E-mail
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            value={hotel.email}
            onChange={handleChange}
            placeholder="Entrez l'email"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telephone">
            Numéro de téléphone
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="telephone"
            type="tel"
            name="telephone"
            value={hotel.telephone}
            onChange={handleChange}
            placeholder="Entrez le numéro de téléphone"
          />
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="prixParNuit">
            Prix par nuit
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="prixParNuit"
            type="number"
            name="prixParNuit"
            value={hotel.prixParNuit}
            onChange={handleChange}
            placeholder="Entrez le prix par nuit"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="devise">
            Devise
          </label>
          <select
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            id="devise"
            name="devise"
            value={hotel.devise}
            onChange={handleChange}
          >
            <option value="XOF">XOF</option>
            
          </select>
        </div>
      </div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photo">
          Ajouter une photo
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="photo"
          type="file"
          name="photo"
          onChange={handleImageChange}
        />

       <br/>

        <div className='flex justify-end'>
              <button className="bg-gray-700 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Enregistrer
            </button>
        </div>
      
    </form>
   
  );
};
export default AddHotel;
