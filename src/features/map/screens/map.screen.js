import React, {useContext, useState, useEffect} from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import styled from 'styled-components/native';
import { CompaniesContext } from '../../../services/companies/companies.context';
import { LocationContext } from '../../../services/location/location.context';

import { Search } from '../components/search.component';
import { MapCallout } from '../components/map-callout.component';
import { CompaniesContextEdit } from '../../../admin/store/companies-context';
const Map = styled(MapView)`
height:100%;
width: 100%
`;


const SomeText = styled.Text``;
export const MapScreen = ({navigation})=> {
  const {location} = useContext(LocationContext);
  const {companies = []} = useContext(CompaniesContextEdit);
  const [latDelta, setLatDelta] = useState(0);
  const { lat, lng, viewport } = location;





  return (
    <>
      {/* <Search /> */}
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {companies.map((company) => {

          return (
            <Marker
              key={company.id}
              title={company.name}
              coordinate={{
            longitude: '32.4244223' ? '32.4244223' : 0,
            latitude: '32.4244223' ? '32.4244223' : 0
              }}
            >
              <Callout
                onPress={() =>navigation.navigate('CompanyDetailt', {
                  company,
                })}>
                <MapCallout company={company}/>


            
              </Callout>
            </Marker>
          );
        })}
      </Map>
    </>
  );
};