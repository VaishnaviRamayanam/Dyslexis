import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Start from './screens/Start';
import BasicKnowledge from './screens/BasicKnowledge';
import Lessons1 from './screens/Lessons1';
import Lessons2 from './screens/Lessons2';
import Sn from './screens/Sn'

import Zero from './screens/Zero';
import One from './screens/One';
import Two from './screens/Two';
import Three from './screens/Three';
import Four from './screens/Four';
import Five from './screens/Five';
import Six from './screens/Six';
import Seven from './screens/Seven';
import Eight from './screens/Eight';
import Nine from './screens/Nine';
import Ten from './screens/Ten';

import A2 from './screens/A2';
import B2 from './screens/B2';
import C2 from './screens/C2';
import D2 from './screens/D2';
import E2 from './screens/E2';
import F2 from './screens/F2';
import G2 from './screens/G2';
import H2 from './screens/H2';
import I2 from './screens/I2';
import J2 from './screens/J2';
import K2 from './screens/K2';
import L2 from './screens/L2';
import M2 from './screens/M2';
import N2 from './screens/N2';
import O2 from './screens/O2';
import P2 from './screens/P2';
import Q2 from './screens/Q2';
import R2 from './screens/R2';
import S2 from './screens/S2';
import T2 from './screens/T2';
import U2 from './screens/U2';
import V2 from './screens/V2';
import W2 from './screens/W2';
import X2 from './screens/X2';
import Y2 from './screens/Y2';
import Z2 from './screens/Z2';

import A from './screens/A';
import B from './screens/B';
import C from './screens/C';
import D from './screens/D';
import E from './screens/E';
import F from './screens/F';
import G from './screens/G';
import H from './screens/H';
import I from './screens/I';
import J from './screens/J';
import K from './screens/K';
import L from './screens/L';
import M from './screens/M';
import N from './screens/N';
import O from './screens/O';
import P from './screens/P';
import Q from './screens/Q';
import R from './screens/R';
import S from './screens/S';
import T from './screens/T';
import U from './screens/U';
import V from './screens/V';
import W from './screens/W';
import X from './screens/X';
import Y from './screens/Y';
import Z from './screens/Z';


import Story1 from './screens/Story1';
import Bed from './screens/Bed';
import Custom1 from './screens/Custom1';
import Custom2 from './screens/Custom2';
import Emergency from './screens/Emergency';


import Quiz3 from './screens/Quiz3';
import Quiz31 from './screens/Quiz31';
import Quiz31w from './screens/Quiz31w';
import Quiz31r from './screens/Quiz31r';
import Quiz32 from './screens/Quiz32';
import Quiz32w from './screens/Quiz32w';
import Quiz32r from './screens/Quiz32r';
import Quiz33 from './screens/Quiz33';
import Quiz33w from './screens/Quiz33w';
import Quiz33r from './screens/Quiz33r';
import Quiz34 from './screens/Quiz34';
import Quiz34w from './screens/Quiz34w';
import Quiz34r from './screens/Quiz34r';

import Q1 from './screens/Q1';
import Pq from './screens/Pq';
import Pqr from './screens/Pqr';
import Pqw from './screens/Pqw';
import Gq from './screens/Gq';
import Gqr from './screens/Gqr';
import Gqw from './screens/Gqw';
import Cq from './screens/Cq';
import Cqr from './screens/Cqr';
import Cqw from './screens/Cqw';
import Aq from './screens/Aq';
import Aqr from './screens/Aqr';
import Aqw from './screens/Aqw';
import Sq from './screens/Sq';
import Sqr from './screens/Sqr';
import Sqw from './screens/Sqw';

import QQ1 from './screens/QQ1';
import Zq from './screens/Zq';
import Zqr from './screens/Zqr';
import Zqw from './screens/Zqw';
import Yq from './screens/Yq';
import Yqr from './screens/Yqr';
import Yqw from './screens/Yqw';
import Vq from './screens/Vq';
import Vqr from './screens/Vqr';
import Vqw from './screens/Vqw';
import Nq from './screens/Nq';
import Nqr from './screens/Nqr';
import Nqw from './screens/Nqw';
import LQ from './screens/LQ';
import Lqr from './screens/Lqr';
import Lqw from './screens/Lqw';
import Sos from './screens/Sos';
import Story3 from './screens/Story3';
import Story2 from './screens/Story2';

const Stack = createNativeStackNavigator();
 
