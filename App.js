import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ListView,
  Alert,
  Button,
  ScrollView
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import * as Animatable from 'react-native-animatable';
import Carousel from 'react-native-snap-carousel';
import { ImagePicker } from 'expo';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

class UploadScreen extends React.Component {
  static navigationOptions = {
    title: 'Upload',
    tabBarIcon: () => (
      <Image source={require('./assets/icons/upload.png')}
      style={NavStyle.icon}
    />
  )
}

constructor(){
  super();
  this.state = {
    image: null,
  }
}

render() {
  let { image } = this.state;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Pick an image from camera roll"
        onPress={this._pickImage}
      />
      {image &&
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>
    )
  }
  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
}


class BookmarkScreen extends React.Component {
  static navigationOptions = {
    title: 'Explore',
    tabBarIcon: () => (
      <Image source={require('./assets/icons/bookmark.png')}
      style={NavStyle.icon}
    />
  )

  };
  render() {
    return (
    <View style={BookmarkStyles.background}>
      <ScrollView vertical={true} showsHorizontalScrollIndicator={false}>
      <View>
      <View>
      <Image source={require('./images/DG2015-san-francisco.png')} style={BookmarkStyles.post}/>
      </View>
      <View>
      <Image source={require('./images/DG2015-san-francisco.png')} style={BookmarkStyles.post}/>
      </View>
      <View>
      <Image source={require('./images/DG2015-san-francisco.png')} style={BookmarkStyles.post}/>
      </View>
      <View>
      <Image source={require('./images/DG2015-san-francisco.png')} style={BookmarkStyles.post}/>
      </View>
    </View>
      </ScrollView>
    </View>
    )
  }
}


const BookmarkStyles = StyleSheet.create({
  post:{
    marginTop: 5,
    marginBottom: 5,
  },
  background: {
    backgroundColor: 'white'
  }
  // infoContainer: {
  //   display: 'flex',
  //   padding: 20
  // },
  // image:{
  //   height:275,
  //   width:275
  // },
  // locationName: {
  //   fontSize: 20,
  //   marginTop: 10,
  //   marginBottom: 10
  // },
  // caption: {
  //   marginTop: 10,
  //   fontSize: 12,
  //   marginBottom: 10
  // }
})

class ExploreScreen extends React.Component {
  static navigationOptions = {
    title: 'Explore',
    tabBarIcon: () => (
      <Image source={require('./assets/icons/explore.png')}
      style={NavStyle.icon}
    />
  )

};

render() {
  return (
    <ScrollView>
      <View style={ExploreStyles.exploreContainer}>
        <View>
          <Text style={ExploreStyles.Category}>Food</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={ExploreStyles.categoryRow}>
              <Image source={require('./images/example_post.jpeg')} style={{width: 125, height: 125}}/>
              <Image source={require('./images/example_post.jpeg')} style={{width: 125, height: 125}}/>
              <Image source={require('./images/example_post.jpeg')} style={{width: 125, height: 125}}/>
            </View>
          </ScrollView>
        </View>
        <View>
          <Text style = {ExploreStyles.Category}>Museums</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={ExploreStyles.categoryRow}>
              <Image source={require('./images/example_post.jpeg')} style={{width: 125, height: 125}}/>
              <Image source={require('./images/example_post.jpeg')} style={{width: 125, height: 125}}/>
              <Image source={require('./images/example_post.jpeg')} style={{width: 125, height: 125}}/>
            </View>
          </ScrollView>
        </View>
        <View >
          <Text style = {ExploreStyles.Category}>Shopping</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={ExploreStyles.categoryRow}>
              <Image source={require('./images/example_post.jpeg')} style={{width: 125, height: 125}}/>
              <Image source={require('./images/example_post.jpeg')} style={{width: 125, height: 125}}/>
              <Image source={require('./images/example_post.jpeg')} style={{width: 125, height: 125}}/>
            </View>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  )
}
}


