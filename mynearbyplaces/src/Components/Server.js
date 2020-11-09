import locations from './Locations/';


let getEntries = function(type){
    let result = locations.filter(biz => biz.type === type);
    if (result.length > 0){
        return result.locations;
    }else{
        return [];
    }
}

let server = {
    fetchRestaurant : () => {
        return getEntries('Restaurant');
    }
}