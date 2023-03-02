import Layout from '../components/Layout'
import { Container, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  background: theme.palette.primary.main,
  "& a": {
    color: "white",
    textDecoration: "none",
  },
}));

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Container maxWidth="sm">
      <Typography variant="h5" align="center" gutterBottom  sx={ {marginTop: 5, marginBottom: 2}}>
        GUÍA DE LA NORMA ISO/IEC 27002 PARA LA GESTIÓN DE LA SEGURIDAD DE LA INFORMACIÓN
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CustomPaper>
            <a href="/punto1">POLÍTICA PARA EL DESARROLLO SEGURO </a>
          </CustomPaper>
        </Grid>
        <Grid item xs={12}>
          <CustomPaper>
            <a href="/punto2"> PROCEDIMIENTOS DE CONTROL DE CAMBIOS DEL SISTEMA </a>
          </CustomPaper>
        </Grid>
        <Grid item xs={12}>
          <CustomPaper>
            <a href="/punto3">REVISIÓN TÉCNICA DE APLICACIONES TRAS CAMBIOS DE PLATAFORMA OPERATIVA </a>
          </CustomPaper>
        </Grid>
        <Grid item xs={12}>
          <CustomPaper>
            <a href="punto4">RESTRICCIONES A LOS CAMBIOS EN LOS PAQUETES DE SOFTWARE </a>
          </CustomPaper>
        </Grid>
        <Grid item xs={12}>
          <CustomPaper>
            <a href="punto5">PRINCIPIOS SEGUROS DE INGENIERÍA DE SISTEMAS</a>
          </CustomPaper>
        </Grid>
        <Grid item xs={12}>
          <CustomPaper>
            <a href="punto6">AMBIENTE DE DESARROLLO SEGURO</a>
          </CustomPaper>
        </Grid>
        <Grid item xs={12}>
          <CustomPaper>
            <a href="punto7">DESARROLLO SUBCONTRATADO</a>
          </CustomPaper>
        </Grid>
        <Grid item xs={12}>
          <CustomPaper>
            <a href="punto8">PRUEBAS DE SEGURIDAD DEL SISTEMA</a>
          </CustomPaper>
        </Grid>
        <Grid item xs={12}>
          <CustomPaper>
            <a href="punto9">PRUEBAS DE ACEPTACIÓN DEL SISTEMA</a>
          </CustomPaper>
        </Grid>
      </Grid>
    </Container>
  </Layout>
)

export default IndexPage
