import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import PropTypes from 'prop-types';

const ProfileImageWithText = ({
  title = '',
  subTitle = '',
  image = '',
  imageWidthConstant = 30,
  profileImageContainerStyle = {
    backgroundColor: '#fff',
    borderRadius: imageWidthConstant / 2,
    width: imageWidthConstant,
    height: imageWidthConstant,
    overflow: 'hidden',
    marginRight: 4,
    borderWidth: 1,
    borderColor: '#000',
  },
  titleStyle = styles.titleStyle,
  subTitleStyle = styles.subTitleStyle,
  imageUri = ''
}) => {
  const imageStyle = {
    width: imageWidthConstant,
    height: imageWidthConstant,
  };

  const imageUriString = {
    uri: imageUri
  }
  return (
    <View style={styles.FooterFirstContainer}>
      <View style={profileImageContainerStyle}>
        <Image
          style={imageStyle}
          source={image !== '' ? image :  imageUriString}
        />
      </View>
      <View style={styles.NameContainer}>
        <Text style={titleStyle}>{title}</Text>
        <Text style={subTitleStyle}>{subTitle}</Text>
      </View>
    </View>
  );
};


ProfileImageWithText.propTypes= {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  image: PropTypes.string,
  profileImageContainerStyle: PropTypes.object,
  imageWidthConstant: PropTypes.number,
  titleStyle: PropTypes.object,
  subTitleStyle: PropTypes.object,
  imageUriString: PropTypes.string
}

const styles = StyleSheet.create({
  FooterFirstContainer: {flexDirection: 'row', alignItems: 'center'},
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
