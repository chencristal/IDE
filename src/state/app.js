import * as Actions from '../actions/app';
import { MENUS } from '../constants/menu';

export default ({ load, init, on, persist }) => {
    load('app', {
        menu: { width: 300 },
        main: { height: 600 }
    });

    init('constants', {
        menus: MENUS
    });

    init('tmp', null);

    on(Actions.Resize, ({ name, key, value }, state) => {
        if (state.app[name]) {
            state.app[name][key] = value;
            persist(state);
        }
    });

    on(Actions.SetTmp, (tmp, state, update) => {
        update({ tmp });
    });
};