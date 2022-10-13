const controlador = async () => {

    try {

        const response = await fetch ('./stock.json')
        const data = await response.json();

        return data;
    
    } catch (error) {
    console.log('hubo un problema', error);
    };
};

export {controlador};
