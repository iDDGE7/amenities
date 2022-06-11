import styled from "styled-components";

const ContainerSideBar = styled.section`
    width: 200px;
    height: 100%;
    background: #ffffff;
    border-right: 1px solid #e1e1e1;
`;

const HeaderSideBar = styled.header`
    background: #fb8500;
    height: 60px;
    width: 100%;

    padding: 1em;

    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

const BodySideBar = styled.section`
    height: calc(100% - 60px);
    background: #FFFFFF;

    display: flex;
    flex-direction: column;
    align-items: center;

    overflow-y: auto;
`;

export { ContainerSideBar, HeaderSideBar, BodySideBar };
