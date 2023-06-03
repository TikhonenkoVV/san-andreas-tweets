import { Tweet } from 'components/Tweet/Tweet';
import { List } from './TweetsList.styled';

export const TweetsList = ({ data, clickFunk }) => {
    return (
        <List>
            <Tweet data={data} clickFunk={clickFunk} />
        </List>
    );
};
