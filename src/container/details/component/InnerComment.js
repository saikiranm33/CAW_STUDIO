import React from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import {FONT_WEIGHT_MAX} from '../../../utility/fontWeight';
import {FONT_LARGE} from '../../../utility/textSize';

const InnerComment = props => {
  const {data} = props;

  if (data) {
    return (
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          const {name, title} = item;
          return (
            <View key={index} style={styles.conatiner}>
              <View style={styles.subContainer}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subTitle}>{title}</Text>
              </View>
              <Image
                style={styles.image}
                source={require('../../../assets/images/profile_img.jpeg')}
              />
            </View>
          );
        }}
        keyExtractor={(item, index) => index}
      />
    );
  }

  return null;
};

const styles = StyleSheet.create({
  conatiner: {
    marginHorizontal: 20,
    flexDirection: 'row',
    paddingBottom: 10,
    width: '85%',
  },
  subContainer: {
    backgroundColor: 'white',

    paddingVertical: 10,
  },
  title: {
    padding: 5,
    fontSize: FONT_LARGE,
    fontWeight: FONT_WEIGHT_MAX,
  },
  subTitle: {
    paddingHorizontal: 10,
  },
  image: {
    marginLeft: 10,
    width: 30,
    height: 30,
    borderRadius: 25,
  },
});

export default InnerComment;
