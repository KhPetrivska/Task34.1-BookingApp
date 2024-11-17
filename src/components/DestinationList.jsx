import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDestinationList } from "../redux/sagas/destinationSaga";

const DestinationList = () => {
    const dispatch = useDispatch()
    const destinations = useSelector ((state) => state.destination)

    useEffect(() => {
        dispatch(fetchDestinationList());
      }, [dispatch]);
    
      return (
        <ul>
          {destinations.map((destination) => (
            <li key={destination.id}>{destination.label}</li>
          ))}
        </ul>
      );
    };
    
    export default DestinationList;