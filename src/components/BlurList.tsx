import { Grid } from "@mui/material";
import { IBlur } from "../App";
import BlurItem from "./BlurItem";

const BlurList = ({ list }: {list: Array<IBlur>}) => {
  return (
    <Grid container spacing={2}>
      {list.map((item) => (
        <BlurItem
          key={item.id}
          id={item.id}
          img={item.poster}
          text={item.name}
        />
      ))}
    </Grid>
  );
};

export default BlurList;
