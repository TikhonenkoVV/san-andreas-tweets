import {
    CircleContainer,
    CircleFill,
    CircleInner,
    CircleOutert,
} from './PhotoFrame.styled';
import avatar from '../../img/avatar.png';

export const PhotoFrame = () => {
    return (
        <CircleContainer>
            <img src={avatar} alt="avatar" />
            <CircleFill />
            <CircleOutert />
            <CircleInner />
        </CircleContainer>
    );
};
