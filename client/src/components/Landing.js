import * as React from 'react';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import {ThemeProvider} from '@mui/material/styles';
import {theme} from "../App";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {Container} from "@mui/system";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import {Button, Chip} from "@mui/material";
import Card from "@mui/material/Card";

import SchoolIcon from '@mui/icons-material/School';
import CelebrationIcon from '@mui/icons-material/Celebration';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

const items = [
    {
        icon: <SchoolIcon />,
        title: 'Educator Validated and Tested',
        description:
            'Content is aligned to the National Standards for Personal Finance Education and vetted by ' +
            'experts in academia and post-secondary education.',
        image: 'url("https://res.cloudinary.com/dnwaszkmv/image/upload/v1711570545/Photo1_fdgiy4.png")',
    },
    {
        icon: <CelebrationIcon />,
        title: 'Fun and Engaging',
        description:
            'With colors, animations, achievements, and leaderboards, learning about taxes has never been more fun!',
        image: 'url("https://res.cloudinary.com/dnwaszkmv/image/upload/v1711570548/Photo2_co6rqc.png")',
    },
    {
        icon: <EmojiPeopleIcon />,
        title: 'Designed for College Students',
        description:
            'Most financial literacy resources are designed for adults. Common Cents is designed for college students, ' +
            'meeting you where you are in your personal finance journey.',
        image: 'url("https://res.cloudinary.com/dnwaszkmv/image/upload/v1711570544/Photo3_vss56g.png")',
    },
];

