const heroisModel = require("../models/heroisModel");

const getAllHerois = async (req, res) => {
    try {
        const { name } = req.query;
        const herois = await heroisModel.getHerois(name);
        res.json(herois);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar herois." });
    }
};

const getHeroi = async (req, res) => {
    try {
        const heroi = await heroisModel.getHeroiById(req.params.id);
        if (!heroi) {
            return res.status(404).json({ message: "Heroi não encontrado." });
        }
        res.json(heroi);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar heroi." });
    }
};


const createHeroi = async (req, res) => {
    try {
        const { name, gender, editora_id, year_creation } = req.body;
        const photo = req.file ? req.file.filename : null;
        const newHeroi = await heroisModel.createHeroi(name, gender, editora_id, year_creation, photo);
        res.status(201).json(newHeroi);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar heroi." });
    }
};


const updateHeroi = async (req, res) => {
    try {
        const { name, gender, editora_id, year_creation } = req.body;
        const updatedHeroi = await heroisModel.updateHeroi(req.params.id, name, gender, editora_id, year_creation);
        if (!updatedHeroi) {
            return res.status(404).json({ message: "Heroi não encontrado." });
        }
        res.json(updatedHeroi);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar Heroi" });
    }
};


const deleteHeroi = async (req, res) => {
    try {
        const message = await heroisModel.deleteHeroi(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar Heroi." });
    }
};


module.exports = { getAllHerois, getHeroi, createHeroi, updateHeroi, deleteHeroi };