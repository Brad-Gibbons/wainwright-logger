const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '2d'})
}

const fells = [
    {
      "Area": "The Northern Fells",
      "Fell Name": "Skiddaw",
      "Height(m)": 931,
      "Height(Ft)": 3054,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Northern Fells",
      "Fell Name": "Blencathra",
      "Height(m)": 868,
      "Height(Ft)": 2848,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Northern Fells",
      "Fell Name": "Skiddaw Little Man",
      "Height(m)": 865,
      "Height(Ft)": 2838,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Northern Fells",
      "Fell Name": "Carl Side",
      "Height(m)": 746,
      "Height(Ft)": 2448,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Northern Fells",
      "Fell Name": "Long Side",
      "Height(m)": 734,
      "Height(Ft)": 2408,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Northern Fells",
      "Fell Name": "Lonscale Fell",
      "Height(m)": 715,
      "Height(Ft)": 2346,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Northern Fells",
      "Fell Name": "Knott",
      "Height(m)": 710,
      "Height(Ft)": 2329,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Northern Fells",
      "Fell Name": "Bowscale Fell",
      "Height(m)": 702,
      "Height(Ft)": 2303,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Northern Fells",
      "Fell Name": "Great Calva",
      "Height(m)": 690,
      "Height(Ft)": 2264,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Northern Fells",
      "Fell Name": "Bannerdale Crags",
      "Height(m)": 683,
      "Height(Ft)": 2241,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Northern Fells",
      "Fell Name": "Ullock Pike",
      "Height(m)": 680,
      "Height(Ft)": 2231,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Northern Fells",
      "Fell Name": "Bakestall",
      "Height(m)": 673,
      "Height(Ft)": 2208,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Northern Fells",
      "Fell Name": "Carrock Fell",
      "Height(m)": 660,
      "Height(Ft)": 2165,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Northern Fells",
      "Fell Name": "High Pike (Caldbeck)",
      "Height(m)": 658,
      "Height(Ft)": 2159,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Northern Fells",
      "Fell Name": "Great Scafell",
      "Height(m)": 651,
      "Height(Ft)": 2136,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Northern Fells",
      "Fell Name": "Mungrisdale Common",
      "Height(m)": 633,
      "Height(Ft)": 2077,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Northern Fells",
      "Fell Name": "Brae Fell",
      "Height(m)": 586,
      "Height(Ft)": 1923,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Northern Fells",
      "Fell Name": "Meal Fell",
      "Height(m)": 550,
      "Height(Ft)": 1804,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Northern Fells",
      "Fell Name": "Great Cockup",
      "Height(m)": 526,
      "Height(Ft)": 1726,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Northern Fells",
      "Fell Name": "Souther Fell",
      "Height(m)": 522,
      "Height(Ft)": 1713,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Northern Fells",
      "Fell Name": "Dodd",
      "Height(m)": 502,
      "Height(Ft)": 1647,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Northern Fells",
      "Fell Name": "Longlands Fell",
      "Height(m)": 483,
      "Height(Ft)": 1585,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Northern Fells",
      "Fell Name": "Binsey",
      "Height(m)": 447,
      "Height(Ft)": 1467,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Northern Fells",
      "Fell Name": "Latrigg",
      "Height(m)": 368,
      "Height(Ft)": 1207,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Far Eastern Fells",
      "Fell Name": "High Street",
      "Height(m)": 828,
      "Height(Ft)": 2717,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Far Eastern Fells",
      "Fell Name": "High Raise (Martindale)",
      "Height(m)": 802,
      "Height(Ft)": 2631,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Far Eastern Fells",
      "Fell Name": "Rampsgill Head",
      "Height(m)": 792,
      "Height(Ft)": 2598,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Far Eastern Fells",
      "Fell Name": "Thornthwaite Crag",
      "Height(m)": 784,
      "Height(Ft)": 2572,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Far Eastern Fells",
      "Fell Name": "Kidsty Pike",
      "Height(m)": 780,
      "Height(Ft)": 2559,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Far Eastern Fells",
      "Fell Name": "Harter Fell (Mardale)",
      "Height(m)": 778,
      "Height(Ft)": 2552,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Far Eastern Fells",
      "Fell Name": "Caudale Moor",
      "Height(m)": 763,
      "Height(Ft)": 2503,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Far Eastern Fells",
      "Fell Name": "Mardale Ill Bell",
      "Height(m)": 760,
      "Height(Ft)": 2493,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Far Eastern Fells",
      "Fell Name": "Ill Bell",
      "Height(m)": 757,
      "Height(Ft)": 2484,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Far Eastern Fells",
      "Fell Name": "The Knott",
      "Height(m)": 739,
      "Height(Ft)": 2425,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Far Eastern Fells",
      "Fell Name": "Kentmere Pike",
      "Height(m)": 730,
      "Height(Ft)": 2395,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Far Eastern Fells",
      "Fell Name": "Froswick",
      "Height(m)": 720,
      "Height(Ft)": 2362,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Far Eastern Fells",
      "Fell Name": "Branstree",
      "Height(m)": 713,
      "Height(Ft)": 2339,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Far Eastern Fells",
      "Fell Name": "Yoke",
      "Height(m)": 706,
      "Height(Ft)": 2316,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Far Eastern Fells",
      "Fell Name": "Gray Crag",
      "Height(m)": 699,
      "Height(Ft)": 2293,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Far Eastern Fells",
      "Fell Name": "Rest Dodd",
      "Height(m)": 696,
      "Height(Ft)": 2283,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Far Eastern Fells",
      "Fell Name": "Loadpot Hill",
      "Height(m)": 671,
      "Height(Ft)": 2201,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Far Eastern Fells",
      "Fell Name": "Wether Hill",
      "Height(m)": 670,
      "Height(Ft)": 2198,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Far Eastern Fells",
      "Fell Name": "Tarn Crag (Longsleddale)",
      "Height(m)": 664,
      "Height(Ft)": 2178,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Far Eastern Fells",
      "Fell Name": "Place Fell",
      "Height(m)": 657,
      "Height(Ft)": 2156,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Far Eastern Fells",
      "Fell Name": "Selside Pike",
      "Height(m)": 655,
      "Height(Ft)": 2149,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Far Eastern Fells",
      "Fell Name": "Grey Crag",
      "Height(m)": 638,
      "Height(Ft)": 2093,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Far Eastern Fells",
      "Fell Name": "Hartsop Dodd",
      "Height(m)": 618,
      "Height(Ft)": 2028,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Far Eastern Fells",
      "Fell Name": "Shipman Knotts",
      "Height(m)": 587,
      "Height(Ft)": 1926,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Far Eastern Fells",
      "Fell Name": "The Nab",
      "Height(m)": 576,
      "Height(Ft)": 1890,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Far Eastern Fells",
      "Fell Name": "Angletarn Pikes",
      "Height(m)": 567,
      "Height(Ft)": 1860,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Far Eastern Fells",
      "Fell Name": "Brock Crags",
      "Height(m)": 561,
      "Height(Ft)": 1841,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Far Eastern Fells",
      "Fell Name": "Arthur's Pike",
      "Height(m)": 532,
      "Height(Ft)": 1745,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Far Eastern Fells",
      "Fell Name": "Bonscale Pike",
      "Height(m)": 524,
      "Height(Ft)": 1719,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Far Eastern Fells",
      "Fell Name": "Sallows",
      "Height(m)": 516,
      "Height(Ft)": 1693,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Far Eastern Fells",
      "Fell Name": "Beda Fell",
      "Height(m)": 509,
      "Height(Ft)": 1670,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Far Eastern Fells",
      "Fell Name": "Wansfell",
      "Height(m)": 487,
      "Height(Ft)": 1598,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Far Eastern Fells",
      "Fell Name": "Sour Howes",
      "Height(m)": 483,
      "Height(Ft)": 1585,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Far Eastern Fells",
      "Fell Name": "Steel Knotts",
      "Height(m)": 432,
      "Height(Ft)": 1417,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Far Eastern Fells",
      "Fell Name": "Hallin Fell",
      "Height(m)": 388,
      "Height(Ft)": 1273,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Far Eastern Fells",
      "Fell Name": "Troutbeck Tongue",
      "Height(m)": 364,
      "Height(Ft)": 1194,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Eastern Fells",
      "Fell Name": "Helvellyn",
      "Height(m)": 950,
      "Height(Ft)": 3117,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Eastern Fells",
      "Fell Name": "Nethermost Pike",
      "Height(m)": 891,
      "Height(Ft)": 2923,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Eastern Fells",
      "Fell Name": "Catstycam",
      "Height(m)": 890,
      "Height(Ft)": 2920,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Eastern Fells",
      "Fell Name": "Raise",
      "Height(m)": 883,
      "Height(Ft)": 2897,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Eastern Fells",
      "Fell Name": "Fairfield",
      "Height(m)": 873,
      "Height(Ft)": 2864,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Eastern Fells",
      "Fell Name": "White Side",
      "Height(m)": 863,
      "Height(Ft)": 2832,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Eastern Fells",
      "Fell Name": "Dollywaggon Pike",
      "Height(m)": 858,
      "Height(Ft)": 2815,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Eastern Fells",
      "Fell Name": "Great Dodd",
      "Height(m)": 857,
      "Height(Ft)": 2812,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Eastern Fells",
      "Fell Name": "Stybarrow Dodd",
      "Height(m)": 843,
      "Height(Ft)": 2766,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Eastern Fells",
      "Fell Name": "Saint Sunday Crag",
      "Height(m)": 841,
      "Height(Ft)": 2759,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Eastern Fells",
      "Fell Name": "Hart Crag",
      "Height(m)": 822,
      "Height(Ft)": 2697,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Eastern Fells",
      "Fell Name": "Dove Crag",
      "Height(m)": 792,
      "Height(Ft)": 2598,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Eastern Fells",
      "Fell Name": "Watson's Dodd",
      "Height(m)": 789,
      "Height(Ft)": 2589,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Eastern Fells",
      "Fell Name": "Red Screes",
      "Height(m)": 776,
      "Height(Ft)": 2546,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Eastern Fells",
      "Fell Name": "Great Rigg",
      "Height(m)": 766,
      "Height(Ft)": 2513,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Eastern Fells",
      "Fell Name": "Hart Side",
      "Height(m)": 756,
      "Height(Ft)": 2480,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Eastern Fells",
      "Fell Name": "Seat Sandal",
      "Height(m)": 736,
      "Height(Ft)": 2415,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Eastern Fells",
      "Fell Name": "Clough Head",
      "Height(m)": 726,
      "Height(Ft)": 2382,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Eastern Fells",
      "Fell Name": "Birkhouse Moor",
      "Height(m)": 718,
      "Height(Ft)": 2356,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Eastern Fells",
      "Fell Name": "Sheffield Pike",
      "Height(m)": 675,
      "Height(Ft)": 2215,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Eastern Fells",
      "Fell Name": "High Pike (Scandale)",
      "Height(m)": 656,
      "Height(Ft)": 2152,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Eastern Fells",
      "Fell Name": "Middle Dodd",
      "Height(m)": 654,
      "Height(Ft)": 2146,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Eastern Fells",
      "Fell Name": "Little Hart Crag",
      "Height(m)": 637,
      "Height(Ft)": 2090,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Eastern Fells",
      "Fell Name": "Birks",
      "Height(m)": 622,
      "Height(Ft)": 2041,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Eastern Fells",
      "Fell Name": "Heron Pike",
      "Height(m)": 612,
      "Height(Ft)": 2008,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Eastern Fells",
      "Fell Name": "Hartsop Above How",
      "Height(m)": 580,
      "Height(Ft)": 1903,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Eastern Fells",
      "Fell Name": "Great Mell Fell",
      "Height(m)": 537,
      "Height(Ft)": 1762,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Eastern Fells",
      "Fell Name": "High Hartsop Dodd",
      "Height(m)": 519,
      "Height(Ft)": 1703,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Eastern Fells",
      "Fell Name": "Low Pike",
      "Height(m)": 508,
      "Height(Ft)": 1667,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Eastern Fells",
      "Fell Name": "Little Mell Fell",
      "Height(m)": 505,
      "Height(Ft)": 1657,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Eastern Fells",
      "Fell Name": "Stone Arthur",
      "Height(m)": 500,
      "Height(Ft)": 1640,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Eastern Fells",
      "Fell Name": "Gowbarrow Fell",
      "Height(m)": 481,
      "Height(Ft)": 1578,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Eastern Fells",
      "Fell Name": "Glenridding Dodd",
      "Height(m)": 442,
      "Height(Ft)": 1450,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Eastern Fells",
      "Fell Name": "Nab Scar",
      "Height(m)": 440,
      "Height(Ft)": 1444,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Eastern Fells",
      "Fell Name": "Arnison Crag",
      "Height(m)": 433,
      "Height(Ft)": 1421,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Central Fells",
      "Fell Name": "High Raise (Langdale)",
      "Height(m)": 762,
      "Height(Ft)": 2500,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Central Fells",
      "Fell Name": "Harrison Stickle",
      "Height(m)": 736,
      "Height(Ft)": 2415,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Central Fells",
      "Fell Name": "Sergeant Man",
      "Height(m)": 730,
      "Height(Ft)": 2395,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Central Fells",
      "Fell Name": "Ullscarf",
      "Height(m)": 726,
      "Height(Ft)": 2382,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Central Fells",
      "Fell Name": "Thunacar Knott",
      "Height(m)": 723,
      "Height(Ft)": 2372,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Central Fells",
      "Fell Name": "Pike O'Stickle",
      "Height(m)": 709,
      "Height(Ft)": 2326,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Central Fells",
      "Fell Name": "Pavey Ark",
      "Height(m)": 700,
      "Height(Ft)": 2297,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Central Fells",
      "Fell Name": "Loft Crag",
      "Height(m)": 680,
      "Height(Ft)": 2231,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Central Fells",
      "Fell Name": "High Seat",
      "Height(m)": 608,
      "Height(Ft)": 1995,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Central Fells",
      "Fell Name": "Bleaberry Fell",
      "Height(m)": 590,
      "Height(Ft)": 1936,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Central Fells",
      "Fell Name": "Sergeant's Crag",
      "Height(m)": 571,
      "Height(Ft)": 1873,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Central Fells",
      "Fell Name": "Steel Fell",
      "Height(m)": 553,
      "Height(Ft)": 1814,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Central Fells",
      "Fell Name": "Tarn Crag (Easedale)",
      "Height(m)": 550,
      "Height(Ft)": 1804,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Central Fells",
      "Fell Name": "Blea Rigg",
      "Height(m)": 541,
      "Height(Ft)": 1775,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Central Fells",
      "Fell Name": "Calf Crag",
      "Height(m)": 537,
      "Height(Ft)": 1762,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Central Fells",
      "Fell Name": "Eagle Crag",
      "Height(m)": 520,
      "Height(Ft)": 1706,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Central Fells",
      "Fell Name": "High Tove",
      "Height(m)": 515,
      "Height(Ft)": 1690,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Central Fells",
      "Fell Name": "Armboth Fell",
      "Height(m)": 479,
      "Height(Ft)": 1572,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Central Fells",
      "Fell Name": "Raven Crag",
      "Height(m)": 461,
      "Height(Ft)": 1512,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Central Fells",
      "Fell Name": "Great Crag",
      "Height(m)": 440,
      "Height(Ft)": 1444,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Central Fells",
      "Fell Name": "Gibson Knott",
      "Height(m)": 420,
      "Height(Ft)": 1378,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Central Fells",
      "Fell Name": "Grange Fell",
      "Height(m)": 410,
      "Height(Ft)": 1345,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Central Fells",
      "Fell Name": "Helm Crag",
      "Height(m)": 405,
      "Height(Ft)": 1329,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Central Fells",
      "Fell Name": "Silver How",
      "Height(m)": 394,
      "Height(Ft)": 1293,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Central Fells",
      "Fell Name": "Walla Crag",
      "Height(m)": 379,
      "Height(Ft)": 1243,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Central Fells",
      "Fell Name": "High Rigg",
      "Height(m)": 354,
      "Height(Ft)": 1161,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Central Fells",
      "Fell Name": "Loughrigg Fell",
      "Height(m)": 335,
      "Height(Ft)": 1099,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Western Fells",
      "Fell Name": "Great Gable",
      "Height(m)": 899,
      "Height(Ft)": 2949,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Western Fells",
      "Fell Name": "Pillar",
      "Height(m)": 892,
      "Height(Ft)": 2927,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Western Fells",
      "Fell Name": "Scoat Fell",
      "Height(m)": 841,
      "Height(Ft)": 2759,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Western Fells",
      "Fell Name": "Red Pike (Wasdale)",
      "Height(m)": 826,
      "Height(Ft)": 2710,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Western Fells",
      "Fell Name": "Steeple",
      "Height(m)": 819,
      "Height(Ft)": 2687,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Western Fells",
      "Fell Name": "High Stile",
      "Height(m)": 807,
      "Height(Ft)": 2648,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Western Fells",
      "Fell Name": "Kirk Fell",
      "Height(m)": 802,
      "Height(Ft)": 2631,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Western Fells",
      "Fell Name": "Haycock",
      "Height(m)": 797,
      "Height(Ft)": 2615,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Western Fells",
      "Fell Name": "Green Gable",
      "Height(m)": 801,
      "Height(Ft)": 2628,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Western Fells",
      "Fell Name": "Red Pike (Buttermere)",
      "Height(m)": 755,
      "Height(Ft)": 2477,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Western Fells",
      "Fell Name": "High Crag",
      "Height(m)": 744,
      "Height(Ft)": 2441,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Western Fells",
      "Fell Name": "Brandreth",
      "Height(m)": 715,
      "Height(Ft)": 2346,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Western Fells",
      "Fell Name": "Caw Fell",
      "Height(m)": 690,
      "Height(Ft)": 2264,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Western Fells",
      "Fell Name": "Grey Knotts",
      "Height(m)": 697,
      "Height(Ft)": 2287,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Western Fells",
      "Fell Name": "Seatallan",
      "Height(m)": 692,
      "Height(Ft)": 2270,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Western Fells",
      "Fell Name": "Fleetwith Pike",
      "Height(m)": 648,
      "Height(Ft)": 2126,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Western Fells",
      "Fell Name": "Base Brown",
      "Height(m)": 646,
      "Height(Ft)": 2119,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Western Fells",
      "Fell Name": "Starling Dodd",
      "Height(m)": 633,
      "Height(Ft)": 2077,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Western Fells",
      "Fell Name": "Yewbarrow",
      "Height(m)": 628,
      "Height(Ft)": 2060,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Western Fells",
      "Fell Name": "Great Borne",
      "Height(m)": 616,
      "Height(Ft)": 2021,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Western Fells",
      "Fell Name": "Haystacks",
      "Height(m)": 597,
      "Height(Ft)": 1959,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Western Fells",
      "Fell Name": "Middle Fell ",
      "Height(m)": 582,
      "Height(Ft)": 1909,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Western Fells",
      "Fell Name": "Blake Fell ",
      "Height(m)": 573,
      "Height(Ft)": 1880,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Western Fells",
      "Fell Name": "Lank Rigg",
      "Height(m)": 541,
      "Height(Ft)": 1775,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Western Fells",
      "Fell Name": "Gavel Fell",
      "Height(m)": 526,
      "Height(Ft)": 1726,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Western Fells",
      "Fell Name": "Crag Fell",
      "Height(m)": 523,
      "Height(Ft)": 1716,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Western Fells",
      "Fell Name": "Mellbreak",
      "Height(m)": 512,
      "Height(Ft)": 1680,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Western Fells",
      "Fell Name": "Hen Comb",
      "Height(m)": 509,
      "Height(Ft)": 1670,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Western Fells",
      "Fell Name": "Grike",
      "Height(m)": 488,
      "Height(Ft)": 1601,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Western Fells",
      "Fell Name": "Burnbank Fell",
      "Height(m)": 475,
      "Height(Ft)": 1558,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Western Fells",
      "Fell Name": "Low Fell",
      "Height(m)": 423,
      "Height(Ft)": 1388,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Western Fells",
      "Fell Name": "Buckbarrow",
      "Height(m)": 420,
      "Height(Ft)": 1378,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Western Fells",
      "Fell Name": "Fellbarrow",
      "Height(m)": 416,
      "Height(Ft)": 1365,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Southern Fells",
      "Fell Name": "Scafell Pike",
      "Height(m)": 978,
      "Height(Ft)": 3209,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Southern Fells",
      "Fell Name": "Scafell ",
      "Height(m)": 964,
      "Height(Ft)": 3163,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Southern Fells",
      "Fell Name": "Great End",
      "Height(m)": 910,
      "Height(Ft)": 2986,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Southern Fells",
      "Fell Name": "Bowfell",
      "Height(m)": 902,
      "Height(Ft)": 2959,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Southern Fells",
      "Fell Name": "Esk Pike",
      "Height(m)": 885,
      "Height(Ft)": 2904,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Southern Fells",
      "Fell Name": "Crinkle Crags",
      "Height(m)": 859,
      "Height(Ft)": 2818,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Southern Fells",
      "Fell Name": "Coniston Old Man",
      "Height(m)": 803,
      "Height(Ft)": 2635,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Southern Fells",
      "Fell Name": "Swirl How",
      "Height(m)": 802,
      "Height(Ft)": 2631,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Southern Fells",
      "Fell Name": "Lingmell",
      "Height(m)": 800,
      "Height(Ft)": 2625,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Southern Fells",
      "Fell Name": "Brim Fell",
      "Height(m)": 796,
      "Height(Ft)": 2612,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Southern Fells",
      "Fell Name": "Great Carrs",
      "Height(m)": 780,
      "Height(Ft)": 2559,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Southern Fells",
      "Fell Name": "Allen Crags",
      "Height(m)": 785,
      "Height(Ft)": 2575,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Southern Fells",
      "Fell Name": "Glaramara",
      "Height(m)": 783,
      "Height(Ft)": 2569,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Southern Fells",
      "Fell Name": "Dow Crag",
      "Height(m)": 778,
      "Height(Ft)": 2552,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Southern Fells",
      "Fell Name": "Grey Friar",
      "Height(m)": 770,
      "Height(Ft)": 2526,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Southern Fells",
      "Fell Name": "Wetherlam",
      "Height(m)": 762,
      "Height(Ft)": 2500,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Southern Fells",
      "Fell Name": "Slight Side",
      "Height(m)": 762,
      "Height(Ft)": 2500,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Southern Fells",
      "Fell Name": "Pike O' Blisco",
      "Height(m)": 705,
      "Height(Ft)": 2313,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Southern Fells",
      "Fell Name": "Cold Pike",
      "Height(m)": 701,
      "Height(Ft)": 2300,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Southern Fells",
      "Fell Name": "Harter Fell (Eskdale)",
      "Height(m)": 653,
      "Height(Ft)": 2142,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Southern Fells",
      "Fell Name": "Rossett Pike",
      "Height(m)": 650,
      "Height(Ft)": 2133,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Southern Fells",
      "Fell Name": "Seathwaite Fell",
      "Height(m)": 632,
      "Height(Ft)": 2073,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Southern Fells",
      "Fell Name": "Illgill Head",
      "Height(m)": 609,
      "Height(Ft)": 1998,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Southern Fells",
      "Fell Name": "Rosthwaite Fell (Bessyboot)",
      "Height(m)": 550,
      "Height(Ft)": 1807,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Southern Fells",
      "Fell Name": "Hard Knott",
      "Height(m)": 549,
      "Height(Ft)": 1801,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Southern Fells",
      "Fell Name": "Whin Rigg",
      "Height(m)": 535,
      "Height(Ft)": 1755,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Southern Fells",
      "Fell Name": "Green Crag",
      "Height(m)": 489,
      "Height(Ft)": 1604,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Southern Fells",
      "Fell Name": "Lingmoor Fell",
      "Height(m)": 469,
      "Height(Ft)": 1539,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Southern Fells",
      "Fell Name": "Black Fell",
      "Height(m)": 323,
      "Height(Ft)": 1060,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The Southern Fells",
      "Fell Name": "Holme Fell",
      "Height(m)": 317,
      "Height(Ft)": 1040,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The North Western Fells",
      "Fell Name": "Grasmoor",
      "Height(m)": 852,
      "Height(Ft)": 2759,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The North Western Fells",
      "Fell Name": "Eel Crag (Crag Hill)",
      "Height(m)": 839,
      "Height(Ft)": 2753,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The North Western Fells",
      "Fell Name": "Grisedale Pike",
      "Height(m)": 791,
      "Height(Ft)": 2595,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The North Western Fells",
      "Fell Name": "Wandope",
      "Height(m)": 772,
      "Height(Ft)": 2533,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The North Western Fells",
      "Fell Name": "Sail",
      "Height(m)": 773,
      "Height(Ft)": 2536,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The North Western Fells",
      "Fell Name": "Hopegill Head",
      "Height(m)": 770,
      "Height(Ft)": 2526,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The North Western Fells",
      "Fell Name": "Dale Head",
      "Height(m)": 753,
      "Height(Ft)": 2470,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The North Western Fells",
      "Fell Name": "Robinson",
      "Height(m)": 737,
      "Height(Ft)": 2418,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The North Western Fells",
      "Fell Name": "Hindscarth",
      "Height(m)": 727,
      "Height(Ft)": 2385,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The North Western Fells",
      "Fell Name": "Whiteside",
      "Height(m)": 707,
      "Height(Ft)": 2320,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The North Western Fells",
      "Fell Name": "Scar Crags",
      "Height(m)": 672,
      "Height(Ft)": 2205,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The North Western Fells",
      "Fell Name": "Whiteless Pike",
      "Height(m)": 660,
      "Height(Ft)": 2165,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The North Western Fells",
      "Fell Name": "High Spy",
      "Height(m)": 653,
      "Height(Ft)": 2142,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The North Western Fells",
      "Fell Name": "Causey Pike",
      "Height(m)": 637,
      "Height(Ft)": 2090,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The North Western Fells",
      "Fell Name": "Maiden Moor",
      "Height(m)": 576,
      "Height(Ft)": 1890,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The North Western Fells",
      "Fell Name": "Outerside",
      "Height(m)": 568,
      "Height(Ft)": 1864,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The North Western Fells",
      "Fell Name": "Ard Crags",
      "Height(m)": 581,
      "Height(Ft)": 1906,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The North Western Fells",
      "Fell Name": "Lord's Seat",
      "Height(m)": 552,
      "Height(Ft)": 1811,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The North Western Fells",
      "Fell Name": "Knott Rigg",
      "Height(m)": 556,
      "Height(Ft)": 1824,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The North Western Fells",
      "Fell Name": "Whinlatter",
      "Height(m)": 525,
      "Height(Ft)": 1722,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The North Western Fells",
      "Fell Name": "Broom Fell ",
      "Height(m)": 511,
      "Height(Ft)": 1677,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The North Western Fells",
      "Fell Name": "Barf",
      "Height(m)": 468,
      "Height(Ft)": 1535,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The North Western Fells",
      "Fell Name": "Barrow",
      "Height(m)": 455,
      "Height(Ft)": 1493,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The North Western Fells",
      "Fell Name": "Catbells",
      "Height(m)": 451,
      "Height(Ft)": 1480,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The North Western Fells",
      "Fell Name": "Graystones",
      "Height(m)": 456,
      "Height(Ft)": 1496,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The North Western Fells",
      "Fell Name": "Ling Fell",
      "Height(m)": 373,
      "Height(Ft)": 1224,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The North Western Fells",
      "Fell Name": "Sale Fell",
      "Height(m)": 359,
      "Height(Ft)": 1178,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The North Western Fells",
      "Fell Name": "Rannerdale Knotts",
      "Height(m)": 355,
      "Height(Ft)": 1165,
      "Climbed": false,
      "Date": ""
    },
    {
      "Area": "The North Western Fells",
      "Fell Name": "Castle Crag",
      "Height(m)": 290,
      "Height(Ft)": 951,
      "Climbed": false,
      "Date": ""
    }
   ]

// login a user
const loginUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.login(email, password)
    console.log()
    //   token
    const token = createToken(user._id)

    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// signup a user
const signupUser = async (req, res) => {
  const {email, password} = req.body


  try {
    const user = await User.signup(email, password, fells)

    //   token
    const token = createToken(user._id)

    res.status(200).json({email, token, fells})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}



module.exports = { signupUser, loginUser }