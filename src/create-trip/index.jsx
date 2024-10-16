import React, {useEffect, useState} from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { Input } from '@/components/ui/input';
import { AI_PROMPT, SelectBudgetOptions, SelectTravelList } from '@/constants/options';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { chatSession } from '@/service/AIModel';

function CreateTrip() {
  const [place,setPlace]=useState();

  const [formData,setFormData]=useState([]);

  const handleInputChange=(name,value)=>{

    if(name=='noOfDays' && value>15){
        console.log("Please enter Trip days Less than 15")
    }

    setFormData({
        ...formData,
        [name]:value
    })
  }

  useEffect(()=>{
    console.log(formData);
  },[formData])

  const onGenerateTrip = async () => {
    if(formData?.noOfDays>15 && !formData?.location||!formData?.budget||!formData?.traveler)
    {   
        toast("Please Fill all the details")
        return;
    }
    
    const FINAL_PROMPT=AI_PROMPT
    .replace('{location}',formData?.location?.label)
    .replace('{noOfDays}',formData?.noOfDays)
    .replace('{traveler}',formData?.traveler)
    .replace('{budget}',formData?.budget)
    .replace('{noOfDays}',formData?.noOfDays)

    console.log(FINAL_PROMPT);

    const result=await chatSession.sendMessage(FINAL_PROMPT);
  }



  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
        <h2 className='text-3xl font-sans font-bold mb-3'>Tell us your Travel preferences</h2>
        <p className='max-w-fit'>Just provide Some Basic information, and our trip planner will generate a customized itinerary based on your preferences</p>

        <div className='mt-10'>
            <div>
                <h2 className='font-semibold mb-2'>
                    What is Destination of choice?
                </h2>
                <GooglePlacesAutocomplete apiKey={import.meta.env.VITE_GOOGLE_MAP_API_KEY}
                selectProps={{
                    place,
                    onChange:(v)=>{setPlace(v); handleInputChange('location',v)}
                }}
                />
            </div>
        </div>

        <div className="mt-10">
            <h2 className='font-semibold mb-2'>
                How many days are you planning for?
            </h2>
            <Input placeholder="Ex.3" type="number" 
            onChange={(e)=>handleInputChange('noOfDays', e.target.value)} />
        </div>

        <div className='mt-10'>
            <h2 className='font-semibold mb-0'>What is Your Budget?</h2>
            <h3 className='font-normal mb-2'>The Budget is exclusively allocated for activities and dining purpose</h3>
            <div className='grid grid-cols-3 gap-3'>
                {SelectBudgetOptions.map((item,index)=>(
                    <div key={index} 
                    onClick={()=>handleInputChange('budget', item.title)} 
                    className={`p-2 border cursor-pointer rounded-lg hover:shadow-lg
                    ${formData?.budget==item.title&&'shadow-lg border-black'}`
                    }>
                        <h2 className='text-3xl'>{item.icon}</h2>
                        <h2 className='font-medium'>{item.title}</h2>
                        <h2 className='text-xs text-gray-500'>{item.desc}</h2>
                    </div>
                )
                
                )}
            </div>
        </div>

        <div className='mt-10'>
            <h2 className='font-semibold mb-2'>Who do you plan on traveling with on your next adventure?</h2>
            <div className='grid grid-cols-3 gap-2'>
                {
                    SelectTravelList.map((item,index)=>(
                        <div key={index} 
                        onClick={()=>handleInputChange('traveler', item.people)} 
                        className={`
                            p-2 border cursor-pointer rounded-lg hover:shadow-lg
                            ${formData?.traveler==item.people&&'shadow-lg border-black'}
                            `}>
                            <h2 className='text-3xl'>{item.icon}</h2>
                            <h2 className='font-medium'>{item.title}</h2>
                            <h2 className='text-xs text-gray-500'>{item.desc}</h2>
                        </div>
                    ))
                }
            </div>
        </div>

        <div className='mt-10 text-right'>
            <Button onClick={onGenerateTrip}>Generate Trip</Button>
        </div>


    </div>
  )
}

export default CreateTrip