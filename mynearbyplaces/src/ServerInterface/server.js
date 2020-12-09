let api = "https://nicholasleluan-nearbyplaces.herokuapp.com"
let server = {
    getAllLocations: () => {return (fetch(api+"/places").then(x => x.json()))},
    /*
    Search for a busines; this will handle any case of user input; blank or not
    */
    searchTermLoc : (searchType,loc,term) => {
        if (searchType.length == 0){
            searchType = "void_type";
        }
        if (loc.length == 0){
            loc = "void_loc";
        }
        if (term.length == 0){
            term = "void_term";
        }
        return (fetch(api+`/search/${term}/${loc}/${searchType}`).then(x => x.json()))},
    //addReview is not working; need to get the business displayed correctly
    addReview : (id,review) => {return (
        fetch(api+`/review/${id.toString()}`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({id: id, review: review})
        })
        )},
    getDetails : (id) => {return (
        fetch(api+`/detail/${id}`).then(x => x.json())
    )},
    
    addBusiness : (name,type,address,city,state,rating,openX,closeX,keywords) => {return (
        fetch(api+"/place", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                name: name,
                type: type,
                address: address,
                city: city,
                state: state,
                rating: rating,
                open: openX,
                close: closeX,
                keywords: keywords
            })
        })
    )},
    
}

export default server;
