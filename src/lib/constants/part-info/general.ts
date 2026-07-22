
export const generalPartInfo = {
  resistor: [
    { partName: "Resistor Body", description: "The main ceramic or carbon body that contains the resistive element. It limits the flow of electric current in a circuit.", category: "Main Body" },
    { partName: "Band 1", description: "First color band. Represents the first significant digit of the resistance value.", category: "Markings" },
    { partName: "Band 2", description: "Second color band. Represents the second significant digit of the resistance value.", category: "Markings" },
    { partName: "Band 3", description: "Third color band. Represents the multiplier - the power of ten to multiply the first two digits by.", category: "Markings" },
    { partName: "Band 4", description: "Fourth color band. Represents the tolerance - how close the actual resistance is to the stated value (e.g. gold = ±5%).", category: "Markings" },
    { partName: "Leads", description: "Tinned copper wires on both ends that connect the resistor to the circuit via solder or breadboard.", category: "Terminals" },
  ],

  capacitor: [
    { partName: "Ceramic Body", description: "The small disc or rectangular ceramic housing. It stores electrical energy by creating an electric field when voltage is applied.", category: "Main Body" },
    { partName: "Leads", description: "Two equal-length metal leads. Non-polarized - can be connected either way in a circuit.", category: "Terminals" },
  ],

  polarizedcapacitor: [
    { partName: "Capacitor Body", description: "The cylindrical aluminum housing containing the electrolyte and rolled foil plates. Stores much more charge than ceramic types of the same size.", category: "Main Body" },
    { partName: "Positive Lead (+)", description: "The longer lead. Must always be connected to the higher potential side. Connecting it backwards can cause the capacitor to fail or explode.", category: "Terminals" },
    { partName: "Negative Lead (-)", description: "The shorter lead, also marked by a stripe on the body. Must be connected to ground or lower potential.", category: "Terminals" },
    { partName: "Vent", description: "The scored markings on the top of the cap. If the capacitor overheats or is connected incorrectly, the vent ruptures to release pressure safely.", category: "Safety" },
  ],

  diode: [
    { partName: "Diode Body", description: "The glass or epoxy housing containing the P-N semiconductor junction that allows current to flow in only one direction.", category: "Main Body" },
    { partName: "Cathode Band", description: "The stripe or ring at one end marking the cathode (-). Current exits here. Always connect this side toward ground.", category: "Markings" },
    { partName: "Anode Lead", description: "The unmarked end where current enters the diode. Connect to the positive side of the circuit.", category: "Terminals" },
    { partName: "P-N Junction", description: "The internal semiconductor junction. The P-type and N-type silicon layers meet here, creating the one-way current gate.", category: "Active Element" },
  ],

  zenerdiode: [
    { partName: "Zener Body", description: "Similar in appearance to a standard diode but engineered to operate reliably in reverse breakdown. Used for voltage regulation.", category: "Main Body" },
    { partName: "Cathode Band", description: "The striped end marking the cathode (-). In Zener operation, current flows from cathode to anode in reverse breakdown.", category: "Markings" },
    { partName: "Anode Lead", description: "The unmarked end. In normal diode mode, current enters here. In Zener mode, this side faces ground.", category: "Terminals" },
    { partName: "Zener Junction", description: "The specially doped P-N junction that breaks down at a precise, stable voltage - clamping voltage spikes and regulating power rails.", category: "Active Element" },
  ],

  inductor: [
    { partName: "Coil Winding", description: "Tightly wound copper wire that creates a magnetic field when current flows through it. More turns means higher inductance.", category: "Active Element" },
    { partName: "Core", description: "The material inside the coil (air, ferrite, or iron). Ferrite and iron cores increase inductance significantly.", category: "Main Body" },
    { partName: "Leads", description: "The two wire terminals extending from the coil. Non-polarized - can be connected in either direction.", category: "Terminals" },
  ],

}
