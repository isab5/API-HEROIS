const pool = require("../config/database");

const getHerois = async (name) => {
    if (!name) {
        const result = await pool.query(
            `SELECT herois.*, editoras.name AS editora_name 
            FROM herois
            LEFT JOIN editoras ON herois.editora_id = editoras.id`
        );
        return result.rows;
    } else {
        const result = await pool.query(
            `SELECT herois.*, editoras.name AS editora_name 
                FROM herois 
                LEFT JOIN editoras ON herois.gender, editora_id = editoras.id
                WHERE herois.name ILIKE $1`, [`%${name}%`]
        );
        return result.rows;
    }
};

const getHeroiById = async (id) => {
    const result = await pool.query(
        `SELECT herois.*, editoras.name AS editora_name 
        FROM herois 
        LEFT JOIN editoras ON herois.editora_id = editoras.id 
        WHERE herois.id = $1`, [id]
    );
    return result.rows[0];
};

const createHeroi = async (name, gender, editora_id, year_creation, photo) => {
    const result = await pool.query(
        "INSERT INTO herois (name, gender, editora_id, year_creation, photo) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [name, gender, editora_id, year_creation, photo]
    );
    return result.rows[0];
};


const updateHeroi = async (id, name, gender, editora_id, year_creation) => {
    const result = await pool.query(
        "UPDATE herois SET name = $1, gender, editora_id = $2 WHERE id = $3 RETURNING *",
        [name, gender, editora_id,name, gender, editora_id, year_creation, id]
    );
    return result.rows[0];
};


const deleteHeroi = async (id) => {
    const result = await pool.query("DELETE FROM herois WHERE id = $1 RETURNING *", [id]);
    if (result.rowCount === 0) {
        return { error: "Heroi não encontrado." };
    }
    return { message: "Heroi deletado com sucesso." };
};


module.exports = { getHerois, getHeroiById, createHeroi, updateHeroi, deleteHeroi };