/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
//
// export default class HelloWorld extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.android.js
//         </Text>
//         <Text style={styles.instructions}>
//           Double tap R on your keyboard to reload,{'\n'}
//           Shake or press menu button for dev menu
//         </Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
//
// AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text,Image, View, TextInput,
    ScrollView, ListView, TouchableOpacity, Navigator, NavigationExperimental, PixelRatio, TouchableHighlight} from 'react-native';
import Button from './src/component/button';
import MyScene from  './src/MyScene';

const {
    CardStack: NavigationCardStack,
    StateUtils: NavigationStateUtils,
} = NavigationExperimental;

class HelloWorldApp extends Component{
  render(){
    let pic = {
      uri:'http://s1.bdstatic.com/r/www/aladdin/img/new_weath/simpleico/5.png'
    };
    return(
        <Text>WTF</Text>
        /*<Image source={pic} sytle={{width:193, height:110}}/>*/
    );
  }
}

class Greeting extends Component{
  render(){
    return(
        <Text>Hello {this.props.name}!</Text>
    );
  }
}

class LotsOfGreeting extends Component{
  render(){
    return(
      <View style={{alignItems:'center'}}>
        <Greeting name="Rexxar"/>
        <Greeting name="Jaina"/>
        <Greeting name="Valeera"/>
        <HelloWorldApp/>
      </View>
    );
  }
}

class Blink extends Component{
  constructor(props) {
    super(props);
    this.state = {showText: true};

    setInterval(()=>{
      this.setState({
        showText: !this.state.showText});
      }, 1000);
  }

  render(){
     let display = this.state.showText? this.props.text: '';
     return (
         <Text style={[this.props.setStyle, this.props.setFlex]}>{display}</Text>
     );
  }
}

class BlinkApp extends Component{
  render(){
    return (
        <View style = {{height:900, backgroundColor:'skyblue'}}>
          <Blink setFlex={{flex:5}} setStyle={styles.bigblue} text="I love to blink"/>
          <Blink setFlex={{flex:1}} setStyle={styles.red} text="Yes blinking is so great"/>
          <Blink setFlex={{flex:1}} style={{width:300, height:100}} text="Why did they ever take this out of HTML"/>
          <Blink setFlex={{flex:2}} text="Look at me look at me look at me"/>
        </View>
    );
  }
}

