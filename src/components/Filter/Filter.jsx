import { useState } from 'react';
import Select from 'react-select';
import { theme } from 'styles';

export const Filter = () => {
    const options = [
        { value: 'All', label: 'All' },
        { value: 'Follow', label: 'Follow' },
        { value: 'Followings', label: 'Followings' },
    ];
    const selectStyles = {
        container: styles => ({
            ...styles,
            flexBasis: 'calc((100% - 20px) /2)',
        }),
        input: styles => ({
            ...styles,
            color: 'inherit',
        }),
        control: styles => ({
            ...styles,
            height: '100%',
            border: 'none',
            borderRadius: '10px',
            color: '#373737',
            backgroundColor: '#ebd8ff',
            textAlign: 'center',
            textTransform: 'uppercase',
            fontSize: theme.fontSizes.medium,
            transition: 'background-color 250ms',
            '&: div div': {
                transition: 'color 250ms',
            },
            '&:hover': {
                color: theme.colors.text,
                backgroundColor: theme.colors.hover,
            },
            '&:hover div div': {
                color: theme.colors.text,
            },
            '@media (min-width: 768px)': {
                fontSize: theme.fontSizes.large,
            },
        }),
        // menu: styles => ({ ...styles, right: '0', width: '150px' }),
    };
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            styles={selectStyles}
            placeholder="Filter"
        />
    );
};
