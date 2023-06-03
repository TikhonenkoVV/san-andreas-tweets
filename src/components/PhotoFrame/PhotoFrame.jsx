import {
    CircleContainer,
    CircleFill,
    CircleInner,
    CircleOutert,
} from './PhotoFrame.styled';
// import avatar from '../../img/avatar.png';

export const PhotoFrame = ({ photo }) => {
    return (
        <CircleContainer>
            <img src={photo} alt="avatar" />
            <CircleFill />
            <CircleOutert />
            <CircleInner />
        </CircleContainer>
    );
};
