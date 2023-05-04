import { Box, Container, Typography } from "@mui/material";
import styles from "../../styles/policyhero.module.css";
export default function PolicyHeroSec() {
  return (
    <>
      {/*  */}
      <Box className={styles["hero-bg"]}>
        <Container className="main">
          <Box>
            <Typography className={styles["heading"]} variant="h1">
              Policy & Regulation Programme
            </Typography>
          </Box>
          <Box>
            <Typography className={styles["description"]}>
              Making the voice of the FinTech sector heard across key policy
              areas. Supporting the UK’s world-leading regulatory regime.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* */}
      <Box className={styles["hero-bg-2"]}>
        <Container className="main">
          <Typography className={styles["heading1"]} variant="h3">
            About the Policy & Regulation Programme
          </Typography>
          <Typography className={styles["description1"]}>
            We work with regulators and government to help ensure the voice of
            the FinTech sector is heard across key policy areas. Our mission is
            to ensure the UK remains a leading global FinTech ecosystem and the
            most attractive hub for setting up a FinTech business. Our policy
            work helps promote innovation in the UK, and supports our members as
            they navigate the shifting political and economic landscape. The
            input of our members is vital in helping us to ensure that we are
            representing the needs of an evolving sector.
          </Typography>
        </Container>
      </Box>
    </>
  );
}
