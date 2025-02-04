import { Box, Icon, IconButton, styled } from "@mui/material";
import PaginationTable from "./PaginationTable";
import { Breadcrumb, SimpleCard } from "app/components";
import SimpleCardHeading from "app/components/SimpleCardHeading";

// STYLED COMPONENTS
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" }
  }
}));

export default function AppUsers() {
  const addClickFunc = function addClick() {
    console.log("Add Users clicked");
  };
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Material", path: "/material" }, { name: "Table" }]} />
      </Box>
      <SimpleCardHeading title="Pagination Table" addAction={addClickFunc}>
        <PaginationTable />
      </SimpleCardHeading>
    </Container>
  );
}
