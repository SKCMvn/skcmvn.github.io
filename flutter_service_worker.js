'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "64252a3f6a746341b0d3f9d719259fd4",
"version.json": "05cabb68a05bc57b2892b2d5dce8eae5",
"index.html": "406372030d1cf134f507bdac6164d6f8",
"/": "406372030d1cf134f507bdac6164d6f8",
"main.dart.js": "e489570786185ff364d28da03a1d6b6f",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8b227d784778be84e496f786f1f2ae43",
"assets/AssetManifest.json": "5b81093904669c1667595f26f1b1ad40",
"assets/NOTICES": "6a9d770592ce2cbf761923a3b7c5b6d9",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "d391dbfab5d66270429f71b84bd28f8f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "673bced8966b1e3ec1229b562e8dbff2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "7f0e6e520ed42aedae7263bc7266c43f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "8c6f0c960e519dda3f8b46da6fd5a459",
"assets/fonts/MaterialIcons-Regular.otf": "1dea9bb6073c8ffc3ef036911ed51ac3",
"assets/assets/shareit1data.json": "1c9851c624f26a00e8d1c9f5195661c4",
"assets/assets/eng-shareit1/093_1.mp3": "4b4e5d408633c1cd26513c530804f82e",
"assets/assets/eng-shareit1/029_3.mp3": "f564586e95521b9abc3ee6b83a1bfd53",
"assets/assets/eng-shareit1/091_3.mp3": "fbaa9852626bae6c8a2d1df8bc497a8c",
"assets/assets/eng-shareit1/053_1.mp3": "96d0630863bf6a94c931a56486c2bb2d",
"assets/assets/eng-shareit1/016_1.mp3": "7f01f7359113dfae5b69aaf085fbf934",
"assets/assets/eng-shareit1/016.jpg": "8a32ee6ffff83ae7c27d35138f70eb07",
"assets/assets/eng-shareit1/002.jpg": "3f3d62a894fa99f6d0fd106a9b2e4e78",
"assets/assets/eng-shareit1/003.jpg": "ba9431111f4c9b4d6017238983ba3670",
"assets/assets/eng-shareit1/017.jpg": "138f7f33c73bf4d79b066060d92b45d6",
"assets/assets/eng-shareit1/077_1.mp3": "373246d102374cba83e8fd97ce222718",
"assets/assets/eng-shareit1/091_2.mp3": "870233e7f14198fbc78e9c8fa49f0d0d",
"assets/assets/eng-shareit1/029_2.mp3": "7927e50d373deb20e4f65f6d6715030a",
"assets/assets/eng-shareit1/093_2.mp3": "8cab275663cd399ef325810defc888ca",
"assets/assets/eng-shareit1/077_3.mp3": "680e4c1d59919dc2fd86f1daab32e27f",
"assets/assets/eng-shareit1/088_1.mp3": "0e5efc8f6e60dda4c11e1d16bf160aa9",
"assets/assets/eng-shareit1/075_1.mp3": "06182f4d80298b62884a3721a9a4489b",
"assets/assets/eng-shareit1/016_2.mp3": "250b1e40ed0a612ea7e86b467ef645d4",
"assets/assets/eng-shareit1/029.jpg": "4521baa61c9b372c493dada3b2d18ff1",
"assets/assets/eng-shareit1/053_2.mp3": "6dd8559f8f4ebeb89a5b34086ee502e4",
"assets/assets/eng-shareit1/001.jpg": "6b1b835d0fc4779b2709f07c273b4ec7",
"assets/assets/eng-shareit1/015.jpg": "47522eaa42d19cb8aaac83b702609dc3",
"assets/assets/eng-shareit1/014.jpg": "9e42d68c4d0136969028c54e4c3799d9",
"assets/assets/eng-shareit1/028.jpg": "6e1e1f674ae9fe01b6154d2e806444e9",
"assets/assets/eng-shareit1/053_3.mp3": "9d1d79534c7ab06021f57ec93960e863",
"assets/assets/eng-shareit1/051_1.mp3": "4a8dda54abef01a024c14ad16b773ecd",
"assets/assets/eng-shareit1/077_2.mp3": "759b35da224a7dfb2178002c223c2811",
"assets/assets/eng-shareit1/091_1.mp3": "c84fb5b1acfe2f231d7c1d932e5b9eb0",
"assets/assets/eng-shareit1/029_1.mp3": "cff24828b44e5ddcede0115501fd8642",
"assets/assets/eng-shareit1/055_1.mp3": "af6a212515229ee12ee0a9ac7748ef09",
"assets/assets/eng-shareit1/010_1.mp3": "34175fe9efddffba580ec1ba95b3bd4b",
"assets/assets/eng-shareit1/036_2.mp3": "6afef97539b5ed1dda608311921bd7a8",
"assets/assets/eng-shareit1/073_2.mp3": "7f76f78f048c93f86dad74031139df0a",
"assets/assets/eng-shareit1/004.jpg": "4f534c370efd8fb9fbb6200ec335a2c7",
"assets/assets/eng-shareit1/095_1.mp3": "4e9880a64991c81d33f56e028aaadea6",
"assets/assets/eng-shareit1/010.jpg": "7fc5077a54530d5814434d985663b826",
"assets/assets/eng-shareit1/038.jpg": "43dda2c57dae1661576a44f3df2e7085",
"assets/assets/eng-shareit1/039.jpg": "a3a57d968ae74423eeb3d63c5aed93ae",
"assets/assets/eng-shareit1/011.jpg": "198c1e125ad81070dcda8754d4a38afa",
"assets/assets/eng-shareit1/005.jpg": "fad70ba80aa28d36d63dc9dbed3c608b",
"assets/assets/eng-shareit1/097_2.mp3": "94bd4467b628296159c7ca874689a67a",
"assets/assets/eng-shareit1/009_1.mp3": "b7b99442f5692458fc972b5faa347db2",
"assets/assets/eng-shareit1/071_1.mp3": "fe68797da75f2bf3fab58c59da81acec",
"assets/assets/eng-shareit1/012_2.mp3": "7f84d91149c3bb927fb2304dd95b9d4d",
"assets/assets/eng-shareit1/091_4.mp3": "0458ce40fe44bebc97a84754d31c6b74",
"assets/assets/eng-shareit1/029_4.mp3": "f59b9ec794d0e4bc4b70f9f644bf454c",
"assets/assets/eng-shareit1/073_1.mp3": "2cb22b2f2e5209be31b08dd2ebdc3fbc",
"assets/assets/eng-shareit1/036_1.mp3": "c73f71cddc41558c8a273ef1698d50cb",
"assets/assets/eng-shareit1/010_2.mp3": "c99a4a12015023276553e232232a3e04",
"assets/assets/eng-shareit1/013.jpg": "5b34cef9f0eaa7185dbe1ad23b06b30a",
"assets/assets/eng-shareit1/007.jpg": "6fa7b21ebaa21514e72af3faaf3e7da7",
"assets/assets/eng-shareit1/053_4.mp3": "bda0f2569389bd9c2cbb1f80a085ffd6",
"assets/assets/eng-shareit1/006.jpg": "0772cd4f377fb44137945121b546265b",
"assets/assets/eng-shareit1/012.jpg": "f0e36a55702fc5365bedb71392e60c58",
"assets/assets/eng-shareit1/077_4.mp3": "096ed8b0b918c64f543aedc65e0f8fb8",
"assets/assets/eng-shareit1/097_1.mp3": "e92ef5b0e91f47d1e6bd37981f4a54c5",
"assets/assets/eng-shareit1/009_2.mp3": "d596e64b0e58f5a59cbfde344515187b",
"assets/assets/eng-shareit1/057_1.mp3": "0de8164bab99927e51fe3837e77ced15",
"assets/assets/eng-shareit1/012_1.mp3": "5b830d049509d7941e8355d4cc535803",
"assets/assets/eng-shareit1/010_3.mp3": "ea77d5e020d2275507632516cb564ce4",
"assets/assets/eng-shareit1/089_1.mp3": "41e080b53ab15c67abeb8e1d7ad8a917",
"assets/assets/eng-shareit1/031_1.mp3": "f446154b4a354ad11f93aa2076f937a1",
"assets/assets/eng-shareit1/074_1.mp3": "fb304e37d8ae0ca86b9996109568dacd",
"assets/assets/eng-shareit1/101.jpg": "d9409db6196003a61d040590ee9ac3ef",
"assets/assets/eng-shareit1/049_1.mp3": "52a45253f0a9f2bf6a54bbfe9ec7383e",
"assets/assets/eng-shareit1/049.jpg": "8b8693de4b3f772018275c4e70fd3c61",
"assets/assets/eng-shareit1/075.jpg": "fe6d5c945d4f1482ac3ed5cbac9b7353",
"assets/assets/eng-shareit1/061.jpg": "eb7f9b9dc9eb475b85a09ef5c6a5d437",
"assets/assets/eng-shareit1/060.jpg": "12d3bc795bcd18868f51f4d5967261ab",
"assets/assets/eng-shareit1/074.jpg": "6b0b355687f25da103e2518d057ef26c",
"assets/assets/eng-shareit1/048.jpg": "70ca65e261b2ab1b8e1b6b478c658678",
"assets/assets/eng-shareit1/090_1.mp3": "30f2c76f0fd7c190b7bfe3218b1c4594",
"assets/assets/eng-shareit1/028_1.mp3": "efc7d60d8418f1b48ff083f56ef5e102",
"assets/assets/eng-shareit1/015_1.mp3": "807b8ca0586f4a0a6aa4935e10638505",
"assets/assets/eng-shareit1/050_1.mp3": "bf2f334de2829a575865214e5f01e459",
"assets/assets/eng-shareit1/114.jpg": "eff665814a1bf4a993e2180f2d7e594a",
"assets/assets/eng-shareit1/100.jpg": "f8dd6ef17722e11b49e263e83bed4250",
"assets/assets/eng-shareit1/017_1.mp3": "81b1750453b3fe943a6e33279a9b1513",
"assets/assets/eng-shareit1/052_1.mp3": "ad54b7c6fe877333b93f09644360d53f",
"assets/assets/eng-shareit1/074_2.mp3": "daf6a902ec65635b4b6b4529ac2553b3",
"assets/assets/eng-shareit1/102.jpg": "eef00901f3ca80961b07a18371a93d08",
"assets/assets/eng-shareit1/089.jpg": "fcd88fa59d71a8f3850ce0ec54f82ce3",
"assets/assets/eng-shareit1/049_2.mp3": "6d3ede879675432ee64392e02e34203d",
"assets/assets/eng-shareit1/062.jpg": "eb7755f60e1e1460820e15eaa135860a",
"assets/assets/eng-shareit1/076.jpg": "54175250aaf3581c811703f47d7bf2c2",
"assets/assets/eng-shareit1/077.jpg": "307dfbb1ded1b5a1c7d8a53fa4d357c8",
"assets/assets/eng-shareit1/063.jpg": "5499694dc4d24db09a405adb86bb0181",
"assets/assets/eng-shareit1/088.jpg": "fa1d7640c9ab9a487c22026acf173991",
"assets/assets/eng-shareit1/033_1.mp3": "3fe135b089880aeca373e87f75030215",
"assets/assets/eng-shareit1/076_1.mp3": "a4c303ca0c4a40ec2d44e2100c0c26c3",
"assets/assets/eng-shareit1/015_2.mp3": "e916e8312fe33700817d58f9fbd2b9b0",
"assets/assets/eng-shareit1/103.jpg": "2936eb043e26c2ef14735249ddcf5f7d",
"assets/assets/eng-shareit1/069_2.mp3": "779e86aec0f255465021d7329339fd26",
"assets/assets/eng-shareit1/094_2.mp3": "b30a3c3fd7ce0a90550ad3e4cafbfd4b",
"assets/assets/eng-shareit1/113.jpg": "31eb9569f359dbc3f3382dc11e4f0375",
"assets/assets/eng-shareit1/107.jpg": "5fd5ac721366f06f1965f25ee538b653",
"assets/assets/eng-shareit1/008_3.mp3": "2594ce1726bb0664e707b4e8600690a5",
"assets/assets/eng-shareit1/098.jpg": "b80d1ca417674274682c7e7a01945f25",
"assets/assets/eng-shareit1/067.jpg": "e2e88d1d48c89ce7427e2001eadb8690",
"assets/assets/eng-shareit1/073.jpg": "dd7194ebf613aa26980d706833492b82",
"assets/assets/eng-shareit1/037_1.mp3": "10c439538c5ab2782f443514092a4180",
"assets/assets/eng-shareit1/011_2.mp3": "b62b82a0d3b26514c2fea53a48b074cf",
"assets/assets/eng-shareit1/072.jpg": "c9413baffd3a258f674bf94abf3a77a4",
"assets/assets/eng-shareit1/066.jpg": "40f44c952c4bae59e5c46c6e81f841dc",
"assets/assets/eng-shareit1/099.jpg": "bd048764bbe6eb4558000b82f2f167b4",
"assets/assets/eng-shareit1/013_1.mp3": "8fa7c3fb46df66b444725652e9ed9b5f",
"assets/assets/eng-shareit1/070_2.mp3": "9138ae880b7358ea4a3d881d33b07731",
"assets/assets/eng-shareit1/035_2.mp3": "d65257574cca80849639f86ec42ec8f0",
"assets/assets/eng-shareit1/008_2.mp3": "da3ee3f0b399560d078f488864d8f51c",
"assets/assets/eng-shareit1/106.jpg": "9e403b95ce3f5cc0392a0005d9e440cd",
"assets/assets/eng-shareit1/112.jpg": "eade509ddaa7a8f03b28c7f36712fce1",
"assets/assets/eng-shareit1/069_1.mp3": "ecfcbaae96554c70d42c76a2bb0971ad",
"assets/assets/eng-shareit1/104.jpg": "cbc7134384721e38f15c462dd1c9a9e6",
"assets/assets/eng-shareit1/110.jpg": "8a4fa45170964565706a721f30eb60a8",
"assets/assets/eng-shareit1/094_1.mp3": "d53a510e31494877266ec1395dbab177",
"assets/assets/eng-shareit1/070.jpg": "df171d21765f260f7be8b60b8b336572",
"assets/assets/eng-shareit1/064.jpg": "69d1fc38bb16edb37c6d53cc8158f2f1",
"assets/assets/eng-shareit1/011_1.mp3": "1edf1e0d02ae3e6fdeffd3eb35155782",
"assets/assets/eng-shareit1/058.jpg": "d4bb57c14df407014565b91f8b18aaa5",
"assets/assets/eng-shareit1/059.jpg": "c65b09fc387cab973f773a2506f95cf9",
"assets/assets/eng-shareit1/065.jpg": "56d6f87661178d9e454ac96ab7645b3b",
"assets/assets/eng-shareit1/071.jpg": "256c9eccc3e7408e68844a0884834d97",
"assets/assets/eng-shareit1/035_1.mp3": "093330987da67d1e7b6d68b0f466f0df",
"assets/assets/eng-shareit1/070_1.mp3": "379853704277d45e21ce63dffa0329dd",
"assets/assets/eng-shareit1/008_1.mp3": "e90822be2db11686bfc57b0fd8b6a73f",
"assets/assets/eng-shareit1/111.jpg": "0378f934574f35e4c13d93aed1eb5d2e",
"assets/assets/eng-shareit1/105.jpg": "8801916d7549db329a866b9ffc147ed1",
"assets/assets/eng-shareit1/019_4.mp3": "9ed98be32fb9aff476caa512392a865d",
"assets/assets/eng-shareit1/108.jpg": "e20369a8f749a90cb3a7a1508f1afb54",
"assets/assets/eng-shareit1/022_2.mp3": "b22041b688799cd478117c085494dfc0",
"assets/assets/eng-shareit1/067_2.mp3": "b1157241cec5b670130d3cfadb29d42b",
"assets/assets/eng-shareit1/041_1.mp3": "c52f309295272e50dd39436345e962d9",
"assets/assets/eng-shareit1/043_3.mp3": "93546bad2016d116191ac54de9618c16",
"assets/assets/eng-shareit1/097.jpg": "1fb02591383c3ee3c6ba8d4e5e4e812c",
"assets/assets/eng-shareit1/039_1.mp3": "efc27b06a8a887ef4886d32ff3c62717",
"assets/assets/eng-shareit1/083.jpg": "d436891979db9d19ef72397bfcb54027",
"assets/assets/eng-shareit1/081_1.mp3": "7a3ba072b0fcab171ca0a333d5b3c44c",
"assets/assets/eng-shareit1/068.jpg": "8e2df9eb28ffb6fb44377bc163c4ac1a",
"assets/assets/eng-shareit1/054.jpg": "7e0234985783ee0cbc89eb1801620115",
"assets/assets/eng-shareit1/040.jpg": "d48581e9b75fb64e06c888d3bd41c113",
"assets/assets/eng-shareit1/100_1.mp3": "0684c5c5d974e515fc3dfdfcfb4868bf",
"assets/assets/eng-shareit1/041.jpg": "2832473b4158f671a0f877ab1531f18b",
"assets/assets/eng-shareit1/055.jpg": "a29ffb0aca36884d7248b595b8b05dd2",
"assets/assets/eng-shareit1/069.jpg": "aafaa6a4dcc473d894900661456ddd49",
"assets/assets/eng-shareit1/082.jpg": "f78b64e7c73b7bb094c9f5f0e7045b91",
"assets/assets/eng-shareit1/096.jpg": "a8845304ac14f259efff35f1f854564d",
"assets/assets/eng-shareit1/083_2.mp3": "70cdd32f639789e34efd4bd028fd899f",
"assets/assets/eng-shareit1/006_2.mp3": "396f77213633ea0545ff5395077b7333",
"assets/assets/eng-shareit1/043_2.mp3": "dacb0383747573bbc638bd698fc1e5df",
"assets/assets/eng-shareit1/065_1.mp3": "a4bbf0dff1e40a58d148e1aaa98c42b7",
"assets/assets/eng-shareit1/098_1.mp3": "15d1110ec8eaecb8867afa11c7903638",
"assets/assets/eng-shareit1/067_3.mp3": "edddae3c2d5c5c37e0cce0faff58f31e",
"assets/assets/eng-shareit1/109.jpg": "2871e74c113763d6b9d0cbad6776e4d1",
"assets/assets/eng-shareit1/067_1.mp3": "3b7c7ed9ac2dd906d5d0e7df9d9cfb2e",
"assets/assets/eng-shareit1/022_1.mp3": "ef5222be0814b4304ba9ed00e84a7f97",
"assets/assets/eng-shareit1/080.jpg": "8a315d792a0652464e0a31c07e781acc",
"assets/assets/eng-shareit1/039_2.mp3": "8ce4d0db7c808c5f48ad98afcc9e2f7e",
"assets/assets/eng-shareit1/094.jpg": "4b9d85c8c166035a6b90b4ad3a38c605",
"assets/assets/eng-shareit1/043.jpg": "0090c5af8d2cd868b73833695cd6a3b5",
"assets/assets/eng-shareit1/057.jpg": "0f6c5c086f472a2a536e236cea329e4b",
"assets/assets/eng-shareit1/056.jpg": "f96c30fa5539d630ba52d2a65dca2801",
"assets/assets/eng-shareit1/042.jpg": "d5242ab843d85cff74f42cc9cd9bdcae",
"assets/assets/eng-shareit1/095.jpg": "8d86d2622ae45bd1662b8cbc77e5e740",
"assets/assets/eng-shareit1/081.jpg": "0d7acc46b1005957bbfb47ac0150c7da",
"assets/assets/eng-shareit1/083_1.mp3": "824ee09fb92494b9fb6e0876ee9e9b23",
"assets/assets/eng-shareit1/043_1.mp3": "fe0391a00d3abc9b28c2e259ca47fd58",
"assets/assets/eng-shareit1/019_2.mp3": "2dd93329ed44fd6c3c1532b4663b4b5f",
"assets/assets/eng-shareit1/067_4.mp3": "483571791308181523e701b9d1757ceb",
"assets/assets/eng-shareit1/087_1.mp3": "e9682bac339aa5eaf11717472073851b",
"assets/assets/eng-shareit1/085.jpg": "8ae3c7047bd49476763cb9c49a5b0ec6",
"assets/assets/eng-shareit1/091.jpg": "b8d78a5252898039e55517b9e2988475",
"assets/assets/eng-shareit1/046.jpg": "a35fabe2778a0d4c1b001d322bfe23e0",
"assets/assets/eng-shareit1/047_1.mp3": "7b694daaca1df90f00265c2646ef1e29",
"assets/assets/eng-shareit1/052.jpg": "0aa21dec7aff63f41a62f9df1f4c513d",
"assets/assets/eng-shareit1/053.jpg": "43a875bb4bbe086c41fbd33af43c4648",
"assets/assets/eng-shareit1/047.jpg": "e6ca5c2c38aaf2ec5f3aeb1cbe54be3f",
"assets/assets/eng-shareit1/090.jpg": "51b35fd97d77be060713be92adabe91b",
"assets/assets/eng-shareit1/084.jpg": "4008685d26ba0592ac8b7f247406f4d4",
"assets/assets/eng-shareit1/045_2.mp3": "c67cd9e019e83260acdbca501b83da94",
"assets/assets/eng-shareit1/063_1.mp3": "2b72ea57659164273b3f7e29d9a96f6a",
"assets/assets/eng-shareit1/026_1.mp3": "eb9e91dfaf6165ff1476fc81ee897ad8",
"assets/assets/eng-shareit1/043_4.mp3": "eacdd38928f81312d7a56e4bd8faab5e",
"assets/assets/eng-shareit1/019_3.mp3": "05f8d65b1f209b3b80f15668d0a9beee",
"assets/assets/eng-shareit1/019_1.mp3": "4e02b068e5f7eb6537b3f45ea8d1f235",
"assets/assets/eng-shareit1/087_2.mp3": "1a2e904210a411f6782cb193668301d0",
"assets/assets/eng-shareit1/092.jpg": "a5ce9c61bae38edac104295fcfc42e5a",
"assets/assets/eng-shareit1/086.jpg": "80fd3850f1295b798535d18bf528b328",
"assets/assets/eng-shareit1/051.jpg": "c851b181ba631be0a291f6e14f2cb8b3",
"assets/assets/eng-shareit1/061_1.mp3": "6cc8f79ff2702c7c72d1f6082f0c19e8",
"assets/assets/eng-shareit1/045.jpg": "96b9f8e665400df0ab656e4e258dcebf",
"assets/assets/eng-shareit1/079.jpg": "1e28701eb5bbaf194936ce600ac8dce9",
"assets/assets/eng-shareit1/078.jpg": "e16d1d2bcbfe4fdf0a7311d935aaa8f6",
"assets/assets/eng-shareit1/044.jpg": "78697d6666e6eff3827609d81f15ddff",
"assets/assets/eng-shareit1/050.jpg": "fb1eb4d6d15e91577d63b44cbfcd8d00",
"assets/assets/eng-shareit1/087.jpg": "6b5ca095663203daf9bc6dc244828814",
"assets/assets/eng-shareit1/093.jpg": "5aca3eca439beee118cf995e82284575",
"assets/assets/eng-shareit1/063_2.mp3": "22b103d1688dd2cd34d5da07bc4ea6e0",
"assets/assets/eng-shareit1/045_1.mp3": "ad259da7716b27ba9be6369aed279c50",
"assets/assets/eng-shareit1/085_1.mp3": "7001cde7f7aeb140e06d0de0c1d33b81",
"assets/assets/eng-shareit1/101_3.mp3": "bf35046bba6cfa2532c968a510c71301",
"assets/assets/eng-shareit1/103_1.mp3": "2280038562ba61d1c91098abc1726a04",
"assets/assets/eng-shareit1/040_2.mp3": "4381efdcc4277f71aaf93e5591f7be20",
"assets/assets/eng-shareit1/037.jpg": "8e470d01488067fc6fcb734901372c37",
"assets/assets/eng-shareit1/023_1.mp3": "1eacf6754f9501ec35a7aa99a2aa1132",
"assets/assets/eng-shareit1/023.jpg": "0feb92e21c5177af2e7650b611a3cf30",
"assets/assets/eng-shareit1/066_1.mp3": "7906f0ad89e9679391426ce6574fadaf",
"assets/assets/eng-shareit1/022.jpg": "57f33b19725e5551880c6c2666814970",
"assets/assets/eng-shareit1/036.jpg": "9bee9a400b59e157bbbea352c2f8820d",
"assets/assets/eng-shareit1/064_2.mp3": "6899c26d07186af763d9e0910b1fe62a",
"assets/assets/eng-shareit1/021_2.mp3": "9284c00e44059cbb2da406d8e6486dd6",
"assets/assets/eng-shareit1/007_1.mp3": "f249870876c16072abf7e1b40b730da5",
"assets/assets/eng-shareit1/042_1.mp3": "990298b910c7bbc3b1bac47ab3b2e4a1",
"assets/assets/eng-shareit1/059_2.mp3": "03829576aad10eb2b9a03e4f37d94f3a",
"assets/assets/eng-shareit1/101_2.mp3": "fd1d7df7e81152861c8e4ead05735edb",
"assets/assets/eng-shareit1/008.jpg": "5c0b0cccd1235421888af8ecac245278",
"assets/assets/eng-shareit1/020.jpg": "fe1cd31ed242cd96cda7bc29cba93b14",
"assets/assets/eng-shareit1/005_1.mp3": "f6a8dcaeca4877a2589b2a3ae6ec3d32",
"assets/assets/eng-shareit1/034.jpg": "36432471283ed1ddc6ea7832126c1ba5",
"assets/assets/eng-shareit1/040_1.mp3": "0079c3a2a49cd9600d49e57d29be722f",
"assets/assets/eng-shareit1/035.jpg": "8c3ee868aec79a49815ffa1e6a568016",
"assets/assets/eng-shareit1/021.jpg": "241c49c38a365aa5e605b794db2a1737",
"assets/assets/eng-shareit1/009.jpg": "11d5f81453eebb91a8474517c9b24f31",
"assets/assets/eng-shareit1/021_1.mp3": "23c81e4653fde3d75408461d161dfe42",
"assets/assets/eng-shareit1/064_1.mp3": "9a5b87cd83a3369f4e71a5aee1467fdb",
"assets/assets/eng-shareit1/099_1.mp3": "70188ffc7222125e8da242e604b0879a",
"assets/assets/eng-shareit1/059_1.mp3": "679760a780c95474bceb26aae9ef7bab",
"assets/assets/eng-shareit1/101_1.mp3": "b338359478877b73b756d23cd11500f1",
"assets/assets/eng-shareit1/046_2.mp3": "ab0d415176ab6ea37b2cfa86457129a2",
"assets/assets/eng-shareit1/025_1.mp3": "00bc5cb35707101427b4d39b7853e9ac",
"assets/assets/eng-shareit1/060_1.mp3": "c9bbe93944c8bd5eae3f634a1984ab06",
"assets/assets/eng-shareit1/026-2.mp3": "ab6c843cb14cb7c97c2295513c4aa29c",
"assets/assets/eng-shareit1/105_1.mp3": "597d61ac0bbe4a4d22ea10384c77d15d",
"assets/assets/eng-shareit1/018_1.mp3": "62074809a43b06c5a3ead7044ac520da",
"assets/assets/eng-shareit1/025.jpg": "5374b33e605cd0cbad11bf7a5e455389",
"assets/assets/eng-shareit1/031.jpg": "a14e890a4366778079812f64c4a2ec27",
"assets/assets/eng-shareit1/019.jpg": "9897d5e28289906a2c4bfff835319b6b",
"assets/assets/eng-shareit1/018.jpg": "146823531ced77bd0837c73680d48da2",
"assets/assets/eng-shareit1/030.jpg": "a4b7bbcb7193a6f81dfca1ea6b340c76",
"assets/assets/eng-shareit1/024.jpg": "3093e96863fb483751966b123f25d738",
"assets/assets/eng-shareit1/084_1.mp3": "7404df09f0a52ef980ed3bbc0d55ceff",
"assets/assets/eng-shareit1/079_1.mp3": "45302a95f2276a07a03ce109e8837ad7",
"assets/assets/eng-shareit1/101_4.mp3": "1dadf7fa0426031253a1a5ace016703d",
"assets/assets/eng-shareit1/060_2.mp3": "5e38b9a997a7191ee6826acea2ee1d56",
"assets/assets/eng-shareit1/025_2.mp3": "ec6bd82dbc6d6f7955b926d08c174c3d",
"assets/assets/eng-shareit1/046_1.mp3": "519e530beb9ed73c7ae397cbba0c0996",
"assets/assets/eng-shareit1/032.jpg": "5590c3d506178534bccda3d7aba7f109",
"assets/assets/eng-shareit1/026.jpg": "d3c60dba9c62ecdc4fe5b285961b2352",
"assets/assets/eng-shareit1/027.jpg": "0fc7e9388976059a1a25c0b84cd1bd4f",
"assets/assets/eng-shareit1/033.jpg": "d35fd451c8c2e58064e87cb6060de7fa",
"assets/assets/eng-shareit1/084_2.mp3": "6e93c49ed1d1541cf431d490d6bec335",
"assets/assets/eng-shareit1/027_1.mp3": "fc427e6b0a611fe129dd29aca4f84d03",
"assets/assets/images/insight_lt.png": "b00eb86e68ee3862175730251215206c",
"assets/assets/images/cauhoi/ct18.gomacaoxuongsatmat.jpg": "a05854aa73e497cbb8659521f09422ee",
"assets/assets/images/cauhoi/ct15.muithap.png": "cbe55a857e01190e8be6d426622c707a",
"assets/assets/images/cauhoi/ch01.3Moc.jpg": "66061219a3302d77e8adfe91867d5601",
"assets/assets/images/cauhoi/ct15.muithap.jpg": "19232c418b209270b2b1728756c62433",
"assets/assets/images/cauhoi/ch01.2Kim.jpg": "e2c80ea4f20009a1e8e8528a10e860d3",
"assets/assets/images/cauhoi/ct1.11.quaihamthonnhieudathit.jpg": "0b9f8f0fbe8a134bacbaf51df6a341b3",
"assets/assets/images/cauhoi/ch12lm.kdkn.jpg": "03bdbffd0cc22e665a10ee0a4a9ffaac",
"assets/assets/images/cauhoi/ch11lm.hep.jpg": "7040d4a23c98788332da7b1c4b1b01a8",
"assets/assets/images/cauhoi/ct1.10.camday.jpg": "50582386f7b71e8d4c309427f3181042",
"assets/assets/images/cauhoi/ct16.loMuiKin.jpg": "a8e8f5127bbd94ec86dc987c69c23b15",
"assets/assets/images/cauhoi/ct16.loMuiLo.jpg": "2e7cc99ffe83faebbc38beb8ab45018c",
"assets/assets/images/cauhoi/ct19.moitrungbinh.jpg": "6906a5e7b0172ce5e06b900c3eddde84",
"assets/assets/images/cauhoi/ch12lm.ratnhat.jpg": "2d54b61a8b707fbe4ec536e3848a310e",
"assets/assets/images/cauhoi/ct18.gomathapphang.jpg": "7529e08a9ea1c3ace55b0ad7cde635d5",
"assets/assets/images/cauhoi/ch01.1Hoa.jpg": "5d999a7774b1563d102ee0a31d0800f8",
"assets/assets/images/cauhoi/ch01.4Tho.jpg": "b26eb13971ea17ea7ce3638c122cefff",
"assets/assets/images/cauhoi/ct18.gomatotronnhieuthit.jpg": "0f41d2992ad36d60553106547adf4542",
"assets/assets/images/cauhoi/ct1.11.quaihamvuongbanhloxuong.jpg": "6c658acda949c23b6230dff792017582",
"assets/assets/images/cauhoi/ch14.matnho.jpg": "dce8c11e58bee417a22c6cd98097afeb",
"assets/assets/images/cauhoi/ct1.10.camlem.jpg": "2081b334cf4092b12710ecb2b8fa0bf2",
"assets/assets/images/cauhoi/ct1.10.camdung.jpg": "a9c33d3b73f438da5e0c0948dea5123a",
"assets/assets/images/cauhoi/ch11lm.lm2nt.jpg": "75e0e7badc3e815a2030f6bc0190eaff",
"assets/assets/images/cauhoi/ct19.moiday.jpg": "cd2a15bdf2b5394e7694503d2f4c1d5b",
"assets/assets/images/cauhoi/ct15.muict.jpg": "ed58fdce12227e133d6856306fb97c6e",
"assets/assets/images/cauhoi/ch14.matto.jpg": "880e1652731b3e9c8077d3bca4fb50e9",
"assets/assets/images/cauhoi/ch11lm.hon2nt.jpg": "71b43f1adf3d7562ed4d8ea4a5d1116d",
"assets/assets/images/cauhoi/ct17.daumuitotron.jpg": "40624b5fa2e70d8bdf417aa643ad38fb",
"assets/assets/images/cauhoi/ch12lm.ratdam.jpg": "f300ae028ae3292a07c1ce44199f7cd2",
"assets/assets/images/cauhoi/ct19.moimong.jpg": "2454b47e799ddd80340485131959c940",
"assets/assets/images/cauhoi/ch11lm.conotruoi.jpg": "8f3c0cc5ba7ffcd9ef96980a685389a4",
"assets/assets/images/cauhoi/ch13.dmxt.jpg": "27aa40da3a92e7dbadfb60c98de8e021",
"assets/assets/images/cauhoi/ch13.dmngang.jpg": "c33104f0095e33d31f8c8f6f8731126c",
"assets/assets/images/cauhoi/ct15.muicaogk.jpg": "e25c86695c10ae6511cfa7cedb14d221",
"assets/assets/images/cauhoi/ch13.dmlc.jpg": "a4a37628f94922047b732d94d6fcd99a",
"assets/assets/images/cauhoi/ct17.daumuinhonhon.jpg": "7a2004696b631f3d8b213c0c014044d0",
"assets/assets/images/10681Insight.jpeg": "ad9a59d3e34c7bc2dd7782529ef2b55c",
"assets/assets/muiten.png": "b104851ce9cd1117b23780127c39c57d",
"assets/assets/env.development": "f24e7b68946cfa0e07b9b96e17d62e4e",
"assets/assets/env.production": "3b3865999ba8914b62699c0677a72466",
"canvaskit/skwasm.js": "f17a293d422e2c0b3a04962e68236cc2",
"canvaskit/skwasm.js.symbols": "c6f605aa7f865f54f11010319bec4307",
"canvaskit/canvaskit.js.symbols": "b85fedc601db924025e7936d851e7e7e",
"canvaskit/skwasm.wasm": "bb26b4bea4c773ab97d048ab90d1a56b",
"canvaskit/chromium/canvaskit.js.symbols": "9f2dfa8c181a437290aa2b58e55da15d",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "3eb16b5849637ebd0c498a865a04baec",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.wasm": "35bd73cf3f754ad2e50a8df18c8c5dea",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
