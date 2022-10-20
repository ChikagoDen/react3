const gitReducer = require('../gitReducer')
const {GET_POST_LOADING} = require("../actionTypeGit");
const PageGit = require("../../../pages/PageGit");
const React = require("react");
const initialStateGit = {
    posts:[],
    loading:false,
    error:null
};
describe('testGitReducer',()=>{
    test('Корректно',()=>{
        expect(gitReducer(initialStateGit,GET_POST_LOADING).toBe(...initialStateGit, initialStateGit.loading== true))
    })

});
test('matches snapshot with no article', () => {
    const component = render(
        <PageGit/>
    );
    expect(component).toMatchSnapshot();

});