import { Box, Icon, IconButton, styled } from "@mui/material";
import PaginationTable from "./PaginationTable";
import { Breadcrumb, SimpleCard } from "app/components";

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
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Material", path: "/material" }, { name: "Table" }]} />
      </Box>
      <SimpleCard title="Pagination Table">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span></span>
          <IconButton color="primary" onClick={() => console.log("Add clicked")}>
            <Icon color="primary">add</Icon>
          </IconButton>
        </div>
        <PaginationTable />
      </SimpleCard>
    </Container>
  );
}
