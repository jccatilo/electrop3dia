import { resolveComponent } from './component-registry';
import type { ComponentTrivia } from '@/types/Component';

export const getTriviaForComponent = (url: string): ComponentTrivia[] => {
  return resolveComponent(url)?.trivia ?? [];
};
