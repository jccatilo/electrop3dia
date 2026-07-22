
export const inputComponentGuide = {

  pushbutton: {
    title: 'Push Button Guide',
    icon: 'Square',
    sections: [
      { title: 'What is a Push Button?', type: 'paragraph', icon: 'Info', content: 'A push button is a momentary switch that closes or opens a circuit only while pressed. When released, it returns to its default state via an internal spring.' },
      { title: 'Pin Configuration (4-pin)', type: 'list', icon: 'Grid', content: ['Pins 1 & 2 are connected internally (one side)', 'Pins 3 & 4 are connected internally (other side)', 'Pressing the button connects both sides', 'Diagonal pins are NOT connected - use adjacent pairs'] },
      { title: 'Debouncing', type: 'list', icon: 'Cpu', content: ['Mechanical contacts bounce when pressed, creating multiple signals', 'Hardware debounce: add a 100nF capacitor across the switch', 'Software debounce: add a small delay after detecting a press', 'Libraries like Bounce2 handle this automatically in Arduino'] },
      { title: 'Pull-up and Pull-down Resistors', type: 'list', icon: 'ArrowRight', content: ['Pull-up (10k to VCC): pin reads HIGH normally, LOW when pressed', 'Pull-down (10k to GND): pin reads LOW normally, HIGH when pressed', 'Most microcontrollers have built-in pull-ups (INPUT_PULLUP)'] },
    ],
    proTips: ['Use INPUT_PULLUP in Arduino to avoid needing an external resistor', 'Debounce in software for cleaner button reads', 'For latching behavior, toggle a boolean variable on each press'],
    commonMistakes: ['Floating input pins without pull-up or pull-down resistors', 'Ignoring contact bounce causing multiple triggers', 'Using diagonal pins instead of adjacent pairs on 4-pin buttons'],
  },

  potentiometer: {
    title: 'Potentiometer Guide',
    icon: 'Sliders',
    sections: [
      { title: 'What is a Potentiometer?', type: 'paragraph', icon: 'Info', content: 'A potentiometer is a three-terminal variable resistor with a sliding or rotating contact. Turning the shaft moves the wiper along a resistive track, outputting a voltage anywhere between the two end pins.' },
      { title: 'Pin Connections', type: 'list', icon: 'Grid', content: ['Pin 1 (End): Connect to VCC or GND', 'Pin 2 (Wiper/Middle): Output voltage - connect to analog input', 'Pin 3 (End): Connect to the other rail (GND or VCC)', 'Output voltage = VCC x (wiper position / total track)'] },
      { title: 'Common Uses', type: 'list', icon: 'Cpu', content: ['Volume and brightness control knobs', 'Analog joystick axis sensing', 'LCD contrast adjustment', 'Setting reference voltages'] },
    ],
    proTips: ['Swap pins 1 and 3 to reverse the direction of the output', 'Use analogRead() on the wiper pin for 0-1023 range on Arduino', 'Add a small capacitor from wiper to GND to filter electrical noise'],
    commonMistakes: ['Leaving the wiper pin floating (erratic readings)', 'Forgetting that the wiper is the middle pin', 'Using potentiometers in high-vibration environments where they can drift'],
  },

  slideswitch: {
    title: 'Slide Switch Guide',
    icon: 'ToggleLeft',
    sections: [
      { title: 'What is a Slide Switch?', type: 'paragraph', icon: 'Info', content: 'A slide switch is a latching switch that maintains its position until physically moved. Unlike a push button, it stays ON or OFF until you slide it to the other position.' },
      { title: 'Pin Configuration (SPDT)', type: 'list', icon: 'Grid', content: ['Center pin: Common (COM) - always connected', 'Left pin: Position A - connected when slider is left', 'Right pin: Position B - connected when slider is right', 'Use between COM and either side to detect switch state'] },
      { title: 'Common Uses', type: 'list', icon: 'Cpu', content: ['Power ON/OFF switch for a project', 'Selecting between two operating modes', 'Enabling/disabling a feature', 'Polarity reversal by swapping connections'] },
    ],
    proTips: ['Use the common + one side for simple ON/OFF control', 'Use common + both sides to switch between two circuits (SPDT mode)', 'Add a pull-down resistor on unused pins to prevent floating inputs'],
    commonMistakes: ['Connecting to non-common pins and getting no switching action', 'Leaving floating pins causing erratic microcontroller reads', 'Using in high-current applications without checking the rating'],
  },

  photoresistor: {
    title: 'Photoresistor Guide',
    icon: 'Sun',
    sections: [
      { title: 'What is a Photoresistor?', type: 'paragraph', icon: 'Info', content: 'A photoresistor (LDR - Light Dependent Resistor) changes its resistance based on light intensity. In darkness, resistance is very high (>1MΩ). In bright light, it drops dramatically (as low as 1kΩ).' },
      { title: 'Using with a Voltage Divider', type: 'list', icon: 'Cpu', content: ['Connect LDR from VCC to analog input pin', 'Connect a 10k resistor from the same pin to GND', 'Read the voltage: higher = more light (LDR resistance drops)', 'Swap LDR and resistor positions to invert the response'] },
      { title: 'Common Uses', type: 'list', icon: 'Zap', content: ['Automatic street light detection', 'Night light activation', 'Light-following robots', 'Ambient light measurement'] },
    ],
    proTips: ['Calibrate by reading values in your expected light range', 'Use analogRead() for a variable reading, not just a threshold', 'Shield from direct sunlight if used outdoors to prevent saturation'],
    commonMistakes: ['Not using a pull-down or voltage divider resistor', 'Expecting fast response - LDRs are slow compared to photodiodes', 'Not accounting for the slow response time in fast-switching applications'],
  },

  photodiode: {
    title: 'Photodiode Guide',
    icon: 'Sun',
    sections: [
      { title: 'What is a Photodiode?', type: 'paragraph', icon: 'Info', content: 'A photodiode generates current proportional to light intensity. It is much faster than a photoresistor and is used in fiber optics, remote controls, and precision light measurement.' },
      { title: 'Operating Modes', type: 'list', icon: 'Layers', content: ['Photoconductive (reverse biased): faster response, used for detection', 'Photovoltaic (no bias): generates small voltage, used in solar cells', 'For detection circuits, reverse bias is most common'] },
      { title: 'Pin Identification', type: 'list', icon: 'ArrowRight', content: ['Anode (+): longer lead', 'Cathode (-): shorter lead', 'In reverse bias: cathode to positive supply, anode to ground via resistor', 'Light causes current to flow from cathode to anode'] },
    ],
    proTips: ['Use in reverse bias mode for faster and more linear response', 'Pair with a transimpedance amplifier for precise light measurement', 'Shield from unwanted light sources for best accuracy'],
    commonMistakes: ['Confusing with an LED (looks identical!)', 'Using in forward bias when reverse bias is needed', 'Not accounting for ambient light interference'],
  },

  ambientlightsensor: {
    title: 'Ambient Light Sensor Guide',
    icon: 'Sun',
    sections: [
      { title: 'What is an Ambient Light Sensor?', type: 'paragraph', icon: 'Info', content: 'An ambient light sensor measures the intensity of surrounding light. Unlike a basic LDR, it has a spectral response similar to the human eye and communicates digitally via I2C.' },
      { title: 'I2C Connection', type: 'list', icon: 'Grid', content: ['VCC: 3.3V or 5V power supply', 'GND: Ground', 'SDA: I2C data line - connect to microcontroller SDA', 'SCL: I2C clock line - connect to microcontroller SCL', 'Common I2C address: 0x23 or 0x5C (set by ADDR pin)'] },
      { title: 'Common Uses', type: 'list', icon: 'Cpu', content: ['Automatic screen brightness adjustment', 'Smart lighting control', 'Display backlight dimming', 'Environmental monitoring stations'] },
    ],
    proTips: ['Use the BH1750 library in Arduino for easy lux readings', 'Add 4.7k pull-up resistors on SDA and SCL if not on the module', 'Position away from direct light sources for ambient measurement'],
    commonMistakes: ['Using wrong I2C address when multiple devices share the bus', 'Not adding I2C pull-up resistors when required', 'Placing sensor directly under a lamp instead of reading ambient light'],
  },

  flexsensor: {
    title: 'Flex Sensor Guide',
    icon: 'Activity',
    sections: [
      { title: 'What is a Flex Sensor?', type: 'paragraph', icon: 'Info', content: 'A flex sensor changes resistance as it bends. Flat resistance is typically 10-30kΩ, bending increases it. It is used in wearables, gloves, and robotic fingers to detect bend angle.' },
      { title: 'Circuit Setup', type: 'list', icon: 'Grid', content: ['Use in a voltage divider with a 47k fixed resistor', 'Connect flex sensor from VCC to analog pin', 'Connect 47k from the same analog pin to GND', 'Higher voltage reading = more bending'] },
      { title: 'Common Uses', type: 'list', icon: 'Cpu', content: ['Gesture recognition gloves', 'Robotic finger position sensing', 'Physical therapy rehabilitation monitoring', 'Controller input devices'] },
    ],
    proTips: ['Calibrate flat and fully bent positions for mapping to angles', 'Avoid bending sharply at the connector end - it damages the sensor', 'Use a running average to smooth analog readings'],
    commonMistakes: ['Bending at the connector area (damages the sensor permanently)', 'Not calibrating for the specific bend range needed', 'Using without a series resistor (voltage divider is required)'],
  },

  forcesensor: {
    title: 'Force Sensor (FSR) Guide',
    icon: 'Activity',
    sections: [
      { title: 'What is a Force Sensor?', type: 'paragraph', icon: 'Info', content: 'A Force Sensitive Resistor (FSR) decreases in resistance when pressure is applied to its surface. No force = very high resistance (>1MΩ). Maximum force = low resistance (~200Ω).' },
      { title: 'Circuit Setup', type: 'list', icon: 'Grid', content: ['Connect FSR from VCC to analog input pin', 'Add 10k resistor from analog input to GND (pull-down)', 'Higher voltage = more force applied', 'Typical useful range: 100g to 10kg'] },
      { title: 'Common Uses', type: 'list', icon: 'Cpu', content: ['Touch-sensitive buttons and pads', 'Grip force measurement', 'Weight sensing in simple scales', 'Pressure-activated triggers'] },
    ],
    proTips: ['Distribute force evenly across the sensing area for consistent readings', 'Calibrate with known weights for accurate force measurement', 'The response is logarithmic - map it carefully in code'],
    commonMistakes: ['Point-loading the sensor (apply force to the full active area)', 'Ignoring the logarithmic response curve', 'Expecting precision measurement - FSRs are better for detection than measurement'],
  },

  irsensor: {
    title: 'IR Sensor Guide',
    icon: 'Crosshair',
    sections: [
      { title: 'What is an IR Sensor?', type: 'paragraph', icon: 'Info', content: 'An IR (Infrared) proximity sensor consists of an IR LED that emits light and a photodiode that detects reflections. It outputs a digital signal when an object is within range.' },
      { title: 'Pin Connections', type: 'list', icon: 'Grid', content: ['VCC: Connect to 3.3V or 5V', 'GND: Connect to ground', 'OUT: Digital output - LOW when object detected (active low)', 'Some modules have a potentiometer to adjust sensitivity'] },
      { title: 'Common Uses', type: 'list', icon: 'Cpu', content: ['Line-following robots (detecting black/white lines)', 'Obstacle avoidance', 'Object counting on conveyor belts', 'Proximity detection for automatic systems'] },
    ],
    proTips: ['Adjust the onboard potentiometer to set detection distance', 'IR sensors can be confused by strong ambient IR (sunlight) - shield if needed', 'Use multiple sensors for line following robots'],
    commonMistakes: ['Not adjusting sensitivity for the specific environment', 'Using in direct sunlight causing false detections', 'Confusing active low output (LOW = detected) with active high'],
  },

  ultrasonicsensor: {
    title: 'Ultrasonic Distance Sensor Guide',
    icon: 'Radio',
    sections: [
      { title: 'What is an Ultrasonic Sensor?', type: 'paragraph', icon: 'Info', content: 'An ultrasonic sensor measures distance by sending a sound pulse at 40kHz and measuring how long the echo takes to return. Distance = (echo time x speed of sound) / 2.' },
      { title: 'Pin Connections', type: 'list', icon: 'Grid', content: ['VCC: 5V power supply', 'GND: Ground', 'TRIG: Send a 10 microsecond HIGH pulse to trigger a measurement', 'ECHO: Goes HIGH for a duration proportional to distance'] },
      { title: 'Distance Calculation', type: 'list', icon: 'Hash', content: ['Speed of sound = 343 m/s at room temperature', 'Distance (cm) = echo duration (us) / 58', 'Distance (inches) = echo duration (us) / 148', 'Useful range: 2cm to 400cm'] },
    ],
    proTips: ['Add a timeout in code to prevent hanging if no echo returns', 'Use pulseIn() in Arduino to measure echo duration', 'Take multiple readings and average them for stability'],
    commonMistakes: ['Not triggering before each reading (always send a fresh TRIG pulse)', 'Measuring soft or angled surfaces that absorb/deflect sound', 'Forgetting to divide by 2 (sound travels to object AND back)'],
  },

  ultrasonicsensor4pin: {
    title: 'Ultrasonic Sensor (4-Pin) Guide',
    icon: 'Radio',
    sections: [
      { title: 'What is the 4-Pin Ultrasonic Sensor?', type: 'paragraph', icon: 'Info', content: 'The HC-SR04 style 4-pin ultrasonic sensor has separate TRIG and ECHO pins for more precise timing control. It is the most widely used ultrasonic sensor in maker projects.' },
      { title: 'Pin Connections', type: 'list', icon: 'Grid', content: ['VCC: 5V (does not work reliably at 3.3V)', 'GND: Ground', 'TRIG: Output from microcontroller - send 10us HIGH pulse', 'ECHO: Input to microcontroller - measure HIGH pulse duration'] },
      { title: 'Arduino Code Structure', type: 'list', icon: 'Cpu', content: ['digitalWrite(TRIG_PIN, LOW) for 2us (clean start)', 'digitalWrite(TRIG_PIN, HIGH) for 10us', 'digitalWrite(TRIG_PIN, LOW)', 'duration = pulseIn(ECHO_PIN, HIGH)', 'distance_cm = duration / 58.0'] },
    ],
    proTips: ['Add a voltage divider on ECHO pin if using 3.3V microcontroller (5V signal)', 'Use the NewPing library for cleaner code and timeout handling', 'Mount at a slight downward angle for floor distance sensing'],
    commonMistakes: ['Connecting ECHO directly to a 3.3V microcontroller (5V signal can damage it)', 'Too short a trigger pulse (must be at least 10 microseconds)', 'Objects smaller than 2cm wide may not reflect enough sound'],
  },

  pirsensor: {
    title: 'PIR Sensor Guide',
    icon: 'Eye',
    sections: [
      { title: 'What is a PIR Sensor?', type: 'paragraph', icon: 'Info', content: 'A Passive Infrared (PIR) sensor detects motion by measuring changes in infrared radiation from warm bodies moving across its field of view. It does not emit anything - it only listens.' },
      { title: 'Pin Connections', type: 'list', icon: 'Grid', content: ['VCC: 5V to 12V depending on module', 'GND: Ground', 'OUT: Goes HIGH when motion is detected', 'Most modules have delay and sensitivity trim potentiometers'] },
      { title: 'Adjustments', type: 'list', icon: 'Sliders', content: ['Sensitivity pot: adjusts detection range (3m to 7m typical)', 'Time delay pot: sets how long OUT stays HIGH after detection', 'Jumper (if present): single trigger vs repeating trigger mode', 'Warm-up time: 30-60 seconds after power-on before reliable use'] },
    ],
    proTips: ['Allow 60 seconds warm-up time before testing', 'Place at 2-3m height for best human detection coverage', 'Avoid pointing at heat sources (vents, sunny windows) for false-trigger prevention'],
    commonMistakes: ['Testing immediately after power-on (sensor needs warm-up time)', 'Ignoring the Fresnel lens angle - coverage is not 360 degrees', 'Placing near heat vents causing constant false triggers'],
  },

  soilmoisturesensor: {
    title: 'Soil Moisture Sensor Guide',
    icon: 'Droplets',
    sections: [
      { title: 'What is a Soil Moisture Sensor?', type: 'paragraph', icon: 'Info', content: 'A soil moisture sensor measures water content in soil by detecting changes in electrical resistance or capacitance between its probes. Wetter soil conducts more current.' },
      { title: 'Pin Connections', type: 'list', icon: 'Grid', content: ['VCC: 3.3V or 5V', 'GND: Ground', 'AOUT: Analog output - higher voltage = drier soil', 'DOUT: Digital output - LOW when moisture exceeds threshold', 'Threshold set by onboard potentiometer'] },
      { title: 'Common Uses', type: 'list', icon: 'Cpu', content: ['Automatic plant watering systems', 'Garden irrigation control', 'Greenhouse monitoring', 'Soil health data logging'] },
    ],
    proTips: ['Calibrate with dry soil and saturated soil for the full range', 'Use capacitive sensors for longevity (resistive probes corrode quickly)', 'Only power the sensor during readings to extend probe life'],
    commonMistakes: ['Leaving resistive probes powered continuously (they corrode in days)', 'Not calibrating for your specific soil type', 'Reading while the soil is disturbed (wait for settling)'],
  },

  tiltsensor: {
    title: 'Tilt Sensor Guide',
    icon: 'Activity',
    sections: [
      { title: 'What is a Tilt Sensor?', type: 'paragraph', icon: 'Info', content: 'A tilt sensor (ball switch) contains a small conductive ball inside a housing. When tilted, the ball rolls to bridge the two contacts. It is a simple, non-electronic way to detect orientation.' },
      { title: 'How It Works', type: 'list', icon: 'Activity', content: ['Upright: ball rests away from contacts - circuit open', 'Tilted past threshold: ball rolls to touch contacts - circuit closes', 'Acts as a digital switch (open or closed)', 'No defined threshold angle - varies by orientation axis'] },
      { title: 'Connection', type: 'list', icon: 'Grid', content: ['Connect one lead to a digital input with pull-up resistor', 'Connect the other lead to GND', 'Read LOW when tilted (ball bridges contacts), HIGH when upright', 'Apply debouncing - the ball rolls and bounces'] },
    ],
    proTips: ['Apply software debouncing - the rolling ball causes contact bounce', 'Test all axes to understand detection angle for your orientation', 'Cheap and reliable alternative to accelerometers for simple tilt detection'],
    commonMistakes: ['Not debouncing (rolling ball bounces on contacts)', 'Expecting a specific tilt angle - varies with manufacturing tolerance', 'Floating input pin without a pull-up resistor'],
  },

  temperaturesensor: {
    title: 'Temperature Sensor Guide',
    icon: 'Thermometer',
    sections: [
      { title: 'What is a Temperature Sensor?', type: 'paragraph', icon: 'Info', content: 'A temperature sensor converts ambient temperature into an electrical signal - either analog voltage, PWM, or a digital protocol like OneWire or I2C.' },
      { title: 'Common Types', type: 'list', icon: 'Layers', content: ['LM35: Analog, 10mV per degree Celsius, simple and accurate', 'DS18B20: Digital OneWire, ±0.5°C accuracy, multiple sensors on one wire', 'DHT11/DHT22: Digital, measures both temperature and humidity', 'NTC Thermistor: Analog, requires voltage divider and calibration'] },
      { title: 'Pin Connections (LM35 style)', type: 'list', icon: 'Grid', content: ['Pin 1 (flat side left): VCC - connect to 3.3V or 5V', 'Pin 2 (flat side center): OUTPUT - connect to analog input', 'Pin 3 (flat side right): GND - connect to ground', 'Read output: Temperature (°C) = analogRead() x (5.0/1023) / 0.01'] },
    ],
    proTips: ['For DS18B20, add a 4.7k pull-up on the data line', 'Place sensor away from heat-generating components for accurate ambient readings', 'Average multiple readings to reduce noise'],
    commonMistakes: ['Touching the sensor body while testing (body heat affects readings)', 'Not adding a pull-up resistor for OneWire sensors', 'Wrong pinout - always verify with the specific sensor datasheet'],
  },

  gassensor: {
    title: 'Gas Sensor Guide',
    icon: 'Wind',
    sections: [
      { title: 'What is a Gas Sensor?', type: 'paragraph', icon: 'Info', content: 'MQ-series gas sensors detect specific gases by measuring resistance changes in a heated metal oxide surface. Each variant targets different gases: MQ-2 (LPG/smoke), MQ-7 (CO), MQ-135 (air quality).' },
      { title: 'Pin Connections', type: 'list', icon: 'Grid', content: ['VCC: 5V (heater requires significant current ~150mA)', 'GND: Ground', 'AOUT: Analog output - voltage increases with gas concentration', 'DOUT: Digital output - HIGH when concentration exceeds threshold', 'Threshold set by onboard potentiometer'] },
      { title: 'Warm-Up Requirement', type: 'warning', icon: 'AlertTriangle', content: 'MQ sensors require a 24-48 hour burn-in period when brand new, and a 20-second warm-up every time they are powered on. Readings are unreliable until the heater reaches operating temperature.' },
    ],
    proTips: ['Allow 20 seconds warm-up before taking readings', 'New sensors need 24-48 hours of powered operation for accurate readings', 'Use analog output with known gas concentrations to calibrate'],
    commonMistakes: ['Reading immediately after power-on (sensor not yet at temperature)', 'Using a 3.3V supply (heater requires 5V for correct operation)', 'Forgetting new sensors need a burn-in period'],
  },

  keypad4x4: {
    title: '4x4 Keypad Guide',
    icon: 'Grid',
    sections: [
      { title: 'What is a 4x4 Keypad?', type: 'paragraph', icon: 'Info', content: 'A 4x4 membrane keypad has 16 buttons in a matrix arrangement. Only 8 wires are needed thanks to row/column scanning - each button sits at the intersection of one row and one column.' },
      { title: 'Pin Connections', type: 'list', icon: 'Grid', content: ['Pins 1-4: Row pins (R1, R2, R3, R4)', 'Pins 5-8: Column pins (C1, C2, C3, C4)', 'Connect to 8 digital I/O pins on microcontroller', 'Use the Keypad library in Arduino to handle scanning automatically'] },
      { title: 'How Scanning Works', type: 'list', icon: 'Cpu', content: ['Microcontroller drives each row HIGH one at a time', 'Reads which column pin goes HIGH when a key is pressed', 'Row + column intersection identifies the pressed key', 'The Keypad library handles all of this automatically'] },
    ],
    proTips: ['Use the Arduino Keypad library for simple, reliable key detection', 'Combine with a 16x2 LCD for a simple entry system', 'Add long-press detection in code for multi-function keys'],
    commonMistakes: ['Reversing the row and column order (wrong keys detected)', 'Not using a library and manually scanning incorrectly', 'Expecting multiple simultaneous key presses to work (not supported without extra hardware)'],
  },

  dipswitch: {
    title: 'DIP Switch Guide',
    icon: 'ToggleLeft',
    sections: [
      { title: 'What is a DIP Switch?', type: 'paragraph', icon: 'Info', content: 'A DIP (Dual In-line Package) switch contains multiple independent SPST switches in one package. Each switch independently connects or isolates its two pins, used for hardware configuration.' },
      { title: 'How to Read Settings', type: 'list', icon: 'Hash', content: ['Each switch is a binary bit (ON=1, OFF=0)', 'Read left to right or right to left depending on convention', 'Example: 4-switch, ON-OFF-ON-OFF = 1010 in binary = 10 in decimal', 'Always check which end is bit 0 in your schematic'] },
      { title: 'Common Uses', type: 'list', icon: 'Cpu', content: ['Setting device I2C/SPI address', 'Configuring communication baud rate', 'Enabling/disabling hardware features', 'Setting unique device IDs in multi-unit systems'] },
    ],
    proTips: ['Use pull-up or pull-down resistors on all switch pins to prevent floating', 'Label each switch position clearly on the enclosure', 'Document the meaning of each switch combination in your project notes'],
    commonMistakes: ['Floating switch pins (causes erratic behavior)', 'Reading bit order incorrectly (MSB vs LSB)', 'Changing DIP switch settings while powered on in sensitive systems'],
  },

}