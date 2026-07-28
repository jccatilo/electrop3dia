import {ComponentCategory} from "@/types/Component";

export const powercontrol = {
  npntransistor: {
    guide: {
      title: 'NPN Transistor Guide',
      icon: 'Cpu',
      sections: [
        {
          title: 'What is an NPN Transistor?',
          type: 'paragraph',
          icon: 'Info',
          content:
            'An NPN transistor is a current-controlled switch and amplifier. A small current into the Base allows a much larger current to flow from Collector to Emitter. It is the most common transistor type.',
        },
        {
          title: 'Pin Identification (TO-92)',
          type: 'list',
          icon: 'Grid',
          content: [
            'Flat side facing you: left=Emitter, center=Base, right=Collector',
            'Always verify with the datasheet for your specific part',
            'Common NPN types: 2N2222, BC547, 2N3904',
            'Emitter typically goes to GND in switching circuits',
          ],
        },
        {
          title: 'Switching Circuit',
          type: 'list',
          icon: 'Cpu',
          content: [
            'GPIO -> 1k resistor -> Base',
            'Collector -> Load -> VCC',
            'Emitter -> GND',
            'Add flyback diode across inductive loads (motors, relays)',
          ],
        },
      ],
      proTips: [
        'Add a 10k pull-down resistor from Base to GND to ensure clean OFF state',
        'Use a base resistor to limit base current (1k for most logic switching)',
        'For high-current loads, choose a transistor with sufficient hFE and Ic rating',
      ],
      commonMistakes: [
        'Wrong pinout - always check datasheet (varies by package)',
        'No base resistor (forces transistor into heavy saturation, wastes current)',
        'Forgetting flyback diode on inductive loads (causes voltage spikes)',
      ],
    },
    partInfo: [
      {
        partName: 'Transistor Body',
        description:
          'The TO-92 or similar plastic package housing the NPN semiconductor die.',
        category: 'Main Body',
      },
      {
        partName: 'Base (B)',
        description:
          'Control pin. A small current flowing into the base allows a much larger current to flow from collector to emitter.',
        category: 'Terminals',
      },
      {
        partName: 'Collector (C)',
        description:
          'The pin connected to the load and positive supply. Main current flows in through here.',
        category: 'Terminals',
      },
      {
        partName: 'Emitter (E)',
        description:
          'Current exits through the emitter to ground. Usually identified by the flat side of the TO-92 package.',
        category: 'Terminals',
      },
    ],
    trivia: [
      { fact: "The transistor is arguably the greatest invention of the 20th century. Its inventors at Bell Labs won the Nobel Prize in 1956.", year: "1956" },
      { fact: "An NPN transistor acts like a water faucet: a tiny base current controls a much larger collector-emitter current." },
      { fact: "Modern smartphones contain over 15 billion transistors. Placed end-to-end, they would stretch farther than the distance to the moon!" },
      { fact: "The first transistor was invented at Bell Labs in 1947 by John Bardeen, Walter Brattain, and William Shockley.", year: "1947" },
    ]
  },

  pnptransistor: {
    guide: {
      title: 'PNP Transistor Guide',
      icon: 'Cpu',
      sections: [
        {
          title: 'What is a PNP Transistor?',
          type: 'paragraph',
          icon: 'Info',
          content:
            'A PNP transistor is the complement of NPN. Current flows from Emitter to Collector when the Base is pulled LOW relative to the Emitter. Used for high-side switching.',
        },
        {
          title: 'Pin Identification',
          type: 'list',
          icon: 'Grid',
          content: [
            'Flat side facing you: left=Emitter, center=Base, right=Collector',
            'Common PNP types: 2N2907, BC557, 2N3906',
            'Emitter typically connects to VCC in switching circuits',
            'Transistor turns ON when Base is pulled LOW',
          ],
        },
        {
          title: 'High-Side Switching Circuit',
          type: 'list',
          icon: 'Cpu',
          content: [
            'Emitter -> VCC',
            'Collector -> Load -> GND',
            'Base -> 1k resistor -> GPIO',
            'GPIO LOW = transistor ON, GPIO HIGH = transistor OFF (inverted logic)',
          ],
        },
      ],
      proTips: [
        'PNP is naturally suited for high-side (positive rail) switching',
        'Add pull-up resistor from Base to VCC to ensure clean OFF state',
        'Remember logic is inverted: LOW on Base = transistor ON',
      ],
      commonMistakes: [
        'Forgetting inverted logic (LOW = ON, not HIGH = ON)',
        'Connecting Emitter to GND instead of VCC',
        'Using NPN circuit pinout for a PNP transistor',
      ],
    },
    partInfo: [
      {
        partName: 'Transistor Body',
        description:
          'The TO-92 or similar plastic package housing the PNP semiconductor die.',
        category: 'Main Body',
      },
      {
        partName: 'Base (B)',
        description:
          'Control pin. Pulling the base LOW (toward ground) allows current to flow from emitter to collector.',
        category: 'Terminals',
      },
      {
        partName: 'Collector (C)',
        description:
          'Connected toward ground through the load. Current flows out through the collector in PNP operation.',
        category: 'Terminals',
      },
      {
        partName: 'Emitter (E)',
        description:
          'Connected to the positive supply. Current flows in through the emitter.',
        category: 'Terminals',
      },
    ],
    trivia: [
      { fact: "PNP transistors are the 'mirror image' of NPNs - they conduct when the base is pulled LOW instead of HIGH." },
      { fact: "The complementary nature of NPN/PNP pairs is what makes 'push-pull' amplifier circuits possible - the same principle used in every audio amplifier from earbuds to concert speakers!" },
      { fact: "In a PNP transistor, conventional current flows from emitter to collector - the opposite direction of an NPN." },
      { fact: "PNP and NPN transistors are often used together in complementary pairs for maximum efficiency in power amplifier designs." },
    ]
  },

  nmostransistor: {
    guide: {
      title: 'Small Signal nMOS Transistor Guide',
      icon: 'Cpu',
      sections: [
        {
          title: 'What is a Small Signal nMOS?',
          type: 'paragraph',
          icon: 'Info',
          content:
            'A small signal nMOS (n-channel MOSFET) is a voltage-controlled switch that draws virtually zero gate current. It turns on when Gate voltage exceeds the threshold voltage (typically 1-3V).',
        },
        {
          title: 'Pin Identification',
          type: 'list',
          icon: 'Grid',
          content: [
            'Gate (G): Voltage control input - draws no current',
            'Drain (D): Current flows in through drain',
            'Source (S): Current flows out to GND',
            'Check datasheet for your specific package pinout',
          ],
        },
        {
          title: 'Switching Circuit',
          type: 'list',
          icon: 'Cpu',
          content: [
            'GPIO -> Gate (no resistor needed, but 100 ohm helps stability)',
            'Drain -> Load -> VCC',
            'Source -> GND',
            'Add 10k pull-down from Gate to GND to ensure OFF when GPIO floating',
          ],
        },
      ],
      proTips: [
        'Always add 10k pull-down on Gate to prevent floating gate (random switching)',
        'Gate needs no current - but a series resistor prevents ringing',
        'For logic-level control use a logic-level MOSFET (Vgs(th) < 3.3V)',
      ],
      commonMistakes: [
        'Floating gate causing random on/off switching',
        'Using a MOSFET with too high Vgs(th) for 3.3V logic',
        'Confusing Drain and Source (source is always lower potential for nMOS)',
      ],
    },
    partInfo: [
      {
        partName: 'Transistor Body',
        description:
          'Small signal nMOS transistor in SOT-23 or TO-92 package. Voltage-controlled with near-zero gate current draw.',
        category: 'Main Body',
      },
      {
        partName: 'Gate (G)',
        description:
          'Voltage control input. Applying voltage here opens the channel between drain and source. Draws almost no current.',
        category: 'Terminals',
      },
      {
        partName: 'Drain (D)',
        description:
          'Current flows in through the drain when the gate is active.',
        category: 'Terminals',
      },
      {
        partName: 'Source (S)',
        description:
          'Current flows out through the source to ground.',
        category: 'Terminals',
      },
    ],
    trivia: [
      { fact: "MOSFETs are voltage-controlled, unlike BJT transistors which are current-controlled. This means they draw almost zero gate current - making them incredibly efficient." },
      { fact: "A single CPU contains over 100 billion MOSFETs, switching billions of times per second, yet consumes only a few watts of power." },
      { fact: "Small signal nMOS transistors are the workhorses of digital logic - the foundation of every computer, phone, and microcontroller." },
      { fact: "The MOSFET was invented in 1959 by Mohamed Atalla and Dawon Kahng at Bell Labs - it became the most manufactured device in history.", year: "1959" },
    ]
  },

  pmostransistor: {
    guide: {
      title: 'Small Signal pMOS Transistor Guide',
      icon: 'Cpu',
      sections: [
        {
          title: 'What is a Small Signal pMOS?',
          type: 'paragraph',
          icon: 'Info',
          content:
            'A small signal p-channel MOSFET turns on when the Gate voltage is pulled LOW relative to the Source. It naturally suits high-side switching - controlling the positive supply rail.',
        },
        {
          title: 'Pin Identification',
          type: 'list',
          icon: 'Grid',
          content: [
            'Gate (G): Voltage control - pull LOW to turn ON',
            'Drain (D): Current flows out toward load',
            'Source (S): Connect to positive supply VCC',
            'Always check datasheet for your specific package',
          ],
        },
        {
          title: 'High-Side Switching Circuit',
          type: 'list',
          icon: 'Cpu',
          content: [
            'Source -> VCC',
            'Gate -> 10k pull-up to VCC (off state) and GPIO through 1k resistor',
            'Drain -> Load -> GND',
            'GPIO LOW = FET ON, GPIO HIGH = FET OFF (inverted logic)',
          ],
        },
      ],
      proTips: [
        'Add 10k pull-up from Gate to VCC to ensure OFF when GPIO is floating',
        'For 5V supply with 3.3V logic, verify the gate swing is sufficient to fully turn on',
        'pMOS is preferred for high-side battery power switching',
      ],
      commonMistakes: [
        'Connecting Source to GND (pMOS Source must be at higher potential)',
        'Forgetting inverted logic: LOW = ON',
        'Not pulling Gate to VCC for OFF state',
      ],
    },
    partInfo: [
      {
        partName: 'Transistor Body',
        description:
          'Small signal pMOS transistor. Conducts when gate voltage is pulled LOW relative to the source.',
        category: 'Main Body',
      },
      {
        partName: 'Gate (G)',
        description:
          'Control input. Applying LOW voltage relative to source turns the transistor ON. Draws near-zero current.',
        category: 'Terminals',
      },
      {
        partName: 'Drain (D)',
        description:
          'Current flows out through the drain toward the load.',
        category: 'Terminals',
      },
      {
        partName: 'Source (S)',
        description:
          'Connected to the positive supply. Current flows in through the source.',
        category: 'Terminals',
      },
    ],
    trivia: [
      { fact: "pMOS transistors were the first type of MOSFET used in commercial chips in the 1960s, before nMOS was perfected.", year: "1960s" },
      { fact: "Today, combining nMOS and pMOS into CMOS circuits is the foundation of all modern digital electronics - it only draws power when switching, not when idle." },
      { fact: "pMOS transistors conduct when the gate voltage is low - the opposite behavior of nMOS - making them naturally suited for high-side switching." },
      { fact: "CMOS (Complementary MOS) was invented in 1963 by Frank Wanlass and uses both nMOS and pMOS to dramatically reduce power consumption.", year: "1963" },
    ]
  },

  nmosmosfet: {
    guide: {
      title: 'nMOS Power MOSFET Guide',
      icon: 'Cpu',
      sections: [
        {
          title: 'What is a Power nMOS MOSFET?',
          type: 'paragraph',
          icon: 'Info',
          content:
            'A power n-channel MOSFET can switch very high currents (tens to hundreds of amps) with just a 5V gate signal. It is the primary switching element in motor controllers, switching power supplies, and battery management systems.',
        },
        {
          title: 'Key Specifications',
          type: 'list',
          icon: 'Hash',
          content: [
            'Vds(max): Maximum drain-source voltage',
            'Id(max): Maximum continuous drain current',
            'Rds(on): On-resistance - lower means less heat at high current',
            'Vgs(th): Gate threshold voltage - must be below your logic level',
          ],
        },
        {
          title: 'Pin Connections',
          type: 'list',
          icon: 'Grid',
          content: [
            'Gate (G): PWM or logic signal from MCU (via 10-100 ohm resistor)',
            'Drain (D): To load, load to VCC',
            'Source (S): To GND',
            'Add 10k pull-down from Gate to GND',
          ],
        },
      ],
      proTips: [
        'Use a gate driver IC for fast switching in high-frequency applications',
        'Add a heatsink for continuous high-current operation',
        'Choose Rds(on) as low as possible to minimize heat generation',
      ],
      commonMistakes: [
        'Using a MOSFET with Vgs(th) higher than your logic voltage',
        'No heatsink for high-power applications (MOSFET overheats)',
        'No gate pull-down resistor causing undefined state when MCU resets',
      ],
    },
    partInfo: [
      {
        partName: 'MOSFET Body',
        description:
          'Power nMOS transistor capable of switching high currents. Voltage-controlled - gate draws virtually no current.',
        category: 'Main Body',
      },
      {
        partName: 'Gate (G)',
        description:
          'Voltage input that controls channel conductivity. Typically needs 3-10V to fully turn on (Vgs threshold).',
        category: 'Terminals',
      },
      {
        partName: 'Drain (D)',
        description:
          'Connected to the load and positive supply. Can handle hundreds of amps on power MOSFETs.',
        category: 'Terminals',
      },
      {
        partName: 'Source (S)',
        description:
          'Connected to ground. Current exits through the source.',
        category: 'Terminals',
      },
      {
        partName: 'Body Diode',
        description:
          'An intrinsic diode between drain and source inherent to MOSFET construction. Can conduct reverse current in some circuits.',
        category: 'Internal',
      },
    ],
    trivia: [
      { fact: "Power MOSFETs can switch hundreds of amperes with just a 5V signal!" },
      { fact: "The MOSFET in an electric car's motor controller might handle 300 amps and 400 volts." },
      { fact: "Its on-resistance can be as low as 1 milliohm - nearly a dead short - making it among the most efficient switches ever made." },
      { fact: "nMOS power MOSFETs are used in switching power supplies, motor drivers, and battery management systems in laptops and EVs." },
    ]
  },

  pmosmosfet: {
    guide: {
      title: 'pMOS Power MOSFET Guide',
      icon: 'Cpu',
      sections: [
        {
          title: 'What is a Power pMOS MOSFET?',
          type: 'paragraph',
          icon: 'Info',
          content:
            'A power p-channel MOSFET controls current from a positive supply rail (high-side switching). It turns on when the Gate is pulled below the Source voltage, making it ideal for battery disconnect switches and load switching.',
        },
        {
          title: 'Key Specifications',
          type: 'list',
          icon: 'Hash',
          content: [
            'Vds(max): Maximum drain-source voltage (negative for pMOS)',
            'Id(max): Maximum continuous current (negative convention)',
            'Rds(on): On-resistance',
            'Vgs(th): Negative threshold - Gate must drop below Source by this amount',
          ],
        },
        {
          title: 'Pin Connections',
          type: 'list',
          icon: 'Grid',
          content: [
            'Source (S): Connect to VCC (positive supply)',
            'Gate (G): Pull to VCC via 10k (OFF), drive LOW to turn ON',
            'Drain (D): Connect to load',
            'Load connects from Drain to GND',
          ],
        },
      ],
      proTips: [
        'Use an N-channel with a gate driver for simpler high-side switching in most designs',
        'pMOS is most useful when you want the gate tied to the same rail as Source',
        'Add a gate-source zener diode to protect against Vgs exceeding the rating',
      ],
      commonMistakes: [
        'Source to GND instead of VCC',
        'Logic voltage not low enough to fully enhance the channel',
        'Forgetting Vgs rating - exceeding it destroys the gate oxide',
      ],
    },
    partInfo: [
      {
        partName: 'MOSFET Body',
        description:
          'Power pMOS transistor used for high-side switching - controlling the positive rail between supply and load.',
        category: 'Main Body',
      },
      {
        partName: 'Gate (G)',
        description:
          'Control input. Gate voltage must be pulled LOW relative to source to turn on. Logic-level pMOS needs only 3-5V gate drive.',
        category: 'Terminals',
      },
      {
        partName: 'Drain (D)',
        description:
          'Connected to the load output. Current flows from source through channel to drain.',
        category: 'Terminals',
      },
      {
        partName: 'Source (S)',
        description:
          'Connected to the positive supply rail. Current enters through the source.',
        category: 'Terminals',
      },
      {
        partName: 'Body Diode',
        description:
          'Intrinsic reverse diode. Conducts if drain goes above source voltage.',
        category: 'Internal',
      },
    ],
    trivia: [
      { fact: "pMOS power transistors are often used on the 'high side' of circuits - between the power supply and the load." },
      { fact: "Unlike nMOS devices that switch the ground side, pMOS naturally controls the positive rail - making them essential in battery management systems in laptops and electric vehicles." },
      { fact: "pMOS power transistors require a gate voltage below the source to turn on - the lower the gate voltage, the more current flows." },
      { fact: "In automotive electronics, pMOS transistors protect circuits from reverse polarity - a common cause of damage when jump-starting a car incorrectly." },
    ]
  },

  tip120: {
    guide: {
      title: 'TIP120 Darlington Transistor Guide',
      icon: 'Cpu',
      sections: [
        {
          title: 'What is the TIP120?',
          type: 'paragraph',
          icon: 'Info',
          content:
            'The TIP120 is a Darlington transistor - two NPN transistors connected internally for a combined gain up to 1000x. A 5mA Arduino signal can control up to 5A of load current.',
        },
        {
          title: 'Pin Identification (TO-220)',
          type: 'list',
          icon: 'Grid',
          content: [
            'Base (B): Left pin - control input from MCU',
            'Collector (C): Center pin - connect to load',
            'Emitter (E): Right pin - connect to GND',
            'Metal tab: electrically connected to Collector - use heatsink for high power',
          ],
        },
        {
          title: 'Switching Circuit',
          type: 'list',
          icon: 'Cpu',
          content: [
            'GPIO -> 1k resistor -> Base',
            'Collector -> Load -> VCC (up to 60V, 5A continuous)',
            'Emitter -> GND',
            'Always add flyback diode across inductive loads',
          ],
        },
        {
          title: 'Voltage Drop Warning',
          type: 'warning',
          icon: 'AlertTriangle',
          content:
            'The TIP120 has a higher saturation voltage (~1.4V) than a single transistor due to the Darlington pair. Account for this in low-voltage circuits.',
        },
      ],
      proTips: [
        'Add heatsink if switching more than 1-2A continuously',
        'Use a 10k pull-down from Base to GND for a reliable OFF state',
        'For motors, always add a 1N4001 flyback diode across the motor terminals',
      ],
      commonMistakes: [
        'Forgetting the flyback diode on motors/relays/solenoids',
        'Ignoring the 1.4V saturation voltage in low-voltage applications',
        'No heatsink for high-current loads (TIP120 gets very hot)',
      ],
    },
    partInfo: [
      {
        partName: 'TIP120 Body',
        description:
          'TO-220 package containing a Darlington pair - two transistors in series with combined gain up to 1000x.',
        category: 'Main Body',
      },
      {
        partName: 'Base (B)',
        description:
          'Control input. A small signal (as low as 5mA from an Arduino) triggers the Darlington pair to conduct several amperes.',
        category: 'Terminals',
      },
      {
        partName: 'Collector (C)',
        description:
          'Connect to the load and positive supply. The TIP120 can handle up to 5A continuous and 60V.',
        category: 'Terminals',
      },
      {
        partName: 'Emitter (E)',
        description:
          'Connect to ground. Current exits here after passing through the load.',
        category: 'Terminals',
      },
      {
        partName: 'Mounting Tab',
        description:
          'The metal tab is electrically connected to the collector. Can be bolted to a heatsink for high-current applications.',
        category: 'Thermal',
      },
    ],
    trivia: [
      { fact: "The TIP120 is a Darlington transistor - actually TWO transistors in one package!" },
      { fact: "The pair gives it an enormous current gain of up to 1,000x." },
      { fact: "This means a mere 5mA Arduino signal can control over 5 Amps of current - enough to drive motors, solenoids, and relays with ease." },
      { fact: "The Darlington configuration was invented by Sidney Darlington at Bell Labs in 1953. He never patented it personally, and it became one of the most widely used transistor configurations ever.", year: "1953" },
    ]
  },
} satisfies ComponentCategory;