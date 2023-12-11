const jsonData = '[{"Vorname":"Max","Nachname":"Mustermann","Email":"max.mustermann@student.com","Schule":"HTL-Dornbirn","Schultyp":"HTL","Klasse":"1aWI","SchulJahr":"2023/2024","Adressen":{"Schuladresse":{"PLZ":"6850","Strasse":"Höchsterstrasse","HausNr":"73"},"Privatadresse":{"PLZ":"2431","Strasse":"test","HausNr":"73"}}}]';

const jsonSchema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "array",
    "items": {
        "type": "object",
        "properties": {
            "Vorname": { "type": "string" },
            "Nachname": { "type": "string" },
            "Email": { "type": "string", "format": "email" },
            "Schule": { "type": "string" },
            "Schultyp": { "type": "string" },
            "Klasse": { "type": "string" },
            "SchulJahr": { "type": "string" },
            "Adressen": {
                "type": "object",
                "properties": {
                    "Schuladresse": {
                        "type": "object",
                        "properties": {
                            "PLZ": { "type": "string" },
                            "Strasse": { "type": "string" },
                            "HausNr": { "type": "string" }
                        },
                        "required": ["PLZ", "Strasse", "HausNr"]
                    },
                    "Privatadresse": {
                        "type": "object",
                        "properties": {
                            "PLZ": { "type": "string" },
                            "Strasse": { "type": "string" },
                            "HausNr": { "type": "string" }
                        },
                        "required": ["PLZ", "Strasse", "HausNr"]
                    }
                },
                "required": ["Schuladresse", "Privatadresse"]
            }
        },
        "required": ["Vorname", "Nachname", "Email", "Schule", "Schultyp", "Klasse", "SchulJahr", "Adressen"]
    }
};

const validate = ajv.compile(jsonSchema);
const isValid = validate(JSON.parse(jsonData));

if (isValid) {
    console.log("Validation successful");
} else {
    console.log("Validation errors:");
    console.log(validate.errors);
}
