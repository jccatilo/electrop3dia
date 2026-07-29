import {ComponentCategory} from "@/types/Component";

export const input = {
  pushbutton: {
    guide: {
      title: 'Push Button Guide',
      icon: 'Square',
      sections: [
        {
          title: 'What is a Push Button?',
          type: 'paragraph',
          icon: 'Info',
          content:
            'A push button is a momentary switch that closes or opens a circuit only while pressed. When released, it returns to its default state via an internal spring.',
        },
        {
          title: 'Pin Configuration (4-pin)',
          type: 'list',
          icon: 'Grid',
          content: [
            'Pins 1 & 2 are connected internally (one side)',
            'Pins 3 & 4 are connected internally (other side)',
            'Pressing the button connects both sides',
            'Diagonal pins are NOT connected - use adjacent pairs',
          ],
        },
        {
          title: 'Debouncing',
          type: 'list',
          icon: 'Cpu',
          content: [
            'Mechanical contacts bounce when pressed, creating multiple signals',
            'Hardware debounce: add a 100nF capacitor across the switch',
            'Software debounce: add a small delay after detecting a press',
            'Libraries like Bounce2 handle this automatically in Arduino',
          ],
        },
        {
          title: 'Pull-up and Pull-down Resistors',
          type: 'list',
          icon: 'ArrowRight',
          content: [
            'Pull-up (10k to VCC): pin reads HIGH normally, LOW when pressed',
            'Pull-down (10k to GND): pin reads LOW normally, HIGH when pressed',
            'Most microcontrollers have built-in pull-ups (INPUT_PULLUP)',
          ],
        },
      ],
      proTips: [
        'Use INPUT_PULLUP in Arduino to avoid needing an external resistor',
        'Debounce in software for cleaner button reads',
        'For latching behavior, toggle a boolean variable on each press',
      ],
      commonMistakes: [
        'Floating input pins without pull-up or pull-down resistors',
        'Ignoring contact bounce causing multiple triggers',
        'Using diagonal pins instead of adjacent pairs on 4-pin buttons',
      ],
    },
    partInfo: [
      {
        partName: 'Actuator',
        description:
          'The plastic cap you press. Pushing it down bridges the internal contacts and closes the circuit.',
        category: 'Mechanical',
      },
      {
        partName: 'Pin 1 & Pin 2',
        description:
          'One pair of pins on one side of the button. These are internally connected.',
        category: 'Terminals',
      },
      {
        partName: 'Pin 3 & Pin 4',
        description:
          'The other pair of pins on the opposite side. When the button is pressed, all four pins become connected.',
        category: 'Terminals',
      },
      {
        partName: 'Spring Mechanism',
        description:
          'Internal spring that pushes the actuator back up when released, opening the circuit again.',
        category: 'Mechanical',
      },
    ],
    trivia: [
      { fact: "A push button can register a single press as dozens of signals - a phenomenon called 'contact bounce.'" },
      { fact: "Engineers must write special 'debouncing' code or add tiny capacitors to filter the noise. Without it, one press could trigger multiple unintended actions!" },
      { fact: "The humble push button is one of the most common electronic components in the world, found in everything from elevators to spacecraft." },
      { fact: "A mechanical switch can typically handle 10,000 to 100,000 cycles before wearing out. Solid-state switches can handle billions." },
    ]
  },

  potentiometer: {
    guide: {
      title: 'Potentiometer Guide',
      icon: 'Sliders',
      sections: [
        {
          title: 'What is a Potentiometer?',
          type: 'paragraph',
          icon: 'Info',
          content:
            'A potentiometer is a three-terminal variable resistor with a sliding or rotating contact. Turning the shaft moves the wiper along a resistive track, outputting a voltage anywhere between the two end pins.',
        },
        {
          title: 'Pin Connections',
          type: 'list',
          icon: 'Grid',
          content: [
            'Pin 1 (End): Connect to VCC or GND',
            'Pin 2 (Wiper/Middle): Output voltage - connect to analog input',
            'Pin 3 (End): Connect to the other rail (GND or VCC)',
            'Output voltage = VCC x (wiper position / total track)',
          ],
        },
        {
          title: 'Common Uses',
          type: 'list',
          icon: 'Cpu',
          content: [
            'Volume and brightness control knobs',
            'Analog joystick axis sensing',
            'LCD contrast adjustment',
            'Setting reference voltages',
          ],
        },
      ],
      proTips: [
        'Swap pins 1 and 3 to reverse the direction of the output',
        'Use analogRead() on the wiper pin for 0-1023 range on Arduino',
        'Add a small capacitor from wiper to GND to filter electrical noise',
      ],
      commonMistakes: [
        'Leaving the wiper pin floating (erratic readings)',
        'Forgetting that the wiper is the middle pin',
        'Using potentiometers in high-vibration environments where they can drift',
      ],
    },
    partInfo: [
      {
        partName: 'Resistive Track',
        description:
          'The internal carbon or cermet strip that provides a fixed total resistance from pin 1 to pin 3.',
        category: 'Active Element',
      },
      {
        partName: 'Wiper Pin (Middle)',
        description:
          'The center pin. Connected to the sliding contact that moves along the resistive track, outputting a variable voltage.',
        category: 'Terminals',
      },
      {
        partName: 'End Pin 1',
        description:
          'One end of the resistive track. Typically connected to VCC or ground depending on the circuit.',
        category: 'Terminals',
      },
      {
        partName: 'End Pin 2',
        description:
          'The other end of the resistive track. Typically connected to the opposite rail from Pin 1.',
        category: 'Terminals',
      },
      {
        partName: 'Shaft/Knob',
        description:
          'The rotating part that moves the internal wiper. Turning it changes the output voltage linearly.',
        category: 'Mechanical',
      },
    ],
    trivia: [
      { fact: "The word 'potentiometer' means 'potential measurer' in Greek." },
      { fact: "The volume knob on your guitar amp, the dimmer on your living room lights, and the joystick in old Atari controllers all use potentiometers." },
      { fact: "Potentiometers are over 170 years old and still everywhere!" },
      { fact: "Digital potentiometers now exist - tiny chips that mimic the behavior of mechanical pots but can be controlled by a microcontroller." },
    ]
  },

  slideswitch: {
    guide: {
      title: 'Slide Switch Guide',
      icon: 'ToggleLeft',
      sections: [
        {
          title: 'What is a Slide Switch?',
          type: 'paragraph',
          icon: 'Info',
          content:
            'A slide switch is a latching switch that maintains its position until physically moved. Unlike a push button, it stays ON or OFF until you slide it to the other position.',
        },
        {
          title: 'Pin Configuration (SPDT)',
          type: 'list',
          icon: 'Grid',
          content: [
            'Center pin: Common (COM) - always connected',
            'Left pin: Position A - connected when slider is left',
            'Right pin: Position B - connected when slider is right',
            'Use between COM and either side to detect switch state',
          ],
        },
        {
          title: 'Common Uses',
          type: 'list',
          icon: 'Cpu',
          content: [
            'Power ON/OFF switch for a project',
            'Selecting between two operating modes',
            'Enabling/disabling a feature',
            'Polarity reversal by swapping connections',
          ],
        },
      ],
      proTips: [
        'Use the common + one side for simple ON/OFF control',
        'Use common + both sides to switch between two circuits (SPDT mode)',
        'Add a pull-down resistor on unused pins to prevent floating inputs',
      ],
      commonMistakes: [
        'Connecting to non-common pins and getting no switching action',
        'Leaving floating pins causing erratic microcontroller reads',
        'Using in high-current applications without checking the rating',
      ],
    },
    partInfo: [
      {
        partName: 'Slider Actuator',
        description:
          'The part you physically move to switch between positions. It slides a conductive bridge between contact sets.',
        category: 'Mechanical',
      },
      {
        partName: 'Common Pin',
        description:
          'The center pin that is always connected. It bridges either to the left or right pin depending on slider position.',
        category: 'Terminals',
      },
      {
        partName: 'Position A Pin',
        description:
          'Connected to the common pin when the slider is in one position.',
        category: 'Terminals',
      },
      {
        partName: 'Position B Pin',
        description:
          'Connected to the common pin when the slider is in the other position.',
        category: 'Terminals',
      },
    ],
    trivia: [
      { fact: "Slide switches are used in situations where you need to visually confirm a state - you can physically see if something is ON or OFF at a glance." },
      { fact: "Early computers like the Altair 8800 used rows of toggle/slide switches as the primary way to input programs, one bit at a time!" },
      { fact: "The first electrical switch was patented in 1884 by John Henry Holmes, introducing the 'quick-break' mechanism still used in modern switches.", year: "1884" },
      { fact: "Before USB, slide and DIP switches were how you configured printers, modems, and network cards." },
    ]
  },

  photoresistor: {
    guide: {
      title: 'Photoresistor Guide',
      icon: 'Sun',
      sections: [
        {
          title: 'What is a Photoresistor?',
          type: 'paragraph',
          icon: 'Info',
          content:
            'A photoresistor (LDR - Light Dependent Resistor) changes its resistance based on light intensity. In darkness, resistance is very high (>1MΩ). In bright light, it drops dramatically (as low as 1kΩ).',
        },
        {
          title: 'Using with a Voltage Divider',
          type: 'list',
          icon: 'Cpu',
          content: [
            'Connect LDR from VCC to analog input pin',
            'Connect a 10k resistor from the same pin to GND',
            'Read the voltage: higher = more light (LDR resistance drops)',
            'Swap LDR and resistor positions to invert the response',
          ],
        },
        {
          title: 'Common Uses',
          type: 'list',
          icon: 'Zap',
          content: [
            'Automatic street light detection',
            'Night light activation',
            'Light-following robots',
            'Ambient light measurement',
          ],
        },
      ],
      proTips: [
        'Calibrate by reading values in your expected light range',
        'Use analogRead() for a variable reading, not just a threshold',
        'Shield from direct sunlight if used outdoors to prevent saturation',
      ],
      commonMistakes: [
        'Not using a pull-down or voltage divider resistor',
        'Expecting fast response - LDRs are slow compared to photodiodes',
        'Not accounting for the slow response time in fast-switching applications',
      ],
    },
    partInfo: [
      {
        partName: 'Sensing Surface',
        description:
          'The zigzag cadmium sulfide (CdS) track exposed to light. Resistance drops dramatically as light intensity increases.',
        category: 'Active Element',
      },
      {
        partName: 'Leads',
        description:
          'Two equal leads - non-polarized. Can be connected either way in the circuit.',
        category: 'Terminals',
      },
    ],
    trivia: [
      { fact: "Also called an LDR (Light Dependent Resistor), a photoresistor can change its resistance by over 1,000x between darkness and bright light!" },
      { fact: "They're made from cadmium sulfide, which is why they're slowly being phased out in consumer electronics due to environmental concerns." },
      { fact: "Photoresistors were widely used in early automatic street lights - the light itself tells the lamp to switch off at dawn." },
      { fact: "Response time is relatively slow compared to photodiodes, making them better for ambient light sensing than high-speed optical communication." },
    ]
  },

  photodiode: {
    guide: {
      title: 'Photodiode Guide',
      icon: 'Sun',
      sections: [
        {
          title: 'What is a Photodiode?',
          type: 'paragraph',
          icon: 'Info',
          content:
            'A photodiode generates current proportional to light intensity. It is much faster than a photoresistor and is used in fiber optics, remote controls, and precision light measurement.',
        },
        {
          title: 'Operating Modes',
          type: 'list',
          icon: 'Layers',
          content: [
            'Photoconductive (reverse biased): faster response, used for detection',
            'Photovoltaic (no bias): generates small voltage, used in solar cells',
            'For detection circuits, reverse bias is most common',
          ],
        },
        {
          title: 'Pin Identification',
          type: 'list',
          icon: 'ArrowRight',
          content: [
            'Anode (+): longer lead',
            'Cathode (-): shorter lead',
            'In reverse bias: cathode to positive supply, anode to ground via resistor',
            'Light causes current to flow from cathode to anode',
          ],
        },
      ],
      proTips: [
        'Use in reverse bias mode for faster and more linear response',
        'Pair with a transimpedance amplifier for precise light measurement',
        'Shield from unwanted light sources for best accuracy',
      ],
      commonMistakes: [
        'Confusing with an LED (looks identical!)',
        'Using in forward bias when reverse bias is needed',
        'Not accounting for ambient light interference',
      ],
    },
    partInfo: [
      {
        partName: 'Photodiode Window',
        description:
          'The clear or tinted lens on top that allows light to reach the semiconductor junction inside.',
        category: 'Optics',
      },
      {
        partName: 'Anode (+)',
        description:
          'The longer lead. In photoconductive mode, connect to ground. In photovoltaic mode, this outputs positive voltage.',
        category: 'Terminals',
      },
      {
        partName: 'Cathode (-)',
        description:
          'The shorter lead. In photoconductive mode, connect to reverse bias voltage. Generates current when light hits the junction.',
        category: 'Terminals',
      },
    ],
    trivia: [
      { fact: "Photodiodes are incredibly fast - they can detect millions of light pulses per second." },
      { fact: "That's the technology behind fiber optic internet, where light pulses carry your Netflix stream at nearly the speed of light!" },
      { fact: "Your TV remote's receiver is also a photodiode." },
      { fact: "Photodiodes are used in medical pulse oximeters to measure blood oxygen levels by shining light through your fingertip." },
    ]
  },
  ambientlightsensor: {
    guide: {
      title: 'Ambient Light Sensor Guide',
      icon: 'Sun',
      sections: [
        {
          title: 'What is an Ambient Light Sensor?',
          type: 'paragraph',
          icon: 'Info',
          content:
            'An ambient light sensor measures the intensity of surrounding light. Unlike a basic LDR, it has a spectral response similar to the human eye and communicates digitally via I2C.',
        },
        {
          title: 'I2C Connection',
          type: 'list',
          icon: 'Grid',
          content: [
            'VCC: 3.3V or 5V power supply',
            'GND: Ground',
            'SDA: I2C data line - connect to microcontroller SDA',
            'SCL: I2C clock line - connect to microcontroller SCL',
            'Common I2C address: 0x23 or 0x5C (set by ADDR pin)',
          ],
        },
        {
          title: 'Common Uses',
          type: 'list',
          icon: 'Cpu',
          content: [
            'Automatic screen brightness adjustment',
            'Smart lighting control',
            'Display backlight dimming',
            'Environmental monitoring stations',
          ],
        },
      ],
      proTips: [
        'Use the BH1750 library in Arduino for easy lux readings',
        'Add 4.7k pull-up resistors on SDA and SCL if not on the module',
        'Position away from direct light sources for ambient measurement',
      ],
      commonMistakes: [
        'Using wrong I2C address when multiple devices share the bus',
        'Not adding I2C pull-up resistors when required',
        'Placing sensor directly under a lamp instead of reading ambient light',
      ],
    },
    partInfo: [
      {
        partName: 'Sensor Body',
        description:
          'The IC package containing a photodiode array and signal conditioning circuitry that mimics human eye response.',
        category: 'Main Body',
      },
      {
        partName: 'VCC Pin',
        description:
          'Power supply pin. Connect to 3.3V or 5V depending on the module.',
        category: 'Power',
      },
      {
        partName: 'GND Pin',
        description: 'Ground reference pin. Connect to circuit ground.',
        category: 'Power',
      },
      {
        partName: 'SDA Pin',
        description:
          'I2C data line for communicating light level readings to a microcontroller.',
        category: 'Signal',
      },
      {
        partName: 'SCL Pin',
        description:
          'I2C clock line. Synchronizes data transfer between sensor and microcontroller.',
        category: 'Signal',
      },
    ],
    trivia: [
      { fact: "Your smartphone's screen brightness adjustment uses an ambient light sensor." },
      { fact: "Apple's True Tone display uses sensors to measure the color temperature of ambient light and adjusts white balance so photos look the same as in real life!" },
      { fact: "Ambient light sensors help devices save battery by reducing screen brightness in dark environments automatically." },
      { fact: "Some ambient light sensors can distinguish between different types of artificial light - LED, fluorescent, and incandescent - and adjust accordingly." },
    ]
  },

  flexsensor: {
    guide: {
      title: 'Flex Sensor Guide',
      icon: 'Activity',
      sections: [
        {
          title: 'What is a Flex Sensor?',
          type: 'paragraph',
          icon: 'Info',
          content:
            'A flex sensor changes resistance as it bends. Flat resistance is typically 10-30kΩ, bending increases it. It is used in wearables, gloves, and robotic fingers to detect bend angle.',
        },
        {
          title: 'Circuit Setup',
          type: 'list',
          icon: 'Grid',
          content: [
            'Use in a voltage divider with a 47k fixed resistor',
            'Connect flex sensor from VCC to analog pin',
            'Connect 47k from the same analog pin to GND',
            'Higher voltage reading = more bending',
          ],
        },
        {
          title: 'Common Uses',
          type: 'list',
          icon: 'Cpu',
          content: [
            'Gesture recognition gloves',
            'Robotic finger position sensing',
            'Physical therapy rehabilitation monitoring',
            'Controller input devices',
          ],
        },
      ],
      proTips: [
        'Calibrate flat and fully bent positions for mapping to angles',
        'Avoid bending sharply at the connector end - it damages the sensor',
        'Use a running average to smooth analog readings',
      ],
      commonMistakes: [
        'Bending at the connector area (damages the sensor permanently)',
        'Not calibrating for the specific bend range needed',
        'Using without a series resistor (voltage divider is required)',
      ],
    },
    partInfo: [
      {
        partName: 'Flexible Substrate',
        description:
          'The thin plastic strip coated with a resistive ink. Bending it stretches the ink layer and increases resistance.',
        category: 'Active Element',
      },
      {
        partName: 'Sensing Area',
        description:
          'The active region of the strip. More bending in this area = greater resistance change.',
        category: 'Active Element',
      },
      {
        partName: 'Leads',
        description:
          'Two terminals at one end. Non-polarized. Resistance typically ranges from 10K (flat) to 35K (fully bent).',
        category: 'Terminals',
      },
    ],
    trivia: [
      { fact: "Flex sensors were originally developed for use in the Nintendo Power Glove in 1989!", year: "1989" },
      { fact: "Today they're used in robotic hands, medical rehabilitation gloves, and VFX studio data gloves to capture hand movements for movies." },
      { fact: "A flex sensor works by changing resistance as it bends - the more it curves, the higher the resistance." },
      { fact: "Surgeons are experimenting with flex sensors in minimally invasive tools to sense the curvature of instruments inside the body." },
    ]
  },

  forcesensor: {
    guide: {
      title: 'Force Sensor (FSR) Guide',
      icon: 'Activity',
      sections: [
        {
          title: 'What is a Force Sensor?',
          type: 'paragraph',
          icon: 'Info',
          content:
            'A Force Sensitive Resistor (FSR) decreases in resistance when pressure is applied to its surface. No force = very high resistance (>1MΩ). Maximum force = low resistance (~200Ω).',
        },
        {
          title: 'Circuit Setup',
          type: 'list',
          icon: 'Grid',
          content: [
            'Connect FSR from VCC to analog input pin',
            'Add 10k resistor from analog input to GND (pull-down)',
            'Higher voltage = more force applied',
            'Typical useful range: 100g to 10kg',
          ],
        },
        {
          title: 'Common Uses',
          type: 'list',
          icon: 'Cpu',
          content: [
            'Touch-sensitive buttons and pads',
            'Grip force measurement',
            'Weight sensing in simple scales',
            'Pressure-activated triggers',
          ],
        },
      ],
      proTips: [
        'Distribute force evenly across the sensing area for consistent readings',
        'Calibrate with known weights for accurate force measurement',
        'The response is logarithmic - map it carefully in code',
      ],
      commonMistakes: [
        'Point-loading the sensor (apply force to the full active area)',
        'Ignoring the logarithmic response curve',
        'Expecting precision measurement - FSRs are better for detection than measurement',
      ],
    },
    partInfo: [
      {
        partName: 'Sensing Area',
        description:
          'The circular or square active zone. Applying pressure here reduces the resistance between the two terminals.',
        category: 'Active Element',
      },
      {
        partName: 'FSR Film',
        description:
          'The Force Sensitive Resistor film uses conductive polymer layers that make more contact points under pressure, lowering resistance.',
        category: 'Active Element',
      },
      {
        partName: 'Leads',
        description:
          'Two terminals. Non-polarized. With no force applied resistance is very high (>1MΩ). Under pressure it drops below 1kΩ.',
        category: 'Terminals',
      },
    ],
    trivia: [
      { fact: "The touch screen on older phones used force sensors, not capacitive touch!" },
      { fact: "Today's Apple Watch uses force sensing to distinguish a tap from a firm press." },
      { fact: "Force sensors inside airplane seats can detect if a passenger is seated before arming airbag systems." },
      { fact: "Force sensors are used in robotic surgery systems to give surgeons a sense of 'touch' through the robot's instruments." },
    ]
  },

  irsensor: {
    guide: {
      title: 'IR Sensor Guide',
      icon: 'Crosshair',
      sections: [
        {
          title: 'What is an IR Sensor?',
          type: 'paragraph',
          icon: 'Info',
          content:
            'An IR (Infrared) proximity sensor consists of an IR LED that emits light and a photodiode that detects reflections. It outputs a digital signal when an object is within range.',
        },
        {
          title: 'Pin Connections',
          type: 'list',
          icon: 'Grid',
          content: [
            'VCC: Connect to 3.3V or 5V',
            'GND: Connect to ground',
            'OUT: Digital output - LOW when object detected (active low)',
            'Some modules have a potentiometer to adjust sensitivity',
          ],
        },
        {
          title: 'Common Uses',
          type: 'list',
          icon: 'Cpu',
          content: [
            'Line-following robots (detecting black/white lines)',
            'Obstacle avoidance',
            'Object counting on conveyor belts',
            'Proximity detection for automatic systems',
          ],
        },
      ],
      proTips: [
        'Adjust the onboard potentiometer to set detection distance',
        'IR sensors can be confused by strong ambient IR (sunlight) - shield if needed',
        'Use multiple sensors for line following robots',
      ],
      commonMistakes: [
        'Not adjusting sensitivity for the specific environment',
        'Using in direct sunlight causing false detections',
        'Confusing active low output (LOW = detected) with active high',
      ],
    },
    partInfo: [
      {
        partName: 'IR Emitter (LED)',
        description:
          'Transmits infrared light (typically 38kHz modulated). Objects reflect this light back to the receiver.',
        category: 'Emitter',
      },
      {
        partName: 'IR Receiver (Photodiode)',
        description:
          'Detects the reflected infrared light and changes output state when an object is detected within range.',
        category: 'Receiver',
      },
      {
        partName: 'VCC Pin',
        description: 'Power supply. Connect to 3.3V or 5V.',
        category: 'Power',
      },
      {
        partName: 'GND Pin',
        description: 'Ground reference. Connect to circuit ground.',
        category: 'Power',
      },
      {
        partName: 'OUT Pin',
        description:
          'Digital output. Goes LOW when an object is detected, HIGH when the path is clear (active low logic).',
        category: 'Signal',
      },
    ],
    trivia: [
      { fact: "IR sensors can 'see' heat! Every warm object emits infrared radiation." },
      { fact: "Thermal cameras used in firefighting, night-vision goggles, and the James Webb Space Telescope all use infrared sensing." },
      { fact: "Your TV remote sends IR pulses at 38,000 times per second!" },
      { fact: "IR proximity sensors are used in smartphones to turn off the display when you hold the phone to your ear during a call." },
    ]
  },
  ultrasonicdistancesensor: {
    guide: {
      title: 'Ultrasonic Distance Sensor Guide',
      icon: 'Radio',
      sections: [
        {
          title: 'What is an Ultrasonic Sensor?',
          type: 'paragraph',
          icon: 'Info',
          content:
            'An ultrasonic sensor measures distance by sending a sound pulse at 40kHz and measuring how long the echo takes to return. Distance = (echo time x speed of sound) / 2.',
        },
        {
          title: 'Pin Connections',
          type: 'list',
          icon: 'Grid',
          content: [
            'VCC: 5V power supply',
            'GND: Ground',
            'TRIG: Send a 10 microsecond HIGH pulse to trigger a measurement',
            'ECHO: Goes HIGH for a duration proportional to distance',
          ],
        },
        {
          title: 'Distance Calculation',
          type: 'list',
          icon: 'Hash',
          content: [
            'Speed of sound = 343 m/s at room temperature',
            'Distance (cm) = echo duration (us) / 58',
            'Distance (inches) = echo duration (us) / 148',
            'Useful range: 2cm to 400cm',
          ],
        },
      ],
      proTips: [
        'Add a timeout in code to prevent hanging if no echo returns',
        'Use pulseIn() in Arduino to measure echo duration',
        'Take multiple readings and average them for stability',
      ],
      commonMistakes: [
        'Not triggering before each reading (always send a fresh TRIG pulse)',
        'Measuring soft or angled surfaces that absorb/deflect sound',
        'Forgetting to divide by 2 (sound travels to object AND back)',
      ],
    },
    partInfo: [
      {
        partName: 'Ultrasonic Transmitter',
        description:
          'Emits ultrasonic sound pulses at 40kHz. Looks like a small speaker cone.',
        category: 'Emitter',
      },
      {
        partName: 'Ultrasonic Receiver',
        description:
          'Detects the echo of the transmitted pulse reflecting off objects.',
        category: 'Receiver',
      },
      {
        partName: 'VCC Pin',
        description: 'Power supply. Connect to 5V.',
        category: 'Power',
      },
      {
        partName: 'GND Pin',
        description: 'Ground reference.',
        category: 'Power',
      },
      {
        partName: 'TRIG Pin',
        description:
          'Trigger input. Send a 10 microsecond HIGH pulse to start a measurement.',
        category: 'Signal',
      },
      {
        partName: 'ECHO Pin',
        description:
          'Echo output. Goes HIGH for a duration proportional to the measured distance.',
        category: 'Signal',
      },
    ],
    trivia: [
      { fact: "Ultrasonic sensors work just like bat echolocation! Bats emit sound at 20,000–100,000 Hz and calculate distance from the echo." },
      { fact: "Your car's parking sensors use the exact same principle." },
      { fact: "These sensors can accurately measure distances as precise as 3 millimeters!" },
      { fact: "Ultrasonic sensors are used in industrial automation to detect objects on conveyor belts regardless of color, transparency, or surface texture." },
    ]
  },

  ultrasonicdistancesensor4pins: {
    guide: {
      title: 'Ultrasonic Sensor (4-Pin) Guide',
      icon: 'Radio',
      sections: [
        {
          title: 'What is the 4-Pin Ultrasonic Sensor?',
          type: 'paragraph',
          icon: 'Info',
          content:
            'The HC-SR04 style 4-pin ultrasonic sensor has separate TRIG and ECHO pins for more precise timing control. It is the most widely used ultrasonic sensor in maker projects.',
        },
        {
          title: 'Pin Connections',
          type: 'list',
          icon: 'Grid',
          content: [
            'VCC: 5V (does not work reliably at 3.3V)',
            'GND: Ground',
            'TRIG: Output from microcontroller - send 10us HIGH pulse',
            'ECHO: Input to microcontroller - measure HIGH pulse duration',
          ],
        },
        {
          title: 'Arduino Code Structure',
          type: 'list',
          icon: 'Cpu',
          content: [
            'digitalWrite(TRIG_PIN, LOW) for 2us (clean start)',
            'digitalWrite(TRIG_PIN, HIGH) for 10us',
            'digitalWrite(TRIG_PIN, LOW)',
            'duration = pulseIn(ECHO_PIN, HIGH)',
            'distance_cm = duration / 58.0',
          ],
        },
      ],
      proTips: [
        'Add a voltage divider on ECHO pin if using 3.3V microcontroller (5V signal)',
        'Use the NewPing library for cleaner code and timeout handling',
        'Mount at a slight downward angle for floor distance sensing',
      ],
      commonMistakes: [
        'Connecting ECHO directly to a 3.3V microcontroller (5V signal can damage it)',
        'Too short a trigger pulse (must be at least 10 microseconds)',
        'Objects smaller than 2cm wide may not reflect enough sound',
      ],
    },
    partInfo: [
      {
        partName: 'Ultrasonic Transmitter',
        description:
          'Emits 40kHz ultrasonic pulses to measure distance via echo timing.',
        category: 'Emitter',
      },
      {
        partName: 'Ultrasonic Receiver',
        description:
          'Listens for the reflected echo pulse to calculate distance.',
        category: 'Receiver',
      },
      {
        partName: 'VCC Pin',
        description: 'Power supply. Connect to 5V.',
        category: 'Power',
      },
      {
        partName: 'GND Pin',
        description: 'Ground reference.',
        category: 'Power',
      },
      {
        partName: 'TRIG Pin',
        description:
          'Trigger input. A 10us HIGH pulse initiates one measurement cycle.',
        category: 'Signal',
      },
      {
        partName: 'ECHO Pin',
        description:
          'Echo output. Pulse width in microseconds divided by 58 gives distance in centimeters.',
        category: 'Signal',
      },
    ],
    trivia: [
      { fact: "The 4-pin version separates the trigger and echo pins, giving you more precise timing control." },
      { fact: "The HC-SR04, used in millions of Arduino projects, can measure distances from 2 cm to 4 meters with a beam angle of about 15 degrees - like a tiny sonar cone!" },
      { fact: "Sound travels at about 343 m/s in air. The sensor calculates distance by timing how long the echo takes to return." },
      { fact: "Temperature affects sound speed significantly - professional ultrasonic sensors include a temperature sensor to auto-correct their readings." },
    ]
  },

  pirsensor: {
    guide: {
      title: 'PIR Sensor Guide',
      icon: 'Eye',
      sections: [
        {
          title: 'What is a PIR Sensor?',
          type: 'paragraph',
          icon: 'Info',
          content:
            'A Passive Infrared (PIR) sensor detects motion by measuring changes in infrared radiation from warm bodies moving across its field of view. It does not emit anything - it only listens.',
        },
        {
          title: 'Pin Connections',
          type: 'list',
          icon: 'Grid',
          content: [
            'VCC: 5V to 12V depending on module',
            'GND: Ground',
            'OUT: Goes HIGH when motion is detected',
            'Most modules have delay and sensitivity trim potentiometers',
          ],
        },
        {
          title: 'Adjustments',
          type: 'list',
          icon: 'Sliders',
          content: [
            'Sensitivity pot: adjusts detection range (3m to 7m typical)',
            'Time delay pot: sets how long OUT stays HIGH after detection',
            'Jumper (if present): single trigger vs repeating trigger mode',
            'Warm-up time: 30-60 seconds after power-on before reliable use',
          ],
        },
      ],
      proTips: [
        'Allow 60 seconds warm-up time before testing',
        'Place at 2-3m height for best human detection coverage',
        'Avoid pointing at heat sources (vents, sunny windows) for false-trigger prevention',
      ],
      commonMistakes: [
        'Testing immediately after power-on (sensor needs warm-up time)',
        'Ignoring the Fresnel lens angle - coverage is not 360 degrees',
        'Placing near heat vents causing constant false triggers',
      ],
    },
    partInfo: [
      {
        partName: 'Fresnel Lens',
        description:
          'The white plastic dome on top. It splits the field of view into multiple zones so the sensor detects movement between zones, not just presence.',
        category: 'Optics',
      },
      {
        partName: 'PIR Element',
        description:
          'A dual-element pyroelectric sensor beneath the lens that detects changes in infrared radiation from warm bodies.',
        category: 'Active Element',
      },
      {
        partName: 'VCC Pin',
        description: 'Power supply. Typically 5V to 12V depending on module.',
        category: 'Power',
      },
      {
        partName: 'GND Pin',
        description: 'Ground reference.',
        category: 'Power',
      },
      {
        partName: 'OUT Pin',
        description:
          'Digital output. Goes HIGH when motion is detected. Duration adjustable via onboard trim pots.',
        category: 'Signal',
      },
    ],
    trivia: [
      { fact: "PIR stands for Passive Infrared - 'passive' because it never emits anything, only detects." },
      { fact: "The Fresnel lens on the front splits the field of view into zones; movement is detected when a warm body crosses between zones." },
      { fact: "A PIR sensor only needs milliwatts of power, so security lights can run for years on batteries!" },
      { fact: "PIR sensors are deliberately blind to slow temperature changes - that's why standing perfectly still can make automatic lights turn off!" },
    ]
  },
  soilmoisturesensor: {
    guide: {
      title: 'Soil Moisture Sensor Guide',
      icon: 'Droplets',
      sections: [
        {
          title: 'What is a Soil Moisture Sensor?',
          type: 'paragraph',
          icon: 'Info',
          content:
            'A soil moisture sensor measures water content in soil by detecting changes in electrical resistance or capacitance between its probes. Wetter soil conducts more current.',
        },
        {
          title: 'Pin Connections',
          type: 'list',
          icon: 'Grid',
          content: [
            'VCC: 3.3V or 5V',
            'GND: Ground',
            'AOUT: Analog output - higher voltage = drier soil',
            'DOUT: Digital output - LOW when moisture exceeds threshold',
            'Threshold set by onboard potentiometer',
          ],
        },
        {
          title: 'Common Uses',
          type: 'list',
          icon: 'Cpu',
          content: [
            'Automatic plant watering systems',
            'Garden irrigation control',
            'Greenhouse monitoring',
            'Soil health data logging',
          ],
        },
      ],
      proTips: [
        'Calibrate with dry soil and saturated soil for the full range',
        'Use capacitive sensors for longevity (resistive probes corrode quickly)',
        'Only power the sensor during readings to extend probe life',
      ],
      commonMistakes: [
        'Leaving resistive probes powered continuously (they corrode in days)',
        'Not calibrating for your specific soil type',
        'Reading while the soil is disturbed (wait for settling)',
      ],
    },
    partInfo: [
      {
        partName: 'Probe Electrodes',
        description:
          'The two metal tines inserted into soil. They measure the resistance (resistive type) or capacitance (capacitive type) of the soil, which changes with moisture.',
        category: 'Active Element',
      },
      {
        partName: 'VCC Pin',
        description: 'Power supply. Connect to 3.3V or 5V.',
        category: 'Power',
      },
      {
        partName: 'GND Pin',
        description: 'Ground reference.',
        category: 'Power',
      },
      {
        partName: 'AOUT Pin',
        description:
          'Analog output. Higher voltage = drier soil. Use with an ADC pin on your microcontroller.',
        category: 'Signal',
      },
      {
        partName: 'DOUT Pin',
        description:
          'Digital output. Goes LOW when soil moisture exceeds a threshold set by the onboard potentiometer.',
        category: 'Signal',
      },
    ],
    trivia: [
      { fact: "NASA uses soil moisture sensors across the entire globe via its SMAP satellite to monitor drought conditions and predict crop yields." },
      { fact: "The same capacitive sensing principle helps smart irrigation systems save up to 50% of water used in agriculture!" },
      { fact: "Capacitive soil sensors measure how water changes the dielectric constant of soil - no metal contacts needed, so they last much longer than resistive types." },
      { fact: "Some smart home garden systems use soil moisture sensors to send you a notification when your plants need watering." },
    ]
  },

  tiltsensor: {
    guide: {
      title: 'Tilt Sensor Guide',
      icon: 'Activity',
      sections: [
        {
          title: 'What is a Tilt Sensor?',
          type: 'paragraph',
          icon: 'Info',
          content:
            'A tilt sensor (ball switch) contains a small conductive ball inside a housing. When tilted, the ball rolls to bridge the two contacts. It is a simple, non-electronic way to detect orientation.',
        },
        {
          title: 'How It Works',
          type: 'list',
          icon: 'Activity',
          content: [
            'Upright: ball rests away from contacts - circuit open',
            'Tilted past threshold: ball rolls to touch contacts - circuit closes',
            'Acts as a digital switch (open or closed)',
            'No defined threshold angle - varies by orientation axis',
          ],
        },
        {
          title: 'Connection',
          type: 'list',
          icon: 'Grid',
          content: [
            'Connect one lead to a digital input with pull-up resistor',
            'Connect the other lead to GND',
            'Read LOW when tilted (ball bridges contacts), HIGH when upright',
            'Apply debouncing - the ball rolls and bounces',
          ],
        },
      ],
      proTips: [
        'Apply software debouncing - the rolling ball causes contact bounce',
        'Test all axes to understand detection angle for your orientation',
        'Cheap and reliable alternative to accelerometers for simple tilt detection',
      ],
      commonMistakes: [
        'Not debouncing (rolling ball bounces on contacts)',
        'Expecting a specific tilt angle - varies with manufacturing tolerance',
        'Floating input pin without a pull-up resistor',
      ],
    },
    partInfo: [
      {
        partName: 'Metal Ball',
        description:
          'A small conductive ball inside the housing. When tilted, it rolls to bridge the two contacts and close the circuit.',
        category: 'Active Element',
      },
      {
        partName: 'Housing',
        description:
          'The cylindrical tube that contains the ball and defines the tilt threshold angle.',
        category: 'Main Body',
      },
      {
        partName: 'Lead 1',
        description: 'One of two equal terminals. Non-polarized.',
        category: 'Terminals',
      },
      {
        partName: 'Lead 2',
        description:
          'The other terminal. Circuit closes when the ball rolls to touch both leads simultaneously.',
        category: 'Terminals',
      },
    ],
    trivia: [
      { fact: "Tilt sensors (also called ball switches) are deceptively simple - just a tiny metal ball that rolls to touch two contacts." },
      { fact: "They're hidden inside power tools to automatically shut them off if they tip over, preventing thousands of injuries every year!" },
      { fact: "Early tilt sensors used liquid mercury instead of a metal ball - highly effective but now banned in many countries due to toxicity." },
      { fact: "Modern MEMS accelerometers have largely replaced simple tilt sensors in phones and tablets, but tilt switches remain popular for their simplicity and low cost." },
    ]
  },

  temperaturesensor: {
    guide: {
      title: 'Temperature Sensor Guide',
      icon: 'Thermometer',
      sections: [
        {
          title: 'What is a Temperature Sensor?',
          type: 'paragraph',
          icon: 'Info',
          content:
            'A temperature sensor converts ambient temperature into an electrical signal - either analog voltage, PWM, or a digital protocol like OneWire or I2C.',
        },
        {
          title: 'Common Types',
          type: 'list',
          icon: 'Layers',
          content: [
            'LM35: Analog, 10mV per degree Celsius, simple and accurate',
            'DS18B20: Digital OneWire, ±0.5°C accuracy, multiple sensors on one wire',
            'DHT11/DHT22: Digital, measures both temperature and humidity',
            'NTC Thermistor: Analog, requires voltage divider and calibration',
          ],
        },
        {
          title: 'Pin Connections (LM35 style)',
          type: 'list',
          icon: 'Grid',
          content: [
            'Pin 1 (flat side left): VCC - connect to 3.3V or 5V',
            'Pin 2 (flat side center): OUTPUT - connect to analog input',
            'Pin 3 (flat side right): GND - connect to ground',
            'Read output: Temperature (°C) = analogRead() x (5.0/1023) / 0.01',
          ],
        },
      ],
      proTips: [
        'For DS18B20, add a 4.7k pull-up on the data line',
        'Place sensor away from heat-generating components for accurate ambient readings',
        'Average multiple readings to reduce noise',
      ],
      commonMistakes: [
        'Touching the sensor body while testing (body heat affects readings)',
        'Not adding a pull-up resistor for OneWire sensors',
        'Wrong pinout - always verify with the specific sensor datasheet',
      ],
    },
    partInfo: [
      {
        partName: 'Sensor Body',
        description:
          'The TO-92 or similar package containing the temperature-sensitive semiconductor. Temperature changes alter the silicon\'s electrical properties predictably.',
        category: 'Main Body',
      },
      {
        partName: 'VCC Pin',
        description: 'Power supply. Typically 3.3V or 5V.',
        category: 'Power',
      },
      {
        partName: 'GND Pin',
        description: 'Ground reference.',
        category: 'Power',
      },
      {
        partName: 'Data/Signal Pin',
        description:
          'Outputs temperature data either as analog voltage, PWM, or digital protocol (e.g. OneWire for DS18B20).',
        category: 'Signal',
      },
    ],
    trivia: [
      { fact: "The most accurate temperature sensors use the fact that silicon's electrical properties change in a perfectly predictable way with temperature." },
      { fact: "Modern sensors like the DS18B20 are accurate to ±0.5°C - precise enough to detect the tiny heat your body gives off from 10 cm away!" },
      { fact: "The first electronic thermometer was developed in the 1950s and could take a reading in under a minute - revolutionary compared to glass thermometers!" },
      { fact: "Temperature sensors are used in everything from engine management systems and weather stations to smart ovens and COVID fever screening cameras." },
    ]
  },
  gassensor: {
    guide: {
      title: 'Gas Sensor Guide',
      icon: 'Wind',
      sections: [
        {
          title: 'What is a Gas Sensor?',
          type: 'paragraph',
          icon: 'Info',
          content:
            'MQ-series gas sensors detect specific gases by measuring resistance changes in a heated metal oxide surface. Each variant targets different gases: MQ-2 (LPG/smoke), MQ-7 (CO), MQ-135 (air quality).',
        },
        {
          title: 'Pin Connections',
          type: 'list',
          icon: 'Grid',
          content: [
            'VCC: 5V (heater requires significant current ~150mA)',
            'GND: Ground',
            'AOUT: Analog output - voltage increases with gas concentration',
            'DOUT: Digital output - HIGH when concentration exceeds threshold',
            'Threshold set by onboard potentiometer',
          ],
        },
        {
          title: 'Warm-Up Requirement',
          type: 'warning',
          icon: 'AlertTriangle',
          content:
            'MQ sensors require a 24-48 hour burn-in period when brand new, and a 20-second warm-up every time they are powered on. Readings are unreliable until the heater reaches operating temperature.',
        },
      ],
      proTips: [
        'Allow 20 seconds warm-up before taking readings',
        'New sensors need 24-48 hours of powered operation for accurate readings',
        'Use analog output with known gas concentrations to calibrate',
      ],
      commonMistakes: [
        'Reading immediately after power-on (sensor not yet at temperature)',
        'Using a 3.3V supply (heater requires 5V for correct operation)',
        'Forgetting new sensors need a burn-in period',
      ],
    },
    partInfo: [
      {
        partName: 'Sensing Element',
        description:
          'A heated metal oxide surface (e.g. tin dioxide). Target gases react with it and change its resistance - the core of the detection.',
        category: 'Active Element',
      },
      {
        partName: 'Heater Coil',
        description:
          'An internal resistive coil that heats the sensing element to its operating temperature (typically 100-300°C). Required for gas detection.',
        category: 'Active Element',
      },
      {
        partName: 'VCC Pin',
        description: 'Power supply. Typically 5V.',
        category: 'Power',
      },
      {
        partName: 'GND Pin',
        description: 'Ground reference.',
        category: 'Power',
      },
      {
        partName: 'AOUT Pin',
        description:
          'Analog output. Higher voltage = higher gas concentration. Connect to an ADC pin.',
        category: 'Signal',
      },
      {
        partName: 'DOUT Pin',
        description:
          'Digital output. Goes HIGH when gas concentration exceeds threshold set by onboard potentiometer.',
        category: 'Signal',
      },
    ],
    trivia: [
      { fact: "Gas sensors save lives daily! The MQ series can detect everything from LPG and alcohol to carbon monoxide and ozone." },
      { fact: "Carbon monoxide detectors use an electrochemical gas sensor, and they've become so cheap they're now required by law in most homes and hotels worldwide." },
      { fact: "Some gas sensors can detect concentrations as low as 10 parts per billion - like finding a single drop of water in an Olympic-sized swimming pool." },
      { fact: "Electronic noses (e-noses) combine arrays of gas sensors with AI to identify complex smells - they're used in food quality control and disease diagnosis." },
    ]
  },

  "4x4keypad": {
    guide: {
      title: '4x4 Keypad Guide',
      icon: 'Grid',
      sections: [
        {
          title: 'What is a 4x4 Keypad?',
          type: 'paragraph',
          icon: 'Info',
          content:
            'A 4x4 membrane keypad has 16 buttons in a matrix arrangement. Only 8 wires are needed thanks to row/column scanning - each button sits at the intersection of one row and one column.',
        },
        {
          title: 'Pin Connections',
          type: 'list',
          icon: 'Grid',
          content: [
            'Pins 1-4: Row pins (R1, R2, R3, R4)',
            'Pins 5-8: Column pins (C1, C2, C3, C4)',
            'Connect to 8 digital I/O pins on microcontroller',
            'Use the Keypad library in Arduino to handle scanning automatically',
          ],
        },
        {
          title: 'How Scanning Works',
          type: 'list',
          icon: 'Cpu',
          content: [
            'Microcontroller drives each row HIGH one at a time',
            'Reads which column pin goes HIGH when a key is pressed',
            'Row + column intersection identifies the pressed key',
            'The Keypad library handles all of this automatically',
          ],
        },
      ],
      proTips: [
        'Use the Arduino Keypad library for simple, reliable key detection',
        'Combine with a 16x2 LCD for a simple entry system',
        'Add long-press detection in code for multi-function keys',
      ],
      commonMistakes: [
        'Reversing the row and column order (wrong keys detected)',
        'Not using a library and manually scanning incorrectly',
        'Expecting multiple simultaneous key presses to work (not supported without extra hardware)',
      ],
    },
    partInfo: [
      {
        partName: 'Key Matrix',
        description:
          '16 buttons arranged in a 4x4 grid. Each button sits at the intersection of a row and column wire.',
        category: 'Active Element',
      },
      {
        partName: 'Row Pins (R1-R4)',
        description:
          'Four pins representing the horizontal rows. The microcontroller drives these one at a time during scanning.',
        category: 'Terminals',
      },
      {
        partName: 'Column Pins (C1-C4)',
        description:
          'Four pins representing the vertical columns. Read by the microcontroller to detect which key in an active row is pressed.',
        category: 'Terminals',
      },
      {
        partName: 'Membrane Layer',
        description:
          'The flexible printed circuit underneath the keys that makes contact when pressed.',
        category: 'Structure',
      },
    ],
    trivia: [
      { fact: "A 4x4 keypad has 16 buttons but only needs 8 wires thanks to a clever matrix scanning technique." },
      { fact: "The same technique is used in full-size computer keyboards - your 100+ key keyboard might only use around 18 signal wires!" },
      { fact: "Matrix scanning works by rapidly cycling through rows and columns to detect which intersection is pressed." },
      { fact: "ATMs and door-entry keypads use the same matrix principle, but with hardened metal keys designed to withstand millions of presses." },
    ]
  },

  dipswitch: {
    guide: {
      title: 'DIP Switch Guide',
      icon: 'ToggleLeft',
      sections: [
        {
          title: 'What is a DIP Switch?',
          type: 'paragraph',
          icon: 'Info',
          content:
            'A DIP (Dual In-line Package) switch contains multiple independent SPST switches in one package. Each switch independently connects or isolates its two pins, used for hardware configuration.',
        },
        {
          title: 'How to Read Settings',
          type: 'list',
          icon: 'Hash',
          content: [
            'Each switch is a binary bit (ON=1, OFF=0)',
            'Read left to right or right to left depending on convention',
            'Example: 4-switch, ON-OFF-ON-OFF = 1010 in binary = 10 in decimal',
            'Always check which end is bit 0 in your schematic',
          ],
        },
        {
          title: 'Common Uses',
          type: 'list',
          icon: 'Cpu',
          content: [
            'Setting device I2C/SPI address',
            'Configuring communication baud rate',
            'Enabling/disabling hardware features',
            'Setting unique device IDs in multi-unit systems',
          ],
        },
      ],
      proTips: [
        'Use pull-up or pull-down resistors on all switch pins to prevent floating',
        'Label each switch position clearly on the enclosure',
        'Document the meaning of each switch combination in your project notes',
      ],
      commonMistakes: [
        'Floating switch pins (causes erratic behavior)',
        'Reading bit order incorrectly (MSB vs LSB)',
        'Changing DIP switch settings while powered on in sensitive systems',
      ],
    },
    partInfo: [
      {
        partName: 'Switch Array',
        description:
          'Multiple individual SPST (Single Pole Single Throw) switches in one package. Each can be independently set to ON or OFF.',
        category: 'Active Element',
      },
      {
        partName: 'Actuator Tabs',
        description:
          'The small tabs you slide to toggle each switch. Position toward ON connects the pins; toward OFF opens the circuit.',
        category: 'Mechanical',
      },
      {
        partName: 'Pin Pairs',
        description:
          'Each switch has two pins. When the switch is ON, the two pins are connected. When OFF, they are isolated.',
        category: 'Terminals',
      },
    ],
    trivia: [
      { fact: "DIP stands for 'Dual In-line Package,' matching the standard chip pin spacing." },
      { fact: "Before USB, DIP switches were how you configured printers, modems, and network cards. Each switch position represented a binary bit - you were manually programming hardware with your fingers!" },
      { fact: "DIP switches are still common in industrial equipment and embedded systems where settings need to be set once and never changed remotely." },
      { fact: "Reading a DIP switch setting is essentially reading a binary number - the combination of ON/OFF positions encodes a unique value." },
    ]
  },
} satisfies ComponentCategory;
