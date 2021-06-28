import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import SearchIcon from "@material-ui/icons/Search";
import BrandIcon from "../../assets/logo-new-ciceksepeti.png";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import LinearProgress from "@material-ui/core/LinearProgress";
import Thunder from "../../assets/thunder.svg";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    left: "300px",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "25px",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    zIndex: "999",
    [theme.breakpoints.down("lg")]: {
      top: "18px",
    },
    [theme.breakpoints.down("md")]: {
      top: "18px",
    },
    [theme.breakpoints.down("sm")]: {
      top: "84px",
    },
  },
  inputRoot: {
    position: "relative",
    background: "#F7F7F7 0% 0% no-repeat padding-box",
    border: "2px solid #EDF1F2",
    borderRadius: "28px",
    opacity: "1",
    minWidth: "100%",
    height: "40px",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  appbar: {
    backgroundColor: "white",
    boxShadow: "none",
  },
  cartButton: {
    position: "relative",
    color: "white",
    textAlign: "start",
    width: "120px",
    height: "40px",
    background: "#044DC3 0% 0% no-repeat padding-box",
    borderRadius: "28px",
    opacity: 1,
  },
  cartButtonGrid: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  brandIconGrid: {
    display: "flex",
    justifyContent: "flex-start",
  },
  brandIcon: {
    left: "153px",
    position: "relative",
    top: "4px",
  },
  searchBarGrid: {
    alignSelf: "center",
  },
  customHeader: {
    top: "91px",
    left: "0px",
    width: "1920px",
    height: "74px",
    backgroundColor: "#044dc3",
    opacity: 1,
  },
  customHeaderGrid: {
    margin: "0px !important",
  },
  customHeaderText: {
    top: "83px",
    left: "173px",
    position: "absolute",
    color: "white",
  },
  linearProgress: {
    top: "10px",
  },
}));

const CartButtonTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#f54257",
    color: "white",
    width: "343px",
    height: "49px",
    fontSize: theme.typography.pxToRem(12),
    left: "-105px",
  },
  arrow: {
    left: "252px !important",
    color: "#f54257",
  },
}))(Tooltip);

const Header = (props) => {
  const classes = useStyles();
  const normalise = (value) => {
    if ((value * 100) / 500 >= 100) {
      return 100;
    } else {
      return (value * 100) / 500;
    }
  };
  return (
    <div className={classes.grow}>
      <AppBar
        classes={{
          root: classes.appbar,
        }}
        position="static">
        <Toolbar>
          <Grid container>
            <Grid className={classes.brandIconGrid} item xs={12} md={4}>
              <img className={classes.brandIcon} src={BrandIcon} alt="logo" />
            </Grid>
            <Grid className={classes.searchBarGrid} item xs={12} md={6}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                value={props.searchValue}
                onChange={props.onSearchChange}
                placeholder="Ürün Ara"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </Grid>
            <Grid className={classes.cartButtonGrid} item xs={12} md={2}>
              <Badge badgeContent={props.numberOfItemsInTheCart} color="secondary">
                <CartButtonTooltip
                  open={true}
                  arrow
                  title={
                    <React.Fragment>
                      {normalise(props.totalAmount) === 100 ? (
                        <span>Kargonuz Bedava</span>
                      ) : (
                        <span>
                          <img src={Thunder} />
                          {" 50 TL "}ürün daha ekleyin kargo bedava
                        </span>
                      )}
                      <LinearProgress
                        className={classes.linearProgress}
                        variant="determinate"
                        value={normalise(props.totalAmount)}
                      />
                    </React.Fragment>
                  }>
                  <Button className={classes.cartButton} variant="contained" color="primary">
                    <ShoppingCartOutlinedIcon />
                    Sepetim
                  </Button>
                </CartButtonTooltip>
              </Badge>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.customHeaderGrid} spacing={3}>
        <Grid className={classes.customHeader} item xs={12}>
          <Typography className={classes.customHeaderText} variant="h5">
            Çiçek Sepeti H1
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
