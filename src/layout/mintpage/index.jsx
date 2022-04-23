import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import React, { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import { makeStyles } from "@mui/styles";
import "./style.css";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const Mintpage = () => {
  const [name, setName] = useState("");
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);
  const handleSelectChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const useStyles = makeStyles({
    customOutline: {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "white",
      },
    },
  });
  const classes = useStyles();
  return (
    <div>
      <div className="mint_flex">
        <div className="filter">
          <FormControl variant="standard">
            <InputLabel htmlFor="component-simple" style={{ color: "white" }}>
              Apply filter
            </InputLabel>
            <Input
              id="component-simple"
              value={name}
              onChange={handleChange}
              style={{ color: "white", borderBottom: "0.5px solid" }}
            />
          </FormControl>
          <br />
          <br />
          <h3 className="label_style">Collection</h3>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-name-label">Name</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              value={personName}
              onChange={handleSelectChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
              sx={{
                color: "white",
              }}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <br />
          <br />
          <h3 className="label_style">Status</h3>
          <div>
            <div className="checkbox-flex">
              <div className="checkbox-style"></div>&nbsp;&nbsp;&nbsp;
              <span className="checkbox-label">All NFT</span>
            </div>
            <div className="checkbox-flex">
              <div className="checkbox-style"></div>&nbsp;&nbsp;&nbsp;
              <span className="checkbox-label">Available</span>
            </div>
            <div className="checkbox-flex">
              <div className="checkbox-style"></div>&nbsp;&nbsp;&nbsp;
              <span className="checkbox-label">Solid Out</span>
            </div>
          </div>
          <br />
          <h3 className="label_style">Price</h3>
        </div>
        <div className="filter-content">
          <h1>dsf</h1>
        </div>
      </div>
      <br />

      <br />
      <br />
      <br />

      <br />
      <br />
      <br />

      <br />
      <br />
      <br />

      <br />
      <br />
      <br />

      <br />
      <br />
    </div>
  );
};
export default Mintpage;
