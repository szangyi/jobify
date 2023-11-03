import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo } from "../components";
import FormRow from "../components/FormRow";

const Login = () => {
    return (
        <>
            <Wrapper>
                <form className="form" action="">
                    <Logo />
                    <h4>Login</h4>
                    <FormRow
                        type="email"
                        name="email"
                        defaultValue="szangyi@gmail.com"
                    />
                    <FormRow
                        type="password"
                        name="password"
                        defaultValue="1234"
                    />
                      <button type="button" className="btn btn-block">
                        Submit
                    </button>
                    <button type="button" className="btn btn-block">
                        Explore the app
                    </button>
                    <p>
                        Not a member yet?
                        <Link to="/register" className="member-btn">
                            Register
                        </Link>
                    </p>
                </form>
              
            </Wrapper>
        </>
    );
};
export default Login;
