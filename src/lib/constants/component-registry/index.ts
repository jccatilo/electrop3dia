import {breadboard} from './breadboard'
import {display} from './display'
import {general} from './general'
import {input} from './input'
import {microcontroller} from "./microcontroller";
import {motor} from './motor'
import {output} from './output'
import {power} from './power'
import {powercontrol} from './powercontrol'
import type {Component, ComponentRegistry}  from '@/types/Component.ts'


export const components: ComponentRegistry =
  {breadboard, display, general, input, microcontroller, motor, output, power, powercontrol}

// Model URLs look like `/models/<category>/<Name>.glb`, and the registry is keyed
// by the lowercased category folder + file name. Returns null instead of throwing:
// these registries are synced by hand (see CLAUDE.md), so a model can reach the
// sidebar before its content entry exists. That must degrade to the "no content
// yet" states the display components already implement, not blank the page.
export function resolveComponent(url: string): Component | null {
  const [category, file] = url.toLowerCase().split('/').slice(-2);
  if (!category || !file) return null;
  return components[category]?.[file.replace('.glb', '')] ?? null;
}