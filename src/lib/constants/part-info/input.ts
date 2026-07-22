
export const inputPartInfo = {
  pushbutton: [
    { partName: "Actuator", description: "The plastic cap you press. Pushing it down bridges the internal contacts and closes the circuit.", category: "Mechanical" },
    { partName: "Pin 1 & Pin 2", description: "One pair of pins on one side of the button. These are internally connected.", category: "Terminals" },
    { partName: "Pin 3 & Pin 4", description: "The other pair of pins on the opposite side. When the button is pressed, all four pins become connected.", category: "Terminals" },
    { partName: "Spring Mechanism", description: "Internal spring that pushes the actuator back up when released, opening the circuit again.", category: "Mechanical" },
  ],

  potentiometer: [
    { partName: "Resistive Track", description: "The internal carbon or cermet strip that provides a fixed total resistance from pin 1 to pin 3.", category: "Active Element" },
    { partName: "Wiper Pin (Middle)", description: "The center pin. Connected to the sliding contact that moves along the resistive track, outputting a variable voltage.", category: "Terminals" },
    { partName: "End Pin 1", description: "One end of the resistive track. Typically connected to VCC or ground depending on the circuit.", category: "Terminals" },
    { partName: "End Pin 2", description: "The other end of the resistive track. Typically connected to the opposite rail from Pin 1.", category: "Terminals" },
    { partName: "Shaft/Knob", description: "The rotating part that moves the internal wiper. Turning it changes the output voltage linearly.", category: "Mechanical" },
  ],

  slideswitch: [
    { partName: "Slider Actuator", description: "The part you physically move to switch between positions. It slides a conductive bridge between contact sets.", category: "Mechanical" },
    { partName: "Common Pin", description: "The center pin that is always connected. It bridges either to the left or right pin depending on slider position.", category: "Terminals" },
    { partName: "Position A Pin", description: "Connected to the common pin when the slider is in one position.", category: "Terminals" },
    { partName: "Position B Pin", description: "Connected to the common pin when the slider is in the other position.", category: "Terminals" },
  ],

  photoresistor: [
    { partName: "Sensing Surface", description: "The zigzag cadmium sulfide (CdS) track exposed to light. Resistance drops dramatically as light intensity increases.", category: "Active Element" },
    { partName: "Leads", description: "Two equal leads - non-polarized. Can be connected either way in the circuit.", category: "Terminals" },
  ],

  photodiode: [
    { partName: "Photodiode Window", description: "The clear or tinted lens on top that allows light to reach the semiconductor junction inside.", category: "Optics" },
    { partName: "Anode (+)", description: "The longer lead. In photoconductive mode, connect to ground. In photovoltaic mode, this outputs positive voltage.", category: "Terminals" },
    { partName: "Cathode (-)", description: "The shorter lead. In photoconductive mode, connect to reverse bias voltage. Generates current when light hits the junction.", category: "Terminals" },
  ],

  ambientlightsensor: [
    { partName: "Sensor Body", description: "The IC package containing a photodiode array and signal conditioning circuitry that mimics human eye response.", category: "Main Body" },
    { partName: "VCC Pin", description: "Power supply pin. Connect to 3.3V or 5V depending on the module.", category: "Power" },
    { partName: "GND Pin", description: "Ground reference pin. Connect to circuit ground.", category: "Power" },
    { partName: "SDA Pin", description: "I2C data line for communicating light level readings to a microcontroller.", category: "Signal" },
    { partName: "SCL Pin", description: "I2C clock line. Synchronizes data transfer between sensor and microcontroller.", category: "Signal" },
  ],

  flexsensor: [
    { partName: "Flexible Substrate", description: "The thin plastic strip coated with a resistive ink. Bending it stretches the ink layer and increases resistance.", category: "Active Element" },
    { partName: "Sensing Area", description: "The active region of the strip. More bending in this area = greater resistance change.", category: "Active Element" },
    { partName: "Leads", description: "Two terminals at one end. Non-polarized. Resistance typically ranges from 10K (flat) to 35K (fully bent).", category: "Terminals" },
  ],

  forcesensor: [
    { partName: "Sensing Area", description: "The circular or square active zone. Applying pressure here reduces the resistance between the two terminals.", category: "Active Element" },
    { partName: "FSR Film", description: "The Force Sensitive Resistor film uses conductive polymer layers that make more contact points under pressure, lowering resistance.", category: "Active Element" },
    { partName: "Leads", description: "Two terminals. Non-polarized. With no force applied resistance is very high (>1MΩ). Under pressure it drops below 1kΩ.", category: "Terminals" },
  ],

  irsensor: [
    { partName: "IR Emitter (LED)", description: "Transmits infrared light (typically 38kHz modulated). Objects reflect this light back to the receiver.", category: "Emitter" },
    { partName: "IR Receiver (Photodiode)", description: "Detects the reflected infrared light and changes output state when an object is detected within range.", category: "Receiver" },
    { partName: "VCC Pin", description: "Power supply. Connect to 3.3V or 5V.", category: "Power" },
    { partName: "GND Pin", description: "Ground reference. Connect to circuit ground.", category: "Power" },
    { partName: "OUT Pin", description: "Digital output. Goes LOW when an object is detected, HIGH when the path is clear (active low logic).", category: "Signal" },
  ],

  ultrasonicsensor: [
    { partName: "Ultrasonic Transmitter", description: "Emits ultrasonic sound pulses at 40kHz. Looks like a small speaker cone.", category: "Emitter" },
    { partName: "Ultrasonic Receiver", description: "Detects the echo of the transmitted pulse reflecting off objects.", category: "Receiver" },
    { partName: "VCC Pin", description: "Power supply. Connect to 5V.", category: "Power" },
    { partName: "GND Pin", description: "Ground reference.", category: "Power" },
    { partName: "TRIG Pin", description: "Trigger input. Send a 10 microsecond HIGH pulse to start a measurement.", category: "Signal" },
    { partName: "ECHO Pin", description: "Echo output. Goes HIGH for a duration proportional to the measured distance.", category: "Signal" },
  ],

  ultrasonicsensor4pin: [
    { partName: "Ultrasonic Transmitter", description: "Emits 40kHz ultrasonic pulses to measure distance via echo timing.", category: "Emitter" },
    { partName: "Ultrasonic Receiver", description: "Listens for the reflected echo pulse to calculate distance.", category: "Receiver" },
    { partName: "VCC Pin", description: "Power supply. Connect to 5V.", category: "Power" },
    { partName: "GND Pin", description: "Ground reference.", category: "Power" },
    { partName: "TRIG Pin", description: "Trigger input. A 10us HIGH pulse initiates one measurement cycle.", category: "Signal" },
    { partName: "ECHO Pin", description: "Echo output. Pulse width in microseconds divided by 58 gives distance in centimeters.", category: "Signal" },
  ],

  pirsensor: [
    { partName: "Fresnel Lens", description: "The white plastic dome on top. It splits the field of view into multiple zones so the sensor detects movement between zones, not just presence.", category: "Optics" },
    { partName: "PIR Element", description: "A dual-element pyroelectric sensor beneath the lens that detects changes in infrared radiation from warm bodies.", category: "Active Element" },
    { partName: "VCC Pin", description: "Power supply. Typically 5V to 12V depending on module.", category: "Power" },
    { partName: "GND Pin", description: "Ground reference.", category: "Power" },
    { partName: "OUT Pin", description: "Digital output. Goes HIGH when motion is detected. Duration adjustable via onboard trim pots.", category: "Signal" },
  ],

  soilmoisturesensor: [
    { partName: "Probe Electrodes", description: "The two metal tines inserted into soil. They measure the resistance (resistive type) or capacitance (capacitive type) of the soil, which changes with moisture.", category: "Active Element" },
    { partName: "VCC Pin", description: "Power supply. Connect to 3.3V or 5V.", category: "Power" },
    { partName: "GND Pin", description: "Ground reference.", category: "Power" },
    { partName: "AOUT Pin", description: "Analog output. Higher voltage = drier soil. Use with an ADC pin on your microcontroller.", category: "Signal" },
    { partName: "DOUT Pin", description: "Digital output. Goes LOW when soil moisture exceeds a threshold set by the onboard potentiometer.", category: "Signal" },
  ],

  tiltsensor: [
    { partName: "Metal Ball", description: "A small conductive ball inside the housing. When tilted, it rolls to bridge the two contacts and close the circuit.", category: "Active Element" },
    { partName: "Housing", description: "The cylindrical tube that contains the ball and defines the tilt threshold angle.", category: "Main Body" },
    { partName: "Lead 1", description: "One of two equal terminals. Non-polarized.", category: "Terminals" },
    { partName: "Lead 2", description: "The other terminal. Circuit closes when the ball rolls to touch both leads simultaneously.", category: "Terminals" },
  ],

  temperaturesensor: [
    { partName: "Sensor Body", description: "The TO-92 or similar package containing the temperature-sensitive semiconductor. Temperature changes alter the silicon's electrical properties predictably.", category: "Main Body" },
    { partName: "VCC Pin", description: "Power supply. Typically 3.3V or 5V.", category: "Power" },
    { partName: "GND Pin", description: "Ground reference.", category: "Power" },
    { partName: "Data/Signal Pin", description: "Outputs temperature data either as analog voltage, PWM, or digital protocol (e.g. OneWire for DS18B20).", category: "Signal" },
  ],

  gassensor: [
    { partName: "Sensing Element", description: "A heated metal oxide surface (e.g. tin dioxide). Target gases react with it and change its resistance - the core of the detection.", category: "Active Element" },
    { partName: "Heater Coil", description: "An internal resistive coil that heats the sensing element to its operating temperature (typically 100-300°C). Required for gas detection.", category: "Active Element" },
    { partName: "VCC Pin", description: "Power supply. Typically 5V.", category: "Power" },
    { partName: "GND Pin", description: "Ground reference.", category: "Power" },
    { partName: "AOUT Pin", description: "Analog output. Higher voltage = higher gas concentration. Connect to an ADC pin.", category: "Signal" },
    { partName: "DOUT Pin", description: "Digital output. Goes HIGH when gas concentration exceeds threshold set by onboard potentiometer.", category: "Signal" },
  ],

  keypad4x4: [
    { partName: "Key Matrix", description: "16 buttons arranged in a 4x4 grid. Each button sits at the intersection of a row and column wire.", category: "Active Element" },
    { partName: "Row Pins (R1-R4)", description: "Four pins representing the horizontal rows. The microcontroller drives these one at a time during scanning.", category: "Terminals" },
    { partName: "Column Pins (C1-C4)", description: "Four pins representing the vertical columns. Read by the microcontroller to detect which key in an active row is pressed.", category: "Terminals" },
    { partName: "Membrane Layer", description: "The flexible printed circuit underneath the keys that makes contact when pressed.", category: "Structure" },
  ],

  dipswitch: [
    { partName: "Switch Array", description: "Multiple individual SPST (Single Pole Single Throw) switches in one package. Each can be independently set to ON or OFF.", category: "Active Element" },
    { partName: "Actuator Tabs", description: "The small tabs you slide to toggle each switch. Position toward ON connects the pins; toward OFF opens the circuit.", category: "Mechanical" },
    { partName: "Pin Pairs", description: "Each switch has two pins. When the switch is ON, the two pins are connected. When OFF, they are isolated.", category: "Terminals" },
  ],

};