class UserProfile extends React.Component{
  static navigationOptions = {
    title: 'Profile',
    tabBarIcon: () => (
      <Image source={require('./assets/icons/user.png')}
      style={NavStyle.icon}
    />
  )

};
render() {
  return (
    <ParallaxScrollView
      parallaxHeaderHeight={100}
      fadeOutParallaxForeground={false}
      renderBackground={() => (
       <View style={userProfile.container}>
          <Image source={require('./assets/icons/parallax.jpg')}/>
        </View>
      )}>
      <Image source={require('./assets/icons/mockUser.png')} style={[userStyles.userIcon,userProfile.userIcon]}/>
      <ScrollView>
        <View>
          <View style={userProfile.UserInfoContainer}>
            <View style={userProfile.UserInfo}>
              <Text>following</Text>
              <Text>145</Text>
            </View>
            <View>
              <Text>followers</Text>
              <Text>1542</Text>
            </View>
            <View>
              <Text>viewed</Text>
              <Text>5.6k</Text>
            </View>
          </View>

          <View>
            <Text>following</Text>
          </View>
        </View>

      </ScrollView>
    </ParallaxScrollView>

    // <ScrollView>
    //   <View style={styles.profileContainer}>
    //     <View style={styles.userInfo}>
    //       <Text>User pic here!!</Text>
    //       <Text>Username</Text>
    //       <Text>Followers, Following, Views</Text>
    //       <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tu
    //         quidem reddes; Quantum Aristoxeni ingenium consumptum videmus in musicis?
    //         Quae est igitur causa istarum angustiarum? Hic ambiguo ludimur.
    //         Duo Reges: constructio interrete. At enim hic etiam dolore.
    //       </Text>
    //     </View>
    //     <View style={styles.buttonBar}>
    //       <Image source={require('./assets/icons/Location-Icon.png')} style={{width:30, height:30}}/>
    //       <Image source={require('./assets/icons/User-Tag-Icon.png')} style={{width:30, height:30}}/>
    //       <Image source={require('./assets/icons/Collections-Icon.png')} style={{width:30, height:30}}/>
    //     </View>
    //     <View>
    //       <View style={styles.gridRow}>
    //         <TouchableOpacity onPress={()=> this.props.navigation.navigate('PostPage')}>
    //           <Image source={require('./images/example_post.jpeg')} style={{width: 125, height: 125}}/>
    //         </TouchableOpacity>
    //         <Image source={require('./images/example_post.jpeg')} style={{width: 125, height: 125}}/>
    //       </View>
    //       <View style={styles.gridRow}>
    //         <Image source={require('./images/example_post.jpeg')} style={{width: 125, height: 125}}/>
    //         <Image source={require('./images/example_post.jpeg')} style={{width: 125, height: 125}}/>
    //       </View>
    //     </View>
    //   </View>
    // </ScrollView>
  )
}
}

//Post Screen
class PostScreen extends React.Component {
  static navigationOptions = {
    title: 'PostScreen'
  };

  constructor(props) {
    super(props);
    this.state= {};
  }

