import { FC, ReactElement, useCallback, useState } from 'react';
import { Paper, Grid, Icon } from '@mui/material';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Layout.css';
import RightNav from './RightNav';

interface ILayoutProps {
    children?: ReactElement;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
    const [opened, setOpened] = useState<boolean>(false);
    const handleNav = useCallback(() => {
        setOpened(pre => !pre)
    }, [])
    return <Paper className='Paper-con'>
        <Grid container>
            <Grid item xs={12}>
                <div className="left-header">
                    <Icon >
                        <LogoDevIcon  className="icon" />
                    </Icon>
                </div>
                <div className='right-header'>
                    <Icon onClick={handleNav} >
                        <AccountCircleIcon  className="icon"/>
                    </Icon>
                </div>
            </Grid>
            <Grid item xs={12}>
                {children}
            </Grid>
            <RightNav opened={opened} handleNavBar={handleNav} />
        </Grid>
    </Paper>;
};

export default Layout;
