import React, { useState } from "react";
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
import { ArrowForward } from "@mui/icons-material";
import { onboardingData } from "./../constants/OnboardingData";

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
  const [open, setOpen] = useState(false);
  const [selectedCardContentItem, setSelectedCardContentItem] = useState(null);

  const handleLinkOnClick = (cardContentItem) => {
    setSelectedCardContentItem(cardContentItem);
    setOpen(true);
  };

  const handleModalOnClick = (value = "ok") => {
    if (value === "cancel") {
      setSelectedCardContentItem(null);
      setOpen(false);
    }
  };

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
            {onboardingData.map((item) => (
              <Grid key={item.key} item xs={12} sm={6} md={4}>
                <CustomCard title={item.title} icon={item.icon}>
                  <List>
                    {item.cardcontent.map((content) => (
                      <CustomListItem key={content.id}>
                        <Link
                          component="button"
                          variant="body2"
                          onClick={() => handleLinkOnClick(content)}
                          sx={{
                            cursor: "pointer",
                            textDecoration: "underline",
                          }}
                        >
                          {content.onboardingTitle}
                        </Link>
                      </CustomListItem>
                    ))}
                  </List>
                </CustomCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Modal
        open={open}
        onClose={() => handleModalOnClick("cancel")}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {selectedCardContentItem && (
            <>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {selectedCardContentItem.onboardingTitle}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {selectedCardContentItem.onboardingInfo}
              </Typography>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
}
