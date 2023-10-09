import { Grid } from "@mui/material";
import { InfoCard } from "./Card";

const cardSectionData = [
  {
    key: 1,
    number: "1",
    title: "Actionable insights",
    description:
      "Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.",
  },
  {
    key: 2,
    number: "2",
    title: "Data-driven decisions",
    description:
      "Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.",
  },
  {
    key: 3,
    number: "3",
    title: "Always affordable",
    description:
      "Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees",
  },
];

const CardSection = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        px: { xs: 4, lg: 10 },
      }}
    >
      {cardSectionData.map((data) => (
        <Grid key={data.key} item xs={12} md={4}>
          <InfoCard
            number={data.number}
            title={data.title}
            description={data.description}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardSection;
