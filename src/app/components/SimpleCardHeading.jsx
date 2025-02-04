import { Icon, IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import styled from "@mui/material/styles/styled";

// STYLED COMPONENTS
const CardRoot = styled(Card)({
  height: "100%",
  padding: "20px 24px",
  ".subtitle": { marginBottom: "1rem" }
});

const CardTitle = styled("div")(({ subtitle }) => ({
  fontSize: "1rem",
  fontWeight: "500",
  textTransform: "capitalize",
  marginBottom: !subtitle && "16px"
}));

export default function SimpleCardHeading({ children, title, subtitle, addAction }) {
  return (
    <CardRoot elevation={6}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <CardTitle subtitle={subtitle}>{title}</CardTitle>
        <IconButton color="primary" onClick={addAction}>
          <Icon color="primary">add</Icon>
        </IconButton>
      </div>
      {/* <CardTitle subtitle={subtitle}>{title}</CardTitle> */}
      {subtitle && <div className="subtitle">{subtitle}</div>}
      {children}
    </CardRoot>
  );
}
