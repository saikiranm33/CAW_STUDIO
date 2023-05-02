const Dummy_Info = [
  {
    id: 0,
    type: 'DIET',
    duration: '1 min',
    name: 'Rohit Sheety',
    diagonsed: 'Diagonsed Recently',
    title: 'What are the signs and symptoms of skin cancer',
    subtitle:
      'I’ve been facing a few possibble symptoms of skin cancer. I’ve googled the possibilities but i thought i’d ask the community instead',
    location: 'Mumbai',
    numberOfQuestions: 14,
    isLikeSelected: false,
    likes: 20,
    comments: 10,
    //profileImg: require('../../../assets/images/profile_img.jpeg'),
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    // reactImages: [
    //   require('../../../assets/images/profile_img.jpeg'),
    //   require('../../../assets/images/profileimg2.jpeg'),
    //   require('../../../assets/images/profileimg3.jpeg'),
    // ],
    comment_posted: [
      {
        name: 'Rohit Sheety',
        title: 'What are the signs and symptoms of skin cancer',
      },
    ],
  },
  {
    id: 1,
    type: 'DIET',
    duration: '1 min',
    name: 'Rohit Sheety',
    diagonsed: 'Diagonsed Recently',
    title: 'Cancer meet at Rajeev Gandhi National Park',
    subtitle: 'tought i’d ask the community instead.',
    location: 'Rajeev gandhi national park, mumbai',
    numberOfQuestions: 14,
    videoUrl  :"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    likes: 20,
    comments: 10,
    isLikeSelected: true,
   // profileImg: require('../../../assets/images/profileimg2.jpeg'),
    reactImages: [
      require('../../../assets/images/profile_img.jpeg'),
      require('../../../assets/images/profileimg2.jpeg'),
      require('../../../assets/images/profileimg3.jpeg'),
    ],
    comment_posted: [
      {
        name: 'DAVID Sheety',
        title: 'What are the signs and symptoms of skin cancer',
      },
    ],
  },
  {
    id: 2,
    type: 'DIET',
    duration: '1 min',
    name: 'DAVID Sheety',
    diagonsed: 'Diagonsed Recently',
    title: 'What’s the best Hospital in India for cancer?',
    subtitle:
      'My husband has his 3 days transplant assessment in Newcastle next month, strange mix of emotions. For those that have been through this how long did it take following assessment was it until you were t... See More',
    location: 'Rajeev gandhi national park, mumbai',
    numberOfQuestions: 24,
    videoUrl   :"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    likes: 20,
    comments: 10,
    isLikeSelected: true,
   // profileImg: require('../../../assets/images/profileimg3.jpeg'),
    reactImages: [
      require('../../../assets/images/profile_img.jpeg'),
      require('../../../assets/images/profileimg2.jpeg'),
      require('../../../assets/images/profileimg3.jpeg'),
    ],
    comment_posted: [
      {
        name: 'DAVID Sheety',
        title: 'What are the signs and symptoms of skin cancer',
      },
    ],
  },
  {
    id: 3,
    type: 'DIET',
    duration: '1 min',
    name: 'Rohit Sheety',
    diagonsed: 'Diagonsed Recently',
    title: 'What are the signs and symptoms of skin cancer',
    subtitle:
      'I’ve been facing a few possibble symptoms of skin cancer. I’ve googled the possibilities but i thought i’d ask the community instead',
    location: 'Mumbai',
    numberOfQuestions: 14,
    likes: 10,
    comments: 10,
    videoUrl  : "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    isLikeSelected: false,
  //  profileImg: require('../../../assets/images/profileimg2.jpeg'),
    reactImages: [
      require('../../../assets/images/profile_img.jpeg'),
      require('../../../assets/images/profileimg2.jpeg'),
      require('../../../assets/images/profileimg3.jpeg'),
    ],
    comment_posted: [
      {
        name: 'RAM Sheety',
        title: 'What are the signs and symptoms of skin cancer',
      },
    ],
  },
  {
    id: 4,
    type: 'DIET',
    duration: '1 min',
    name: 'Bahubali',
    diagonsed: 'Diagonsed Recently',
    title: 'Cancer meet at Rajeev Gandhi National Park',
    subtitle: 'ought i’d ask the community instead.',
    location: 'Rajeev gandhi national park, mumbai',
    numberOfQuestions: 24,
    likes: 20,
    comments: 10,
  //  profileImg: require('../../../assets/images/profileimg2.jpeg'),
    videoUrl :"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    reactImages: [
      require('../../../assets/images/profile_img.jpeg'),
      require('../../../assets/images/profileimg2.jpeg'),
      require('../../../assets/images/profileimg3.jpeg'),
    ],
    comment_posted: [
      {
        name: 'Ram Charan',
        title: 'What are the signs and symptoms of skin cancer',
      },
    ],
  },
  {
    id: 5,
    type: 'DIET',
    duration: '1 min',
    name: 'Prabhas',
    diagonsed: 'Diagonsed Recently',
    title: 'What’s the best Hospital in India for cancer?',
    subtitle:
      'My husband has his 3 days transplant assessment in Newcastle next month, strange mix of emotions. For those that have been through this how long did it take following assessment was it until you were t... See More',
    location: 'Rajeev gandhi national park, mumbai',
    numberOfQuestions: 24,
    likes: 20,
    isLikeSelected: false,
    comments: 10,
  //  profileImg: require('../../../assets/images/profileimg3.jpeg'),
    videoUrl:  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    // reactImages: [
    //   require('../../../assets/images/profile_img.jpeg'),
    //   require('../../../assets/images/profileimg2.jpeg'),
    //   require('../../../assets/images/profileimg3.jpeg'),
    // ],
    comment_posted: [
      {
        name: 'Bahubali',
        title: 'What are the signs and symptoms of skin cancer',
      },
    ],
  },
];



