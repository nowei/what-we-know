import { Button, Text, Grid, Stack, Image, GridCol } from "@mantine/core";
export default function Header() {
  return (
    <Stack>
      <Image width={50} height={50} src="/what-we-know/logo.png" alt="" />
      <Grid>
        <GridCol span={4}>
          <Text
            variant="gradient"
            gradient={{ from: "blue", to: "cyan", deg: 90 }}
          >
            Home
          </Text>
        </GridCol>
        <GridCol span={4}>Computing</GridCol>
        <GridCol span={4}>How to build things</GridCol>
      </Grid>
    </Stack>
  );
}
