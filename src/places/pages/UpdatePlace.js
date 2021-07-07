import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/Util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import Card from '../../shared/components/UIElements/Card';
import './PlaceForm.css';

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
];

const UpdatePlace = () => {
    const [isLoading, setIsLoading] = useState(true);
    const placeId = useParams().placeId;

    const [formState, inputHandler, setFormData] = useForm({
        title: {
          value: '',
          isValid: false
        },
        description: {
          value: '',
          isValid: false
        },
      }, false);

      const identifierPlace = DUMMY_PLACES.find(p => p.id === placeId);

      useEffect(() => {
        setFormData({
            title: {
                value: identifierPlace?.title,
                isValid: true
              },
              description: {
                value: identifierPlace?.description,
                isValid: true
              },
          }, true);
          setIsLoading(false)
      }, [setFormData, identifierPlace])

      const placeUpdateSubmitHandler = event => {
          event.preventDefault();
          console.log(formState.inputs)
      }


    if(!identifierPlace){
        return <div className="center">
            <Card>
                <h2>Could not find place!</h2>
            </Card>
        </div>
    }

    if(isLoading){
        return <div className="center">
            <h1>Loading...</h1>
        </div>
    }

    return (
        <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
            <Input
                id="title"
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid title."
                onInput={inputHandler}
                initialValue={formState.inputs.title.value}
                initialValid={formState.inputs.title.isValid}
            />
            <Input
                id="description"
                element="textarea"
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid description (at least 5 characters)."
                onInput={inputHandler}
                initialValue={formState.inputs.description.value}
                initialValid={formState.inputs.description.isValid}
            />
            <Button type="submit" disabled={!formState.isValid}>
                UPDATE PLACE
            </Button>
        </form>
    )
}

export default UpdatePlace;
