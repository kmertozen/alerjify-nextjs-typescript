import Interests from "@/components/Interests/Interests";
import LayoutSectionContainer from "@/components/LayoutSectionContainer/LayoutSectionContainer";
import Rating from "@/components/Rating/Rating";
import RecipeInfo from "@/components/RecipeInfo/RecipeInfo";
import React from "react";
import { FaCalendar, FaCalendarAlt, FaHeart, FaUser } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

function Tarif() {
  return (
    <LayoutSectionContainer flex>
      <RecipeInfo />
      <Interests />
    </LayoutSectionContainer>
  );
}

export default Tarif;
