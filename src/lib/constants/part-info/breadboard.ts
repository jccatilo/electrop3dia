
export const breadboardPartInfo = {
  breadboard63r: [
    { partName: "Power Rails", description: "The long rows on both sides marked (+) and (-). Connected vertically along the full length for easy power distribution.", category: "Power Distribution" },
    { partName: "Terminal Strips", description: "The main 63-row component area. Each row of 5 holes (a-e and f-j) is connected horizontally, separated by the center channel.", category: "Component Area" },
    { partName: "Center Channel", description: "The gap dividing the two halves. Designed to straddle IC chips so each pin gets its own isolated row.", category: "Structure" },
    { partName: "Binding Posts", description: "Some versions include screw terminals at the end for connecting external power supplies.", category: "Power Distribution" },
  ],

  breadboardsmall: [
    { partName: "Power Rails", description: "Shorter power rails on both sides. Still connected vertically but covering fewer rows than a full-size board.", category: "Power Distribution" },
    { partName: "Terminal Strips", description: "30 rows of connection points. Each row of 5 holes is internally connected. Ideal for smaller circuits.", category: "Component Area" },
    { partName: "Center Channel", description: "The dividing gap for IC chip placement.", category: "Structure" },
  ],

  breadboardmini: [
    { partName: "Terminal Strips", description: "17 rows of connection points. Each row of 5 holes is internally connected. No power rails - add your own power connections.", category: "Component Area" },
    { partName: "Adhesive Base", description: "Most mini breadboards have a peel-and-stick base for mounting to enclosures or robots.", category: "Structure" },
    { partName: "Center Channel", description: "The dividing gap for IC chip placement, even on this compact size.", category: "Structure" },
  ],
};