# image-with-text-component


A react native component that show image with text

## Features

- Pure JS.
- Compatible with both iOS and Android.
- Auto position. (Won't be covered or clipped by the edge of screen.)
- Zero configuration. (Options are needed of course or a loading indicator will show.)
- Highly customizable.

https://github.com/ManojKanth/image-with-text-component/blob/main/images/image1.png?raw=true

https://github.com/ManojKanth/image-with-text-component/blob/main/images/image2.png?raw=true

> if you didn't passed subtitle it will appear as second image
> if you passed subtitle it will appear as first image

if you want to show image from URI use imageUri. or show an image from project just use image

## Tech

Dillinger uses a number of open source projects to work properly:

- if you want to show image from URI use imageUri param
- to show a image from project just use image param
- how ever one of the params is required


## Installation


```sh
npm i image-with-text-component
```
## Example

Import this module:
```sh
import ProfileImageWithText from 'image-with-text-component';
```

Use as a component:
```sh
<ProfileImageWithText 
        title='Manojkanth' 
        title='Mobile dev' 
        imageUri='https://reactjs.org/logo-og.png' />
```



| Prop | Type | Optional | Default | Description |
| ------ | ------ | ------ | ------ | ------ |
| title | String | NO | empty | This is the header title of this component
| subTitle | String | YES | empty | This is the subtitle of this component. if you want to hide this field just ignore or pass empty string
| imageWidthConstant | Number | YES | 30 | this will set image Width and Height. NOTE: image width is equal to height
| imageUri | String | No | '' | use this params to so an image from URL
| image | String | No | '' | to show an image from project (Note: Please one of image or imageUri must be passed)
| profileImageContainerStyle | String | No | '' | style of Profile Image Container
| titleStyle | String | No | '' | style of title text
| subTitleStyle | String | No | '' | style of subtitle text

## Development

Any suggestion is welcome.

