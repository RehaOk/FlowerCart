import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addToCart, increaseItems, reduceItems } from "../redux/actions/cartActions";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Link from "@material-ui/core/Link";
import ToggleButton from "@material-ui/lab/ToggleButton";
import Hamburger from "../assets/hamburger.svg";
import Petal from "../assets/petal.svg";
import PromotionOne from "../assets/promotionOne.png";
import PromotionTwo from "../assets/promotionTwo.png";
import PromotionThree from "../assets/promotionThree.png";
import Chip from "@material-ui/core/Chip";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  gridWrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  gridContainer: {
    marginTop: "10px",
    width: "80%",
    marginBottom: "25px",
  },
  cardGrid: {
    marginBottom: "10px",
  },
  addToCartButton: {
    position: "relative",
    left: "50px",
    width: "242px",
    height: "40px",
    border: "1px solid #044DC3",
    borderRadius: "22px",
    opacity: 1,
    marginBottom: "10px",
  },
  decreaseButton: {
    position: "relative",
    float: "left",
    border: "1px solid #044DC3",
    width: "30px",
    height: "40px",
    marginBottom: "10px",
    marginLeft: "5px",
  },
  increaseButton: {
    position: "relative",
    float: "right",
    border: "1px solid #044DC3",
    width: "30px",
    height: "40px",
    marginBottom: "10px",
    marginRight: "5px",
  },
  quantityDisplay: {
    position: "relative",
    top: "7px",
    left: "94px",
  },
  breadcrumbs: {
    marginBottom: "10px",
  },
  promotionOne: {
    margin: "10px",
    height: "153px",
    background: "#FFEAE8 0% 0% no-repeat padding-box",
    borderRadius: "10px",
    opacity: 1,
  },
  promotionTwo: {
    margin: "10px",
    height: "153px",
    background: "#E8F1FF 0% 0% no-repeat padding-box",
    borderRadius: "10px",
    opacity: 1,
  },
  promotionThree: {
    margin: "10px",
    height: "153px",
    background: "#E2F7E1 0% 0% no-repeat padding-box",
    borderRadius: "10px",
    opacity: 1,
  },
  promotionText: {
    position: "relative",
    top: "20px",
    textAlign: "left",
    font: "normal normal 300 15px/15px Source Sans Pro",
    letterSpacing: "0px",
    color: "#707070",
    opacity: 1,
  },
  promotionChip: {
    position: "relative",
    top: "40px",
    backgroundColor: "white",
    borderColor: "white",
  },
  promotionChipOne: {
    position: "relative",
    top: "65px",
    backgroundColor: "white",
    borderColor: "white",
  },
});