class FlexDirectionBasics extends Component{
  render(){
    return (
      <View style={{flex:1, flexDirection:'column'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

class JustifyContentBasiscsSpaceBetween extends Component{
  render(){
    return(
        <View style={{flex:1, flexDirection: 'column', justifyContent:'space-between'}}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>
    );
  }
};

class JustifyContentBasiscsFlexStart extends Component{
  render(){
    return(
        <View style={{flex:1, flexDirection: 'column', justifyContent:'flex-start'}}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>
    );
  }
};

class JustifyContentBasiscsCenter extends Component{
  render(){
    return(
        <View style={{flex:1, flexDirection: 'column', justifyContent:'center'}}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>
    );
  }
};

class JustifyContentBasiscsFlexEnd extends Component{
  render(){
    return(
        <View style={{flex:1, flexDirection: 'column', justifyContent:'flex-end'}}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>
    );
  }
};

class JustifyContentBasiscsSpaceAround extends Component{
  render(){
    return(
        <View style={{flex:1, flexDirection: 'column', justifyContent:'space-around'}}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>
    );
  }
};

class JustifyContentBasiscsAll extends Component{
  render(){
    return(
      <View style={{flex:1, flexDirection: 'row'}}>
        <JustifyContentBasiscsSpaceBetween />
        <JustifyContentBasiscsFlexStart />
        <JustifyContentBasiscsFlexEnd />
        <JustifyContentBasiscsCenter />
        <JustifyContentBasiscsSpaceAround />
      </View>
    );
  }
};

class AlignItemBasicsFlexStart extends Component{
  render(){
    return (
        <View style={{flex:1, flexDirection:'column', justifyContent: 'center', alignItems: 'flex-start'}}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>
    );
  }
};

class AlignItemBasicsFlexEnd extends Component{
  render(){
    return (
        <View style={{flex:1, flexDirection:'column', justifyContent: 'center', alignItems: 'flex-end'}}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>
    );
  }
};

class AlignItemBasicsCenter extends Component{
  render(){
    return (
        <View style={{flex:1, flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>
    );
  }
};

class AlignItemBasicsStretch extends Component{
  render(){
    return (
        <View style={{flex:1, flexDirection:'column', justifyContent: 'center', alignItems: 'stretch'}}>
          <View style={{height: 50, backgroundColor: 'powderblue'}} />
          <View style={{height: 50, backgroundColor: 'skyblue'}} />
          <View style={{height: 50, backgroundColor: 'steelblue'}} />
        </View>
    );
  }
};

class AlignItemBasicsAll extends Component{
  render(){
    return(
        <View style={{flex:1, flexDirection: 'column'}}>
          <AlignItemBasicsFlexStart />
          <AlignItemBasicsCenter />
          <AlignItemBasicsFlexEnd />
          <AlignItemBasicsStretch />
        </View>
    );
  }
};

class PizzaTranslator extends Component{
  constructor(props){
    super(props);
    this.state={text:''}
  }

  render(){
    return (
        <View style={{padding: 10}}>
          <TextInput
            style={{height: 40}}
            placeholder="Type here to translate"
            onChangeText={(text)=>this.setState({text})}
          />
          <Text style={{padding: 10, fontSize:42}}>
            {this.state.text}
          </Text>
        </View>
    );
  }
}

class IScrolledDownAndWhatHappenedNextShockedMe extends Component{
    render(){
        return(
            <ScrollView>
                <Text style={{fontSize:96}}>Scroll me plz</Text>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Text style={{fontSize:96}}>If you like</Text>
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Text style={{fontSize:96}}>Scrolling down</Text>
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Text style={{fontSize:96}}>What's the best</Text>
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Text style={{fontSize:96}}>Framework around?</Text>
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Text style={{fontSize:80}}>React Native</Text>
            </ScrollView>
        );
    }
}

class HorizontalScrollView extends Component{
    render(){
        return(
            <ScrollView horizontal={true}>
                <Text style={{fontSize:25}}>let us</Text>
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Text style={{fontSize:25}}>  see the movie </Text>
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Text style={{fontSize:35}}>机械师2</Text>
            </ScrollView>
        );
    }
}

class ListViewBasics extends Component{
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: function (r1, r2) {
            r1 !== r2
        }});
        this.state={
          dataSource: ds.cloneWithRows([
              'John','Joel','James','Jimmy','Jackson','Jillian','Julie','Devin'
          ])
        };
    }

    render(){
      return(
          <View style={{flex: 1, paddingTop: 22}}>
              <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <Text>{rowData}</Text>}
              />
          </View>
      );
    }
}

class ButtonDemo extends Component{
    constructor(props){
        super(props);
        this.state={
          status: 1
        };
    }
    fetchData = (enableCallback) =>{
        console.log('test')
        console.log(enableCallback)
        fetch('http://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((jsondata) => {
                this.setState({
                    title: jsondata.movies[0].title
                });
            })
            .catch((error) => {
                console.warn(error);
            });
    };
    onPressClick = () => {
        //禁用按钮
        console.log(2)
        this.refs.button.disable();
        alert("正在获取数据");
        this.timer = setTimeout(
            () => {
                //可以继续使用按钮
                console.log(4)
                this.refs.button.enable();
            },5000);
    };
    componentWillUnmount(){
        this.timer && clearTimeout(this.timer);
    }
    render(){
        return(
            <View>
                <TouchableOpacity style={styles.buttons}>
                    <Text>{this.state.title? this.state.title: null}</Text>
                </TouchableOpacity >
                <Button
                    ref="button"
                    text="确定" beijingyanse="red"
                    date="2016-10-23" object={{a:"b"}}
                    onClick={
                        this.fetchData
                    }/>
            </View>
        );
    }
}

class YoDawgApp extends Component{
    render(){
        return(
            <MyScene/>
        )
    }
}

class SimpleNavigationApp extends Component {
    render() {
        return(
            <Navigator
                initialRoute={{title: 'My Initial Scene', index: 0}}
                renderScene={(route, navigator) =>{
                                return <MyScene
                                         title = {route.title}
                                          onForward={
                                               ()=>{
                                                    const nextIndex = route.index + 1;
                                                    navigator.push({
                                                        title: 'Scene ' + nextIndex,
                                                        index: nextIndex
                                                    });
                                               }
                                          }
                                          onBack={
                                            ()=>{
                                                if(route.index > 0){
                                                    navigator.pop();
                                                }
                                            }
                                          }
                                        />
                        }
                }
            />
        );
    }
}

class TappableRow extends Component{
    render(){
        return(
            <TouchableHighlight
                style={styles.row}
                underlayColor="#D0D0D0"
                onPress={this.props.onPress}
                >
                <Text style={styles.buttonText}>
                    {this.props.text}
                </Text>
            </TouchableHighlight>
        );
    }
}

class MyVeryComplexScene extends Component{
    render(){
        return(
            <ScrollView style={styles.scrollView}>
                <Text style={styles.row}>
                    Route:{this.props.route.key}
                </Text>
                <TappableRow
                    text="Tap me to load the next scene"
                    onPress={this.props.onPushRoute}
                    />
                <TappableRow
                    text="Tap me to go back"
                    onPress={this.props.onPopRoute}
                    />
            </ScrollView>
        );
    }
}

class MyVerySimpleNavigator extends Component{
    constructor(props, context){
        super(props, context);
        this._onPushRoute = this.props.onNavigationChange.bind(null, 'push');
        this._onPopRoute = this.props.onNavigationChange.bind(null, 'pop');
        this._renderScene = this._renderScene.bind(this);
    }

    render(){
        return(
            <NavigationCardStack
                onNavigateBack={this._onPopRoute}
                navigationState={this.props.navigationState}
                renderScene={this._renderScene}
                style={styles.navigator}
            />
        );
    }

    _renderScene(sceneProps){
        return(
            <MyVeryComplexScene
                route={sceneProps.scene.route}
                onPushRoute={this._onPushRoute}
                onPopRoute={this._onPopRoute}
                onExit={this.props.onExit}
            />
        );
    }
}


class BleedingEdgeApplication extends Component{
    constructor(props, context){
        super(props, context);
        this.state={
            navigationState:{
                index: 0,
                routes: [{key: 'My Initial Scene'}],
            }
        };

        this._onNavigationChange = this._onNavigationChange.bind(this);
    }

    _onNavigationChange(type){
        let {navigationState} = this.state;
        switch (type){
            case 'push':
                const route = {key: 'Route-' + Date.now()}
                navigationState = NavigationStateUtils.push(navigationState, route);
                break;
            case 'pop':
                navigationState = NavigationStateUtils.pop(navigationState);
                break;
        }
        if(this.state.navigationState != navigationState){
            this.setState({navigationState});
        }
    }

    render(){
        return (
            <MyVerySimpleNavigator
                navigationState={this.state.navigationState}
                onNavigationChange={this._onNavigationChange}
                onExit={this._exit}
            />
        );
    }
}


const styles = StyleSheet.create({
    bigblue:{
      color:'blue',
      fontWeight:'bold',
      fontSize:30,
    },
  red:{
    color:'red',
   },
    navigator:{
      flex: 1,
    },
    scrollView:{
        marginTop:64
    },
    row:{
        padding: 15,
        backgroundColor: 'white',
        borderBottomWidth: 1/PixelRatio.get(),
        borderBottomColor: '#CDCDCD'
    },
    rowText:{
        fontSize: 17
    },
    buttonText:{
        fontSize: 17,
        fontWeight: '500'
    }
  }
);

AppRegistry.registerComponent('HelloWorld', () => BleedingEdgeApplication);