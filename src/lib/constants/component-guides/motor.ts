
export const motorComponentGuide = {

  vibrationmotor: {
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

  dcmotor: {
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

  dcmotorencoder: {
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

  microservo: {
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

  hobbygearmotor: {
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

}