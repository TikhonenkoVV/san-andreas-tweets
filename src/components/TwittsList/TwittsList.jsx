import { Twitt } from 'components/Twitt/Twitt';
import { List } from './TwittsList.styled';

export const TwittsList = ({ data }) => {
    return (
        <List>
            <Twitt data={data} />
        </List>
    );
};
