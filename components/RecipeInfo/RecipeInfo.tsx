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
  RecipeDescription,
  RecipeImageWrapper,
  RecipeInfos,
  RecipeMeta,
  RecipeMetas,
  Tag,
  Tags,
  TitleWrapper,
} from "./RecipeInfo.style";
import SectionTitle from "../SectionTitle/SectionTitle";
import Directions from "../Directions/Directions";
import { Recipe } from "@/generated/graphql";
import dayjs from "dayjs";
import { prepareImageUrl } from "@/utils/image";
import { getTagUrl } from "@/utils/url";

const RecipeInfo = ({ recipe }: { recipe: Recipe }) => {
  const {
    recipeTitle,
    recipeDescription,
    personCount,
    cookingTime,
    preparationTime,
    ingredients,
    recipeDirections,
    recipeImages,
    tags,
    likeCount,
    createdAt,
  } = recipe;

  //todo merge tags and categories
  //const mappedTags=[...tags,categories]
  return (
    <RecipeContainer>
      <TitleWrapper>
        <h1>{recipeTitle}</h1>
      </TitleWrapper>
      <RecipeMetas>
        <RecipeMeta>
          <FaCalendarAlt color="#47c757" />{" "}
          {dayjs.tz(createdAt).format("DD MMMM YYYY")}
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
          src={prepareImageUrl(recipeImages?.data?.attributes?.url)}
          alt="recipe"
        />
      </RecipeImageWrapper>
      <RecipeInfos>
        <Info>
          <FaUsers size={37} color="#47c757" />
          <InfoText>
            <InfoTitle>Kaç Kişilik</InfoTitle>
            <InfoDescription>{personCount}</InfoDescription>
          </InfoText>
        </Info>
        <Info>
          <FiClock size={30} color="#47c757" />
          <InfoText>
            <InfoTitle>Hazırlık Süresi</InfoTitle>
            <InfoDescription>{preparationTime}</InfoDescription>
          </InfoText>
        </Info>
        <Info>
          <FaUtensils size={30} color="#47c757" />
          <InfoText>
            <InfoTitle>Pişirme Süresi</InfoTitle>
            <InfoDescription>{cookingTime}</InfoDescription>
          </InfoText>
        </Info>
        <Info>
          <FaHeart size={30} color="#47c757" />
          <InfoText>
            <InfoTitle>Beğeni</InfoTitle>
            <InfoDescription>{likeCount}</InfoDescription>
          </InfoText>
        </Info>
      </RecipeInfos>
      <RecipeDescription>
        <p>{recipeDescription}</p>
      </RecipeDescription>
      <IngredientsWrapper>
        <SectionTitle
          title="Malzemeler"
          level="3"
          iconPrefix={<FaListCheck color="#47c757" />}
        />
        <Ingredients>
          {ingredients.map((ingredient, i) => (
            <IngredientCheck key={i}>
              <input type="checkbox" />
              <span>
                <b>{ingredient?.amount}</b>{" "}
                {ingredient?.ingredient?.data?.attributes?.ingredient_name}
              </span>
            </IngredientCheck>
          ))}
        </Ingredients>
      </IngredientsWrapper>
      <DirectionSection>
        <SectionTitle
          title={`${recipeTitle} Tarifi Nasıl Yapılır?`}
          level="3"
          iconPrefix={<FaKitchenSet color="#47c757" />}
        />
        {recipeDirections?.direction && (
          <Directions directions={recipeDirections?.direction} />
        )}
      </DirectionSection>
      {tags?.data && tags?.data.length > 0 && (
        <Tags>
          <span>TAGS</span>
          <div>
            {tags?.data.map((tag, i) => (
              <Tag
                title={tag.attributes?.tag_name}
                href={getTagUrl(tag.attributes?.slug)}
                key={i}
              >
                {tag.attributes?.tag_name}
              </Tag>
            ))}
          </div>
        </Tags>
      )}
    </RecipeContainer>
  );
};

export default RecipeInfo;
