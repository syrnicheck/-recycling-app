import React, { useRef, useState } from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

const { width } = Dimensions.get("window");

const MyCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const data = [
    {
      id: 1,
      image: require("../assets/1.jpeg"),
    },
    {
      id: 2,
      image: require("../assets/2.jpeg"),
    },
    {
      id: 3,
      image: require("../assets/3.jpeg"),
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.carouselItem}>
        <Image source={item.image} style={styles.carouselImage} />
      </View>
    );
  };

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        layout={"default"}
        ref={carouselRef}
        data={data}
        renderItem={renderItem}
        sliderWidth={width * 1.2}
        itemWidth={width * 0.8}
        onSnapToItem={(index) => setActiveIndex(index)}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeIndex}
        dotStyle={styles.dotStyle}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
  },
  carouselItem: {
    width: width * 0.8,
    height: 350,
    backgroundColor: "#fff",
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowRadius: 4,
    elevation: 5,
  },
  carouselImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "stretch",
    shadowColor: "#000",
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: "#61b988",
  },
});

export default MyCarousel;
