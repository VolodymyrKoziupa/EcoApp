import React from 'react-native';
import { Button } from '../../../common/components/button/button';
import { useUser } from '../../../../contexts/user-context';
import PropTypes from 'prop-types';
import { ROLES, ROUTES } from '../../../../constants';

export const CompanyOptions = ({ navigation }) => {
  return (
    <>
      <Button
        navigation={navigation}
        onPress={() =>
          navigation.navigate(ROUTES.EDIT_COMPANY)
        }
        text="Edit company's profile"
        iconName="edit"
        iconStyle={{ top: 12 }}
      />
      <Button
        onPress={() => {}}
        text="Messages from the customers"
        iconName="envelope-o"
        iconStyle={{ top: 8 }}
      />
      <Button
        onPress={() => {}}
        text="Add the collection point"
        iconName="sourcetree"
        iconStyle={{ top: 10 }}
      />
      <Button
        onPress={() => {}}
        text="Edit the collection point"
        iconName="edit-point"
        iconStyle={{ top: 12 }}
      />
    </>
  );
};

CompanyOptions.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
};
