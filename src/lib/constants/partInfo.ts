import {resolveComponent} from "@/lib/constants/component-registry";
import type {ComponentPartInfo} from "@/types/Component";

export const getPartInfoForComponent = (url: string): ComponentPartInfo[] => {
  return resolveComponent(url)?.partInfo ?? [];
};
