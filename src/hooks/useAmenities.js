import { useState, useEffect } from "react";
import {
    getAmenitiesParents,
    getAmenitiesChildren,
    getDataPaginate
} from "services/index";

const useAmenities = () => {
    const [amenitiesParents, setAmenitiesParents] = useState(null);
    const [amenitieChildsData, setAmenitiesChildsData] = useState(null);
    const [currentAmenitieParent, setCurrentAmenitieParent] = useState(null);
    const [availabePagination, setAvailabePagination] = useState(null);
    const [Loading, setLoading] = useState(true);

    // Primero se recuperan los amenities padres
    useEffect(() => {
        (async function fetchData() {
            const data = await getAmenitiesParents();
            setAmenitiesParents(data);
        })();
    }, []);

    // Se recuperan los amenities hijos de acuerdo al amenitie padre seleccionado
    useEffect(() => {
        (async function fetchData() {
            if (currentAmenitieParent) {
                setLoading(true);
                const { results, previous, next } = await getAmenitiesChildren({
                    idParent: currentAmenitieParent
                });
                setAmenitiesChildsData(results);
                setAvailabePagination({ previous: previous, next: next });
                setLoading(false);
            }
        })();
    }, [currentAmenitieParent]);

    // funcion para seleccionar un amenitie padre
    const selectAmenitieParent = ({ id }) => setCurrentAmenitieParent(id);

    // funcion para visualizar otra informacion
    const changeDataPaginate = async ({ link }) => {
        setLoading(true);
        setTimeout(async () => {
            const { results, previous, next } = await getDataPaginate({
                link: link
            });
            setAmenitiesChildsData(results);
            setAvailabePagination({ previous: previous, next: next });
            setLoading(false);
        }, 400);
    };

    return {
        amenitiesParents,
        amenitieChildsData,
        availabePagination,
        currentAmenitieParent,
        selectAmenitieParent,
        changeDataPaginate,
        Loading
    };
};

export default useAmenities;
