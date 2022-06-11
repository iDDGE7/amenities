import axios from "axios";

const headers = {
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
};

// Servicio para recuperar Amenities padres
const getAmenitiesParents = async () => {
    const url = `http://54.177.198.128:8001/api/cat-amenities-parents/`;

    try {
        const { data } = await axios.get(url, headers);
        return data;
    } catch (error) {
        if (
            error &&
            error.response &&
            error.response.data &&
            error.response.data.data
        ) {
            return error.response.data.data;
        }
    }
};

// Servicio para recuperar Amenities hijos por id de Padre
const getAmenitiesChildren = async ({ idParent }) => {
    const url = `http://54.177.198.128:8001/api/cat-amenities-childs/?amenity_parent_id=${idParent}`;
    try {
        const { data } = await axios.get(url, headers);
        return data;
    } catch (error) {
        if (
            error &&
            error.response &&
            error.response.data &&
            error.response.data.data
        ) {
            return error.response.data.data;
        }
    }
};

// Servicio para recuperar Amenities por paginación
const getDataPaginate = async ({ link }) => {
    try {
        const { data } = await axios.get(link, headers);
        return data;
    } catch (error) {
        if (
            error &&
            error.response &&
            error.response.data &&
            error.response.data.data
        ) {
            return error.response.data.data;
        }
    }
};

export { getAmenitiesParents, getAmenitiesChildren, getDataPaginate };
