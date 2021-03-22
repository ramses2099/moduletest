module.exports = class SequelizeRepository {

    /**
     * Constructor SequelizeRepository
     * @param  {Squelize} sequelize instance of orm db
     * @param  {String} modelName  name of the model
    */
    constructor(sequelize, modelName) {
        this._sequelize = sequelize;

        if (modelName === undefined) {
            throw new Error('model name cannot be null');
        }
        //model entity
        this._model = this._sequelize.model(modelName);
    }

    /**
     * Function findAll rows of model
     * @return  {Object[]} enititys array of object 
    */
    findAll() {
        const entitys = this._model.findAll();
        return entitys;
    }

    /**
     * Function findOne row of model
     * @param  {Integer} _id number of primary key row
     * @return  {Object} entity of model
    */
    findOne(_id) {
        const entity = this._model.findOne({ where: { id: _id } });
        return entity;
    }

    /** 
     * Function create row in model
     * @param  {Object} entity of model
     * @return  {Object} _entity object model
    */
    create(entity) {
        const _entity = this._model.create(entity);
        return _entity;
    }

    /** 
     * Function update row in model
     * @param  {Object} entity of model
     * @param  {Integer} _id number primary key of model
     * @return {Entity} promise
    */
    async update(entity, _id) {
        const entity = await this._model.update(entity, { where: { id: _id } })
        return entity;
    }

}