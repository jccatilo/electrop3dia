import {components} from "@/lib/constants/component-registry";
import type {ComponentPartInfo} from "@/types/Component";

export const getPartInfoForComponent = (url: string): ComponentPartInfo[] => {
  const parts = url
    .toLowerCase()
    .split("/")
    .slice(-2);

  const category = parts[0];
  const component = parts[1].replace(".glb" , '');

  return components[category][component].partInfo ?? null;
};