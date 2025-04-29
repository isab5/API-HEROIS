const editoraModel = require("../models/editoraModel");

const getAllEditoras = async (req, res) => {
    try {
        const editoras = await editoraModel.getEditoras();
        res.json(editoras);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar editoras." });
    }
};

const getEditora = async (req, res) => {
    try {
        const editora = await editoraModel.getEditoraById(req.params.id);
        if (!editora) {
            return res.status(404).json({ message: "Editora não encontrada." });
        }
        res.json(editora);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar Editora." });
    }
};

const createEditora = async (req, res) => {
    try {
        const { name, local, foundation_year, founder } = req.body;
        const newEditora = await editoraModel.createEditora(name, local, foundation_year, founder);
        res.status(201).json(newEditora);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar Editora." });
    }
};

const updateEditora = async (req, res) => {
    try {
        const { name, local, foundation_year, founder } = req.body;
        const updateEditora = await editoraModel.updateEditora(req.params.id, name, local, foundation_year, founder);
        if (!updateEditora) {
            return res.status(404).json({ message: "Editora não encontrada." });
        }
        res.json(updateEditora);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar Editora" });
    }
};

const deleteEditora = async (req, res) => {
    try {
        const message = await editoraModel.deleteEditora(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar editora." });
    }
};

module.exports = { getAllEditoras, getEditora, createEditora, updateEditora, deleteEditora };