export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="BasicKnowledge" component={BasicKnowledge} />
        <Stack.Screen name="Lessons1" component={Lessons1} />
        <Stack.Screen name="Lessons2" component={Lessons2} />
        <Stack.Screen name="Emergency" component={Emergency} />
        <Stack.Screen name="Sn" component={Sn} />


        <Stack.Screen name="Zero" component={Zero} />
        <Stack.Screen name="One" component={One} />
        <Stack.Screen name="Two" component={Two} />
        <Stack.Screen name="Three" component={Three} />
        <Stack.Screen name="Four" component={Four} />
        <Stack.Screen name="Five" component={Five} />
        <Stack.Screen name="Six" component={Six} />
        <Stack.Screen name="Seven" component={Seven} />
        <Stack.Screen name="Eight" component={Eight} />
        <Stack.Screen name="Nine" component={Nine} />
        <Stack.Screen name="Ten" component={Ten} />

        <Stack.Screen name="A2" component={A2} />
        <Stack.Screen name="B2" component={B2} />
        <Stack.Screen name="C2" component={C2} />
        <Stack.Screen name="D2" component={D2} />
        <Stack.Screen name="E2" component={E2} />
        <Stack.Screen name="F2" component={F2} />
        <Stack.Screen name="G2" component={G2} />
        <Stack.Screen name="H2" component={H2} />
        <Stack.Screen name="I2" component={I2} />
        <Stack.Screen name="J2" component={J2} />
        <Stack.Screen name="K2" component={K2} />
        <Stack.Screen name="L2" component={L2} />
        <Stack.Screen name="M2" component={M2} />
        <Stack.Screen name="N2" component={N2} />
        <Stack.Screen name="O2" component={O2} />
        <Stack.Screen name="P2" component={P2} />
        <Stack.Screen name="Q2" component={Q2} />
        <Stack.Screen name="R2" component={R2} />
        <Stack.Screen name="S2" component={S2} />
        <Stack.Screen name="T2" component={T2} />
        <Stack.Screen name="U2" component={U2} />
        <Stack.Screen name="V2" component={V2} />
        <Stack.Screen name="W2" component={W2} />
        <Stack.Screen name="X2" component={X2} />
        <Stack.Screen name="Y2" component={Y2} />
        <Stack.Screen name="Z2" component={Z2} />
        

        <Stack.Screen name="A" component={A} />
        <Stack.Screen name="B" component={B} />
        <Stack.Screen name="C" component={C} />
        <Stack.Screen name="D" component={D} />
        <Stack.Screen name="E" component={E} />
        <Stack.Screen name="F" component={F} />
        <Stack.Screen name="G" component={G} />
        <Stack.Screen name="H" component={H} />
        <Stack.Screen name="I" component={I} />
        <Stack.Screen name="J" component={J} />
        <Stack.Screen name="K" component={K} />
        <Stack.Screen name="L" component={L} />
        <Stack.Screen name="M" component={M} />
        <Stack.Screen name="N" component={N} />
        <Stack.Screen name="O" component={O} />
        <Stack.Screen name="P" component={P} />
        <Stack.Screen name="Q" component={Q} />
        <Stack.Screen name="R" component={R} />
        <Stack.Screen name="S" component={S} />
        <Stack.Screen name="T" component={T} />
        <Stack.Screen name="U" component={U} />
        <Stack.Screen name="V" component={V} />
        <Stack.Screen name="W" component={W} />
        <Stack.Screen name="X" component={X} />
        <Stack.Screen name="Y" component={Y} />
        <Stack.Screen name="Z" component={Z} />

        <Stack.Screen name="Bed" component={Bed} />
        <Stack.Screen name="Story1" component={Story1} />
        <Stack.Screen name="Story2" component={Story2} />
        <Stack.Screen name="Story3" component={Story3} />
        <Stack.Screen name="Custom1" component={Custom1} />
        <Stack.Screen name="Sos" component={Sos} />
        <Stack.Screen name="Custom2" component={Custom2} />

        <Stack.Screen name="Quiz3" component={Quiz3} />
        <Stack.Screen name="Quiz31" component={Quiz31} />
        <Stack.Screen name="Quiz31w" component={Quiz31w} />
        <Stack.Screen name="Quiz31r" component={Quiz31r} />
        <Stack.Screen name="Quiz32" component={Quiz32} />
        <Stack.Screen name="Quiz32w" component={Quiz32w} />
        <Stack.Screen name="Quiz32r" component={Quiz32r} />
        <Stack.Screen name="Quiz33" component={Quiz33} />
        <Stack.Screen name="Quiz33w" component={Quiz33w} />
        <Stack.Screen name="Quiz33r" component={Quiz33r} />
        <Stack.Screen name="Quiz34" component={Quiz34} />
        <Stack.Screen name="Quiz34w" component={Quiz34w} />
        <Stack.Screen name="Quiz34r" component={Quiz34r} />

        <Stack.Screen name="Q1" component={Q1} />
        <Stack.Screen name="Pq" component={Pq} />
        <Stack.Screen name="Pqw" component={Pqw} />
        <Stack.Screen name="Pqr" component={Pqr} />
        <Stack.Screen name="Gq" component={Gq} />
        <Stack.Screen name="Gqw" component={Gqw} />
        <Stack.Screen name="Gqr" component={Gqr} />
        <Stack.Screen name="Cq" component={Cq} />
        <Stack.Screen name="Cqw" component={Cqw} />
        <Stack.Screen name="Cqr" component={Cqr} />
        <Stack.Screen name="Aq" component={Aq} />
        <Stack.Screen name="Aqw" component={Aqw} />
        <Stack.Screen name="Aqr" component={Aqr} />
        <Stack.Screen name="Sq" component={Sq} />
        <Stack.Screen name="Sqw" component={Sqw} />
        <Stack.Screen name="Sqr" component={Sqr} />
        
        <Stack.Screen name="QQ1" component={QQ1} />
        <Stack.Screen name="Zq" component={Zq} />
        <Stack.Screen name="Zqw" component={Zqw} />
        <Stack.Screen name="Zqr" component={Zqr} />
        <Stack.Screen name="Yq" component={Yq} />
        <Stack.Screen name="Yqw" component={Yqw} />
        <Stack.Screen name="Yqr" component={Yqr} />
        <Stack.Screen name="Vq" component={Vq} />
        <Stack.Screen name="Vqw" component={Vqw} />
        <Stack.Screen name="Vqr" component={Vqr} />
        <Stack.Screen name="Nq" component={Nq} />
        <Stack.Screen name="Nqw" component={Nqw} />
        <Stack.Screen name="Nqr" component={Nqr} />
        <Stack.Screen name="LQ" component={LQ} />
        <Stack.Screen name="Lqw" component={Lqw} />
        <Stack.Screen name="Lqr" component={Lqr} />

      </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}
