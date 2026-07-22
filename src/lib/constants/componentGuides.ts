import * as Guides from './component-guides/index';

// ==================== COMPONENT GUIDES ====================

export interface GuideSection {
  title: string;
  content: string | string[];
  type?: 'paragraph' | 'list' | 'warning' | 'tip';
  icon?: string;
}

export interface ComponentGuide {
  title: string;
  icon?: string;
  sections: GuideSection[];
  commonMistakes?: string[];
  proTips?: string[];
}

const componentGuides = {
  ...Guides.breadboard,
  ...Guides.display,
  ...Guides.general,
  ...Guides.input,
  ...Guides.motor,
  ...Guides.output,
  ...Guides.power,
  ...Guides.powercontrol,
  ...Guides.microcontroller,


};

// Helper function to get guide by component URL
export const getGuideByUrl = (url: string): ComponentGuide | null => {
  const u = url.toLowerCase();
  // general
  if (u.includes('resistor')) return componentGuides.resistor;
  if (u.includes('polarized')) return componentGuides.polarizedcapacitor;
  if (u.includes('capacitor')) return componentGuides.capacitor;
  if (u.includes('inductor')) return componentGuides.inductor;
  if (u.includes('zener')) return componentGuides.zenerdiode;
  if (u.includes('diode') && !u.includes('photo')) return componentGuides.diode;
  // input
  if (u.includes('pushbutton')) return componentGuides.pushbutton;
  if (u.includes('potentiometer')) return componentGuides.potentiometer;
  if (u.includes('slideswitch')) return componentGuides.slideswitch;
  if (u.includes('dipswitch')) return componentGuides.dipswitch;
  if (u.includes('keypad')) return componentGuides.keypad4x4;
  if (u.includes('photoresistor')) return componentGuides.photoresistor;
  if (u.includes('photodiode')) return componentGuides.photodiode;
  if (u.includes('ambientlight')) return componentGuides.ambientlightsensor;
  if (u.includes('flexsensor')) return componentGuides.flexsensor;
  if (u.includes('forcesensor')) return componentGuides.forcesensor;
  if (u.includes('pirsensor')) return componentGuides.pirsensor;
  if (u.includes('irsensor')) return componentGuides.irsensor;
  if (u.includes('ultrasonic') && u.includes('4')) return componentGuides.ultrasonicsensor4pin;
  if (u.includes('ultrasonic')) return componentGuides.ultrasonicsensor;
  if (u.includes('soilmoisture')) return componentGuides.soilmoisturesensor;
  if (u.includes('tiltsensor')) return componentGuides.tiltsensor;
  if (u.includes('temperaturesensor')) return componentGuides.temperaturesensor;
  if (u.includes('gassensor')) return componentGuides.gassensor;
  // output
  if (u.includes('rgbled')) return componentGuides.rgbled;
  if (u.includes('neopixel')) return componentGuides.neopixel;
  if (u.includes('lightbulb')) return componentGuides.lightbulb;
  if (u.includes('piezo')) return componentGuides.piezobuzzer;
  if (u.includes('led')) return componentGuides.led;
  // power
  if (u.includes('9v') || u.includes('9battery')) return componentGuides.battery9v;
  if (u.includes('1.5') || u.includes('15battery')) return componentGuides.battery15v;
  if (u.includes('coincell')) return componentGuides.coincell;
  if (u.includes('solar')) return componentGuides.solarcell;
  // motor
  if (u.includes('vibration')) return componentGuides.vibrationmotor;
  if (u.includes('encoder')) return componentGuides.dcmotorencoder;
  if (u.includes('dcmotor')) return componentGuides.dcmotor;
  if (u.includes('microservo')) return componentGuides.microservo;
  if (u.includes('hobbygear')) return componentGuides.hobbygearmotor;
  // display
  if (u.includes('7segmentclock')) return componentGuides.sevensegmentclock;
  if (u.includes('7segment')) return componentGuides.sevensegmentdisplay;
  if (u.includes('lcd16x2') && u.includes('i2c')) return componentGuides.lcd16x2i2c;
  if (u.includes('lcd16x2')) return componentGuides.lcd16x2;
  // breadboard
  if (u.includes('breadboard63')) return componentGuides.breadboard63r;
  if (u.includes('breadboardsmall')) return componentGuides.breadboardsmall;
  if (u.includes('breadboardmini')) return componentGuides.breadboardmini;
  // power control
  if (u.includes('npntransistor')) return componentGuides.npntransistor;
  if (u.includes('pnptransistor')) return componentGuides.pnptransistor;
  if (u.includes('nmostransistor')) return componentGuides.nmostransistor;
  if (u.includes('pmostransistor')) return componentGuides.pmostransistor;
  if (u.includes('nmosmosfet')) return componentGuides.nmosmosfet;
  if (u.includes('pmosmosfet')) return componentGuides.pmosmosfet;
  if (u.includes('tip120')) return componentGuides.tip120;
  // microcontroller
  if (u.includes('trioeboard')) return componentGuides.trioeboard;
  if (u.includes('trioebreadboard')) return componentGuides.trioebreadboard;
  return null;
}
