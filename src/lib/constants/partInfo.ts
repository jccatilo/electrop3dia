import * as Info from "@/lib/constants/part-info";

export interface PartInfo {
  partName: string;
  description: string;
  category?: string;
}

export interface ComponentPartInfo {
  [key: string]: PartInfo[];
}

export const componentPartInfo: ComponentPartInfo = {
  ...Info.breadboard,
  ...Info.display,
  ...Info.general,
  ...Info.input,
  ...Info.motor,
  ...Info.output,
  ...Info.power,
  ...Info.powercontrol,
  ...Info.microcontroller,
};

// Helper function to get part info for a specific component
export const getPartInfoForComponent = (url: string): PartInfo[] => {
  const u = url.toLowerCase();

  // ── GENERAL ──
  if (u.includes('resistor')) return componentPartInfo.resistor;
  if (u.includes('polarized')) return componentPartInfo.polarizedcapacitor;
  if (u.includes('capacitor')) return componentPartInfo.capacitor;
  if (u.includes('inductor')) return componentPartInfo.inductor;
  if (u.includes('zener')) return componentPartInfo.zenerdiode;
  if (u.includes('diode') && !u.includes('photo')) return componentPartInfo.diode;

  // ── INPUT ──
  if (u.includes('pushbutton')) return componentPartInfo.pushbutton;
  if (u.includes('potentiometer')) return componentPartInfo.potentiometer;
  if (u.includes('slideswitch')) return componentPartInfo.slideswitch;
  if (u.includes('dipswitch')) return componentPartInfo.dipswitch;
  if (u.includes('keypad')) return componentPartInfo.keypad4x4;
  if (u.includes('photoresistor')) return componentPartInfo.photoresistor;
  if (u.includes('photodiode')) return componentPartInfo.photodiode;
  if (u.includes('ambientlight')) return componentPartInfo.ambientlightsensor;
  if (u.includes('flexsensor')) return componentPartInfo.flexsensor;
  if (u.includes('forcesensor')) return componentPartInfo.forcesensor;
  if (u.includes('pirsensor')) return componentPartInfo.pirsensor;
  if (u.includes('irsensor')) return componentPartInfo.irsensor;
  if (u.includes('ultrasonic') && u.includes('4')) return componentPartInfo.ultrasonicsensor4pin;
  if (u.includes('ultrasonic')) return componentPartInfo.ultrasonicsensor;
  if (u.includes('soilmoisture')) return componentPartInfo.soilmoisturesensor;
  if (u.includes('tiltsensor')) return componentPartInfo.tiltsensor;
  if (u.includes('temperaturesensor')) return componentPartInfo.temperaturesensor;
  if (u.includes('gassensor')) return componentPartInfo.gassensor;

  // ── OUTPUT ──
  if (u.includes('rgbled')) return componentPartInfo.rgbled;
  if (u.includes('neopixel')) return componentPartInfo.neopixel;
  if (u.includes('lightbulb')) return componentPartInfo.lightbulb;
  if (u.includes('piezo')) return componentPartInfo.piezobuzzer;
  if (u.includes('led')) return componentPartInfo.led;

  // ── POWER ──
  if (u.includes('9v') || u.includes('9battery')) return componentPartInfo.battery9v;
  if (u.includes('1.5') || u.includes('15battery')) return componentPartInfo.battery15v;
  if (u.includes('coincell')) return componentPartInfo.coincell;
  if (u.includes('solar')) return componentPartInfo.solarcell;

  // ── MOTOR ──
  if (u.includes('vibration')) return componentPartInfo.vibrationmotor;
  if (u.includes('encoder')) return componentPartInfo.dcmotorencoder;
  if (u.includes('dcmotor')) return componentPartInfo.dcmotor;
  if (u.includes('microservo')) return componentPartInfo.microservo;
  if (u.includes('hobbygear')) return componentPartInfo.hobbygearmotor;

  // ── DISPLAY ──
  if (u.includes('7segmentclock')) return componentPartInfo.sevensegmentclock;
  if (u.includes('7segment')) return componentPartInfo.sevensegmentdisplay;
  if (u.includes('lcd16x2') && u.includes('i2c')) return componentPartInfo.lcd16x2i2c;
  if (u.includes('lcd16x2')) return componentPartInfo.lcd16x2;

  // ── BREADBOARD ──
  if (u.includes('breadboard63')) return componentPartInfo.breadboard63r;
  if (u.includes('breadboardsmall')) return componentPartInfo.breadboardsmall;
  if (u.includes('breadboardmini')) return componentPartInfo.breadboardmini;

  // ── POWER CONTROL ──
  if (u.includes('npntransistor')) return componentPartInfo.npntransistor;
  if (u.includes('pnptransistor')) return componentPartInfo.pnptransistor;
  if (u.includes('nmostransistor')) return componentPartInfo.nmostransistor;
  if (u.includes('pmostransistor')) return componentPartInfo.pmostransistor;
  if (u.includes('nmosmosfet')) return componentPartInfo.nmosmosfet;
  if (u.includes('pmosmosfet')) return componentPartInfo.pmosmosfet;
  if (u.includes('tip120')) return componentPartInfo.tip120;

  // ── MICROCONTROLLER ──
  if (u.includes('trioeboard')) return componentPartInfo.trioeboard;
  if (u.includes('trioebreadboard')) return componentPartInfo.trioebreadboard;

  // ── DEFAULT ──
  return componentPartInfo.resistor;
};