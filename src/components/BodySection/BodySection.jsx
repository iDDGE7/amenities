import Loader from "components/Loader/Loader";
import {
    BodyContainer,
    ContainerAmenitiesChildren,
    DataContainer,
    ItemChildren,
    ContainerButtonsPagination,
    ButtonPagination
} from "./style";
import Text from "components/Text/Text";

const BodySection = ({
    amenitieChildsData,
    availabePagination,
    changeDataPaginate,
    Loading
}) => {
    const showWelcomeMessage = !amenitieChildsData ? false : true;

    const showDataAmenities =
        amenitieChildsData && amenitieChildsData.length > 0 && !Loading
            ? true
            : false;

    const showMessageEmpty =
        amenitieChildsData && amenitieChildsData.length <= 0 && !Loading;

    return (
        <BodyContainer>
            <DataContainer>
                {/* Se muestra el titulo de bienvenido solo al inicio */}
                {!amenitieChildsData && <Text fs="1.5em">Welcome</Text>}

                {showDataAmenities && (
                    <>
                        <Text fs="1.5em" cl="#023047">
                            Amenities
                        </Text>
                    </>
                )}

                {/* Si el servicio responde un array de amenities vacio */}
                {showMessageEmpty && (
                    <Text fs="1.5em">No se encontraron resultados</Text>
                )}

                {/* Si el servicio responde datos para mostrar */}
                {showDataAmenities && (
                    <ContainerAmenitiesChildren>
                        {/*Aqui se renderizan las amenities child */}
                        {amenitieChildsData.map(({ id, name }) => (
                            <ItemChildren key={id} id={name}>
                                <Text fs="0.8em">{name}</Text>
                            </ItemChildren>
                        ))}
                    </ContainerAmenitiesChildren>
                )}

                {amenitieChildsData && Loading && <Loader />}
            </DataContainer>
            {/* se muestran botones de paginación si el servicio responde los respectivos urls  */}
            {availabePagination && (
                <ContainerButtonsPagination
                    availabePagination={availabePagination}
                >
                    {/* botón para ir a la anterior pagina de datos */}
                    {availabePagination.previous && (
                        <ButtonPagination
                            bc="#f3e271"
                            onClick={() =>
                                changeDataPaginate({
                                    link: availabePagination.previous
                                })
                            }
                        >
                            <Text fs="0.8em" fw="500" cl="#313131">
                                Previous
                            </Text>
                        </ButtonPagination>
                    )}

                    {/* botón para ir a la siguiente pagina de datos */}
                    {availabePagination.next && (
                        <ButtonPagination
                            onClick={() =>
                                changeDataPaginate({
                                    link: availabePagination.next
                                })
                            }
                        >
                            <Text fs="0.8em" fw="500" cl="#ffffff">
                                Next
                            </Text>
                        </ButtonPagination>
                    )}
                </ContainerButtonsPagination>
            )}
        </BodyContainer>
    );
};

export default BodySection;
