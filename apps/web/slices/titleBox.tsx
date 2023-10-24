import {
  Container,
  Grid,
  Tooltip,
  Typography,
  ValueFormat,
  ValueFormatter,
} from "ui";
import { InfoOutlineIcon } from "@sanity/icons";

export const TitleBoxSlice = ({
  title,
  description,
  info,
}: {
  title?: ValueFormat;
  description?: ValueFormat;
  info?: string;
}) => {
  return (
    <Container section className={"max-w-app"}>
      <Grid columns={1}>
        <Grid flex columns={2} gap={0} className={"items-center"}>
          {title && title.value && (
            <ValueFormatter value={title.value} {...title.format} />
          )}

          {info && (
            <Tooltip label={info}>
              <InfoOutlineIcon
                className={
                  "text-onSurfaceLow cursor-pointer -ml-2 flex items-center h-4 w-4"
                }
              />
            </Tooltip>
          )}
        </Grid>
        {description && description.value && (
          <Typography className={"mx-auto lg:mx-0"} tag={"p"} size={"body"} color={"onBackground"}>
            {description.value}
          </Typography>
        )}
      </Grid>
    </Container>
  );
};