export const SHARE_ACTION = [
  {
    icon: 'bell',
    title: 'Send as a private message',
    subtitle: 'share your thoughts with the community',
  },
  {
    icon: 'feed',
    title: 'Share as a post',
    subtitle: 'share your thoughts with the community',
  },
  {
    icon: 'shape',
    title: 'Share on Facebook',
    subtitle: 'share your thoughts with the community',
  },
  {
    icon: 'groupcoment',
    title: 'Send via WhatsApp',
    subtitle: 'share your thoughts with the community',
  },
];

export default Dummy_Info;





// {
//   "reqNutrients": {
//       "Sodium": "2.3 gm",
//       "Sugar":{"Male": "24 gm", "Female":"36 gm"},
//       "carbohydrate": "130 gm",
//       "protein":{"Male": "76 gm", "Female":"56 gm"},
//       "fat":"35 % daily calorie",
//       "fiber": {"Male": "38 gm", "Female":"25 gm"},
//       "calcium": "1.2 gm",
//       "iron":{"Male": "8 gm", "Female":"18 gm"},
//       "magnesium": "0.42 gm",,
//       "potassium": "3.5 gm",
//       "zinc": "0.011 gm",
//       "vitamin_A":"0.0009 gm",
//       "vitamin_C": "0.09 gm",
//       "vitamin_D": "0.00002 gm",
//       "vitamin_E": "0.015 gm",
//       "vitamin_K": "0.00012 gm"
      
