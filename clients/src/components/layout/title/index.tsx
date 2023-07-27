import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";
import { logo, yariga, propLogo } from "assets";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src={propLogo} alt="PropertyLogo" width="28px" />
        ) : (
          <img src={propLogo} alt="PropertyLogo" width="70px" />
        )}
      </Link>
    </Button>
  );
};
