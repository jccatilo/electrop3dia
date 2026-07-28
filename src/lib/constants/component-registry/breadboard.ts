
export const breadboard = {
  breadboard63r10c: {
    guide: {
      title: 'Breadboard 63R x 10C Guide',
      icon: 'CircuitBoard',
      sections: [
        { title: 'What is a Full-Size Breadboard?', type: 'paragraph', icon: 'Info', content: 'This full-size breadboard with 63 rows provides ample space for complex circuits with multiple ICs, sensors, and support components. It is the standard choice for prototyping on a workbench.' },
        { title: 'Power Rails', type: 'list', icon: 'Zap', content: ['Red (+) rail: connected vertically along full length', 'Blue (-) rail: connected vertically along full length', 'Rails on each side are independent - connect them with a wire if needed', 'Some boards have a gap at mid-length - bridge it for continuous rails'] },
        { title: 'Terminal Strips', type: 'list', icon: 'Grid', content: ['63 numbered rows', 'Each row has two groups of 5 holes (a-e and f-j)', 'The center channel separates the two groups', 'Each group of 5 in a row is connected internally'] },
      ],
      proTips: [
        'Color-code wires: red for power, black for ground, others for signals',
        'Keep wires flat and short for cleaner layouts and easier debugging',
        'Take a photo of working circuits before disassembling',
      ],
      commonMistakes: [
        'Forgetting the center channel separates rows (IC pins not bridged)',
        'Not connecting both sets of power rails when using both sides',
        'Pushing components in at an angle (bent legs, poor contact)',
      ],
    },
    partInfo: [
      { partName: 'Power Rails', description: 'The long rows on both sides marked (+) and (-). Connected vertically along the full length for easy power distribution.', category: 'Power Distribution' },
      { partName: 'Terminal Strips', description: 'The main 63-row component area. Each row of 5 holes (a-e and f-j) is connected horizontally, separated by the center channel.', category: 'Component Area' },
      { partName: 'Center Channel', description: 'The gap dividing the two halves. Designed to straddle IC chips so each pin gets its own isolated row.', category: 'Structure' },
      { partName: 'Binding Posts', description: 'Some versions include screw terminals at the end for connecting external power supplies.', category: 'Power Distribution' },
    ],
    trivia: [
      { fact: "Breadboards get their name from actual wooden bread-cutting boards! Early experimenters would literally push wires and components into the soft wood to prototype circuits." },
      { fact: "The modern solderless breadboard with spring-loaded clips wasn't patented until 1971 by Ronald J. Portugal.", year: "1971" },
      { fact: "A standard full-size breadboard has around 2,000 connection points and can be used for thousands of projects before the springs wear out." },
      { fact: "The holes in a breadboard are spaced exactly 0.1 inches (2.54mm) apart - matching the standard DIP chip pin spacing defined by IBM in the 1960s.", year: "1960s" },
    ]
  },

  breadboardsmall30r10c: {
    guide: {
      title: 'Breadboard Small 30R x 10C Guide',
      icon: 'CircuitBoard',
      sections: [
        { title: 'What is a Half-Size Breadboard?', type: 'paragraph', icon: 'Info', content: 'The half-size breadboard with 30 rows is perfect for simple to medium complexity circuits. Compact enough for portable projects, it still supports most DIP ICs and sensor modules.' },
        { title: 'Layout', type: 'list', icon: 'Grid', content: ['30 rows of connection points', 'Standard 0.1 inch (2.54mm) hole spacing', 'Power rails on both sides', 'Center channel for IC placement'] },
        { title: 'Best Uses', type: 'list', icon: 'Cpu', content: ['Single IC projects with supporting components', 'Sensor breakout modules', 'Small filter or amplifier circuits', 'Quick proof-of-concept builds'] },
      ],
      proTips: [
        'Connect power rails to a nearby full-size breadboard for expansion',
        'Great for portable projects in small enclosures',
        'Combine two half-size boards for near-full-size capability',
      ],
      commonMistakes: [
        'Running out of space when the project grows (plan ahead)',
        'Not leaving enough rows for future debugging components',
        'Forgetting rails may not be joined at center on some models',
      ],
    },
    partInfo: [
      { partName: 'Power Rails', description: 'Shorter power rails on both sides. Still connected vertically but covering fewer rows than a full-size board.', category: 'Power Distribution' },
      { partName: 'Terminal Strips', description: '30 rows of connection points. Each row of 5 holes is internally connected. Ideal for smaller circuits.', category: 'Component Area' },
      { partName: 'Center Channel', description: 'The dividing gap for IC chip placement.', category: 'Structure' },
    ],
    trivia: [
      { fact: "The half-size breadboard is perfect for quick experiments. All breadboard holes are spaced exactly 0.1 inches (2.54mm) apart, matching the standard DIP chip pin spacing." },
      { fact: "This spacing standard was defined by IBM in the 1960s and remains the global standard to this day!", year: "1960s" },
      { fact: "Half-size breadboards are popular in classrooms and workshops because they're large enough for most beginner projects but small enough to carry around." },
      { fact: "The power rails on the sides of a breadboard are connected along the entire length - perfect for distributing VCC and GND to all your components." },
    ]
  },

  breadboardmini17r10c : {
    guide: {
      title: 'Breadboard Mini 17R x 10C Guide',
      icon: 'CircuitBoard',
      sections: [
        { title: 'What is a Mini Breadboard?', type: 'paragraph', icon: 'Info', content: 'The mini breadboard with 17 rows is the most compact prototyping option. Ideal for small sensor breakouts, wearables, and situations where space is extremely limited.' },
        { title: 'Layout', type: 'list', icon: 'Grid', content: ['17 rows of connection points', 'No power rails (add your own connections)', 'Standard 0.1 inch spacing', 'Often has adhesive backing for mounting'] },
        { title: 'Best Uses', type: 'list', icon: 'Cpu', content: ['Wearable electronics prototyping', 'Single-sensor breakout boards', 'Adding a small modification to a larger project', 'Mounting directly onto a robot or enclosure'] },
      ],
      proTips: [
        'Peel the adhesive backing and stick directly to your project enclosure',
        'Add separate power and ground bus wires along the edge rows',
        'Combine multiple mini boards for modular project layouts',
      ],
      commonMistakes: [
        'Trying to fit a DIP-14 or larger IC (not enough rows on both sides)',
        'Forgetting there are no built-in power rails',
        'Overpopulating the board and making debugging impossible',
      ],
    },
    partInfo: [
      { partName: 'Terminal Strips', description: '17 rows of connection points. Each row of 5 holes is internally connected. No power rails - add your own power connections.', category: 'Component Area' },
      { partName: 'Adhesive Base', description: 'Most mini breadboards have a peel-and-stick base for mounting to enclosures or robots.', category: 'Structure' },
      { partName: 'Center Channel', description: 'The dividing gap for IC chip placement, even on this compact size.', category: 'Structure' },
    ],
    trivia: [
      { fact: "Mini breadboards are a favorite for wearable electronics and tiny sensor projects." },
      { fact: "Internally, each row of 5 holes is connected by a single metal clip. These clips are essentially tiny springs, and they can make and break a connection over 50,000 times without wearing out!" },
      { fact: "Mini breadboards often have adhesive backing so they can be stuck to enclosures, robots, or even other breadboards for modular prototyping." },
      { fact: "Despite their small size, mini breadboards follow the exact same internal wiring pattern as full-size boards - making them fully interchangeable in most circuits." },
    ]
  },
};