//   },
//   "healthHazardousChemicals": {
//       "caffiene":{
//           "limit":"0.4 gm",
//           "healthIssues": ["dehydration", "anxiety", "rapid heart rate", "blood will toxifiy"],
//           "warning":"energy drinks or supplements can have much higher concentrations of caffeine and should be consumed with caution"
//       },
//       "sugar":{
//           "warning":" 8 times more addictive  than cocaine",
//           "healthIssues":["weight gain" , "hypertension", "diabetes", "toothDecay", "heartDisease"],
//           "solution":"avoid eating processed foods",
//           "environmentIssues":"Sugar mills require large amounts of water and energy to operate, and can generate significant amounts of waste products such as bagasse"
//       },
//       "phosphoricAcid":{
//           "limit": "less than 1% concentration",
//           "healthIssues": ["toothDecay", "weakbones", "kidneyDamage", "reduce Nutrient absorption of Body"],
//           "solution":"avoid consuming soft drinks, processed foods such as cheese, processed meats, and baked goods"
//       },
//       "carbonicAcid":{
//           "limit":"less than 0.2% concentration",
//           "healthIssues": ["Dehydration","Osteoporosis","gastroesophageal reflux disease","Dental erosion", "kills good bacteria leads to decrrease stomach health"],
//           "solution": "avoid consuming carbonated beverages, such as soda and sparkling water"
//       },
//       "trans Fat":{
//           "source":"hydrogenated vegetable oils",
//           "code": 110,
//           "usedFor": "increasing shelf life & flavour stability of products"
//           "healthIssues": ["heart disease", " diabetes", "arthritis", "cancer","diabetes","decreased fertility in women" ],
//           "news": "many countries have implemented regulations to limit or ban the use of trans fats in food manufacturing",
//           "solution":"Avoid eating processed and fried foods that are made with partially hydrogenated oils such as cookies, cakes, and pastries, as well as fried foods like french fries, fried chicken, and donuts."
//           "environmentIssues":"It is produced by hydrogenation process that requires large amounts of energy, as well as the use of catalysts and other chemicals. The production process can also generate waste products, such as spent catalysts and other chemicals that can be harmful to the environment if not properly treated and disposed of."
//       },
//       "palm Oil":{
//           "usedFor": "Used as cooking Oil( high in saturated fat/ highly processed/ improves texture of food)",
//           "healthIssues":["heart disease", "increases (bad) cholesterol level in blood", ],
//           "Environmental concerns": "The production of palm oil has been linked to deforestation. habitat destruction, and other environmental issues. These issues can have indirect effects on human health, such as changes in air quality and access to clean water.",
//           "solution":"Avoid using processed foods, including baked goods, snack foods, and pre-packaged meals, instant noodles, chocolate products, cosmetics and personal care products, including soaps, shampoos, and lotions."
//           "environmentIssues":"Most of the palm oil consumed in India is imported from other countries, such as Indonesia and Malaysia  via sea transport causes burning of fossil fuels. shipping is a significant contributor to greenhouse gas emissions and air pollution"
          
//       },
      
//       "taurine":{
//           "usedFor":"flavor enhancer",
//           "healthIssues":["High blood pressure", "Cardiac arrhythmia", "Kidney damage"],
//           "environmentIssues":"Taurine is mostly present in animal-based foods like meat, fish, and dairy products. These products require significant land use, water consumption, and energy, which can contribute to environmental issues like deforestation, water pollution, and greenhouse gas emissions. Additionally, the extraction and purification of taurine often involves the use of chemicals that can have negative environmental impacts if not handled and disposed of properly."
//           "solution":"Avoid consuming Energy drinks, Sports drinks including Red Bull."
          
         
//       },
//       "saturated fat":{
//           "usedAs":"major constituent of prepared foods like maggie/ noodles",
//           "healthIssues":["ncreases the risk of heart disease and stroke", "diabetes(2)","arthritis","cancer", "Reduces cognitive function"],
          
//       },
//       "sodium":{
//           "healthIssues";["heart disease", "stroke",  "kidney disease", "Dehydration", "bone loss", "Increased risk of stomach cancer"]
//       },
      
//       "maida":{
//           "usedAs":"major constituent of biscuits",
//           "healthIssues":["obesity", "increase in blood sugar levels", "digestive problems"],
//           "environmentIssues":"The refining process of maida, which involves multiple steps to remove the outer layers of the grain, can have some environmental impacts. The process consumes a significant amount of energy, and the use of heavy machinery and equipment can result in greenhouse gas emissions."
//       },
      
