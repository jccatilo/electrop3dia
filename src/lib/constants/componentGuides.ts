import {resolveComponent} from './component-registry/index';
import type {ComponentGuide} from '@/types/Component'


export const getGuideByUrl = (url: string): ComponentGuide | null => {
  return resolveComponent(url)?.guide ?? null;
}
