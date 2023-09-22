import Carousel from "@/components/Carousel/Carousel";
import Interests from "@/components/Interests/Interests";
import LayoutSectionContainer from "@/components/LayoutSectionContainer/LayoutSectionContainer";
import RecipeCard from "@/components/RecipeCard/RecipeCard";
import RecipeCardMini from "@/components/RecipeCardMini/RecipeCardMini";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import Trends from "@/components/Trends/Trends";
import Trio from "@/components/Trio/Trio";

export default function Home() {
  return (
    <>
      <Carousel />
      <Trio />
      <LayoutSectionContainer flex>
        <Trends />

        <Interests />
      </LayoutSectionContainer>
    </>
  );
}
