
export const powerPartInfo = {
  battery9v: [
    { partName: "Positive Terminal (Snap)", description: "The smaller, raised circular snap terminal. Always on top. Connect to the positive rail of your circuit.", category: "Terminals" },
    { partName: "Negative Terminal (Snap)", description: "The larger collar surrounding the positive snap. Connect to ground. The shape makes reverse connection impossible.", category: "Terminals" },
    { partName: "Battery Body", description: "Contains six 1.5V cells stacked in series inside a rectangular casing, totaling 9V.", category: "Structure" },
  ],

  battery15v: [
    { partName: "Positive Terminal (+)", description: "The raised nub at the top of the battery. Current flows out from here to power your circuit.", category: "Terminals" },
    { partName: "Negative Terminal (-)", description: "The flat contact at the bottom. Current returns to the battery here.", category: "Terminals" },
    { partName: "Battery Body", description: "The cylindrical outer casing containing the zinc-manganese dioxide electrochemical cell producing 1.5V.", category: "Structure" },
  ],

  coincell: [
    { partName: "Positive Face (+)", description: "The flat top surface of the coin cell. This is the positive terminal. Connect to positive rail.", category: "Terminals" },
    { partName: "Negative Rim (-)", description: "The outer metal rim on the bottom edge. This is the negative terminal. Connect to ground.", category: "Terminals" },
    { partName: "Cell Body", description: "The sealed lithium chemistry cell that provides a stable 3V output over its entire discharge life.", category: "Structure" },
  ],

  solarcell: [
    { partName: "Photovoltaic Surface", description: "The blue or black silicon panel that converts photons from sunlight into electron flow (electricity).", category: "Active Element" },
    { partName: "Positive Lead (+)", description: "Output terminal for the generated electricity. Connect to your circuit's positive rail or a battery charging circuit.", category: "Terminals" },
    { partName: "Negative Lead (-)", description: "Ground return terminal. Connect to circuit ground.", category: "Terminals" },
    { partName: "Anti-reflective Coating", description: "The fine grid pattern visible on the panel surface. Reduces light reflection so more photons are absorbed.", category: "Structure" },
  ],
};