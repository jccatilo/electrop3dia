
export const general = {
  resistor: {
    guide: {
      title: 'Resistor Guide',
      icon: 'Circle',
      sections: [
        { title: 'What is a Resistor?', type: 'paragraph', icon: 'Info', content: 'A resistor is a passive two-terminal component that limits the flow of electric current. It is one of the most fundamental components in electronics.' },
        { title: 'Color Code (Black to White)', type: 'list', icon: 'Palette', content: ['Black: 0', 'Brown: 1', 'Red: 2', 'Orange: 3', 'Yellow: 4', 'Green: 5', 'Blue: 6', 'Violet: 7', 'Gray: 8', 'White: 9'] },
        { title: 'Reading a 4-Band Resistor', type: 'list', icon: 'Hash', content: ['Band 1: First significant digit', 'Band 2: Second significant digit', 'Band 3: Multiplier (power of 10)', 'Band 4: Tolerance (Gold = ±5%, Silver = ±10%)'] },
        { title: 'Common Uses', type: 'list', icon: 'Cpu', content: ['Limiting current through LEDs', 'Voltage dividers', 'Pull-up and pull-down resistors', 'Setting gain in amplifier circuits'] },
      ],
      proTips: [
        'Read from the end with bands closer together',
        'Use a multimeter to verify before placing in circuit',
        'Choose power rating at least 2x the expected dissipation',
      ],
      commonMistakes: [
        'Reading bands in the wrong direction',
        'Using too low a power rating',
        'Confusing the tolerance band with the multiplier band',
      ],
    },
    partInfo: [
      { partName: 'Resistor Body', description: 'The main ceramic or carbon body that contains the resistive element. It limits the flow of electric current in a circuit.', category: 'Main Body' },
      { partName: 'Band 1', description: 'First color band. Represents the first significant digit of the resistance value.', category: 'Markings' },
      { partName: 'Band 2', description: 'Second color band. Represents the second significant digit of the resistance value.', category: 'Markings' },
      { partName: 'Band 3', description: 'Third color band. Represents the multiplier - the power of ten to multiply the first two digits by.', category: 'Markings' },
      { partName: 'Band 4', description: 'Fourth color band. Represents the tolerance - how close the actual resistance is to the stated value (e.g. gold = ±5%).', category: 'Markings' },
      { partName: 'Leads', description: 'Tinned copper wires on both ends that connect the resistor to the circuit via solder or breadboard.', category: 'Terminals' },
    ],
    trivia: [
      { fact: "The resistor was born from a smoking problem - early telegraph operators noticed carbon deposits from sparks had predictable resistance." },
      { fact: "Today, a single phone contains hundreds of resistors, and the global industry produces over 1 trillion resistors every year!" },
      { fact: "Resistor color codes were developed in the 1920s to help soldiers identify values while repairing radios in the field.", year: "1920s" },
      { fact: "The most common failure mode for a resistor is an open circuit, usually caused by overheating or exceeding its power rating." },
    ]
  },

  capacitor: {
    guide: {
      title: 'Capacitor Guide',
      icon: 'Layers',
      sections: [
        { title: 'What is a Capacitor?', type: 'paragraph', icon: 'Info', content: 'A capacitor stores electrical energy in an electric field between two conductive plates separated by a dielectric. It charges and discharges rapidly, making it essential for filtering and timing circuits.' },
        { title: 'Reading Ceramic Capacitor Codes', type: 'list', icon: 'Hash', content: ['3-digit code: first two digits are significant figures', 'Third digit is the multiplier (number of zeros in pF)', 'Example: 104 = 10 x 10^4 pF = 100nF = 0.1uF', 'No code or single value = value in pF'] },
        { title: 'Common Uses', type: 'list', icon: 'Cpu', content: ['Decoupling: place near IC power pins to filter noise', 'Timing circuits with resistors (RC networks)', 'Signal coupling between amplifier stages', 'Power supply filtering'] },
      ],
      proTips: [
        'Place decoupling caps as close to IC power pins as possible',
        'Use voltage rating at least 2x the expected circuit voltage',
        'Non-polarized - can be inserted either way',
      ],
      commonMistakes: [
        'Confusing microfarads (uF) with picofarads (pF)',
        'Using voltage rating too close to actual voltage',
        'Overlooking the need for decoupling in digital circuits',
      ],
    },
    partInfo: [
      { partName: 'Ceramic Body', description: 'The small disc or rectangular ceramic housing. It stores electrical energy by creating an electric field when voltage is applied.', category: 'Main Body' },
      { partName: 'Leads', description: 'Two equal-length metal leads. Non-polarized - can be connected either way in a circuit.', category: 'Terminals' },
    ],
    trivia: [
      { fact: "The very first capacitor, the Leyden Jar (1745), could store enough charge to knock a person off their feet.", year: "1745" },
      { fact: "Benjamin Franklin famously used a Leyden Jar in his lightning experiments." },
      { fact: "Modern capacitors can charge and discharge in mere nanoseconds!" },
      { fact: "The capacitance of the Earth itself is about 710 microfarads - roughly the same as a large electrolytic capacitor!" },
    ]
  },

  polarizedcapacitor: {
    guide: {
      title: 'Polarized Capacitor Guide',
      icon: 'Layers',
      sections: [
        { title: 'What is a Polarized Capacitor?', type: 'paragraph', icon: 'Info', content: 'A polarized (electrolytic) capacitor has a positive and negative terminal. It offers much higher capacitance than ceramic types of the same size, making it ideal for power supply filtering and bulk energy storage.' },
        { title: 'Identifying Polarity', type: 'list', icon: 'ArrowRight', content: ['Longer lead = Positive (+) Anode', 'Shorter lead = Negative (-) Cathode', 'White or black stripe on the body marks the NEGATIVE side', 'Some have a plus (+) symbol near the positive lead'] },
        { title: 'WARNING - Never Reverse Polarity', type: 'warning', icon: 'AlertTriangle', content: 'Connecting a polarized capacitor backwards can cause it to heat up, leak, and in some cases explode violently. Always double-check polarity before powering the circuit.' },
        { title: 'Common Uses', type: 'list', icon: 'Cpu', content: ['Power supply smoothing and bulk filtering', 'Audio coupling between stages', 'Timing circuits requiring high capacitance', 'Motor start capacitors'] },
      ],
      proTips: [
        'Always verify polarity before powering up',
        'Use voltage rating at least 2x your supply voltage',
        'Replace if you notice bulging or leaking electrolyte',
      ],
      commonMistakes: [
        'Connecting backwards (can explode!)',
        'Using in AC circuits without a bridge rectifier',
        'Ignoring the voltage rating',
      ],
    },
    partInfo: [
      { partName: 'Capacitor Body', description: 'The cylindrical aluminum housing containing the electrolyte and rolled foil plates. Stores much more charge than ceramic types of the same size.', category: 'Main Body' },
      { partName: 'Positive Lead (+)', description: 'The longer lead. Must always be connected to the higher potential side. Connecting it backwards can cause the capacitor to fail or explode.', category: 'Terminals' },
      { partName: 'Negative Lead (-)', description: 'The shorter lead, also marked by a stripe on the body. Must be connected to ground or lower potential.', category: 'Terminals' },
      { partName: 'Vent', description: 'The scored markings on the top of the cap. If the capacitor overheats or is connected incorrectly, the vent ruptures to release pressure safely.', category: 'Safety' },
    ],
    trivia: [
      { fact: "Hook a polarized capacitor backwards and it can literally explode! The electrolyte inside turns to gas, building pressure until it pops." },
      { fact: "Engineers call it 'capacitor plague' - it destroyed millions of computers in the early 2000s due to a stolen, flawed electrolyte formula." },
      { fact: "Polarized capacitors can store far more energy than non-polarized ones of the same size, but only work correctly with DC voltage." },
      { fact: "Always check the stripe - the white or black stripe on an electrolytic capacitor marks the negative lead." },
    ]
  },

  diode: {
    guide: {
      title: 'Diode Guide',
      icon: 'ArrowRight',
      sections: [
        { title: 'What is a Diode?', type: 'paragraph', icon: 'Info', content: 'A diode is a semiconductor device that allows current to flow in one direction only. It acts as a one-way valve for electricity, essential for rectification, protection, and signal detection.' },
        { title: 'Identifying Polarity', type: 'list', icon: 'ArrowRight', content: ['Cathode (-): the end with a stripe or band - current exits here', 'Anode (+): the unmarked end - current enters here', 'Forward voltage drop: typically 0.6-0.7V for silicon diodes', 'Use a multimeter in diode mode to confirm orientation'] },
        { title: 'Common Types', type: 'list', icon: 'Layers', content: ['Rectifier (1N4007) - General purpose, power conversion', 'Schottky (1N5819) - Low voltage drop, fast switching', 'Zener - Voltage regulation (see Zener Diode guide)', 'LED - Emits light when forward biased'] },
        { title: 'Common Uses', type: 'list', icon: 'Cpu', content: ['Reverse polarity protection', 'AC to DC rectification', 'Flyback protection for motors and relays', 'Signal clipping and clamping'] },
      ],
      proTips: [
        'Add flyback diodes across relay coils and motor terminals',
        'Check forward voltage drop in power-sensitive circuits',
        'Schottky diodes are preferred for low-voltage circuits',
      ],
      commonMistakes: [
        'Installing backwards (no current flows, circuit fails)',
        'Forgetting flyback diodes on inductive loads',
        'Using rectifier diodes in high-frequency switching circuits',
      ],
    },
    partInfo: [
      { partName: 'Diode Body', description: 'The glass or epoxy housing containing the P-N semiconductor junction that allows current to flow in only one direction.', category: 'Main Body' },
      { partName: 'Cathode Band', description: 'The stripe or ring at one end marking the cathode (-). Current exits here. Always connect this side toward ground.', category: 'Markings' },
      { partName: 'Anode Lead', description: 'The unmarked end where current enters the diode. Connect to the positive side of the circuit.', category: 'Terminals' },
      { partName: 'P-N Junction', description: 'The internal semiconductor junction. The P-type and N-type silicon layers meet here, creating the one-way current gate.', category: 'Active Element' },
    ],
    trivia: [
      { fact: "The first diodes were vacuum tubes the size of your fist! Today's diodes are so small that billions fit on a fingernail." },
      { fact: "A diode is essentially a one-way valve for electricity - it's what allows your phone charger to convert AC wall power into DC battery power." },
      { fact: "Diodes were originally called 'valves' because they act like one-way valves for electricity. The term is still used in the UK.", source: "British Science Museum" },
      { fact: "Schottky diodes can switch on and off in picoseconds, making them essential for 5G and radar applications." },
    ]
  },

  zenerdiode: {
    guide: {
      title: 'Zener Diode Guide',
      icon: 'ArrowRight',
      sections: [
        { title: 'What is a Zener Diode?', type: 'paragraph', icon: 'Info', content: 'A Zener diode is a specially doped diode designed to operate reliably in reverse breakdown. When reverse voltage exceeds the Zener voltage, it conducts at a stable, precise voltage - clamping voltage spikes and regulating power rails.' },
        { title: 'How to Use', type: 'list', icon: 'Cpu', content: ['Connect cathode to positive supply, anode to ground (reverse biased)', 'Always include a series resistor to limit current', 'Zener voltage is maintained across it when conducting', 'Common Zener voltages: 3.3V, 5.1V, 6.2V, 12V'] },
        { title: 'Voltage Regulator Circuit', type: 'list', icon: 'Zap', content: ['Series resistor from supply to Zener cathode', 'Load connected in parallel with the Zener', 'Zener clamps voltage to its rated Vz', 'Works best with a small, stable load current'] },
      ],
      proTips: [
        'Always use a series resistor to prevent excessive current',
        'Choose Zener power rating well above your expected dissipation',
        'For precision, use a dedicated voltage regulator IC instead',
      ],
      commonMistakes: [
        'Forgetting the series resistor (destroys the Zener)',
        'Using Zener forward-biased (acts like a regular diode)',
        'Choosing too low a power rating',
      ],
    },
    partInfo: [
      { partName: 'Zener Body', description: 'Similar in appearance to a standard diode but engineered to operate reliably in reverse breakdown. Used for voltage regulation.', category: 'Main Body' },
      { partName: 'Cathode Band', description: 'The striped end marking the cathode (-). In Zener operation, current flows from cathode to anode in reverse breakdown.', category: 'Markings' },
      { partName: 'Anode Lead', description: 'The unmarked end. In normal diode mode, current enters here. In Zener mode, this side faces ground.', category: 'Terminals' },
      { partName: 'Zener Junction', description: 'The specially doped P-N junction that breaks down at a precise, stable voltage - clamping voltage spikes and regulating power rails.', category: 'Active Element' },
    ],
    trivia: [
      { fact: "Named after physicist Clarence Zener, this diode is designed to break down on purpose! When voltage gets too high, it 'zeners' and clamps it safely." },
      { fact: "Zener diodes are the unsung heroes protecting nearly every sensitive circuit you own." },
      { fact: "The Zener effect was discovered in 1934. Clarence Zener was a physicist who never actually worked with diodes!", year: "1934" },
      { fact: "Zener diodes are used in almost every voltage regulator - they keep output voltage rock solid even as input fluctuates." },
    ]
  },

  inductor: {
    guide: {
      title: 'Inductor Guide',
      icon: 'Circle',
      sections: [
        { title: 'What is an Inductor?', type: 'paragraph', icon: 'Info', content: 'An inductor stores energy in a magnetic field when current flows through its coil. It resists changes in current, making it essential for filtering, energy storage in switching supplies, and tuned circuits.' },
        { title: 'Key Properties', type: 'list', icon: 'Hash', content: ['Inductance measured in Henries (H), millihenries (mH), microhenries (uH)', 'Higher turns count = higher inductance', 'Ferrite or iron core increases inductance significantly', 'Current rating: exceeding it saturates the core and kills inductance'] },
        { title: 'Common Uses', type: 'list', icon: 'Cpu', content: ['Power supply inductors in buck/boost converters', 'EMI filters to block high-frequency noise', 'Tuned LC oscillator circuits', 'Guitar pickups and audio transformers'] },
      ],
      proTips: [
        'Never exceed the rated current - saturation ruins performance',
        'Keep inductors away from each other to prevent magnetic coupling',
        'Use a ferrite bead (a tiny inductor) for simple EMI filtering',
      ],
      commonMistakes: [
        'Exceeding the current rating causing core saturation',
        'Placing inductors too close together (mutual inductance)',
        'Using wrong inductance value in switching converter design',
      ],
    },
    partInfo: [
      { partName: 'Coil Winding', description: 'Tightly wound copper wire that creates a magnetic field when current flows through it. More turns means higher inductance.', category: 'Active Element' },
      { partName: 'Core', description: 'The material inside the coil (air, ferrite, or iron). Ferrite and iron cores increase inductance significantly.', category: 'Main Body' },
      { partName: 'Leads', description: 'The two wire terminals extending from the coil. Non-polarized - can be connected in either direction.', category: 'Terminals' },
    ],
    trivia: [
      { fact: "Inductors hate change! They resist any change in current flow, a property called inductance." },
      { fact: "This same principle is why you sometimes see a spark when you unplug a device." },
      { fact: "The coiled wire in a guitar pickup is an inductor - turning string vibrations into the electric signal of rock and roll!" },
      { fact: "Inductors are used in virtually every power supply to smooth out voltage ripple and filter unwanted frequencies." },
    ]
  },
};

