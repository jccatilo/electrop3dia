
export const outputPartInfo = {
  led: [
    { partName: "LED Lens / Epoxy Body", description: "The colored or clear dome that focuses and diffuses light. Made of epoxy resin encapsulating the LED chip inside.", category: "Optics" },
    { partName: "Anode (+)", description: "The longer lead. Current flows into the LED here. Connect to positive voltage through a current-limiting resistor.", category: "Terminals" },
    { partName: "Cathode (-)", description: "The shorter lead, also indicated by a flat edge on the base. Current exits here. Connect to ground.", category: "Terminals" },
    { partName: "LED Chip", description: "The tiny semiconductor die inside the epoxy that emits light when current flows through the P-N junction.", category: "Active Element" },
  ],

  rgbled: [
    { partName: "Red LED Element", description: "One of three internal LEDs. Controls the red channel. Brightness set by PWM or resistor value.", category: "Active Element" },
    { partName: "Green LED Element", description: "Controls the green channel. Combined with red and blue, enables the full color spectrum.", category: "Active Element" },
    { partName: "Blue LED Element", description: "Controls the blue channel. Blue was the hardest color LED to develop - a Nobel Prize-winning achievement.", category: "Active Element" },
    { partName: "Common Pin", description: "Shared anode (+) or cathode (-) depending on type. Common cathode: connect to GND. Common anode: connect to VCC.", category: "Terminals" },
    { partName: "R, G, B Pins", description: "Individual control pins for each color channel. Connect through current-limiting resistors to your microcontroller.", category: "Terminals" },
  ],

  lightbulb: [
    { partName: "Glass Envelope", description: "The glass bulb that contains the filament and inert gas. Protects the filament and controls the light output.", category: "Main Body" },
    { partName: "Filament", description: "The thin tungsten wire that glows white-hot when current passes through it. Operates at around 2,500°C.", category: "Active Element" },
    { partName: "Base Contacts", description: "The metal contacts at the bottom that connect to the power supply.", category: "Terminals" },
    { partName: "Inert Gas Fill", description: "Argon or nitrogen gas inside the bulb that slows filament evaporation and extends bulb life.", category: "Structure" },
  ],

  neopixel: [
    { partName: "RGB LED Array", description: "Three individual LEDs (red, green, blue) combined in one package, capable of producing over 16 million colors.", category: "Active Element" },
    { partName: "Integrated Control IC", description: "A tiny microchip inside each NeoPixel that receives serial color data and drives the three LEDs independently.", category: "Active Element" },
    { partName: "VCC Pin", description: "Power supply. Connect to 5V. Each NeoPixel can draw up to 60mA at full white brightness.", category: "Power" },
    { partName: "GND Pin", description: "Ground reference.", category: "Power" },
    { partName: "DIN Pin", description: "Data input. Receives the serial color data from the microcontroller or previous NeoPixel in the chain.", category: "Signal" },
    { partName: "DOUT Pin", description: "Data output. Passes remaining color data to the next NeoPixel in the chain.", category: "Signal" },
  ],

  piezobuzzer: [
    { partName: "Piezoelectric Disc", description: "A ceramic disc bonded to a metal plate. When voltage is applied, it flexes. Rapid flexing creates sound waves.", category: "Active Element" },
    { partName: "Housing", description: "The plastic casing that amplifies and directs the sound from the vibrating disc.", category: "Structure" },
    { partName: "Positive Pin (+)", description: "Connect to your signal or PWM output. The frequency of the signal determines the pitch of the sound.", category: "Terminals" },
    { partName: "Negative Pin (-)", description: "Connect to ground to complete the circuit.", category: "Terminals" },
  ],

};