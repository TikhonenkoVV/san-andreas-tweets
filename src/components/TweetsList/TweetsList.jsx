import { Tweet } from 'components/Tweet/Tweet';
import { List } from './TweetsList.styled';

export const TweetsList = ({ data }) => {
    return (
        <List>
            <Tweet data={data} />
        </List>
    );
};
