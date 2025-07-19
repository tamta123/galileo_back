import { DataTypes } from "sequelize";
import sequelize from "../config/sql.js";
import Trainer from "./Trainer.js";

const TrainerTranslation = sequelize.define("TrainerTranslation",{
    language:{
        type:DataTypes.STRING,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
      description:{
        type:DataTypes.STRING,
        allowNull:false
    },
})

const BASE_URL = "https://galileoback-production.up.railway.app";

export async function seedTrainerTranslations() {
  const trainers = {
    vakho: await Trainer.findOne({ where: { photo: `${BASE_URL}/images/vaxo_trainer.JPG` } }),
    giorgi: await Trainer.findOne({ where: { photo: `${BASE_URL}/images/giorgi_trainer.JPG` } }),
    vlad: await Trainer.findOne({ where: { photo: `${BASE_URL}/images/vlad_trainer.jpeg` } }),
    kristine: await Trainer.findOne({ where: { photo: `${BASE_URL}/images/kristine_trainer.JPG` } }),
    nika: await Trainer.findOne({ where: { photo: `${BASE_URL}/images/nika_trainer.JPG` } }),
    salome: await Trainer.findOne({ where: { photo: `${BASE_URL}/images/salome.JPG` } }),
    teo: await Trainer.findOne({ where: { photo: `${BASE_URL}/images/teo.JPG` } }),
    zura: await Trainer.findOne({ where: { photo: `${BASE_URL}/images/zura.JPG` } }),
  };

  for (const [name, trainer] of Object.entries(trainers)) {
    if (!trainer) {
      throw new Error(`❌ Trainer not found for ${name}`);
    }
  }

  const translations = [
    {
      trainerId: trainers.vakho.id,
      language: "en",
      name: "Vakhtang Kapanadze",
      description: "Boxing coach with 16 years of experience",
    },
    {
      trainerId: trainers.vakho.id,
      language: "ge",
      name: "ვახტანგ კაპანაძე",
      description: "ბოქსის მწვრთნელი 16 წლიანი გამოცდილებით",
    },
    {
      trainerId: trainers.giorgi.id,
      language: "en",
      name: "Giorgi Lastname",
      description: "MMA coach with 10 years experience",
    },
    {
      trainerId: trainers.giorgi.id,
      language: "ge",
      name: "გიორგი გვარი",
      description: "MMA მწვრთნელი 10 წლიანი გამოცდილებით",
    },
    {
      trainerId: trainers.vlad.id,
      language: "en",
      name: "Vlad Name",
      description: "Kickboxing coach",
    },
    {
      trainerId: trainers.vlad.id,
      language: "ge",
      name: "ვლად გვარი",
      description: "კიკბოქსინგის მწვრთნელი",
    },
    {
      trainerId: trainers.kristine.id,
      language: "en",
      name: "Kristine Name",
      description: "Yoga instructor",
    },
    {
      trainerId: trainers.kristine.id,
      language: "ge",
      name: "კრისტინე გვარი",
      description: "იოგას ინსტრუქტორი",
    },
    {
      trainerId: trainers.nika.id,
      language: "en",
      name: "Nika Name",
      description: "Functional training expert",
    },
    {
      trainerId: trainers.nika.id,
      language: "ge",
      name: "ნიკა გვარი",
      description: "ფუნქციური ვარჯიშის ექსპერტი",
    },
    {
      trainerId: trainers.salome.id,
      language: "en",
      name: "Salome Name",
      description: "Pilates coach",
    },
    {
      trainerId: trainers.salome.id,
      language: "ge",
      name: "სალომე გვარი",
      description: "პილატესის მწვრთნელი",
    },
    {
      trainerId: trainers.teo.id,
      language: "en",
      name: "Teo Name",
      description: "Dance fitness coach",
    },
    {
      trainerId: trainers.teo.id,
      language: "ge",
      name: "თეო გვარი",
      description: "ცეკვის ფიტნესის მწვრთნელი",
    },
    {
      trainerId: trainers.zura.id,
      language: "en",
      name: "Zura Name",
      description: "Strength training coach",
    },
    {
      trainerId: trainers.zura.id,
      language: "ge",
      name: "ზურა გვარი",
      description: "ძალის ვარჯიშის მწვრთნელი",
    },
  ];

  try {
    await TrainerTranslation.bulkCreate(translations);
    console.log("✅ Translations seeded");
  } catch (error) {
    console.error("❌ Error seeding translation:", error);
  }
}





export default TrainerTranslation;