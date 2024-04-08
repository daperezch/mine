const db = require('../db')
const { Router } = require('express')

const router = Router()

// CRUD municipio ////////////////////////////////////

// CREATE 
router.post("/municipio", async (req, res) => {
    try {
      const { nombre, area, altitud } = req.body;
      const municipioTemp = await db.query(
        "INSERT INTO municipio (nombre, area, altitud) VALUES($1, $2, $3) RETURNING *",
        [nombre, area, altitud]
      );
  
      res.json(municipioTemp.rows[0]);
    } catch (err) {
      res.json(err.message);
      console.error(err.message);
    }
  });
  
  // READ 
  router.get("/municipio", async (req, res) => {
    try {
      const allTodos = await db.query("SELECT * FROM municipio");
      res.json(allTodos.rows);
    } catch (err) {
      res.json(err.message);
      console.error(err.message);
    }
  });
  
  // READ INDIVIDUAL
  router.get("/municipio/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const todo = await db.query("SELECT * FROM municipio WHERE id_municipio = $1",
        [id]
      );
  
      res.json(todo.rows[0]);
    } catch (err) {
      res.json(err.message);
      console.error(err.message);
    }
  });
  
  // UPDATE 
  router.put("/municipio/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { nombre, area, altitud } = req.body;
      const updateTodo = await db.query(
        "UPDATE municipio SET nombre = $2, area = $3, altitud = $4 WHERE id_municipio = $1",
        [id, nombre, area, altitud]
      );
  
      res.json("datos de municipio actualizados");
    } catch (err) {
      res.json(err.message);
      console.error(err.message);
    }
  });
  
  // DELETE
  router.delete("/municipio/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteTodo = await db.query("DELETE FROM municipio WHERE id_municipio = $1",
        [id]
      );
      res.json("datos de municipio eliminados");
    } catch (err) {
      res.json(err.message);
      console.log(err.message);
    }
  });

  module.exports = router