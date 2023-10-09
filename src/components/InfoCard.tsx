import { Box, Card, CardContent, Typography } from "@mui/material";

const InfoCard = ({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) => {
  return (
    <Card
      sx={{
        boxShadow: "none",
        backgroundColor: "transparent",
        border: "none",
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              mb: 2,
              width: "60px",
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              border: "1px solid currentColor",
            }}
          >
            <Typography variant="h3" align="center" color="primary.dark">
              {number}
            </Typography>
          </Box>
        </Box>

        <Typography
          variant="h3"
          align="center"
          color="primary.dark"
          sx={{ mb: 2 }}
        >
          {title}
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 2 }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export { InfoCard };