//       "Emulsifiers/ Stabilizers":{
//           "usedFor": "Stabilize and mix ingredients, Good Texture and mouthfeel, improves Stability & Shelf life"
//           "Carrageenan":{
//               "healthIssues":["Inflammation in the digestive tract causes digestive issues such as bloating, gas, and diarrhea", "Immune system suppression", "Cancer risk","Allergic reactions"],
//           },
//           "Polysorbate 80":{
//               "healthIssues": ["Infertility and reproductive issues", "Allergic reactions", "Gut permeability", "Cancer risk"],
//           },
//           "Propylene glycol alginate (PGA)":{
//               "healthIssues":["digestive issues, such as bloating and gas","Allergic reactions", "Heavy metal contamination lead and cadmium, which could pose health risks over time"],
//           },
//           "Sucrose acetate isobutyrate (SAIB)":{
//               "healthIssues": ["toxic effects on human liver cells"]
//           },
//           "Potassium sorbate 202":{
//               "healthIssues":["nausea", "vomiting", "diarrhea"]
//           },
//           "solution":"Avoid Eating Ice cream, Baked goods, mayonnaise, Beverages such as flavored milks and fruit juices in which these emulsfier are used",
//           "environmentIssues":"Have environmental impacts, particularly in terms of the energy and resources required to produce them, as well as the waste generated during the manufacturing process suuch as solvents and other chemicals that can be harmful to the environment if not properly treated and disposed of"
//       },
      
//       "artificialChemicals":{
//           "artificial Flavour":{
//               "usedFor":"enhance the taste of food products or to provide a consistent flavor profile",
//               "healthIssues":["allergic reactions","respiratory problems","headaches", "dizziness"],
//           },
//           "sweetner":{
//               "usedFor":"enhance the taste of food products or to provide a consistent flavor profile",
//               "healthIssues":["increased risk of metabolic disorders such as diabetes"],
//           },
//           "caramel":{
//               "healthIssues":["it’s a carcinogen( substance that causes cancer)"]
//           },
          
//           "environmentIssues":"Have environmental impacts, particularly in terms of the energy and resources required to produce them, as well as the waste generated during the manufacturing process suuch as solvents and other chemicals that can be harmful to the environment if not properly treated and disposed of."
//       },
      
//   }
// }

// {
//   "Products":{
//       "Snacks":{
//           [
//               { "id":0,
//                "title":"Oreo 100gm":
//                "nutritionInfo": [
//                      {
//                          "title":"sugar",
//                            "value":36,
//                            "color":"CARMINE"
//                          },
//                          {
//                            "title":"MAIDA",
//                            "value":60,
//                            "color":"IMPERIAL"
//                          },
//                    {
//                           "title":"palm oil",
//                           "value":60,
//                           "color":"IMPERIAL"
//                         },
//                    {
//                           "title":"TRANS FAT",
//                           "value":60,
//                           "color":"IMPERIAL"
//                         },
//                    {
//                           "title":"Artificial Chemicals( FLAVOURS )",
//                           "value":60,
//                           "color":"IMPERIAL"
//                         }
                   
//                ],
//             "details": [
//                 {
//                       "title":"sugar",
//                       "healthIssues":["weight gain" , "hypertension", "diabetes", "toothDecay", "heartDisease"],
//                      },
//                 {
//                       "title":"maida",
//                       "healthIssues":["obesity", "increase in blood sugar levels", "digestive problems"],
//                      },
//                 {
//                     "title": "trans Fat",
//                     "healthIssues": ["heart disease", " diabetes", "arthritis", "cancer","diabetes","decreased fertility in women" ],
//                 }
//             ]
//             },
              
//           ],
//           "Parle milano 100gm":{
//               "sugar":"35 gm",
//               "maida":"yes",
//               "palm oil": "yes",
//               "trans Fat": "yes",
//               "artificialChemicals":{"isPresent":"yes", "name": "not diclosed"},
//           },
//           "hide & sick 100 gm":{
//               "sugar":"32 gm",
//               "maida":"yes",
//               "palm oil": "yes",
//               "trans Fat": "yes",
//               "artificialChemicals":{"isPresent":"yes", "name": "not diclosed"},
//           },
//           "BetterOptions(all are indian brands)": ["tots & moms biscuits", "grandma millet cookies","the bread company biscuits"],
          
