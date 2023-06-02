import PropTypes from 'prop-types';
import { IconStyled } from './Icon.styled';

export const Icon = ({ w, h, use }) => {
    return (
        <IconStyled width={w} height={h}>
            <use href={use} />
        </IconStyled>
    );
};

Icon.propTypes = {
    use: PropTypes.string.isRequired,
};
