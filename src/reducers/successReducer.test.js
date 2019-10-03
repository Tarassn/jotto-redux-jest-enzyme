import {actionTypes} from "../actions";
import successReducer from './successReducer'

it('returns default intial state of "false" when no action is passed',()=>{
    const newState = successReducer(undefined,{});
    expect(newState).toBe(false)
})
it('returns state of "true" when receiving action "CORRECT_GUESS"',()=>{
    const newState = successReducer(undefined, {type: actionTypes.CORRECT_GUESS});
    expect(newState).toBe(true)

})