  render() {
    return (
      <View style={PostScreenStyles.postContainer}>
        <View style={stdUserDisp.headerDisplay}>
          <View style={stdUserDisp.user}>
            <Image source={require('./assets/icons/mockUser.png')} style={userStyles.userIcon}/>
            <Text style={userStyles.userName}>username</Text>
          </View>
          <View style={stdUserDisp.likes}>
            <Image source={require('./assets/icons/Heart-Dark.png')} style={userStyles.likeIcon}/>
            <Text style={stdUserDisp.likesText}>145</Text>
          </View>
        </View>

        <ScrollView>
          <View>
            <Carousel ref={(carousel)=> {this._carousel = carousel}} inactiveSlideOpacity={0.2} firstItem={1} sliderWidth={325} itemWidth={275}>
              <Image source={require('./images/example_post.jpeg')} style={PostScreenStyles.image}/>
              <Image source={require('./images/example_post.jpeg')} style={PostScreenStyles.image}/>
              <Image source={require('./images/example_post.jpeg')} style={PostScreenStyles.image}/>
            </Carousel>
          </View>

          <View style={PostScreenStyles.infoContainer}>
            <Text style={PostScreenStyles.locationName}>The Coffee Shop</Text>
            <Text style={PostScreenStyles.address}>Somewhere in SF</Text>
            <Text style={PostScreenStyles.caption}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tu
              quidem reddes; Quantum Aristoxeni ingenium consumptum videmus in musicis?
              Quae est igitur causa istarum angustiarum? Hic ambiguo ludimur.
              Duo Reges: constructio interrete. At enim hic etiam dolore.
            </Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

//Post
class Post extends React.Component {
  static navigationOptions = {
    title: 'Post'
  }

  clickImage() {
    this.props.navigation.navigate('PostPage')
  }
  render () {
    return (
      <View style={postPreview.mainContainer}>

        <View style={stdUserDisp.headerDisplay}>
          <View style={stdUserDisp.user}>
            <Image source={require('./assets/icons/mockUser.png')} style={userStyles.userIcon}/>
            <Text style={userStyles.userName}>username</Text>
          </View>
          <View style={stdUserDisp.likes}>
            <Image source={require('./assets/icons/Heart-Dark.png')} style={userStyles.likeIcon}/>
            <Text style={stdUserDisp.likesText}>145</Text>
          </View>
        </View>

        <View style={postPreview.Imginfo}>
          <Carousel ref={(carousel)=> {this._carousel = carousel}} inactiveSlideOpacity={0.2} firstItem={1} sliderWidth={325} itemWidth={225}>
            <TouchableOpacity onPress={()=> this.clickImage()}>
              <Image source={require('./images/example_post.jpeg')} style={postPreview.image}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.clickImage()}>
              <Image source={require('./images/example_post.jpeg')} style={postPreview.image}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.clickImage()}>
              <Image source={require('./images/example_post.jpeg')} style={postPreview.image}/>
            </TouchableOpacity>
          </Carousel>
        </View>
      </View>
    )
  }
}

//Homepage
class Homepage extends React.Component {
  static navigationOptions = {
    title: 'Home',
    tabBarIcon: () => (
      <Image source={require('./assets/icons/home.png')}
      style={NavStyle.icon}
    />
  )
}
constructor(props) {
  super(props)
}
render() {
  return (
    <ScrollView>
      <Animatable.View animation="fadeInRight" style={Home.container}>
        <Post navigation={this.props.navigation}/><Post/>
      </Animatable.View>
    </ScrollView>
  )
}
}

const Tab = TabNavigator({
  Home: {
    screen: Homepage,
  },
  Explore: {
    screen: ExploreScreen
  },
  Upload: {
    screen: UploadScreen
  },
  Bookmark: {
    screen: BookmarkScreen
  },
  User: {
    screen: UserProfile
  }
},{
  tabBarOptions: {
    style: {
      backgroundColor: '#BDC3C7',
      height: 45
    },
    showLabel: false,
  }

});


class RegisterScreen extends React.Component {
  static navigationOptions = {
    title: 'Register'
  };
    constructor() {
      super();
    this.state= {};
    }

