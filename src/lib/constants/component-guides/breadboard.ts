
export const breadboardComponentGuide = {

  breadboard63r: {
    title: 'Breadboard 63R x 10C Guide',
    icon: 'CircuitBoard',
    sections: [
      { title: 'What is a Full-Size Breadboard?', type: 'paragraph', icon: 'Info', content: 'This full-size breadboard with 63 rows provides ample space for complex circuits with multiple ICs, sensors, and support components. It is the standard choice for prototyping on a workbench.' },
      { title: 'Power Rails', type: 'list', icon: 'Zap', content: ['Red (+) rail: connected vertically along full length', 'Blue (-) rail: connected vertically along full length', 'Rails on each side are independent - connect them with a wire if needed', 'Some boards have a gap at mid-length - bridge it for continuous rails'] },
      { title: 'Terminal Strips', type: 'list', icon: 'Grid', content: ['63 numbered rows', 'Each row has two groups of 5 holes (a-e and f-j)', 'The center channel separates the two groups', 'Each group of 5 in a row is connected internally'] },
    ],
    proTips: ['Color-code wires: red for power, black for ground, others for signals', 'Keep wires flat and short for cleaner layouts and easier debugging', 'Take a photo of working circuits before disassembling'],
    commonMistakes: ['Forgetting the center channel separates rows (IC pins not bridged)', 'Not connecting both sets of power rails when using both sides', 'Pushing components in at an angle (bent legs, poor contact)'],
  },

  breadboardsmall: {
    title: 'Breadboard Small 30R x 10C Guide',
    icon: 'CircuitBoard',
    sections: [
      { title: 'What is a Half-Size Breadboard?', type: 'paragraph', icon: 'Info', content: 'The half-size breadboard with 30 rows is perfect for simple to medium complexity circuits. Compact enough for portable projects, it still supports most DIP ICs and sensor modules.' },
      { title: 'Layout', type: 'list', icon: 'Grid', content: ['30 rows of connection points', 'Standard 0.1 inch (2.54mm) hole spacing', 'Power rails on both sides', 'Center channel for IC placement'] },
      { title: 'Best Uses', type: 'list', icon: 'Cpu', content: ['Single IC projects with supporting components', 'Sensor breakout modules', 'Small filter or amplifier circuits', 'Quick proof-of-concept builds'] },
    ],
    proTips: ['Connect power rails to a nearby full-size breadboard for expansion', 'Great for portable projects in small enclosures', 'Combine two half-size boards for near-full-size capability'],
    commonMistakes: ['Running out of space when the project grows (plan ahead)', 'Not leaving enough rows for future debugging components', 'Forgetting rails may not be joined at center on some models'],
  },

  breadboardmini: {
    title: 'Breadboard Mini 17R x 10C Guide',
    icon: 'CircuitBoard',
    sections: [
      { title: 'What is a Mini Breadboard?', type: 'paragraph', icon: 'Info', content: 'The mini breadboard with 17 rows is the most compact prototyping option. Ideal for small sensor breakouts, wearables, and situations where space is extremely limited.' },
      { title: 'Layout', type: 'list', icon: 'Grid', content: ['17 rows of connection points', 'No power rails (add your own connections)', 'Standard 0.1 inch spacing', 'Often has adhesive backing for mounting'] },
      { title: 'Best Uses', type: 'list', icon: 'Cpu', content: ['Wearable electronics prototyping', 'Single-sensor breakout boards', 'Adding a small modification to a larger project', 'Mounting directly onto a robot or enclosure'] },
    ],
    proTips: ['Peel the adhesive backing and stick directly to your project enclosure', 'Add separate power and ground bus wires along the edge rows', 'Combine multiple mini boards for modular project layouts'],
    commonMistakes: ['Trying to fit a DIP-14 or larger IC (not enough rows on both sides)', 'Forgetting there are no built-in power rails', 'Overpopulating the board and making debugging impossible'],
  },

}