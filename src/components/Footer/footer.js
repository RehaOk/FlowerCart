import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import MobileImage from "../../assets/mobileImage.png";
import BarcodeImage from "../../assets/barcodeImage.png";
import AppStore from "../../assets/appStore.svg";
import GooglePlay from "../../assets/googlePlay.svg";
import Logo from "../../assets/logo-new-ciceksepeti.png";
import Facebook from "../../assets/facebook.svg";
import Insta from "../../assets/insta.svg";
import Pen from "../../assets/pen.svg";
import Twitter from "../../assets/twitter.svg";
import YouTube from "../../assets/youtube.svg";

const useStyles = makeStyles({
  footerMainBox: {
    backgroundColor: "#F2F2F2",
    color: "Black",
    height: "1060px",
  },
  mobileAppContainer: {
    position: "relative",
    marginTop: "146px",
    marginBottom: "50px",
    backgroundColor: "white",
    borderRadius: "111px",
    height: "222px",
  },
  mobileImagePosition: {
    position: "absolute",
    left: "320px",
    bottom: "0px",
  },
  barcodeImagePosition: {
    position: "absolute",
    left: "700px",
    top: "40px",
  },
  qrDownloadTextTitle: {
    position: "absolute",
    left: "780px",
    top: "40px",
  },
  qrDownloadText: {
    position: "absolute",
    left: "780px",
    top: "70px",
  },
  googlePlayPosition: {
    position: "absolute",
    left: "700px",
    top: "130px",
  },
  appStorePosition: {
    position: "absolute",
    left: "900px",
    top: "130px",
  },
  footerFirstPartGrid: {
    borderRight: "2px dotted #b2b2b2",
  },
  footerFirstPart: {
    position: "relative",
  },
  footerFirstPartLogoMargin: {
    marginRight: "20px",
  },
  footerFirstPartText: {
    marginTop: "10px",
    textAlign: "left",
    font: "normal normal normal 15px/22px Source Sans Pro",
    letterSpacing: "0px",
    color: "#000000",
    opacity: 1,
  },
  footerTitle: {
    color: "#044DC3",
  },
  footerGrid: {
    textAlign: "center",
  },
  footerParagraph: {
    textAlign: "center",
    marginTop: "60px",
  },
  footerCopyrightNotice: {
    textAlign: "center",
    backgroundColor: "#E6E6E6",
    color: "Black",
    height: "80px",
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <footer>
      <Box className={classes.footerMainBox}>
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <div className={classes.mobileAppContainer}>
                <img
                  className={classes.mobileImagePosition}
                  src={MobileImage}
                  alt="mobil kullan??m resmi"
                />
                <img
                  className={classes.barcodeImagePosition}
                  src={BarcodeImage}
                  alt="barkod resmi"
                />
                <p className={classes.qrDownloadTextTitle}>
                  <b>??i??ek Sepeti Mobil Uygulmay?? ??ndirin</b>
                </p>
                <p className={classes.qrDownloadText}>Mobil uygulmay?? QR kod ile indirin.</p>
                <img
                  className={classes.googlePlayPosition}
                  src={GooglePlay}
                  alt="google play resmi"
                />
                <img className={classes.appStorePosition} src={AppStore} alt="app store resmi" />
              </div>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid className={classes.footerFirstPartGrid} item xs={12} sm={4}>
              <div className={classes.footerFirstPart}>
                <img src={Logo} />
              </div>
              <img className={classes.footerFirstPartLogoMargin} src={Facebook} />
              <img className={classes.footerFirstPartLogoMargin} src={Twitter} />
              <img className={classes.footerFirstPartLogoMargin} src={Insta} />
              <img className={classes.footerFirstPartLogoMargin} src={YouTube} />
              <img className={classes.footerFirstPartLogoMargin} src={Pen} />
              <p className={classes.footerFirstPartText}>
                CicekSepeti.com olarak ki??isel verilerinizin gizlili??ini ??nemsiyoruz. 6698 say??l??
                Ki??isel Verilerin Korunmas?? Kanunu kapsam??nda olu??turdu??umuz ayd??nlatma metnine
                <u> buradan</u> ula??abilirsiniz.
              </p>
            </Grid>
            <Grid className={classes.footerGrid} item xs={12} sm={2}>
              <Box className={classes.footerTitle}>Faydal?? Bilgiler</Box>
              <Box>
                <Link href="/" color="inherit">
                  ??i??ek Bak??m??
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  ??i??ek E??li??inde Notlar
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  ??i??ek Anlamlar??
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  ??zel G??nler
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Mevsimlere G??re ??i??ekler
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  BonnyFood Saklama Ko??ullar??
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Site Haritas??
                </Link>
              </Box>
            </Grid>
            <Grid className={classes.footerGrid} item xs={12} sm={2}>
              <Box className={classes.footerTitle}>Kurumsal</Box>
              <Box>
                <Link href="/" color="inherit">
                  Kariyer
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  ??i??ekSepeti'nde Sat???? Yap
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Kurumsal M????terilerimiz
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Reklamlar??m??z
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Bas??nda Biz
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Kampanyalar
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Vizyonumuz
                </Link>
              </Box>
            </Grid>
            <Grid className={classes.footerGrid} item xs={12} sm={2}>
              <Box className={classes.footerTitle}>??leti??im</Box>
              <Box>
                <Link href="/" color="inherit">
                  Bize Ula????n
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  S??k??a Sorulan Sorular
                </Link>
              </Box>
            </Grid>
            <Grid className={classes.footerGrid} item xs={12} sm={2}>
              <Box className={classes.footerTitle}>Gizlilik S??zle??mesi</Box>
              <Box>
                <Link href="/" color="inherit">
                  Mesafeli Sat???? S??zle??mesi
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Bilgi Toplumu Hizmetleri
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Gizlilik S??zle??mesi
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  ??deme Se??enekleri
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Hesap Bilgileri
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <p className={classes.footerParagraph}>
                T??rkiyenin en b??y??k online ??i??ek sitesi ??i??ekSepeti ile sevdiklerinizi mutlu etmek
                ??ok kolay! ??i??ek g??ndermenin ve ???Mutlu etmenin adresi??? ??i??ek Sepeti ile
                sevdiklerinize ??zel g??nlerde online ??i??ek g??nderebilirsiniz. Geni?? ??i??ek??i a????
                sayesinde ??i??ek sipari??leriniz T??rkiye???nin d??rt bir yan??na h??zl?? ve sorunsuz ??ekilde
                g??nderilir. Taze ??i??eklerle haz??rlanan mis kokulu ????k ??i??ek aranjmanlar?? aras??ndan
                be??endi??iniz ??r??n?? se??erek, h??zl?? bir ??ekilde online sipari?? verebilirsiniz.
                Sevdiklerinizin do??um g??n??, y??ld??n??m?? gibi mutlu g??nlerinde onlar??n sevincine ortak
                olmak i??in yapman??z gereken sadece birka?? t??kla sipari?? vermek. Sevgililer G??n??,
                Kad??nlar G??n??, Anneler G??n?? gibi ??zel g??nlerde de ??i??ek, hediye ve lezzetli
                bonnyFood ??r??nleriyle sevdiklerinizi mutlu edebilirsiniz. ????nk?? mutlu etmenin
                adresi; ??i??ekSepeti.
              </p>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box className={classes.footerCopyrightNotice}>
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <p>Copyright ?? 2019 ??i??ek Sepeti ??nternet Hizmetleri A.??</p>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};
export default Footer;
