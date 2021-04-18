import './App.css';
import {Switch, Route} from 'react-router-dom'
import Layout from "./hoc/Layout/Layout";
import Quiz from "./Containers/Quiz/Quiz";
import QuizList from "./hoc/Containers/QuizList/QuizList";
import QuizCreator from "./hoc/Containers/QuizCreator/QuizCreator";
import Auth from "./hoc/Containers/Auth/Auth";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path='/auth' component={Auth}/>
                <Route path='/quiz-creactor' component={QuizCreator}/>
                <Route path='/quiz/:id' component={Quiz}/>
                <Route path='/' component={QuizList}/>
            </Switch>
            <Quiz/>
        </Layout>
    );
}

export default App;
