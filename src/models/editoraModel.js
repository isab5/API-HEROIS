const pool = require("../config/database");

const getEditoras = async () => {
    const result = await pool.query("SELECT * FROM editoras");
    return result.rows;
};

const getEditoraById = async (id) => {
    const result = await pool.query("SELECT * FROM editoras WHERE id = $1", [id]);
    return result.rows[0];
};

const createEditora = async (name, local, foundation_year, founder) => {
    const result = await pool.query(
        "INSERT INTO editoras (name, local, foundation_year, founder) VALUES ($1, $2, $3, $4) RETURNING *",
        [name, local, foundation_year, founder]
    );
    return result.rows[0];
};

const updateEditora = async (id, name, local, foundation_year, founder) => {
    const result = await pool.query(
        "UPDATE editoras SET name = $1, local = $2, foundation_year =$3, founder = $4 WHERE id = $5 RETURNING *",
        [name, local, foundation_year, founder, id]
    );
    return result.rows[0];
};

const deleteEditora = async (id) => {
    const result = await pool.query("DELETE FROM editoras WHERE id = $1 RETURNING *", [id]);

    if (result.rowCount === 0) {
        return { error: "Editora não encontrada." };
    }

    return { message: "Editora deletada com sucesso." };
};

module.exports = { getEditoras, getEditoraById, createEditora, updateEditora, deleteEditora };

