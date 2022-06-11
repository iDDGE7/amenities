import { ContainerSideBar, HeaderSideBar, BodySideBar } from "./Style";
import ItemAmenitiesParent from "../ItemAmenitiesParent/ItemAmenitiesParent";

import Text from "../Text/Text";

const SideBar = ({
    amenitiesParents,
    selectAmenitieParent,
    currentAmenitieParent
}) => {
    return (
        <ContainerSideBar>
            <HeaderSideBar>
                <Text fw="600" cl="#023047">
                    Amenitie List
                </Text>
            </HeaderSideBar>
            <BodySideBar>
                {amenitiesParents &&
                    amenitiesParents.map(({ name, id }) => (
                        <ItemAmenitiesParent
                            title={name}
                            key={id}
                            selectAmenitieParent={selectAmenitieParent}
                            id={id}
                            currentAmenitieParent={currentAmenitieParent}
                        />
                    ))}
            </BodySideBar>
        </ContainerSideBar>
    );
};

export default SideBar;
