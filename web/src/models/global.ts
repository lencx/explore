/**
 * @author: lencx
 * @create_at: Jul 01, 2020
 */

export default {
  namespace: 'global',
  state: {
    name: `lencx's app`,
    authenticated: false,
  },
  reducers: {
    setState(state: any, { payload }: any) {
      return { ...state, ...payload };
    },
  },
  effects: {},
}