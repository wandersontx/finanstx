import React, {useContext} from 'react';
import { AuthContext } from '../contents/auth';
import { View, ActivityIndicator } from 'react-native';

import AuthRoutes from './AuthRoutes';
import AppRoutes from './AppRoutes';

function Routes(){

   const { signed, load } = useContext(AuthContext);

    if (load) {
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size="large" color="#131313" />
            </View>
        );
    }    

    return(
        signed ? <AppRoutes /> : <AuthRoutes />
    );
}

export default Routes;