const fs = require("fs");
const { storageModel } = require("../models");
const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`;

const getItems = async (req, res) => {
    try {
      const data = await storageModel.findAll({});
      res.send({ data });
    } catch (e) {
      handleHttpError(res, "ERROR_LIST_ITEMS");
    }
  };
  
  /**
   * Obtener un detalle
   * @param {*} req
   * @param {*} res
   */
  const getItem = async (req, res) => {
    try {
      const { id } = matchedData(req);
      const data = await storageModel.findByPk(id);
      res.send({ data });
    } catch (e) {
      console.log(e)
      handleHttpError(res, "ERROR_DETAIL_ITEMS");
    }
  };
  
  /**
   * Insertar un registro
   * @param {*} req
   * @param {*} res
   */
  const createItem = async (req, res) => {
    try {
      const { file } = req;
      const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`,
      };
      const data = await storageModel.create(fileData);
      res.status(201);
      res.send({ data });
    } catch (e) {
      handleHttpError(res, "ERROR_DETAIL_ITEMS");
    }
  };
  
  /**
   * Eliminar un registro
   * @param {*} req
   * @param {*} res
   */
  const deleteItem = async (req, res) => {
    try {
      const { id } = matchedData(req);
      const dataFile = await storageModel.findByPk(id);
      const deleteResponse = await storageModel.delete({ _id: id });
      const { filename } = dataFile;
      const filePath = `${MEDIA_PATH}/${filename}`; //TODO c:/miproyecto/file-1232.png
  
      fs.unlinkSync(filePath);
      const data = {
        filePath,
        deleted: deleteResponse.matchedCount,
      };
  
      res.send({ data });
    } catch (e) {
      handleHttpError(res, "ERROR_DETAIL_ITEMS");
    }
  };
  
  module.exports = { getItems, getItem, createItem, deleteItem };