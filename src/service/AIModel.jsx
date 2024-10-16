/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  export const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for Location : Las Vegas, for 3 Days for Couple with a Cheap Budget, Give me a Hotels Option List with HotelName, Hotel address, Price, Hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket pricing, rating, Time Travel each of the location for 3 days with each day plan with best time to visit in JSON format."},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"hotelOptions\": [\n    {\n      \"hotelName\": \"The D Las Vegas\",\n      \"hotelAddress\": \"301 Fremont Street, Las Vegas, NV 89101\",\n      \"price\": \"$50-$100 per night\",\n      \"hotelImageUrl\": \"https://www.thedonlinecasino.com/sites/default/files/styles/hero_image/public/images/hero/hero_the_d_main_01.jpg\",\n      \"geoCoordinates\": \"36.1689, -115.1425\",\n      \"rating\": 4.0,\n      \"description\": \"A budget-friendly hotel located in the heart of Fremont Street Experience, offering rooms with modern amenities and a lively atmosphere.\"\n    },\n    {\n      \"hotelName\": \"Golden Nugget Las Vegas\",\n      \"hotelAddress\": \"129 E Fremont Street, Las Vegas, NV 89101\",\n      \"price\": \"$70-$150 per night\",\n      \"hotelImageUrl\": \"https://www.goldennugget.com/las-vegas/media/images/hero-images/goldennugget-lasvegas-hero.jpg\",\n      \"geoCoordinates\": \"36.1696, -115.1421\",\n      \"rating\": 4.5,\n      \"description\": \"A historic hotel with a luxurious feel, featuring a casino, pool, and the famous \"Shark Tank\" aquarium.\"\n    },\n    {\n      \"hotelName\": \"Circus Circus Hotel & Casino\",\n      \"hotelAddress\": \"2880 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": \"$40-$80 per night\",\n      \"hotelImageUrl\": \"https://www.circuscircus.com/sites/default/files/styles/hero_image/public/images/hero/hero_circus_circus_01.jpg\",\n      \"geoCoordinates\": \"36.1168, -115.1723\",\n      \"rating\": 3.5,\n      \"description\": \"A family-friendly hotel with a circus theme, offering affordable rates and various entertainment options.\"\n    },\n    {\n      \"hotelName\": \"The Strat Hotel, Casino & SkyPod\",\n      \"hotelAddress\": \"2000 S Las Vegas Blvd, Las Vegas, NV 89104\",\n      \"price\": \"$60-$120 per night\",\n      \"hotelImageUrl\": \"https://www.strat.com/media/wysiwyg/images/home/hero-images/strat-hotel-casino-skypod-hero.jpg\",\n      \"geoCoordinates\": \"36.1206, -115.1645\",\n      \"rating\": 4.0,\n      \"description\": \"A towering hotel offering stunning views of the city, along with a casino, restaurants, and a thrilling observation deck.\"\n    }\n  ],\n  \"itinerary\": {\n    \"day1\": {\n      \"time\": \"Morning (9:00 AM - 12:00 PM)\",\n      \"placeName\": \"Fremont Street Experience\",\n      \"placeDetails\": \"A vibrant pedestrian mall with live music, street performers, and a giant video canopy showcasing dazzling light shows.\",\n      \"placeImageUrl\": \"https://www.vegasexperience.com/wp-content/uploads/2018/05/Fremont-Street-Experience-Las-Vegas-Neon-Signs-900x450.jpg\",\n      \"geoCoordinates\": \"36.1689, -115.1425\",\n      \"ticketPricing\": \"Free\",\n      \"rating\": 4.5\n    },\n    {\n      \"time\": \"Afternoon (12:00 PM - 4:00 PM)\",\n      \"placeName\": \"The Mob Museum\",\n      \"placeDetails\": \"An interactive museum dedicated to the history of organized crime in America, with exhibits showcasing infamous figures and events.\",\n      \"placeImageUrl\": \"https://www.themobmuseum.org/media/5465/mob-museum-exterior-wide-shot.jpg\",\n      \"geoCoordinates\": \"36.1682, -115.1441\",\n      \"ticketPricing\": \"$29.95 per adult\",\n      \"rating\": 4.0\n    },\n    {\n      \"time\": \"Evening (4:00 PM - 8:00 PM)\",\n      \"placeName\": \"Free Shows on the Strip\",\n      \"placeDetails\": \"Enjoy free shows like the Bellagio Fountains, the Mirage Volcano, or the Wynn Lake of Dreams.\",\n      \"placeImageUrl\": \"https://www.visitlasvegas.com/sites/default/files/styles/hero_image/public/images/hero/bellagio-fountains-show-las-vegas.jpg\",\n      \"geoCoordinates\": \"36.1135, -115.1723\",\n      \"ticketPricing\": \"Free\",\n      \"rating\": 4.5\n    },\n    \"day2\": {\n      \"time\": \"Morning (9:00 AM - 12:00 PM)\",\n      \"placeName\": \"Hoover Dam\",\n      \"placeDetails\": \"A majestic dam and engineering marvel located just outside Las Vegas, offering guided tours and stunning views.\",\n      \"placeImageUrl\": \"https://www.nps.gov/hoov/planyourvisit/images/hooverdam_wide_2014.jpg\",\n      \"geoCoordinates\": \"36.0069, -114.9847\",\n      \"ticketPricing\": \"$30 per adult\",\n      \"rating\": 4.5\n    },\n    {\n      \"time\": \"Afternoon (12:00 PM - 4:00 PM)\",\n      \"placeName\": \"Red Rock Canyon National Conservation Area\",\n      \"placeDetails\": \"A scenic desert landscape with hiking trails, rock formations, and stunning views of the surrounding mountains.\",\n      \"placeImageUrl\": \"https://www.nps.gov/redr/learn/nature/images/redrock_canyon_wide_2013.jpg\",\n      \"geoCoordinates\": \"36.1725, -115.3992\",\n      \"ticketPricing\": \"$15 per vehicle\",\n      \"rating\": 4.0\n    },\n    {\n      \"time\": \"Evening (4:00 PM - 8:00 PM)\",\n      \"placeName\": \"Las Vegas Strip\",\n      \"placeDetails\": \"Explore the famous Strip, a bustling avenue filled with casinos, hotels, restaurants, and entertainment venues.\",\n      \"placeImageUrl\": \"https://www.visitlasvegas.com/sites/default/files/styles/hero_image/public/images/hero/las-vegas-strip-aerial-view.jpg\",\n      \"geoCoordinates\": \"36.1099, -115.1724\",\n      \"ticketPricing\": \"Free\",\n      \"rating\": 4.5\n    },\n    \"day3\": {\n      \"time\": \"Morning (9:00 AM - 12:00 PM)\",\n      \"placeName\": \"The LINQ Promenade\",\n      \"placeDetails\": \"A vibrant outdoor shopping, dining, and entertainment district featuring the High Roller observation wheel.\",\n      \"placeImageUrl\": \"https://www.thelinq.com/sites/default/files/styles/hero_image/public/images/hero/hero_the_linq_promenade_01.jpg\",\n      \"geoCoordinates\": \"36.1155, -115.1726\",\n      \"ticketPricing\": \"Free\",\n      \"rating\": 4.0\n    },\n    {\n      \"time\": \"Afternoon (12:00 PM - 4:00 PM)\",\n      \"placeName\": \"Neon Museum\",\n      \"placeDetails\": \"A unique museum showcasing a collection of historic neon signs from Las Vegas's past.\",\n      \"placeImageUrl\": \"https://www.neonmuseum.org/sites/default/files/styles/hero_image/public/images/hero/Neon-Museum-Exterior-Las-Vegas.jpg\",\n      \"geoCoordinates\": \"36.1581, -115.1499\",\n      \"ticketPricing\": \"$20 per adult\",\n      \"rating\": 4.5\n    },\n    {\n      \"time\": \"Evening (4:00 PM - 8:00 PM)\",\n      \"placeName\": \"Local Brewery or Distillery\",\n      \"placeDetails\": \"Enjoy a tasting and tour at one of the many craft breweries or distilleries in Las Vegas.\",\n      \"placeImageUrl\": \"https://www.lasvegasbrewery.com/sites/default/files/styles/hero_image/public/images/hero/hero_las_vegas_brewery_01.jpg\",\n      \"geoCoordinates\": \"36.1699, -115.1430\",\n      \"ticketPricing\": \"Varies\",\n      \"rating\": 4.0\n    }\n  }\n}\n```\n"},
          ],
        },
      ],
    });