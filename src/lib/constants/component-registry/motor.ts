
export const motor = {
  vibrationmotor: {
    guide: {
      title: 'Vibration Motor Guide',
      icon: 'Zap',
      sections: [
        { title: 'What is a Vibration Motor?', type: 'paragraph', icon: 'Info', content: 'A vibration motor uses an off-center (eccentric) rotating mass to create vibration. The faster it spins, the stronger the vibration. It is the haptic feedback component found in phones and game controllers.' },
        { title: 'Pin Connections', type: 'list', icon: 'Grid', content: ['Red wire (+): Connect to positive voltage (2V-5V typical)', 'Black wire (-): Connect to ground', 'Cannot be driven directly from most GPIO pins (draws too much current)', 'Use a transistor or MOSFET switch driven by GPIO'] },
        { title: 'Driving Circuit', type: 'list', icon: 'Cpu', content: ['GPIO -> 1k resistor -> NPN base (e.g. 2N2222)', 'NPN Collector -> Motor positive terminal', 'Motor negative -> GND', 'Add flyback diode across motor terminals for protection'] },
      ],
      proTips: ['Use PWM to control vibration intensity', 'Add a flyback diode (1N4001) across motor terminals', 'Secure the motor well - vibration can loosen connections'],
      commonMistakes: ['Driving directly from GPIO pin without a transistor (damages MCU)', 'Forgetting flyback diode protection', 'Not securing the motor - vibration shakes connections loose'],
    },

    partInfo: [
      { partName: "Motor Body", description: "The sealed cylindrical or coin-shaped housing containing the eccentric rotating mass (ERM) or linear resonant actuator (LRA).", category: "Main Body" },
      { partName: "Positive Wire (+)", description: "Red wire. Connect to positive voltage (typically 3V-5V). Current direction determines vibration behavior.", category: "Terminals" },
      { partName: "Negative Wire (-)", description: "Black wire. Connect to ground to complete the circuit.", category: "Terminals" },
      { partName: "Eccentric Mass", description: "An off-center weight on the motor shaft. When it spins, the imbalance creates the vibration sensation.", category: "Mechanical" },
    ],
    trivia: [
      { fact: "The tiny vibration motor in your phone is called an eccentric rotating mass (ERM) motor - it spins an off-center weight to create vibration." },
      { fact: "More advanced phones now use a linear resonant actuator (LRA), which moves a weight back and forth like a tiny speaker, producing much more precise 'haptic' feedback." },
      { fact: "Haptic feedback motors in game controllers can simulate textures, impacts, and resistance - making virtual experiences feel physical." },
      { fact: "The vibration alert in mobile phones was introduced in the early 1990s so phones could be used silently in meetings.", year: "1990s" },
    ]
  },

  dcmotor: {
    guide: {
      title: 'DC Motor Guide',
      icon: 'Zap',
      sections: [
        { title: 'What is a DC Motor?', type: 'paragraph', icon: 'Info', content: 'A DC motor converts electrical energy into rotational mechanical motion. Reversing the polarity reverses the direction of rotation. Speed is controlled by PWM.' },
        { title: 'Driving a DC Motor', type: 'list', icon: 'Cpu', content: ['Never connect directly to a microcontroller GPIO pin', 'Use an H-Bridge (L298N, L293D, DRV8833) for direction control', 'H-Bridge allows forward, reverse, and braking', 'PWM on the enable pin controls speed'] },
        { title: 'L298N Motor Driver Pins', type: 'list', icon: 'Grid', content: ['IN1/IN2: Direction control (HIGH/LOW = forward, LOW/HIGH = reverse)', 'ENA: PWM speed control for motor A', 'OUT1/OUT2: Motor terminals', 'VCC: Motor supply (up to 35V), 5V logic supply'] },
        { title: 'Flyback Protection', type: 'list', icon: 'AlertTriangle', content: ['Motors generate voltage spikes when switching off', 'Add 1N4001 diodes across motor terminals (most drivers include these)', 'Use separate power supply for motors and logic'] },
      ],
      proTips: ['Add a large capacitor (100-1000uF) across motor power supply', 'Use separate power supplies for motor and microcontroller', 'Stall current can be 5-10x running current - size your supply accordingly'],
      commonMistakes: ['Driving motor directly from GPIO (destroys the pin)', 'Using same power supply for motor and MCU without decoupling', 'Forgetting flyback protection causes erratic MCU resets'],
    },

    partInfo: [
      { partName: "Motor Housing", description: "The metal cylinder containing the stator magnets, armature windings, and brushes.", category: "Structure" },
      { partName: "Output Shaft", description: "The rotating rod that delivers mechanical power. Reversing polarity reverses shaft direction.", category: "Mechanical" },
      { partName: "Terminal A", description: "One power input terminal. Apply positive voltage here for one rotation direction.", category: "Terminals" },
      { partName: "Terminal B", description: "The other power input terminal. Swap polarity between A and B to reverse the motor.", category: "Terminals" },
    ],
    trivia: [
      { fact: "DC motors work by electromagnetic attraction and repulsion between a spinning electromagnet and fixed magnets." },
      { fact: "The principle is so simple that Michael Faraday demonstrated the world's first electric motor in 1821 using just a wire, a magnet, and a battery of acid!", year: "1821" },
      { fact: "Electric motors consume about 45% of all electricity generated worldwide - more than lighting, heating, or any other application." },
      { fact: "A DC motor can also act as a generator - spin the shaft and it produces electricity. This is how regenerative braking in electric cars works!" },
    ]
  },

  dcmotorencoder: {
    guide: {
      title: 'DC Motor with Encoder Guide',
      icon: 'Zap',
      sections: [
        { title: 'What is an Encoder?', type: 'paragraph', icon: 'Info', content: 'An encoder attached to a motor provides position and speed feedback by counting pulses as the shaft rotates. Quadrature encoders use two channels (A and B) that allow both speed and direction sensing.' },
        { title: 'Encoder Pin Connections', type: 'list', icon: 'Grid', content: ['VCC: 3.3V or 5V for encoder electronics', 'GND: Ground', 'Channel A: Connect to interrupt-capable pin on MCU', 'Channel B: Connect to another digital pin for direction sensing', 'Motor terminals: Connect to motor driver as usual'] },
        { title: 'Reading the Encoder', type: 'list', icon: 'Cpu', content: ['Use hardware interrupts for reliable counting', 'Rising edge of A: if B is LOW = forward, B is HIGH = reverse', 'Pulses per revolution (PPR) given in motor specs', 'Position (degrees) = (count / PPR) x 360'] },
      ],
      proTips: ['Always use interrupt pins for encoder channels for reliable counting', 'Use the Encoder library in Arduino for clean quadrature reading', 'Add PID control loop for precise speed and position control'],
      commonMistakes: ['Polling encoder instead of using interrupts (misses pulses at speed)', 'Forgetting encoder requires its own power supply (VCC/GND)', 'Not knowing the PPR value makes position calculation impossible'],
    },

    partInfo: [
      { partName: "Motor Housing", description: "Contains the DC motor mechanism - armature, stator magnets, and brushes.", category: "Structure" },
      { partName: "Output Shaft", description: "The mechanical output. Encoder tracks its exact position and speed.", category: "Mechanical" },
      { partName: "Encoder Disc", description: "A slotted or magnetic disc attached to the shaft. A sensor counts pulses as it spins to measure position.", category: "Active Element" },
      { partName: "Motor Terminals (M+ M-)", description: "Power inputs for the DC motor. Reversing polarity reverses direction.", category: "Terminals" },
      { partName: "Encoder Pins (VCC, GND, A, B)", description: "Power and signal pins for the encoder. Channels A and B output quadrature pulses for direction and speed sensing.", category: "Signal" },
    ],
    trivia: [
      { fact: "An encoder turns a motor into a precise positioning system by counting tiny pulses - sometimes thousands per revolution." },
      { fact: "This is how 3D printers, CNC machines, and robotic arms know exactly where they are." },
      { fact: "Without encoders, your printer head would have no idea how far it had moved!" },
      { fact: "Optical encoders use a spinning disk with tiny holes that interrupt a light beam. Magnetic encoders use a spinning magnet and Hall effect sensor - more durable in dusty environments." },
    ]
  },

  microservo: {
    guide: {
      title: 'Micro Servo Guide',
      icon: 'Zap',
      sections: [
        { title: 'What is a Servo Motor?', type: 'paragraph', icon: 'Info', content: 'A servo motor uses an internal potentiometer and control circuit to hold a precise angular position. It moves to a commanded angle and holds it, unlike a DC motor which spins continuously.' },
        { title: 'Pin Connections (3-wire)', type: 'list', icon: 'Grid', content: ['Brown/Black wire: GND', 'Red wire: VCC (4.8V to 6V - use 5V)', 'Orange/Yellow wire: PWM Signal from microcontroller', 'Pulse width 1ms = 0 degrees, 2ms = 180 degrees, 1.5ms = 90 degrees'] },
        { title: 'Arduino Code', type: 'list', icon: 'Cpu', content: ['#include <Servo.h>', 'Servo myServo,', 'myServo.attach(9), // PWM pin', 'myServo.write(90), // Move to 90 degrees', 'Range: 0-180 degrees'] },
      ],
      proTips: ['Power the servo from a separate 5V supply for stable operation under load', 'Servos draw high peak current when moving - add 100-470uF capacitor', 'Never force the servo arm past its physical limits'],
      commonMistakes: ['Powering from the Arduino 5V pin (insufficient current under load)', 'Using a non-PWM pin (servo will jitter or not respond)', 'Setting angles beyond the servo mechanical limits'],
    },

    partInfo: [
      { partName: "Servo Body", description: "The plastic housing containing the DC motor, gear train, potentiometer, and control circuit.", category: "Structure" },
      { partName: "Output Horn", description: "The plastic arm or wheel attached to the output shaft. Attach your mechanism here.", category: "Mechanical" },
      { partName: "Gear Train", description: "A set of plastic or metal gears inside that trade motor speed for holding torque.", category: "Mechanical" },
      { partName: "PWM Signal Wire", description: "Usually orange or yellow. Connect to a PWM-capable microcontroller pin. Pulse width (1-2ms) sets the angle.", category: "Signal" },
      { partName: "Power Wire (VCC)", description: "Usually red. Connect to 5V. Servos can draw significant current under load.", category: "Power" },
      { partName: "Ground Wire", description: "Usually brown or black. Connect to circuit ground.", category: "Power" },
    ],

    trivia: [
      { fact: "Servo motors don't just spin - they hold position! Using feedback from an internal potentiometer, a servo constantly corrects itself to stay exactly where commanded." },
      { fact: "RC planes, boats, and cars use servos for control surfaces." },
      { fact: "They were originally developed for steering naval guns with precision." },
      { fact: "A standard servo is controlled by a PWM signal - the pulse width (usually 1–2ms) tells it exactly which angle to move to." },
    ]
  },

  hobbygearmotor: {
    guide: {
      title: 'Hobby Gearmotor Guide',
      icon: 'Zap',
      sections: [
        { title: 'What is a Gearmotor?', type: 'paragraph', icon: 'Info', content: 'A gearmotor combines a DC motor with a gear reduction box. The gears trade high motor speed for increased torque at the output shaft - enabling small motors to move heavy loads.' },
        { title: 'Key Specifications', type: 'list', icon: 'Hash', content: ['Gear ratio (e.g. 1:48): motor turns 48x for each output revolution', 'No-load speed: output RPM with no load attached', 'Stall torque: maximum torque before motor stalls', 'Stall current: highest current draw, occurs when shaft is blocked'] },
        { title: 'Driving the Motor', type: 'list', icon: 'Cpu', content: ['Use an H-Bridge driver (L298N, DRV8833) for direction control', 'PWM on enable pin controls speed', 'Reversing IN1/IN2 logic reverses direction', 'Add flyback diodes on motor terminals'] },
      ],
      proTips: ['Higher gear ratio = more torque but slower speed', 'Size your motor driver for at least 2x the stall current', 'D-shaped shaft pairs well with standard robot wheels'],
      commonMistakes: ['Not accounting for stall current when choosing motor driver', 'Expecting high speed from a high-ratio gearbox (physics says no)', 'Running motor at stall continuously (overheats the motor)'],
    },

    partInfo: [
      { partName: "Motor Body", description: "The DC motor section that spins at high RPM with low torque.", category: "Structure" },
      { partName: "Gearbox", description: "The gear reduction housing attached to the motor. Multiplies torque while reducing output speed.", category: "Mechanical" },
      { partName: "Output Shaft", description: "The slow but powerful shaft exiting the gearbox. D-shaped for easy wheel attachment.", category: "Mechanical" },
      { partName: "Terminal A", description: "One power input. Apply positive voltage here for one rotation direction.", category: "Terminals" },
      { partName: "Terminal B", description: "Other power input. Reversing polarity between A and B reverses direction.", category: "Terminals" },
    ],

    trivia: [
      { fact: "Gearmotors trade speed for torque using a gear train. Each gear stage can multiply torque by 5–10x." },
      { fact: "A small motor spinning at 10,000 RPM might exit a gearbox at just 100 RPM, but with 100x the turning force." },
      { fact: "This is how tiny motors can drive heavy robots and power wheelchairs!" },
      { fact: "The gear ratio is stamped on most gearmotors - a '1:48' ratio means the output shaft spins once for every 48 turns of the motor." },
    ]
  },
}

