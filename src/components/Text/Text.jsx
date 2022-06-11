import styled from "styled-components";
import { ifProp, prop } from "styled-tools";

const Text = styled.div`
    font-size: ${prop("fs", "1em")};
    font-weight: ${prop("fw", "500")};
    text-align: ${prop("txt-align", "left")};
    line-height: ${prop("ln-hg", "initial")};
    text-transform: ${prop("txt-transform", "initial")};
    color: ${prop("cl", "#313131")};

    width: ${ifProp("wd", prop("wd", "initial"))};
    max-width: ${ifProp("mx-wd", prop("mx-wd", "100%"))};
    white-space: ${ifProp("white-sp", prop("white-sp", "normal"))};
    word-break: ${ifProp("word-break", prop("word-break", "initial"))};
    text-overflow: ${ifProp("txt-overflow", prop("txt-overflow", "clip"))};
    overflow: ${ifProp("overflow", prop("overflow", "initial"))};
    display: ${ifProp("hide", "none")}; 
`;

export default Text;
