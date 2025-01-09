import React from "react";
import {
  CssBaseline,
  Container,
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Paper,
  useTheme,
} from "@mui/material";
import {
  AccountBalance,
  Work,
  LocalHospital,
  School,
  DirectionsBus,
  ShoppingCart,
  ArrowForward,
} from "@mui/icons-material";

const CustomCard = ({ title, icon: Icon, children }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        height: "100%",
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: theme.shadows[8],
          cursor: "pointer",
        },
      }}
      elevation={0}
    >
      <CardHeader
        avatar={<Icon sx={{ color: theme.palette.primary.main }} />}
        title={
          <Typography variant="h6" fontWeight="bold">
            {title}
          </Typography>
        }
        sx={{
          bgcolor: theme.palette.grey[50],
          borderBottom: `1px solid ${theme.palette.grey[200]}`,
        }}
      />
      <CardContent sx={{ pt: 0, pb: 0 }}>{children}</CardContent>
    </Card>
  );
};

const CustomListItem = ({ children }) => (
  <ListItem sx={{ pl: 0 }}>
    <ListItemIcon sx={{ minWidth: 36 }}>
      <ArrowForward fontSize="small" color="primary.main" />
    </ListItemIcon>
    <ListItemText
      primary={children}
      primaryTypographyProps={{
        sx: { color: "secondary.main" },
      }}
    />
  </ListItem>
);

export default function OnboardingPage() {
  return (
    <Box sx={{ minHeight: "100vh", py: 8 }}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            fontWeight="bold"
            color="primary"
          >
            Student Onboarding Guide
          </Typography>
          <Typography variant="h6" color="text.primary" mb={4}>
            Everything you need to know to get started on campus
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <CustomCard title="Banking" icon={AccountBalance}>
              <List>
                <CustomListItem>
                  Bank of America - Student Advantage
                </CustomListItem>
                <CustomListItem>Chase College Checking Account</CustomListItem>
                <CustomListItem>Wells Fargo College Combo</CustomListItem>
                <CustomListItem>
                  Local Credit Unions - Better Rates
                </CustomListItem>
              </List>
            </CustomCard>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <CustomCard title="Campus Employment" icon={Work}>
              <List>
                <CustomListItem>Browse Handshake Opportunities</CustomListItem>
                <CustomListItem>Research Assistant Positions</CustomListItem>
                <CustomListItem>Department Work-Study Jobs</CustomListItem>
                <CustomListItem>Career Center Resources</CustomListItem>
              </List>
            </CustomCard>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <CustomCard title="Insurance" icon={LocalHospital}>
              <Typography variant="body2" color="text.main">
                Follow these steps to activate your insurance:
              </Typography>
              <List>
                <CustomListItem>Visit Student Health Center</CustomListItem>
                <CustomListItem>Present Required Documents</CustomListItem>
                <CustomListItem>Complete Registration</CustomListItem>
                <CustomListItem>Attend Orientation</CustomListItem>
              </List>
            </CustomCard>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <CustomCard title="Opportunities" icon={School}>
              <List>
                <CustomListItem>Colorstack - Tech Opportunities</CustomListItem>
                <CustomListItem>LinkedIn - Professional Network</CustomListItem>
                <CustomListItem>University Job Board</CustomListItem>
                <CustomListItem>Career Fairs</CustomListItem>
                <CustomListItem>Professional Associations</CustomListItem>
              </List>
            </CustomCard>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <CustomCard title="Transportation" icon={DirectionsBus}>
              <Typography variant="body2" color="text.primary">
                Getting around campus:
              </Typography>
              <List>
                <CustomListItem>Translock App for Bus Tracking</CustomListItem>
                <CustomListItem>Student Bus Pass</CustomListItem>
                <CustomListItem>Campus Bike-Share Program</CustomListItem>
                <CustomListItem>Parking Permit Information</CustomListItem>
              </List>
            </CustomCard>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <CustomCard title="Grocery Shopping" icon={ShoppingCart}>
              <Typography variant="body2" color="text.primary">
                Nearby shopping options:
              </Typography>
              <List>
                <CustomListItem>Walmart Supercenter</CustomListItem>
                <CustomListItem>Target</CustomListItem>
                <CustomListItem>Local Farmer's Market</CustomListItem>
                <CustomListItem>Whole Foods</CustomListItem>
                <CustomListItem>Trader Joe's</CustomListItem>
              </List>
            </CustomCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
