import {components} from './component-registry/index';
import type {ComponentGuide} from '@/types/Component'


export const getGuideByUrl = (url: string): ComponentGuide | null => {
  const parts = url
    .toLowerCase()
    .split("/")
    .slice(-2);

  const category = parts[0];
  const component = parts[1].replace(".glb" , '');

  return components[category][component].guide ?? null;
}
