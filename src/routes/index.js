import React, {useContext} from 'react';
import { AuthContext } from '../contents/auth';

import AuthRoutes from './AuthRoutes';
import AppRoutes from './AppRoutes';

function Routes(){

    const { signed } = useContext(AuthContext);

    return(
        signed ? <AppRoutes /> : <AuthRoutes />
    );
}

export default Routes;