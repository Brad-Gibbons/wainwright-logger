const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '2d'})
}

const fells = [
  {
    "area": "The Northern Fells",
    "fellName": "Skiddaw",
    "heightMetre": 931,
    "heightFt": 3054,
    "climbed": false,
    "date": "",
    "id": "3B716E4C"
  },
  {
    "area": "The Northern Fells",
    "fellName": "Blencathra",
    "heightMetre": 868,
    "heightFt": 2848,
    "climbed": false,
    "date": "",
    "id": "1EBDC85A"
  },
  {
    "area": "The Northern Fells",
    "fellName": "Skiddaw Little Man",
    "heightMetre": 865,
    "heightFt": 2838,
    "climbed": false,
    "date": "",
    "id": "E29919B4"
  },
  {
    "area": "The Northern Fells",
    "fellName": "Carl Side",
    "heightMetre": 746,
    "heightFt": 2448,
    "climbed": false,
    "date": "",
    "id": "D10BC995"
  },
  {
    "area": "The Northern Fells",
    "fellName": "Long Side",
    "heightMetre": 734,
    "heightFt": 2408,
    "climbed": false,
    "date": "",
    "id": "6D8BDAC5"
  },
  {
    "area": "The Northern Fells",
    "fellName": "Lonscale Fell",
    "heightMetre": 715,
    "heightFt": 2346,
    "climbed": false,
    "date": "",
    "id": "2F7F6032"
  },
  {
    "area": "The Northern Fells",
    "fellName": "Knott",
    "heightMetre": 710,
    "heightFt": 2329,
    "climbed": false,
    "date": "",
    "id": "7500D54C"
  },
  {
    "area": "The Northern Fells",
    "fellName": "Bowscale Fell",
    "heightMetre": 702,
    "heightFt": 2303,
    "climbed": false,
    "date": "",
    "id": "A9652C01"
  },
  {
    "area": "The Northern Fells",
    "fellName": "Great Calva",
    "heightMetre": 690,
    "heightFt": 2264,
    "climbed": false,
    "date": "",
    "id": "282502CD"
  },
  {
    "area": "The Northern Fells",
    "fellName": "Bannerdale Crags",
    "heightMetre": 683,
    "heightFt": 2241,
    "climbed": false,
    "date": "",
    "id": "CFF6F11C"
  },
  {
    "area": "The Northern Fells",
    "fellName": "Ullock Pike",
    "heightMetre": 680,
    "heightFt": 2231,
    "climbed": false,
    "date": "",
    "id": "E3B967E2"
  },
  {
    "area": "The Northern Fells",
    "fellName": "Bakestall",
    "heightMetre": 673,
    "heightFt": 2208,
    "climbed": false,
    "date": "",
    "id": "5B41370E"
  },
  {
    "area": "The Northern Fells",
    "fellName": "Carrock Fell",
    "heightMetre": 660,
    "heightFt": 2165,
    "climbed": false,
    "date": "",
    "id": "341C8837"
  },
  {
    "area": "The Northern Fells",
    "fellName": "High Pike (Caldbeck)",
    "heightMetre": 658,
    "heightFt": 2159,
    "climbed": false,
    "date": "",
    "id": "722803E4"
  },
  {
    "area": "The Northern Fells",
    "fellName": "Great Scafell",
    "heightMetre": 651,
    "heightFt": 2136,
    "climbed": false,
    "date": "",
    "id": "8DE81715"
  },
  {
    "area": "The Northern Fells",
    "fellName": "Mungrisdale Common",
    "heightMetre": 633,
    "heightFt": 2077,
    "climbed": false,
    "date": "",
    "id": "575EB9F3"
  },
  {
    "area": "The Northern Fells",
    "fellName": "Brae Fell",
    "heightMetre": 586,
    "heightFt": 1923,
    "climbed": false,
    "date": "",
    "id": "65E70F0F"
  },
  {
    "area": "The Northern Fells",
    "fellName": "Meal Fell",
    "heightMetre": 550,
    "heightFt": 1804,
    "climbed": false,
    "date": "",
    "id": "DDD4794B"
  },
  {
    "area": "The Northern Fells",
    "fellName": "Great Cockup",
    "heightMetre": 526,
    "heightFt": 1726,
    "climbed": false,
    "date": "",
    "id": "9CB7AB3B"
  },
  {
    "area": "The Northern Fells",
    "fellName": "Souther Fell",
    "heightMetre": 522,
    "heightFt": 1713,
    "climbed": false,
    "date": "",
    "id": "9D578D16"
  },
  {
    "area": "The Northern Fells",
    "fellName": "Dodd",
    "heightMetre": 502,
    "heightFt": 1647,
    "climbed": false,
    "date": "",
    "id": "5FAFF1F7"
  },
  {
    "area": "The Northern Fells",
    "fellName": "Longlands Fell",
    "heightMetre": 483,
    "heightFt": 1585,
    "climbed": false,
    "date": "",
    "id": "1147C168"
  },
  {
    "area": "The Northern Fells",
    "fellName": "Binsey",
    "heightMetre": 447,
    "heightFt": 1467,
    "climbed": false,
    "date": "",
    "id": "96D2C926"
  },
  {
    "area": "The Northern Fells",
    "fellName": "Latrigg",
    "heightMetre": 368,
    "heightFt": 1207,
    "climbed": false,
    "date": "",
    "id": "F058B0D3"
  },
  {
    "area": "The Far Eastern Fells",
    "fellName": "High Street",
    "heightMetre": 828,
    "heightFt": 2717,
    "climbed": false,
    "date": "",
    "id": "D20EC361"
  },
  {
    "area": "The Far Eastern Fells",
    "fellName": "High Raise (Martindale)",
    "heightMetre": 802,
    "heightFt": 2631,
    "climbed": false,
    "date": "",
    "id": "D2E260F7"
  },
  {
    "area": "The Far Eastern Fells",
    "fellName": "Rampsgill Head",
    "heightMetre": 792,
    "heightFt": 2598,
    "climbed": false,
    "date": "",
    "id": "F5DF1DC7"
  },
  {
    "area": "The Far Eastern Fells",
    "fellName": "Thornthwaite Crag",
    "heightMetre": 784,
    "heightFt": 2572,
    "climbed": false,
    "date": "",
    "id": "E64FBCFD"
  },
  {
    "area": "The Far Eastern Fells",
    "fellName": "Kidsty Pike",
    "heightMetre": 780,
    "heightFt": 2559,
    "climbed": false,
    "date": "",
    "id": "EBFAA0A9"
  },
  {
    "area": "The Far Eastern Fells",
    "fellName": "Harter Fell (Mardale)",
    "heightMetre": 778,
    "heightFt": 2552,
    "climbed": false,
    "date": "",
    "id": "0D1FC92C"
  },
  {
    "area": "The Far Eastern Fells",
    "fellName": "Caudale Moor",
    "heightMetre": 763,
    "heightFt": 2503,
    "climbed": false,
    "date": "",
    "id": "8F435785"
  },
  {
    "area": "The Far Eastern Fells",
    "fellName": "Mardale Ill Bell",
    "heightMetre": 760,
    "heightFt": 2493,
    "climbed": false,
    "date": "",
    "id": "8CE79D60"
  },
  {
    "area": "The Far Eastern Fells",
    "fellName": "Ill Bell",
    "heightMetre": 757,
    "heightFt": 2484,
    "climbed": false,
    "date": "",
    "id": "55E55414"
  },
  {
    "area": "The Far Eastern Fells",
    "fellName": "The Knott",
    "heightMetre": 739,
    "heightFt": 2425,
    "climbed": false,
    "date": "",
    "id": "CC107D76"
  },
  {
    "area": "The Far Eastern Fells",
    "fellName": "Kentmere Pike",
    "heightMetre": 730,
    "heightFt": 2395,
    "climbed": false,
    "date": "",
    "id": "C0C1F16F"
  },
  {
    "area": "The Far Eastern Fells",
    "fellName": "Froswick",
    "heightMetre": 720,
    "heightFt": 2362,
    "climbed": false,
    "date": "",
    "id": "B0EEA21C"
  },
  {
    "area": "The Far Eastern Fells",
    "fellName": "Branstree",
    "heightMetre": 713,
    "heightFt": 2339,
    "climbed": false,
    "date": "",
    "id": "E7284804"
  },
  {
    "area": "The Far Eastern Fells",
    "fellName": "Yoke",
    "heightMetre": 706,
    "heightFt": 2316,
    "climbed": false,
    "date": "",
    "id": "D882896D"
  },
  {
    "area": "The Far Eastern Fells",
    "fellName": "Gray Crag",
    "heightMetre": 699,
    "heightFt": 2293,
    "climbed": false,
    "date": "",
    "id": "18B2CD2D"
  },
  {
    "area": "The Far Eastern Fells",
    "fellName": "Rest Dodd",
    "heightMetre": 696,
    "heightFt": 2283,
    "climbed": false,
    "date": "",
    "id": "0DFFDCCB"
  },
  {
    "area": "The Far Eastern Fells",
    "fellName": "Loadpot Hill",
    "heightMetre": 671,
    "heightFt": 2201,
    "climbed": false,
    "date": "",
    "id": "402D48D5"
  },
  {
    "area": "The Far Eastern Fells",
    "fellName": "Wether Hill",
    "heightMetre": 670,
    "heightFt": 2198,
    "climbed": false,
    "date": "",
    "id": "7A5248A5"
  },
  {
    "area": "The Far Eastern Fells",
    "fellName": "Tarn Crag (Longsleddale)",
    "heightMetre": 664,
    "heightFt": 2178,
    "climbed": false,
    "date": "",
    "id": "A0E59E63"
  },
  {
    "area": "The Far Eastern Fells",
    "fellName": "Place Fell",
    "heightMetre": 657,
    "heightFt": 2156,
    "climbed": false,
    "date": "",
    "id": "CD89D0BD"
  },
  {
    "area": "The Far Eastern Fells",
    "fellName": "Selside Pike",
    "heightMetre": 655,
    "heightFt": 2149,
    "climbed": false,
    "date": "",
    "id": "96FD1772"
  },
  {
    "area": "The Far Eastern Fells",
    "fellName": "Grey Crag",
    "heightMetre": 638,
    "heightFt": 2093,
    "climbed": false,
    "date": "",
    "id": "E09D7CAE"
  },
  {
    "area": "The Far Eastern Fells",
    "fellName": "Hartsop Dodd",
    "heightMetre": 618,
    "heightFt": 2028,
    "climbed": false,
    "date": "",
    "id": "0A7724B9"
  },
  {
    "area": "The Far Eastern Fells",
    "fellName": "Shipman Knotts",
    "heightMetre": 587,
    "heightFt": 1926,
    "climbed": false,
    "date": "",
    "id": "C58C6E7C"
  },
  {
    "area": "The Far Eastern Fells",
    "fellName": "The Nab",
    "heightMetre": 576,
    "heightFt": 1890,
    "climbed": false,
    "date": "",
    "id": "4F1DCBE1"
  },
  {
    "area": "The Far Eastern Fells",
    "fellName": "Angletarn Pikes",
    "heightMetre": 567,
    "heightFt": 1860,
    "climbed": false,
    "date": "",
    "id": "0BD2B2D2"
  },
  {
    "area": "The Far Eastern Fells",
    "fellName": "Brock Crags",
    "heightMetre": 561,
    "heightFt": 1841,
    "climbed": false,
    "date": "",
    "id": "B823350B"
  },
  {
    "area": "The Far Eastern Fells",
    "fellName": "Arthur's Pike",
    "heightMetre": 532,
    "heightFt": 1745,
    "climbed": false,
    "date": "",
    "id": "D8A865C9"
  },
  {
    "area": "The Far Eastern Fells",
    "fellName": "Bonscale Pike",
    "heightMetre": 524,
    "heightFt": 1719,
    "climbed": false,
    "date": "",
    "id": "68EB0896"
  },
  {
    "area": "The Far Eastern Fells",
    "fellName": "Sallows",
    "heightMetre": 516,
    "heightFt": 1693,
    "climbed": false,
    "date": "",
    "id": "DAD6FB86"
  },
  {
    "area": "The Far Eastern Fells",
    "fellName": "Beda Fell",
    "heightMetre": 509,
    "heightFt": 1670,
    "climbed": false,
    "date": "",
    "id": "0BDD9722"
  },
  {
    "area": "The Far Eastern Fells",
    "fellName": "Wansfell",
    "heightMetre": 487,
    "heightFt": 1598,
    "climbed": false,
    "date": "",
    "id": "B259C1DD"
  },
  {
    "area": "The Far Eastern Fells",
    "fellName": "Sour Howes",
    "heightMetre": 483,
    "heightFt": 1585,
    "climbed": false,
    "date": "",
    "id": "6FD1FB56"
  },
  {
    "area": "The Far Eastern Fells",
    "fellName": "Steel Knotts",
    "heightMetre": 432,
    "heightFt": 1417,
    "climbed": false,
    "date": "",
    "id": "09BBF0A6"
  },
  {
    "area": "The Far Eastern Fells",
    "fellName": "Hallin Fell",
    "heightMetre": 388,
    "heightFt": 1273,
    "climbed": false,
    "date": "",
    "id": "6BBBAC7C"
  },
  {
    "area": "The Far Eastern Fells",
    "fellName": "Troutbeck Tongue",
    "heightMetre": 364,
    "heightFt": 1194,
    "climbed": false,
    "date": "",
    "id": "DB77D886"
  },
  {
    "area": "The Eastern Fells",
    "fellName": "Helvellyn",
    "heightMetre": 950,
    "heightFt": 3117,
    "climbed": false,
    "date": "",
    "id": "521B314E"
  },
  {
    "area": "The Eastern Fells",
    "fellName": "Nethermost Pike",
    "heightMetre": 891,
    "heightFt": 2923,
    "climbed": false,
    "date": "",
    "id": "85C00B6A"
  },
  {
    "area": "The Eastern Fells",
    "fellName": "Catstycam",
    "heightMetre": 890,
    "heightFt": 2920,
    "climbed": false,
    "date": "",
    "id": "2978EDAF"
  },
  {
    "area": "The Eastern Fells",
    "fellName": "Raise",
    "heightMetre": 883,
    "heightFt": 2897,
    "climbed": false,
    "date": "",
    "id": "CC5488C6"
  },
  {
    "area": "The Eastern Fells",
    "fellName": "Fairfield",
    "heightMetre": 873,
    "heightFt": 2864,
    "climbed": false,
    "date": "",
    "id": "782C3879"
  },
  {
    "area": "The Eastern Fells",
    "fellName": "White Side",
    "heightMetre": 863,
    "heightFt": 2832,
    "climbed": false,
    "date": "",
    "id": "77934C0A"
  },
  {
    "area": "The Eastern Fells",
    "fellName": "Dollywaggon Pike",
    "heightMetre": 858,
    "heightFt": 2815,
    "climbed": false,
    "date": "",
    "id": "D72032E0"
  },
  {
    "area": "The Eastern Fells",
    "fellName": "Great Dodd",
    "heightMetre": 857,
    "heightFt": 2812,
    "climbed": false,
    "date": "",
    "id": "3314C905"
  },
  {
    "area": "The Eastern Fells",
    "fellName": "Stybarrow Dodd",
    "heightMetre": 843,
    "heightFt": 2766,
    "climbed": false,
    "date": "",
    "id": "846B124C"
  },
  {
    "area": "The Eastern Fells",
    "fellName": "Saint Sunday Crag",
    "heightMetre": 841,
    "heightFt": 2759,
    "climbed": false,
    "date": "",
    "id": "CA1A2F6F"
  },
  {
    "area": "The Eastern Fells",
    "fellName": "Hart Crag",
    "heightMetre": 822,
    "heightFt": 2697,
    "climbed": false,
    "date": "",
    "id": "9AA3D02B"
  },
  {
    "area": "The Eastern Fells",
    "fellName": "Dove Crag",
    "heightMetre": 792,
    "heightFt": 2598,
    "climbed": false,
    "date": "",
    "id": "1E1C85DE"
  },
  {
    "area": "The Eastern Fells",
    "fellName": "Watson's Dodd",
    "heightMetre": 789,
    "heightFt": 2589,
    "climbed": false,
    "date": "",
    "id": "602D7721"
  },
  {
    "area": "The Eastern Fells",
    "fellName": "Red Screes",
    "heightMetre": 776,
    "heightFt": 2546,
    "climbed": false,
    "date": "",
    "id": "C128F50C"
  },
  {
    "area": "The Eastern Fells",
    "fellName": "Great Rigg",
    "heightMetre": 766,
    "heightFt": 2513,
    "climbed": false,
    "date": "",
    "id": "C16E7E73"
  },
  {
    "area": "The Eastern Fells",
    "fellName": "Hart Side",
    "heightMetre": 756,
    "heightFt": 2480,
    "climbed": false,
    "date": "",
    "id": "1BA7D056"
  },
  {
    "area": "The Eastern Fells",
    "fellName": "Seat Sandal",
    "heightMetre": 736,
    "heightFt": 2415,
    "climbed": false,
    "date": "",
    "id": "9D5DE7B9"
  },
  {
    "area": "The Eastern Fells",
    "fellName": "Clough Head",
    "heightMetre": 726,
    "heightFt": 2382,
    "climbed": false,
    "date": "",
    "id": "68F1370C"
  },
  {
    "area": "The Eastern Fells",
    "fellName": "Birkhouse Moor",
    "heightMetre": 718,
    "heightFt": 2356,
    "climbed": false,
    "date": "",
    "id": "2C371666"
  },
  {
    "area": "The Eastern Fells",
    "fellName": "Sheffield Pike",
    "heightMetre": 675,
    "heightFt": 2215,
    "climbed": false,
    "date": "",
    "id": "A8EB5CE6"
  },
  {
    "area": "The Eastern Fells",
    "fellName": "High Pike (Scandale)",
    "heightMetre": 656,
    "heightFt": 2152,
    "climbed": false,
    "date": "",
    "id": "BFC08FB1"
  },
  {
    "area": "The Eastern Fells",
    "fellName": "Middle Dodd",
    "heightMetre": 654,
    "heightFt": 2146,
    "climbed": false,
    "date": "",
    "id": "441BCFC7"
  },
  {
    "area": "The Eastern Fells",
    "fellName": "Little Hart Crag",
    "heightMetre": 637,
    "heightFt": 2090,
    "climbed": false,
    "date": "",
    "id": "2AA11B96"
  },
  {
    "area": "The Eastern Fells",
    "fellName": "Birks",
    "heightMetre": 622,
    "heightFt": 2041,
    "climbed": false,
    "date": "",
    "id": "7C5650C5"
  },
  {
    "area": "The Eastern Fells",
    "fellName": "Heron Pike",
    "heightMetre": 612,
    "heightFt": 2008,
    "climbed": false,
    "date": "",
    "id": "B401F8A1"
  },
  {
    "area": "The Eastern Fells",
    "fellName": "Hartsop Above How",
    "heightMetre": 580,
    "heightFt": 1903,
    "climbed": false,
    "date": "",
    "id": "A3C9103F"
  },
  {
    "area": "The Eastern Fells",
    "fellName": "Great Mell Fell",
    "heightMetre": 537,
    "heightFt": 1762,
    "climbed": false,
    "date": "",
    "id": "0574167D"
  },
  {
    "area": "The Eastern Fells",
    "fellName": "High Hartsop Dodd",
    "heightMetre": 519,
    "heightFt": 1703,
    "climbed": false,
    "date": "",
    "id": "4FCF62AA"
  },
  {
    "area": "The Eastern Fells",
    "fellName": "Low Pike",
    "heightMetre": 508,
    "heightFt": 1667,
    "climbed": false,
    "date": "",
    "id": "95F98C7A"
  },
  {
    "area": "The Eastern Fells",
    "fellName": "Little Mell Fell",
    "heightMetre": 505,
    "heightFt": 1657,
    "climbed": false,
    "date": "",
    "id": "81F14648"
  },
  {
    "area": "The Eastern Fells",
    "fellName": "Stone Arthur",
    "heightMetre": 500,
    "heightFt": 1640,
    "climbed": false,
    "date": "",
    "id": "C573BEFE"
  },
  {
    "area": "The Eastern Fells",
    "fellName": "Gowbarrow Fell",
    "heightMetre": 481,
    "heightFt": 1578,
    "climbed": false,
    "date": "",
    "id": "D10746A2"
  },
  {
    "area": "The Eastern Fells",
    "fellName": "Glenridding Dodd",
    "heightMetre": 442,
    "heightFt": 1450,
    "climbed": false,
    "date": "",
    "id": "EAC9E7B9"
  },
  {
    "area": "The Eastern Fells",
    "fellName": "Nab Scar",
    "heightMetre": 440,
    "heightFt": 1444,
    "climbed": false,
    "date": "",
    "id": "8BDF94F2"
  },
  {
    "area": "The Eastern Fells",
    "fellName": "Arnison Crag",
    "heightMetre": 433,
    "heightFt": 1421,
    "climbed": false,
    "date": "",
    "id": "BC22F6BC"
  },
  {
    "area": "The Central Fells",
    "fellName": "High Raise (Langdale)",
    "heightMetre": 762,
    "heightFt": 2500,
    "climbed": false,
    "date": "",
    "id": "473A6DE0"
  },
  {
    "area": "The Central Fells",
    "fellName": "Harrison Stickle",
    "heightMetre": 736,
    "heightFt": 2415,
    "climbed": false,
    "date": "",
    "id": "9EC8FBCB"
  },
  {
    "area": "The Central Fells",
    "fellName": "Sergeant Man",
    "heightMetre": 730,
    "heightFt": 2395,
    "climbed": false,
    "date": "",
    "id": "47C1180A"
  },
  {
    "area": "The Central Fells",
    "fellName": "Ullscarf",
    "heightMetre": 726,
    "heightFt": 2382,
    "climbed": false,
    "date": "",
    "id": "F2FB93A3"
  },
  {
    "area": "The Central Fells",
    "fellName": "Thunacar Knott",
    "heightMetre": 723,
    "heightFt": 2372,
    "climbed": false,
    "date": "",
    "id": "4EFC1629"
  },
  {
    "area": "The Central Fells",
    "fellName": "Pike O'Stickle",
    "heightMetre": 709,
    "heightFt": 2326,
    "climbed": false,
    "date": "",
    "id": "6A5A029C"
  },
  {
    "area": "The Central Fells",
    "fellName": "Pavey Ark",
    "heightMetre": 700,
    "heightFt": 2297,
    "climbed": false,
    "date": "",
    "id": "E5825D66"
  },
  {
    "area": "The Central Fells",
    "fellName": "Loft Crag",
    "heightMetre": 680,
    "heightFt": 2231,
    "climbed": false,
    "date": "",
    "id": "ECE4FB80"
  },
  {
    "area": "The Central Fells",
    "fellName": "High Seat",
    "heightMetre": 608,
    "heightFt": 1995,
    "climbed": false,
    "date": "",
    "id": "C5E4A623"
  },
  {
    "area": "The Central Fells",
    "fellName": "Bleaberry Fell",
    "heightMetre": 590,
    "heightFt": 1936,
    "climbed": false,
    "date": "",
    "id": "BC233F6F"
  },
  {
    "area": "The Central Fells",
    "fellName": "Sergeant's Crag",
    "heightMetre": 571,
    "heightFt": 1873,
    "climbed": false,
    "date": "",
    "id": "5875295B"
  },
  {
    "area": "The Central Fells",
    "fellName": "Steel Fell",
    "heightMetre": 553,
    "heightFt": 1814,
    "climbed": false,
    "date": "",
    "id": "14F38C96"
  },
  {
    "area": "The Central Fells",
    "fellName": "Tarn Crag (Easedale)",
    "heightMetre": 550,
    "heightFt": 1804,
    "climbed": false,
    "date": "",
    "id": "A13D5E30"
  },
  {
    "area": "The Central Fells",
    "fellName": "Blea Rigg",
    "heightMetre": 541,
    "heightFt": 1775,
    "climbed": false,
    "date": "",
    "id": "EA49927B"
  },
  {
    "area": "The Central Fells",
    "fellName": "Calf Crag",
    "heightMetre": 537,
    "heightFt": 1762,
    "climbed": false,
    "date": "",
    "id": "CC788E66"
  },
  {
    "area": "The Central Fells",
    "fellName": "Eagle Crag",
    "heightMetre": 520,
    "heightFt": 1706,
    "climbed": false,
    "date": "",
    "id": "CCBAD9D5"
  },
  {
    "area": "The Central Fells",
    "fellName": "High Tove",
    "heightMetre": 515,
    "heightFt": 1690,
    "climbed": false,
    "date": "",
    "id": "F4035467"
  },
  {
    "area": "The Central Fells",
    "fellName": "Armboth Fell",
    "heightMetre": 479,
    "heightFt": 1572,
    "climbed": false,
    "date": "",
    "id": "379BDB73"
  },
  {
    "area": "The Central Fells",
    "fellName": "Raven Crag",
    "heightMetre": 461,
    "heightFt": 1512,
    "climbed": false,
    "date": "",
    "id": "669D53BA"
  },
  {
    "area": "The Central Fells",
    "fellName": "Great Crag",
    "heightMetre": 440,
    "heightFt": 1444,
    "climbed": false,
    "date": "",
    "id": "4BBCB3C0"
  },
  {
    "area": "The Central Fells",
    "fellName": "Gibson Knott",
    "heightMetre": 420,
    "heightFt": 1378,
    "climbed": false,
    "date": "",
    "id": "D9DBC593"
  },
  {
    "area": "The Central Fells",
    "fellName": "Grange Fell",
    "heightMetre": 410,
    "heightFt": 1345,
    "climbed": false,
    "date": "",
    "id": "2CD82B6C"
  },
  {
    "area": "The Central Fells",
    "fellName": "Helm Crag",
    "heightMetre": 405,
    "heightFt": 1329,
    "climbed": false,
    "date": "",
    "id": "8680AA63"
  },
  {
    "area": "The Central Fells",
    "fellName": "Silver How",
    "heightMetre": 394,
    "heightFt": 1293,
    "climbed": false,
    "date": "",
    "id": "68BF04C0"
  },
  {
    "area": "The Central Fells",
    "fellName": "Walla Crag",
    "heightMetre": 379,
    "heightFt": 1243,
    "climbed": false,
    "date": "",
    "id": "55D3B270"
  },
  {
    "area": "The Central Fells",
    "fellName": "High Rigg",
    "heightMetre": 354,
    "heightFt": 1161,
    "climbed": false,
    "date": "",
    "id": "E174C7DC"
  },
  {
    "area": "The Central Fells",
    "fellName": "Loughrigg Fell",
    "heightMetre": 335,
    "heightFt": 1099,
    "climbed": false,
    "date": "",
    "id": "6AD735C6"
  },
  {
    "area": "The Western Fells",
    "fellName": "Great Gable",
    "heightMetre": 899,
    "heightFt": 2949,
    "climbed": false,
    "date": "",
    "id": "F5127A48"
  },
  {
    "area": "The Western Fells",
    "fellName": "Pillar",
    "heightMetre": 892,
    "heightFt": 2927,
    "climbed": false,
    "date": "",
    "id": "7504CDE7"
  },
  {
    "area": "The Western Fells",
    "fellName": "Scoat Fell",
    "heightMetre": 841,
    "heightFt": 2759,
    "climbed": false,
    "date": "",
    "id": "1296FD3C"
  },
  {
    "area": "The Western Fells",
    "fellName": "Red Pike (Wasdale)",
    "heightMetre": 826,
    "heightFt": 2710,
    "climbed": false,
    "date": "",
    "id": "30E260DA"
  },
  {
    "area": "The Western Fells",
    "fellName": "Steeple",
    "heightMetre": 819,
    "heightFt": 2687,
    "climbed": false,
    "date": "",
    "id": "8913FFA5"
  },
  {
    "area": "The Western Fells",
    "fellName": "High Stile",
    "heightMetre": 807,
    "heightFt": 2648,
    "climbed": false,
    "date": "",
    "id": "2E79BBCE"
  },
  {
    "area": "The Western Fells",
    "fellName": "Kirk Fell",
    "heightMetre": 802,
    "heightFt": 2631,
    "climbed": false,
    "date": "",
    "id": "5221C009"
  },
  {
    "area": "The Western Fells",
    "fellName": "Haycock",
    "heightMetre": 797,
    "heightFt": 2615,
    "climbed": false,
    "date": "",
    "id": "A3CA0480"
  },
  {
    "area": "The Western Fells",
    "fellName": "Green Gable",
    "heightMetre": 801,
    "heightFt": 2628,
    "climbed": false,
    "date": "",
    "id": "807308D3"
  },
  {
    "area": "The Western Fells",
    "fellName": "Red Pike (Buttermere)",
    "heightMetre": 755,
    "heightFt": 2477,
    "climbed": false,
    "date": "",
    "id": "8AEBA046"
  },
  {
    "area": "The Western Fells",
    "fellName": "High Crag",
    "heightMetre": 744,
    "heightFt": 2441,
    "climbed": false,
    "date": "",
    "id": "2B062217"
  },
  {
    "area": "The Western Fells",
    "fellName": "Brandreth",
    "heightMetre": 715,
    "heightFt": 2346,
    "climbed": false,
    "date": "",
    "id": "36145E8F"
  },
  {
    "area": "The Western Fells",
    "fellName": "Caw Fell",
    "heightMetre": 690,
    "heightFt": 2264,
    "climbed": false,
    "date": "",
    "id": "6C06AC52"
  },
  {
    "area": "The Western Fells",
    "fellName": "Grey Knotts",
    "heightMetre": 697,
    "heightFt": 2287,
    "climbed": false,
    "date": "",
    "id": "9832FD12"
  },
  {
    "area": "The Western Fells",
    "fellName": "Seatallan",
    "heightMetre": 692,
    "heightFt": 2270,
    "climbed": false,
    "date": "",
    "id": "D33F927F"
  },
  {
    "area": "The Western Fells",
    "fellName": "Fleetwith Pike",
    "heightMetre": 648,
    "heightFt": 2126,
    "climbed": false,
    "date": "",
    "id": "CCB658D8"
  },
  {
    "area": "The Western Fells",
    "fellName": "Base Brown",
    "heightMetre": 646,
    "heightFt": 2119,
    "climbed": false,
    "date": "",
    "id": "6E3B8EB6"
  },
  {
    "area": "The Western Fells",
    "fellName": "Starling Dodd",
    "heightMetre": 633,
    "heightFt": 2077,
    "climbed": false,
    "date": "",
    "id": "8D85E096"
  },
  {
    "area": "The Western Fells",
    "fellName": "Yewbarrow",
    "heightMetre": 628,
    "heightFt": 2060,
    "climbed": false,
    "date": "",
    "id": "E725F0C2"
  },
  {
    "area": "The Western Fells",
    "fellName": "Great Borne",
    "heightMetre": 616,
    "heightFt": 2021,
    "climbed": false,
    "date": "",
    "id": "B8761DCD"
  },
  {
    "area": "The Western Fells",
    "fellName": "Haystacks",
    "heightMetre": 597,
    "heightFt": 1959,
    "climbed": false,
    "date": "",
    "id": "CE649C38"
  },
  {
    "area": "The Western Fells",
    "fellName": "Middle Fell ",
    "heightMetre": 582,
    "heightFt": 1909,
    "climbed": false,
    "date": "",
    "id": "4EDD644F"
  },
  {
    "area": "The Western Fells",
    "fellName": "Blake Fell ",
    "heightMetre": 573,
    "heightFt": 1880,
    "climbed": false,
    "date": "",
    "id": "B4FF704B"
  },
  {
    "area": "The Western Fells",
    "fellName": "Lank Rigg",
    "heightMetre": 541,
    "heightFt": 1775,
    "climbed": false,
    "date": "",
    "id": "579A0155"
  },
  {
    "area": "The Western Fells",
    "fellName": "Gavel Fell",
    "heightMetre": 526,
    "heightFt": 1726,
    "climbed": false,
    "date": "",
    "id": "8E78931F"
  },
  {
    "area": "The Western Fells",
    "fellName": "Crag Fell",
    "heightMetre": 523,
    "heightFt": 1716,
    "climbed": false,
    "date": "",
    "id": "2F1C7B0B"
  },
  {
    "area": "The Western Fells",
    "fellName": "Mellbreak",
    "heightMetre": 512,
    "heightFt": 1680,
    "climbed": false,
    "date": "",
    "id": "D2FC4A16"
  },
  {
    "area": "The Western Fells",
    "fellName": "Hen Comb",
    "heightMetre": 509,
    "heightFt": 1670,
    "climbed": false,
    "date": "",
    "id": "5F1DB5A4"
  },
  {
    "area": "The Western Fells",
    "fellName": "Grike",
    "heightMetre": 488,
    "heightFt": 1601,
    "climbed": false,
    "date": "",
    "id": "F6065F4C"
  },
  {
    "area": "The Western Fells",
    "fellName": "Burnbank Fell",
    "heightMetre": 475,
    "heightFt": 1558,
    "climbed": false,
    "date": "",
    "id": "69D2107C"
  },
  {
    "area": "The Western Fells",
    "fellName": "Low Fell",
    "heightMetre": 423,
    "heightFt": 1388,
    "climbed": false,
    "date": "",
    "id": "15063F05"
  },
  {
    "area": "The Western Fells",
    "fellName": "Buckbarrow",
    "heightMetre": 420,
    "heightFt": 1378,
    "climbed": false,
    "date": "",
    "id": "B7E7D204"
  },
  {
    "area": "The Western Fells",
    "fellName": "Fellbarrow",
    "heightMetre": 416,
    "heightFt": 1365,
    "climbed": false,
    "date": "",
    "id": "D46A4400"
  },
  {
    "area": "The Southern Fells",
    "fellName": "Scafell Pike",
    "heightMetre": 978,
    "heightFt": 3209,
    "climbed": false,
    "date": "",
    "id": "4EB075A9"
  },
  {
    "area": "The Southern Fells",
    "fellName": "Scafell ",
    "heightMetre": 964,
    "heightFt": 3163,
    "climbed": false,
    "date": "",
    "id": "7B0DEAE1"
  },
  {
    "area": "The Southern Fells",
    "fellName": "Great End",
    "heightMetre": 910,
    "heightFt": 2986,
    "climbed": false,
    "date": "",
    "id": "31B9AAB6"
  },
  {
    "area": "The Southern Fells",
    "fellName": "Bowfell",
    "heightMetre": 902,
    "heightFt": 2959,
    "climbed": false,
    "date": "",
    "id": "B38DD661"
  },
  {
    "area": "The Southern Fells",
    "fellName": "Esk Pike",
    "heightMetre": 885,
    "heightFt": 2904,
    "climbed": false,
    "date": "",
    "id": "821421B5"
  },
  {
    "area": "The Southern Fells",
    "fellName": "Crinkle Crags",
    "heightMetre": 859,
    "heightFt": 2818,
    "climbed": false,
    "date": "",
    "id": "5BBFE64B"
  },
  {
    "area": "The Southern Fells",
    "fellName": "Coniston Old Man",
    "heightMetre": 803,
    "heightFt": 2635,
    "climbed": false,
    "date": "",
    "id": "0AD3749C"
  },
  {
    "area": "The Southern Fells",
    "fellName": "Swirl How",
    "heightMetre": 802,
    "heightFt": 2631,
    "climbed": false,
    "date": "",
    "id": "53BCC79B"
  },
  {
    "area": "The Southern Fells",
    "fellName": "Lingmell",
    "heightMetre": 800,
    "heightFt": 2625,
    "climbed": false,
    "date": "",
    "id": "0733BF15"
  },
  {
    "area": "The Southern Fells",
    "fellName": "Brim Fell",
    "heightMetre": 796,
    "heightFt": 2612,
    "climbed": false,
    "date": "",
    "id": "E2CBBA7D"
  },
  {
    "area": "The Southern Fells",
    "fellName": "Great Carrs",
    "heightMetre": 780,
    "heightFt": 2559,
    "climbed": false,
    "date": "",
    "id": "7086BE9C"
  },
  {
    "area": "The Southern Fells",
    "fellName": "Allen Crags",
    "heightMetre": 785,
    "heightFt": 2575,
    "climbed": false,
    "date": "",
    "id": "90587FEE"
  },
  {
    "area": "The Southern Fells",
    "fellName": "Glaramara",
    "heightMetre": 783,
    "heightFt": 2569,
    "climbed": false,
    "date": "",
    "id": "01D389C4"
  },
  {
    "area": "The Southern Fells",
    "fellName": "Dow Crag",
    "heightMetre": 778,
    "heightFt": 2552,
    "climbed": false,
    "date": "",
    "id": "F526A1E8"
  },
  {
    "area": "The Southern Fells",
    "fellName": "Grey Friar",
    "heightMetre": 770,
    "heightFt": 2526,
    "climbed": false,
    "date": "",
    "id": "AA31368F"
  },
  {
    "area": "The Southern Fells",
    "fellName": "Wetherlam",
    "heightMetre": 762,
    "heightFt": 2500,
    "climbed": false,
    "date": "",
    "id": "3C748996"
  },
  {
    "area": "The Southern Fells",
    "fellName": "Slight Side",
    "heightMetre": 762,
    "heightFt": 2500,
    "climbed": false,
    "date": "",
    "id": "3E95FF9B"
  },
  {
    "area": "The Southern Fells",
    "fellName": "Pike O' Blisco",
    "heightMetre": 705,
    "heightFt": 2313,
    "climbed": false,
    "date": "",
    "id": "B0F41C14"
  },
  {
    "area": "The Southern Fells",
    "fellName": "Cold Pike",
    "heightMetre": 701,
    "heightFt": 2300,
    "climbed": false,
    "date": "",
    "id": "9559C0A3"
  },
  {
    "area": "The Southern Fells",
    "fellName": "Harter Fell (Eskdale)",
    "heightMetre": 653,
    "heightFt": 2142,
    "climbed": false,
    "date": "",
    "id": "9DA5CA64"
  },
  {
    "area": "The Southern Fells",
    "fellName": "Rossett Pike",
    "heightMetre": 650,
    "heightFt": 2133,
    "climbed": false,
    "date": "",
    "id": "9A43DBDF"
  },
  {
    "area": "The Southern Fells",
    "fellName": "Seathwaite Fell",
    "heightMetre": 632,
    "heightFt": 2073,
    "climbed": false,
    "date": "",
    "id": "09FE5006"
  },
  {
    "area": "The Southern Fells",
    "fellName": "Illgill Head",
    "heightMetre": 609,
    "heightFt": 1998,
    "climbed": false,
    "date": "",
    "id": "76E9DC70"
  },
  {
    "area": "The Southern Fells",
    "fellName": "Rosthwaite Fell (Bessyboot)",
    "heightMetre": 550,
    "heightFt": 1807,
    "climbed": false,
    "date": "",
    "id": "EA8E8E97"
  },
  {
    "area": "The Southern Fells",
    "fellName": "Hard Knott",
    "heightMetre": 549,
    "heightFt": 1801,
    "climbed": false,
    "date": "",
    "id": "51A568EE"
  },
  {
    "area": "The Southern Fells",
    "fellName": "Whin Rigg",
    "heightMetre": 535,
    "heightFt": 1755,
    "climbed": false,
    "date": "",
    "id": "76E83E14"
  },
  {
    "area": "The Southern Fells",
    "fellName": "Green Crag",
    "heightMetre": 489,
    "heightFt": 1604,
    "climbed": false,
    "date": "",
    "id": "EABD5CC8"
  },
  {
    "area": "The Southern Fells",
    "fellName": "Lingmoor Fell",
    "heightMetre": 469,
    "heightFt": 1539,
    "climbed": false,
    "date": "",
    "id": "99F1635F"
  },
  {
    "area": "The Southern Fells",
    "fellName": "Black Fell",
    "heightMetre": 323,
    "heightFt": 1060,
    "climbed": false,
    "date": "",
    "id": "1CC71BD0"
  },
  {
    "area": "The Southern Fells",
    "fellName": "Holme Fell",
    "heightMetre": 317,
    "heightFt": 1040,
    "climbed": false,
    "date": "",
    "id": "3E83C2CE"
  },
  {
    "area": "The North Western Fells",
    "fellName": "Grasmoor",
    "heightMetre": 852,
    "heightFt": 2759,
    "climbed": false,
    "date": "",
    "id": "E8026EBE"
  },
  {
    "area": "The North Western Fells",
    "fellName": "Eel Crag (Crag Hill)",
    "heightMetre": 839,
    "heightFt": 2753,
    "climbed": false,
    "date": "",
    "id": "5E54C1B3"
  },
  {
    "area": "The North Western Fells",
    "fellName": "Grisedale Pike",
    "heightMetre": 791,
    "heightFt": 2595,
    "climbed": false,
    "date": "",
    "id": "B9C38555"
  },
  {
    "area": "The North Western Fells",
    "fellName": "Wandope",
    "heightMetre": 772,
    "heightFt": 2533,
    "climbed": false,
    "date": "",
    "id": "B7F569D9"
  },
  {
    "area": "The North Western Fells",
    "fellName": "Sail",
    "heightMetre": 773,
    "heightFt": 2536,
    "climbed": false,
    "date": "",
    "id": "6623ED4E"
  },
  {
    "area": "The North Western Fells",
    "fellName": "Hopegill Head",
    "heightMetre": 770,
    "heightFt": 2526,
    "climbed": false,
    "date": "",
    "id": "618187CB"
  },
  {
    "area": "The North Western Fells",
    "fellName": "Dale Head",
    "heightMetre": 753,
    "heightFt": 2470,
    "climbed": false,
    "date": "",
    "id": "346C8EDE"
  },
  {
    "area": "The North Western Fells",
    "fellName": "Robinson",
    "heightMetre": 737,
    "heightFt": 2418,
    "climbed": false,
    "date": "",
    "id": "BB900F81"
  },
  {
    "area": "The North Western Fells",
    "fellName": "Hindscarth",
    "heightMetre": 727,
    "heightFt": 2385,
    "climbed": false,
    "date": "",
    "id": "2B380B46"
  },
  {
    "area": "The North Western Fells",
    "fellName": "Whiteside",
    "heightMetre": 707,
    "heightFt": 2320,
    "climbed": false,
    "date": "",
    "id": "B266450C"
  },
  {
    "area": "The North Western Fells",
    "fellName": "Scar Crags",
    "heightMetre": 672,
    "heightFt": 2205,
    "climbed": false,
    "date": "",
    "id": "C96E0968"
  },
  {
    "area": "The North Western Fells",
    "fellName": "Whiteless Pike",
    "heightMetre": 660,
    "heightFt": 2165,
    "climbed": false,
    "date": "",
    "id": "9592547C"
  },
  {
    "area": "The North Western Fells",
    "fellName": "High Spy",
    "heightMetre": 653,
    "heightFt": 2142,
    "climbed": false,
    "date": "",
    "id": "B22D4879"
  },
  {
    "area": "The North Western Fells",
    "fellName": "Causey Pike",
    "heightMetre": 637,
    "heightFt": 2090,
    "climbed": false,
    "date": "",
    "id": "DF295399"
  },
  {
    "area": "The North Western Fells",
    "fellName": "Maiden Moor",
    "heightMetre": 576,
    "heightFt": 1890,
    "climbed": false,
    "date": "",
    "id": "BCC38BDD"
  },
  {
    "area": "The North Western Fells",
    "fellName": "Outerside",
    "heightMetre": 568,
    "heightFt": 1864,
    "climbed": false,
    "date": "",
    "id": "072FDEB1"
  },
  {
    "area": "The North Western Fells",
    "fellName": "Ard Crags",
    "heightMetre": 581,
    "heightFt": 1906,
    "climbed": false,
    "date": "",
    "id": "E42FB670"
  },
  {
    "area": "The North Western Fells",
    "fellName": "Lord's Seat",
    "heightMetre": 552,
    "heightFt": 1811,
    "climbed": false,
    "date": "",
    "id": "6473C2CC"
  },
  {
    "area": "The North Western Fells",
    "fellName": "Knott Rigg",
    "heightMetre": 556,
    "heightFt": 1824,
    "climbed": false,
    "date": "",
    "id": "DC9BA201"
  },
  {
    "area": "The North Western Fells",
    "fellName": "Whinlatter",
    "heightMetre": 525,
    "heightFt": 1722,
    "climbed": false,
    "date": "",
    "id": "45906DA8"
  },
  {
    "area": "The North Western Fells",
    "fellName": "Broom Fell ",
    "heightMetre": 511,
    "heightFt": 1677,
    "climbed": false,
    "date": "",
    "id": "960091E6"
  },
  {
    "area": "The North Western Fells",
    "fellName": "Barf",
    "heightMetre": 468,
    "heightFt": 1535,
    "climbed": false,
    "date": "",
    "id": "F23F123B"
  },
  {
    "area": "The North Western Fells",
    "fellName": "Barrow",
    "heightMetre": 455,
    "heightFt": 1493,
    "climbed": false,
    "date": "",
    "id": "B3024AB5"
  },
  {
    "area": "The North Western Fells",
    "fellName": "Catbells",
    "heightMetre": 451,
    "heightFt": 1480,
    "climbed": false,
    "date": "",
    "id": "71AEBB55"
  },
  {
    "area": "The North Western Fells",
    "fellName": "Graystones",
    "heightMetre": 456,
    "heightFt": 1496,
    "climbed": false,
    "date": "",
    "id": "573A27F4"
  },
  {
    "area": "The North Western Fells",
    "fellName": "Ling Fell",
    "heightMetre": 373,
    "heightFt": 1224,
    "climbed": false,
    "date": "",
    "id": "85AFBBB6"
  },
  {
    "area": "The North Western Fells",
    "fellName": "Sale Fell",
    "heightMetre": 359,
    "heightFt": 1178,
    "climbed": false,
    "date": "",
    "id": "99ECC5CF"
  },
  {
    "area": "The North Western Fells",
    "fellName": "Rannerdale Knotts",
    "heightMetre": 355,
    "heightFt": 1165,
    "climbed": false,
    "date": "",
    "id": "B7413084"
  },
  {
    "area": "The North Western Fells",
    "fellName": "Castle Crag",
    "heightMetre": 290,
    "heightFt": 951,
    "climbed": false,
    "date": "",
    "id": "26BA0BED"
  }
 ]

// login a user
const loginUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.login(email, password)

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