import { useSession, signIn, signOut } from "next-auth/react";
import { Button, Box, Typography } from "@mui/material";
export default function Home() {
  const session = useSession();
  console.log(session);
  if (session.data === null) {
    return (
      <>
        <Box sx={{ textAlign: "center" }}>
          <Button
            onClick={signIn}
            sx={{
              marginTop: "300px",
              backgroundColor: "#000",
            }}
            variant="contained"
          >
            Login With github or google
          </Button>
        </Box>
      </>
    );
  }
  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h6" sx={{ paddingTop: "300px" }}>
          WELCOME
        </Typography>
        <Button
          variant="contained"
          sx={{ marginTop: "30px", backgroundColor: "#000" }}
          onClick={signOut}
        >
          SIGN OUT
        </Button>
      </Box>
    </>
  );
}