//       },
//       "Beverages":{
//           "Red Bull(250ml)":{
//               "sugar": "27gm",
//               "artificialChemicals":{"artificial Flavour":{"isPresent":"yes"},"caramel":{"isPresent":"yes"}},
//               "emulsfiers":{"isPresent":"yes", "name": "Sucrose acetate isobutyrate"}
//               "taurine":"yes",
//               "news":"banned in many countries"
//               "warningCan":"not recommed for children, pregnant women & person sensitive to caffiene"
//               "warning": "Due to sugar & caffiene Highly addictive",
//           },
//           "Coca Cola(250 ml)":{
//               "sugar": "26gm",
//               "Phosphoric acid":"yes",
//               "artificialChemicals":{"sweetner":{"isPresent":"yes","name":"High fructose corn syrup"}, "caramel":{"isPresent":"yes"}},
//               "emulsfiers":{"isPresent":"yes", "name": "not diclosed"},
//           },
//           "mazza(200ml)":{
//               "sugar":"36 gm",
//               "Sodium": "7 gm",
//               "mangoPulp": "11 %",
//               "artificialChemicals":{"artificial Flavour":{"isPresent":"yes"},"Potassium sorbate 202":{"isPresent":"yes"}},
//               "emulsfiers":{"isPresent":"yes", "name": "not diclosed"},
//           }
//       },
//       "Prepared Foods":{
//           "maggi":{
//               "maida": "yes",
//               "sodium": {"quantity":"1 gm" , "isHigh": "true"},
//               "taste maker":" only 20% spices rest are chemicals",
//               "saturated fat":"yes",
//               "emulsfier":"yes",
//           },
//           "yippie ata noodles ":{
//                   "maida": "yes",
//                   "sodium": {"quantity":"1.4 gm" , "isHigh": "true"},
//                   "palm Oil":"yes",
//                   "saturated fat":"yes"
//                   "emulsfier":"yes",
//               },
//           "maggi ata noodles":{
//                       "maida": "yes",
//                       "sodium": {"quantity":"1 gm" , "isHigh": "true"},
//                       "taste maker":" only 20% spices rest are chemicals",
//                       "saturated fat":"yes",
//                       "emulsfier":"yes",
//                   },
//           "BetterOptions": ["naturally yours noodles", "multi millet noodles"],
//       }
//   }
// }

// "utensils":{
//   "Non Stick Cookware": {
//       "coating": "teflon",
//       "problem":"when heated it releases toxic chemicals,some cheap cookware has also has chemical ( PFOA- perfluorootanoic acid ",
//       "issues": "perfluorootanoic acid  stays longer in body leads to cancer",
//       "environmentImpact":" due to the use of chemicals and energy-intensive processes causes air pollution, waste materials such as unused coatings or damaged cookware that may be difficult to recycle."
//   },
//   "Aluminium cookware ":{
//       "material":"aluminium",
//       "problem": "when heated slowly leached into food & gets deposited in body",
//       "issues":"aluminium is Thyro toxic metal, it's deposition cause constipation, skin problems,  lack of energy, paralysis, liver problem, heart complication, brain disorders",
//       "environmentImpact":"The production of aluminum requires large amounts of water,generates significant amounts of waste materials, including red mud, a toxic byproduct of the refining process that can contaminate soil and water."
//   },
//   "StainlessSteel cookware":{
//       "material": "stainless steel",
//       "problem": "100% stainless steel is better choice but, some have coated with copper bottoms, some stainless steel has high nickel quanitity in that",
//       "issues":"copper coated  reacts with foods, high nickel quanitity in that which is toxic",
//       "environmentImpact":"The production of stainless steel results in significant greenhouse gas emissions, including carbon dioxide, nitrogen oxide, and sulfur dioxide. These emissions contribute to climate change and air pollution"
//   },
//   "ceramic cookware":{
//       "material": "ceramic",
//       "problem":"very expensive",
//       "issues":"most avaivalbe in market, ceramic cookware are not more than its coating over aluminium",
//       "environmentImpact": "less",
//   },
//   "clay cookware":{
//       "material": "clay",
//       "issues":"cooking may take some more time but retains most of food nutrients"
//       "environmentImpact": "very less , easy available"
//   }
// }
