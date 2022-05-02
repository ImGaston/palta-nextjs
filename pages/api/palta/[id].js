import Database from'../../../database/db';

const productPage = async (req, res) => {
    try{
        //obtener el codigo de la ruta
        const avo = req.query.id
        //conectar el query productId con la base de datos 
        const palta = await Database.getById(avo);
        res.status(200).json(palta);
    } catch (e) {
        console.error(e)
        res.status(404).end()
    }
};

export default productPage