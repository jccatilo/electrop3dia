
export type GuideSection =
  | {
  type: "paragraph";
  title: string;
  icon: string;
  content: string;
}
  | {
  type: "list";
  title: string;
  icon: string;
  content: string[];
};

export type ComponentGuide = {
  title: string;
  icon: string;
  sections: GuideSection[];
  proTips: string[];
  commonMistakes: string[];
}

export type ComponentPartInfo = {
  partName: string;
  description: string;
  category: string;
}

export type Component = {
  guide: ComponentGuide;
  parts: ComponentPartInfo[];
  trivia: ComponentTrivia[];
}

export type ComponentCategory = Record<string, Component>

export type ComponentRegistry = Record<string, ComponentCategory>

export type ComponentTrivia = {
  fact: string;
  source?: string;
  year?: string;
}
