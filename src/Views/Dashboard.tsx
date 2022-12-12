import { FC, useState,useCallback } from 'react';
import AutoComplete from '../SharedComponents/AutoComplete';
import { getSearchData } from '../__mock__/mockApi';
import { Grid } from '@mui/material';
import debounce from 'lodash/debounce';
import CardLayout from '../Components/Cards/CardLayout';

interface IDashboardProps {
}
const dis = ['Name', 'Title', 'Phone', 'Mobile',
    'Email',
    'Address',
    'CO_Phone',
    'website'];
const Dashboard: FC<IDashboardProps> = (props) => {
    const [data] = useState<[string]>(dis as [string]);
    const [selected, setSelcted] = useState(null);
    const [options, setOptions] = useState([])
    const handleChange = useCallback(async ({ target }: any) => {
        if (target.value.length > 0) {
            const op = await getSearchData(target.value)
            setOptions(op.data as unknown as []);
        }
    }, [])
    const debounceLoadData = debounce((e) => handleChange(e), 1000);
    const handleSelect = (e:any) => {
        setSelcted(e.target.value)
    };
    return <Grid sx={{ flexGrow: 1 }} container spacing={2} alignItems="center"
        justifyContent="center">
        <Grid item md={10} sm={8} className="container">
            <AutoComplete
                options={options}
                display={data}
                onInputChange={debounceLoadData}
                onChange={handleSelect}
            />
        </Grid>
        <Grid item md={10} sm={8} className="container">
            {selected && <CardLayout selected={selected}/>}
        </Grid>
    </Grid>
};

export default Dashboard;

