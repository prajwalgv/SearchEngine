import { Autocomplete as SearchComplete, TextField, InputAdornment } from '@mui/material';
import { FC, useCallback } from 'react';
import { SearchIcon } from '../Assets/ICON16';
import { IAutoCompleteProps, IOptions } from './types';
import { Icon } from '@mui/material';



const AutoComplete: FC<IAutoCompleteProps> = ({ options, display, ...rest }) => {
    const getOptionRendered = useCallback((option: IOptions) => display.reduce((acc, cur) =>
        acc += (acc.length > 0 ? ' | ' : '') + cur + ':' + option[cur], ''), [display]);

    return <SearchComplete
        freeSolo
        options={options}
        fullWidth
        renderInput={(params) => <TextField
            {...params}
            InputProps={{
                ...params.InputProps,
                type: 'search',
                startAdornment: (<InputAdornment position="start"><Icon><SearchIcon/></Icon> </InputAdornment>),
                disableUnderline: true,
                placeholder:'Ex: company name'
            }}

        />}
        onInputChange={rest.onChange}
        disableClearable
        getOptionLabel={(o) => getOptionRendered(o as IOptions)}
        {...rest}
    ></SearchComplete>;
};

export default AutoComplete;
