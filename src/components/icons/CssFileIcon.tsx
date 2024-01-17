import { mdiFile, mdiCodeBraces } from "@mdi/js";
import Icon, { Stack as IconStack } from "@mdi/react";
import { useTheme } from "@mui/material";

export const CssFileIcon = () => {
  const theme = useTheme();
  return (
    <IconStack size={"16px"}>
      <Icon path={mdiFile} size={"16px"} color={theme.palette.text.primary} />
      <Icon
        path={mdiCodeBraces}
        size={0.5}
        // inStack={true}
        style={{ translate: "-1px 3px" }}
        color={theme.palette.background.default}
      />
    </IconStack>
  );
};
