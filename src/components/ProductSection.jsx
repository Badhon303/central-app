"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, FlaskRound as Flask, Package, Stethoscope, FlaskConical, TestTube } from "lucide-react";

// API product lists organized by letter
const apiProducts = {
  A: ["Abiraterone Acetate", "Acarbose", "Aceclofenac", "Acyclovir", "Ambroxol HCL", "Amikacin Sulfate", "Amiodarone HCL", "Amoxicillin Trihydrate", "Ampicillin Trihydrate", "Analgin", "Apixaban", "Apremilast", "Aprepitant", "Aripiprazole", "Aspirin", "Atrovastatin Calcium", "Atracurium Besylate", "Azithromycin"],
  B: ["Benazepril HCL", "Benzocaine", "Betamethasone Dipropionate", "Betamethasone Sodium Phosphate", "Budesonide", "Bupropion HCL"],
  C: ["Canagliflozin Hemihydrate", "Candesartan Cilexetil", "Capecitabine", "Captopril", "Carbamazepine", "Carbidopa", "Carbocisteine", "Carvedilol", "Cefaclor", "Cefalexin", "Cefazolin Sodium", "Cefepime HCL and Arginine", "Cefetamet Pivoxil HCL", "Cefotaxime Sodium", "Ceftriaxone Sodium", "Cefuroxime Sodium", "Celecoxib", "Choline Alfoscerate", "Chondroitin Sulfate", "Ciclopirox", "Ciclopirox Olamine", "Cilostazol", "Cimetidine", "Ciprofloxacin HCL", "Cisatracurium Besylate", "Citicoline Sodium", "Clarithromycin", "Clavulanate Potassium", "Clindamycin HCL", "Clindamycin Phosphate"],
  D: ["Dabigatran Mesylate", "Dapagliflozin", "Desogestrel", "Dexamethasone", "Dexamethasone Sodium", "Dexibuprofen", "Dexketoprofen Trometamol", "Diclofenac Sodium", "Dimenhydrinate", "Diosmin", "Diphenhydramine HCL", "Diquafosol", "Drospirenone", "Duloxetine HCL", "Dydrogesterone"],
  E: ["Empagliflozin", "Elagolix Sodium", "Enalapril Maleate", "Enoxaparin Sodium", "Entecavir", "Erlotinib HCL", "Escitalopram Oxalate", "Estradiol Valerate", "Etodolac", "Ethynyl Estradiol", "Exemestane", "Ezetimibe"],
  F: ["Favipiravir", "Fenofibrate", "Finasteride", "Flavoxate HCL", "Fosfomycin Calcium/Sodium", "Fusidic Acid"],
  G: ["Gabapentin", "Galantamine HBR", "Gefitinib", "Gemfibrozil", "Gentamycin Sulfate", "Gliclazide", "Granisetron HCL", "Griseofulvin"],
  H: ["Heparin Sodium", "Hydrochlorothiazide", "Hydrocortisone Acetate", "Hydroxychloroquine Sulfate"],
  I: ["Ibuprofen", "Imatinib Mesylate", "Imipenem", "Indacaterol Maleate", "Indapamide", "Iohexol", "Iopamidol", "Ioversol", "Irbesartan", "Isotretinoin"],
  K: ["Ketoprofen", "Ketotifen Fumarate"],
  L: ["Lamivudine", "L-Carnitine HCL", "Levetiracetam", "Levodopa", "Levofloxacin Hemihydrate", "Levonorgestrel", "Lidocaine HCL", "Linagliptin", "Lincomycin HCL", "Lisinopril Dihydrate", "Losartan Potassium", "Loxoprofen Sodium"],
  M: ["Medroxyprogesterone Acetate", "Mefenamic Acid", "Meloxicam", "Meprobamate", "Meropenem", "Methotrexate", "Methyl Salicylate", "Methyldopa", "Methylprednisolone", "Metronidazole", "Mifepristone", "Mirabegron", "Mirtazapine", "Montelukast Sodium", "Mupirocin", "Mycophenolate Mofetil"],
  N: ["Naproxen", "Naproxen Sodium", "Neomycin Sulfate", "Nifuroxazide", "Nimodipine", "Nitrofurantoin", "Norethisterone Acetate", "Norfloxacin", "Norgestrel"],
  O: ["Octreotide Acetate", "Ofloxacin", "Olmesartan Medoxomil", "Orlistat", "Oxcarbazepine"],
  P: ["Paclitaxel", "Paracetamol", "Paroxetine HCL", "Perindopril Erbumine", "Pimecrolimus", "Piracetam", "Piroxicam", "Prednisone", "Progesterone", "Propylthiouracil"],
  Q: ["Quetiapine Fumarate"],
  R: ["Ramipril", "Relugolix", "Remdesivir", "Rifampicin", "Rifapentine", "Rivaroxaban", "Rosuvastatin Calcium", "Roxadustat"],
  S: ["Sacubitril Valsartan", "Secnidazole", "Simvastatin", "Sirolimus", "Sitagliptin Phosphate", "Solifenacin Succinate", "Spiramycin", "Spironolactone", "Sulfasalazine", "Sulpiride"],
  T: ["Tacrolimus", "Tapinarof", "Tenofovir Disoproxil Fumarate", "Terbinafine HCL", "Theophylline Anhydrous", "Tibolone", "Ticagrelor", "Tinidazole", "Tobramycin", "Tolperisone HCL", "Tolterodine Tartrate", "Tranexamic Acid", "Tretinoin", "Trimebutine Maleate", "Trimethoprim"],
  U: ["Ulipristal Acetate", "Ursodeoxycholic Acid"],
  V: ["Valaciclovir HCL", "Valsartan", "Vildagliptin"],
  W: ["Warfarin Sodium"],
  Z: ["Zidovudine"]
};