  registerSubmit() {
    fetch('https://vibrant-bastille-14841.herokuapp.com/register', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: this.state.username,
      password: this.state.password,
    })
  })
  .then((response) => {
       this.props.navigation.navigate('login')
    })
  .catch((err) => {
    /* do something if there was an error with fetching */
    console.log('Error', err)
  });
    }

  render() {
    return (
      <View>
        <Text>Register</Text>
        <TextInput style={{padding: 10, height: 40}}
          placeholder="Enter your username"
          onChangeText={(text)=> this.setState({username: text})}
        />
        <TextInput style={{padding: 10, height: 40}}
          placeholder="Enter password"
          secureTextEntry={true} onChangeText={(text)=> this.setState({password: text})}
        />
        <TouchableOpacity onPress={()=> {this.registerSubmit()}}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}



class Login extends React.Component {
  static navigationOptions = {
    title: 'Login'
  }

  constructor(props){
    super(props)
    this.state={}
  }

  loginClick() {
    fetch('https://vibrant-bastille-14841.herokuapp.com/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: this.state.username,
      password: this.state.password,
    })
  })
  .then((response) => response.json())
  .then((responseJson) => {
    /* do something with responseJson and go back to the Login view but
     * make sure to check for responseJson.success! */
     console.log(responseJson.success)
     if (responseJson.success) {
       this.props.navigation.navigate('tab');
       AsyncStorage.setItem('user', JSON.stringify ({
         username: this.state.username,
         password: this.state.password
       })
     )
     } else {
       this.setState({message: "Login Error"})
     }
  })
  .catch((err) => {
    /* do something if there was an error with fetching */
    console.log('Error', err)
  });
  }

  render() {
    return (
      <Image source={require('./images/login.jpeg')}
        style={{
          flex: 1,
          backgroundColor: 'transparent',
          width: undefined,
          height: undefined,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
      <Text>Login</Text>
      <TextInput style={{padding: 10, height: 40}}
          placeholder="Username"
        />
        <TextInput style={{padding: 10, height: 40}}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={()=>this.loginClick()}>
          <Text>Tap to Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('register')}>
          <Text>Tap to Register</Text>
        </TouchableOpacity>
      </Image>
    );
  }
}

const MyApp = StackNavigator ({
  login: {
    screen: Login
  },
  register: {
    screen: RegisterScreen
  },
  tab: {
    screen: Tab
  },
  Home: {
    screen: Homepage
  },
  PostPage: {
    screen: PostScreen
  }
},
{
  navigationOptions: {
    headerTitle: <Image source={require('./assets/icons/logo.png')} style={{width: 150, height:30}}/>,
    headerStyle: {
      height: 60,
      backgroundColor: 'white'
    },
    headerBackTitle: null,
    headerTintColor: 'black'
  },

},)

const NavStyle = StyleSheet.create({
  icon: {
    width: 30,
    height: 30 ,
  }
})

const Home = StyleSheet.create({
  container:{
    display: 'flex',
    alignItems:'center',
    backgroundColor: 'white'
  }
})

const userStyles = StyleSheet.create({
  userIcon:{
    height: 70,
    width: 70
  },
  userName:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  likeIcon:{
    height: 30,
    width: 30
  }
})


const stdUserDisp = StyleSheet.create({
  headerDisplay:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  user:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  likes:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 10,
  },
  likesText:{
    fontSize: 10,
    color: '#6C6C6C'
  }
})

const postPreview = StyleSheet.create({
  mainContainer:{
    flex: 1,
    width: '95%',
    marginBottom: 20,
  },
  Imginfo:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image:{
    height:225,
    width:225
  }
})
const PostScreenStyles = StyleSheet.create({
  postContainer:{
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  infoContainer: {
    display: 'flex',
    padding: 20
  },
  image:{
    height:275,
    width:275
  },
  locationName: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10
  },
  caption: {
    marginTop: 10,
    fontSize: 12,
    marginBottom: 10
  }
})

const ExploreStyles = StyleSheet.create({
  exploreContainer:{
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  Category:{
    marginTop: 25,
    marginBottom: 25,
    fontSize: 15,
    textAlign: 'center'
  },
  categoryRow:{
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})

const userProfile = StyleSheet.create({
  container:{
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  userIcon: {
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: -35,
    alignItems: 'center'
  },
  UserInfoContainer:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  },
  UserInfo:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  UserIcon:{
    display:'flex'
  }
})


const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30 ,
  },
  container: {
    flex:1,
    marginTop: 40,
    alignItems: 'center'
  },
  postContainer: {
    flex:1,
    margin: 20,
  },
  post: {
    flex: 1,
    margin: 5,
    width: 300,
    borderWidth: 2,
    padding: 3
  },
  header: {
    flexDirection: 'row',
    padding: 4,
    justifyContent: 'flex-end'
  },
  postImages: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  profileContainer: {
    flex:1,
    margin: 20
  },
  userInfo: {

  },
  buttonBar: {
    flexDirection: 'row',
    borderWidth: 2,
    justifyContent: 'space-around'
  },
  grid: {
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 5
  },
  category: {

  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})

export default MyApp;
