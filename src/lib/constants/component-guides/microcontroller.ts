
export const microcontrollerComponentGuide = {
  trioeboard: {
    title: 'Trioe Board Guide',
    icon: 'Cpu',
    sections: [
      { title: 'What is the TrioeBoard?', type: 'paragraph', icon: 'Info', content: 'The TrioeBoard is an Arduino-compatible microcontroller board designed for learning electronics and IoT through hands-on projects. It can be programmed using the Arduino IDE and works with millions of existing Arduino libraries.' },
      { title: 'Getting Started', type: 'list', icon: 'Zap', content: ['Install the Arduino IDE from arduino.cc', 'Connect the board via USB', 'Select the correct board and port in Tools menu', 'Write your code and click Upload', 'Use Serial.begin(9600) and Serial.println() for debugging'] },
      { title: 'Pin Types', type: 'list', icon: 'Grid', content: ['Digital pins: read/write HIGH or LOW signals', 'Analog pins (A0-A5): read variable voltages 0-5V', 'PWM pins (~): simulate analog output for motors and LEDs', 'Power pins: 3.3V, 5V, and GND for powering components'] },
    ],
    proTips: ['Always connect GND before VCC when wiring components', 'Use Serial.println() to debug sensor readings', 'Never draw more than 40mA from a single digital pin', 'Add a 100-470uF capacitor across power rails to stabilize voltage'],
    commonMistakes: ['Wrong board or port selected in Arduino IDE', 'Forgetting to share GND between board and external components', 'Drawing too much current from a single pin (use a transistor for motors)', 'Not installing required libraries before uploading code'],
  },

  trioebreadboard: {
    title: 'Trioe Breadboard Guide',
    icon: 'CircuitBoard',
    sections: [
      { title: 'What is the TrioeBreadboard?', type: 'paragraph', icon: 'Info', content: 'The TrioeBreadboard is a  prototyping board designed to pair with the Trioe Board.' },
    ],
    proTips: ['Color-code your wires: red for power, black for ground', 'Keep wires flat against the board for cleaner layouts', 'Take a photo of working circuits before disassembling'],
    commonMistakes: ['Not connecting both power rails to the TrioeBoard', 'Pushing components in at an angle causing poor contact'],
  },
}