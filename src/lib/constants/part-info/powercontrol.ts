
export const powerControlPartInfo = {
  npntransistor: [
    { partName: "Transistor Body", description: "The TO-92 or similar plastic package housing the NPN semiconductor die.", category: "Main Body" },
    { partName: "Base (B)", description: "Control pin. A small current flowing into the base allows a much larger current to flow from collector to emitter.", category: "Terminals" },
    { partName: "Collector (C)", description: "The pin connected to the load and positive supply. Main current flows in through here.", category: "Terminals" },
    { partName: "Emitter (E)", description: "Current exits through the emitter to ground. Usually identified by the flat side of the TO-92 package.", category: "Terminals" },
  ],

  pnptransistor: [
    { partName: "Transistor Body", description: "The TO-92 or similar plastic package housing the PNP semiconductor die.", category: "Main Body" },
    { partName: "Base (B)", description: "Control pin. Pulling the base LOW (toward ground) allows current to flow from emitter to collector.", category: "Terminals" },
    { partName: "Collector (C)", description: "Connected toward ground through the load. Current flows out through the collector in PNP operation.", category: "Terminals" },
    { partName: "Emitter (E)", description: "Connected to the positive supply. Current flows in through the emitter.", category: "Terminals" },
  ],

  nmostransistor: [
    { partName: "Transistor Body", description: "Small signal nMOS transistor in SOT-23 or TO-92 package. Voltage-controlled with near-zero gate current draw.", category: "Main Body" },
    { partName: "Gate (G)", description: "Voltage control input. Applying voltage here opens the channel between drain and source. Draws almost no current.", category: "Terminals" },
    { partName: "Drain (D)", description: "Current flows in through the drain when the gate is active.", category: "Terminals" },
    { partName: "Source (S)", description: "Current flows out through the source to ground.", category: "Terminals" },
  ],

  pmostransistor: [
    { partName: "Transistor Body", description: "Small signal pMOS transistor. Conducts when gate voltage is pulled LOW relative to the source.", category: "Main Body" },
    { partName: "Gate (G)", description: "Control input. Applying LOW voltage relative to source turns the transistor ON. Draws near-zero current.", category: "Terminals" },
    { partName: "Drain (D)", description: "Current flows out through the drain toward the load.", category: "Terminals" },
    { partName: "Source (S)", description: "Connected to the positive supply. Current flows in through the source.", category: "Terminals" },
  ],

  nmosmosfet: [
    { partName: "MOSFET Body", description: "Power nMOS transistor capable of switching high currents. Voltage-controlled - gate draws virtually no current.", category: "Main Body" },
    { partName: "Gate (G)", description: "Voltage input that controls channel conductivity. Typically needs 3-10V to fully turn on (Vgs threshold).", category: "Terminals" },
    { partName: "Drain (D)", description: "Connected to the load and positive supply. Can handle hundreds of amps on power MOSFETs.", category: "Terminals" },
    { partName: "Source (S)", description: "Connected to ground. Current exits through the source.", category: "Terminals" },
    { partName: "Body Diode", description: "An intrinsic diode between drain and source inherent to MOSFET construction. Can conduct reverse current in some circuits.", category: "Internal" },
  ],

  pmosmosfet: [
    { partName: "MOSFET Body", description: "Power pMOS transistor used for high-side switching - controlling the positive rail between supply and load.", category: "Main Body" },
    { partName: "Gate (G)", description: "Control input. Gate voltage must be pulled LOW relative to source to turn on. Logic-level pMOS needs only 3-5V gate drive.", category: "Terminals" },
    { partName: "Drain (D)", description: "Connected to the load output. Current flows from source through channel to drain.", category: "Terminals" },
    { partName: "Source (S)", description: "Connected to the positive supply rail. Current enters through the source.", category: "Terminals" },
    { partName: "Body Diode", description: "Intrinsic reverse diode. Conducts if drain goes above source voltage.", category: "Internal" },
  ],

  tip120: [
    { partName: "TIP120 Body", description: "TO-220 package containing a Darlington pair - two transistors in series with combined gain up to 1000x.", category: "Main Body" },
    { partName: "Base (B)", description: "Control input. A small signal (as low as 5mA from an Arduino) triggers the Darlington pair to conduct several amperes.", category: "Terminals" },
    { partName: "Collector (C)", description: "Connect to the load and positive supply. The TIP120 can handle up to 5A continuous and 60V.", category: "Terminals" },
    { partName: "Emitter (E)", description: "Connect to ground. Current exits here after passing through the load.", category: "Terminals" },
    { partName: "Mounting Tab", description: "The metal tab is electrically connected to the collector. Can be bolted to a heatsink for high-current applications.", category: "Thermal" },
  ],

}