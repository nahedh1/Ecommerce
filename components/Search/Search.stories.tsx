import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { Search } from "./Search";

const SearchMeta: ComponentMeta<typeof Search> = {
    title: "Search IIT",
    component: Search,
   
    args: {
      placeholder: "Hello world",
    },
  };

  export default SearchMeta;

  type SearchStory = ComponentStory<typeof Search>;

export const Basic: SearchStory = (args) => <Search {...args} />;
export const Basic2: SearchStory = (args) => <Search placeholder="test" />;
