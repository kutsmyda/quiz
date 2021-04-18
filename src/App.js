import './App.css';
import {Switch, Route} from 'react-router-dom'
import Layout from "./hoc/Layout/Layout";
import Quiz from "./Containers/Quiz/Quiz";

function App() {
    return (
        <Layout>
            <Switch>
<Route path='/auth' component={Quiz}/>
<Route path='/quiz-creactor' component={Quiz}/>
<Route path='/quiz/:id' component={Quiz}/>
<Route path='/' component={Quiz}/>
            </Switch>
            <Quiz/>
        </Layout>
    );
}

export default App;
