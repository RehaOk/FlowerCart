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
                  alt="mobil kullanım resmi"
                />
                <img
                  className={classes.barcodeImagePosition}
                  src={BarcodeImage}
                  alt="barkod resmi"
                />
                <p className={classes.qrDownloadTextTitle}>
                  <b>Çiçek Sepeti Mobil Uygulmayı İndirin</b>
                </p>
                <p className={classes.qrDownloadText}>Mobil uygulmayı QR kod ile indirin.</p>
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
                CicekSepeti.com olarak kişisel verilerinizin gizliliğini önemsiyoruz. 6698 sayılı
                Kişisel Verilerin Korunması Kanunu kapsamında oluşturduğumuz aydınlatma metnine
                <u> buradan</u> ulaşabilirsiniz.
              </p>
            </Grid>
            <Grid className={classes.footerGrid} item xs={12} sm={2}>
              <Box className={classes.footerTitle}>Faydalı Bilgiler</Box>
              <Box>
                <Link href="/" color="inherit">
                  Çiçek Bakımı
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Çiçek Eşliğinde Notlar
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Çiçek Anlamları
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Özel Günler
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Mevsimlere Göre Çiçekler
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  BonnyFood Saklama Koşulları
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Site Haritası
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
                  ÇiçekSepeti'nde Satış Yap
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Kurumsal Müşterilerimiz
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Reklamlarımız
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Basında Biz
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
              <Box className={classes.footerTitle}>İletişim</Box>
              <Box>
                <Link href="/" color="inherit">
                  Bize Ulaşın
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Sıkça Sorulan Sorular
                </Link>
              </Box>
            </Grid>
            <Grid className={classes.footerGrid} item xs={12} sm={2}>
              <Box className={classes.footerTitle}>Gizlilik Sözleşmesi</Box>
              <Box>
                <Link href="/" color="inherit">
                  Mesafeli Satış Sözleşmesi
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Bilgi Toplumu Hizmetleri
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Gizlilik Sözleşmesi
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Ödeme Seçenekleri
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
                Türkiyenin en büyük online çiçek sitesi ÇiçekSepeti ile sevdiklerinizi mutlu etmek
                çok kolay! Çiçek göndermenin ve “Mutlu etmenin adresi” Çiçek Sepeti ile
                sevdiklerinize özel günlerde online çiçek gönderebilirsiniz. Geniş çiçekçi ağı
                sayesinde çiçek siparişleriniz Türkiye’nin dört bir yanına hızlı ve sorunsuz şekilde
                gönderilir. Taze çiçeklerle hazırlanan mis kokulu şık çiçek aranjmanları arasından
                beğendiğiniz ürünü seçerek, hızlı bir şekilde online sipariş verebilirsiniz.
                Sevdiklerinizin doğum günü, yıldönümü gibi mutlu günlerinde onların sevincine ortak
                olmak için yapmanız gereken sadece birkaç tıkla sipariş vermek. Sevgililer Günü,
                Kadınlar Günü, Anneler Günü gibi özel günlerde de çiçek, hediye ve lezzetli
                bonnyFood ürünleriyle sevdiklerinizi mutlu edebilirsiniz. Çünkü mutlu etmenin
                adresi; ÇiçekSepeti.
              </p>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box className={classes.footerCopyrightNotice}>
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <p>Copyright © 2019 Çiçek Sepeti İnternet Hizmetleri A.Ş</p>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};
export default Footer;
