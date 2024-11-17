import React, { useState, useEffect } from "react";
import { Form, Field } from "react-final-form";
import { Box, Container, Button, Typography } from "@mui/material";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

import { useDispatch, useSelector } from "react-redux";
import { fetchDestinationList } from "../redux/slices/destinationSlice";

const SearchForm = () => {

  
  const [destination, setDestination] = useState("");
  const [inDate, setInDate] = useState(null);
  const [outDate, setOutDate] = useState(null);
  const [adults, setAdults] = useState("");
  const [children, setChildren] = useState("");

  const [errors, setErrors] = useState({
    destination: false,
    inDate: false,
    outDate: false,
   adults: false,
   children:false
  });


  const dispatch = useDispatch()
  const destinationList = useSelector((state) => state.destination); 

  useEffect(() => {
      dispatch(fetchDestinationList());
    }, [dispatch]);

 

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
    setErrors((prev) => ({ ...prev, destination: !event.target.value }));
  };

  const validateForm = () => {
    const errors = {
      destination: !destination,
      inDate: !inDate,
      outDate: !outDate || (inDate && outDate && outDate.isBefore(inDate)),
      adults: adults < 1,
      children: children < 0 || isNaN(children),
    };
    setErrors(errors);
    return !Object.values(errors).some(Boolean);
  };

  const onSubmit = (values) => {
    if (validateForm()) {
      const obj = {
        destination,
        inDate: inDate ? inDate.format("YYYY-MM-DD") : null,
        outDate: outDate ? outDate.format("YYYY-MM-DD") : null,
        adults: parseInt(adults, 10),
        children: parseInt(children, 10),
      };
      console.log("Results: ", obj);
    }
  };

  return (
    <Container
      sx={{
        border: "solid orange 2px",
        borderRadius: "4px",
        padding: "20px",
        margin: "60px 0px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
      }}
    >
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "top",
                flexWrap: "wrap",
                gap: 2,
              }}
            >
              {/* Destination */}
              <Box sx={{ width: "34%" }}>
                <FormControl fullWidth error={errors.destination}>
                  <InputLabel id="destination-select-label">
                    Destination
                  </InputLabel>
                  <Select
                    labelId="destination-select-label"
                    id="destination-select"
                    value={destination}
                    label="Destination"
                    onChange={handleDestinationChange}
                 
                  >
                                        {destinationList && destinationList.length > 0 ? (
                      destinationList.map((dest, index) => (
                        <MenuItem key={dest.value} value={dest.label}>
                          {dest.label}
                        </MenuItem>
                      ))
                    ) : (
                      <MenuItem value="">Loading destinations...</MenuItem>
                    )} 

                  </Select>
                  {errors.destination && (
                    <Typography fontSize="10px" color="error" variant="caption" padding="4px 0px 0px">
                      Please select a destination
                    </Typography>
                  )}
                </FormControl>
              </Box>

              {/* Check in date */}
              <Box sx={{ width: "16%" }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Check-in"
                    value={inDate}
                    onChange={(newValue) => {
                      setInDate(newValue);
                      setErrors((prev) => ({ ...prev, inDate: !newValue }));
                    }}
                    renderInput={(params) => (
                      <TextField {...params} error={errors.inDate} />
                    )}
                  />
                </LocalizationProvider>
                {errors.inDate && (
                  <Typography fontSize="10px" color="error" variant="caption">
                    Please select a check-in date
                  </Typography>
                )}
              </Box>

              {/* Check out date */}
              <Box sx={{ width: "16%" }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Check-out"
                    value={outDate}
                    onChange={(newValue) => {
                      setOutDate(newValue);
                      setErrors((prev) => ({
                        ...prev,
                        outDate:
                          !newValue || (inDate && newValue.isBefore(inDate)),
                      })); 
                    }}
                    renderInput={(params) => (
                      <TextField {...params} error={errors.outDate} />
                    )}
                  />
                </LocalizationProvider>
                {errors.outDate && (
                  <Typography fontSize="10px" color="error" variant="caption">
                    Please select a valid check-out date
                  </Typography>
                )}
              </Box>

              {/* Adults */}
              <Box sx={{ width: "8%" }}>
                <TextField
                  label="Adults"
                  type="number"
                  value={adults}
                  onChange={(e) => {
                    const value = e.target.value;
                    setAdults(value);
                    setErrors((prev) => ({ ...prev, adults: value < 0 }));
                  }}
                  error={errors.adults}
                  fullWidth
                  variant="outlined"
                  InputProps={{ inputProps: { min: 0 } }}
                  />
                  {errors.adults && (
                    <Typography fontSize="10px" color="error" variant="caption">
                   At least 1 adult
                    </Typography>
                  )}

              </Box>

              {/* Children */}
              <Box sx={{ width: "8%" }}>
                <TextField
                  label="Children"
                  type="number"
                  value={children}
                  onChange={(e) => {
                    const value = e.target.value;
                    setChildren(value);
                    //setErrors((prev) => ({ ...prev, children: isNaN(value) || value < 0  }));
                  }}
                  error={errors.children}
                  fullWidth
                  variant="outlined"
                  InputProps={{ inputProps: { min: 0 } }}
                />
                 {errors.children && (
                    <Typography fontSize="10px" color="error" variant="caption">
                     Cannot be empty
                    </Typography>
                  )}
              </Box>

              {/* Submit */}
              <Box sx={{ width: "10%" }}>
                <Button
                  type="submit"
                  color="inherit"
                  sx={{
                    backgroundColor: "orange",
                    color: "white",
                    width: "100%",
                    height: "54px",
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </form>
        )}
      />
    </Container>
  );
};

export default SearchForm;
