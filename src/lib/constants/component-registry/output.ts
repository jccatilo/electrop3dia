
export const output = {
  led: {
    guide: {
      title: 'LED Guide',
      icon: 'Lightbulb',
      sections: [
        {
          title: 'What is an LED?',
          type: 'paragraph',
          icon: 'Info',
          content:
            'An LED (Light Emitting Diode) emits light when current flows through it in the forward direction. Like all diodes, it only allows current in one direction - polarity matters.',
        },
        {
          title: 'Polarity Identification',
          type: 'list',
          icon: 'ArrowRight',
          content: [
            'Anode (+): Longer lead - connect toward positive voltage',
            'Cathode (-): Shorter lead - connect toward ground',
            'Flat edge on the LED base also marks the cathode',
            'Forward voltage: ~2V (red/yellow) to ~3.5V (blue/white)',
          ],
        },
        {
          title: 'Current Limiting Resistor',
          type: 'list',
          icon: 'Hash',
          content: [
            'Always use a resistor in series with an LED!',
            'Formula: R = (VCC - VLED) / ILED',
            'Typical LED current: 10-20mA',
            'Example (5V, red LED): R = (5V - 2V) / 0.02A = 150 ohms',
          ],
        },
      ],
      proTips: [
        '330 ohm is a safe all-purpose resistor for LEDs on 5V',
        'Use PWM to dim LEDs rather than lowering current (better color)',
        'Check forward voltage from datasheet for precise resistor calculation',
      ],
      commonMistakes: [
        'Connecting without a current-limiting resistor (burns out LED instantly)',
        'Reversing polarity (LED simply does not light - no damage unless forced)',
        'Using LED directly on 5V GPIO without a resistor',
      ],
    },
    partInfo: [
      {
        partName: 'LED Lens / Epoxy Body',
        description:
          'The colored or clear dome that focuses and diffuses light. Made of epoxy resin encapsulating the LED chip inside.',
        category: 'Optics',
      },
      {
        partName: 'Anode (+)',
        description:
          'The longer lead. Current flows into the LED here. Connect to positive voltage through a current-limiting resistor.',
        category: 'Terminals',
      },
      {
        partName: 'Cathode (-)',
        description:
          'The shorter lead, also indicated by a flat edge on the base. Current exits here. Connect to ground.',
        category: 'Terminals',
      },
      {
        partName: 'LED Chip',
        description:
          'The tiny semiconductor die inside the epoxy that emits light when current flows through the P-N junction.',
        category: 'Active Element',
      },
    ],
    trivia: [
      { fact: "The first practical LED was invented in 1962 by Nick Holonyak Jr., and it only glowed red. Blue LEDs weren't cracked until 1994.", year: "1962" },
      { fact: "The blue LED breakthrough won the Nobel Prize in Physics in 2014. Without it, we wouldn't have white LEDs or modern energy-efficient lighting!", year: "2014" },
      { fact: "LEDs can last up to 100,000 hours - that's over 11 years of continuous use. Traditional incandescent bulbs last only about 1,000 hours." },
      { fact: "LEDs are so efficient that replacing one incandescent bulb per home in America would save enough energy to power 3 million homes for a year." },
    ]
  },

  ledrgb: {
    guide: {
      title: 'RGB LED Guide',
      icon: 'Lightbulb',
      sections: [
        {
          title: 'What is an RGB LED?',
          type: 'paragraph',
          icon: 'Info',
          content:
            'An RGB LED contains three LEDs (Red, Green, Blue) in one package. By mixing their brightness via PWM, over 16 million colors are possible.',
        },
        {
          title: 'Common Cathode vs Common Anode',
          type: 'list',
          icon: 'Layers',
          content: [
            'Common Cathode: longest pin to GND, others to GPIO through resistors',
            'Common Anode: longest pin to VCC, others to GPIO through resistors (active LOW)',
            'Check the datasheet for your specific type',
            'Use analogWrite() or PWM for color mixing',
          ],
        },
        {
          title: 'Current Limiting',
          type: 'list',
          icon: 'Hash',
          content: [
            'Each color channel needs its own current-limiting resistor',
            'Red: ~150 ohm on 5V (lower forward voltage)',
            'Green/Blue: ~100 ohm on 5V (higher forward voltage)',
            'Values vary - calculate for your specific LED',
          ],
        },
      ],
      proTips: [
        'Use Adafruit_NeoPixel library if you have addressable RGB LEDs',
        'Map RGB values 0-255 to PWM for intuitive color control',
        'Red needs a slightly higher resistor value than green and blue',
      ],
      commonMistakes: [
        'Using the same resistor for all channels (colors will be unbalanced)',
        'Confusing common cathode and common anode (inverted logic for anode)',
        'Forgetting that each channel needs its own resistor',
      ],
    },
    partInfo: [
      {
        partName: 'Red LED Element',
        description:
          'One of three internal LEDs. Controls the red channel. Brightness set by PWM or resistor value.',
        category: 'Active Element',
      },
      {
        partName: 'Green LED Element',
        description:
          'Controls the green channel. Combined with red and blue, enables the full color spectrum.',
        category: 'Active Element',
      },
      {
        partName: 'Blue LED Element',
        description:
          'Controls the blue channel. Blue was the hardest color LED to develop - a Nobel Prize-winning achievement.',
        category: 'Active Element',
      },
      {
        partName: 'Common Pin',
        description:
          'Shared anode (+) or cathode (-) depending on type. Common cathode: connect to GND. Common anode: connect to VCC.',
        category: 'Terminals',
      },
      {
        partName: 'R, G, B Pins',
        description:
          'Individual control pins for each color channel. Connect through current-limiting resistors to your microcontroller.',
        category: 'Terminals',
      },
    ],
    trivia: [
      { fact: "An RGB LED contains three separate LEDs inside one tiny package - red, green, and blue." },
      { fact: "By mixing brightness levels, it can produce over 16 million colors!" },
      { fact: "The same mixing principle is used in every TV, monitor, and phone screen you've ever looked at." },
      { fact: "Human eyes have three types of color receptors - coincidentally matching red, green, and blue. RGB displays exploit this biological fact directly!" },
    ]
  },

  lightbulb: {
    guide: {
      title: 'Light Bulb Guide',
      icon: 'Lightbulb',
      sections: [
        {
          title: 'What is a Miniature Light Bulb?',
          type: 'paragraph',
          icon: 'Info',
          content:
            'A miniature incandescent bulb passes current through a thin tungsten filament, heating it until it glows. It requires much more current than an LED and generates significant heat.',
        },
        {
          title: 'Key Specifications',
          type: 'list',
          icon: 'Hash',
          content: [
            'Voltage rating: must match your supply (3V, 5V, 6V, 12V etc.)',
            'Current: typically 50mA to 300mA (much more than LEDs)',
            'Cannot be driven directly from microcontroller GPIO pins',
            'Use a transistor or MOSFET as a switch',
          ],
        },
        {
          title: 'Driving a Bulb from a Microcontroller',
          type: 'list',
          icon: 'Cpu',
          content: [
            'GPIO -> Base resistor (1k) -> NPN transistor base',
            'Transistor collector -> bulb -> VCC',
            'Transistor emitter -> GND',
            'Add flyback diode across bulb for protection',
          ],
        },
      ],
      proTips: [
        'Always verify the bulb voltage rating matches your supply',
        'Use PWM through a transistor for dimming control',
        'Add a fuse in series for high-current bulb circuits',
      ],
      commonMistakes: [
        'Driving bulb directly from GPIO pin (too much current - damages MCU)',
        'Mismatching bulb voltage to supply voltage',
        'Forgetting that bulbs generate significant heat',
      ],
    },
    partInfo: [
      {
        partName: 'Glass Envelope',
        description:
          'The glass bulb that contains the filament and inert gas. Protects the filament and controls the light output.',
        category: 'Main Body',
      },
      {
        partName: 'Filament',
        description:
          'The thin tungsten wire that glows white-hot when current passes through it. Operates at around 2,500°C.',
        category: 'Active Element',
      },
      {
        partName: 'Base Contacts',
        description:
          'The metal contacts at the bottom that connect to the power supply.',
        category: 'Terminals',
      },
      {
        partName: 'Inert Gas Fill',
        description:
          'Argon or nitrogen gas inside the bulb that slows filament evaporation and extends bulb life.',
        category: 'Structure',
      },
    ],
    trivia: [
      { fact: "Thomas Edison didn't invent the light bulb - he perfected it. Over 20 inventors had working versions before him." },
      { fact: "What Edison truly invented was the entire electrical system to power it: generators, switches, wiring, and meters. He basically invented the modern power grid!" },
      { fact: "Edison's first successful carbon filament bulb burned for 13.5 hours in October 1879.", year: "1879" },
      { fact: "Incandescent bulbs are only about 5% efficient - 95% of the energy is lost as heat, not light." },
    ]
  },

  neopixel: {
    guide: {
      title: 'NeoPixel Guide',
      icon: 'Lightbulb',
      sections: [
        {
          title: 'What is a NeoPixel?',
          type: 'paragraph',
          icon: 'Info',
          content:
            'NeoPixels (WS2812B) are individually addressable RGB LEDs with a built-in control chip. A single data wire daisy-chains through hundreds of LEDs, each receiving its own 24-bit color value.',
        },
        {
          title: 'Pin Connections',
          type: 'list',
          icon: 'Grid',
          content: [
            'VCC: 5V (can draw up to 60mA per LED at full white)',
            'GND: Ground - must share ground with microcontroller',
            'DIN: Data input - connect to GPIO via 300-500 ohm resistor',
            'DOUT: Data output - connects to next NeoPixel DIN in chain',
          ],
        },
        {
          title: 'Power Planning',
          type: 'list',
          icon: 'Zap',
          content: [
            '60mA per LED at full white brightness',
            '10 LEDs = 600mA, 30 LEDs = 1.8A, 60 LEDs = 3.6A!',
            'Use a dedicated 5V power supply for strips longer than 10 LEDs',
            'Add 1000uF capacitor across power rails to prevent voltage spikes',
          ],
        },
      ],
      proTips: [
        'Use the Adafruit NeoPixel library for reliable control',
        'Add a 300-500 ohm resistor on the data line to prevent ringing',
        'Cap brightness in software to reduce power consumption',
        'Add a 1000uF cap across VCC and GND at the power input',
      ],
      commonMistakes: [
        'Powering many LEDs from the microcontroller 5V pin (insufficient current)',
        'Connecting data line without a series resistor',
        'Not sharing ground between power supply and microcontroller',
      ],
    },
    partInfo: [
      {
        partName: 'RGB LED Array',
        description:
          'Three individual LEDs (red, green, blue) combined in one package, capable of producing over 16 million colors.',
        category: 'Active Element',
      },
      {
        partName: 'Integrated Control IC',
        description:
          'A tiny microchip inside each NeoPixel that receives serial color data and drives the three LEDs independently.',
        category: 'Active Element',
      },
      {
        partName: 'VCC Pin',
        description:
          'Power supply. Connect to 5V. Each NeoPixel can draw up to 60mA at full white brightness.',
        category: 'Power',
      },
      {
        partName: 'GND Pin',
        description: 'Ground reference.',
        category: 'Power',
      },
      {
        partName: 'DIN Pin',
        description:
          'Data input. Receives the serial color data from the microcontroller or previous NeoPixel in the chain.',
        category: 'Signal',
      },
      {
        partName: 'DOUT Pin',
        description:
          'Data output. Passes remaining color data to the next NeoPixel in the chain.',
        category: 'Signal',
      },
    ],
    trivia: [
      { fact: "NeoPixel LEDs (WS2812B) are remarkably smart - each tiny LED has its own microchip embedded inside!" },
      { fact: "They communicate using a single data wire and can be chained in the hundreds." },
      { fact: "One Arduino pin can control an entire strip of 1,000 individually addressable, full-color LEDs." },
      { fact: "NeoPixels use a precise timing protocol - the data signal must be accurate to within hundreds of nanoseconds or the colors go haywire!" },
    ]
  },

  piezobuzzer: {
    guide: {
      title: 'Piezo Buzzer Guide',
      icon: 'Volume2',
      sections: [
        {
          title: 'What is a Piezo Buzzer?',
          type: 'paragraph',
          icon: 'Info',
          content:
            'A piezo buzzer uses the piezoelectric effect - applying voltage causes a ceramic disc to flex, creating sound. Active buzzers have a built-in oscillator and buzz at one tone. Passive buzzers need an external PWM signal.',
        },
        {
          title: 'Active vs Passive',
          type: 'list',
          icon: 'Layers',
          content: [
            'Active: Apply 5V = constant tone. Simple but only one frequency.',
            'Passive: Requires PWM signal. Frequency of PWM = pitch of tone.',
            'Most bare discs are passive. Modules with small PCB are often active.',
            'Use tone() function in Arduino for passive buzzers',
          ],
        },
        {
          title: 'Pin Connections',
          type: 'list',
          icon: 'Grid',
          content: [
            'Positive (+): Connect to GPIO pin (active) or PWM pin (passive)',
            'Negative (-): Connect to GND',
            'Can be driven directly from most microcontroller GPIO pins',
            'Optional: add 100 ohm resistor to limit current',
          ],
        },
      ],
      proTips: [
        'Use tone() and noTone() in Arduino for passive buzzers',
        'Create melodies by varying frequency and duration with tone()',
        'Add a transistor for louder volume by driving with more current',
      ],
      commonMistakes: [
        'Using tone() on an active buzzer (works but ignores frequency)',
        'Leaving buzzer connected and tone() running with no noTone() call',
        'Confusing active and passive (they look identical)',
      ],
    },
    partInfo: [
      {
        partName: 'Piezoelectric Disc',
        description:
          'A ceramic disc bonded to a metal plate. When voltage is applied, it flexes. Rapid flexing creates sound waves.',
        category: 'Active Element',
      },
      {
        partName: 'Housing',
        description:
          'The plastic casing that amplifies and directs the sound from the vibrating disc.',
        category: 'Structure',
      },
      {
        partName: 'Positive Pin (+)',
        description:
          'Connect to your signal or PWM output. The frequency of the signal determines the pitch of the sound.',
        category: 'Terminals',
      },
      {
        partName: 'Negative Pin (-)',
        description:
          'Connect to ground to complete the circuit.',
        category: 'Terminals',
      },
    ],
    trivia: [
      { fact: "A piezo buzzer works in reverse too - squeeze it mechanically and it generates electricity! This is the piezoelectric effect." },
      { fact: "This effect is used in gas lighters (that spark when you press the button), sonar systems, and medical ultrasound machines to image babies before they're born." },
      { fact: "The word 'piezo' comes from the Greek word for 'press' or 'squeeze.'" },
      { fact: "Piezoelectric crystals were first studied by Pierre and Jacques Curie in 1880 - yes, Pierre Curie of radioactivity fame!", year: "1880" },
    ]
  },
};