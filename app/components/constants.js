// app/components/constants.js

import {
  FaPlane,
  FaHotel,
  FaTrain,
  FaBus,
  FaCar,
  FaShip,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdHomeWork, MdOutlineCardTravel } from "react-icons/md";
import { RiVisaLine } from "react-icons/ri";
import { GiHealthNormal } from "react-icons/gi"; // Insurance icon

export const submenuItems = [
  { label: "Flights", icon: <FaPlane /> },
  { label: "Hotels", icon: <FaHotel /> },
  { label: "Homestays", icon: <MdHomeWork /> },
  { label: "Flight + Hotel", icon: <MdOutlineCardTravel /> },
  { label: "Trains", icon: <FaTrain /> },
  { label: "Bus", icon: <FaBus /> },
  { label: "Cabs", icon: <FaCar /> },
  { label: "Cruise", icon: <FaShip /> },
  { label: "Visa", icon: <RiVisaLine /> },
  { label: "Insurance", icon: <GiHealthNormal /> },
  { label: "Sim Cards", icon: <FaPhoneAlt /> },
];
