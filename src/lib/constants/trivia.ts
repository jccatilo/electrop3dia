import { components } from './component-registry';
import type { ComponentTrivia } from '@/types/Component';

export const getTriviaForComponent = (url: string): ComponentTrivia[] => {
  const parts = url
    .toLowerCase()
    .split("/")
    .slice(-2);

  const category = parts[0];
  const component = parts[1].replace(".glb" , '');

  return components[category][component].trivia ?? null;
};