
export const powerControlComponentGuide = {

  npntransistor: {
    title: 'NPN Transistor Guide',
    icon: 'Cpu',
    sections: [
      { title: 'What is an NPN Transistor?', type: 'paragraph', icon: 'Info', content: 'An NPN transistor is a current-controlled switch and amplifier. A small current into the Base allows a much larger current to flow from Collector to Emitter. It is the most common transistor type.' },
      { title: 'Pin Identification (TO-92)', type: 'list', icon: 'Grid', content: ['Flat side facing you: left=Emitter, center=Base, right=Collector', 'Always verify with the datasheet for your specific part', 'Common NPN types: 2N2222, BC547, 2N3904', 'Emitter typically goes to GND in switching circuits'] },
      { title: 'Switching Circuit', type: 'list', icon: 'Cpu', content: ['GPIO -> 1k resistor -> Base', 'Collector -> Load -> VCC', 'Emitter -> GND', 'Add flyback diode across inductive loads (motors, relays)'] },
    ],
    proTips: ['Add a 10k pull-down resistor from Base to GND to ensure clean OFF state', 'Use a base resistor to limit base current (1k for most logic switching)', 'For high-current loads, choose a transistor with sufficient hFE and Ic rating'],
    commonMistakes: ['Wrong pinout - always check datasheet (varies by package)', 'No base resistor (forces transistor into heavy saturation, wastes current)', 'Forgetting flyback diode on inductive loads (causes voltage spikes)'],
  },

  pnptransistor: {
    title: 'PNP Transistor Guide',
    icon: 'Cpu',
    sections: [
      { title: 'What is a PNP Transistor?', type: 'paragraph', icon: 'Info', content: 'A PNP transistor is the complement of NPN. Current flows from Emitter to Collector when the Base is pulled LOW relative to the Emitter. Used for high-side switching.' },
      { title: 'Pin Identification', type: 'list', icon: 'Grid', content: ['Flat side facing you: left=Emitter, center=Base, right=Collector', 'Common PNP types: 2N2907, BC557, 2N3906', 'Emitter typically connects to VCC in switching circuits', 'Transistor turns ON when Base is pulled LOW'] },
      { title: 'High-Side Switching Circuit', type: 'list', icon: 'Cpu', content: ['Emitter -> VCC', 'Collector -> Load -> GND', 'Base -> 1k resistor -> GPIO', 'GPIO LOW = transistor ON, GPIO HIGH = transistor OFF (inverted logic)'] },
    ],
    proTips: ['PNP is naturally suited for high-side (positive rail) switching', 'Add pull-up resistor from Base to VCC to ensure clean OFF state', 'Remember logic is inverted: LOW on Base = transistor ON'],
    commonMistakes: ['Forgetting inverted logic (LOW = ON, not HIGH = ON)', 'Connecting Emitter to GND instead of VCC', 'Using NPN circuit pinout for a PNP transistor'],
  },

  nmostransistor: {
    title: 'Small Signal nMOS Transistor Guide',
    icon: 'Cpu',
    sections: [
      { title: 'What is a Small Signal nMOS?', type: 'paragraph', icon: 'Info', content: 'A small signal nMOS (n-channel MOSFET) is a voltage-controlled switch that draws virtually zero gate current. It turns on when Gate voltage exceeds the threshold voltage (typically 1-3V).' },
      { title: 'Pin Identification', type: 'list', icon: 'Grid', content: ['Gate (G): Voltage control input - draws no current', 'Drain (D): Current flows in through drain', 'Source (S): Current flows out to GND', 'Check datasheet for your specific package pinout'] },
      { title: 'Switching Circuit', type: 'list', icon: 'Cpu', content: ['GPIO -> Gate (no resistor needed, but 100 ohm helps stability)', 'Drain -> Load -> VCC', 'Source -> GND', 'Add 10k pull-down from Gate to GND to ensure OFF when GPIO floating'] },
    ],
    proTips: ['Always add 10k pull-down on Gate to prevent floating gate (random switching)', 'Gate needs no current - but a series resistor prevents ringing', 'For logic-level control use a logic-level MOSFET (Vgs(th) < 3.3V)'],
    commonMistakes: ['Floating gate causing random on/off switching', 'Using a MOSFET with too high Vgs(th) for 3.3V logic', 'Confusing Drain and Source (source is always lower potential for nMOS)'],
  },

  pmostransistor: {
    title: 'Small Signal pMOS Transistor Guide',
    icon: 'Cpu',
    sections: [
      { title: 'What is a Small Signal pMOS?', type: 'paragraph', icon: 'Info', content: 'A small signal p-channel MOSFET turns on when the Gate voltage is pulled LOW relative to the Source. It naturally suits high-side switching - controlling the positive supply rail.' },
      { title: 'Pin Identification', type: 'list', icon: 'Grid', content: ['Gate (G): Voltage control - pull LOW to turn ON', 'Drain (D): Current flows out toward load', 'Source (S): Connect to positive supply VCC', 'Always check datasheet for your specific package'] },
      { title: 'High-Side Switching Circuit', type: 'list', icon: 'Cpu', content: ['Source -> VCC', 'Gate -> 10k pull-up to VCC (off state) and GPIO through 1k resistor', 'Drain -> Load -> GND', 'GPIO LOW = FET ON, GPIO HIGH = FET OFF (inverted logic)'] },
    ],
    proTips: ['Add 10k pull-up from Gate to VCC to ensure OFF when GPIO is floating', 'For 5V supply with 3.3V logic, verify the gate swing is sufficient to fully turn on', 'pMOS is preferred for high-side battery power switching'],
    commonMistakes: ['Connecting Source to GND (pMOS Source must be at higher potential)', 'Forgetting inverted logic: LOW = ON', 'Not pulling Gate to VCC for OFF state'],
  },

  nmosmosfet: {
    title: 'nMOS Power MOSFET Guide',
    icon: 'Cpu',
    sections: [
      { title: 'What is a Power nMOS MOSFET?', type: 'paragraph', icon: 'Info', content: 'A power n-channel MOSFET can switch very high currents (tens to hundreds of amps) with just a 5V gate signal. It is the primary switching element in motor controllers, switching power supplies, and battery management systems.' },
      { title: 'Key Specifications', type: 'list', icon: 'Hash', content: ['Vds(max): Maximum drain-source voltage', 'Id(max): Maximum continuous drain current', 'Rds(on): On-resistance - lower means less heat at high current', 'Vgs(th): Gate threshold voltage - must be below your logic level'] },
      { title: 'Pin Connections', type: 'list', icon: 'Grid', content: ['Gate (G): PWM or logic signal from MCU (via 10-100 ohm resistor)', 'Drain (D): To load, load to VCC', 'Source (S): To GND', 'Add 10k pull-down from Gate to GND'] },
    ],
    proTips: ['Use a gate driver IC for fast switching in high-frequency applications', 'Add a heatsink for continuous high-current operation', 'Choose Rds(on) as low as possible to minimize heat generation'],
    commonMistakes: ['Using a MOSFET with Vgs(th) higher than your logic voltage', 'No heatsink for high-power applications (MOSFET overheats)', 'No gate pull-down resistor causing undefined state when MCU resets'],
  },

  pmosmosfet: {
    title: 'pMOS Power MOSFET Guide',
    icon: 'Cpu',
    sections: [
      { title: 'What is a Power pMOS MOSFET?', type: 'paragraph', icon: 'Info', content: 'A power p-channel MOSFET controls current from a positive supply rail (high-side switching). It turns on when the Gate is pulled below the Source voltage, making it ideal for battery disconnect switches and load switching.' },
      { title: 'Key Specifications', type: 'list', icon: 'Hash', content: ['Vds(max): Maximum drain-source voltage (negative for pMOS)', 'Id(max): Maximum continuous current (negative convention)', 'Rds(on): On-resistance', 'Vgs(th): Negative threshold - Gate must drop below Source by this amount'] },
      { title: 'Pin Connections', type: 'list', icon: 'Grid', content: ['Source (S): Connect to VCC (positive supply)', 'Gate (G): Pull to VCC via 10k (OFF), drive LOW to turn ON', 'Drain (D): Connect to load', 'Load connects from Drain to GND'] },
    ],
    proTips: ['Use an N-channel with a gate driver for simpler high-side switching in most designs', 'pMOS is most useful when you want the gate tied to the same rail as Source', 'Add a gate-source zener diode to protect against Vgs exceeding the rating'],
    commonMistakes: ['Source to GND instead of VCC', 'Logic voltage not low enough to fully enhance the channel', 'Forgetting Vgs rating - exceeding it destroys the gate oxide'],
  },

  tip120: {
    title: 'TIP120 Darlington Transistor Guide',
    icon: 'Cpu',
    sections: [
      { title: 'What is the TIP120?', type: 'paragraph', icon: 'Info', content: 'The TIP120 is a Darlington transistor - two NPN transistors connected internally for a combined gain up to 1000x. A 5mA Arduino signal can control up to 5A of load current.' },
      { title: 'Pin Identification (TO-220)', type: 'list', icon: 'Grid', content: ['Base (B): Left pin - control input from MCU', 'Collector (C): Center pin - connect to load', 'Emitter (E): Right pin - connect to GND', 'Metal tab: electrically connected to Collector - use heatsink for high power'] },
      { title: 'Switching Circuit', type: 'list', icon: 'Cpu', content: ['GPIO -> 1k resistor -> Base', 'Collector -> Load -> VCC (up to 60V, 5A continuous)', 'Emitter -> GND', 'Always add flyback diode across inductive loads'] },
      { title: 'Voltage Drop Warning', type: 'warning', icon: 'AlertTriangle', content: 'The TIP120 has a higher saturation voltage (~1.4V) than a single transistor due to the Darlington pair. Account for this in low-voltage circuits.' },
    ],
    proTips: ['Add heatsink if switching more than 1-2A continuously', 'Use a 10k pull-down from Base to GND for a reliable OFF state', 'For motors, always add a 1N4001 flyback diode across the motor terminals'],
    commonMistakes: ['Forgetting the flyback diode on motors/relays/solenoids', 'Ignoring the 1.4V saturation voltage in low-voltage applications', 'No heatsink for high-current loads (TIP120 gets very hot)'],
  },

}