import {ComponentCategory} from "@/types/Component";

export const microcontroller = {
  trioeboard: {
    guide: {
      title: 'Trioe Board Guide',
      icon: 'Cpu',
      sections: [
        {
          title: 'What is the TrioeBoard?',
          type: 'paragraph',
          icon: 'Info',
          content:
            'The TrioeBoard is an Arduino-compatible microcontroller board designed for learning electronics and IoT through hands-on projects. It can be programmed using the Arduino IDE and works with millions of existing Arduino libraries.',
        },
        {
          title: 'Getting Started',
          type: 'list',
          icon: 'Zap',
          content: [
            'Install the Arduino IDE from arduino.cc',
            'Connect the board via USB',
            'Select the correct board and port in Tools menu',
            'Write your code and click Upload',
            'Use Serial.begin(9600) and Serial.println() for debugging',
          ],
        },
        {
          title: 'Pin Types',
          type: 'list',
          icon: 'Grid',
          content: [
            'Digital pins: read/write HIGH or LOW signals',
            'Analog pins (A0-A5): read variable voltages 0-5V',
            'PWM pins (~): simulate analog output for motors and LEDs',
            'Power pins: 3.3V, 5V, and GND for powering components',
          ],
        },
      ],
      proTips: [
        'Always connect GND before VCC when wiring components',
        'Use Serial.println() to debug sensor readings',
        'Never draw more than 40mA from a single digital pin',
        'Add a 100-470uF capacitor across power rails to stabilize voltage',
      ],
      commonMistakes: [
        'Wrong board or port selected in Arduino IDE',
        'Forgetting to share GND between board and external components',
        'Drawing too much current from a single pin (use a transistor for motors)',
        'Not installing required libraries before uploading code',
      ],
    },
    partInfo: [
      {
        partName: 'Microcontroller Chip',
        description:
          'The main processor running your code. Arduino-compatible, programmable via USB using the Arduino IDE.',
        category: 'Active Element',
      },
      {
        partName: 'Digital I/O Pins',
        description:
          'Pins that can read or output HIGH/LOW signals. Used for LEDs, buttons, sensors, and more.',
        category: 'Terminals',
      },
      {
        partName: 'Analog Input Pins (A0-A5)',
        description:
          'Read analog voltages from 0-5V. Used for sensors like potentiometers and photoresistors.',
        category: 'Terminals',
      },
      {
        partName: 'PWM Pins',
        description:
          'A subset of digital pins marked with ~. Output simulated analog signals for motor speed and LED dimming.',
        category: 'Terminals',
      },
      {
        partName: 'VCC / 3.3V / 5V Pins',
        description:
          'Power output pins for powering external components and sensors.',
        category: 'Power',
      },
      {
        partName: 'GND Pins',
        description:
          'Ground reference pins. Every component needs a ground connection.',
        category: 'Power',
      },
      {
        partName: 'USB Port',
        description:
          'Used for programming the board and serial communication with your computer.',
        category: 'Signal',
      },
      {
        partName: 'Reset Button',
        description:
          'Restarts the currently loaded program from the beginning.',
        category: 'Mechanical',
      },
      {
        partName: 'Power LED',
        description: 'Indicates the board is receiving power.',
        category: 'Markings',
      },
      {
        partName: 'TX/RX LEDs',
        description:
          'Blink during data transmission and reception over serial communication.',
        category: 'Markings',
      },
    ],
    trivia: [
      { fact: "TRIOE stands for Tinkering Resource for Internet of Everything - extending IoT beyond devices to include people, processes, and data." },
      { fact: "The TrioeBoard is Arduino-compatible, meaning millions of existing Arduino libraries and projects work with it out of the box." },
      { fact: "TRIOE kits are designed specifically for students, making electronics education accessible and locally relevant." },
      { fact: "The board can be programmed using the Arduino IDE, the same free tool used by millions of makers and engineers worldwide." },
    ]
  },

  trioebreadboard: {
    guide: {
      title: 'Trioe Breadboard Guide',
      icon: 'CircuitBoard',
      sections: [
        {
          title: 'What is the TrioeBreadboard?',
          type: 'paragraph',
          icon: 'Info',
          content:
            'The TrioeBreadboard is a prototyping board designed to pair with the Trioe Board.',
        },
      ],
      proTips: [
        'Color-code your wires: red for power, black for ground',
        'Keep wires flat against the board for cleaner layouts',
        'Take a photo of working circuits before disassembling',
      ],
      commonMistakes: [
        'Not connecting both power rails to the TrioeBoard',
        'Pushing components in at an angle causing poor contact',
      ],
    },
    partInfo: [
      {
        partName: 'Power Rails',
        description:
          'The long rows on the top marked (5V, 3.3V) and (GND). Connected horizontally along the top for easy power distribution.',
        category: 'Power Distribution',
      },
    ],
    trivia: [
      { fact: "The TrioeBreadboard is designed to pair perfectly with the TrioeBoard, with matching power rail spacing for clean wiring." },
      { fact: "The TrioeBreadboard follows the standard 0.1 inch (2.54mm) hole spacing - the global standard for electronic component pins." },
    ]
  },
} satisfies ComponentCategory;