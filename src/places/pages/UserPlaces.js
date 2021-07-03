import React from 'react';
import PlaceList from '../components/PlaceList';
import { useParams } from 'react-router-dom';

const UserPlaces = () => {
    const DUMMY_PLACES = [
        {
            id: 'p1',
            title: 'Torre Eiffel',
            description: 'The most famous place in France!',
            imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipMFN3T0U3v4kjki_F9jZ1qz_vJeQs4sbbE-rI2i=w408-h272-k-no',
            address: 'Champ de Mars, 5 Avenue Anatole France, 75007 Paris, Francia',
            location: {
                lat: 48.8583736,
                lng: 2.2922926
            },
            creator: 'u1'
        },
        {
            id: 'p2',
            title: 'Empire State Building',
            description: 'One of the most famous sky scrapers in the world!',
            imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipO1LQRpgc0tNHhxmbcWWUpv88yjuTZvcwh6VjcJ=w408-h272-k-no',
            address: '20 W 34th St, Nueva York, 10001, EE. UU.',
            location: {
                lat: 40.7485492,
                lng: -73.9879522
            },
            creator: 'u2'
        },
    ]

    const userId = useParams().userId; 
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
   
    return (
        <PlaceList items={loadedPlaces} />
    )
}

export default UserPlaces;
