import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React, {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Thumbs} from "swiper/modules";
import {backendjson} from "../../backendjson";
import {useParams} from "react-router-dom";


const Descriptionpage = () => {
    const [activeTab, setActiveTab] = useState("Description");

    //Function to get a property from the JSON data by its ID
    function getPropertyById(id) {
        const property = backendjson.properties.find((prop) => prop.id === id);
        return property || null;
    }

    //Event handler that refreshes the active tab when a tab is clicked
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    //get the 'id' parameter from the URL
    const {id} = useParams();
    const property = getPropertyById(id);

    return (
        <section>
            <div className="container mt-5">
                {/* Title of the property */}
                
                <h2>{property.type} in {property.location}</h2>

                <div className="row mt-5">
                    <div className="col-lg-6 pl-0 pr-0 ">
                        <div className="property-pg-left">
                            <div className="thumbimage p-3">
                                {/* Images of the property */}
                                <Swiper
                                    loop={true}
                                    spaceBetween={10}
                                    navigation={true}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper2"
                                >
                                    {property?.images?.map((img) => {
                                        return (
                                            <SwiperSlide>
                                                <img src={img}/>
                                            </SwiperSlide>
                                        );
                                    })}
                                </Swiper>
                                {/* Thumbnail slider for the property */}
                                <Swiper
                                    loop={true}
                                    spaceBetween={10}
                                    slidesPerView={4}
                                    freeMode={true}
                                    watchSlidesProgress={true}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper"
                                >
                                
                                    {property?.images?.map((img) => {
                                        return (
                                            <SwiperSlide>
                                                <img src={img}/>
                                            </SwiperSlide>
                                        );
                                    })}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 pr-0">
                        {/* Tabs for different sections */}
                        <ul className="nav nav-tabs">
                            {/* Description section */}
                            <li className="nav-item">
                                <a
                                    className={`nav-link ${activeTab === "Description" ? "active" : ""}`}
                                    onClick={() => handleTabClick("Description")}
                                    href="#"
                                >
                                    Description
                                </a>
                            </li>
                            {/* Floor plan section */}
                            <li className="nav-item">
                                <a
                                    className={`nav-link ${activeTab === "Floor Plan" ? "active" : ""}`}
                                    onClick={() => handleTabClick("Floor Plan")}
                                    href="#"
                                >
                                    Floor Plan
                                </a>
                            </li>
                            {/* Location section */}
                            <li className="nav-item">
                                <a
                                    className={`nav-link ${activeTab === "Location Map" ? "active" : ""}`}
                                    onClick={() => handleTabClick("Location Map")}
                                    href="#"
                                >
                                    Location Map
                                </a>
                            </li>
                        </ul>
                        
                        {/* Content based on the active tab */}
                        {activeTab === "Description" && <p className="p-4">{property.description}
                            <table className="table mt-5 table-light">

                                {/* Property details table */}
                                <thead>
                                <tr>
                                    <th scope="col">Property</th>
                                    <th scope="col">Detail</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">Type</th>
                                    <td>{property.type}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Bedrooms</th>
                                    <td>{property.bedrooms}</td>

                                </tr>
                                <tr>
                                    <th scope="row">Bathrooms</th>
                                    <td>{property.bathrooms}</td>

                                </tr>
                                <tr>
                                    <th scope="row">Price</th>
                                    <td>{property.price}</td>

                                </tr>
                                <tr>
                                    <th scope="row">Tenure</th>
                                    <td>{property.tenure}</td>

                                </tr>
                                <tr>
                                    <th scope="row">Location</th>
                                    <td>{property.location}</td>

                                </tr>
                                <tr>
                                    <th scope="row">Postal Code</th>
                                    <td>{property.postalCode}</td>

                                </tr>
                                </tbody>
                            </table>
                        </p>}
                        {activeTab === "Floor Plan" &&
                            <p className="p-4"><img className="w-100" src={property.floorPlan}/></p>}
                        {activeTab === "Location Map" && <p className="p-4">
                            
                            {/* Embedded Google Map */}
                            <iframe
                                src={property?.map}
                                width={"100%"}
                                height={380}
                                style={{border: 0}}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </p>}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Descriptionpage;
