import {breadboard} from './breadboard'
import {display} from './display'
import {general} from './general'
import {input} from './input'
import {microcontroller} from "./microcontroller";
import {motor} from './motor'
import {output} from './output'
import {power} from './power'
import {powercontrol} from './powercontrol'
import type {ComponentRegistry}  from '@/src/types/Component.ts'


export const components: ComponentRegistry =
  {breadboard, display, general, input, microcontroller, motor, output, power, powercontrol}