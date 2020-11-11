let locations = [
    {
        id: 0,
        name: "Target",
        visible: true,
        address: "4040 N Oracle",
        type: 'Retail',
        city: "Tucson",
        state: "AZ",
        keywords: "retail,clothing,grocery",
        reviews: ["here is a review for target", "here is another for target"],
        rating: 5,
        open: 900,
        close: 2200
    },
    {
        id: 1,
        visible: true,
        name: "TJ Maxx",
        address: "6230 N Oracle Rd",
        type: 'Retail',
        city: "Tucson",
        state: "AZ",
        keywords: "clothing,retial,mens,womens,children,test",
        reviews: ["here is a review for TJ Maxx", "here is another for TJ Maxx"],
        rating: 5,
        open: 800,
        close: 2000,
    },
    {
        id: 2,
        visible: true,
        name: "Nico's Taco Shop",
        address: "2965 N Campbell Ave",
        type: "Restaurant",
        city: "Tucson",
        state: "AZ",
        keywords: "food,restaurant,mexican,burrito,test",
        reviews: ["here is a review for Nicos", "here is another for Nicos"],
        rating: 5,
        open: 2400,
        close: 2400

    },
    {
        id: 3,
        visible: true,
        name: "Green Things",
        address: "3384 E River Rd",
        type: 'Retail',
        city: "Tucson",
        state: "AZ",
        keywords: "garden,plants,nursery,pots",
        reviews: ["here is a review for Green Things", "here is another for Green Things"],
        rating: 5,
        open: 900,
        close: 1700

    },
    {
        id: 4,
        visible: true,
        name: "Plumb Happy Plumbing",
        address: "123 Happy Lane",
        type: 'Services',
        city: "Tucson",
        state: "AZ",
        keywords: "plumbing,pottery,test",
        reviews: ["here is a review for PHP", "here is another for PHP"],
        rating: 5,
        open: 900,
        close: 1700

    }

]

export default locations;