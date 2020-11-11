import locations from "./Locations";
import Search from "./Search";


let getEntries = function(type){
    let result = locations.filter(biz => biz.type === type);
    if (result.length > 0){
        return result.locations;
    }else{
        return [];
    }
}

let getAllSearchResults = function(type,city,keyword){
    let businesses = locations.filter(x => x.type.toUpperCase() === type.toUpperCase()
        && x.city.toUpperCase() === city.toUpperCase()
        && x.keywords.includes(keyword.toLowerCase())
        && x.visible === true)
    if (businesses){
        return businesses;
    }else{
        return [];
    }
}
let getCitySearchResults = function(city){
    let businesses = locations.filter(x => x.city.toUpperCase() === city.toUpperCase()
        && x.visible === true)
    if (businesses){
        return businesses;
    }else{
        return [];
    }
}

let getTypeSearchResults = function(type){
    let businesses = locations.filter(x => x.type.toUpperCase() === type.toUpperCase()
        && x.visible === true)
    if (businesses){
        return businesses;
    }else{
        return [];
    }
}

let getKeywordSearchResults = function(keyword){
    let businesses = locations.filter(x => x.keywords.includes(keyword.toLowerCase())
        && x.visible === true)
    if (businesses){
        return businesses;
    }else{
        return [];
    }
}
let server = {
    fetchRestaurant : () => {
        return getEntries('Restaurant');
    },
    fetchAll : () => {
        return locations;
    },
    getResults : (type,city,keyword) => {
        if (type.length > 0 && city.length > 0 && keyword.length > 0){
            return getAllSearchResults(type,city,keyword);
        }
        else if (type.length <= 0 && city.length > 0 && keyword.length <= 0){
            return getCitySearchResults(city);
        }
        else if (type.length > 0 && city.length <= 0 && keyword.length <= 0){
            return getTypeSearchResults(type);
        }
        else if (type.length <= 0 && city.length <= 0 && keyword.length > 0){
            return getKeywordSearchResults(keyword);
        }else{
            return [];
        }
    },
    updateBusiness:(changedBiz) => {
        locations[changedBiz.id] = changedBiz;
    },
    addAReview:(id,review) => {
        locations[id].reviews.push(review);
    },
    addBusiness: (business) => {
        const newID = locations.length;
        business.reviews = [];
        business.rating = 0;
        business.id = newID;
        locations.push(business);
        console.log(locations);
    },
    deleteBusiness: (id) => {
        locations[id].visible = false;
        console.log(locations);
    }

}
export default server;