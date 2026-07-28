import {ComponentCategory} from "@/types/Component";

export const display = {
  "7segmentdisplay": {
    guide: {
      title: '7-Segment Display Guide',
      icon: 'Monitor',
      sections: [
        { title: 'What is a 7-Segment Display?', type: 'paragraph', icon: 'Info', content: 'A 7-segment display uses 7 LED segments (A-G) arranged to display digits 0-9 and some letters. Each segment is an individual LED controlled independently.' },
        { title: 'Common Cathode vs Common Anode', type: 'list', icon: 'Layers', content: ['Common Cathode (CC): COM pins to GND. Send HIGH to light segments.', 'Common Anode (CA): COM pins to VCC. Send LOW to light segments (inverted).', 'Check your specific display datasheet to confirm type'] },
        { title: 'Segment to Digit Mapping', type: 'list', icon: 'Hash', content: ['0: A,B,C,D,E,F on (G off)', '1: B,C on only', '2: A,B,D,E,G on', '3: A,B,C,D,G on', '8: All segments on (good for testing)'] },
        { title: 'Current Limiting', type: 'list', icon: 'Zap', content: ['Each segment needs its own current-limiting resistor (~220-470 ohm)', 'Multiple segments on simultaneously share current - verify brightness is acceptable', 'Use shift registers (74HC595) to reduce pin count'] },
      ],
      proTips: [
        'Test with all segments on first (displays "8") to verify wiring',
        'Use a 74HC595 shift register to drive from only 3 microcontroller pins',
        'For multiple digits use multiplexing - display one digit at a time rapidly',
      ],
      commonMistakes: [
        'Forgetting current-limiting resistors on each segment',
        'Mixing up CC and CA (segments on or inverted logic)',
        'Trying to multiplex without reducing resistor values accordingly',
      ],
    },
    partInfo: [
      { partName: 'Segment A', description: 'Top horizontal segment.', category: 'Segments' },
      { partName: 'Segment B', description: 'Upper right vertical segment.', category: 'Segments' },
      { partName: 'Segment C', description: 'Lower right vertical segment.', category: 'Segments' },
      { partName: 'Segment D', description: 'Bottom horizontal segment.', category: 'Segments' },
      { partName: 'Segment E', description: 'Lower left vertical segment.', category: 'Segments' },
      { partName: 'Segment F', description: 'Upper left vertical segment.', category: 'Segments' },
      { partName: 'Segment G', description: 'Middle horizontal segment.', category: 'Segments' },
      { partName: 'Common Pin', description: 'Shared anode (+) or cathode (-) for all segments. Common cathode: GND. Common anode: VCC.', category: 'Terminals' },
    ],
    trivia: [
      { fact: "7-segment displays use just 7 LED segments to represent any digit - a design from the 1950s.", year: "1950s" },
      { fact: "The arrangement was chosen so that a single stuck segment causes the least confusion." },
      { fact: "The number '8' uses all 7 segments, making it the best way to test if all segments work!" },
      { fact: "Early 7-segment displays used vacuum fluorescent tubes, not LEDs. They glowed a distinctive blue-green color seen in old electronics." },
    ]
  },

  "7segmentclockdisplay": {
    guide: {
      title: '7-Segment Clock Display Guide',
      icon: 'Monitor',
      sections: [
        { title: 'What is a 7-Segment Clock Display?', type: 'paragraph', icon: 'Info', content: 'A 7-segment clock display combines four digits with a colon separator specifically for clock applications. The colon LEDs blink at 1Hz to indicate the clock is running.' },
        { title: 'Driving Options', type: 'list', icon: 'Layers', content: ['Direct drive: connect all segments and digit pins to MCU (many pins)', 'I2C backpack (HT16K33): control all digits with just 2 wires', 'SPI driver: fast update for multiplexed displays', 'Adafruit 7-segment backpack library for HT16K33 modules'] },
        { title: 'RTC Integration', type: 'list', icon: 'Cpu', content: ['Pair with DS3231 or DS1307 RTC chip via I2C', 'RTC maintains time even when main power is off (coin cell backup)', 'Read hours and minutes from RTC and write to display each second', 'Toggle colon state each second for the blinking effect'] },
      ],
      proTips: [
        'Use a DS3231 RTC (more accurate than DS1307) for clock projects',
        'Dim display in the evening using PWM on the brightness control',
        'Add a button to set time without reprogramming',
      ],
      commonMistakes: [
        'Using millis() for timekeeping (drifts noticeably over days)',
        'Not accounting for 12h/24h format in display logic',
        'Forgetting the coin cell backup for the RTC',
      ],
    },
    partInfo: [
      { partName: 'Digit 1 & 2', description: 'Left pair of 7-segment digits displaying the hours.', category: 'Display' },
      { partName: 'Digit 3 & 4', description: 'Right pair of 7-segment digits displaying the minutes.', category: 'Display' },
      { partName: 'Colon LEDs', description: 'Two dots between the digit pairs. Usually blink at 1Hz to indicate the clock is running.', category: 'Display' },
      { partName: 'Control Pins', description: 'Interface pins (often I2C or direct segment drive) for the microcontroller to update the display.', category: 'Signal' },
    ],
    trivia: [
      { fact: "The colon between hours and minutes on a clock display is often a separate LED or two dots - NOT part of the standard 7-segment spec." },
      { fact: "Some clock displays add extra segments just for the colon, and they typically blink once per second to visualize the passing of time." },
      { fact: "Digital clocks became widespread in the 1970s thanks to the LED 7-segment display, replacing analog clock faces in appliances worldwide.", year: "1970s" },
      { fact: "The RTC (Real Time Clock) chip behind most digital clocks can keep accurate time for years on a tiny coin cell battery." },
    ]
  },

  lcd16x2: {
    guide: {
      title: 'LCD 16x2 Guide',
      icon: 'Monitor',
      sections: [
        { title: 'What is an LCD 16x2?', type: 'paragraph', icon: 'Info', content: 'A 16x2 LCD displays 2 rows of 16 characters each using the industry-standard HD44780 controller. It is driven via a parallel interface requiring up to 10 pins from the microcontroller.' },
        { title: 'Pin Connections (4-bit mode)', type: 'list', icon: 'Grid', content: ['VSS (1): GND', 'VDD (2): 5V', 'VO (3): Contrast - connect potentiometer wiper (10k pot)', 'RS (4): Register Select - GPIO', 'RW (5): Read/Write - tie to GND for write-only', 'E (6): Enable - GPIO', 'D4-D7 (11-14): Data pins - 4 GPIOs', 'A (15): Backlight + through 220 ohm resistor', 'K (16): Backlight GND'] },
        { title: 'Arduino Code', type: 'list', icon: 'Cpu', content: ['#include <LiquidCrystal.h>', 'LiquidCrystal lcd(RS, E, D4, D5, D6, D7),', 'lcd.begin(16, 2),', 'lcd.print("Hello World!"),', 'lcd.setCursor(0, 1), // column 0, row 1'] },
      ],
      proTips: [
        'Adjust VO contrast pot until you can see the character blocks clearly',
        'Use lcd.clear() sparingly - it is slow and causes flicker',
        'Create custom characters with lcd.createChar() for symbols',
      ],
      commonMistakes: [
        'Not connecting the contrast pin (screen appears blank)',
        'Wiring RS and Enable pins swapped',
        'Using lcd.clear() in a fast loop causing visible flicker',
      ],
    },
    partInfo: [
      { partName: 'LCD Panel', description: 'The 16x2 liquid crystal display showing 2 rows of 16 characters each. Uses the HD44780 compatible controller.', category: 'Display' },
      { partName: 'VSS / GND', description: 'Pin 1. Ground reference.', category: 'Power' },
      { partName: 'VDD / VCC', description: 'Pin 2. Power supply, typically 5V.', category: 'Power' },
      { partName: 'VO / Contrast', description: 'Pin 3. Contrast adjustment. Connect to a potentiometer wiper to set display contrast.', category: 'Control' },
      { partName: 'RS Pin', description: 'Pin 4. Register select. LOW = command mode, HIGH = data mode.', category: 'Signal' },
      { partName: 'RW Pin', description: 'Pin 5. Read/Write select. Usually tied to GND for write-only operation.', category: 'Signal' },
      { partName: 'E Pin', description: 'Pin 6. Enable. Pulse HIGH to latch data or command into the display.', category: 'Signal' },
      { partName: 'Data Pins (D0-D7)', description: 'Pins 7-14. Parallel data bus. 4-bit mode uses only D4-D7.', category: 'Signal' },
      { partName: 'Backlight Pins (A/K)', description: 'Pins 15-16. Anode and Cathode for the LED backlight. Connect through a resistor.', category: 'Power' },
    ],
    trivia: [
      { fact: "The 'LCD' in LCD screens stands for Liquid Crystal Display - the liquid crystals don't emit light themselves, they just twist to block a backlight." },
      { fact: "The HD44780 controller chip behind most 16x2 LCDs was released by Hitachi in 1987 and became so dominant that every modern LCD still speaks the same protocol!", year: "1987" },
      { fact: "LCD technology was discovered in 1888 by Friedrich Reinitzer, but it took nearly 80 years before the first practical LCD display was developed.", year: "1888" },
      { fact: "A 16x2 LCD has 32 character positions, each made of a 5x8 dot matrix - that's 1,280 individual tiny squares controlled by one chip!" },
    ]
  },

  "lcd16x2_i2c": {
    guide: {
      title: 'LCD 16x2 I2C Guide',
      icon: 'Monitor',
      sections: [
        { title: 'What is the I2C LCD?', type: 'paragraph', icon: 'Info', content: 'An I2C LCD module combines a standard 16x2 LCD with a PCF8574 I2C backpack. It reduces wiring from 10 pins to just 4 (VCC, GND, SDA, SCL).' },
        { title: 'Pin Connections', type: 'list', icon: 'Grid', content: ['VCC: 5V', 'GND: Ground', 'SDA: I2C data - connect to MCU SDA (Arduino: A4)', 'SCL: I2C clock - connect to MCU SCL (Arduino: A5)', 'Default I2C address: 0x27 or 0x3F'] },
        { title: 'Finding the I2C Address', type: 'list', icon: 'Hash', content: ['Run an I2C scanner sketch to find the address', 'Common addresses: 0x27 (PCF8574) or 0x3F (PCF8574A)', 'Some modules have solder jumpers to change address', 'Up to 8 LCD modules can share the same I2C bus with different addresses'] },
        { title: 'Arduino Library', type: 'list', icon: 'Cpu', content: ['Install: LiquidCrystal_I2C by Frank de Brabander', 'LiquidCrystal_I2C lcd(0x27, 16, 2),', 'lcd.init(), lcd.backlight(),', 'lcd.print("Hello!"),'] },
      ],
      proTips: [
        'Always run the I2C scanner first to confirm your module address',
        'Use lcd.noBacklight() to save power when display is not needed',
        'For long I2C cables add 4.7k pull-ups on SDA and SCL',
      ],
      commonMistakes: [
        'Using wrong I2C address in code (display stays blank)',
        'Forgetting lcd.init() and lcd.backlight() in setup()',
        'Connecting SDA/SCL to wrong pins (varies by Arduino board)',
      ],
    },
    partInfo: [
      { partName: 'LCD Panel', description: 'Same 16x2 HD44780 display panel, but controlled via an I2C backpack module instead of 8 parallel data pins.', category: 'Display' },
      { partName: 'VCC Pin', description: 'Power supply for both the LCD and I2C module. Typically 5V.', category: 'Power' },
      { partName: 'GND Pin', description: 'Ground reference.', category: 'Power' },
      { partName: 'SDA Pin', description: 'I2C data line. Connect to the SDA pin of your microcontroller.', category: 'Signal' },
      { partName: 'SCL Pin', description: 'I2C clock line. Connect to the SCL pin of your microcontroller. Default address is usually 0x27 or 0x3F.', category: 'Signal' },
      { partName: 'I2C Backpack Module', description: 'The PCF8574 chip soldered to the back. Converts I2C serial data into the 8-bit parallel signals the LCD needs.', category: 'Active Element' },
    ],
    trivia: [
      { fact: "The I2C interface on this LCD lets you control 16 pins using just 2 wires!" },
      { fact: "I2C was invented by Philips in 1982 to let chips on a circuit board talk to each other without a tangle of wires.", year: "1982" },
      { fact: "The '2' in I2C stands for 'Inter-Integrated Circuit,' and it's used in billions of devices today." },
      { fact: "Each I2C device has a unique address - you can connect up to 127 different devices on the same two wires!" },
    ]
  },
} satisfies ComponentCategory;