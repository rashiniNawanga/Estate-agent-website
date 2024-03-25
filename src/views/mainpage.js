import React, {useState} from 'react';
import {Calendar} from "primereact/calendar";
// import SearchResults from "../components/SearchResults";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import Resultpage from "./components/resultpage";
import {Header} from "./components/header";
import {Footer} from "./components/footer";

const Mainpage = () => {
    // State for storing the selected estate data
    const [searchingdata, setsearchingdata] = useState({
        propertyType: "",
        price: [],
        rooms: [],
        selecteddate: [],
        postalCode: "",
    });

    // Event handlers for updating state based on user input
    const propertytypechange = (e) => {
        setsearchingdata((previousdata) => ({
            ...previousdata,
            propertyType: e.target.value,
        }));
    };

    const minpricechange = (e) => {
        setsearchingdata((previousdata) => {
            const newamount = [...previousdata.price];
            newamount[0] = e.target.valueAsNumber || '';
            return {...previousdata, price: newamount};
        });
    };

    const maxpricechange = (e) => {
        setsearchingdata((previousdata) => {
            const newamount = [...previousdata.price];
            newamount[1] = e.target.valueAsNumber || '';
            return {...previousdata, price: newamount};
        });
    };
    const minroomchange = (e) => {
        setsearchingdata((previousdata) => {
            const newroom = [...previousdata.rooms];
            newroom[0] = e.target.valueAsNumber || '';
            return {...previousdata, rooms: newroom};
        });
    };

    const maxroomchange = (e) => {
        setsearchingdata((previousdata) => {
            const newroom = [...previousdata.rooms];
            newroom[1] = e.target.valueAsNumber || '';
            return {...previousdata, rooms: newroom};
        });
    };
    const postalcodechange = (e) => {
        setsearchingdata((previousdata) => ({
            ...previousdata,
            postalCode: e.target.value || '',
        }));
    };
    const datechange = (selecteddate) => {
        setsearchingdata((previousdata) => ({
            ...previousdata,
            selecteddate: selecteddate,
        }));
    };

    // Function to initiate the search
    function search() {
        datechange(selecteddate)
    }

    // State for managing the selected date in the calendar
    const [selecteddate, setselecteddate] = useState(null);

    return (
        <>
            <DndProvider backend={HTML5Backend}>
                <div className="landingpage">
                    <form>
                        <legend className="font-weight-bold">Luxury Real Estate <br/> Search Your Properties</legend>

                        <div className="formsearch">
                            {/* Form fields for property search */}
                            <div className="fieldinput firstwrapper" style={{ width: '100%'}}>
                                {/* Property Type Dropdown */}
                                <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    value={searchingdata.propertyType}
                                    onChange={propertytypechange}
                                >
                                    <option selected>Select Property</option>
                                    <option value="House">House</option>
                                    <option value="Flat">Flat</option>
                                    <option value="bungalow">bungalow</option>
                                </select>

                            </div>
                            {/* Min Price Input */}
                            <div className="fieldinput firstwrapper" style={{  width: '100%'}}>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Min Price"
                                    value={searchingdata.price[0]}
                                    onChange={minpricechange}
                                />

                            </div>
                            {/* Max Price Input */}
                            <div className="fieldinput firstwrapper" style={{ width: '100%'}}>

                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Max Price"
                                    value={searchingdata.price[1]}
                                    onChange={maxpricechange}
                                />

                            </div>
                            {/* Min Rooms Input */}
                            <div className="fieldinput firstwrapper" style={{  width: '100%'}}>

                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Min Rooms"
                                    value={searchingdata.rooms[0]}
                                    onChange={minroomchange}
                                />
                            </div>
                            {/* Max Rooms Input */}
                            <div className="fieldinput firstwrapper" style={{  width: '100%'}}>

                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Max Rooms"
                                    value={searchingdata.rooms[1]}
                                    onChange={maxroomchange}
                                />

                            </div>
                            {/* Calendar Input for Date Selection */}
                            <div className="fieldinput firstwrapper" style={{  width: '100%'}}>

                                <Calendar className="calendardate w-100" placeholder={"Select Date"} value={selecteddate}
                                          onChange={(e) => setselecteddate(e.value)} selectionMode="range"
                                          readOnlyInput/>
                                
                            </div>
                            {/* Postal Code Dropdown */}
                            <div className="fieldinput firstwrapper" style={{  width: '100%'}}>

                                <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    value={searchingdata.postalCode}
                                    onChange={postalcodechange}
                                >
                                    <option selected>postal</option>
                                    <option value="30">30</option>
                                    <option value="45">45</option>
                                    <option value="60">60</option>
                                    <option value="75">75</option>
                                    <option value="90">90</option>
                                </select>

                            </div>
                            <div className="fieldinput fifth-wrap">
                                <button className="btn-search" type="button" onClick={search}>
                                    SEARCH
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                {/* Display search results using the Resultpage component */}
                <Resultpage data={searchingdata}/>
            </DndProvider>
        </>
    );
};

export default Mainpage;
