import { sortPlacesByDistance } from "./loc.js";

export async function fetchPlaces(endpoint,){

    const response = await fetch(`http://localhost:3000/${endpoint}`);
    const responseData = await response.json();

    if (!response.ok) {
    throw new Error(response.status + " - Failed to fetch places");
    }

    //rendezés távolság alapján
    /*navigator.geolocation.getCurrentPosition((position) => {
        const sortedPLaces = sortPlacesByDistance(
        responseData.places,
        position.coord.latitude,
        position.coord.longitude,
        );
        setAvailablePlaces(sortedPLaces)
    });*/

    const sortedPLaces = sortPlacesByDistance(
            responseData.places,
            47.4979,
            19.0402,
        );
    return sortedPLaces
}