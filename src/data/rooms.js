const rooms = {
    2: {
        key: 'Berg',
        scene: require('@rooms/berg/Berg').default,
        x: 652,
        y: 448
    },
    10: {
        key: 'Town',
        scene: require('@rooms/town/Town').default,
        x: 638,
        y: 486
    }, 
    20: {
        key: 'Tropical',
        scene: require('@rooms/tropical/Tropical').default,
        x: 638,
        y: 486
    }, 
    30: {
        key: 'Port',
        scene: require('@rooms/port/Port').default,
        x: 638,
        y: 486
    },
    31: {
        key: 'Lighthouse',
        scene: require('@rooms/lighthouse/Lighthouse').default,
        x: 620,
        y: 486
    },
    32: {
        key: 'Beacon',
        scene: require('@rooms/beacon/Beacon').default,
        x: 385,
        y: 766
    },
    40: {
        key: 'Pirate',
        scene: require('@rooms/pirate/Pirate').default,
        x: 775,
        y: 493
    },
    50: {
        key: 'Plaza',
        scene: require('@rooms/plaza/Plaza').default,
        x: 819,
        y: 700
    },
    52: {
        key: 'Pet',
        scene: require('@rooms/pet/Pet').default,
        x: 760,
        y: 680
    },
    53: {
        key: 'Pizza',
        scene: require('@rooms/pizza/Pizza').default,
        x: 760,
        y: 680
    },
    60: {
        key: 'Park',
        scene: require('@rooms/park/Park').default,
        x: 188,
        y: 709
    },
    70: {
        key: 'Mine',
        scene: require('@rooms/mine/Mine').default,
        x: 989,
        y: 766
    },
    71: {
        key: 'Mineint',
        scene: require('@rooms/mineint/Mineint').default,
        x: 698,
        y: 798
    },
    80: {
        key: 'Forest',
        scene: require('@rooms/forest/Forest').default,
        x: 728,
        y: 618
    },
    90: {
        key: 'Lake',
        scene: require('@rooms/lake/Lake').default,
        x: 456,
        y: 410
    },
    91: {
        key: 'Cavelake',
        scene: require('@rooms/cavelake/Cavelake').default,
        x: 352,
        y: 490
    },
    92: {
        key: 'Hiddenlake',
        scene: require('@rooms/hiddenlake/Hiddenlake').default,
        x: 728,
        y: 618
    },
    912: {
        key: 'CatchinWaves',
        scene: require('@games/waves/CatchinWaves').default
    },
    // 91: {
    //     key: 'CaveLake',
    //     scene: require('@rooms/cavelake/Cavelake').default,
    //     x: 728,
    //     y: 618
    // }
    // 100: {
    //     key: 'Town',
    //     scene: require('@rooms/town/Town').default,
    //     x: 760,
    //     y: 660
    // },
    // 110: {
    //     key: 'Coffee',
    //     scene: require('@rooms/coffee/Coffee').default,
    //     x: 640,
    //     y: 480
    // },
    // 111: {
    //     key: 'Book',
    //     scene: require('@rooms/book/Book').default,
    //     x: 1260,
    //     y: 560
    // },
    // 120: {
    //     key: 'Dance',
    //     scene: require('@rooms/dance/Dance').default,
    //     x: 360,
    //     y: 560
    // },
    // 121: {
    //     key: 'Lounge',
    //     scene: require('@rooms/lounge/Lounge').default,
    //     x: 1120,
    //     y: 640
    // },
    // 130: {
    //     key: 'Shop',
    //     scene: require('@rooms/shop/Shop').default,
    //     x: 1000,
    //     y: 560
    // },
    // 200: {
    //     key: 'Village',
    //     scene: require('@rooms/village/Village').default,
    //     x: 800,
    //     y: 640
    // },
    // 220: {
    //     key: 'Lodge',
    //     scene: require('@rooms/lodge/Lodge').default,
    //     x: 760,
    //     y: 800
    // },
    // 221: {
    //     key: 'Attic',
    //     scene: require('@rooms/attic/Attic').default,
    //     x: 966,
    //     y: 560
    // },
    // 230: {
    //     key: 'Mtn',
    //     scene: require('@rooms/mtn/Mtn').default,
    //     x: 760,
    //     y: 440
    // },
    // 300: {
    //     key: 'Plaza',
    //     scene: require('@rooms/plaza/Plaza').default,
    //     x: 760,
    //     y: 680
    // },
    // 310: {
    //     key: 'Pet',
    //     scene: require('@rooms/pet/Pet').default,
    //     x: 828,
    //     y: 520
    // },
    // 321: {
    //     key: 'DojoExt',
    //     scene: require('@rooms/dojoext/DojoExt').default,
    //     x: 780,
    //     y: 790
    // },
    // 400: {
    //     key: 'Beach',
    //     scene: require('@rooms/beach/Beach').default,
    //     x: 840,
    //     y: 680
    // },
    // 800: {
    //     key: 'Dock',
    //     scene: require('@rooms/dock/Dock').default,
    //     x: 800,
    //     y: 400
    // },
    // 801: {
    //     key: 'Forts',
    //     scene: require('@rooms/forts/Forts').default,
    //     x: 960,
    //     y: 610
    // },
    // 802: {
    //     key: 'Rink',
    //     scene: require('@rooms/rink/Rink').default,
    //     x: 770,
    //     y: 400
    // },
    // 805: {
    //     key: 'Berg',
    //     scene: require('@rooms/berg/Berg').default,
    //     x: 652,
    //     y: 448
    // },
    // 806: {
    //     key: 'Cave',
    //     scene: require('@rooms/cave/Cave').default,
    //     x: 780,
    //     y: 700
    // },
    // 807: {
    //     key: 'Shack',
    //     scene: require('@rooms/shack/Shack').default,
    //     x: 760,
    //     y: 680
    // },
    // 809: {
    //     key: 'Forest',
    //     scene: require('@rooms/forest/Forest').default,
    //     x: 760,
    //     y: 430
    // },
    // 810: {
    //     key: 'Cove',
    //     scene: require('@rooms/cove/Cove').default,
    //     x: 840,
    //     y: 480
    // },
    // 301: {
    //     key: 'Pizza',        
    //     scene: require('@rooms/pizza/Pizza').default,
    //     x: 840,
    //     y: 480
    // }
}

export default rooms
