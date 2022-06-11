import { ContainerItem } from "./style";
import Text from "components/Text/Text";

const ItemAmenitiesParent = ({
    id,
    title,
    selectAmenitieParent,
    currentAmenitieParent
}) => {
    return (
        <ContainerItem
            onClick={() => selectAmenitieParent({ id: id })}
            id={id}
            currentAmenitieParent={currentAmenitieParent}
        >
            <Text fw="600" fs="13px" cl="#314b58">
                {title}
            </Text>
        </ContainerItem>
    );
};

export default ItemAmenitiesParent;
