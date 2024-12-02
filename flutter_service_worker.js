'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "15f612abfe08be175e64c1944fba27e9",
"version.json": "05cabb68a05bc57b2892b2d5dce8eae5",
"index.html": "75e85e343287073bb6bfd903ab9c52de",
"/": "75e85e343287073bb6bfd903ab9c52de",
"main.dart.js": "33ab9875ac346b2ea2444dfe39ba62b8",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8b227d784778be84e496f786f1f2ae43",
"assets/AssetManifest.json": "5b81093904669c1667595f26f1b1ad40",
"assets/NOTICES": "684944d16cb602d78e64debbd0dcd4fc",
"assets/env.development": "02923cdd208784f7bf0aa9d93d154061",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "d391dbfab5d66270429f71b84bd28f8f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "1654838041e0230cbc26280e1559217f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "7f0e6e520ed42aedae7263bc7266c43f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/env.production": "1cf828e05955286df0024801e03fc861",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "8c6f0c960e519dda3f8b46da6fd5a459",
"assets/fonts/MaterialIcons-Regular.otf": "736d8af430565097717db0ff8dce5f17",
"assets/assets/shareit1data.json": "1c9851c624f26a00e8d1c9f5195661c4",
"assets/assets/eng-shareit1/093_1.mp3": "92168505933768208f58dee7c6f3ee41",
"assets/assets/eng-shareit1/029_3.mp3": "9afc22783fb89006557f16cfeb8f6121",
"assets/assets/eng-shareit1/091_3.mp3": "23f86283b56d792f54dd4ff1192326ca",
"assets/assets/eng-shareit1/053_1.mp3": "d04714ec46896943c9a374b319c69d4c",
"assets/assets/eng-shareit1/016_1.mp3": "c5de22d6a6b45195a75fba06bb82335b",
"assets/assets/eng-shareit1/016.jpg": "8a32ee6ffff83ae7c27d35138f70eb07",
"assets/assets/eng-shareit1/002.jpg": "3f3d62a894fa99f6d0fd106a9b2e4e78",
"assets/assets/eng-shareit1/003.jpg": "ba9431111f4c9b4d6017238983ba3670",
"assets/assets/eng-shareit1/017.jpg": "138f7f33c73bf4d79b066060d92b45d6",
"assets/assets/eng-shareit1/077_1.mp3": "ce35c0ecf84b2dc1681e4da247fa043c",
"assets/assets/eng-shareit1/091_2.mp3": "0808006da43b9e0f2982fed944cc7a11",
"assets/assets/eng-shareit1/029_2.mp3": "7e3fde08eda7a1088e66ce9e81bceeca",
"assets/assets/eng-shareit1/093_2.mp3": "89750095161197af032b8a1a0f635e3b",
"assets/assets/eng-shareit1/077_3.mp3": "09e95e20dddc4aafe5bc836398f048e6",
"assets/assets/eng-shareit1/088_1.mp3": "63b4784a3fcd4e97c9ab049f94c5bc4c",
"assets/assets/eng-shareit1/075_1.mp3": "8f9bd375c01c85bf37f34fa98278fffe",
"assets/assets/eng-shareit1/016_2.mp3": "5745a16ab52526ea2e70abb88f81ac6a",
"assets/assets/eng-shareit1/029.jpg": "4521baa61c9b372c493dada3b2d18ff1",
"assets/assets/eng-shareit1/053_2.mp3": "26813099f107c7c580760628bb70b6ab",
"assets/assets/eng-shareit1/001.jpg": "6b1b835d0fc4779b2709f07c273b4ec7",
"assets/assets/eng-shareit1/015.jpg": "47522eaa42d19cb8aaac83b702609dc3",
"assets/assets/eng-shareit1/014.jpg": "9e42d68c4d0136969028c54e4c3799d9",
"assets/assets/eng-shareit1/028.jpg": "6e1e1f674ae9fe01b6154d2e806444e9",
"assets/assets/eng-shareit1/053_3.mp3": "b7e5b49c73ecb3796d1f1dfc0d1e9ada",
"assets/assets/eng-shareit1/051_1.mp3": "9f47743885f6c5ca27d23661ea946305",
"assets/assets/eng-shareit1/077_2.mp3": "4691f8ea98b1d4e33b2a48f79b85746a",
"assets/assets/eng-shareit1/091_1.mp3": "1a1593f599d47e2508f7f4e1e9f580d9",
"assets/assets/eng-shareit1/029_1.mp3": "219a79428d57f4b4605654b943a8deaf",
"assets/assets/eng-shareit1/055_1.mp3": "7853860a5825960414439f7f3e975c77",
"assets/assets/eng-shareit1/010_1.mp3": "08518cabcd54197d26926547c6f823b3",
"assets/assets/eng-shareit1/036_2.mp3": "349b7cb23f1fd9d0d8d942778a704c34",
"assets/assets/eng-shareit1/073_2.mp3": "fdb98012283164f9cb02c317f7c88182",
"assets/assets/eng-shareit1/004.jpg": "4f534c370efd8fb9fbb6200ec335a2c7",
"assets/assets/eng-shareit1/095_1.mp3": "90fe3dc9796ac70d4f5713788896f2b5",
"assets/assets/eng-shareit1/010.jpg": "7fc5077a54530d5814434d985663b826",
"assets/assets/eng-shareit1/038.jpg": "43dda2c57dae1661576a44f3df2e7085",
"assets/assets/eng-shareit1/039.jpg": "a3a57d968ae74423eeb3d63c5aed93ae",
"assets/assets/eng-shareit1/011.jpg": "198c1e125ad81070dcda8754d4a38afa",
"assets/assets/eng-shareit1/005.jpg": "fad70ba80aa28d36d63dc9dbed3c608b",
"assets/assets/eng-shareit1/097_2.mp3": "4df182b9e735ad337e45f988fe06eef5",
"assets/assets/eng-shareit1/009_1.mp3": "e18a37017a7f98ac0b11dbc3b48f89df",
"assets/assets/eng-shareit1/071_1.mp3": "c1227d905bad8a60df064a0b7a07e94d",
"assets/assets/eng-shareit1/012_2.mp3": "4921096fe7f07d12265be07bc63011b0",
"assets/assets/eng-shareit1/091_4.mp3": "dfe11182cfb324447ce5109a8462e378",
"assets/assets/eng-shareit1/029_4.mp3": "fbd27e8ed00bce9de60cd81b9711ba1c",
"assets/assets/eng-shareit1/073_1.mp3": "b21c75ae72af7f5b89f924009481ad4b",
"assets/assets/eng-shareit1/036_1.mp3": "8415a28626c22db87286e951977a09cf",
"assets/assets/eng-shareit1/010_2.mp3": "1e22beacbd09a8e655e2b58e6e256d01",
"assets/assets/eng-shareit1/013.jpg": "5b34cef9f0eaa7185dbe1ad23b06b30a",
"assets/assets/eng-shareit1/007.jpg": "6fa7b21ebaa21514e72af3faaf3e7da7",
"assets/assets/eng-shareit1/053_4.mp3": "f9b1d858d1ba0c4eb7683dfadd42b6ab",
"assets/assets/eng-shareit1/006.jpg": "0772cd4f377fb44137945121b546265b",
"assets/assets/eng-shareit1/012.jpg": "f0e36a55702fc5365bedb71392e60c58",
"assets/assets/eng-shareit1/077_4.mp3": "989d6f43b2bf39f05d153e16d7889e64",
"assets/assets/eng-shareit1/097_1.mp3": "88e7355afadcafb243b31354c37eb6c7",
"assets/assets/eng-shareit1/009_2.mp3": "d2bd4ca1bdabb3ef18bc0634aeef594e",
"assets/assets/eng-shareit1/057_1.mp3": "380d0d10b1ccfc6b32a77daf1de11556",
"assets/assets/eng-shareit1/012_1.mp3": "79cd7d5a21604d90642c0e1fc27afe23",
"assets/assets/eng-shareit1/010_3.mp3": "22063960886eaa5b665222f1b2c18028",
"assets/assets/eng-shareit1/089_1.mp3": "979c539c0a94a2ce7fe504258aa73856",
"assets/assets/eng-shareit1/031_1.mp3": "0a9fef3386b8bd6f005729f775c7a30d",
"assets/assets/eng-shareit1/074_1.mp3": "5b3622be21360406acf1a73ed0e619b3",
"assets/assets/eng-shareit1/101.jpg": "d9409db6196003a61d040590ee9ac3ef",
"assets/assets/eng-shareit1/049_1.mp3": "5653e38ee5895510b9859adbf8198ded",
"assets/assets/eng-shareit1/049.jpg": "8b8693de4b3f772018275c4e70fd3c61",
"assets/assets/eng-shareit1/075.jpg": "fe6d5c945d4f1482ac3ed5cbac9b7353",
"assets/assets/eng-shareit1/061.jpg": "eb7f9b9dc9eb475b85a09ef5c6a5d437",
"assets/assets/eng-shareit1/060.jpg": "12d3bc795bcd18868f51f4d5967261ab",
"assets/assets/eng-shareit1/074.jpg": "6b0b355687f25da103e2518d057ef26c",
"assets/assets/eng-shareit1/048.jpg": "70ca65e261b2ab1b8e1b6b478c658678",
"assets/assets/eng-shareit1/090_1.mp3": "e68804f81c7d66d911a878637820f23a",
"assets/assets/eng-shareit1/028_1.mp3": "1277a77ea178961549ff291ecb3290ec",
"assets/assets/eng-shareit1/015_1.mp3": "51b63b7eba913819ca9ff4fa154eb9ba",
"assets/assets/eng-shareit1/050_1.mp3": "9d25acc53af6324892fc293255a68f72",
"assets/assets/eng-shareit1/114.jpg": "eff665814a1bf4a993e2180f2d7e594a",
"assets/assets/eng-shareit1/100.jpg": "f8dd6ef17722e11b49e263e83bed4250",
"assets/assets/eng-shareit1/017_1.mp3": "d5cc3061c003725655245ede0b345d61",
"assets/assets/eng-shareit1/052_1.mp3": "15f1711027ae272f3401b4d4c2ac265b",
"assets/assets/eng-shareit1/074_2.mp3": "81a10ac2b90ea57f25f5878d725e053d",
"assets/assets/eng-shareit1/102.jpg": "eef00901f3ca80961b07a18371a93d08",
"assets/assets/eng-shareit1/089.jpg": "fcd88fa59d71a8f3850ce0ec54f82ce3",
"assets/assets/eng-shareit1/049_2.mp3": "53d931fbe11a214a8284b48db5379870",
"assets/assets/eng-shareit1/062.jpg": "eb7755f60e1e1460820e15eaa135860a",
"assets/assets/eng-shareit1/076.jpg": "54175250aaf3581c811703f47d7bf2c2",
"assets/assets/eng-shareit1/077.jpg": "307dfbb1ded1b5a1c7d8a53fa4d357c8",
"assets/assets/eng-shareit1/063.jpg": "5499694dc4d24db09a405adb86bb0181",
"assets/assets/eng-shareit1/088.jpg": "fa1d7640c9ab9a487c22026acf173991",
"assets/assets/eng-shareit1/033_1.mp3": "35d9fbc529be6260a731c82ec6e353d2",
"assets/assets/eng-shareit1/076_1.mp3": "1c19066e711c616f10b27ddc7ae06a9a",
"assets/assets/eng-shareit1/015_2.mp3": "3489446906130d15c6779faafcb8ac16",
"assets/assets/eng-shareit1/103.jpg": "2936eb043e26c2ef14735249ddcf5f7d",
"assets/assets/eng-shareit1/069_2.mp3": "790460353a8a6a8a3193bf3e402891f9",
"assets/assets/eng-shareit1/094_2.mp3": "473a939ae6fb0aa63df6479336b4fbe0",
"assets/assets/eng-shareit1/113.jpg": "31eb9569f359dbc3f3382dc11e4f0375",
"assets/assets/eng-shareit1/107.jpg": "5fd5ac721366f06f1965f25ee538b653",
"assets/assets/eng-shareit1/008_3.mp3": "280c07f73e260219c311a0e20185239a",
"assets/assets/eng-shareit1/098.jpg": "b80d1ca417674274682c7e7a01945f25",
"assets/assets/eng-shareit1/067.jpg": "e2e88d1d48c89ce7427e2001eadb8690",
"assets/assets/eng-shareit1/073.jpg": "dd7194ebf613aa26980d706833492b82",
"assets/assets/eng-shareit1/037_1.mp3": "b3407a38f2bd2bdc075236e90519245c",
"assets/assets/eng-shareit1/011_2.mp3": "542731baef2ca398238a215cf9bd54db",
"assets/assets/eng-shareit1/072.jpg": "c9413baffd3a258f674bf94abf3a77a4",
"assets/assets/eng-shareit1/066.jpg": "40f44c952c4bae59e5c46c6e81f841dc",
"assets/assets/eng-shareit1/099.jpg": "bd048764bbe6eb4558000b82f2f167b4",
"assets/assets/eng-shareit1/013_1.mp3": "20250be58e93f7aff4d1429488a070b3",
"assets/assets/eng-shareit1/070_2.mp3": "b1050bef132406482340845ed8f25f21",
"assets/assets/eng-shareit1/035_2.mp3": "26f5c2d060d2bdcede86b95c2c4f49c2",
"assets/assets/eng-shareit1/008_2.mp3": "70e7f6954e291eae9833562858103072",
"assets/assets/eng-shareit1/106.jpg": "9e403b95ce3f5cc0392a0005d9e440cd",
"assets/assets/eng-shareit1/112.jpg": "eade509ddaa7a8f03b28c7f36712fce1",
"assets/assets/eng-shareit1/069_1.mp3": "ffc8e3bab597a248ece3c719890fa021",
"assets/assets/eng-shareit1/104.jpg": "cbc7134384721e38f15c462dd1c9a9e6",
"assets/assets/eng-shareit1/110.jpg": "8a4fa45170964565706a721f30eb60a8",
"assets/assets/eng-shareit1/094_1.mp3": "5aeeba6b1ffa2b304cd9a9066785f0e0",
"assets/assets/eng-shareit1/070.jpg": "df171d21765f260f7be8b60b8b336572",
"assets/assets/eng-shareit1/064.jpg": "69d1fc38bb16edb37c6d53cc8158f2f1",
"assets/assets/eng-shareit1/011_1.mp3": "702e32851c04640f8b0c8735d824e836",
"assets/assets/eng-shareit1/058.jpg": "d4bb57c14df407014565b91f8b18aaa5",
"assets/assets/eng-shareit1/059.jpg": "c65b09fc387cab973f773a2506f95cf9",
"assets/assets/eng-shareit1/065.jpg": "56d6f87661178d9e454ac96ab7645b3b",
"assets/assets/eng-shareit1/071.jpg": "256c9eccc3e7408e68844a0884834d97",
"assets/assets/eng-shareit1/035_1.mp3": "c862dc2f8b35f75e5f521c89cb1be200",
"assets/assets/eng-shareit1/070_1.mp3": "1512113b0b4ae166dfba41b452db0e21",
"assets/assets/eng-shareit1/008_1.mp3": "1f8e4e0771a552e684eb33ca16febedf",
"assets/assets/eng-shareit1/111.jpg": "0378f934574f35e4c13d93aed1eb5d2e",
"assets/assets/eng-shareit1/105.jpg": "8801916d7549db329a866b9ffc147ed1",
"assets/assets/eng-shareit1/019_4.mp3": "be922d26ec4fa54a7a9d1195a3add265",
"assets/assets/eng-shareit1/108.jpg": "e20369a8f749a90cb3a7a1508f1afb54",
"assets/assets/eng-shareit1/022_2.mp3": "30c2b216b489abf879bdd4799600d620",
"assets/assets/eng-shareit1/067_2.mp3": "a55be8b44548a1b322abacf0791e3615",
"assets/assets/eng-shareit1/041_1.mp3": "24a32955046cce11269920bcf3eeb2d3",
"assets/assets/eng-shareit1/043_3.mp3": "86d0248d4c2c06fd4a5b046d660e62b8",
"assets/assets/eng-shareit1/097.jpg": "1fb02591383c3ee3c6ba8d4e5e4e812c",
"assets/assets/eng-shareit1/039_1.mp3": "115a447c4a6f6848bd55601aa4e2d2f5",
"assets/assets/eng-shareit1/083.jpg": "d436891979db9d19ef72397bfcb54027",
"assets/assets/eng-shareit1/081_1.mp3": "6860036b16ebd173746c27335df870cf",
"assets/assets/eng-shareit1/068.jpg": "8e2df9eb28ffb6fb44377bc163c4ac1a",
"assets/assets/eng-shareit1/054.jpg": "7e0234985783ee0cbc89eb1801620115",
"assets/assets/eng-shareit1/040.jpg": "d48581e9b75fb64e06c888d3bd41c113",
"assets/assets/eng-shareit1/100_1.mp3": "452f62dff12e5062059add4fccf5fd1f",
"assets/assets/eng-shareit1/041.jpg": "2832473b4158f671a0f877ab1531f18b",
"assets/assets/eng-shareit1/055.jpg": "a29ffb0aca36884d7248b595b8b05dd2",
"assets/assets/eng-shareit1/069.jpg": "aafaa6a4dcc473d894900661456ddd49",
"assets/assets/eng-shareit1/082.jpg": "f78b64e7c73b7bb094c9f5f0e7045b91",
"assets/assets/eng-shareit1/096.jpg": "a8845304ac14f259efff35f1f854564d",
"assets/assets/eng-shareit1/083_2.mp3": "d6f5aa7cad85bc44bab1c4c3fc7816bf",
"assets/assets/eng-shareit1/006_2.mp3": "12f5d43ed031b4e514dbadbce1e95a03",
"assets/assets/eng-shareit1/043_2.mp3": "695e9aac8804a003c69bb1576d1d2b4e",
"assets/assets/eng-shareit1/065_1.mp3": "f9c6ecbf311a8a4cba0ba51276773475",
"assets/assets/eng-shareit1/098_1.mp3": "a1b3ea24889432ca48aa21121ea95777",
"assets/assets/eng-shareit1/067_3.mp3": "35cfa29bb5e9c46fdcbd1c290f63a76a",
"assets/assets/eng-shareit1/109.jpg": "2871e74c113763d6b9d0cbad6776e4d1",
"assets/assets/eng-shareit1/067_1.mp3": "9631b02ea9c46a2d1ee30e45b2bf69a5",
"assets/assets/eng-shareit1/022_1.mp3": "ef380d48f0b083e4c22290207d08a37d",
"assets/assets/eng-shareit1/080.jpg": "8a315d792a0652464e0a31c07e781acc",
"assets/assets/eng-shareit1/039_2.mp3": "cfa371bf27369404480f8ebd7cb883a2",
"assets/assets/eng-shareit1/094.jpg": "4b9d85c8c166035a6b90b4ad3a38c605",
"assets/assets/eng-shareit1/043.jpg": "0090c5af8d2cd868b73833695cd6a3b5",
"assets/assets/eng-shareit1/057.jpg": "0f6c5c086f472a2a536e236cea329e4b",
"assets/assets/eng-shareit1/056.jpg": "f96c30fa5539d630ba52d2a65dca2801",
"assets/assets/eng-shareit1/042.jpg": "d5242ab843d85cff74f42cc9cd9bdcae",
"assets/assets/eng-shareit1/095.jpg": "8d86d2622ae45bd1662b8cbc77e5e740",
"assets/assets/eng-shareit1/081.jpg": "0d7acc46b1005957bbfb47ac0150c7da",
"assets/assets/eng-shareit1/083_1.mp3": "91bbc988c855a358d0ca50b09ceb8868",
"assets/assets/eng-shareit1/043_1.mp3": "ae07ff37e0e8d6fc53abd0f9132af179",
"assets/assets/eng-shareit1/019_2.mp3": "5c83578cc93448d22a5c9391b7d2b210",
"assets/assets/eng-shareit1/067_4.mp3": "3a583274d9607d9ab317646947b316ab",
"assets/assets/eng-shareit1/087_1.mp3": "9f510e17af93f4cdf7d6b2ff977a8e4f",
"assets/assets/eng-shareit1/085.jpg": "8ae3c7047bd49476763cb9c49a5b0ec6",
"assets/assets/eng-shareit1/091.jpg": "b8d78a5252898039e55517b9e2988475",
"assets/assets/eng-shareit1/046.jpg": "a35fabe2778a0d4c1b001d322bfe23e0",
"assets/assets/eng-shareit1/047_1.mp3": "5af15f148fa722e99b9f7707f5b3382d",
"assets/assets/eng-shareit1/052.jpg": "0aa21dec7aff63f41a62f9df1f4c513d",
"assets/assets/eng-shareit1/053.jpg": "43a875bb4bbe086c41fbd33af43c4648",
"assets/assets/eng-shareit1/047.jpg": "e6ca5c2c38aaf2ec5f3aeb1cbe54be3f",
"assets/assets/eng-shareit1/090.jpg": "51b35fd97d77be060713be92adabe91b",
"assets/assets/eng-shareit1/084.jpg": "4008685d26ba0592ac8b7f247406f4d4",
"assets/assets/eng-shareit1/045_2.mp3": "61d34a3026d3f61778f97b7af00365a8",
"assets/assets/eng-shareit1/063_1.mp3": "8b7dcbefb71a86721210311c3a35d991",
"assets/assets/eng-shareit1/026_1.mp3": "be852e2c1630170faa15c62ed4def223",
"assets/assets/eng-shareit1/043_4.mp3": "fd17b0596f3031d5fca76bdd71892328",
"assets/assets/eng-shareit1/019_3.mp3": "b961e44e1175b6c49e5bd8ed2597a7c1",
"assets/assets/eng-shareit1/019_1.mp3": "7c357ab2f247852b1f9b889aea617cee",
"assets/assets/eng-shareit1/087_2.mp3": "35ac06639cea51574d1d7112ca8e7c88",
"assets/assets/eng-shareit1/092.jpg": "a5ce9c61bae38edac104295fcfc42e5a",
"assets/assets/eng-shareit1/086.jpg": "80fd3850f1295b798535d18bf528b328",
"assets/assets/eng-shareit1/051.jpg": "c851b181ba631be0a291f6e14f2cb8b3",
"assets/assets/eng-shareit1/061_1.mp3": "8087cdada26eccc8ac36401d2725f2b2",
"assets/assets/eng-shareit1/045.jpg": "96b9f8e665400df0ab656e4e258dcebf",
"assets/assets/eng-shareit1/079.jpg": "1e28701eb5bbaf194936ce600ac8dce9",
"assets/assets/eng-shareit1/078.jpg": "e16d1d2bcbfe4fdf0a7311d935aaa8f6",
"assets/assets/eng-shareit1/044.jpg": "78697d6666e6eff3827609d81f15ddff",
"assets/assets/eng-shareit1/050.jpg": "fb1eb4d6d15e91577d63b44cbfcd8d00",
"assets/assets/eng-shareit1/087.jpg": "6b5ca095663203daf9bc6dc244828814",
"assets/assets/eng-shareit1/093.jpg": "5aca3eca439beee118cf995e82284575",
"assets/assets/eng-shareit1/063_2.mp3": "287940fe854d40a1656fa1485de2404e",
"assets/assets/eng-shareit1/045_1.mp3": "adbc1a71d7811f0bb67dc3c3d04510fb",
"assets/assets/eng-shareit1/085_1.mp3": "1a5f297cb54555d3631710629152d221",
"assets/assets/eng-shareit1/101_3.mp3": "4b0e4332d52bf89093d96f8980bb1662",
"assets/assets/eng-shareit1/103_1.mp3": "f45a0792a37c798bfcca825ba3417268",
"assets/assets/eng-shareit1/040_2.mp3": "10c21abd471c417d78f051f55d87b0ac",
"assets/assets/eng-shareit1/037.jpg": "8e470d01488067fc6fcb734901372c37",
"assets/assets/eng-shareit1/023_1.mp3": "59378ee795f08b75fc9473cfd660e679",
"assets/assets/eng-shareit1/023.jpg": "0feb92e21c5177af2e7650b611a3cf30",
"assets/assets/eng-shareit1/066_1.mp3": "223c3b853c6a5725196f6b1830c6314f",
"assets/assets/eng-shareit1/022.jpg": "57f33b19725e5551880c6c2666814970",
"assets/assets/eng-shareit1/036.jpg": "9bee9a400b59e157bbbea352c2f8820d",
"assets/assets/eng-shareit1/064_2.mp3": "3b6bfe6bce830226712364e2451d34d8",
"assets/assets/eng-shareit1/021_2.mp3": "b0f9d27d52875ea9baee8a614bc1a6ea",
"assets/assets/eng-shareit1/007_1.mp3": "345537276ab2320c35982cc208f7a91d",
"assets/assets/eng-shareit1/042_1.mp3": "c3c5e0b5d3e3cca4f21bdf7ebdc6a903",
"assets/assets/eng-shareit1/059_2.mp3": "56ca6b91dba44579c34d614a0994b11e",
"assets/assets/eng-shareit1/101_2.mp3": "8e0a1ec351f4c8a2c3010614f324c6cc",
"assets/assets/eng-shareit1/008.jpg": "5c0b0cccd1235421888af8ecac245278",
"assets/assets/eng-shareit1/020.jpg": "fe1cd31ed242cd96cda7bc29cba93b14",
"assets/assets/eng-shareit1/005_1.mp3": "204a65fb3266b39a4a34d692912ef820",
"assets/assets/eng-shareit1/034.jpg": "36432471283ed1ddc6ea7832126c1ba5",
"assets/assets/eng-shareit1/040_1.mp3": "8a0bffca77fb870a0ec90946e45cf45e",
"assets/assets/eng-shareit1/035.jpg": "8c3ee868aec79a49815ffa1e6a568016",
"assets/assets/eng-shareit1/021.jpg": "241c49c38a365aa5e605b794db2a1737",
"assets/assets/eng-shareit1/009.jpg": "11d5f81453eebb91a8474517c9b24f31",
"assets/assets/eng-shareit1/021_1.mp3": "195bdd47ec340506a0c1b9cf8ef48eb8",
"assets/assets/eng-shareit1/064_1.mp3": "ceec1dca9b9980c14c883b597faebdca",
"assets/assets/eng-shareit1/099_1.mp3": "11440d699133ff7c555644cab8afd643",
"assets/assets/eng-shareit1/059_1.mp3": "d432e43fda3f6e728e66b2fab907248b",
"assets/assets/eng-shareit1/101_1.mp3": "d39ea7ee1f5bba53b4377a02c6e3c219",
"assets/assets/eng-shareit1/046_2.mp3": "4abced08bb552e4ba21584b5757d452d",
"assets/assets/eng-shareit1/025_1.mp3": "2f1b0d1687946d34e9904da4f10845fc",
"assets/assets/eng-shareit1/060_1.mp3": "8d1fc3b70cfa9a4835f29ce459d16889",
"assets/assets/eng-shareit1/026-2.mp3": "aaa3b726db2a8c469122cd2b88fcabc0",
"assets/assets/eng-shareit1/105_1.mp3": "1f523379bc343973b140e8330b6010a0",
"assets/assets/eng-shareit1/018_1.mp3": "505905ddfc7a014a8abd880293777bf5",
"assets/assets/eng-shareit1/025.jpg": "5374b33e605cd0cbad11bf7a5e455389",
"assets/assets/eng-shareit1/031.jpg": "a14e890a4366778079812f64c4a2ec27",
"assets/assets/eng-shareit1/019.jpg": "9897d5e28289906a2c4bfff835319b6b",
"assets/assets/eng-shareit1/018.jpg": "146823531ced77bd0837c73680d48da2",
"assets/assets/eng-shareit1/030.jpg": "a4b7bbcb7193a6f81dfca1ea6b340c76",
"assets/assets/eng-shareit1/024.jpg": "3093e96863fb483751966b123f25d738",
"assets/assets/eng-shareit1/084_1.mp3": "b7919214d941e052c1ec712bb7daa50d",
"assets/assets/eng-shareit1/079_1.mp3": "4c3f3741ba22f2b22bb9a22ea64a9e46",
"assets/assets/eng-shareit1/101_4.mp3": "0f8263ff8e5d2bd7c1c2ae2c76367209",
"assets/assets/eng-shareit1/060_2.mp3": "cd5e59c1fb2381ddf4594209b7f35b91",
"assets/assets/eng-shareit1/025_2.mp3": "cdedf71d4ef1d2d2ba117a8b05d4ec08",
"assets/assets/eng-shareit1/046_1.mp3": "65289469ad7111a5b1881e1de4546e22",
"assets/assets/eng-shareit1/032.jpg": "5590c3d506178534bccda3d7aba7f109",
"assets/assets/eng-shareit1/026.jpg": "d3c60dba9c62ecdc4fe5b285961b2352",
"assets/assets/eng-shareit1/027.jpg": "0fc7e9388976059a1a25c0b84cd1bd4f",
"assets/assets/eng-shareit1/033.jpg": "d35fd451c8c2e58064e87cb6060de7fa",
"assets/assets/eng-shareit1/084_2.mp3": "d92234052758636ece4b06abea65ec05",
"assets/assets/eng-shareit1/027_1.mp3": "9740c972d31f071ae23a5342a0c0fb07",
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
