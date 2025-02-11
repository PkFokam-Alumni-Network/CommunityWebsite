import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Box, Typography, Toolbar, Grid2 } from "@mui/material";
import { alumniData as alumniFakeData, another } from "../constants/alumnidata";
import AlumniCard from "../components/AlumniCard";
import { getUsers } from "../features/alumniSlice";

const alumniData_1 = new Array(5).fill(alumniFakeData);
const alumniData = alumniData_1.concat(new Array(5).fill(another));

const groupAlumniByYear = (data) => {
  return data.reduce((acc, alumni) => {
    const year = alumni.graduationYear;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(alumni);
    return acc;
  }, {});
};

export default function AlumniDirectory() {
  const { users } = useSelector((state) => state.alumniUsers);
  const groupedAlumni = groupAlumniByYear(alumniData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  console.log("====================================");
  console.log("++++ alumniUsers ++++", users);
  console.log("====================================");

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom align="center">
          Meet Your Fellow Alumni 🎓👩🏾‍🎓👨🏾‍🎓
        </Typography>
        {Object.entries(groupedAlumni).map(([year, alumni]) => (
          <Box key={year} sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                animation: "gradient 5s ease infinite, bounce 1s ease infinite",
              }}
            >
              Class of {year}
            </Typography>
            <Grid2 container spacing={2}>
              {alumni.map((alumnus, index) => (
                <Grid2 item key={index} xs={12} sm={6} md={4}>
                  <AlumniCard alumni={alumnus} />
                </Grid2>
              ))}
            </Grid2>
          </Box>
        ))}
        {Object.keys(groupedAlumni).length === 0 && (
          <Box sx={{ width: "100%", textAlign: "center", mt: 4 }}>
            <Typography variant="h6" color="text.secondary">
              No alumni found matching your search.
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}
