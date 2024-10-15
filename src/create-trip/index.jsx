import React, {useState} from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { Input } from '@/components/ui/input';

function CreateTrip() {
  const [place,setPlace]=useState();
  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
        <h2 className='text-3xl font-sans font-semibold mb-3'>Tell us your Travel preferences</h2>
        <p className='max-w-fit'>Just provide Some Basic information, and our trip planner will generate a customized itinerary based on your preferences</p>

        <div className='mt-10'>
            <div>
                <h2 className='font-semibold mb-2'>
                    What is Destination of choice?
                </h2>
                <GooglePlacesAutocomplete apiKey={import.meta.env.VITE_GOOGLE_MAP_API_KEY}
                selectProps={{
                    place,
                    onChange:(v)=>{setPlace(v);console.log(v)}
                }}
                />
            </div>
        </div>

        <div className="mt-10">
            <h2 className='font-semibold mb-2'>
                How many days are you planning for?
            </h2>
            <Input placeholder="Ex.3" type="number" />
        </div>

    </div>
  )
}

export default CreateTrip