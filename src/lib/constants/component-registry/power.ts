import {ComponentCategory} from "@/types/Component";

export const power = {
  battery9v: {
    guide: {
      title: '9V Battery Guide',
      icon: 'Battery',
      sections: [
        {
          title: 'About the 9V Battery',
          type: 'paragraph',
          icon: 'Info',
          content:
            'The 9V battery contains six 1.5V cells in series inside a rectangular casing. Its unique snap connector makes reverse connection impossible by design.',
        },
        {
          title: 'Specifications',
          type: 'list',
          icon: 'Hash',
          content: [
            'Nominal voltage: 9V',
            'Typical capacity: 500-600 mAh (alkaline)',
            'Internal resistance increases as battery drains',
            'Not ideal for high-current loads (drops voltage quickly)',
          ],
        },
        {
          title: 'Common Uses',
          type: 'list',
          icon: 'Cpu',
          content: [
            'Powering Arduino and similar microcontrollers',
            'Smoke detectors and alarm systems',
            'Portable audio equipment',
            'Prototyping power supply',
          ],
        },
      ],
      proTips: [
        'Use a voltage regulator (7805 or LM317) to step down to 5V cleanly',
        'Check battery voltage under load - it drops as current increases',
        'Rechargeable 9V batteries (NiMH) have lower internal resistance for better performance',
      ],
      commonMistakes: [
        'Connecting high-current loads directly (battery drains very quickly)',
        'Ignoring voltage drop under load',
        'Not using a regulator - 9V directly damages 5V-only components',
      ],
    },
    partInfo: [
      {
        partName: 'Positive Terminal (Snap)',
        description:
          'The smaller, raised circular snap terminal. Always on top. Connect to the positive rail of your circuit.',
        category: 'Terminals',
      },
      {
        partName: 'Negative Terminal (Snap)',
        description:
          'The larger collar surrounding the positive snap. Connect to ground. The shape makes reverse connection impossible.',
        category: 'Terminals',
      },
      {
        partName: 'Battery Body',
        description:
          'Contains six 1.5V cells stacked in series inside a rectangular casing, totaling 9V.',
        category: 'Structure',
      },
    ],
    trivia: [
      { fact: "That distinctive 9V battery shape with both terminals on top was designed so you can quickly test it by touching it to your tongue - the tingle means it still has charge!" },
      { fact: "It was originally designed for early transistor radios in the 1950s and hasn't changed much since.", year: "1950s" },
      { fact: "A 9V battery is just six 1.5V cells stacked in series inside a rectangular casing." },
      { fact: "The 9V battery's snap connector was specifically designed so it's impossible to connect backwards - a polarity protection feature built into the physical shape." },
    ]
  },

  battery15v: {
    guide: {
      title: '1.5V Battery Guide',
      icon: 'Battery',
      sections: [
        {
          title: 'About the 1.5V Battery',
          type: 'paragraph',
          icon: 'Info',
          content:
            'The 1.5V alkaline cell (AA, AAA, C, D) produces voltage from a zinc-manganese dioxide electrochemical reaction. Stacking cells in series multiplies voltage: 2 cells = 3V, 4 cells = 6V, 6 cells = 9V.',
        },
        {
          title: 'Connecting Cells',
          type: 'list',
          icon: 'Grid',
          content: [
            'Series: positive of one to negative of next - voltages add',
            'Parallel: positives together, negatives together - current capacity adds',
            'Never mix old and new cells in series or parallel',
            'AA batteries offer good balance of capacity and size',
          ],
        },
        {
          title: 'Voltage Over Discharge Curve',
          type: 'list',
          icon: 'Activity',
          content: [
            'Fresh: 1.6V open circuit',
            'Under load: typically 1.2-1.5V',
            'Depleted: below 1.0V under load',
            'Most circuits stop working reliably below 1.0-1.1V per cell',
          ],
        },
      ],
      proTips: [
        '4x AA (6V) through a 5V regulator is a reliable portable supply',
        'Use rechargeable NiMH AA cells (1.2V each) for sustainable projects',
        'Monitor battery voltage in code to warn the user before complete depletion',
      ],
      commonMistakes: [
        'Mixing battery brands or ages in the same holder',
        'Forgetting NiMH cells are 1.2V each (not 1.5V) affecting total voltage',
        'Leaving dead batteries in holders (can leak and corrode contacts)',
      ],
    },
    partInfo: [
      {
        partName: 'Positive Terminal (+)',
        description:
          'The raised nub at the top of the battery. Current flows out from here to power your circuit.',
        category: 'Terminals',
      },
      {
        partName: 'Negative Terminal (-)',
        description:
          'The flat contact at the bottom. Current returns to the battery here.',
        category: 'Terminals',
      },
      {
        partName: 'Battery Body',
        description:
          'The cylindrical outer casing containing the zinc-manganese dioxide electrochemical cell producing 1.5V.',
        category: 'Structure',
      },
    ],
    trivia: [
      { fact: "AA batteries are the world's most sold battery size." },
      { fact: "The 1.5V output is no coincidence - it's the natural electrochemical potential of a zinc-manganese dioxide reaction." },
      { fact: "Stacking cells multiplies voltage, which is why a 9V battery is just six 1.5V cells inside!" },
      { fact: "The first true battery was invented by Alessandro Volta in 1800 - Napoleon Bonaparte was so impressed he made Volta a count.", year: "1800" },
    ]
  },

  coincell: {
    guide: {
      title: 'Coin Cell Battery Guide',
      icon: 'Battery',
      sections: [
        {
          title: 'About Coin Cell Batteries',
          type: 'paragraph',
          icon: 'Info',
          content:
            'Coin cell batteries (most commonly CR2032) are compact lithium primary cells providing 3V. They are designed for ultra-low power applications where small size matters more than current capacity.',
        },
        {
          title: 'Specifications (CR2032)',
          type: 'list',
          icon: 'Hash',
          content: [
            'Voltage: 3V nominal',
            'Capacity: ~220 mAh',
            'Maximum continuous current: ~1-2mA (brief pulses up to 15mA)',
            'Chemistry: Lithium manganese dioxide',
          ],
        },
        {
          title: 'Common Uses',
          type: 'list',
          icon: 'Cpu',
          content: [
            'Real-time clock (RTC) backup power',
            'Key fobs and remote controls',
            'BIOS/CMOS memory retention on computers',
            'Low-power sensors and wearables',
          ],
        },
      ],
      proTips: [
        'Not suitable for high-current loads - use only for low-power circuits',
        'Voltage remains stable until very near end of life, then drops quickly',
        'Check polarity: positive face (flat top) and negative rim (bottom edge)',
      ],
      commonMistakes: [
        'Attempting to draw more than a few mA (voltage collapses)',
        'Shorting the battery (thin case can rupture - a safety hazard)',
        'Confusing CR2032 (3V Li) with SR2032 (1.55V Silver Oxide)',
      ],
    },
    partInfo: [
      {
        partName: 'Positive Face (+)',
        description:
          'The flat top surface of the coin cell. This is the positive terminal. Connect to positive rail.',
        category: 'Terminals',
      },
      {
        partName: 'Negative Rim (-)',
        description:
          'The outer metal rim on the bottom edge. This is the negative terminal. Connect to ground.',
        category: 'Terminals',
      },
      {
        partName: 'Cell Body',
        description:
          'The sealed lithium chemistry cell that provides a stable 3V output over its entire discharge life.',
        category: 'Structure',
      },
    ],
    trivia: [
      { fact: "Coin cell batteries (like the CR2032) are so low-drain that they can power a real-time clock chip for over 10 years!" },
      { fact: "They're what keep your computer's BIOS clock ticking even when it's unplugged." },
      { fact: "Some medical devices and key fobs run on coin cells for over 5 years." },
      { fact: "The 'CR' in CR2032 means it uses lithium chemistry. '20' is the diameter in mm and '32' is the thickness in tenths of a mm." },
    ]
  },

  solarcell: {
    guide: {
      title: 'Solar Cell Guide',
      icon: 'Sun',
      sections: [
        {
          title: 'What is a Solar Cell?',
          type: 'paragraph',
          icon: 'Info',
          content:
            'A solar cell (photovoltaic cell) converts light energy into electrical energy using the photovoltaic effect. Multiple cells in series increase voltage, cells in parallel increase current.',
        },
        {
          title: 'Key Specifications',
          type: 'list',
          icon: 'Hash',
          content: [
            'Open circuit voltage (Voc): maximum voltage with no load',
            'Short circuit current (Isc): maximum current with terminals shorted',
            'Maximum power point: optimal voltage/current balance',
            'Efficiency: ratio of light energy converted to electricity',
          ],
        },
        {
          title: 'Charging Batteries',
          type: 'list',
          icon: 'Zap',
          content: [
            'Add a diode to prevent battery discharging back through panel at night',
            'Use a solar charge controller for lithium or lead-acid batteries',
            'For simple NiMH charging, a resistor and diode can work for small panels',
          ],
        },
      ],
      proTips: [
        'Direct sunlight produces maximum output - shade dramatically reduces output',
        'Add a bypass diode if cells are in series to handle partial shading',
        'A TP4056 module provides easy solar-to-LiPo charging',
      ],
      commonMistakes: [
        'Testing indoors under artificial light (much lower output than rated)',
        'Connecting directly to LiPo without a charge controller (dangerous)',
        'Not accounting for the voltage drop of the blocking diode in calculations',
      ],
    },
    partInfo: [
      {
        partName: 'Photovoltaic Surface',
        description:
          'The blue or black silicon panel that converts photons from sunlight into electron flow (electricity).',
        category: 'Active Element',
      },
      {
        partName: 'Positive Lead (+)',
        description:
          "Output terminal for the generated electricity. Connect to your circuit's positive rail or a battery charging circuit.",
        category: 'Terminals',
      },
      {
        partName: 'Negative Lead (-)',
        description: 'Ground return terminal. Connect to circuit ground.',
        category: 'Terminals',
      },
      {
        partName: 'Anti-reflective Coating',
        description:
          'The fine grid pattern visible on the panel surface. Reduces light reflection so more photons are absorbed.',
        category: 'Structure',
      },
    ],
    trivia: [
      { fact: "The first solar panels were used in 1958 to power the Vanguard 1 satellite - and it's still in orbit today!", year: "1958" },
      { fact: "Modern solar cells convert up to 47% of sunlight into electricity in lab conditions." },
      { fact: "The entire global electricity demand could theoretically be met by solar panels covering just 0.3% of Earth's land area." },
      { fact: "The cost of solar panels has dropped by over 99% since 1977, making them one of the fastest-falling technologies in history.", year: "1977" },
    ]
  },
} satisfies ComponentCategory;