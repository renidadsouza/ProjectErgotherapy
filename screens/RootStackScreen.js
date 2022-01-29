import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./SplashScreen";
import TherapistLogin from "./TherapistLogin";
import TherapistDetails from "./TherapistDetails";
import PatientLogin from "./PatientLogin";
import ÜbungsauswahlScreen from "./ÜbungsauswahlScreen";
import PatientMgmtScreen from "./PatientMgmtScreen";
import FeedbackScreen from "./FeedbackScreen";
import ProfileScreen from "./ProfileScreen";
import TherapistHome from "./TherapistHome";
import PatientDetails from "./PatientDetails";
import PatientID from "./PatientID";
import PatientWeekDay from "./PatientWeekDay";
import PatientExercise from "./PatientExercise";
import ZielenType from "./ZielenType";
import ZielenTesting from "./ZielenTesting";
import ZielenTestingExercise from "./ZielenTestingExercise";
import ZielenTrainingExercise from "./ZielenTrainingExercise";
import TippenType from "./TippenType";
import TippenTesting from "./TippenTesting";
import TippenTestingExercise from "./TippenTestingExercise";
import KreuzenBigExercise from "./KreuzenBigExercise";
import KreuzenBigSmall from "./KreuzenBigSmall";
import KreuzenType from "./KreuzenType";
import KreuzenTesting from "./KreuzenTesting";
import KreuzenSmallExercise from "./KreuzenSmallExercise";
import KreuzenTesting2 from "./KreuzenTesting2";
import Timer from "./Timer";
import Nachfahren from "./Nachfahren";
import UmdrehenType from "./UmdrehenType";
import TürmeType from "./TürmeType";
import KlötzeType from "./KlötzeType";
import GewindeType from "./GewindeType";



const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="TherapistLogin" component={TherapistLogin} />
        <RootStack.Screen name="TherapistDetails" component={TherapistDetails} />
        <RootStack.Screen name="PatientLogin" component={PatientLogin} />
        <RootStack.Screen name="FeedbackScreen" component={FeedbackScreen} />
        <RootStack.Screen name="ProfileScreen" component={ProfileScreen} />
        <RootStack.Screen name="PatientMgmtScreen" component={PatientMgmtScreen} />
        <RootStack.Screen name="ÜbungsauswahlScreen" component={ÜbungsauswahlScreen} />
        <RootStack.Screen name="TherapistHome" component={TherapistHome} />
        <RootStack.Screen name="PatientDetails" component={PatientDetails} />
        <RootStack.Screen name="PatientID" component={PatientID} />
        <RootStack.Screen name="PatientWeekDay" component={PatientWeekDay} />
        <RootStack.Screen name="PatientExercise" component={PatientExercise} />
        <RootStack.Screen name="ZielenType" component={ZielenType} />
        <RootStack.Screen name="ZielenTesting" component={ZielenTesting} />
        <RootStack.Screen name="ZielenTestingExercise" component={ZielenTestingExercise} />
        <RootStack.Screen name="ZielenTrainingExercise" component={ZielenTrainingExercise} />
        <RootStack.Screen name="TippenType" component={TippenType} />
        <RootStack.Screen name="TippenTesting" component={TippenTesting} />
        <RootStack.Screen name="TippenTestingExercise" component={TippenTestingExercise} />
        <RootStack.Screen name="KreuzenBigExercise" component={KreuzenBigExercise} />
        <RootStack.Screen name="KreuzenBigSmall" component={KreuzenBigSmall} />
        <RootStack.Screen name="KreuzenType" component={KreuzenType} />
        <RootStack.Screen name="KreuzenTesting" component={KreuzenTesting} />
        <RootStack.Screen name="KreuzenSmallExercise" component={KreuzenSmallExercise} />
        <RootStack.Screen name="KreuzenTesting2" component={KreuzenTesting2} />
        <RootStack.Screen name="Timer" component={Timer} />
        <RootStack.Screen name="Nachfahren" component={Nachfahren} /> 
        <RootStack.Screen name="UmdrehenType" component={UmdrehenType} /> 
        <RootStack.Screen name="TürmeType" component={TürmeType} /> 
        <RootStack.Screen name="KlötzeType" component={KlötzeType} /> 
        <RootStack.Screen name="GewindeType" component={GewindeType} /> 



        
    </RootStack.Navigator>
);

export default RootStackScreen;