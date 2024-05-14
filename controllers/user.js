const { matchedData } = require("express-validator");
const {usersModel} = require("../models/");
const { handleHttpError } = require("../utils/handleError");
/**
 * Obtener listas de usuarios
 * @param {*} req 
 * @param {*} res 
 */
const getUsers = async  (req, res) =>{
    try {
        const user = req.user;
        const data = await usersModel.findAll({});
        res.send({ data,  user });
      } catch (e) {
        console.log(e)
        handleHttpError(res, "ERROR_GET_ALL_USERS");
      }
};
/**
 * Obtener un usuario
 * @param {*} req 
 * @param {*} res 
 */
const getUser = async (req, res) =>{
    try{
        req = matchedData(req);
        const {id} = req;
        const data = await usersModel.findByPk(id);
        res.send({ data });
      }catch(e){
        handleHttpError(res,"ERROR_GET_USER")
      }
};
/**
 * Crear de usuario
 * @param {*} req 
 * @param {*} res 
 */
const createUser = async (req, res) =>{
    try {
        const body = matchedData(req);
        const data = await usersModel.create(body);
        res.status(201);
        res.send({ data });
      } catch (e) {
        console.log(e);
        handleHttpError(res, "ERROR_CREATE_USER");
      }
};
/**
 * Actualizar usuario
 * @param {*} req 
 * @param {*} res 
 */
const updateUser = async (req, res) =>{
    try {
        const {id, ...body} = matchedData(req);
        const data = await usersModel.findByIdAndUpdate(
          id, body
        );
        res.send({ data });
      } catch (e) {
        handleHttpError(res, "ERROR_UPDATE_USER");
      }
};
/**
 * Eliminar usuario
 * @param {*} req 
 * @param {*} res 
 */
const deleteUser = async (req, res) =>{
    try{
        req = matchedData(req);
        const {id} = req;
        const deleteResponse = await usersModel.delete({_id:id});
        const data = {
          deleted: deleteResponse.matchedCount
        }
        
        res.send({data});
      }catch(e){
        console.log(e)
        handleHttpError(res,"ERROR_DELETE_USER")
      }
};

module.exports = {getUsers,getUser,createUser,updateUser,deleteUser}