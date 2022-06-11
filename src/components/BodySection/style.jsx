import styled from "styled-components";
import { prop } from "styled-tools";
const BodyContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
`;

const DataContainer = styled.article`
    width: 100%;
    padding: 1em;
    height: 100%;
    background: #ffffff;

    overflow-y: auto;

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: #ffffff;
    }

    ::-webkit-scrollbar-thumb {
        background: #fb8500;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #3538eb;
    }
`;

const ContainerAmenitiesChildren = styled.div`
    width: 100%;
    margin-top: 1em;
    background: #ffffff;

    display: flex;
    flex-wrap: wrap;
`;

const ItemChildren = styled.div`
    margin: 5px;
    width: 100%;
    max-width: 150px;
    height: 100px;
    padding: 1em;

    background: #ffffff;
    border: 1px solid #e1e1e1;
    border-radius: 3px;

    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    overflow-y: auto;
`;

const ContainerButtonsPagination = styled.div`
    width: 100%;
    padding: 1em 1em;
    background: #ffffff;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
`;

const ButtonPagination = styled.div`
    background: ${prop("bc", "#023047")};
    padding: 0.5em 1em;
    width: 150px;
    border-radius: 5px;

    cursor: pointer;

    &:not(:first-child) {
        margin-left: 1em;
    }

    display: flex;
    justify-content: center;
`;

export {
    BodyContainer,
    DataContainer,
    ContainerAmenitiesChildren,
    ItemChildren,
    ContainerButtonsPagination,
    ButtonPagination
};
