import React from "react";
import {useDrag} from "react-dnd";
import {useNavigate} from "react-router-dom";

const Propertycardbox = ({ property }) => {
    const navigate = useNavigate();
    const propertyData=property.property

    // Define drag-related properties and functions using react-dnd
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "PROPERTY",
        item: { property },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return(
        // Render a draggable card using the drag ref
        <div className="card float-right"  ref={drag}>
            <div className="row">
                <div className="col-sm-5">
                    {/* Display property image */}
                    <img className="card-img-top"
                         src={propertyData.picture}/>
                </div>
                {/* Display property details */}
                <div className="col-sm-7">
                    <div className="card-body">
                        <h4 className="card-title mb-1">{propertyData.type}  </h4>
                        <h6 className="card-title mb-0"> Rs.{propertyData.price} </h6>
                        <p className="card-text">{propertyData.description}</p>
                        {/* Button to navigate to more property details */}
                        <button onClick={() => navigate(`/moredetailproperty/${propertyData.id}`)} className="btn btn-warning   ">Go To Property</button>
                    </div>
                </div>
            </div>
        </div>
       )
}
 
export default Propertycardbox