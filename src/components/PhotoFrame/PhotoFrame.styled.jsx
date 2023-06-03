import styled from '@emotion/styled';

export const CircleContainer = styled.div`
    position: relative;
    width: 80px;
    height: 80px;
    padding: 9px;
`;

export const UserPhoto = styled.img`
    width: 62px;
    aspect-ratio: 1;
    border-radius: 50%;
`;

export const CircleFill = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    border: 9px solid #ebd8ff;
    border-radius: 50px;
    background-color: ${props => props.theme.colors.accent};
    bottom: 45px;
    width: 100%;
    height: 100%;
    z-index: -1;
`;

export const CircleOutert = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    box-shadow: inset 0px 4.39163px 3.29372px #fbf8ff,
        inset 0px -2.19582px 4.39163px #ae7be3,
        0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06);
    z-index: 2;
`;

export const CircleInner = styled.div`
    position: absolute;
    top: 9px;
    left: 9px;
    width: 62px;
    height: 62px;
    border-radius: 50%;
    z-index: 3;
    box-shadow: 0px -2.19582px 4.39163px #ae7be3,
        inset 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06);
`;
