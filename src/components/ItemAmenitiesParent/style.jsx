import styled, { css } from "styled-components";

const ContainerItem = styled.section`
    width: 100%;
    height: 40px;
    border: 0.5px solid rgba(2, 48, 71, 0.1);
    background: #ffffff;
    padding: 0.5em;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    ${({ id, currentAmenitieParent }) => {
        if (id && currentAmenitieParent && id === currentAmenitieParent) {
            return css`
                background: #f2f2f2;
            `;
        }
    }}

    cursor: pointer;
`;

export { ContainerItem };
