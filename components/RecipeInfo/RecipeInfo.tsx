import React from "react";
import { FaCalendarAlt, FaUser, FaUsers } from "react-icons/fa";
import { FiClock, FiHeart } from "react-icons/fi";
import {
  FaHeart,
  FaKitchenSet,
  FaListCheck,
  FaUtensils,
} from "react-icons/fa6";
import Rating from "../Rating/Rating";
import {
  DirectionSection,
  Info,
  InfoDescription,
  InfoText,
  InfoTitle,
  IngredientCheck,
  Ingredients,
  IngredientsWrapper,
  RecipeContainer,
  RecipeImageWrapper,
  RecipeInfos,
  RecipeMeta,
  RecipeMetas,
  Tags,
  TitleWrapper,
} from "./RecipeInfo.style";
import SectionTitle from "../SectionTitle/SectionTitle";
import Directions from "../Directions/Directions";

const RecipeInfo = () => {
  return (
    <RecipeContainer>
      <TitleWrapper>
        <h1>Tarif</h1>
      </TitleWrapper>
      <RecipeMetas>
        <RecipeMeta>
          <FaCalendarAlt color="#47c757" /> 1 yıl önce
        </RecipeMeta>
        <RecipeMeta>
          <FaUser color="#47c757" /> Mert
        </RecipeMeta>
        <RecipeMeta>
          <FiHeart color="#47c757" /> Beğen
        </RecipeMeta>
        <Rating value={0} />
      </RecipeMetas>
      <RecipeImageWrapper>
        <img
          src="https://www.alerjify.com/images/recipes/smoky-grilled-steak.jpg"
          alt="recipe"
        />
      </RecipeImageWrapper>
      <RecipeInfos>
        <Info>
          <FaUsers size={37} color="#47c757" />
          <InfoText>
            <InfoTitle>Kaç Kişilik</InfoTitle>
            <InfoDescription>4</InfoDescription>
          </InfoText>
        </Info>
        <Info>
          <FiClock size={30} color="#47c757" />
          <InfoText>
            <InfoTitle>Hazırlık Süresi</InfoTitle>
            <InfoDescription>4</InfoDescription>
          </InfoText>
        </Info>
        <Info>
          <FaUtensils size={30} color="#47c757" />
          <InfoText>
            <InfoTitle>Pişirme Süresi</InfoTitle>
            <InfoDescription>4</InfoDescription>
          </InfoText>
        </Info>
        <Info>
          <FaHeart size={30} color="#47c757" />
          <InfoText>
            <InfoTitle>Beğeni</InfoTitle>
            <InfoDescription>4</InfoDescription>
          </InfoText>
        </Info>
      </RecipeInfos>
      <IngredientsWrapper>
        <SectionTitle
          title="Malzemeler"
          level="3"
          iconPrefix={<FaListCheck color="#47c757" />}
        />
        <Ingredients>
          <IngredientCheck>
            <input type="checkbox" />
            asd
          </IngredientCheck>
          <IngredientCheck>
            <input type="checkbox" />
            asd
          </IngredientCheck>
          <IngredientCheck>
            <input type="checkbox" />
            asd
          </IngredientCheck>
        </Ingredients>
      </IngredientsWrapper>
      <DirectionSection>
        <SectionTitle
          title="Füme Izgara Biftek Tarifi Nasıl Yapılır?"
          level="3"
          iconPrefix={<FaKitchenSet color="#47c757" />}
        />
        <Directions />
      </DirectionSection>
      <Tags>
        <span>TAGS</span>
        <a href="#">Et</a>
        <a href="#">Et</a>
        <a href="#">Et</a>
        <a href="#">Et</a>
      </Tags>
    </RecipeContainer>
  );
};

export default RecipeInfo;
