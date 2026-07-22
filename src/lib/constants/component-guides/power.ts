
export const powerComponentGuide = {

  battery9v: {
    title: '9V Battery Guide',
    icon: 'Battery',
    sections: [
      { title: 'About the 9V Battery', type: 'paragraph', icon: 'Info', content: 'The 9V battery contains six 1.5V cells in series inside a rectangular casing. Its unique snap connector makes reverse connection impossible by design.' },
      { title: 'Specifications', type: 'list', icon: 'Hash', content: ['Nominal voltage: 9V', 'Typical capacity: 500-600 mAh (alkaline)', 'Internal resistance increases as battery drains', 'Not ideal for high-current loads (drops voltage quickly)'] },
      { title: 'Common Uses', type: 'list', icon: 'Cpu', content: ['Powering Arduino and similar microcontrollers', 'Smoke detectors and alarm systems', 'Portable audio equipment', 'Prototyping power supply'] },
    ],
    proTips: ['Use a voltage regulator (7805 or LM317) to step down to 5V cleanly', 'Check battery voltage under load - it drops as current increases', 'Rechargeable 9V batteries (NiMH) have lower internal resistance for better performance'],
    commonMistakes: ['Connecting high-current loads directly (battery drains very quickly)', 'Ignoring voltage drop under load', 'Not using a regulator - 9V directly damages 5V-only components'],
  },

  battery15v: {
    title: '1.5V Battery Guide',
    icon: 'Battery',
    sections: [
      { title: 'About the 1.5V Battery', type: 'paragraph', icon: 'Info', content: 'The 1.5V alkaline cell (AA, AAA, C, D) produces voltage from a zinc-manganese dioxide electrochemical reaction. Stacking cells in series multiplies voltage: 2 cells = 3V, 4 cells = 6V, 6 cells = 9V.' },
      { title: 'Connecting Cells', type: 'list', icon: 'Grid', content: ['Series: positive of one to negative of next - voltages add', 'Parallel: positives together, negatives together - current capacity adds', 'Never mix old and new cells in series or parallel', 'AA batteries offer good balance of capacity and size'] },
      { title: 'Voltage Over Discharge Curve', type: 'list', icon: 'Activity', content: ['Fresh: 1.6V open circuit', 'Under load: typically 1.2-1.5V', 'Depleted: below 1.0V under load', 'Most circuits stop working reliably below 1.0-1.1V per cell'] },
    ],
    proTips: ['4x AA (6V) through a 5V regulator is a reliable portable supply', 'Use rechargeable NiMH AA cells (1.2V each) for sustainable projects', 'Monitor battery voltage in code to warn the user before complete depletion'],
    commonMistakes: ['Mixing battery brands or ages in the same holder', 'Forgetting NiMH cells are 1.2V each (not 1.5V) affecting total voltage', 'Leaving dead batteries in holders (can leak and corrode contacts)'],
  },

  coincell: {
    title: 'Coin Cell Battery Guide',
    icon: 'Battery',
    sections: [
      { title: 'About Coin Cell Batteries', type: 'paragraph', icon: 'Info', content: 'Coin cell batteries (most commonly CR2032) are compact lithium primary cells providing 3V. They are designed for ultra-low power applications where small size matters more than current capacity.' },
      { title: 'Specifications (CR2032)', type: 'list', icon: 'Hash', content: ['Voltage: 3V nominal', 'Capacity: ~220 mAh', 'Maximum continuous current: ~1-2mA (brief pulses up to 15mA)', 'Chemistry: Lithium manganese dioxide'] },
      { title: 'Common Uses', type: 'list', icon: 'Cpu', content: ['Real-time clock (RTC) backup power', 'Key fobs and remote controls', 'BIOS/CMOS memory retention on computers', 'Low-power sensors and wearables'] },
    ],
    proTips: ['Not suitable for high-current loads - use only for low-power circuits', 'Voltage remains stable until very near end of life, then drops quickly', 'Check polarity: positive face (flat top) and negative rim (bottom edge)'],
    commonMistakes: ['Attempting to draw more than a few mA (voltage collapses)', 'Shorting the battery (thin case can rupture - a safety hazard)', 'Confusing CR2032 (3V Li) with SR2032 (1.55V Silver Oxide)'],
  },

  solarcell: {
    title: 'Solar Cell Guide',
    icon: 'Sun',
    sections: [
      { title: 'What is a Solar Cell?', type: 'paragraph', icon: 'Info', content: 'A solar cell (photovoltaic cell) converts light energy into electrical energy using the photovoltaic effect. Multiple cells in series increase voltage, cells in parallel increase current.' },
      { title: 'Key Specifications', type: 'list', icon: 'Hash', content: ['Open circuit voltage (Voc): maximum voltage with no load', 'Short circuit current (Isc): maximum current with terminals shorted', 'Maximum power point: optimal voltage/current balance', 'Efficiency: ratio of light energy converted to electricity'] },
      { title: 'Charging Batteries', type: 'list', icon: 'Zap', content: ['Add a diode to prevent battery discharging back through panel at night', 'Use a solar charge controller for lithium or lead-acid batteries', 'For simple NiMH charging, a resistor and diode can work for small panels'] },
    ],
    proTips: ['Direct sunlight produces maximum output - shade dramatically reduces output', 'Add a bypass diode if cells are in series to handle partial shading', 'A TP4056 module provides easy solar-to-LiPo charging'],
    commonMistakes: ['Testing indoors under artificial light (much lower output than rated)', 'Connecting directly to LiPo without a charge controller (dangerous)', 'Not accounting for the voltage drop of the blocking diode in calculations'],
  },

}