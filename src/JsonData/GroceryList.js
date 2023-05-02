
const COLOR_CODES = { 
    LOW : "#1fcc39",
    MEDIUM: "#f7ad45",
    HIGH:"#de5947"
}


export default GroceryList = [
    {
      "id": 0,
      "title": "Oreo 100gm",
      "healthyRating": "2.4/10",
      "sustainabilityRating": "1/5",
      imagePath:require("../assets/images/Beauty/redbull.png"),
      "EcoRating": 1.1,
      "nutritionInfo": [
        {
          "title": "Sugar",
          "value": 100,
          "color": COLOR_CODES.HIGH
        },
        {
          "title": "Palm Oil",
          "value": 60,
          "color": COLOR_CODES.LOW
        },
        {
          "title": "Trans Fat",
          "value": 80,
          "color": COLOR_CODES.MEDIUM
        },
        {
          "title": "Artificial Chemicals",
          "value": 91,
          "color": COLOR_CODES.HIGH
        }
      ],
      "sustainability": [
        {
          "title": "Sugar",
          "value": 60,
          "color": COLOR_CODES.LOW,
          "healthIssues": [
            "weight gain",
            "hypertension",
            "diabetes",
            "toothDecay",
            "heartDisease"
          ]
        },
        {
          "title": "Maida",
          "value": 60,
          "color": COLOR_CODES.LOW,
          "healthIssues": [
            "obesity",
            "increase in blood sugar levels",
            "digestive problems"
          ]
        },
        {
          "title": "Trans Fat",
          "value": 81,
          "color": COLOR_CODES.MEDIUM,
          "healthIssues": [
            "heart disease",
            " diabetes",
            "arthritis",
            "cancer",
            "diabetes",
            "decreased fertility in women"
          ]
        },
        {
          "title": "Palm Oil",
          "value": 81,
          "color": COLOR_CODES.MEDIUM,
          "healthIssues": [
            "heart disease",
            "increases (bad) cholesterol level in blood"
          ]
        }
      ],
      "details": [
        {
          "title": "Environmental",
          imagePath:require("../assets/images/pollution2.json"),
          "description": [
            {
              "title": "Sugar",
              "Description": "It's production uses a lot of water and energy, and generate waste like bagasse, causing significant environmental impact"
            },
            {
              "title": "palm oil",
              "Description": "It is imported from other countries via sea transport(Shipping) causes burning of fossil fuels contributing to greenhouse gas emissions and air pollution"
            },
            {
              "title": "Artificial Chemicals(FLAVOURS)",
              "Description": "Impacts Environment in terms of the energy and resources required to produce them, as well as the chemical waste generated during the manufacturing process"
            }
          ]
        },
        {
          "title": "Health",
          imagePath:require("../assets/images/healthy.json"),

          "description": [
            {
              "title": "Sugar",
              "Description": "Weight Gain , Hypertension, Diabetes, Tooth Decay, Heart Disease"
            },
            {
              "title": "Trans Fat",
              "Description": "Heart Disease,  Diabetes, Arthritis, Cancer, Diabetes ,Decreases Fertility in Women"
            },
            {
              "title": "Palm Oil",
              "Description": "Heart Disease, Increases (bad) cholesterol level in blood"
            }
          ]
        },
        {
          "title": "Sustainable Options",
          imagePath:require("../assets/images/smile-meter.json"),
          "description": [
            {
              "title": "Tots & moms Biscuits, Grandma Millet Cookies,The Bread Company Biscuits",
              "Description": "All of them didn't uses Artificial Flavours\n, Uses Jaggery instead of Sugar\n,All of them are Indian Brands(Econimically Good for our country)"
            }
          ]
        }
      ]
    },
    {
      "id": 1,
      "title": "milano 100gm",
      "healthyRating": "2.4/10",
      "sustainabilityRating": "1/5",
      imagePath:require("../assets/images/Beauty/milano.png"),
      "EcoRating": "1.1",
      "nutritionInfo": [
        {
          "title": "Sugar",
          "value": 100,
          "quantity": "36 gm",
          "color": COLOR_CODES.HIGH
        },
        {
          "title": "Palm Oil",
          "value": 60,
          "color": COLOR_CODES.LOW
        },
        {
          "title": "Trans Fat",
          "value": 80,
          "color": COLOR_CODES.MEDIUM
        },
        {
          "title": "Artificial Chemicals",
          "value": 91,
          "color": COLOR_CODES.HIGH
        }
      ],
      "sustainability": [
        {
          "title": "Sugar",
          "value": 60,
          "color": COLOR_CODES.LOW,
          "healthIssues": [
            "weight gain",
            "hypertension",
            "diabetes",
            "toothDecay",
            "heartDisease"
          ]
        },
        {
          "title": "Maida",
          "value": 60,
          "color": COLOR_CODES.LOW,
          "healthIssues": [
            "obesity",
            "increase in blood sugar levels",
            "digestive problems"
          ]
        },
        {
          "title": "Trans Fat",
          "value": 81,
          "color": COLOR_CODES.MEDIUM,
          "healthIssues": [
            "heart disease",
            " diabetes",
            "arthritis",
            "cancer",
            "diabetes",
            "decreased fertility in women"
          ]
        },
        {
          "title": "Palm Oil",
          "value": 81,
          "color": COLOR_CODES.MEDIUM,
          "healthIssues": [
            "heart disease",
            "increases (bad) cholesterol level in blood"
          ]
        }
      ],
      "details": [
        {
          "title": "Environmental",
          imagePath:require("../assets/images/pollution2.json"),
          "description": [
            {
              "title": "Sugar",
              "Description": "It's production uses a lot of water and energy, and generate waste like bagasse, causing significant environmental impact"
            },
            {
              "title": "palm oil",
              "Description": "It is imported from other countries via sea transport(Shipping) causes burning of fossil fuels contributing to greenhouse gas emissions and air pollution"
            },
            {
              "title": "Artificial Chemicals(FLAVOURS)",
              "Description": "Impacts Environment in terms of the energy and resources required to produce them, as well as the chemical waste generated during the manufacturing process"
            }
          ]
        },
        {
          "title": "Health",
          imagePath:require("../assets/images/healthy.json"),

          "description": [
            {
              "title": "Sugar",
              "Description": "Weight Gain , Hypertension, Diabetes, Tooth Decay, Heart Disease"
            },
            {
              "title": "Trans Fat",
              "Description": "Heart Disease,  Diabetes, Arthritis, Cancer, Diabetes ,Decreases Fertility in Women"
            },
            {
              "title": "Palm Oil",
              "Description": "Heart Disease, Increases (bad) cholesterol level in blood"
            }
          ]
        },
        {
          "title": "Sustainable Options",
          imagePath:require("../assets/images/smile-meter.json"),
          "description": [
            {
              "title": "Tots & moms Biscuits, Grandma Millet Cookies,The Bread Company Biscuits",
              "Description": "All of them didn't uses Artificial Flavours\n, Uses Jaggery instead of Sugar\n,All of them are Indian Brands(Econimically Good for our country"
            }
          ]
        }
      ]
    },
    {
      "id": 2,
      "title": "Hide & Seek 100 gm",
      "healthyRating": "2.8/10",
      "sustainabilityRating": "1.5/5",
      imagePath:require("../assets/images/Beauty/hide.png"),
      "EcoRating": "1.5",
      "nutritionInfo": [
        {
          "title": "Sugar",
          "value": 100,
          "quantity": "32 gm",
          "color": COLOR_CODES.HIGH
        },
        {
          "title": "Palm Oil",
          "value": 60,
          "color": COLOR_CODES.LOW
        },
        {
          "title": "Trans Fat",
          "value": 80,
          "color": COLOR_CODES.MEDIUM
        },
        {
          "title": "Artificial Chemicals",
          "value": 91,
          "color": COLOR_CODES.HIGH
        }
      ],
      "sustainability": [
        {
          "title": "Sugar",
          "value": 60,
          "color": COLOR_CODES.LOW,
          "healthIssues": [
            "weight gain",
            "hypertension",
            "diabetes",
            "toothDecay",
            "heartDisease"
          ]
        },
        {
          "title": "Maida",
          "value": 60,
          "color": COLOR_CODES.LOW,
          "healthIssues": [
            "obesity",
            "increase in blood sugar levels",
            "digestive problems"
          ]
        },
        {
          "title": "Trans Fat",
          "value": 81,
          "color": COLOR_CODES.MEDIUM,
          "healthIssues": [
            "heart disease",
            " diabetes",
            "arthritis",
            "cancer",
            "diabetes",
            "decreased fertility in women"
          ]
        },
        {
          "title": "Palm Oil",
          "value": 81,
          "color": COLOR_CODES.MEDIUM,
          "healthIssues": [
            "heart disease",
            "increases (bad) cholesterol level in blood"
          ]
        }
      ],
      "details": [
        {
          "title": "Environmental",
          imagePath:require("../assets/images/pollution2.json"),
          "description": [
            {
              "title": "Sugar",
              "Description": "It's production uses a lot of water and energy, and generate waste like bagasse, causing significant environmental impact"
            },
            {
              "title": "palm oil",
              "Description": "It is imported from other countries via sea transport(Shipping) causes burning of fossil fuels contributing to greenhouse gas emissions and air pollution"
            },
            {
              "title": "Artificial Chemicals(FLAVOURS)",
              "Description": "Impacts Environment in terms of the energy and resources required to produce them, as well as the chemical waste generated during the manufacturing process"
            }
          ]
        },
        {
          "title": "Health",
          imagePath:require("../assets/images/healthy.json"),
          "description": [
            {
              "title": "Sugar",
              "Description": "Weight Gain , Hypertension, Diabetes, Tooth Decay, Heart Disease"
            },
            {
              "title": "Trans Fat",
              "Description": "Heart Disease,  Diabetes, Arthritis, Cancer, Diabetes ,Decreases Fertility in Women"
            },
            {
              "title": "Palm Oil",
              "Description": "Heart Disease, Increases (bad) cholesterol level in blood"
            }
          ]
        },
        {
          "title": "Sustainable Options",
          imagePath:require("../assets/images/smile-meter.json"),
          "description": [
            {
              "title": "Tots & moms Biscuits, Grandma Millet Cookies,The Bread Company Biscuits",
              "Description": "All of them didn't uses Artificial Flavours\n, Uses Jaggery instead of Sugar\n,All of them are Indian Brands(Econimically Good for our country"
            }
          ]
        }
      ]
    },
    {
      "id": 3,
      "title": "Red Bull(250ml)",
      "healthyRating": "2.3/10",
      "sustainabilityRating": "1.5/5",
      imagePath:require("../assets/images/Beauty/redbull.png"),
      "EcoRating": "1.2/5",
      "nutritionInfo": [
        {
          "title": "Sugar",
          "value": 100,
          "color": COLOR_CODES.HIGH
        },
        {
          "title": "Caramel",
          "value": 80,
          "color": COLOR_CODES.MEDIUM
        },
        {
          "title": "Taurine",
          "value": 60,
          "color": COLOR_CODES.MEDIUM
        },
        {
          "title": "Emulsfiers",
          "value": 60,
          "color": COLOR_CODES.MEDIUM
        }
      ],
      "sustainability": [
        {
          "title": "Sugar",
          "value": 60,
          "color": COLOR_CODES.HIGH
        },
        {
          "title": "Caramel",
          "value": 60,
          "color": COLOR_CODES.MEDIUM
        },
        {
          "title": "Taurine",
          "value": 80,
          "color": COLOR_CODES.MEDIUM
        },
        {
          "title": "Emulsfiers",
          "value": 80,
          "color": COLOR_CODES.MEDIUM
        }
      ],
      "details": [
        {
          "title": "Environmental",
          imagePath:require("../assets/images/pollution2.json"),

          "description": [
            {
              "title": "Sugar",
              "Description": "It's production uses a lot of water and energy, and generate waste like bagasse, causing significant environmental impact"
            },
            {
              "title": "Taurine",
              "Description": "It's found in animal-based foods, has a significant environmental impact due to land use, water consumption, and energy requirements. Extraction and purification processes involve chemicals that can cause environmental harm if not handled properly."
            },
            {
              "title": "Artificial Chemicals(FLAVOURS)",
              "Description": "It's manufacturing has high environmental impacts due to the significant energy and resource requirements, and the generation of harmful waste materials like solvents and chemicals that require proper treatment and disposal."
            }
          ]
        },
        {
          "title": "Health",
          imagePath:require("../assets/images/healthy.json"),
          "description": [
            {
              "title": "Sugar",
              "Description": "Weight Gain , Hypertension, Diabetes, Tooth Decay, Heart Disease"
            },
            {
              "title": "Taurine",
              "Description": "Cancer risk,High blood pressure, Cardiac arrhythmia, Kidney damage"
            },
            {
              "title": "Emulsfiers",
              "Description": "Toxic effects on human liver cells,Infertility and reproductive issues,Nausea, Vomiting , Diarrhea"
            }
          ]
        },
        {
          "title": "Sustainable Options",
          imagePath:require("../assets/images/smile-meter.json"),
          "description": [
            {
              "title": "Fresh Fruit Juices, Coconut Water, Buttermilk, Aam Panna, Lemon water",
              "Description": "Only Biodegradable Waste Generated, also Locally Available(Econimically Good for our country)"
            }
          ]
        }
      ]
    },
    {
      "id": 4,
      "title": "Maggi",
      "healthyRating": "4/10",
      "sustainabilityRating": "1.5/5",
      imagePath:require("../assets/images/Beauty/maggie.png"),
      "EcoRating": "1.8",
      "nutritionInfo": [
        {
          "title": "Sodium",
          "value": 42,
          "color": COLOR_CODES.LOW
        },
        {
          "title": "Maida",
          "value": 60,
          "color": COLOR_CODES.LOW
        },
        {
          "title": "Emulsfier",
          "value": 70,
          "color": COLOR_CODES.MEDIUM
        },
        {
          "title": "Saturated Fat",
          "value": 40,
          "color": COLOR_CODES.LOW
        }
      ],
      "sustainability": [
        {
          "title": "Sodium",
          "value": 40,
          "color": COLOR_CODES.LOW
        },
        {
          "title": "Emulsfier",
          "value": 80,
          "color": COLOR_CODES.MEDIUM
        },
        {
          "title": "Saturated Fat",
          "value": 40,
          "color": COLOR_CODES.LOW
        },
        {
          "title": "Palm Oil",
          "value": 80,
          "color": COLOR_CODES.MEDIUM
        }
      ],
      "details": [
        {
          "title": "Environmental",
          imagePath:require("../assets/images/pollution2.json"),
          "description": [
            {
              "title": "Emulsfier",
              "Description": "It's production uses a lot of water and energy, and generate waste like bagasse, causing significant environmental impact"
            },
            {
              "title": "Palm Oil",
              "Description": "It is imported from other countries via sea transport(Shipping) causes burning of fossil fuels contributing to greenhouse gas emissions and air pollution"
            },
            {
              "title": "Saturated Fat",
              "Description": "Impacts Environment in terms of the energy and resources required to produce them, as well as the chemical waste generated during the manufacturing process"
            }
          ]
        },
        {
          "title": "Health",
          imagePath:require("../assets/images/healthy.json"),
          "description": [
            {
              "title": "Sodium",
              "Description": "Heart Disease, Stroke,  Kidney Disease, Dehydration, Bone Loss, Increased risk of stomach cancer"
            },
            {
              "title": "Emulsfier",
              "Description": "Toxic effects on human liver cells,Infertility and reproductive issues,Nausea, Vomiting , Diarrhea"
            },
            {
              "title": "Palm Oil",
              "Description": "Heart Disease, Increases (bad) cholesterol level in blood"
            }
          ]
        },
        {
          "title": "Sustainable Options",
          imagePath:require("../assets/images/smile-meter.json"),

          "description": [
            {
              "title": "Naturally Yours Noodles, Multi Millet Noodles, Nalabagam Noodles",
              "Description": "These Products made from Fortified wheat Flour (Healthiest version of wheat flour), Minimum Spicies, Have used  Salt & Water, No artificial Flavours, Colours,Thickners"
            }
          ]
        }
      ]
    },
    {
      "id": 5,
      "title": "Yippie Ata noodles",
      "healthyRating": "4.5/10",
      "sustainabilityRating": "1.5/5",
      imagePath:require("../assets/images/redbull.png"),
      "EcoRating": "2",
      "nutritionInfo": [
        {
          "title": "Sodium",
          "value": 60,
          "color": COLOR_CODES.LOW
        },
        {
          "title": "Maida",
          "value": 51,
          "color": COLOR_CODES.LOW
        },
        {
          "title": "Emulsfier",
          "value": 70,
          "color": COLOR_CODES.MEDIUM
        },
        {
          "title": "Saturated Fat",
          "value": 40,
          "color": COLOR_CODES.LOW
        }
      ],
      "sustainability": [
        {
          "title": "Sodium",
          "value": 40,
          "color": COLOR_CODES.LOW
        },
        {
          "title": "Emulsfier",
          "value": 80,
          "color": COLOR_CODES.MEDIUM
        },
        {
          "title": "Saturated Fat",
          "value": 40,
          "color": COLOR_CODES.LOW
        },
        {
          "title": "Palm Oil",
          "value": 80,
          "color": COLOR_CODES.MEDIUM
        }
      ],
      "details": [
        {
          "title": "Environmental",
          imagePath:require("../assets/images/pollution2.json"),
          "description": [
            {
              "title": "Emulsfier",
              "Description": "It's production uses a lot of water and energy, and generate waste like bagasse, causing significant environmental impact"
            },
            {
              "title": "Palm Oil",
              "Description": "It is imported from other countries via sea transport(Shipping) causes burning of fossil fuels contributing to greenhouse gas emissions and air pollution"
            },
            {
              "title": "Saturated Fat",
              "Description": "Impacts Environment in terms of the energy and resources required to produce them, as well as the chemical waste generated during the manufacturing process"
            }
          ]
        },
        {
          "title": "Health",
          imagePath:require("../assets/images/healthy.json"),
          "description": [
            {
              "title": "Sodium",
              "Description": "Weight Gain , Hypertension, Diabetes, Tooth Decay, Heart Disease"
            },
            {
              "title": "Emulsfier",
              "Description": "Heart Disease,  Diabetes, Arthritis, Cancer, Diabetes ,Decreases Fertility in Women"
            },
            {
              "title": "Palm Oil",
              "Description": "Heart Disease, Increases (bad) cholesterol level in blood"
            }
          ]
        },
        {
          "title": "Sustainable Options",
          imagePath:require("../assets/images/smile-meter.json"),
          "description": [
            {
              "title": "Naturally Yours Noodles, Multi Millet Noodles, Nalabagam Noodles",
              "Description": "These Products made from Fortified wheat Flour (Healthiest version of wheat flour), Minimum Spicies, Have used  Salt & Water, No artificial Flavours, Colours,Thickners"
            }
          ]
        }
      ]
    }
  ]