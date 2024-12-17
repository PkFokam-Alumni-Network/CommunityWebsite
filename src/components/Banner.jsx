import React from "react";

export default function Banner() {
  return (
    <div style={{ height: "60vh", backgroundColor: colors.secondary.main }}>
      <Container sx={{ height: "100%" }}>
        <div className="py-20">
          <Typography
            variant="h3"
            sx={{
              color: colors.secondary.contrastText,
              fontWeight: 700,
              maxWidth: "500px",
            }}
          >
            Welcome to PkFokam Alumni Network
          </Typography>
          <Typography
            variant="h5"
            mt={2}
            sx={{
              color: colors.secondary.contrastText,
            }}
          >
            Connecting generations of excellence
          </Typography>
        </div>
      </Container>
    </div>
  );
}
