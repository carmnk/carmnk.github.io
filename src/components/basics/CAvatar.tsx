import { AvatarProps, Avatar, Tooltip, Box } from "@mui/material";
import React, { CSSProperties } from "react";
import { formatFullName, makeInitials } from "../../utils/format";

export type CAvatarProps = Omit<AvatarProps, "title"> & {
  size?: number;
  person?: {
    first_name?: string;
    last_name?: string;
    title?: string | null;
    company_name?: string;
  };
  fontSize?: CSSProperties["fontSize"];
  disableInitials?: boolean;
  customTooltip?: React.ReactNode;
};
export const CAvatar = (props: CAvatarProps) => {
  const {
    size = 26,
    src,
    person,
    style,
    fontSize,
    disableInitials,
    customTooltip,
    ...rest
  } = props;
  const sizeStyle = React.useMemo(
    () => ({
      width: size,
      height: size,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      bgcolor: "#DEE2EA",
      color: "primary.main",
    }),
    [size]
  );
  return src ? (
    <div className="flex items-center justify-start">
      <Tooltip
        placement="top"
        arrow
        title={
          customTooltip ??
          formatFullName(person?.title, person?.first_name, person?.last_name)
        }
      >
        <Box
          component="img"
          style={{
            width: size,
            height: `max(${size}, 100%)`,
            borderRadius: 99999,
            ...style,
          }}
          src={src}
          alt="profile"
          {...rest}
        />
      </Tooltip>
    </div>
  ) : (
    <Tooltip
      placement="top"
      arrow
      title={
        customTooltip ??
        (person?.company_name
          ? person.company_name
          : formatFullName(
              person?.title,
              person?.first_name,
              person?.last_name
            ))
      }
    >
      <Avatar {...rest} sx={{ ...sizeStyle, ...style, ...(rest?.sx ?? {}) }}>
        {person && !disableInitials ? (
          <Box component="div" fontSize={fontSize ?? "12px"}>
            {makeInitials(person)}
          </Box>
        ) : null}
      </Avatar>
    </Tooltip>
  );
};
