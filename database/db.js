// Oh you curious...
// This is not a real database,
// But let's imagine it is one :)
import data from'./data';

// Estoy utilizando un objeto llamado Database para seguir simulando un ambiente llamando la base de datos.
const Database = {};

Database.getAll = async () => {
    const asArray = Object.values(data);
    await randomDelay();
    return asArray;
};

Database.getById = async (id) => {
    const entry = data[id];
    await randomDelay();
    return entry;
};

// Modifique el tiempo del delay para simular el tiempo de espera
// Tardara entre 1 a 4 segundos
const randomDelay = () => {
    return new Promise((resolve) => {
        const delay = Math.floor(Math.random() * 4000) + 1000;
        setTimeout(resolve, delay);
    });
};

export default Database;