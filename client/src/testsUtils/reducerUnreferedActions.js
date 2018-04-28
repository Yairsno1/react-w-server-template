//  An helper class to test a reducer for the cases in which
//an action that is passed to the reducer is not refered by it.

class ReducerUnreferedActions {
  constructor() {
    this.reducer = null;
    this.reducerName = ''; //This is not redundant, reducer function might be anonymous.
    this.currState = {};
    this.expectedState = undefined;
    this.referedActions = {};
    this.actionsMock = [];
  }

  setReducer(reducer) {
    this.reducer = reducer;
  }

  setReducerName(name) {
    this.reducerName = name;
  }

  setCurrState(state) {
    this.currState = Object.assign({}, state);
  }

  //  Set if and only if the reducer in response to
  //unrefered actions, returns state which is
  //different from the passed(current) state.
  setExpectedState(state) {
    this.expectedState = Object.assign({}, state);
  }

  setReferedActions(actionTypes) {
    this.referedActions = Object.assign({}, actionTypes);
  }

  setActionsMock(actions) {
    this.actionsMock = actions;
  }

  verify() {
    const mocksLen = this.actionsMock.length;
    let i;

    for (i=0; i<mocksLen; i++) {
      const a = this.actionsMock[i];
      if (!this.referedActions[a.mock.type]) {
        this.verify1(a);
      }
    }
  }

  verify1(action) {
    const testName = this.reducerName + '_' + action.name;

    it (testName, () => {
      const expectedNextState = this.expectedState ?
      Object.assign({}, this.expectedState) :
      Object.assign({}, this.currState);

      const actualState = this.reducer(expectedNextState, action.mock);

      expect(actualState).toEqual(expectedNextState);
    });
  }
}

export default ReducerUnreferedActions;

//  Todo: Use this class as a base for a general module
//that assists to test reducer's unrefered actions with ease.
//  Tasks:
//  ======
//  * Manage actions mock
//    # add mock
//    # Traverse the mocks list
//    # Check if the action is refered or not
//    # find single mock within the list
//
//  * Manage refered actions list
//  * Type checking
//  * Keep setting the data for the verify() operation as simple as possible
//  * Support as much use cases as possible.
//  * Consider to decouple the data and the verify() operation to support other test frameworks than Jest.
