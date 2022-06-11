import Layout from "components/Layout/Layout";
import Container from "components/Container/Container";
import SideBar from "components/SideBar/SideBar";
import BodySection from "components/BodySection/BodySection";
import useAmenities from "hooks/useAmenities.js";

const App = () => {
    const {
        amenitiesParents,
        amenitieChildsData,
        availabePagination,
        currentAmenitieParent,
        selectAmenitieParent,
        changeDataPaginate,
        Loading
    } = useAmenities();

    return (
        <Layout className="App">
            <Container>
                <SideBar
                    amenitiesParents={amenitiesParents}
                    selectAmenitieParent={selectAmenitieParent}
                    currentAmenitieParent={currentAmenitieParent}
                />
                <BodySection
                    amenitieChildsData={amenitieChildsData}
                    availabePagination={availabePagination}
                    changeDataPaginate={changeDataPaginate}
                    Loading={Loading}
                />
            </Container>
        </Layout>
    );
};

export default App;
