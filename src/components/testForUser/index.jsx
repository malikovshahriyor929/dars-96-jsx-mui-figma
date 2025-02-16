import React from "react";

import { ChevronRight, ShoppingCart } from "@mui/icons-material";

import {
  Alert,
  Button,
  ButtonGroup,
  Chip,
  Menu,
  MenuItem,
  TextField,
} from "@mui/material";
import BasicTable from "./table";
import { Link } from "react-router-dom";

const TestForUsers = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="w-[95%] mx-auto py-10 flex flex-col gap-5  max-[320px]:w-[90%]">
      <div className="flex items-center flex-col text-center gap-1">
        <p className="text-[14px] font-bold text-[#0073e6]">
          Production-ready components
        </p>
        <p className="text-[36px] max-[1102px]:text-[30px] max-[500px]:text-[27px] max-[350px]:text-[22px] font-bold text-[#1d2126] max-w-[410px]  ">
          Beautiful and powerful,
          <span className="text-[#39f]"> right out of the box </span>
        </p>
        <div className="flex items-center gap-2 ">
          <Chip
            label="Custom theme"
            className="font-semibold"
            variant="outlined"
            size="small"
          />
          <Chip
            label="Material Design"
            size="small"
            className=" !text-[#006bd6] !bg-[#E5F2FF] font-semibold"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 max-[913px]:grid-cols-2 max-[600px]:grid-cols-1 ">
        <div className="relative h-[281px]  border border-[#dfe2e7] rounded-tl-lg max-[600px]:rounded-t-lg  ">
          <div className="flex items-center gap-3 absolute top-3 left-4 ">
            <p className="text-[14px] font-medium ">Small</p>
            <p className="text-[14px] font-medium text-[#0073e6] border-b-2 border-[#0073e6] ">
              Medium
            </p>
            <p className="text-[14px] font-medium ">Large</p>
          </div>
          <ButtonGroup className="absolute top-[50%] left-[50%] translate-[-50%]   ">
            <Button>
              <ShoppingCart /> Add to Cart
            </Button>
          </ButtonGroup>
          <div className="absolute bottom-3 left-4  ">
            <p className="text-[14px] font-semibold ">Button</p>
          </div>
        </div>
        <div className="relative h-[281px]  border border-[#dfe2e7] max-[913px]:rounded-tr-lg max-[600px]:rounded-none ">
          <div className="flex items-center gap-3 absolute top-3 left-4 ">
            <p className="text-[14px] font-medium   text-[#0073e6] border-b-2 border-[#0073e6] ">
              Standard
            </p>
            <p className="text-[14px] font-medium">Filled</p>
            <p className="text-[14px] font-medium ">Outlined</p>
          </div>
          <ButtonGroup className="absolute top-[50%] left-[50%] translate-[-50%]   ">
            <Alert color="info">Check out this alert!</Alert>
          </ButtonGroup>
          <div className="absolute bottom-3 left-4  ">
            <p className="text-[14px] font-semibold ">Alert</p>
          </div>
        </div>
        <div className="relative h-[281px]  border border-[#dfe2e7] rounded-tr-lg max-[913px]:rounded-none ">
          <div className="flex items-center gap-3 absolute top-3 left-4 ">
            <p className="text-[14px] font-medium">Filled</p>
            <p className="text-[14px] font-medium   text-[#0073e6] border-b-2 border-[#0073e6] ">
              Standard
            </p>
            <p className="text-[14px] font-medium ">Outlined</p>
          </div>
          <ButtonGroup className="absolute top-[50%] left-[50%] translate-[-50%]   ">
            <TextField
              label="Ultraviolet"
              defaultValue={"Ultraviolet"}
              id={"outlined-required"}
            />
          </ButtonGroup>
          <div className="absolute bottom-3 left-4  ">
            <p className="text-[14px] font-semibold ">TextField</p>
          </div>
        </div>
        <div className="relative h-[281px]  border border-[#dfe2e7] rounded-bl-lg max-[913px]:rounded-none ">
          <ButtonGroup className="absolute top-[50%] left-[50%] translate-[-50%]   ">
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              className="!rounded-lg !border-none "
            >
              Click to open
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </ButtonGroup>
          <div className="absolute bottom-3 left-4  ">
            <p className="text-[14px] font-semibold ">Menu</p>
          </div>
        </div>
        <div className="relative h-[281px]  border border-[#dfe2e7] max-[913px]:rounded-bl-lg max-[600px]:rounded-none ">
          <ButtonGroup className="absolute top-[50%] left-[50%] translate-[-50%]   ">
            {BasicTable()}
          </ButtonGroup>
          <div className="absolute bottom-3 left-4  ">
            <p className="text-[14px] font-semibold ">Table</p>
          </div>
        </div>
        <div className="relative h-[281px]  border border-[#dfe2e7] rounded-br-lg  max-[600px]:rounded-b-lg">
          <ButtonGroup className="absolute top-[50%] left-[50%] translate-[-50%]  flex flex-col gap-2 text-center  ">
            <p className="text-[14px] font-bold ">Want to see more?</p>
            <p className="text-[#303741] text-[14px]">
              Check out the docs for details of the complete library.
            </p>
            <Link to={"/"} className="text-[#006bd6] text-[15px] font-medium">Learn more <ChevronRight/></Link>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default TestForUsers;
