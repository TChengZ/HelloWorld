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
import {AppRegistry, StyleSheet, Text,Image, View, TextInput, ScrollView, ListView} from 'react-native';

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

const styles = StyleSheet.create({
    bigblue:{
      color:'blue',
      fontWeight:'bold',
      fontSize:30,
    },
  red:{
    color:'red',
   }
  }
);

AppRegistry.registerComponent('HelloWorld', () => ListViewBasics);