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
  useTheme,
  Modal,
  Link,
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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Box sx={{ minHeight: "100vh", py: 12 }}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              fontWeight="bold"
              color="text.primary"
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
                    <Link
                      component="button"
                      variant="body2"
                      onClick={handleOpen}
                      sx={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Bank of America - Student Advantage
                    </Link>
                  </CustomListItem>
                  <CustomListItem>
                    <Link
                      component="button"
                      variant="body2"
                      onClick={handleOpen}
                      sx={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Chase College Checking Account
                    </Link>
                  </CustomListItem>
                  <CustomListItem>
                    <Link
                      component="button"
                      variant="body2"
                      onClick={handleOpen}
                      sx={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Wells Fargo College Combo
                    </Link>
                  </CustomListItem>
                  <CustomListItem>
                    <Link
                      component="button"
                      variant="body2"
                      onClick={handleOpen}
                      sx={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Local Credit Unions - Better Rates
                    </Link>
                  </CustomListItem>
                </List>
              </CustomCard>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <CustomCard title="Campus Employment" icon={Work}>
                <List>
                  <CustomListItem>
                    <Link
                      component="button"
                      variant="body2"
                      onClick={handleOpen}
                      sx={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Browse Handshake Opportunities
                    </Link>
                  </CustomListItem>
                  <CustomListItem>
                    <Link
                      component="button"
                      variant="body2"
                      onClick={handleOpen}
                      sx={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Research Assistant Positions
                    </Link>
                  </CustomListItem>
                  <CustomListItem>
                    <Link
                      component="button"
                      variant="body2"
                      onClick={handleOpen}
                      sx={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Department Work-Study Jobs
                    </Link>
                  </CustomListItem>
                  <CustomListItem>
                    <Link
                      component="button"
                      variant="body2"
                      onClick={handleOpen}
                      sx={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Career Center Resources
                    </Link>
                  </CustomListItem>
                </List>
              </CustomCard>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <CustomCard title="Insurance" icon={LocalHospital}>
                <Typography variant="body2" color="text.main" mt={2}>
                  Follow these steps to activate your insurance:
                </Typography>
                <List>
                  <CustomListItem>
                    <Link
                      component="button"
                      variant="body2"
                      onClick={handleOpen}
                      sx={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Visit Student Health Center
                    </Link>
                  </CustomListItem>
                  <CustomListItem>
                    <Link
                      component="button"
                      variant="body2"
                      onClick={handleOpen}
                      sx={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Present Required Documents
                    </Link>
                  </CustomListItem>
                  <CustomListItem>
                    <Link
                      component="button"
                      variant="body2"
                      onClick={handleOpen}
                      sx={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Complete Registration
                    </Link>
                  </CustomListItem>
                  <CustomListItem>
                    <Link
                      component="button"
                      variant="body2"
                      onClick={handleOpen}
                      sx={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Attend Orientation
                    </Link>
                  </CustomListItem>
                </List>
              </CustomCard>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <CustomCard title="Opportunities" icon={School}>
                <List>
                  <CustomListItem>
                    <Link
                      component="button"
                      variant="body2"
                      onClick={handleOpen}
                      sx={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Colorstack - Tech Opportunities
                    </Link>
                  </CustomListItem>
                  <CustomListItem>
                    <Link
                      component="button"
                      variant="body2"
                      onClick={handleOpen}
                      sx={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      LinkedIn - Professional Network
                    </Link>
                  </CustomListItem>
                  <CustomListItem>
                    <Link
                      component="button"
                      variant="body2"
                      onClick={handleOpen}
                      sx={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      University Job Board
                    </Link>
                  </CustomListItem>
                  <CustomListItem>
                    <Link
                      component="button"
                      variant="body2"
                      onClick={handleOpen}
                      sx={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Career Fairs
                    </Link>
                  </CustomListItem>
                  <CustomListItem>
                    <Link
                      component="button"
                      variant="body2"
                      onClick={handleOpen}
                      sx={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Professional Associations
                    </Link>
                  </CustomListItem>
                </List>
              </CustomCard>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <CustomCard title="Transportation" icon={DirectionsBus}>
                <Typography variant="body2" color="text.primary" mt={2}>
                  Getting around campus:
                </Typography>
                <List>
                  <CustomListItem>
                    <Link
                      component="button"
                      variant="body2"
                      onClick={handleOpen}
                      sx={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Translock App for Bus Tracking
                    </Link>
                  </CustomListItem>
                  <CustomListItem>
                    <Link
                      component="button"
                      variant="body2"
                      onClick={handleOpen}
                      sx={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Student Bus Pass
                    </Link>
                  </CustomListItem>
                  <CustomListItem>
                    <Link
                      component="button"
                      variant="body2"
                      onClick={handleOpen}
                      sx={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Campus Bike-Share Program
                    </Link>
                  </CustomListItem>
                  <CustomListItem>
                    <Link
                      component="button"
                      variant="body2"
                      onClick={handleOpen}
                      sx={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Parking Permit Information
                    </Link>
                  </CustomListItem>
                </List>
              </CustomCard>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <CustomCard title="Grocery Shopping" icon={ShoppingCart}>
                <Typography variant="body2" color="text.primary" mt={2}>
                  Nearby shopping options:
                </Typography>
                <List>
                  <CustomListItem>
                    <Link
                      component="button"
                      variant="body2"
                      onClick={handleOpen}
                      sx={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Walmart Supercenter
                    </Link>
                  </CustomListItem>
                  <CustomListItem>
                    <Link
                      component="button"
                      variant="body2"
                      onClick={handleOpen}
                      sx={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Target
                    </Link>
                  </CustomListItem>
                  <CustomListItem>
                    <Link
                      component="button"
                      variant="body2"
                      onClick={handleOpen}
                      sx={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Local Farmer's Market
                    </Link>
                  </CustomListItem>
                  <CustomListItem>
                    <Link
                      component="button"
                      variant="body2"
                      onClick={handleOpen}
                      sx={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Whole Foods
                    </Link>
                  </CustomListItem>
                  <CustomListItem>
                    <Link
                      component="button"
                      variant="body2"
                      onClick={handleOpen}
                      sx={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Trader Joe's
                    </Link>
                  </CustomListItem>
                </List>
              </CustomCard>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
