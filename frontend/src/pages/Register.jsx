import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo } from "../components";
import FormRow from "../components/FormRow";

function Register() {
    return (
        <>
            <Wrapper>
                <form className="form" action="">
                    <Logo />
                    <h4>Register</h4>
                    <FormRow
                        type="text"
                        name="name"
                        labelText="First Name"
                        defaultValue="Alex"
                    />
                    <FormRow
                        type="text"
                        name="lastName"
                        labelText="Last Name"
                        defaultValue="Mesza"
                    />
                    <FormRow
                        type="text"
                        name="location"
                        defaultValue="Melykut"
                    />
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

                    <button type="submit" className="btn btn-block">
                        Submit
                    </button>
                    <p>
                        Already a member?
                        <Link to="/login" className="member-btn">
                            Login
                        </Link>
                    </p>
                </form>
            </Wrapper>
        </>
    );
}
export default Register;
