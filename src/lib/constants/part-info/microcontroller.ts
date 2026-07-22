
export const microcontrollerPartInfo = {
  trioeboard: [
    { partName: "Microcontroller Chip", description: "The main processor running your code. Arduino-compatible, programmable via USB using the Arduino IDE.", category: "Active Element" },
    { partName: "Digital I/O Pins", description: "Pins that can read or output HIGH/LOW signals. Used for LEDs, buttons, sensors, and more.", category: "Terminals" },
    { partName: "Analog Input Pins (A0-A5)", description: "Read analog voltages from 0-5V. Used for sensors like potentiometers and photoresistors.", category: "Terminals" },
    { partName: "PWM Pins", description: "A subset of digital pins marked with ~. Output simulated analog signals for motor speed and LED dimming.", category: "Terminals" },
    { partName: "VCC / 3.3V / 5V Pins", description: "Power output pins for powering external components and sensors.", category: "Power" },
    { partName: "GND Pins", description: "Ground reference pins. Every component needs a ground connection.", category: "Power" },
    { partName: "USB Port", description: "Used for programming the board and serial communication with your computer.", category: "Signal" },
    { partName: "Reset Button", description: "Restarts the currently loaded program from the beginning.", category: "Mechanical" },
    { partName: "Power LED", description: "Indicates the board is receiving power.", category: "Markings" },
    { partName: "TX/RX LEDs", description: "Blink during data transmission and reception over serial communication.", category: "Markings" },
  ],

  trioebreadboard: [
    { partName: "Power Rails", description: "The long rows on the top marked (5V, 3.3V) and (gnd). Connected horizontally along the top for easy power distribution.", category: "Power Distribution" },
  ],

}