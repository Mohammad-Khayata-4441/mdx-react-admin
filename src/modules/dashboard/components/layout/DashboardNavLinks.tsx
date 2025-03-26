import List, { ListProps } from "@mui/material/List";
// import { NavLink } from "react-router-dom";
import { Link, useMatchRoute } from "@tanstack/react-router";
import {} from "@hugeicons/react";
import ListItem, { ListItemProps } from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
// import { NavigationRecord } from "@/shared/types/navigation";
import { forwardRef, Fragment, useEffect, useRef, useState } from "react";
import { Box, Collapse, Tooltip, Typography } from "@mui/material";
// import { useActivePath } from "@/shared/hooks/useActivePath";
import { useTranslation } from "react-i18next";
// import { CollapseRightIcon, CollapseDownIcon } from "@/app/components/Icons";
import { NavigationItem } from "@/modules/common/types/NavigationItem";

import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { t } from "i18next";

type Props = {
  fullWidth: boolean;
  items: NavigationItem[];
  listProps?: ListProps;
  listItemProps?: ListItemProps;
};

export const DashboardNavLink = ({
  item,
  fullWidth,
  listItemProps,
}: { item: NavigationItem } & Props) => {
  // const isActive = useActivePath();
  const isActive = useMatchRoute();
  const listRef = useRef<HTMLElement | null>(null);
  // const { canAccessNavLink } = useUserPermissions();
  const { canAccessNavLink } = { canAccessNavLink: (item: string) => !!item };

  const [open] = useState(!!item.path && isActive({ to: item.path }));
  const [height, setHeight] = useState(0);

  const { t } = useTranslation();

  useEffect(() => {
    if (!height || !open || !listRef.current) return undefined;

    const obs = new ResizeObserver((el) => {
      setHeight(open ? el[0].contentRect.height : 0);
    });

    if (listRef.current) obs.observe(listRef.current);
  }, [listRef, height, open]);

  return (
    <>
      <ListItem
        {...listItemProps}
        sx={{
          p: 0,
          display: canAccessNavLink(item.label) ? "flex" : "none",
          flexDirection: "column",

          ...listItemProps?.sx,
        }}
      >
        <Tooltip disableHoverListener={fullWidth} title={item.label}>
          <ListItemButton
            component={Link}
            sx={({ palette }) => ({
              width: "100%",
              py: !fullWidth ? 1.2 : 1,
              px: !fullWidth ? 0 : 0.5,
              transition: "0.2s",
              borderRadius: "0.2rem",

              "&.Mui-selected , &.Mui-selected:hover": {
                color: palette.primary.main,
                borderRadius: open ? "0.2rem 0.2rem 0rem 0rem" : "0.2rem",
                "::after": ({ palette }) => ({
                  content: "''",
                  background: palette.primary.main,
                  width: "5px",
                  position: "absolute",

                  height: "90%",
                  left: "-16px",
                  borderRadius: "0rem 0.2rem 0.2rem 0rem",
                }),
              },
            })}
            to={item.path}
            selected={!!item.path && !!isActive({ to: item.path })}
          >
            <ListItemIcon
              sx={(t) => ({
                width: fullWidth ? 40 : "100%",
                minWidth: fullWidth ? 40 : "100%",
                display: "flex",
                justifyContent: "center",
                color:
                  t.palette.mode === "dark"
                    ? "inherit"
                    : isActive({ to: item.path as string }) && !!item.path
                      ? t.palette.primary.main
                      : "GrayText",
              })}
            >
              {item.icon && <item.icon size={"1.2rem"} />}
            </ListItemIcon>

            <Typography
              textOverflow={"ellipsis"}
              sx={{
                overflow: "hidden",
                display: fullWidth ? "block" : "none",
              }}
              flexGrow={1}
              fontWeight={500}
              variant="body2"
            >
              {t(item.label)}
            </Typography>

            {fullWidth &&
              item.children &&
              (open ? (
                <KeyboardArrowDownRoundedIcon />
              ) : (
                <KeyboardArrowLeftRoundedIcon className="rtl:-scale-100" />
              ))}
          </ListItemButton>
        </Tooltip>

        {!!item.children?.length && (
          <Collapse in={!!open} timeout="auto" sx={{ width: "100%" }}>
            <DashboardNavLinks
              ref={listRef}
              listProps={{
                sx: {
                  overflow: "hidden",
                  px: 0.5,
                  transition: "0.35s",
                  width: "100%",
                  bgcolor: (t) => t.palette.background.default,
                  border: (t) => `1px ${t.palette.divider} solid`,
                  borderTop: (t) =>
                    isActive({ to: item.path as string })
                      ? undefined
                      : `1px ${t.palette.divider} solid`,
                  borderRadius: isActive({ to: item.path as string })
                    ? "0 0 0.2rem 0.2rem"
                    : "0.2rem",
                },
              }}
              fullWidth={fullWidth}
              items={
                item.children?.filter((it) =>
                  canAccessNavLink(it.path as string)
                ) ?? []
              }
            ></DashboardNavLinks>
          </Collapse>
        )}
      </ListItem>
    </>
  );
};

const DashboardNavLinks = forwardRef(
  (props: Props, ref: React.Ref<HTMLElement>) => {
    return (
      props.items.length > 0 && (
        <List
          component="ul"
          ref={ref}
          {...props.listProps}
          sx={{
            width: "100%",
            px: 2,
            ...props.listProps?.sx,
            display: "flex",
            flexDirection: "column",
            gap: 0.5,
          }}
        >
          {Object.entries(
            Object.groupBy(props.items, (item) => item.group ?? "other")
          ).map(([itemGroup, items], i) => (
            <Fragment key={itemGroup + i}>
              <Box
                px={props.fullWidth ? 2 : 0}
                display={"flex"}
                justifyContent={props.fullWidth ? "flex-start" : "center"}
              >
                <Typography
                  color="textDisabled"
                  variant="caption"
                  textAlign={"center"}
                  fontSize={10}
                >
                  {t(itemGroup)}
                </Typography>
              </Box>
              {items?.map((item, i) => (
                <DashboardNavLink
                  key={item.label + item.path + i}
                  item={item}
                  {...props}
                ></DashboardNavLink>
              ))}
            </Fragment>
          ))}
        </List>
      )
    );
  }
);

DashboardNavLinks.displayName = "DashboardNavLinks";

export default DashboardNavLinks;
