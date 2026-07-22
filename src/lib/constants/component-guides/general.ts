
export const generalComponentGuide = {

  resistor: {
    title: 'Resistor Guide',
    icon: 'Circle',
    sections: [
      { title: 'What is a Resistor?', type: 'paragraph', icon: 'Info', content: 'A resistor is a passive two-terminal component that limits the flow of electric current. It is one of the most fundamental components in electronics.' },
      { title: 'Color Code (Black to White)', type: 'list', icon: 'Palette', content: ['Black: 0', 'Brown: 1', 'Red: 2', 'Orange: 3', 'Yellow: 4', 'Green: 5', 'Blue: 6', 'Violet: 7', 'Gray: 8', 'White: 9'] },
      { title: 'Reading a 4-Band Resistor', type: 'list', icon: 'Hash', content: ['Band 1: First significant digit', 'Band 2: Second significant digit', 'Band 3: Multiplier (power of 10)', 'Band 4: Tolerance (Gold = ±5%, Silver = ±10%)'] },
      { title: 'Common Uses', type: 'list', icon: 'Cpu', content: ['Limiting current through LEDs', 'Voltage dividers', 'Pull-up and pull-down resistors', 'Setting gain in amplifier circuits'] },
    ],
    proTips: ['Read from the end with bands closer together', 'Use a multimeter to verify before placing in circuit', 'Choose power rating at least 2x the expected dissipation'],
    commonMistakes: ['Reading bands in the wrong direction', 'Using too low a power rating', 'Confusing the tolerance band with the multiplier band'],
  },

  capacitor: {
    title: 'Capacitor Guide',
    icon: 'Layers',
    sections: [
      { title: 'What is a Capacitor?', type: 'paragraph', icon: 'Info', content: 'A capacitor stores electrical energy in an electric field between two conductive plates separated by a dielectric. It charges and discharges rapidly, making it essential for filtering and timing circuits.' },
      { title: 'Reading Ceramic Capacitor Codes', type: 'list', icon: 'Hash', content: ['3-digit code: first two digits are significant figures', 'Third digit is the multiplier (number of zeros in pF)', 'Example: 104 = 10 x 10^4 pF = 100nF = 0.1uF', 'No code or single value = value in pF'] },
      { title: 'Common Uses', type: 'list', icon: 'Cpu', content: ['Decoupling: place near IC power pins to filter noise', 'Timing circuits with resistors (RC networks)', 'Signal coupling between amplifier stages', 'Power supply filtering'] },
    ],
    proTips: ['Place decoupling caps as close to IC power pins as possible', 'Use voltage rating at least 2x the expected circuit voltage', 'Non-polarized - can be inserted either way'],
    commonMistakes: ['Confusing microfarads (uF) with picofarads (pF)', 'Using voltage rating too close to actual voltage', 'Overlooking the need for decoupling in digital circuits'],
  },

  polarizedcapacitor: {
    title: 'Polarized Capacitor Guide',
    icon: 'Layers',
    sections: [
      { title: 'What is a Polarized Capacitor?', type: 'paragraph', icon: 'Info', content: 'A polarized (electrolytic) capacitor has a positive and negative terminal. It offers much higher capacitance than ceramic types of the same size, making it ideal for power supply filtering and bulk energy storage.' },
      { title: 'Identifying Polarity', type: 'list', icon: 'ArrowRight', content: ['Longer lead = Positive (+) Anode', 'Shorter lead = Negative (-) Cathode', 'White or black stripe on the body marks the NEGATIVE side', 'Some have a plus (+) symbol near the positive lead'] },
      { title: 'WARNING - Never Reverse Polarity', type: 'warning', icon: 'AlertTriangle', content: 'Connecting a polarized capacitor backwards can cause it to heat up, leak, and in some cases explode violently. Always double-check polarity before powering the circuit.' },
      { title: 'Common Uses', type: 'list', icon: 'Cpu', content: ['Power supply smoothing and bulk filtering', 'Audio coupling between stages', 'Timing circuits requiring high capacitance', 'Motor start capacitors'] },
    ],
    proTips: ['Always verify polarity before powering up', 'Use voltage rating at least 2x your supply voltage', 'Replace if you notice bulging or leaking electrolyte'],
    commonMistakes: ['Connecting backwards (can explode!)', 'Using in AC circuits without a bridge rectifier', 'Ignoring the voltage rating'],
  },

  diode: {
    title: 'Diode Guide',
    icon: 'ArrowRight',
    sections: [
      { title: 'What is a Diode?', type: 'paragraph', icon: 'Info', content: 'A diode is a semiconductor device that allows current to flow in one direction only. It acts as a one-way valve for electricity, essential for rectification, protection, and signal detection.' },
      { title: 'Identifying Polarity', type: 'list', icon: 'ArrowRight', content: ['Cathode (-): the end with a stripe or band - current exits here', 'Anode (+): the unmarked end - current enters here', 'Forward voltage drop: typically 0.6-0.7V for silicon diodes', 'Use a multimeter in diode mode to confirm orientation'] },
      { title: 'Common Types', type: 'list', icon: 'Layers', content: ['Rectifier (1N4007) - General purpose, power conversion', 'Schottky (1N5819) - Low voltage drop, fast switching', 'Zener - Voltage regulation (see Zener Diode guide)', 'LED - Emits light when forward biased'] },
      { title: 'Common Uses', type: 'list', icon: 'Cpu', content: ['Reverse polarity protection', 'AC to DC rectification', 'Flyback protection for motors and relays', 'Signal clipping and clamping'] },
    ],
    proTips: ['Add flyback diodes across relay coils and motor terminals', 'Check forward voltage drop in power-sensitive circuits', 'Schottky diodes are preferred for low-voltage circuits'],
    commonMistakes: ['Installing backwards (no current flows, circuit fails)', 'Forgetting flyback diodes on inductive loads', 'Using rectifier diodes in high-frequency switching circuits'],
  },

  zenerdiode: {
    title: 'Zener Diode Guide',
    icon: 'ArrowRight',
    sections: [
      { title: 'What is a Zener Diode?', type: 'paragraph', icon: 'Info', content: 'A Zener diode is a specially doped diode designed to operate reliably in reverse breakdown. When reverse voltage exceeds the Zener voltage, it conducts at a stable, precise voltage - clamping voltage spikes and regulating power rails.' },
      { title: 'How to Use', type: 'list', icon: 'Cpu', content: ['Connect cathode to positive supply, anode to ground (reverse biased)', 'Always include a series resistor to limit current', 'Zener voltage is maintained across it when conducting', 'Common Zener voltages: 3.3V, 5.1V, 6.2V, 12V'] },
      { title: 'Voltage Regulator Circuit', type: 'list', icon: 'Zap', content: ['Series resistor from supply to Zener cathode', 'Load connected in parallel with the Zener', 'Zener clamps voltage to its rated Vz', 'Works best with a small, stable load current'] },
    ],
    proTips: ['Always use a series resistor to prevent excessive current', 'Choose Zener power rating well above your expected dissipation', 'For precision, use a dedicated voltage regulator IC instead'],
    commonMistakes: ['Forgetting the series resistor (destroys the Zener)', 'Using Zener forward-biased (acts like a regular diode)', 'Choosing too low a power rating'],
  },

  inductor: {
    title: 'Inductor Guide',
    icon: 'Circle',
    sections: [
      { title: 'What is an Inductor?', type: 'paragraph', icon: 'Info', content: 'An inductor stores energy in a magnetic field when current flows through its coil. It resists changes in current, making it essential for filtering, energy storage in switching supplies, and tuned circuits.' },
      { title: 'Key Properties', type: 'list', icon: 'Hash', content: ['Inductance measured in Henries (H), millihenries (mH), microhenries (uH)', 'Higher turns count = higher inductance', 'Ferrite or iron core increases inductance significantly', 'Current rating: exceeding it saturates the core and kills inductance'] },
      { title: 'Common Uses', type: 'list', icon: 'Cpu', content: ['Power supply inductors in buck/boost converters', 'EMI filters to block high-frequency noise', 'Tuned LC oscillator circuits', 'Guitar pickups and audio transformers'] },
    ],
    proTips: ['Never exceed the rated current - saturation ruins performance', 'Keep inductors away from each other to prevent magnetic coupling', 'Use a ferrite bead (a tiny inductor) for simple EMI filtering'],
    commonMistakes: ['Exceeding the current rating causing core saturation', 'Placing inductors too close together (mutual inductance)', 'Using wrong inductance value in switching converter design'],
  }

}