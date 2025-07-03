import { useState } from "react";
import {
  Container,
  TextField,
  Typography,
  Button,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  Checkbox,
  FormGroup,
  Box,
  Paper,
  Avatar,
  Grid,
  Divider,
  InputLabel,
  FormHelperText,
  FormControlLabel,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

function App() {
  const countries = ["Canada", "Brazil", "Japan", "Australia", "Egypt"];
  const technologies = [
    "React",
    "Angular",
    "Vue",
    "Node.js",
    "Python",
    "Django",
    "Spring Boot",
  ];

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    password: "",
    gender: "",
    country: "",
    tech: [],
    bio: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleTechChange = (techName) => {
    setFormData((prev) => {
      const isChecked = prev.tech.includes(techName);
      return {
        ...prev,
        tech: isChecked
          ? prev.tech.filter((t) => t !== techName)
          : [...prev.tech, techName],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Full Name: ${formData.fullName}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `Date of Birth: ${formData.dob}\n` +
        `Gender: ${formData.gender}\n` +
        `Country: ${formData.country}\n` +
        `Technologies: ${formData.tech.join(", ")}\n` +
        `Bio: ${formData.bio}\n` +
        `Accepted Terms: ${formData.terms ? "Yes" : "No"}`
    );
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 4 }}>
        <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
          <Avatar
            sx={{ bgcolor: "primary.main", width: 56, height: 56, mb: 1 }}
          >
            <PersonIcon fontSize="large" />
          </Avatar>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Registration Form
          </Typography>
        </Box>
        <Divider sx={{ mb: 3 }} />
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Full Name"
                name="fullName"
                fullWidth
                required
                value={formData.fullName}
                onChange={handleChange}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                name="email"
                type="email"
                fullWidth
                required
                value={formData.email}
                onChange={handleChange}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Phone Number"
                name="phone"
                type="tel"
                fullWidth
                value={formData.phone}
                onChange={handleChange}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Date of Birth"
                name="dob"
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={formData.dob}
                onChange={handleChange}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Password"
                name="password"
                type="password"
                fullWidth
                required
                value={formData.password}
                onChange={handleChange}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={6} width={"25%"}>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="gender-label">Gender</InputLabel>
                <Select
                  labelId="gender-label"
                  name="gender"
                  value={formData.gender}
                  label="Gender"
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} width={"25%"}>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="country-label">Country</InputLabel>
                <Select
                  labelId="country-label"
                  name="country"
                  value={formData.country}
                  label="Country"
                  onChange={handleChange}
                  required
                >
                  {countries.map((c) => (
                    <MenuItem key={c} value={c}>
                      {c}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset" sx={{ mb: 2 }}>
                <FormLabel>Technologies</FormLabel>
                <FormGroup row>
                  {technologies.map((tech) => (
                    <FormControlLabel
                      key={tech}
                      control={
                        <Checkbox
                          checked={formData.tech.includes(tech)}
                          onChange={() => handleTechChange(tech)}
                        />
                      }
                      label={tech}
                    />
                  ))}
                </FormGroup>
                <FormHelperText>Select all that apply</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Bio"
                name="bio"
                fullWidth
                multiline
                minRows={3}
                value={formData.bio}
                onChange={handleChange}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                    required
                  />
                }
                label={
                  <Typography variant="body2">
                    I agree to the{" "}
                    <span
                      style={{
                        color: "#1976d2",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Terms and Conditions
                    </span>
                  </Typography>
                }
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                sx={{ py: 1.5, fontWeight: 600 }}
              >
                Register
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}
export default App;