const Index = (props) => {
  const [products, setProducts] = useState(props.items);
  const [quantity, setQuantity] = useState([]);
  const [category, setCategory] = React.useState("all");
  const [searchValue, setSearchValue] = useState("");

  const onSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleCategoryChange = (event, newCategory) => {
    setCategory(newCategory);
  };

  useEffect(() => {
    let quantityArr = [];
    products.forEach(() => {
      quantityArr.push(0);
    });
    setQuantity(quantityArr);
  }, []);

  useEffect(() => {
    const filteredProducts = props.items.filter((product) => {
      if (product.category === category || category === "all") {
        if (searchValue.length >= 3) {
          return product.name.toLowerCase().includes(searchValue.toLowerCase());
        } else {
          return product;
        }
      } else {
        return false;
      }
    });
    setProducts(filteredProducts);
  }, [searchValue, category]);

  const decreaseItemQuantity = (id) => {
    let newQuantities = [...quantity];
    newQuantities[id] = newQuantities[id] - 1;
    props.reduceItems(id);
    if (newQuantities[id] === 0) {
      disableItemAddition(id);
    }
    setQuantity(newQuantities);
  };

  const increaseItemQuantity = (id) => {
    let newQuantities = [...quantity];
    newQuantities[id] = newQuantities[id] + 1;
    if (newQuantities[id] === 1) {
      props.addToCart(id, newQuantities[id]);
    } else {
      props.increaseItems(id);
    }
    setQuantity(newQuantities);
  };

  const classes = useStyles();
  const [itemAdditionAvalibleIds, setItemAdditionAvalibleIds] = useState([]);

  const enableItemAddition = (itemId) => {
    setItemAdditionAvalibleIds([...itemAdditionAvalibleIds, itemId]);
    increaseItemQuantity(itemId);
  };

  const disableItemAddition = (itemId) => {
    setItemAdditionAvalibleIds(itemAdditionAvalibleIds.filter((id) => id !== itemId));
  };

  const CATEGORY_MAP = {
    all: "Tüm Kategoriler",
    electronic: "Elektronik",
    home: "Ev ve Yaşam",
    pet: "Evcil Hayvan",
    book: "Kitap",
    toy: "Oyuncak",
    sport: "Spor",
    flower: "Çiçek",
    gift: "Hediye",
    fashion: "Moda, Aksesuar",
    office: "Ofis, Kırtasiye",
    parfume: "Parfüm",
    personalCare: "Kişisel Bakım",
    petshop: "PetShop",
  };
  return (
    <>
      <Header
        searchValue={searchValue}
        onSearchChange={onSearchChange}
        numberOfItemsInTheCart={props.addedItems.length}
        totalAmount={props.totalAmount}
      />
      <div className={classes.gridWrapper}>
        <Grid className={classes.gridContainer} container spacing={0}>
          <Grid item xs={12} md={12} lg={12}>
            <Breadcrumbs
              className={classes.breadcrumbs}
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb">
              <Link color="inherit" href="#">
                Ciceksepeti Market
              </Link>
              <Link color="inherit" href="#">
                Istanbul
              </Link>
            </Breadcrumbs>
          </Grid>
          <Grid style={{ marginBottom: "10px" }} item xs={12} md={12} lg={12}>
            <img src={Hamburger} alt={"hamburger menü"} />
            <span style={{ color: "#044dc3", marginLeft: "10px" }}>Kategoriler</span>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <ToggleButtonGroup
              value={category}
              exclusive
              onChange={handleCategoryChange}
              aria-label="categories">
              <ToggleButton value="all" aria-label="all">
                {CATEGORY_MAP.all}
              </ToggleButton>
              <ToggleButton value="electronic" aria-label="electronic">
                {CATEGORY_MAP.electronic}
              </ToggleButton>
              <ToggleButton value="home" aria-label="home">
                {CATEGORY_MAP.home}
              </ToggleButton>
              <ToggleButton value="pet" aria-label="pet">
                {CATEGORY_MAP.pet}
              </ToggleButton>
              <ToggleButton value="book" aria-label="book">
                {CATEGORY_MAP.book}
              </ToggleButton>
              <ToggleButton value="toy" aria-label="toy">
                {CATEGORY_MAP.toy}
              </ToggleButton>
              <ToggleButton value="sport" aria-label="sport">
                {CATEGORY_MAP.sport}
              </ToggleButton>
              <ToggleButton value="flower" aria-label="flower">
                {CATEGORY_MAP.flower}
              </ToggleButton>
              <ToggleButton value="gift" aria-label="gift">
                {CATEGORY_MAP.gift}
              </ToggleButton>
              <ToggleButton value="fashion" aria-label="fashion">
                {CATEGORY_MAP.fashion}
              </ToggleButton>
              <ToggleButton value="office" aria-label="office">
                {CATEGORY_MAP.office}
              </ToggleButton>
              <ToggleButton value="parfume" aria-label="parfume">
                {CATEGORY_MAP.parfume}
              </ToggleButton>
              <ToggleButton value="personalCare" aria-label="personalCare">
                {CATEGORY_MAP.personalCare}
              </ToggleButton>
              <ToggleButton value="petshop" aria-label="petshop">
                {CATEGORY_MAP.petshop}
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <img src={Petal} />
            {CATEGORY_MAP[category]}
          </Grid>
          {products &&
            products.map((item) => {
              return (
                <Grid className={classes.cardGrid} item xs={12} md={3}>
                  <Card className={classes.root}>
                    <CardMedia className={classes.media} image={item.img} title={item.name} />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {item.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {item.desc}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {item.price} TL
                      </Typography>
                    </CardContent>
                    {itemAdditionAvalibleIds.includes(item.id) ? (
                      <>
                        <Button
                          className={classes.decreaseButton}
                          onClick={() => decreaseItemQuantity(item.id)}
                          variant="outlined"
                          color="primary">
                          -
                        </Button>
                        <span className={classes.quantityDisplay}>{quantity[item.id]}</span>
                        <Button
                          className={classes.increaseButton}
                          onClick={() => increaseItemQuantity(item.id)}
                          variant="outlined"
                          color="primary">
                          +
                        </Button>
                      </>
                    ) : (
                      <Button
                        className={classes.addToCartButton}
                        onClick={() => enableItemAddition(item.id)}
                        variant="outlined"
                        color="primary">
                        Sepete Ekle
                      </Button>
                    )}
                  </Card>
                </Grid>
              );
            })}
        </Grid>
        <Grid container className={classes.gridContainer} spacing={2}>
          <Grid item className={classes.promotionOne} xs={12} md={3}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <img src={PromotionOne} />
              </Grid>
              <Grid item xs={12} md={6}>
                <span className={classes.promotionText}>75TL Üzerine Teslimat Ücreti Bizden</span>{" "}
                <Chip
                  className={classes.promotionChipOne}
                  label="Detaylı Bilgi"
                  color="secondary"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.promotionTwo} xs={12} md={3}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <img src={PromotionTwo} />
              </Grid>
              <Grid item xs={12} md={6}>
                <span className={classes.promotionText}>
                  Hediye Kategorisi için Sepette %15 indirim
                </span>{" "}
                <Chip
                  className={classes.promotionChip}
                  label="Hediye Ürünleri"
                  color="secondary"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.promotionThree} xs={12} md={3}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <img src={PromotionThree} />
              </Grid>
              <Grid item xs={12} md={6}>
                <span className={classes.promotionText}>
                  Kırtasiye Kategorisi için Sepette %15 indirim
                </span>{" "}
                <Chip
                  className={classes.promotionChip}
                  label="Detaylı Bilgi"
                  color="secondary"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
  console.log({
    items: state.items,
    addedItems: state.addedItems,
    totalAmount: state.total,
  });
  return {
    items: state.items,
    addedItems: state.addedItems,
    totalAmount: state.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id, itemQuantity) => {
      dispatch(addToCart(id, itemQuantity));
    },
    increaseItems: (id) => {
      dispatch(increaseItems(id));
    },
    reduceItems: (id) => {
      dispatch(reduceItems(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
