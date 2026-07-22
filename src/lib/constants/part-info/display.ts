
export const displayPartInfo = {
  sevensegmentdisplay: [
    { partName: "Segment A", description: "Top horizontal segment.", category: "Segments" },
    { partName: "Segment B", description: "Upper right vertical segment.", category: "Segments" },
    { partName: "Segment C", description: "Lower right vertical segment.", category: "Segments" },
    { partName: "Segment D", description: "Bottom horizontal segment.", category: "Segments" },
    { partName: "Segment E", description: "Lower left vertical segment.", category: "Segments" },
    { partName: "Segment F", description: "Upper left vertical segment.", category: "Segments" },
    { partName: "Segment G", description: "Middle horizontal segment.", category: "Segments" },
    { partName: "Common Pin", description: "Shared anode (+) or cathode (-) for all segments. Common cathode: GND. Common anode: VCC.", category: "Terminals" },
  ],

  sevensegmentclock: [
    { partName: "Digit 1 & 2", description: "Left pair of 7-segment digits displaying the hours.", category: "Display" },
    { partName: "Digit 3 & 4", description: "Right pair of 7-segment digits displaying the minutes.", category: "Display" },
    { partName: "Colon LEDs", description: "Two dots between the digit pairs. Usually blink at 1Hz to indicate the clock is running.", category: "Display" },
    { partName: "Control Pins", description: "Interface pins (often I2C or direct segment drive) for the microcontroller to update the display.", category: "Signal" },
  ],

  lcd16x2: [
    { partName: "LCD Panel", description: "The 16x2 liquid crystal display showing 2 rows of 16 characters each. Uses the HD44780 compatible controller.", category: "Display" },
    { partName: "VSS / GND", description: "Pin 1. Ground reference.", category: "Power" },
    { partName: "VDD / VCC", description: "Pin 2. Power supply, typically 5V.", category: "Power" },
    { partName: "VO / Contrast", description: "Pin 3. Contrast adjustment. Connect to a potentiometer wiper to set display contrast.", category: "Control" },
    { partName: "RS Pin", description: "Pin 4. Register select. LOW = command mode, HIGH = data mode.", category: "Signal" },
    { partName: "RW Pin", description: "Pin 5. Read/Write select. Usually tied to GND for write-only operation.", category: "Signal" },
    { partName: "E Pin", description: "Pin 6. Enable. Pulse HIGH to latch data or command into the display.", category: "Signal" },
    { partName: "Data Pins (D0-D7)", description: "Pins 7-14. Parallel data bus. 4-bit mode uses only D4-D7.", category: "Signal" },
    { partName: "Backlight Pins (A/K)", description: "Pins 15-16. Anode and Cathode for the LED backlight. Connect through a resistor.", category: "Power" },
  ],

  lcd16x2i2c: [
    { partName: "LCD Panel", description: "Same 16x2 HD44780 display panel, but controlled via an I2C backpack module instead of 8 parallel data pins.", category: "Display" },
    { partName: "VCC Pin", description: "Power supply for both the LCD and I2C module. Typically 5V.", category: "Power" },
    { partName: "GND Pin", description: "Ground reference.", category: "Power" },
    { partName: "SDA Pin", description: "I2C data line. Connect to the SDA pin of your microcontroller.", category: "Signal" },
    { partName: "SCL Pin", description: "I2C clock line. Connect to the SCL pin of your microcontroller. Default address is usually 0x27 or 0x3F.", category: "Signal" },
    { partName: "I2C Backpack Module", description: "The PCF8574 chip soldered to the back. Converts I2C serial data into the 8-bit parallel signals the LCD needs.", category: "Active Element" },
  ],

};