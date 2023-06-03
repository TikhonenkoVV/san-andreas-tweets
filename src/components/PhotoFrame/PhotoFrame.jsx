import {
    CircleContainer,
    CircleFill,
    CircleInner,
    CircleOutert,
    UserPhoto,
} from './PhotoFrame.styled';

export const PhotoFrame = ({ photo }) => {
    return (
        <CircleContainer>
            <UserPhoto src={photo} alt="avatar" />
            <CircleFill />
            <CircleOutert />
            <CircleInner />
        </CircleContainer>
    );
};
