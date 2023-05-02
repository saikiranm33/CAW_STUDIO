
const COLOR_CODES = { 
    LOW : "#1fcc39",
    MEDIUM: "#f7ad45",
    MEDIUM_HIGH:"#c95d7d",
    HIGH:"#de5947",
}


export default  ComesticData = [
    {
      "id": 0,
      "healthyRating": "4.4/10",
      "title": "Dove Shampoo",
      "sustainabilityRating": "1.5/5",
      "EcoRating": "2",
      "imagePath":require("../assets/images/Beauty/dove.png"),
      "sustainability": [
        {
          "title": "Sodium C12-13 Pareth Sulfate",
          "value": "70",
          "color": COLOR_CODES.MEDIUM_HIGH,
          "Description": "High Chronic Toxicity To Acquatic Life"
        },
        {
          "title": "Sodium Gluconate",
          "value": "60",
          "color": COLOR_CODES.MEDIUM,
          "Description": "Low Acquatic toxicity to Acquatic Life"
        },
        {
          "title": "Sodium Chloride",
          "value": "60",
          "color": COLOR_CODES.MEDIUM,
          "Description": "Contaminates Drinking Water, Its extraxtion process may lead to soil eroision"
        },
        {
          "title": "Mica",
          "value": "70",
          "color": COLOR_CODES.MEDIUM_HIGH,
          "Description": "Mineral comes from mining, risk of overexpoitation"
        }
      ],
      "details": [
        {
          "title": "Environmental",
          "imagePath":require("../assets/images/pollution2.json"),
          "description": [
            {
              "title": "Sodium C12-13 Pareth Sulfate",
              "Description": "High Chronic Toxicity To Acquatic Life"
            },
            {
              "title": "Sodium Gluconate",
              "Description": "Low Acquatic toxicity to Acquatic Life"
            },
            {
              "title": "Sodium Chloride",
              "Description": "Contaminates Drinking Water, Its extraxtion process may lead to soil eroision"
            },
            {
              "title": "Mica",
              "Description": "Mineral comes from mining, risk of overexpoitation"
            }
          ]
        },
        {
          "title": "Health",
          "imagePath":require("../assets/images/healthy.json"),
          "description": [
            {
              "title": "Cocamidopropyl Betaine",
              "Description": "Skin Discomfort, Eye Irritation"
            },
            {
              "title": "Dimethiconol",
              "Description": "Retarted Growth, Carcinogenicity"
            },
            {
              "title": "Sodium Benzoate",
              "Description": "Oxidative Stress, Obesity, ADHD, Allergies"
            }
          ]
        },
        {
          "title": "Sustainable Options",
          "imagePath":require("../assets/images/smile-meter.json"),
          "description": [
            {
              "title": "DIY(Homemade) shampoo",
              "Description": "You can make your own shampoo using natural ingredients such as baking soda, apple cider vinegar, and essential oils. These ingredients are readily available, affordable, and often come in reusable or recyclable packaging"
            },
            {
              "title": "Dry shampoo",
              "Description": "This is a powder that can be applied to your hair to absorb excess oil and refresh your hair without the need for water. Look for a natural, plant-based dry shampoo option to reduce your environmental impact."
            }
          ]
        }
      ]
    },
    {
      "id": 1,
      "healthyRating": "4.4/10",
      "title": "Lux Shampoo",
      "sustainabilityRating": "1.5/5",
      "imagePath":require("../assets/images/Beauty/Lux.png"),
      "EcoRating": "2",
      "sustainability": [
        {
          "title": "Coco-Betaine",
          "value": "70",
          "color": COLOR_CODES.MEDIUM,
          "Description": "Coco-betaine production and use can harm the environment due to chemical use and pollution. Improper disposal can harm aquatic life."
        },
        {
          "title": "Sodium Oxide",
          "value": "80",
          "color": COLOR_CODES.HIGH,
          "Description": "Improper handling and disposal of sodium oxide can cause environmental harm. It's important to follow safety protocols when using and disposing of this compound."
        },
        {
          "title": "Polyquaternium",
          "value": "80",
          "color":  COLOR_CODES.HIGH,
          "Description": "It's primarily produced synthetically and generates waste products that can contribute to air and water pollution. When washed down the drain, it can persist in the environment"
        }
      ],
      "details": [
        {
          "title": "Health",
          "imagePath":require("../assets/images/healthy.json"),

          "description": [
            {
              "title": "Coco-Betaine",
              "Description": "Skin Discomfort, Eye Irritation"
            },
            {
              "title": "Sodium Oxide",
              "Description": "Corrosive to the Eye,Skin and Respiratory Tract"
            },
            {
              "title": "Polyquaternium",
              "Description": "increases cytoxicity and NF-kappaB linked inflammation in human corneal epithelial cells"
            }
          ]
        },
        {
          "title": "Environmental",
          "imagePath": require("../assets/images/pollution2.json"),
          "description": [
            {
              "title": "Coco-Betaine",
              "Description": "Coco-betaine production and use can harm the environment due to chemical use and pollution. Improper disposal can harm aquatic life."
            },
            {
              "title": "Sodium Oxide",
              "Description": "Improper handling and disposal of sodium oxide can cause environmental harm. It's important to follow safety protocols when using and disposing of this compound."
            },
            {
              "title": "Polyquaternium",
              "Description": "It's primarily produced synthetically and generates waste products that can contribute to air and water pollution. When washed down the drain, it can persist in the environment"
            }
          ]
        },
        {
          "title": "Sustainable Options",
         "imagePath": require("../assets/images/smile-meter.json"),
          "description": [
            {
              "title": "Co-washing",
              "Description": "Use conditioner instead of shampoo to clean and moisturize curly or coarse hair."
            },
            {
              "title": "Dry shampoo",
              "Description": "This is a powder that can be applied to your hair to absorb excess oil and refresh your hair without the need for water. Look for a natural, plant-based dry shampoo option to reduce your environmental impact."
            }
          ]
        }
      ]
    },
    {
      "id": 2,
      "healthyRating": "6.4/10",
      "title": "Clean & Clear Face Wash",
      "imagePath":require("../assets/images/Beauty/face.png"),
      "sustainabilityRating": "2.5/5",
      "EcoRating": "3",
      "sustainability": [
        {
          "title": "Triethanolamine",
          "value": "60",
          "color": COLOR_CODES.MEDIUM,
          "Description": "TEA can harm aquatic life and contribute to air pollution and greenhouse gas emissions. Use TEA-free products and properly dispose of any products that contain it."
        },
        {
          "title": "Myristic Acid",
          "value": "65",
          "color": COLOR_CODES.MEDIUM,
          "Description": "Myristic acid from palm oil causes deforestation, GHG emissions, and aquatic pollution. Use sustainable ingredients and dispose of products responsibly."
        },
        {
          "title": "Cocamidopropyl Betaine",
          "value": "70",
          "color": COLOR_CODES.MEDIUM_HIGH,
          "Description": "CAPB harms aquatic life and biodegrades slowly, leading to environmental damage. Use CAPB-free or alternative products and dispose of them properly."
        },
        {
          "title": "Lauryl Phosphate",
          "value": "85",
          "color": COLOR_CODES.HIGH,
          "Description": "Lauryl Phosphate is toxic to aquatic life, persists in the environment and causes long-term damage. Use products free from it and dispose of them properly."
        }
      ],
      "details": [
        {
          "title": "Health",
          "imagePath": require("../assets/images/pollution2.json"),
          "description": [
            {
              "title": "Triethanolamine",
              "Description": "cause reversible corneal edema"
            },
            {
              "title": "Myristic Acid",
              "Description": "Corrosive to the Eye,Skin and Respiratory Tract"
            },
            {
              "title": "Cocamidopropyl Betaine",
              "Description": "increases cytoxicity and NF-kappaB linked inflammation in human corneal epithelial cells"
            },
            {
              "title": "Lauryl Phosphate",
              "Description": "acute oral and inhalation toxicity"
            }
          ]
        },
        {
          "title": "Environmental",
          "imagePath":require("../assets/images/healthy.json"),
          "description": [
            {
              "title": "Triethanolamine",
              "Description": "cause reversible corneal edema"
            },
            {
              "title": "Myristic Acid",
              "Description": "Myristic acid raises LDL cholesterol and risks cardiovascular disease, stroke, and insulin resistance. Limit saturated fat intake, choose healthier fats."
            },
            {
              "title": "Cocamidopropyl Betaine",
              "Description": "CAPB causes skin and eye irritation, respiratory issues like asthma"
            },
            {
              "title": "Lauryl Phosphate",
              "Description": "acute oral and inhalation toxicity"
            }
          ]
        },
        {
          "title": "Sustainable Options",
          "imagePath": require("../assets/images/smile-meter.json"),
          "description": [
            {
              "title": "Co-washing",
              "Description": "Use conditioner instead of shampoo to clean and moisturize curly or coarse hair."
            },
            {
              "title": "Shampoo bars",
              "Description": "This is a powder that can be applied to your hair to absorb excess oil and refresh your hair without the need for water. Look for a natural, plant-based dry shampoo option to reduce your environmental impact."
            }
          ]
        }
      ]
    },
    {
      "id": 3,
      "healthyRating": "6/10",
      "title": "Vaseline Intensive Care Restore Lotion",
      "imagePath":require("../assets/images/Beauty/vaseline.png"),
      "sustainabilityRating": "2/5",
      "EcoRating": "4",
      "sustainability": [
        {
          "title": "Sodium Cetostearyl Sulphate",
          "value": "30",
          "color": COLOR_CODES.LOW,
          "Description": "SCS is harmful to aquatic life and can cause water pollution. It is derived from non-renewable resources, so its continued use may impact the availability of those resources in the long term."
        },
        {
          "title": "Phenoxyethanol",
          "value": "70",
          "color": COLOR_CODES.MEDIUM_HIGH,
          "Description": "Phenoxyethanol is toxic to aquatic life, accumulates in the environment, and is not readily biodegradable. Overuse or improper disposal of products containing phenoxyethanol can harm aquatic ecosystems and contribute to water pollution."
        },
        {
          "title": "Disodium Edta",
          "value": "85",
          "color": COLOR_CODES.MEDIUM_HIGH,
          "Description": "Disodium EDTA can mobilize heavy metals in the environment, is not biodegradable, and can have negative impacts on ecosystems if overused or improperly disposed of."
        },
        {
          "title": "Alpha-isomethylIonone",
          "value": "75",
          "color": COLOR_CODES.MEDIUM_HIGH,
          "Description": "Alpha-isomethyliononemayharmaquaticecosystemsifnotproperlytreatedbeforedischargeandisderivedfromnon-renewableresources,           potentiallyimpactingtheiravailabilityinthelongterm."
        }
      ],
      "details": [
        {
          "title": "Health",
           "imagePath": require("../assets/images/pollution2.json"),
          "description": [
            {
              "title": "Sodium Cetostearyl Sulphate",
              "Description": "SLES can cause eyes irration, Skin, and Lungs"
            },
            {
              "title": "Phenoxyethanol",
              "Description": "Skin, Lung and Liver irritation, kidney and nerve damage"
            },
            {
              "title": "Alpha-isomethylIononee",
              "Description": "acute oral and inhalation toxicity"
            }
          ]
        },
        {
          "title": "Environmental",
           "imagePath":require("../assets/images/healthy.json"),
          "description": [
            {
              "title": "Sodium Cetosteary lSulphate",
              "Description": "SCS is harmful to aquatic life and can cause water pollution. It is derived from non-renewable resources, so its continued use may impact the availability of those resources in the long term."
            },
            {
              "title": "Phenoxyethanol",
              "Description": "Phenoxyethanol is toxic to aquatic life, accumulates in the environment, and is not readily biodegradable. Overuse or improper disposal of products containing phenoxyethanol can harm aquatic ecosystems and contribute to water pollution."
            },
            {
              "title": "Disodium Edta",
              "Description": "Disodium EDTA can mobilize heavy metals in the environment, is not biodegradable, and can have negative impacts on ecosystems if overused or improperly disposed of."
            },
            {
              "title": "Alpha-isomethyl Iononee",
              "Description": "Alpha-isomethyl ionone may harm aquatic ecosystems if not properly treated before discharge and is derived from non-renewable resources, potentially impacting their availability in the long term."
            }
          ]
        },
        {
          "title": "Sustainable Options",
            "imagePath": require("../assets/images/smile-meter.json"),
          "description": [
            {
              "title": "Aloevera",
              "Description": "Aloe vera is a sustainable natural ingredient known for its healing and soothing properties, and can be grown without harmful pesticides or chemicals."
            },
            {
              "title": "Jojobaoil",
              "Description": "Jojoba oil is a non-greasy moisturizer easily absorbed by the skin, sustainable and sourced from eco-friendly producers."
            }
          ]
        }
      ]
    },
    {
      "id": 4,
      "healthyRating": "8/10",
      "title": "Johnson's Baby Cream",
      "sustainabilityRating": "3/5",
      "imagePath":require("../assets/images/Beauty/babyCream.png"),
      "EcoRating": "4",
      "sustainability": [
        {
          "title": "Cocoglycerides",
          "value": "30",
          "color": COLOR_CODES.LOW,
          "Description": "Cocoglycerides are eco-friendly, but the cultivation of coconut palms can lead to deforestation and transportation of coconut oil can lead to greenhouse gas emissions."
        },
        {
          "title": "Potassium cetyl phosphate",
          "value": "70",
          "color": COLOR_CODES.MEDIUM,
          "Description": "Potassium cetyl phosphate may harm aquatic ecosystems if not treated before discharge, and its production and transportation can contribute to environmental impacts such as greenhouse gas emissions, habitat loss, and deforestation."
        },
        {
          "title": "Disodium Edta",
          "value": "85",
          "color": COLOR_CODES.HIGH,
          "Description": "Disodium EDTA can mobilize heavy metals in the environment, is not biodegradable, and can have negative impacts on ecosystems if overused or improperly disposed of."
        },
        {
          "title": "Hydrogenated palm glycerides",
          "value": "60",
          "color": COLOR_CODES.MEDIUM,
          "Description": "Hydrogenated palm glycerides used in cosmetics are linked to environmental issues like deforestation and habitat destruction. To reduce the impact, support sustainable palm oil production and sourcing and reduce overall consumption of palm oil products."
        }
      ],
      "details": [
        {
          "title": "Health",
           "imagePath": require("../assets/images/pollution2.json"),
          "description": [
            {
              "title": "Propylene Glycol",
              "Description": "Propylene Glycol is generally safe but may cause skin irritation or health problems if used excessively. Use in moderation and patch test products before use."
            },
            {
              "title": "POLYURETHANE-35",
              "Description": "Some studies suggest that exposure to certain types of polyurethane may be associated with skin and respiratory irritation"
            },
            {
              "title": "Glyceryl stearate",
              "Description": "Glyceryl stearate"
            },
            {
              "title": "Paraffin",
              "Description": "inhaling or ingesting paraffin can be harmful and may cause respiratory or digestive problems"
            }
          ]
        },
        {
          "title": "Environmental",
            "imagePath":require("../assets/images/healthy.json"),
          "description": [
            {
              "title": "Propylene Glycol",
              "Description": "Propylene Glycol is biodegradable and has a low environmental impact, but excessive amounts can harm the environment. Its production generates greenhouse gases, so responsible use and disposal, and eco-friendly alternatives are recommended."
            },
            {
              "title": "POLYURETHANE-35",
              "Description": "It can contribute to pollution and harm wildlife if not disposed of properly. "
            },
            {
              "title": "Glyceryl stearate",
              "Description": "Glyceryl stearate is environmentally friendly as it is biodegradable and not known to persist in the environment. Use and dispose of responsibly."
            },
            {
              "title": "Paraffin",
              "Description": "Paraffin harms the environment by polluting water bodies and contributing to climate change and air pollution"
            }
          ]
        },
        {
          "title": "Sustainable Options",
           "imagePath": require("../assets/images/smile-meter.json"),
          "description": [
            {
              "title": "Zao Organic Volume and Sheathing Mascara",
              "Description": "Zao Organic Volume and Sheathing Mascara - made with organic ingredients, packaged in bamboo and refillable packaging."
            },
            {
              "title": "Homemade Natural Mascara",
              "Description": "Mix together a small amount of activated charcoal, coconut oil, and aloe vera gel to make a natural mascara that can be applied with a mascara wand."
            }
          ]
        }
      ]
    }
]