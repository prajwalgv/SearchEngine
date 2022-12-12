import { FC } from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemButton } from '@mui/material';

interface IRightNavProps {
    opened?: boolean;
    handleNavBar?: () => void;
}

const RightNav: FC<IRightNavProps> = ({ opened, handleNavBar }) => {
    const data = [{ name: 'Settings' }, { name: 'Profile' }, { name: "logout" }]
    return <Drawer
        anchor={'right'}
        open={opened}
        onClose={handleNavBar}
    ><List>
            {data.map((it) =>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary={it.name} ></ListItemText>
                    </ListItemButton>
                </ListItem>
            )
            }
        </List>

    </Drawer>;
};

export default RightNav;
