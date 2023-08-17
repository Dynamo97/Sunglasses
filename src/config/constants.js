import { swatch, fileIcon, ai, logoShirt, stylishShirt } from "../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
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

export const colors = [
  '#030115',
  '#82a7ba',
  '#ffe599',
  '#ed9e4b',
  '#cc0000',
  '#ddd',
]

export const colours = [
  {
    name: 'Black',
    color: '#030115'
  },
  {
    name: 'Teal',
    color: '#82a7ba',
  },
  {
    name: 'Yellow',
    color: '#ffe599',
  },
  {
    name: 'Orange',
    color: '#ed9e4b',
  },
  {
    name: 'Red',
    color: '#cc0000',
  },
  {
    name: 'Silver',
    color: '#ddd',
  }
]

export const col = {
  0o30115: 'Black',
  cc0000: 'Red',
}