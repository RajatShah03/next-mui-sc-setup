import { Fab } from "@mui/material";
import { SxProps } from "@mui/system";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

type OVERRIDE = "sc" | "sx";

const fabStyles = {
  position: "fixed",
  bottom: 8,
  right: 8,
  zIndex: "tooltip",
} as SxProps;

const Home = (): JSX.Element => {
  const router = useRouter();
  const [override, setOverride] = useState<OVERRIDE>(undefined);

  useEffect(() => {
    setOverride(router.query.override as OVERRIDE);
  }, [router.query]);

  return typeof override !== "undefined" ? (
    <div>
      <Fab
        onClick={() => setOverride(override === "sc" ? "sx" : "sc")}
        sx={fabStyles}
        color="secondary"
      >
        {override}
      </Fab>
      <Layout override={override} />
    </div>
  ) : null;
};

export default Home;
