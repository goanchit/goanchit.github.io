import React from 'react';
import { Link } from 'gatsby';
import { Box } from '@mui/material';

interface Props {
    rowName: string;
    rowLink: string;
}

export const DrawerItem = ({ rowName, rowLink }: Props) => {
    return (
        <Box sx={{ height: '10%' }}>
            <Link to={rowLink} style={{ textDecoration: 'none', color: 'black' }}>
                {rowName}
            </Link>
        </Box>
    )
}
