import { Grid } from "@mui/material";
import { IBlur } from "../App";
import BlurItem from "./BlurItem";

const BlurList = ({ list }: { list: Array<IBlur> }) => {
  return (
    <Grid container spacing={2}>
      {list.map((item) => (
        <BlurItem
          key={item.id}
          item={item}
        />
      ))}
    </Grid>
  );
};

export default BlurList;