export default function ProductSection() {
  const [selectedLetter, setSelectedLetter] = useState("A");

  const categoryImages = {
    api: "https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    excipients: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    qcConsumables: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    primaryPackaging: "https://images.unsplash.com/photo-1565726166189-e9814a05ffde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    medicalDevices: "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  };

  const categoryIcons = {
    api: <FlaskConical className="w-12 h-12 text-white" />,
    excipients: <Flask className="w-12 h-12 text-white" />,
    qcConsumables: <TestTube className="w-12 h-12 text-white" />,
    primaryPackaging: <Package className="w-12 h-12 text-white" />,
    medicalDevices: <Stethoscope className="w-12 h-12 text-white" />,
  };

  const categoryTitles = {
    api: "API",
    excipients: "Excipients",
    qcConsumables: "QC Consumables",
    primaryPackaging: "Primary Packaging",
    medicalDevices: "Medical Devices",
  };

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
  };

  return (
    <div className="relative py-16 md:py-24">
      {/* Background gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-blue-400 to-indigo-500 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>

      <motion.div className="relative container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">Our <span className="text-primary dark:text-white">Product Portfolio</span></h2>
          <div className="mx-auto mt-4 h-1 w-24 bg-primary rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            We take great pride in representing the world's foremost manufacturers in the
            pharmaceutical industry. Our partnership with these industry leaders
            demonstrates our unwavering commitment to quality, safety, and innovation.
            By aligning with these top-tier manufacturers, we ensure that our clients have
            access to the most cutting-edge and reliable pharmaceutical products available,
            meeting the highest industry standards and fulfilling our mission to enhance
            healthcare worldwide.
          </p>
        </div>

        {/* Category Grid */}
        <div className="text-center mb-12">
          <p className="text-2xl font-bold text-gray-800 dark:text-white">
            Our Product Categories
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {Object.entries(categoryTitles).map(([key, title]) => (
            <motion.div
              key={key}
              whileHover={{ scale: 1.03 }}
              className="cursor-default"
            >
              <Card className="h-64 overflow-hidden relative">
                {/* Image background with overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/80 z-10" />
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url('${categoryImages[key]}')` 
                  }}
                />
                <CardContent className="flex flex-col items-center justify-center h-full relative z-20 p-6">
                  <div className="mb-4">
                    {categoryIcons[key]}
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-2 text-white">{title}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Closer Look Section - API Products */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">A Closer Look</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Our comprehensive range of pharmaceutical APIs
            </p>
          </div>

          {/* Letter Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 items-center">
            {Object.keys(apiProducts).map((letter) => (
              <motion.div
                key={letter}
                className={`cursor-pointer font-bold px-3 py-2 rounded-full ${
                  selectedLetter === letter 
                    ? "text-secondary text-4xl" 
                    : " dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-lg transition-all duration-200" 
                }`}
                onClick={() => handleLetterClick(letter)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {letter}
              </motion.div>
            ))}
          </div>

          {/* Product List */}
          {Object.entries(apiProducts).map(([letter, products]) => (
            selectedLetter === letter && (
              <motion.div 
                key={letter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <div className="flex items-center mb-8 px-2">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white text-3xl font-bold">
                    {letter}
                  </div>
                  <div className="ml-4 flex-1 border-b-2 border-gray-200 dark:border-gray-700 pb-2">
                    <h3 className="text-2xl font-bold">Human API's</h3>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-4 px-6">
                  {products.map((product, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.02 }}
                      className="flex items-start"
                    >
                      <div className="w-3 h-3 rounded-full bg-secondary mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300 text-lg">{product}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          ))}
        </div>
      </motion.div>
    </div>
  );
}