import React, {useEffect, useState} from "react";
import {useDrop} from "react-dnd";
import {Link, useNavigate} from "react-router-dom";
import {backendjson} from "../../backendjson";
import Propertycardbox from "./propertycardbox";

const Resultpage = ({data}) => {
    // State for tracking the favorite properties
    const [isfavourite, setisfavourite] = useState(false);

    // Filter the properties based on user-selected criteria
    const filteredData = backendjson.properties?.filter((property) => {
        console.log(property)
        // by type
        if (
            data.propertyType &&
            property.type !== data.propertyType
        ) {
            return false;
        }

        // by range
        if (
            data.price &&
            (property.price < data.price[0] ||
                property.price > data.price[1])
        ) {
            return false;
        }

        // by rooms range
        if (
            data.rooms &&
            (property.bedrooms < data.rooms[0] ||
                property.bedrooms > data.rooms[1])
        ) {
            return false;
        }

        // by selected dates
        if (data.selectedDates) {
            const propertyDate = new Date(
                property.added.year,
                monthnum(property.added.month),
                property.added.day
            );
            const [startDate, endDate] = data.selectedDates.map(
                (date) => new Date(date)
            );

            if (propertyDate < startDate || propertyDate > endDate) {
                return false;
            }
        }

        // by postal code
        if (
            data.postalCode &&
            property.postalCode !== data.postalCode
        ) {
            return false;
        }

        return true;
    });

    function monthnum(month) {
        const monthMap = {
            January: 0,
            February: 1,
            March: 2,
            April: 3,
            May: 4,
            June: 5,
            July: 6,
            August: 7,
            September: 8,
            October: 9,
            November: 10,
            December: 11,
        };

        return monthMap[month];
    }

    const navigate = useNavigate();

    // State for storing and managing favorite properties
    const [favourites, setFavourites] = useState([]);
    const [{isOver}, drop] = useDrop({
        accept: "PROPERTY",
        drop: (item) => addtofavourites(item),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    });

    // Load favorites from local storage on component mount
    useEffect(() => {
        const storedFavourites = JSON.parse(
            localStorage.getItem("favourites") || "[]"
        );
        setFavourites(storedFavourites);
    }, []);

    // Function to add a property to favorites
    function addtofavourites(item) {
        const favs = localStorage.getItem("favourites");
        var exist = JSON.parse(favs || "[]");
        console.log(item.property.property)
        const propertyExists = exist.some(
            (fav) => fav.id === item.property.property.id
        );
        if (!propertyExists) {
            exist.push(item.property.property);
            var updatedfav = JSON.stringify(exist);
            localStorage.setItem("favourites", updatedfav);
            setFavourites(exist);
        }
    }

    // Function to delete a property from favorites
    const deleteclick = (event, propertyId) => {
        event.preventDefault();
        const getFavourites = localStorage.getItem("favourites");
        var existingFavs = JSON.parse(getFavourites || "[]");

        const indexToRemove = existingFavs.findIndex(
            (fav) => fav.id === propertyId
        );

        if (indexToRemove !== -1) {
            existingFavs.splice(indexToRemove, 1);

            localStorage.setItem("favourites", JSON.stringify(existingFavs));

            setFavourites(existingFavs);
        }
    };

    return (
        <section>
            <div
                className="container-fluid px-md-5">
                <div className="row ">
                    {/* Property Listings */}
                    <div className={`col-${isfavourite ? '8' : '12'} justify-content-center`} style={{marginTop:'40px'}}>
                        <div className=" titleproperty text-center">
                            <div className="d-flex flex-column flex-md-row justify-content-end align-items-center">
                                <div className="d-flex">
                                    <button className="btn btn-warning mr-2" onClick={() => {
                                        setisfavourite(!isfavourite)
                                    }}>  Favourites
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Property Listing Cards */}
                        <div className="row">

                            {filteredData.map((property) => (
                                <div className={`col-${!isfavourite ? 'lg-4' : 'lg-5'} mb-5`}>
                                    <Propertycardbox property={{property}}/>

                                </div>
                            ))}

                        </div>

                    </div>

                    {/* Favorites Sidebar */}
                    {isfavourite && <div className="col-4 p-4 "
                                             style={{background:"#7eb5e5"}}>
                        <div className="d-flex w-100 flex-column">
                            <h3 className="text-center">Favourites</h3>
                            
                            {/* Favorites List */}
                            <div
                                ref={drop}
                                className="outline"
                                style={{height: "70vh", overflow: "scroll"}}
                            >
                                {favourites.map((fav) => (
                                    <>
                                        <div className="p-2 ">
                                                <div className="card1 p-1  card text-dark  align-items-center"
                                                     style={{maxWidth: "540px", flexDirection: "row"}}>

                                                    <div className="card-body px-2">
                                                        <h5 className="mb-1 ">{fav.type}</h5>
                                                        <p className="card-text favtextcard mb-1">{fav.description}</p>
                                                        
                                                        {/* View and Delete buttons for each favorite property */}
                                                        <a href="#" className="btn-sm btn-primary mr-2"
                                                           onClick={() => navigate(`/moredetailproperty/${fav.id}`)}>
                                                            View</a>
                                                        <span onClick={(e) => deleteclick(e, fav.id)}
                                                              className="btn-sm btn-danger ">Delete</span>
                                                    </div>
                                                   
                                                    {/* Displaying Favorite Property Image */}
                                                    <img
                                                        className=""
                                                        style={{
                                                            width: "40%",
                                                            height: "120px",
                                                            objectFit: "cover"
                                                        }}
                                                        src={fav.picture}
                                                    />
                                                </div>
                                        </div>

                                    </>
                                ))}
                            </div>
                            {/* Button to clear all favorites */}
                            <button className=" btn btn-primary m-auto" onClick={() => {
                                localStorage.setItem("favourites", "[]");
                                setFavourites([])
                            }}>
                                Clear Favourites
                            </button>
                        </div>
                    </div>}

                </div>
            </div>
        </section>
    );
};

export default Resultpage;