export default function Landing() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

    const handleItemClick = (index) => {
        setSelectedItemIndex(index);
    };

    const selectedFeature = items[selectedItemIndex];

    return (
        <ThemeProvider theme={theme}>
            <Box
                id="hero"
                sx={(theme) => ({
                    width: '100%',
                    backgroundImage: `linear-gradient(180deg, ${theme.palette.primary}, ${theme.palette.info})`,
                    backgroundSize: '100% 20%',
                    backgroundRepeat: 'no-repeat',
                })}
            >
                <Container
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        pt: { xs: 14, sm: 8 },
                        pb: { xs: 8, sm: 8 },
                    }}
                >
                    <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
                        <Typography
                            component="h1"
                            variant="h1"
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' },
                                alignSelf: 'center',
                                textAlign: 'center',
                                fontWeight: 1000,
                                fontSize: { xs: '1.85rem', sm: '2.1rem', md: '2.35rem' },
                            }}
                        >
                            Accessible personal finance education for&nbsp;
                            <Typography
                                component="span"
                                variant="h1"
                                sx={{
                                    color: (theme) =>
                                        theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                                    fontWeight: 1000,
                                    fontSize: { xs: '1.85rem', sm: '2.1rem', md: '2.35rem' },
                                }}
                            >
                                all
                            </Typography>
                        </Typography>
                        <Typography
                            variant="body1"
                            textAlign="center"
                            color="text.secondary"
                            sx={{
                                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                            }}>
                           Designed by students, for students. <br />
                            Learn to manage your money and reach financial independence.
                        </Typography>
                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            alignSelf="center"
                            spacing={1}
                            useFlexGap
                            sx={{ pt: 1, width: { xs: '100%', sm: 'auto' } }}
                        >
                            <TextField
                                id="outlined-basic"
                                hiddenLabel
                                size="small"
                                variant="outlined"
                                aria-label="Enter your email address"
                                placeholder="Your email address"
                                inputProps={{
                                    autocomplete: 'off',
                                    ariaLabel: 'Enter your email address',
                                }}
                            />
                            <Button variant="contained" color="primary">
                                Get Updates
                            </Button>
                        </Stack>
                        <Typography variant="caption" textAlign="center" sx={{ opacity: 0.8 }}>
                            By subscribing, you give us permission to send you updates and marketing emails.
                        </Typography>
                    </Stack>
                </Container>
            </Box>

            <Container id="features" sx={{ py: { xs: 8, sm: 0 } }}>
                <Grid container spacing={6}>
                    <Grid item xs={12} md={6}>
                        <div>
                            <Typography component="h2" variant="h1" color="text.primary" sx={{fontWeight: 1000, mb: 2}}>
                                Why Common Cents?
                            </Typography>
                        </div>
                        <Grid container item gap={1} sx={{ display: { xs: 'auto', sm: 'none' } }}>
                            {items.map(({ title }, index) => (
                                <Chip
                                    key={index}
                                    label={title}
                                    onClick={() => handleItemClick(index)}
                                    sx={{
                                        borderColor: () => {
                                            return selectedItemIndex === index ? 'primary.light' : '';
                                        },
                                        background: () => {
                                            return selectedItemIndex === index ? 'none' : '';
                                        },
                                        backgroundColor: selectedItemIndex === index ? 'primary.main' : '',
                                        '& .MuiChip-label': {
                                            color: selectedItemIndex === index ? '#fff' : '',
                                        },
                                    }}
                                />
                            ))}
                        </Grid>
                        <Box
                            component={Card}
                            variant="outlined"
                            sx={{
                                display: { xs: 'auto', sm: 'none' },
                                mt: 4,
                            }}
                        >
                            <Box sx={{ px: 2, pb: 2, textTransform: 'none' }}>
                                <Typography color="text.primary" variant="h2" sx={{textTransform: 'none'}}>
                                    {selectedFeature.title}
                                </Typography>
                                <Typography color="text.secondary" variant="h3" sx={{ my: 0.5, textTransform: 'none' }}>
                                    {selectedFeature.description}
                                </Typography>
                            </Box>
                        </Box>
                        <Stack
                            direction="column"
                            justifyContent="center"
                            alignItems="flex-start"
                            spacing={2}
                            useFlexGap
                            sx={{ display: { xs: 'none', sm: 'flex' }, width: '100%' }}
                        >
                            {items.map(({ icon, title, description }, index) => (
                                <Card
                                    key={index}
                                    component={Button}
                                    onClick={() => handleItemClick(index)}
                                    sx={{
                                        p: 3,
                                        height: 'fit-content',
                                        width: '100%',
                                        background: 'none',
                                        textTransform: 'none',
                                        backgroundColor:
                                            selectedItemIndex === index ? 'action.selected' : undefined,
                                        borderColor: (theme) => {
                                            if (theme.palette.mode === 'light') {
                                                return selectedItemIndex === index
                                                    ? 'primary.light'
                                                    : 'grey.200';
                                            }
                                            return selectedItemIndex === index ? 'primary.dark' : 'grey.800';
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: '100%',
                                            display: 'flex',
                                            textAlign: 'left',
                                            flexDirection: { xs: 'column', md: 'row' },
                                            alignItems: { md: 'center' },
                                            textTransform: 'none',
                                            gap: 2.5,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                color: () => {
                                                    return selectedItemIndex === index
                                                        ? 'primary.main'
                                                        : 'grey.300';
                                                },
                                            }}
                                        >
                                            {icon}
                                        </Box>
                                        <div>
                                            <Typography
                                                color="text.primary"
                                                variant="h2"
                                                fontWeight="bold"
                                                sx={{ mb: 2 }}
                                            >
                                                {title}
                                            </Typography>
                                            <Typography
                                                color="text.secondary"
                                                variant="body2"
                                                sx={{ my: 0.5, fontSize: '0.97rem' }}
                                            >
                                                {description}
                                            </Typography>
                                        </div>
                                    </Box>
                                </Card>
                            ))}
                        </Stack>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{ display: { xs: 'none', sm: 'flex' }, width: '100%' }}
                    >
                        <Card
                            variant="outlined"
                            sx={{
                                height: '100%',
                                width: '100%',
                                display: { xs: 'none', sm: 'flex' },
                                pointerEvents: 'none',
                            }}
                        >
                            <Box
                                sx={{
                                    m: 'auto',
                                    width: 420,
                                    height: 500,
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    backgroundImage: () =>
                                        items[selectedItemIndex].image,
                                }}
                            />
                        </Card>
                    </Grid>
                </Grid>
            </Container>

            <Box sx={{ bgcolor: 'background.default' }}>
                <Box id="logoCollection" sx={{ py: 4 }}>
                    <Typography
                        component="p"
                        variant="subtitle2"
                        align="center"
                        color="text.secondary"
                    >
                        Credits: Michael Sun, Xian Han Chen, Nohan Jariyath, Anson Yan, Shi-Yang Zheng
                    </Typography>
                    {/*<Grid container justifyContent="center" sx={{ mt: 0.5, opacity: 0.6 }}>
                        {logos.map((logo, index) => (
                            <Grid item key={index}>
                                <img
                                    src={logo}
                                    alt={`Fake company number ${index + 1}`}
                                    style={logoStyle}
                                />
                            </Grid>
                        ))}
                    </Grid>*/}
                </Box>
                <Divider />
            </Box>
        </ThemeProvider>
    );
}