import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'styled-components/native';
import { useUser } from '../../contexts/user-context';
import { RegistrationScreen } from '../../features/registration/screens/registration.screen';
import { LoginScreen } from '../../features/login/screens/login.screen';
import { HomeScreen } from '../../features/home/screens/home.screen';
import { ProfileScreen } from '../../features/profile/screens/profile.screen';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ROUTES } from '../../constants';
import { EditProfileScreen } from '../../features/profile/screens/edit-pofile.screen';
import { CompanyProfileScreen } from '../../features/profile/screens/company-profile.screen';
import { FaqScreen } from '../../features/profile/screens/faq.screen';

const MainStack = createStackNavigator();

export const Navigation = () => {
  const theme = useTheme();
  const { isLoading, isLoggedIn } = useUser();

  const screenOptions = {
    headerShown: false,
    cardStyle: { backgroundColor: theme.colors.bg.secondary },
  };

  return (
    <>
      {!isLoading ? (
        <NavigationContainer>
          <MainStack.Navigator
            initialRouteName={isLoggedIn ? ROUTES.PROFILE : ROUTES.HOME}
            screenOptions={screenOptions}
          >
            <MainStack.Screen
              name={ROUTES.REGISTER}
              component={RegistrationScreen}
            />
            <MainStack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
            <MainStack.Screen name={ROUTES.HOME} component={HomeScreen} />
            <MainStack.Screen name={ROUTES.PROFILE} component={ProfileScreen} />
            <MainStack.Screen
              name={ROUTES.EDIT_PROFILE}
              component={EditProfileScreen}
            />
            <MainStack.Screen
              name={ROUTES.EDIT_COMPANY_PROFILE}
              component={CompanyProfileScreen}
            />
            <MainStack.Screen name={ROUTES.FAQ} component={FaqScreen} />
          </MainStack.Navigator>
        </NavigationContainer>
      ) : null}
    </>
  );
};
