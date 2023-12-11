const Joi = require('joi');

const jsonData = [{"Vorname":"Max","Nachname":"Mustermann","Email":"max.mustermann@student.com","Schule":"HTL-Dornbirn","Schultyp":"HTL","Klasse":"1aWI","SchulJahr":"2023/2024","Adressen":{"Schuladresse":{"PLZ":"6850","Strasse":"Höchsterstrasse","HausNr":"73"},"Privatadresse":{"PLZ":"2431","Strasse":"test","HausNr":"73"}}}];

const schema = Joi.array().items(
    Joi.object({
        Vorname: Joi.string().required(),
        Nachname: Joi.string().required(),
        Email: Joi.string().email().required(),
        Schule: Joi.string().required(),
        Schultyp: Joi.string().required(),
        Klasse: Joi.string().required(),
        SchulJahr: Joi.string().required(),
        Adressen: Joi.object({
            Schuladresse: Joi.object({
                PLZ: Joi.string().required(),
                Strasse: Joi.string().required(),
                HausNr: Joi.string().required()
            }).required(),
            Privatadresse: Joi.object({
                PLZ: Joi.string().required(),
                Strasse: Joi.string().required(),
                HausNr: Joi.string().required()
            }).required()
        }).required()
    })
);

const { error, value } = schema.validate(jsonData);

if (!error) {
    console.log("Validation successful");
} else {
    console.log("Validation errors:");
    console.log(error.details);
}
