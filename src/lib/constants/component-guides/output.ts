
export const outputComponentGuide = {

  led: {
    title: 'LED Guide',
    icon: 'Lightbulb',
    sections: [
      { title: 'What is an LED?', type: 'paragraph', icon: 'Info', content: 'An LED (Light Emitting Diode) emits light when current flows through it in the forward direction. Like all diodes, it only allows current in one direction - polarity matters.' },
      { title: 'Polarity Identification', type: 'list', icon: 'ArrowRight', content: ['Anode (+): Longer lead - connect toward positive voltage', 'Cathode (-): Shorter lead - connect toward ground', 'Flat edge on the LED base also marks the cathode', 'Forward voltage: ~2V (red/yellow) to ~3.5V (blue/white)'] },
      { title: 'Current Limiting Resistor', type: 'list', icon: 'Hash', content: ['Always use a resistor in series with an LED!', 'Formula: R = (VCC - VLED) / ILED', 'Typical LED current: 10-20mA', 'Example (5V, red LED): R = (5V - 2V) / 0.02A = 150 ohms'] },
    ],
    proTips: ['330 ohm is a safe all-purpose resistor for LEDs on 5V', 'Use PWM to dim LEDs rather than lowering current (better color)', 'Check forward voltage from datasheet for precise resistor calculation'],
    commonMistakes: ['Connecting without a current-limiting resistor (burns out LED instantly)', 'Reversing polarity (LED simply does not light - no damage unless forced)', 'Using LED directly on 5V GPIO without a resistor'],
  },

  rgbled: {
    title: 'RGB LED Guide',
    icon: 'Lightbulb',
    sections: [
      { title: 'What is an RGB LED?', type: 'paragraph', icon: 'Info', content: 'An RGB LED contains three LEDs (Red, Green, Blue) in one package. By mixing their brightness via PWM, over 16 million colors are possible.' },
      { title: 'Common Cathode vs Common Anode', type: 'list', icon: 'Layers', content: ['Common Cathode: longest pin to GND, others to GPIO through resistors', 'Common Anode: longest pin to VCC, others to GPIO through resistors (active LOW)', 'Check the datasheet for your specific type', 'Use analogWrite() or PWM for color mixing'] },
      { title: 'Current Limiting', type: 'list', icon: 'Hash', content: ['Each color channel needs its own current-limiting resistor', 'Red: ~150 ohm on 5V (lower forward voltage)', 'Green/Blue: ~100 ohm on 5V (higher forward voltage)', 'Values vary - calculate for your specific LED'] },
    ],
    proTips: ['Use Adafruit_NeoPixel library if you have addressable RGB LEDs', 'Map RGB values 0-255 to PWM for intuitive color control', 'Red needs a slightly higher resistor value than green and blue'],
    commonMistakes: ['Using the same resistor for all channels (colors will be unbalanced)', 'Confusing common cathode and common anode (inverted logic for anode)', 'Forgetting that each channel needs its own resistor'],
  },

  lightbulb: {
    title: 'Light Bulb Guide',
    icon: 'Lightbulb',
    sections: [
      { title: 'What is a Miniature Light Bulb?', type: 'paragraph', icon: 'Info', content: 'A miniature incandescent bulb passes current through a thin tungsten filament, heating it until it glows. It requires much more current than an LED and generates significant heat.' },
      { title: 'Key Specifications', type: 'list', icon: 'Hash', content: ['Voltage rating: must match your supply (3V, 5V, 6V, 12V etc.)', 'Current: typically 50mA to 300mA (much more than LEDs)', 'Cannot be driven directly from microcontroller GPIO pins', 'Use a transistor or MOSFET as a switch'] },
      { title: 'Driving a Bulb from a Microcontroller', type: 'list', icon: 'Cpu', content: ['GPIO -> Base resistor (1k) -> NPN transistor base', 'Transistor collector -> bulb -> VCC', 'Transistor emitter -> GND', 'Add flyback diode across bulb for protection'] },
    ],
    proTips: ['Always verify the bulb voltage rating matches your supply', 'Use PWM through a transistor for dimming control', 'Add a fuse in series for high-current bulb circuits'],
    commonMistakes: ['Driving bulb directly from GPIO pin (too much current - damages MCU)', 'Mismatching bulb voltage to supply voltage', 'Forgetting that bulbs generate significant heat'],
  },

  neopixel: {
    title: 'NeoPixel Guide',
    icon: 'Lightbulb',
    sections: [
      { title: 'What is a NeoPixel?', type: 'paragraph', icon: 'Info', content: 'NeoPixels (WS2812B) are individually addressable RGB LEDs with a built-in control chip. A single data wire daisy-chains through hundreds of LEDs, each receiving its own 24-bit color value.' },
      { title: 'Pin Connections', type: 'list', icon: 'Grid', content: ['VCC: 5V (can draw up to 60mA per LED at full white)', 'GND: Ground - must share ground with microcontroller', 'DIN: Data input - connect to GPIO via 300-500 ohm resistor', 'DOUT: Data output - connects to next NeoPixel DIN in chain'] },
      { title: 'Power Planning', type: 'list', icon: 'Zap', content: ['60mA per LED at full white brightness', '10 LEDs = 600mA, 30 LEDs = 1.8A, 60 LEDs = 3.6A!', 'Use a dedicated 5V power supply for strips longer than 10 LEDs', 'Add 1000uF capacitor across power rails to prevent voltage spikes'] },
    ],
    proTips: ['Use the Adafruit NeoPixel library for reliable control', 'Add a 300-500 ohm resistor on the data line to prevent ringing', 'Cap brightness in software to reduce power consumption', 'Add a 1000uF cap across VCC and GND at the power input'],
    commonMistakes: ['Powering many LEDs from the microcontroller 5V pin (insufficient current)', 'Connecting data line without a series resistor', 'Not sharing ground between power supply and microcontroller'],
  },

  piezobuzzer: {
    title: 'Piezo Buzzer Guide',
    icon: 'Volume2',
    sections: [
      { title: 'What is a Piezo Buzzer?', type: 'paragraph', icon: 'Info', content: 'A piezo buzzer uses the piezoelectric effect - applying voltage causes a ceramic disc to flex, creating sound. Active buzzers have a built-in oscillator and buzz at one tone. Passive buzzers need an external PWM signal.' },
      { title: 'Active vs Passive', type: 'list', icon: 'Layers', content: ['Active: Apply 5V = constant tone. Simple but only one frequency.', 'Passive: Requires PWM signal. Frequency of PWM = pitch of tone.', 'Most bare discs are passive. Modules with small PCB are often active.', 'Use tone() function in Arduino for passive buzzers'] },
      { title: 'Pin Connections', type: 'list', icon: 'Grid', content: ['Positive (+): Connect to GPIO pin (active) or PWM pin (passive)', 'Negative (-): Connect to GND', 'Can be driven directly from most microcontroller GPIO pins', 'Optional: add 100 ohm resistor to limit current'] },
    ],
    proTips: ['Use tone() and noTone() in Arduino for passive buzzers', 'Create melodies by varying frequency and duration with tone()', 'Add a transistor for louder volume by driving with more current'],
    commonMistakes: ['Using tone() on an active buzzer (works but ignores frequency)', 'Leaving buzzer connected and tone() running with no noTone() call', 'Confusing active and passive (they look identical)'],
  },

}