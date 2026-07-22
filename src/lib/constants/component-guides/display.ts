
export const displayComponentGuide = {

  sevensegmentdisplay: {
    title: '7-Segment Display Guide',
    icon: 'Monitor',
    sections: [
      { title: 'What is a 7-Segment Display?', type: 'paragraph', icon: 'Info', content: 'A 7-segment display uses 7 LED segments (A-G) arranged to display digits 0-9 and some letters. Each segment is an individual LED controlled independently.' },
      { title: 'Common Cathode vs Common Anode', type: 'list', icon: 'Layers', content: ['Common Cathode (CC): COM pins to GND. Send HIGH to light segments.', 'Common Anode (CA): COM pins to VCC. Send LOW to light segments (inverted).', 'Check your specific display datasheet to confirm type'] },
      { title: 'Segment to Digit Mapping', type: 'list', icon: 'Hash', content: ['0: A,B,C,D,E,F on (G off)', '1: B,C on only', '2: A,B,D,E,G on', '3: A,B,C,D,G on', '8: All segments on (good for testing)'] },
      { title: 'Current Limiting', type: 'list', icon: 'Zap', content: ['Each segment needs its own current-limiting resistor (~220-470 ohm)', 'Multiple segments on simultaneously share current - verify brightness is acceptable', 'Use shift registers (74HC595) to reduce pin count'] },
    ],
    proTips: ['Test with all segments on first (displays "8") to verify wiring', 'Use a 74HC595 shift register to drive from only 3 microcontroller pins', 'For multiple digits use multiplexing - display one digit at a time rapidly'],
    commonMistakes: ['Forgetting current-limiting resistors on each segment', 'Mixing up CC and CA (segments on or inverted logic)', 'Trying to multiplex without reducing resistor values accordingly'],
  },

  sevensegmentclock: {
    title: '7-Segment Clock Display Guide',
    icon: 'Monitor',
    sections: [
      { title: 'What is a 7-Segment Clock Display?', type: 'paragraph', icon: 'Info', content: 'A 7-segment clock display combines four digits with a colon separator specifically for clock applications. The colon LEDs blink at 1Hz to indicate the clock is running.' },
      { title: 'Driving Options', type: 'list', icon: 'Layers', content: ['Direct drive: connect all segments and digit pins to MCU (many pins)', 'I2C backpack (HT16K33): control all digits with just 2 wires', 'SPI driver: fast update for multiplexed displays', 'Adafruit 7-segment backpack library for HT16K33 modules'] },
      { title: 'RTC Integration', type: 'list', icon: 'Cpu', content: ['Pair with DS3231 or DS1307 RTC chip via I2C', 'RTC maintains time even when main power is off (coin cell backup)', 'Read hours and minutes from RTC and write to display each second', 'Toggle colon state each second for the blinking effect'] },
    ],
    proTips: ['Use a DS3231 RTC (more accurate than DS1307) for clock projects', 'Dim display in the evening using PWM on the brightness control', 'Add a button to set time without reprogramming'],
    commonMistakes: ['Using millis() for timekeeping (drifts noticeably over days)', 'Not accounting for 12h/24h format in display logic', 'Forgetting the coin cell backup for the RTC'],
  },

  lcd16x2: {
    title: 'LCD 16x2 Guide',
    icon: 'Monitor',
    sections: [
      { title: 'What is an LCD 16x2?', type: 'paragraph', icon: 'Info', content: 'A 16x2 LCD displays 2 rows of 16 characters each using the industry-standard HD44780 controller. It is driven via a parallel interface requiring up to 10 pins from the microcontroller.' },
      { title: 'Pin Connections (4-bit mode)', type: 'list', icon: 'Grid', content: ['VSS (1): GND', 'VDD (2): 5V', 'VO (3): Contrast - connect potentiometer wiper (10k pot)', 'RS (4): Register Select - GPIO', 'RW (5): Read/Write - tie to GND for write-only', 'E (6): Enable - GPIO', 'D4-D7 (11-14): Data pins - 4 GPIOs', 'A (15): Backlight + through 220 ohm resistor', 'K (16): Backlight GND'] },
      { title: 'Arduino Code', type: 'list', icon: 'Cpu', content: ['#include <LiquidCrystal.h>', 'LiquidCrystal lcd(RS, E, D4, D5, D6, D7),', 'lcd.begin(16, 2),', 'lcd.print("Hello World!"),', 'lcd.setCursor(0, 1), // column 0, row 1'] },
    ],
    proTips: ['Adjust VO contrast pot until you can see the character blocks clearly', 'Use lcd.clear() sparingly - it is slow and causes flicker', 'Create custom characters with lcd.createChar() for symbols'],
    commonMistakes: ['Not connecting the contrast pin (screen appears blank)', 'Wiring RS and Enable pins swapped', 'Using lcd.clear() in a fast loop causing visible flicker'],
  },

  lcd16x2i2c: {
    title: 'LCD 16x2 I2C Guide',
    icon: 'Monitor',
    sections: [
      { title: 'What is the I2C LCD?', type: 'paragraph', icon: 'Info', content: 'An I2C LCD module combines a standard 16x2 LCD with a PCF8574 I2C backpack. It reduces wiring from 10 pins to just 4 (VCC, GND, SDA, SCL).' },
      { title: 'Pin Connections', type: 'list', icon: 'Grid', content: ['VCC: 5V', 'GND: Ground', 'SDA: I2C data - connect to MCU SDA (Arduino: A4)', 'SCL: I2C clock - connect to MCU SCL (Arduino: A5)', 'Default I2C address: 0x27 or 0x3F'] },
      { title: 'Finding the I2C Address', type: 'list', icon: 'Hash', content: ['Run an I2C scanner sketch to find the address', 'Common addresses: 0x27 (PCF8574) or 0x3F (PCF8574A)', 'Some modules have solder jumpers to change address', 'Up to 8 LCD modules can share the same I2C bus with different addresses'] },
      { title: 'Arduino Library', type: 'list', icon: 'Cpu', content: ['Install: LiquidCrystal_I2C by Frank de Brabander', 'LiquidCrystal_I2C lcd(0x27, 16, 2),', 'lcd.init(), lcd.backlight(),', 'lcd.print("Hello!"),'] },
    ],
    proTips: ['Always run the I2C scanner first to confirm your module address', 'Use lcd.noBacklight() to save power when display is not needed', 'For long I2C cables add 4.7k pull-ups on SDA and SCL'],
    commonMistakes: ['Using wrong I2C address in code (display stays blank)', 'Forgetting lcd.init() and lcd.backlight() in setup()', 'Connecting SDA/SCL to wrong pins (varies by Arduino board)'],
  },

}