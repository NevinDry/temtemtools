const initState = {
    temtems: [{
        id:1,
        name: "Saku",
        types:["Nature"]
    },{
        id:2,
        name: "Ganki",
        types: ["Elec", "Wind"]
    },{
        id:3,
        name: "Neesla",
        types: ["Elec", "Water"]
    }]
};

const temtemListReducer = (state = initState, action) => {
    return state;
}

export default temtemListReducer;