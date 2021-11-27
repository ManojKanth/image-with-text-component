import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const ProfileImageWithText = ({
  title = '',
  subTitle = '',
  image,
  profileImageContainerStyle = styles.ProfilePictureRound,
  imageWidthConstant = 26,
  titleStyle = styles.titleStyle,
  subTitleStyle = styles.subTitleStyle,
}) => {
  const imageStyle = {
    width: imageWidthConstant,
    height: imageWidthConstant,
  };
  return (
    <View style={styles.FooterFirstContainer}>
      <View style={profileImageContainerStyle}>
        <Image
          style={imageStyle}
          source={{
            uri: image,
          }}
        />
      </View>
      <View style={styles.NameContainer}>
        <Text style={titleStyle}>{title}</Text>
        <Text style={subTitleStyle}>{subTitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  FooterFirstContainer: {flexDirection: 'row', alignItems: 'center'},
  ProfilePictureRound: {
    backgroundColor: '#D837BF',
    borderRadius: 13,
    width: 26,
    height: 26,
    overflow: 'hidden',
    marginRight: 4,
  },
  NameContainer: {
    paddingLeft: 5,
  },
  titleStyle: {
    fontSize: 12,
    color: '#9ba4b0',
  },
  subTitleStyle: {
    fontSize: 12,
    color: '#FFA300',
    opacity: 0.4,
    fontStyle: 'italic',
  },
  imageStyle: {
    width: 26,
    height: 26,
  },
});

export default ProfileImageWithText;
