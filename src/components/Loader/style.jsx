import styled from "styled-components";

const ContainerLoader = styled.div`
    width: 100%;
    height: 100%;
    background: #ffffff;

    display: flex;
    justify-content: center;
    align-items: center;
    
`;
const Circleload = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 3px solid #858585;
    background: #ffffff;
    position: relative;
    animation: rotate 1.2s infinite forwards ease-in-out;

    &:after {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        background: #ffffff;
        left: 0;
        top: 0;
        border-radius: 100%;
    }

    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

export { ContainerLoader, Circleload };
