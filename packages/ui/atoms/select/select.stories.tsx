import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import {Select} from "../..";
import {countries} from "../../assets";


export default {
  title: "Atoms/Inputs/Select",
  component: Select,
  parameters: {
    status: {
      type: ["todo"],
    },
    layout: 'centered'
  },
} as any;

const Template: ComponentStory<typeof Select> = (args) => (
  <Select {...args} />
);

export const Base: ComponentMeta<typeof Select> = Template.bind({});
Base.args = {
  id: 'keuzemenu',
  placeholder: "Select Country",
  optionsList: countries,
};

export const Transition: ComponentMeta<typeof Select> = Template.bind({});
Transition.args = {
  id: 'keuzemenu',
  placeholder: "Select Country",
  optionsList: countries,
  transition: true,
};

export const AssetSorting: ComponentMeta<typeof Select> = Template.bind({});
AssetSorting.args = {
  id: 'keuzemenu',
  placeholder: "Sort by",
  optionsList: ["Price high - low", "Price low - high", "Rarity score", "Most popular"],
  transition: true,
  type: "assetSorting",
  width: "64",
};

// export const PlaceholderText: ComponentMeta<typeof Select> = Template.bind({});
// PlaceholderText.args = {
//   name: "Kies maar",
//   label: "Kies maar",
//   placeholder: "Kies eentje van deze",
//   optionsList: ["1", "2", "3"]
// };

// export const Required: ComponentMeta<typeof Select> = Template.bind({});
// Required.args = {
//   name: "Kies maar",
//   label: "Kies maar",
//   required: true,
//   optionsList: ["1", "2", "3"]
// };

// export const SelectMultiple: ComponentMeta<typeof Select> = Template.bind({});
// SelectMultiple.args = {
//   name: "Kies maar",
//   label: "Kies maar",
//   required: true,
//   optionsList: ["1", "2", "3"],
// };

// export const ChooseCountry: ComponentMeta<typeof Select> = Template.bind({});
// ChooseCountry.args = {
//   name: "Country",
//   label: "Country",
//   optionsList: countries
// };

// export const ProjectCategory: ComponentMeta<typeof Select> = Template.bind({});
// ProjectCategory.args = {
//   name: "category",
//   label: "category",
//   optionsList: ["Art", "Collectibles", "Sports", "...other"]
// };