import { swatch, fileIcon, logoShirt, stylishShirt } from "../assets";

export const EditorTabs = [
  {
    name: "shirtcolorpicker",
    icon: swatch,
    label: "Shirt Color",
  },
  {
    name: "designcolorpicker",
    icon: swatch,
    label: "Design Color",
  },
  {
    name: "filepicker",
    icon: fileIcon,
    label: "Pattern or Logo",
  },
];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: logoShirt,
  },
  {
    name: "stylishShirt",
    icon: stylishShirt,
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};
