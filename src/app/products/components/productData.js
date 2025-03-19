import { FlaskConical, Flask, Package, TestTube, Stethoscope } from "lucide-react";

// data.js
export const apiProducts = {
    A: [
        "Abiraterone Acetate",
        "Acarbose",
        "Aceclofenac",
        "Acyclovir",
        "Ambroxol HCL",
        "Amikacin Sulfate",
        "Amiodarone HCL",
        "Amoxicillin Trihydrate",
        "Ampicillin Trihydrate",
        "Analgin",
        "Apixaban",
        "Apremilast",
        "Aprepitant",
        "Aripiprazole",
        "Aspirin",
        "Atrovastatin Calcium",
        "Atracurium Besylate",
        "Azithromycin",
      ],
      B: [
        "Benazepril HCL",
        "Benzocaine",
        "Betamethasone Dipropionate",
        "Betamethasone Sodium Phosphate",
        "Budesonide",
        "Bupropion HCL",
      ],
      C: [
        "Canagliflozin Hemihydrate",
        "Candesartan Cilexetil",
        "Capecitabine",
        "Captopril",
        "Carbamazepine",
        "Carbidopa",
        "Carbocisteine",
        "Carvedilol",
        "Cefaclor",
        "Cefalexin",
        "Cefazolin Sodium",
        "Cefepime HCL and Arginine",
        "Cefetamet Pivoxil HCL",
        "Cefotaxime Sodium",
        "Ceftriaxone Sodium",
        "Cefuroxime Sodium",
        "Celecoxib",
        "Choline Alfoscerate",
        "Chondroitin Sulfate",
        "Ciclopirox",
        "Ciclopirox Olamine",
        "Cilostazol",
        "Cimetidine",
        "Ciprofloxacin HCL",
        "Cisatracurium Besylate",
        "Citicoline Sodium",
        "Clarithromycin",
        "Clavulanate Potassium",
        "Clindamycin HCL",
        "Clindamycin Phosphate",
      ],
      D: [
        "Dabigatran Mesylate",
        "Dapagliflozin",
        "Desogestrel",
        "Dexamethasone",
        "Dexamethasone Sodium",
        "Dexibuprofen",
        "Dexketoprofen Trometamol",
        "Diclofenac Sodium",
        "Dimenhydrinate",
        "Diosmin",
        "Diphenhydramine HCL",
        "Diquafosol",
        "Drospirenone",
        "Duloxetine HCL",
        "Dydrogesterone",
      ],
      E: [
        "Empagliflozin",
        "Elagolix Sodium",
        "Enalapril Maleate",
        "Enoxaparin Sodium",
        "Entecavir",
        "Erlotinib HCL",
        "Escitalopram Oxalate",
        "Estradiol Valerate",
        "Etodolac",
        "Ethynyl Estradiol",
        "Exemestane",
        "Ezetimibe",
      ],
      F: [
        "Favipiravir",
        "Fenofibrate",
        "Finasteride",
        "Flavoxate HCL",
        "Fosfomycin Calcium/Sodium",
        "Fusidic Acid",
      ],
      G: [
        "Gabapentin",
        "Galantamine HBR",
        "Gefitinib",
        "Gemfibrozil",
        "Gentamycin Sulfate",
        "Gliclazide",
        "Granisetron HCL",
        "Griseofulvin",
      ],
      H: [
        "Heparin Sodium",
        "Hydrochlorothiazide",
        "Hydrocortisone Acetate",
        "Hydroxychloroquine Sulfate",
      ],
      I: [
        "Ibuprofen",
        "Imatinib Mesylate",
        "Imipenem",
        "Indacaterol Maleate",
        "Indapamide",
        "Iohexol",
        "Iopamidol",
        "Ioversol",
        "Irbesartan",
        "Isotretinoin",
      ],
      K: ["Ketoprofen", "Ketotifen Fumarate"],
      L: [
        "Lamivudine",
        "L-Carnitine HCL",
        "Levetiracetam",
        "Levodopa",
        "Levofloxacin Hemihydrate",
        "Levonorgestrel",
        "Lidocaine HCL",
        "Linagliptin",
        "Lincomycin HCL",
        "Lisinopril Dihydrate",
        "Losartan Potassium",
        "Loxoprofen Sodium",
      ],
      M: [
        "Medroxyprogesterone Acetate",
        "Mefenamic Acid",
        "Meloxicam",
        "Meprobamate",
        "Meropenem",
        "Methotrexate",
        "Methyl Salicylate",
        "Methyldopa",
        "Methylprednisolone",
        "Metronidazole",
        "Mifepristone",
        "Mirabegron",
        "Mirtazapine",
        "Montelukast Sodium",
        "Mupirocin",
        "Mycophenolate Mofetil",
      ],
      N: [
        "Naproxen",
        "Naproxen Sodium",
        "Neomycin Sulfate",
        "Nifuroxazide",
        "Nimodipine",
        "Nitrofurantoin",
        "Norethisterone Acetate",
        "Norfloxacin",
        "Norgestrel",
      ],
      O: [
        "Octreotide Acetate",
        "Ofloxacin",
        "Olmesartan Medoxomil",
        "Orlistat",
        "Oxcarbazepine",
      ],
      P: [
        "Paclitaxel",
        "Paracetamol",
        "Paroxetine HCL",
        "Perindopril Erbumine",
        "Pimecrolimus",
        "Piracetam",
        "Piroxicam",
        "Prednisone",
        "Progesterone",
        "Propylthiouracil",
      ],
      Q: ["Quetiapine Fumarate"],
      R: [
        "Ramipril",
        "Relugolix",
        "Remdesivir",
        "Rifampicin",
        "Rifapentine",
        "Rivaroxaban",
        "Rosuvastatin Calcium",
        "Roxadustat",
      ],
      S: [
        "Sacubitril Valsartan",
        "Secnidazole",
        "Simvastatin",
        "Sirolimus",
        "Sitagliptin Phosphate",
        "Solifenacin Succinate",
        "Spiramycin",
        "Spironolactone",
        "Sulfasalazine",
        "Sulpiride",
      ],
      T: [
        "Tacrolimus",
        "Tapinarof",
        "Tenofovir Disoproxil Fumarate",
        "Terbinafine HCL",
        "Theophylline Anhydrous",
        "Tibolone",
        "Ticagrelor",
        "Tinidazole",
        "Tobramycin",
        "Tolperisone HCL",
        "Tolterodine Tartrate",
        "Tranexamic Acid",
        "Tretinoin",
        "Trimebutine Maleate",
        "Trimethoprim",
      ],
      U: ["Ulipristal Acetate", "Ursodeoxycholic Acid"],
      V: ["Valaciclovir HCL", "Valsartan", "Vildagliptin"],
      W: ["Warfarin Sodium"],
      Z: ["Zidovudine"],
  };
  
  export const excipientsData = [
    {
        manufacturer: "Patel Chem Specialties Limited",
        logo: "/logos/patel-chem.jpg",
        products: [
          "Carboxymethyl Cellulose Sodium",
          "Croscarmellose Sodium",
          "Sodium Starch Glycolate",
          "Carmellose Calcium (Calcium CMC)",
          "Microcrystalline Cellulose",
          "Magnesium Stearate",
          "Pregelatinized Starch",
          "Sodium Monochloro Acetate"
    
        ],
      },
      {
        manufacturer: "Alpha Group",
        logo: "/logos/alpha-group.jpeg",
        products: [
          "Lactose",
        ],
      },
      {
        manufacturer: "EID Parry India Ltd",
        logo: "/logos/EID-Parry-India-Ltd.png",
        products: ["Sugar"],
      },
      {
        manufacturer: "RC Enterprise ",
        logo: "/logos/RC-enterprises.jpg",
        products: [
          "Psyllium Husk",
        ],
      },
  ];
  
  export const primaryPackagingData = [
    {
        manufacturer: "Svam Toyal Packaging Industries Pvt. Ltd",
        logo: "/logos/svam.jpg",
        products: [
          "Alu Alu Bottom Foil",
        ],
      },
      {
        manufacturer: "RAVIRAJ FOILS LIMITED",
        logo: "/logos/ravirajFossils.jpg",
        products: [
          "Top Blister Foil",
          "Strip Pack Foil",
          "Lidding Foil",
          "Light Gauge Foil",
        ],
      },
      {
        manufacturer: "Borosil Scentific",
        logo: "/logos/borosil.jpeg",
        products: [
          "Glass Ampoules",
          "Glass Vials",
        ],
      },
      {
        manufacturer: "Suzhou CRH New Material Technology Co. Ltd.",
        logo: "/logos/CRH.jpg",
        products: [
          "Euro Headcap",
          "PP Port",
          "Rubber Stopper"
        ],
      },
      {
        manufacturer: "Mold-Tek Packaging Ltd.",
        logo: "/logos/mold-tech.png",
        products: [
          "Effervescent Tube",
        ],
      },
      {
        manufacturer: "Liveo Research",
        logo: "/logos/liveo.jpeg",
        products: [
          "PVC/PVDC",
        ],
      },
      {
        manufacturer: "Autofits",
        logo: "/logos/autofits.jpg",
        products: [
          "Flip Off Seal",
        ],
      },
  ];
  
  export const qcConsumablesData = [
    {
        manufacturer: "Aozeal",
        logo: "/logos/aozeal.png",
        products: ["SRS"],
      },
      {
        manufacturer: "Dosan Living Filtration",
        logo: "/logos/dorsan.jpeg",
        products: [
          "Syringe Filters",
        ],
      },
      {
        manufacturer: "Assistant Germany",
        logo: "/logos/glaswarenfabrik.jpeg",
        products: [
          "Glassware",
        ],
      },
      {
        manufacturer: "Dr. Maisch",
        logo: "/logos/dr-maisch.jpeg",
        products: [
          "HPLC Columns",
        ],
      },
  ];
  
  export const medicalDevicesData = [
    {
        manufacturer: "PT Oneject Indonesia",
        logo: "/logos/oneject.jpeg",
        products: [
          "ADS Syringe",
          "Safety Box",
          "Blood Collection System",
          "Blood Purification",
          "Invitro Diagnostic Instrument",
          "Urology Care",
          "Radiology"
        ],
      },
  ];
  
  export const categoryDescriptions = {
    api: "Our comprehensive range of pharmaceutical APIs, manufactured to the highest quality standards",
    excipients:
      "Premium pharmaceutical excipients ensuring optimal drug formulation and delivery",
    primaryPackaging:
      "High-quality primary packaging solutions for pharmaceutical product protection",
    qcConsumables:
      "Essential quality control consumables for pharmaceutical testing and analysis",
    medicalDevices:
      "Innovative medical devices for accurate diagnosis and patient care",
  };
  
  export const categoryImages = {
    api: "https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    excipients:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    primaryPackaging: "https://images.unsplash.com/photo-1615461065929-4f8ffed6ca40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    qcConsumables:
      "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    medicalDevices:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  };
  
  export const categoryTitles = {
    api: "API",
    excipients: "Excipients",
    primaryPackaging: "Primary Packaging",
    qcConsumables: "QC Consumables",
    medicalDevices: "Medical Devices",
  };