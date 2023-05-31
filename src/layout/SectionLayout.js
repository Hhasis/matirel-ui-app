import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const SectionLayout = (props) => {
    return (
        <div>
            <Box>
                <Card sx={{ mt: 4 }}>
                    <CardContent>
                        {props.children}
                    </CardContent>
                </Card>
            </Box>
        </div>
    );
}

export default SectionLayout;