import { DataTypes } from "sequelize";
import sequelize from "../config/sql.js";
import Trainer from "./Trainer.js";
const TrainerTranslation = sequelize.define("TrainerTranslation", {
    language: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
});
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
    // Now you can use non-null assertion or destructure here safely
    const { vakho, giorgi, vlad, kristine, nika, salome, teo, zura } = trainers;
    const translations = [
        {
            trainerId: vakho.id,
            language: "en",
            name: "Vakhtang Kapanadze",
            description: "Boxing coach with 16 years of experience",
        },
        {
            trainerId: vakho.id,
            language: "ge",
            name: "ვახტანგ კაპანაძე",
            description: "ბოქსის მწვრთნელი 16 წლიანი გამოცდილებით",
        },
        {
            trainerId: giorgi.id,
            language: "en",
            name: "Giorgi Lastname",
            description: "MMA coach with 10 years experience",
        },
        {
            trainerId: giorgi.id,
            language: "ge",
            name: "გიორგი გვარი",
            description: "MMA მწვრთნელი 10 წლიანი გამოცდილებით",
        },
        {
            trainerId: vlad.id,
            language: "en",
            name: "Vlad Name",
            description: "Kickboxing coach",
        },
        {
            trainerId: vlad.id,
            language: "ge",
            name: "ვლად გვარი",
            description: "კიკბოქსინგის მწვრთნელი",
        },
        {
            trainerId: kristine.id,
            language: "en",
            name: "Kristine Name",
            description: "Yoga instructor",
        },
        {
            trainerId: kristine.id,
            language: "ge",
            name: "კრისტინე გვარი",
            description: "იოგას ინსტრუქტორი",
        },
        {
            trainerId: nika.id,
            language: "en",
            name: "Nika Name",
            description: "Functional training expert",
        },
        {
            trainerId: nika.id,
            language: "ge",
            name: "ნიკა გვარი",
            description: "ფუნქციური ვარჯიშის ექსპერტი",
        },
        {
            trainerId: salome.id,
            language: "en",
            name: "Salome Name",
            description: "Pilates coach",
        },
        {
            trainerId: salome.id,
            language: "ge",
            name: "სალომე გვარი",
            description: "პილატესის მწვრთნელი",
        },
        {
            trainerId: teo.id,
            language: "en",
            name: "Teo Name",
            description: "Dance fitness coach",
        },
        {
            trainerId: teo.id,
            language: "ge",
            name: "თეო გვარი",
            description: "ცეკვის ფიტნესის მწვრთნელი",
        },
        {
            trainerId: zura.id,
            language: "en",
            name: "Zura Name",
            description: "Strength training coach",
        },
        {
            trainerId: zura.id,
            language: "ge",
            name: "ზურა გვარი",
            description: "ძალის ვარჯიშის მწვრთნელი",
        },
    ];
    try {
        await TrainerTranslation.bulkCreate(translations);
        console.log("✅ Translations seeded");
    }
    catch (error) {
        console.error("❌ Error seeding translation:", error);
    }
}
export default TrainerTranslation;
