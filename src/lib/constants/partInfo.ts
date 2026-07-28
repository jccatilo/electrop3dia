import {components} from "@/lib/constants/component-registry";

export const getPartInfoForComponent = (url: string): PartInfo[] => {
  const parts = url
    .toLowerCase()
    .split("/")
    .slice(-2);

  const category = parts[0] as categoryType;
  const component = parts[1].replace(".glb" , '');

  return components[category][component].partInfo ?? null;
};