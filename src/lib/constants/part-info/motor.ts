
export const motorPartInfo = {
  vibrationmotor: [
    { partName: "Motor Body", description: "The sealed cylindrical or coin-shaped housing containing the eccentric rotating mass (ERM) or linear resonant actuator (LRA).", category: "Main Body" },
    { partName: "Positive Wire (+)", description: "Red wire. Connect to positive voltage (typically 3V-5V). Current direction determines vibration behavior.", category: "Terminals" },
    { partName: "Negative Wire (-)", description: "Black wire. Connect to ground to complete the circuit.", category: "Terminals" },
    { partName: "Eccentric Mass", description: "An off-center weight on the motor shaft. When it spins, the imbalance creates the vibration sensation.", category: "Mechanical" },
  ],

  dcmotor: [
    { partName: "Motor Housing", description: "The metal cylinder containing the stator magnets, armature windings, and brushes.", category: "Structure" },
    { partName: "Output Shaft", description: "The rotating rod that delivers mechanical power. Reversing polarity reverses shaft direction.", category: "Mechanical" },
    { partName: "Terminal A", description: "One power input terminal. Apply positive voltage here for one rotation direction.", category: "Terminals" },
    { partName: "Terminal B", description: "The other power input terminal. Swap polarity between A and B to reverse the motor.", category: "Terminals" },
  ],

  dcmotorencoder: [
    { partName: "Motor Housing", description: "Contains the DC motor mechanism - armature, stator magnets, and brushes.", category: "Structure" },
    { partName: "Output Shaft", description: "The mechanical output. Encoder tracks its exact position and speed.", category: "Mechanical" },
    { partName: "Encoder Disc", description: "A slotted or magnetic disc attached to the shaft. A sensor counts pulses as it spins to measure position.", category: "Active Element" },
    { partName: "Motor Terminals (M+ M-)", description: "Power inputs for the DC motor. Reversing polarity reverses direction.", category: "Terminals" },
    { partName: "Encoder Pins (VCC, GND, A, B)", description: "Power and signal pins for the encoder. Channels A and B output quadrature pulses for direction and speed sensing.", category: "Signal" },
  ],

  microservo: [
    { partName: "Servo Body", description: "The plastic housing containing the DC motor, gear train, potentiometer, and control circuit.", category: "Structure" },
    { partName: "Output Horn", description: "The plastic arm or wheel attached to the output shaft. Attach your mechanism here.", category: "Mechanical" },
    { partName: "Gear Train", description: "A set of plastic or metal gears inside that trade motor speed for holding torque.", category: "Mechanical" },
    { partName: "PWM Signal Wire", description: "Usually orange or yellow. Connect to a PWM-capable microcontroller pin. Pulse width (1-2ms) sets the angle.", category: "Signal" },
    { partName: "Power Wire (VCC)", description: "Usually red. Connect to 5V. Servos can draw significant current under load.", category: "Power" },
    { partName: "Ground Wire", description: "Usually brown or black. Connect to circuit ground.", category: "Power" },
  ],

  hobbygearmotor: [
    { partName: "Motor Body", description: "The DC motor section that spins at high RPM with low torque.", category: "Structure" },
    { partName: "Gearbox", description: "The gear reduction housing attached to the motor. Multiplies torque while reducing output speed.", category: "Mechanical" },
    { partName: "Output Shaft", description: "The slow but powerful shaft exiting the gearbox. D-shaped for easy wheel attachment.", category: "Mechanical" },
    { partName: "Terminal A", description: "One power input. Apply positive voltage here for one rotation direction.", category: "Terminals" },
    { partName: "Terminal B", description: "Other power input. Reversing polarity between A and B reverses direction.", category: "Terminals" },
  ],

};